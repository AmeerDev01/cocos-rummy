import { _decorator, Label, Node, PageView } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { calBetAmount } from '../type';
import config from '../config';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	positionId?: number,
	/**下注金额 */
	betAmount?: number,
}
export interface IEvent {
	onClose: () => void
}

@ccclass('StarlightV2_RulePanel')
export class StarlightV2_RulePanel extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}
	private basicMagnification = {
		yellow_gem: [5, 15, 40],
		blue_green_gem: [8, 18, 80],
		green_gem: [10, 20, 100],
		blue_gem: [16, 24, 160],
		red_gem: [20, 30, 200],
		star: [30, 40, 240],
		moon: [40, 100, 300],
		heart: [50, 200, 500],
		sun: [200, 500, 1000],
		scatter: [60, 100, 2000],
	}

	protected propertyNode = {
		props_PageView_instroduce_banner: new Node(),
		props_btn_insst5roduce_close: new Node(),
		props_btn_introduce_next: new Node(),
		props_btn_introduce_last: new Node(),
		props_spr_page1: new Node(),
	}

	public props: IProps = {
		positionId: 0,
		betAmount: 0,
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
		if (key === '_setDone') {
			// let betAmount = calBetAmount(this.props.betAmount, this.props.positionId);
			const data = config.betSwitcher[0].amount.find(v => v.positionId === this.props.positionId)
			data && this.renderingRules(data.value);
		}
	}

	private renderingRules(num: number) {
		this.basicMagnification
		for (let i in this.basicMagnification) {
			this.propertyNode.props_spr_page1.children.forEach(item => {
				if (item.name === i) {
					item.getChildByName('Label_rate_num1').getChildByName('label_num').getComponent(Label).string = (this.basicMagnification[i][0] * num).formatAmountWithLetter()
					item.getChildByName('Label_rate_num2').getChildByName('label_num').getComponent(Label).string = (this.basicMagnification[i][1] * num).formatAmountWithLetter()
					item.getChildByName('Label_rate_num3').getChildByName('label_num').getComponent(Label).string = (this.basicMagnification[i][2] * num).formatAmountWithLetter()
				}
			})
		}
	}

	protected bindUI(): void {
	}

	update(deltaTime: number) {

	}
}

