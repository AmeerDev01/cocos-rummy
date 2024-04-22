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

@ccclass('ThorV2_RulePanel')
export class ThorV2_RulePanel extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_PageView_instroduce_banner: new Node(),
		props_btn_insst5roduce_close: new Node(),
		props_btn_introduce_next: new Node(),
		props_btn_introduce_last: new Node(),
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
		this.propertyNode.props_btn_insst5roduce_close.on(Node.EventType.TOUCH_END, () => {
			this.events.onClose();
		})
		this.propertyNode.props_btn_introduce_next.on(Node.EventType.TOUCH_END, () => {
			const pageView = this.propertyNode.props_PageView_instroduce_banner.getComponent(PageView)
			let curPageIdx = pageView.curPageIdx + 1;
			if (curPageIdx >= pageView.getPages().length) {
				curPageIdx = 0;
				// pageView.scrollToPage(curPageIdx, 0);
				pageView.setCurrentPageIndex(curPageIdx);
			} else {
				pageView.setCurrentPageIndex(curPageIdx);
			}
		})
		this.propertyNode.props_btn_introduce_last.on(Node.EventType.TOUCH_END, () => {
			const pageView = this.propertyNode.props_PageView_instroduce_banner.getComponent(PageView)
			let curPageIdx = pageView.curPageIdx - 1;
			if (curPageIdx < 0) {
				curPageIdx = pageView.getPages().length - 1;
				// pageView.scrollToPage(curPageIdx, 0);
				pageView.setCurrentPageIndex(curPageIdx);
			} else {
				pageView.setCurrentPageIndex(curPageIdx);
			}
		})
	}

	protected useProps(key: keyof IProps | '_setDone', value: { pre: any, cur: any }) {
	}

	protected bindUI(): void {
	}

	update(deltaTime: number) {

	}
}

