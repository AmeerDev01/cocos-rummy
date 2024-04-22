import { _decorator, Node, PageView } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
}
export interface IEvent {
	onClose: () => void
}

@ccclass('DragonV2_RulePanel')
export class DragonV2_RulePanel extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_helpPage: new Node(),
		props_btnClose: new Node(),
		// props_btnRight: new Node(),
		// props_btnLeft: new Node(),
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
			this.events.onClose();
		})
		// this.propertyNode.props_btnRight.on(Node.EventType.TOUCH_END, () => {
		// 	const pageView = this.propertyNode.props_helpPage.getComponent(PageView)
		// 	let curPageIdx = pageView.curPageIdx + 1;
		// 	if (curPageIdx >= pageView.getPages().length) {
		// 		curPageIdx = 0;
		// 		// pageView.scrollToPage(curPageIdx, 0);
		// 		pageView.setCurrentPageIndex(curPageIdx);
		// 	} else {
		// 		pageView.setCurrentPageIndex(curPageIdx);
		// 	}
		// })
		// this.propertyNode.props_btnLeft.on(Node.EventType.TOUCH_END, () => {
		// 	const pageView = this.propertyNode.props_helpPage.getComponent(PageView)
		// 	let curPageIdx = pageView.curPageIdx - 1;
		// 	if (curPageIdx < 0) {
		// 		curPageIdx = pageView.getPages().length - 1;
		// 		// pageView.scrollToPage(curPageIdx, 0);
		// 		pageView.setCurrentPageIndex(curPageIdx);
		// 	} else {
		// 		pageView.setCurrentPageIndex(curPageIdx);
		// 	}
		// })
	}

	protected useProps(key: keyof IProps | '_setDone', value: { pre: any, cur: any }) {
	}

	protected bindUI(): void {
	}

	update(deltaTime: number) {

	}
}

