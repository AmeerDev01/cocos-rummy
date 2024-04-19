import { _decorator, assert, Button, Component, instantiate, Label, Layout, Node, Prefab, ProgressBar, sp, Sprite, SpriteFrame, sys, UITransform } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import { HallGameGateType, subGameList, SubGameRunState } from '../config'
import { baseBoardView, bundleCommon, global, hallAudio, sourceManageSeletor } from '../index';
import { SkeletalPathDefine } from '../sourceDefine/skeletalDefine';
import BundleSplit from '../../utils/BundleSplit';
import { addToastAction, setLoadingAction, setSubGameInfoAction, setSubGameRunState } from '../store/actions/baseBoard';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import { lang } from '../index';
import { DEV } from 'cc/env';
import { getPackageName } from '../../common/bridge';
const { ccclass, property } = _decorator;

export interface IState {
	isdownLoaded?: boolean
}

export interface IProps {
	useVip: number,
	gamesIds?: Array<number>,
	activeSubGameInfo?: HallGameGateType
}
export interface IEvent {
	/**此图标被点击 */
	onTouchInto?: (gameInfo: HallGameGateType) => void
}

@ccclass('Hall_SubGameGate')
export class Hall_SubGameGate extends BaseComponent<IState, IProps, IEvent> {
	start() { }
	private gameGateItemNodeList: { key: number, node: Node }[] = []
	/**进度条的初始值（用于支持多阶段加载的情况） */
	private loadingStart: number = 0.02
	protected propertyNode = {
		props_gameItem_template: new Node()
	}

	public props: IProps = {
		useVip: 0,
		gamesIds: [],
		activeSubGameInfo: null
	}

	public events: IEvent = {
		onTouchInto: () => { }
	}

	protected initState() {
		return {}
	}

	protected bindEvent(): void {

	}

	protected useProps(key: keyof IProps, value: { pre: Partial<IState>, cur: Partial<IState> }) {
		if (key === "gamesIds") {
			// 实例化界面
			this.props.gamesIds.forEach(async gameId => {
				if (gameId) {
					const hallGameGate: HallGameGateType = subGameList.find(i => i.gameId === gameId)
					if (!hallGameGate) {
						return
					}
					// 根据
					const gameGateItemNode: Node = instantiate(this.propertyNode.props_gameItem_template)
					this.node.addChild(gameGateItemNode)
					gameGateItemNode.active = true
					gameGateItemNode.on(Node.EventType.TOUCH_END, () => {
						this.openGateGame(gameId)
					})

					hallGameGate.hotMark && (gameGateItemNode.getChildByName("hot_jiaobiao").active = true)
					gameGateItemNode.getChildByName("gameSkeleton").active = true
					gameGateItemNode.getChildByName("spr_word").active = true
					gameGateItemNode.getChildByName("download_icon").active = !this.downLoadState(gameId)
					gameGateItemNode.getChildByName("gameSkeleton").getComponent(sp.Skeleton).skeletonData = (await sourceManageSeletor()
						.getFileAsync(this.props.gamesIds.length === 1 ? hallGameGate.fileNameLarge : hallGameGate.fileNameSmall, sp.SkeletonData)).source
					gameGateItemNode.getChildByName("gameSkeleton").getComponent(sp.Skeleton).animation = "animation"
					gameGateItemNode.getChildByName("spr_word").getComponent(Sprite).spriteFrame = (await sourceManageSeletor()
						.getFileAsync(hallGameGate.nameSprite[this.props.gamesIds.length - 1], SpriteFrame)).source
					this.gameGateItemNodeList.push({ key: gameId, node: gameGateItemNode })
					if (hallGameGate.vipMark > this.props.useVip) {
						gameGateItemNode.getChildByName("vipWrap").active = true
						const node = gameGateItemNode.getChildByName("vipWrap").getChildByName("vip_jiaobiao").getChildByName("label_vipLevel")
						node && (node.getComponent(Label).string = `VIP${hallGameGate.vipMark}`)
						gameGateItemNode.getChildByName("download_icon").active = false
					}
				} else {
					//做个占位
					const gameGateItemNode: Node = instantiate(this.propertyNode.props_gameItem_template)
					gameGateItemNode.active = true
					this.node.addChild(gameGateItemNode)
				}
			})
		}
		if (key === "activeSubGameInfo") {
			// console.log('activeSubGameInfo', this.props.activeSubGameInfo.runState)
			let isChoose: boolean = false
			this.props.gamesIds.forEach(gameId => {
				if (gameId && !isChoose) {
					//this.progressBar必须有值，才正确选中了对象，因为gameId是有重复的
					const target = this.gameGateItemNodeList.find(item => item.key === gameId)
					if (target) {
						const progressBarWrap = target.node.getChildByName("loadWrap")
						if (this.props.activeSubGameInfo && this.props.activeSubGameInfo.gameId === gameId && progressBarWrap) {
							isChoose = true
							this.setLoadingState(gameId, 0, false)
							if (this.props.activeSubGameInfo.runState === SubGameRunState.RUN) {
								this.downLoadState(gameId, true)
								target.node.getChildByName("download_icon").active = false
							}
						}
					}
				}
			})
		}
	}

	public openGateGame(gameId: number) {
		const isH5 = !DEV && getPackageName() === 'web' && window['installBundle']
		if (window['onLoadingBundleName']) {
			global.hallDispatch(addToastAction({ content: lang.write(k => k.PersonCenterModule.PersonCenterSumbit, {}, { placeStr: "请稍后" }) }))
			return
		}
		window['onLoadingBundleName'] = gameId
		const hallGameGate: HallGameGateType = subGameList.find(i => i.gameId === gameId)
		hallAudio.playOneShot(SoundPathDefine.GAME_CLICK)
		if (hallGameGate.runState === SubGameRunState.CLOSE) {
			hallGameGate.runState = SubGameRunState.INIT
		} else {
			return
		}
		this.setLoadingState(gameId, 0)
		const loadGame = () => {
			BundleSplit.getRemoteBundle(hallGameGate, (curr, total) => {
				// this.setLoadingState(gameId, 0.2 * curr / total)
			}).then((bundle) => {
				window['onLoadingBundleName'] = undefined
				this.setLoadingState(gameId, this.loadingStart, true, isH5 ? 0.5 : 1)
				baseBoardView.comp.beginInitSubGame(hallGameGate)
			}).catch(e => {
				window['onLoadingBundleName'] = undefined
				this.dispatch(addToastAction({ content: e }))
				hallAudio.playOneShot(SoundPathDefine.ERROR)
				this.setLoadingState(gameId, 0, false, isH5 ? 0.5 : 1)
			})
		}
		if (isH5) {
			window['installBundle'](hallGameGate.bundleName)
			window['onBundleInstallProgress'] = (bundleName: string, progress: number) => {
				if (progress === 1) {
					loadGame()
					this.setLoadingState(gameId, 1, true, 0.5)
					this.loadingStart = 0.5
				} else {
					this.setLoadingState(gameId, progress, true, 0.5)
				}
			}
		} else {
			loadGame()
		}
	}

	/**
	 * 设置加载的进度状态，也可同时控制进度框的显示隐藏
	 * @param gameId 子游戏id
	 * @param progress 进度
	 * @param isShow 是否显示进度框
	 * @param progressRatio 传入进度值的打折量
	 * @returns 
	 */
	public setLoadingState(gameId: number, progress: number, isShow: boolean = true, progressRatio: number = 1) {
		// console.log(gameId, progress)
		const gameGateItemNode = this.gameGateItemNodeList.find(item => item.key === gameId).node
		const progressBarWrap = gameGateItemNode.getChildByName("loadWrap")
		const progressBar = progressBarWrap.getChildByName("DownloadPb").getChildByName("progressBar").getComponent(ProgressBar)
		progressBarWrap.active = isShow
		progressBar.progress = this.loadingStart + progress * progressRatio
		!isShow && (subGameList.find(i => i.gameId === gameId).runState = SubGameRunState.CLOSE)
		return progressBarWrap
	}

	/**
	 * 获取是否已经下载
	 * @param gameId 子游戏ID
	 * @param set 获取到没有下载结果时是否要重设
	 * @returns 
	 */
	private downLoadState(gameId: number, set: boolean = false) {
		!sys.localStorage.getItem('download') && sys.localStorage.setItem('download', '[]')
		const loadList: Array<{ gameId: number, md5: string }> = JSON.parse(sys.localStorage.getItem('download'))
		const hallGameGate: HallGameGateType = subGameList.find(i => i.gameId === gameId)
		const result = loadList.some(item => item.gameId === gameId && item.md5 === hallGameGate.md5)
		if (!result && set) {
			const target = loadList.find(item => item.gameId === gameId)
			target ? (target.md5 = hallGameGate.md5) : loadList.push({ gameId, md5: hallGameGate.md5 })
			sys.localStorage.setItem('download', JSON.stringify(loadList))
		}
		return result
	}

	protected bindUI(): void {
		this.propertyNode.props_gameItem_template.active = false
		this.useState((key, value) => {
			if (value.pre === true) {

			}
		}, ["isdownLoaded"])
	}

	update(deltaTime: number) {

	}
}

