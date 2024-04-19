import { _decorator, Button, Component, Node, sys, tween, UITransform, Vec3 } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import { config } from '../config';
import { getPackageName } from '../../common/bridge';
import { getNodePositionInCanvas } from '../../utils/tool';
import { hallAudio } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;

export interface IState {

}
export interface IProps {
}
export interface IEvent {
	/**打开链接前要做的事情，return打开的地址，返回空字符则按照默认链接打开 */
	preGoToDownLoad: () => string
}
@ccclass('Hall_AppDownLoadGuide')
export class Hall_AppDownLoadGuide extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	protected propertyNode = {
		props_blockBg: new Node(),
		props_spr_guide_bg: new Node(),
		props_downLoad_btu: new Button(),
		props_btn_off: new Button(),
		props_btn_download: new Button()
	}

	public props: IProps = {
	}

	public events: IEvent = {
		preGoToDownLoad: () => ""
	}

	protected initState() {
		return {}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_off.node.on(Node.EventType.TOUCH_END, () => {
			this.downLoadPanelTroggle(false)
		})
		this.propertyNode.props_btn_download.node.on(Node.EventType.TOUCH_END, () => {
			this.gotoDownload()
		})
		this.propertyNode.props_downLoad_btu.node.on(Node.EventType.TOUCH_END, () => {
			this.downLoadPanelTroggle(true)
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {

	}

	protected bindUI(): void {
		// const isGuide = (sys.os === sys.OS.ANDROID && getPackageName() === 'web') || (sys.os === sys.OS.IOS && !window.navigator['standalone']) || sys.os === sys.OS.OSX || sys.os === sys.OS.WINDOWS
		// this.propertyNode.props_downLoad_btu.node.active = isGuide
		// this.propertyNode.props_blockBg.active = isGuide
	}
	private downLoadPanelTroggle(isShow: boolean) {
		if (!isShow) {
			const targetNodePosition = getNodePositionInCanvas(this.propertyNode.props_downLoad_btu.node)
			const { x, y, z } = this.propertyNode.props_spr_guide_bg.position
			this.downLoadBtuTroggle(true)
			tween(this.propertyNode.props_spr_guide_bg).to(0.2, { position: targetNodePosition, scale: new Vec3(0, 0, 0) }).call(() => {
				this.propertyNode.props_blockBg.active = false
			}).start()
		} else {
			this.downLoadBtuTroggle(false)
			this.propertyNode.props_blockBg.active = true
			tween(this.propertyNode.props_spr_guide_bg).to(0.2, { position: new Vec3(0, 0, 0), scale: new Vec3(1, 1, 1) }).start()
		}
	}
	private downLoadBtuTroggle(isShow: boolean) {
		const { x, y, z } = this.propertyNode.props_downLoad_btu.node.position
		if (isShow) {
			tween(this.propertyNode.props_downLoad_btu.node).to(0.3, { position: new Vec3(x + this.propertyNode.props_downLoad_btu.node.getComponent(UITransform).width, y, z) }).start()
		} else {
			tween(this.propertyNode.props_downLoad_btu.node).to(0.3, { position: new Vec3(x - this.propertyNode.props_downLoad_btu.node.getComponent(UITransform).width, y, z) }).start()
		}
	}
	private gotoDownload() {
		const openUrl = this.events.preGoToDownLoad()
		sys.openURL(openUrl || (sys.os === sys.OS.IOS ? config.appleAppDumpUrl : `${config.appDumpUrl}?pkgId=` + getPackageName()))
	}
	update(deltaTime: number) {

	}
}

