import { native, sys } from "cc";
import { config } from "../hall/config";

export class DownloadManagerGame {
	private jsbAssetManager: native.AssetsManager;
	private isDownloading: boolean;
	private isCanRetry: boolean = true;
	private currentModule: string = null;

	private nativeManifest: native.Manifest = null;
	private needUpdateCallback: Function;
	private progressCallback: Function;
	private compeleteCallback: Function;
	private failCallback: Function;

	public downloadList: Array<string> = null;
	private downloadIndex: number = 0;


	private CompareVersion(versionA: string, versionB: string): number {
		var vA = versionA.split('.');
		var vB = versionB.split('.');
		console.log("versionA=" + versionA + "  versionB=" + versionB)
		for (var i = 0; i < vA.length; ++i) {
			var a = parseInt(vA[i]);
			var b = parseInt(vB[i]) || 0;
			if (a === b) {
				continue;
			}
			else {
				return a - b;
			}
		}
		if (vB.length > vA.length) {
			return -1;
		}
		else {
			return 0;
		}
	}

	private SetVerifyCallback(path: string, asset: native.ManifestAsset): boolean {
		if (!native.fileUtils.isFileExist(path)) {
			return true;
		}
		var data = native.fileUtils.getDataFromFile(path);
		if (data) {
			data = data.slice(0, 1024);
			//var curMD5 = MD5(data); 
			//console.log(path, asset.md5, curMD5)
		}
		return true
	}

	private GetModulePath(): string {
		return native.fileUtils.getWritablePath() + "remote/" + this.currentModule + "/";
	}

	private GetModuleManifestUrl(): string {
		let path = this.GetModulePath() + "/project.manifest";
		console.log("   GetModuleManifestUrl :", path);
		if (native.fileUtils.isFileExist(path)) {
			return path;
		}
		console.log("-------- GetModuleManifestUrl :", "assets/" + this.currentModule + "/project.manifest");
		return "assets/" + this.currentModule + "/project.manifest";
	}

	private MakeDefaultManifest(): string {
		//let moduleRoot = config.gameBundleUrl + this.currentModule + "/";
		let moduleRoot = `${config.gameBundleUrl}/subGame/compressed/${this.currentModule}/`;
		if(sys.os === sys.OS.IOS||sys.os === sys.OS.OSX ){
			moduleRoot = `${config.gameBundleUrl}/iosSubGame/compressed/${this.currentModule}/`;
		}
		let manifestString = JSON.stringify({
			version: '0.0.0',
			packageUrl: moduleRoot,
			remoteVersionUrl: moduleRoot + "version.manifest",
			remoteManifestUrl: moduleRoot + "project.manifest",
			assets: {},
			searchPaths: [],
			compressed: true
		})
		console.log("热跟新数据" + manifestString);
		return manifestString;
	}


	public DownloadMultiple(modules: Array<string>,
		progressCallback: Function,
		compeleteCallback: Function,
		moduleCallback: Function = null,
		failCallBack?: Function): void {

		this.failCallback = failCallBack;
		if (this.downloadList && this.downloadList.length > 0) {
			this.failCallback && this.failCallback();
			console.log("已经有队列存在")
			return;
		} else {
			this.downloadList = modules;
		}
		this.BatchDownload((downloaded: number, total: number) => {
			console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", downloaded, total, this.downloadList[this.downloadIndex]);
			progressCallback && progressCallback(downloaded, total, this.downloadIndex, this.downloadList[this.downloadIndex]);
		}, () => {
			console.log("compeleteCallback");
			this.downloadIndex = 0;
			this.downloadList = [];
			compeleteCallback && compeleteCallback(this.downloadList[this.downloadIndex]);
		}, moduleCallback);
	}

	private BatchDownload(progressCallback: Function, compeleteCallback: Function, moduleCallback: Function) {
		let bundle = this.downloadList[this.downloadIndex];
		if (!bundle) {
			compeleteCallback && compeleteCallback();
			return;
		}
		this.Download(bundle, null, (downloaded: number, total: number) => {
			console.log("!!!!!!!!!!!!!!!!!", downloaded, total, bundle)
			progressCallback && progressCallback(downloaded, total);
			//Catfish.EventMgr.Dispatch(CatfishEvent.GAME_MODULE_DOWNLOADING, downloaded, total, bundle);
		}, () => {
			if (this.downloadIndex < this.downloadList.length) {
				progressCallback && progressCallback(100, 100);
			}
			++this.downloadIndex;
			moduleCallback && moduleCallback(bundle);
			//Catfish.EventMgr.Dispatch(CatfishEvent.GAME_MODULE_DOWNLOADED, bundle);
			this.BatchDownload(progressCallback, compeleteCallback, moduleCallback);
		})
	}


	public Download(module: string, needUpdateCallback: Function, progressCallback: Function, compeleteCallback: Function): void {
		if (this.currentModule) {
			console.log("一次只能下载一个")
			return;
		}
		this.isDownloading = false;
		this.jsbAssetManager = null;
		if (!this.jsbAssetManager) {
			this.currentModule = module;
			this.needUpdateCallback = needUpdateCallback;
			this.progressCallback = progressCallback;
			this.compeleteCallback = compeleteCallback;
			let storagePath = this.GetModulePath();
			let manifestUrl = this.GetModuleManifestUrl();
			this.jsbAssetManager = new native.AssetsManager(manifestUrl, storagePath, this.CompareVersion.bind(this));
			this.jsbAssetManager.setVerifyCallback(this.SetVerifyCallback.bind(this));
			this.CheckDownload();
		}
	}

	public Retry(): void {
		if (!this.isDownloading && this.isCanRetry) {
			this.isCanRetry = false;
			this.isDownloading = true;
			this.jsbAssetManager.downloadFailedAssets();
		}
	}
	public RestartEngine(): void {
		this.jsbAssetManager.setEventCallback(null);
		// Prepend the manifest's search path
		var searchPaths = native.fileUtils.getSearchPaths();
		var newPaths = this.nativeManifest.getSearchPaths();
		console.log(JSON.stringify(newPaths));
		//Array.prototype.unshift.apply(searchPaths, newPaths);
		this.SetSearchPaths(searchPaths, newPaths);

	}

	public SetSearchPaths(searchPaths, newPaths) {
		var res = [];
		var json = {};
		newPaths.push(native.fileUtils.getWritablePath())
		Array.prototype.unshift.apply(res, newPaths);
		for (var i = 0; i < searchPaths.length; i++) {
			if (!json[searchPaths[i]]) {
				res.push(searchPaths[i]);
				json[searchPaths[i]] = 1;
			}
		}
		sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(res));
		native.fileUtils.setSearchPaths(res);
		console.log("lujing -- " + res);
	}

	private CheckDownload(): void {
		if (this.isDownloading) {
			console.log('Checking or updating ...');
			return;
		}
		if (this.jsbAssetManager.getState() === native.AssetsManager.State.UNINITED) {
			console.log("----- CheckDownload  loadLocalManifest");

			let url = this.GetModuleManifestUrl();
			this.jsbAssetManager.loadLocalManifest(url);
		}
		if (!this.jsbAssetManager.getLocalManifest() || !this.jsbAssetManager.getLocalManifest().isLoaded()) {
			console.log('Failed to load local manifest ...');
			var manifest = new native.Manifest(this.MakeDefaultManifest(), this.GetModulePath());
			this.jsbAssetManager.loadLocalManifest(manifest, this.GetModulePath());
		}

		this.nativeManifest = this.jsbAssetManager.getLocalManifest();
		this.jsbAssetManager.setEventCallback(this.CheckDownloadCallback.bind(this));

		this.jsbAssetManager.checkUpdate();
		console.log('checkUpdate');
		this.isDownloading = true;
	}

	private CheckDownloadCallback(event: native.EventAssetsManager): void {
		console.log('Code: ' + event.getEventCode());
		let eventCode = event.getEventCode();
		switch (eventCode) {
			case native.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
				console.log('No local manifest file found, hot update skipped.');
				break;
			case native.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
			case native.EventAssetsManager.ERROR_PARSE_MANIFEST:
				console.log("Fail to download manifest file, hot update skipped.");
				this.isDownloading = false;
				this.CheckDownload()
				return
			case native.EventAssetsManager.ALREADY_UP_TO_DATE:
				console.log("Already up to date with the latest remote version.");
				break;
			case native.EventAssetsManager.NEW_VERSION_FOUND:
				if (this.jsbAssetManager.getTotalBytes() == 0) {
					this.isDownloading = false;
					this.jsbAssetManager.setEventCallback(null);
					this.DownloadEnded()
					return
				}
				this.needUpdateCallback && this.needUpdateCallback()
				console.log('New version found, please try to update. (' + this.jsbAssetManager.getTotalBytes() + ')');
				break;
			default:
				return;
		}

		this.isDownloading = false;
		this.jsbAssetManager.setEventCallback(null);
		if (event.getEventCode() == native.EventAssetsManager.NEW_VERSION_FOUND) {
			this.StartDownload();
		} else {
			this.DownloadEnded();
		}
	}

	private StartDownload(): void {
		if (this.jsbAssetManager && !this.isDownloading) {
			this.jsbAssetManager.setEventCallback(this.DownloadCallback.bind(this));
			if (this.jsbAssetManager.getState() === native.AssetsManager.State.UNINITED) {
				// Resolve md5 url
				var url = this.GetModuleManifestUrl();
				console.log("@@@@@@@@URL_____StartDownload", native.fileUtils.isFileExist(url));
				this.jsbAssetManager.loadLocalManifest(url);
			}

			this.jsbAssetManager.update();
			console.log("StartDownload start  update")
			this.isDownloading = true;
		}
	}

	private DownloadCallback(event: native.EventAssetsManager): void {
		var isDownloadEned = false;
		var failed = false;
		let error = ""
		let eventCode = event.getEventCode();
		switch (eventCode) {
			case native.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
				failed = true;
				break;
			case native.EventAssetsManager.UPDATE_PROGRESSION:
				this.progressCallback && this.progressCallback(event.getDownloadedBytes(), event.getTotalBytes())
				break;
			case native.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
			case native.EventAssetsManager.ERROR_PARSE_MANIFEST:

				console.log('Fail to download manifest file, hot update skipped.');
				this.StartDownload()
				return

			case native.EventAssetsManager.ALREADY_UP_TO_DATE:
				console.log('Already up to date with the latest remote version.');
				failed = true;
				break;
			case native.EventAssetsManager.UPDATE_FINISHED:
				console.log('Update finished. ' + event.getMessage());
				isDownloadEned = true;
				break;
			case native.EventAssetsManager.UPDATE_FAILED:
				this.isDownloading = false;
				this.isCanRetry = true;
				this.failCallback && this.failCallback('Update failed. ' + event.getMessage());
				break;
			case native.EventAssetsManager.ERROR_UPDATING:
				this.failCallback && this.failCallback('Asset update error: ' + event.getCURLECode() + " " + event.getAssetId() + ', ' + event.getMessage());
				break;
			case native.EventAssetsManager.ERROR_DECOMPRESS:
				console.log(event.getMessage());
				break;
			default:
				break;
		}

		if (this.isCanRetry) {
			this.Retry();
			return;
		}


		if (failed) {
			this.jsbAssetManager.setEventCallback(null);
			this.isDownloading = false;
			this.compeleteCallback && this.compeleteCallback()
		}

		if (isDownloadEned) {
			this.DownloadEnded();
		}
	}

	public DownloadEnded(): void {
		this.RestartEngine();
		if (this.jsbAssetManager) {
			this.jsbAssetManager.setEventCallback(null);
			this.jsbAssetManager = null;
			delete this.jsbAssetManager;
		}
		this.currentModule = null;
		this.isDownloading = false;
		this.compeleteCallback && this.compeleteCallback();
	}


} 