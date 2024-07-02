import { _decorator, Asset, assetManager, Component, director, dynamicAtlasManager, game, Label, log, macro, native, Node, ProgressBar, screen, sys, view } from 'cc';
import Hot, { HotOptions } from '../../utils/HotUpdate';
import App from '../../App';
import { GameConfig, getIsTest } from '../../config/GameConfig';
import { config, initConfig } from '../../hall/config';
import { fetcher, lang } from '../../hall';
import { NATIVE } from 'cc/env';
import { BridgeCode, nativeDownloadApk, getAppVersionName, getPackageName, hideNativeSplash, installApk, getRedirectUrl, showNativeSplash } from '../bridge';
import { LanguageItemType } from '../../language/languagePkg';
import { ApiUrl } from '../../hall/apiUrl';
const { ccclass, property } = _decorator;

// macro.CLEANUP_IMAGE_CACHE = false;
// dynamicAtlasManager.enabled = true;
@ccclass('Common_HotUpdate')
export class Common_HotUpdate extends Component {
	@property(ProgressBar)
	updateProgress: ProgressBar = null

	@property({ displayName: 'project.manifest', type: Asset })
	manifest: Asset = null;
	@property({ displayName: 'project.versionManifest', type: Asset })
	versionManifest: Asset = null;

	@property(Label)
	versionLabel: Label = null

	@property(Label)
	tipsLabel: Label = null

	@property(Label)
	logLabel: Label = null

	@property(Node)
	updateConfirm: Node = null

	@property(Label)
	updateContent: Label = null
	private versionInfo = {
		local: "",
		server: ""
	}

	private _storagePath: string;
	private localProjectManifest: native.Manifest;
	start() {
		window['pageDone'] && window['pageDone']()
		console.warn("envKsy", GameConfig.envKey)
	}
	protected onLoad(): void {
		lang.use(getIsTest() ? LanguageItemType.ZH : LanguageItemType.EN)
		if (NATIVE) {
			this._storagePath = ((native.fileUtils ? native.fileUtils.getWritablePath() : "/") + 'remote-asset')
			hideNativeSplash();
			native.bridge.onNative = (arg0: string, arg1: string) => {
				if (BridgeCode.APP_VERSION === arg0) {
					GameConfig.appLocalVersion = arg1
					this.initGame()
				}
			}
			if(sys.os === sys.OS.OSX ){
				GameConfig.appLocalVersion = 'V1.0.1'
				this.initGame();
				return;
			}
			getAppVersionName()
		} else {
			sys.isMobile && screen.requestFullScreen();
			this.initGame()
		}
	}

	/**版本号判断 */
	shouldUpdate(oldVersion, newVersion) {
		const trnsfer = (version: string) => {
			const arr = version.split('.')
			const frist = ((+arr[0]) * 10) + ""
			const second = (arr[1] === '0' ? '00' : (+arr[1]) * 10) + ""
			const thrid = (arr[2] === '0' ? '00' : (+arr[2]) * 10) + ""
			return +(frist + second + thrid)
		}
		const oldtansferVersion = trnsfer(oldVersion)
		const newtansferVersion = trnsfer(newVersion)
		return newtansferVersion > oldtansferVersion
	}

	initGame() {
		console.log("initGame~")
		initConfig().then((_config) => {
			/**修改热更地址 */
			if(sys.os === sys.OS.IOS||sys.os === sys.OS.OSX){
				let remoteUrl = _config.hotUpdateUrl;
				if(remoteUrl){
					remoteUrl=remoteUrl.replace('appHotUpdate','static')
					remoteUrl = `${remoteUrl}/iosHotUpdate/`;
					this.handleManifestFile(remoteUrl);
				}
				//this.init()
				this.enterGame()
				return;
			}else{
				_config.hotUpdateUrl && this.handleManifestFile(_config.hotUpdateUrl)
			}
			this.getPackageInfo().then((content) => {
				//有限判断AB面开启状态
				if (content && content.abState) {
					director.loadScene("game")
				} else {
					let isApkUpdate = NATIVE;
					// 要 isApkUpdate 为false，才表示设置了该值，返回一个undefined也要更新包
					if (NATIVE && content && content.isApkUpdate === false) {
						isApkUpdate = false;
					}
					if (isApkUpdate && this.shouldUpdate(GameConfig.appLocalVersion, config.appOnlineVersion)) {
						//弹出更新提示
						this.initConfirm([lang.write(k => k.UpdateModule.GameConfig, { version: config.appOnlineVersion },
							{ placeStr: `请更新App至最新版(${config.appOnlineVersion})` }), config.upgradeDesc], () => {
								sys.openURL(`${config.shareUrl}?pkgId=${getPackageName()}&version=${config.appOnlineVersion}`)
								// window.setTimeout(() => {
								// 	native.bridge.onNative = (arg0: string, arg1: string) => {
								// 		if (BridgeCode.DOWNLOAD_APK === arg0) {
								// 			if ('failed' === arg1) {
								// 				this.initConfirm([lang.write(k => k.UpdateModule.RestartProgram), config.upgradeDesc], () => {
								// 					this.downloadApkHandle(`${config.appDumpUrl}?ap=${getPackageName()}&version=${config.appOnlineVersion}`, config.appOnlineVersion)
								// 				}, () => {
								// 					game.end()
								// 				})
								// 			}
								// 		}
								// 	}

								// 	this.downloadApkHandle(config.appDumpUrl, config.appOnlineVersion)
								// }, 10)
							}, () => {
								if (config.forceUpgrade) {
									game.end()
								} else {
									this.init()
								}
							})
					} else {
						this.init()
					}
				}
			})
		}).catch((e) => {
			if (e === 'config_error') {
				this.initConfirm([lang.write(k => k.InitGameModule.GameBoardInitAndGotoUrl)], () => {
					game.restart()
					showNativeSplash();
					return true
				}, () => {
					// sys.openURL('https://hugewin777d.com/')
				})
			}
		})
	}

	update(deltaTime: number) { }

	private enterGame() {
		this.updateProgress.progress = 0
		window.setTimeout(() => {
			App.Instance().start()
			// effect1(this.node).out().then(() => {
			// 	App.Instance().start()
			// })
		}, 500)
	}

	private initConfirm(content: string[], okFn: () => any, cancle?: () => any) {
		this.updateConfirm.active = true
		this.updateConfirm.getChildByName("Label_updata_tips").getComponent(Label).string = content[0]
		content[1] && (this.updateConfirm.getChildByName("Label_updata_content").getComponent(Label).string = content[1])
		this.updateConfirm.getChildByName("btn_updata_ok").once(Node.EventType.TOUCH_END, () => {
			if (!okFn()) {
				this.updateConfirm.active = false
			}
		})
		this.updateConfirm.getChildByName("btn_updata_cancel").once(Node.EventType.TOUCH_END, () => {
			this.updateConfirm.active = false
			if (!cancle) {
				this.updateConfirm.active = false
			} else if (cancle && !cancle()) {
				this.updateConfirm.active = false
			}
			// game.end()
		})
	}

	private init() {
		const hotInstance = new Hot(this.logLabel)
		// this.loadingLab.string = TextCfg.getTextUi(5012);
		// this._nodes["spr_loading"].getComponent(Label).string = TextCfg.getTextUi(5018);

		let options = new HotOptions();
		options.OnVersionInfo = (data) => {
			console.log('OnVersionInfo', JSON.stringify(data || {}))
			let { local, server } = data || {};
			this.versionInfo = data || {}
			this.versionLabel.string = lang.write(k => k.UpdateModule.VersionLabel,
				{ localVersion: local, serverVersion: server },
				{ placeStr: `本地版本:v${local}, 线上版本:v${server}` })

			// if (local > server) {
			// 	let storagePath = ((native.fileUtils ? native.fileUtils.getWritablePath() : '/') + 'remote-asset');
			// 	native.fileUtils.removeDirectory(storagePath)
			// 	this.versionLabel.string += ' &Cache clear'
			// 	console.log('Cache clear')
			// }
		};
		options.OnUpdateProgress = (event: jsb.EventAssetsManager) => {
			let bytes = event.getDownloadedBytes() + '/' + event.getTotalBytes();
			let files = event.getDownloadedFiles() + '/' + event.getTotalFiles();

			let file = event.getPercentByFile().toFixed(2);
			let byte = event.getPercent().toFixed(2);
			let msg = event.getMessage();

			// console.log('[update]: 进度=' + file);
			this.updateProgress.progress = parseFloat(file);
			this.tipsLabel.string = lang.write(k => k.UpdateModule.UpdateProgress, { time: (parseFloat(file) * 100).toFixed(0) },
				{ placeStr: `正在更新中,请耐心等待（${(parseFloat(file) * 100).toFixed(0)}%）...` });
			console.log(msg);
		}
		options.OnNeedToUpdate = (data) => {
			this.initConfirm(
				[lang.write(k => k.UpdateModule.OnNeedToUpdate, { version: this.versionInfo.local + '→' + this.versionInfo.server }, { placeStr: `检测到新版本，确认自动开始更新` })], () => {
					hotInstance.hotUpdate();
				}, () => {
					// this.enterGame();
					game.end()
				})
		};
		options.OnNoNeedToUpdate = () => {
			this.logLabel.string += lang.write(k => k.UpdateModule.DetectCompleted, {}, { placeStr: `检测完成，即将进入游戏>>` })
			this.tipsLabel.string = lang.write(k => k.UpdateModule.DetectComplete, {}, { placeStr: `检测完成，即将进入游戏` })
			// 不需要更新，直接进入游戏
			this.enterGame();
		};
		options.OnUpdateSucceed = () => {
			native.fileUtils.purgeCachedEntries()
			game.restart();
			showNativeSplash();
		};
		options.OnUpdateFailed = (code) => {
			console.log("OnUpdateFailed code: " + code);
			this.tipsLabel.string = lang.write(k => k.UpdateModule.UpdateFail, {}, { placeStr: `更新失败` })
			this.initConfirm([lang.write(k => k.UpdateModule.RestartProgram, {}, { placeStr: `更新失败，是否要重启程序？` })], () => {
				game.restart()
				showNativeSplash();
			}, () => {
				game.end()
			})
		};
		if (sys.isNative) {
			if (!config.isCheckHotUpdate) {
				this.enterGame();
			} else {
				this.logLabel.string += lang.write(k => k.UpdateModule.ClientCheck, {}, { placeStr: `客户端开始检查>>` })
				this.tipsLabel.string = lang.write(k => k.UpdateModule.CheckUpdatedPkg, {}, { placeStr: `检查更新包...` })
				if (this.manifest) {
					hotInstance.init(this.localProjectManifest, this._storagePath, options);
					hotInstance.checkUpdate();
				}
			}
		} else {
			this.tipsLabel.string = lang.write(k => k.UpdateModule.isNative, {}, { placeStr: `非native版本不检查更新，即将进入游戏` })
			this.enterGame();
		}
	}

	private handleManifestFile(newRemotUr: string) {
		if (!NATIVE) return;
		const afterVersionString = this.updateManifestFile(newRemotUr, this._storagePath + '/project.manifest', this.manifest);
		this.loadManifestFile(afterVersionString);

		this.updateManifestFile(newRemotUr, this._storagePath + '/version.manifest', this.versionManifest);
	}

	private loadManifestFile(data: string) {
		this.localProjectManifest = new native.Manifest(data, this._storagePath);
	}

	private updateManifestFile(newRemotUr: string, fileName: string, manifest: Asset) {
		const fileExist = native.fileUtils.isFileExist(fileName)
		console.log('updateManifestFile - filename:' + fileName, 'fileExist: ', fileExist)
		let obj = undefined;
		if (fileExist) {
			let filestring_version = native.fileUtils.getStringFromFile(fileName)
			obj = JSON.parse(filestring_version);
			console.log('updateManifestFile - handleManifestFile ', obj.packageUrl, ' newRemotUr: ', newRemotUr);
		} else {
			obj = JSON.parse(manifest._nativeAsset);
		}
		obj.packageUrl = newRemotUr;
		obj.remoteManifestUrl = newRemotUr + '/project.manifest';
		obj.remoteVersionUrl = newRemotUr + '/version.manifest';
		let afterVersionString = JSON.stringify(obj);
		const res = native.fileUtils.writeStringToFile(afterVersionString, fileName);
		// this.mainfestObj = obj;
		console.log('updateManifestFile - Modify the results of the file: ', fileName, res);
		return afterVersionString;
	}

	private downloadApkHandle(appDumpUrl: string, appOnlineVersion: string) {
		const filePath = ((native.fileUtils ? native.fileUtils.getWritablePath() : "/") + 'apkfiles/HugeWin-' + appOnlineVersion + '.apk');

		let downloader = new native.Downloader();
		//下载失败回调
		downloader.onError = (task: native.DownloadTask, errorCode: number, errorCodeInternal: number, errorStr: string) => {
			console.log("downloader --------- " + errorStr);
		};

		//进度回调
		downloader.onProgress = (task, bytesReceived, totalBytesReceived, totalBytesExpected) => {
			let progress: number = totalBytesReceived / totalBytesExpected; //已经下载的字节数 / 需要下载的总字节数
			this.updateProgress.progress = progress;
			// this.getProgress(progress);
			let bKReceived: string = (totalBytesReceived / 1024).toFixed(1);
			let totalReceived: string = (totalBytesExpected / 1024).toFixed(1);
			// var strProgress: string = "Download APK:" + bKReceived + "kb / " + totalReceived + "kb";
			var strProgress: string = `Download Version ${appOnlineVersion}: ${bKReceived}kb / ${totalReceived}kb`;
			this.tipsLabel.string = strProgress;
		};
		//下载成功回调
		downloader.onSuccess = (task) => {
			// this.updateLabel.string = "Download success!";
			installApk(filePath); //下载成功，执行安装apk操作
		};

		const url = getRedirectUrl(appDumpUrl);
		downloader.createDownloadTask(url, filePath);

		// const apkName = appDumpUrl.substring(appDumpUrl.lastIndexOf("/") + 1);
		// nativeDownloadApk(appDumpUrl, "HugeWin" + appOnlineVersion, "Please be patient while downloading");
		// this.updateProgress.node.active = false;
		// this.tipsLabel.string = `Version ${appOnlineVersion} is being downloading...`;
	}

	/**获得包信息 */
	private getPackageInfo() {
		return new Promise<any>((reslove, reject) => {
			const packageName = getPackageName();
			if (!NATIVE) {
				reslove(undefined);
				return;
			}
			// const tip = () => {
			// 	//弹出更新提示
			// 	this.initConfirm([lang.write(k => k.UpdateModule.GameConfig), config.upgradeDesc], () => {
			// 	}, () => {
			// 		game.end()
			// 	})
			// }

			const url = config.httpBaseUrl + ApiUrl.CHANNEL_PACKAGE + "?number=" + packageName;
			fetch(url).then((response) => {
				if (response.status === 200) {
					response.text().then(text => {
						const data = JSON.parse(text)
						if (data.content) {
							reslove(data.content);
						} else {
							reslove(undefined);
						}
					}).catch(e => {
						reslove(undefined);
						console.log(`get url ${url} failed, text catch, error: ${e}`);
					})
				} else {
					reslove(undefined);
					console.log(`get url ${url} failed, status: ${response.status}`);
				}
			}).catch((e) => {
				reslove(undefined);
				console.log(`get url ${url} failed!!`);
			})
		})
	}
}

