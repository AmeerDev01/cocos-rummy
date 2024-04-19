import { _decorator, Node, PageView } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { GxfcV2_Audio } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
}
export interface IEvent {
	onClose: () => void
}

@ccclass('GxfcV2_RulePanel')
export class GxfcV2_RulePanel extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_btnClose: new Node(),
		props_img_rule_1: new Node(),
		props_img_rule_2: new Node(),
		props_img_rule_3: new Node(),
		props_img_rule_4: new Node(),
		props_img_rule_5: new Node(),
		props_PageView: new PageView(),
		props_indicator:new Node(),
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
			GxfcV2_Audio.playOneShot(SoundPathDefine.btn_click)
			this.events.onClose();
		})
		this.propertyNode.props_img_rule_1.on(Node.EventType.TOUCH_MOVE, () => {
			GxfcV2_Audio.playOneShot(SoundPathDefine.turn)
			this.scrollPageViewListener()

		})
		this.propertyNode.props_img_rule_2.on(Node.EventType.TOUCH_MOVE, () => {
			GxfcV2_Audio.playOneShot(SoundPathDefine.turn)
			this.scrollPageViewListener()

		})
		this.propertyNode.props_img_rule_3.on(Node.EventType.TOUCH_MOVE, () => {
			GxfcV2_Audio.playOneShot(SoundPathDefine.turn)
			this.scrollPageViewListener()
		})
		this.propertyNode.props_img_rule_4.on(Node.EventType.TOUCH_MOVE, () => {
			GxfcV2_Audio.playOneShot(SoundPathDefine.turn)
			this.scrollPageViewListener()
		})
		this.propertyNode.props_img_rule_5.on(Node.EventType.TOUCH_MOVE, () => {
			GxfcV2_Audio.playOneShot(SoundPathDefine.turn)
			this.scrollPageViewListener()
		})
	}

	protected useProps(key: keyof IProps | '_setDone', value: { pre: any, cur: any }) {
	}

	private scrollPageViewListener() {
		if (!this.propertyNode) return
		this.propertyNode.props_PageView.node.on(PageView.EventType.SCROLL_ENDED, (pageView: PageView) => {			
			if (pageView.curPageIdx === 0) {
				pageView.scrollToPage(pageView.getPages().length-5, 0);
			    this.showIndex(0)
			} else if (pageView.curPageIdx + 1 === 2) {
				pageView.scrollToPage(1, 0)
			    this.showIndex(1)
			} else if (pageView.curPageIdx + 1 === 3) {
				pageView.scrollToPage(2, 0)
			    this.showIndex(2)
			}else if (pageView.curPageIdx + 1 === 4) {
				pageView.scrollToPage(3, 0)
			    this.showIndex(3)
			}else if (pageView.curPageIdx + 1 === 5) {
				pageView.scrollToPage(4, 0)
			    this.showIndex(4)
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

