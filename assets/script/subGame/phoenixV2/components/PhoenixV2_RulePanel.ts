import { _decorator, Node, PageView } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { phoenixV2_Audio } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
}
export interface IEvent {
	onClose: () => void
}

@ccclass('PhoenixV2_RulePanel')
export class PhoenixV2_RulePanel extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_btnClose: new Node(),
		props_img_rule_1: new Node(),
		props_img_rule_2: new Node(),
		props_img_rule_3: new Node(),
		props_PageView: new PageView(),
		props_indicator:new Node(),
		props_indicator_toggle1: new Node(),
		props_indicator_toggle2:new Node(),
		props_indicator_toggle3: new Node(),
	}

	public props: IProps = {
	}

	public events: IEvent = {
		onClose: () => { }
	}

	protected initState() {
		return {}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btnClose.on(Node.EventType.TOUCH_END, () => {
			phoenixV2_Audio.playOneShot(SoundPathDefine.BTN_CLICK)
			this.events.onClose();
		})
		this.propertyNode.props_img_rule_1.on(Node.EventType.TOUCH_MOVE, () => {
			phoenixV2_Audio.playOneShot(SoundPathDefine.TURN)
			this.scrollPageViewListener()

		})
		this.propertyNode.props_img_rule_2.on(Node.EventType.TOUCH_MOVE, () => {
			phoenixV2_Audio.playOneShot(SoundPathDefine.TURN)
			this.scrollPageViewListener()

		})
		this.propertyNode.props_img_rule_3.on(Node.EventType.TOUCH_MOVE, () => {
			phoenixV2_Audio.playOneShot(SoundPathDefine.TURN)
			this.scrollPageViewListener()
		})
	}

	protected useProps(key: keyof IProps | '_setDone', value: { pre: any, cur: any }) {
	}

	private scrollPageViewListener() {
		if (!this.propertyNode) return
		this.propertyNode.props_PageView.node.on(PageView.EventType.SCROLL_ENDED, (pageView: PageView) => {			
			if (pageView.curPageIdx === 0) {
				pageView.scrollToPage(pageView.getPages().length - 3, 0);
			    this.showIndex(0)

			} else if (pageView.curPageIdx + 1 === pageView.getPages().length - 1) {
				pageView.scrollToPage(1, 0)
			    this.showIndex(1)

			} else if (pageView.curPageIdx + 1 === pageView.getPages().length) {
				pageView.scrollToPage(2, 0)
			    this.showIndex(2)
			}
			const page = pageView.getPages()[pageView.curPageIdx];
		})
	}

	private showIndex(num) {
		if (!this.propertyNode) return
	    let arr = this.propertyNode.props_indicator.children.filter(v => v.name.startsWith("props_indicator_toggle"));
		arr.forEach((item,i) => {
			if (i === num) {
				item.getChildByName("CheckMark").active = true;
			} else {
				item.getChildByName("CheckMark").active = false;
			}
		})
	}


	protected bindUI(): void {
	}

	update(deltaTime: number) {

	}
}

