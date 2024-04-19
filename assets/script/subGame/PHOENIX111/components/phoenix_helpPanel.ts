import { _decorator, Button, Component, instantiate, Node, PageView } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { playBtnClick, playTurn } from '../index';
import { getNodeByNameDeep } from '../../../utils/tool';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {

}
export interface IEvent {
	closeHandler: () => void
}

@ccclass('phoenix_helpPanel')
export class phoenix_helpPanel extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_btn_insst5roduce_close: new Button(),
		props_img_rule_1: new Node(),
		props_img_rule_2: new Node(),
		props_img_rule_3: new Node(),
		props_indexMark: new Node(),
		props_PageView: new PageView(),
		props_indicator:new Node(),
		props_indicator_toggle1: new Node(),
		props_indicator_toggle2:new Node(),
		props_indicator_toggle3: new Node(),

	}

	public props: IProps = {

	}

	public events: IEvent = {
		closeHandler: () => { }
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {

		this.propertyNode.props_btn_insst5roduce_close.node.on(Button.EventType.CLICK, () => {
			playBtnClick()
			this.events.closeHandler()
		}, true)
		this.propertyNode.props_img_rule_1.on(Node.EventType.TOUCH_MOVE, () => {
			playTurn()
			this.scrollPageViewListener()

		})
		this.propertyNode.props_img_rule_2.on(Node.EventType.TOUCH_MOVE, () => {
			playTurn()
			this.scrollPageViewListener()

		})
		this.propertyNode.props_img_rule_3.on(Node.EventType.TOUCH_MOVE, () => {
			playTurn()
			this.scrollPageViewListener()
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {

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
