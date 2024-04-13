import { Button, EventTouch, Label, Node, Vec3, _decorator, tween } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { ActionType, BtnStatus, BtnType, DeskStatus, FlowInfo, PromptType } from '../type';
import config from '../config';
import { updateAction } from '../store/action/game';
import { rummyRoomChoseView } from '../index';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
	/**流程信息 */
	flowInfo: FlowInfo,
	isShowBtn: boolean,
	/**选择的牌数量 */
	selectCardCount: number,
}
export interface IEvent {
}

@ccclass('Rummy_Footer')
export class Rummy_Footer extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	protected propertyNode = {
		props_button_drop: new Node(),
		props_button_show: new Node(),
		props_button_group: new Node(),
		props_button_discard: new Node(),

		props_label_drop: new Label(),
	}

	private btnList: Node[] = []

	public props: IProps = {
		flowInfo: undefined,
		isShowBtn: false,
		selectCardCount: 0,
	}

	public events: IEvent = {
	}

	private initBtnList() {
		this.btnList = [
			this.propertyNode.props_button_drop, this.propertyNode.props_button_show, this.propertyNode.props_button_group, this.propertyNode.props_button_discard
		]
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_button_drop.on(Node.EventType.TOUCH_END, (e: EventTouch) => {
			if (this.isDisable(e.currentTarget)) return;
			rummyRoomChoseView.getGameMain().showPromptPanel(PromptType.DROP_PROMPT, [30])
		})
		this.propertyNode.props_button_show.on(Node.EventType.TOUCH_END, (e: EventTouch) => {
			if (this.isDisable(e.currentTarget)) return;

			rummyRoomChoseView.getGameMain().showPromptPanel(PromptType.SHOW, [])
		})
		this.propertyNode.props_button_group.on(Node.EventType.TOUCH_END, (e: EventTouch) => {
			if (this.isDisable(e.currentTarget)) return;

			this.dispatch(updateAction({
				actionType: ActionType.GROUP,
				seatIndex: -1,
				params: [],
				time: 0,
			}))
		})
		this.propertyNode.props_button_discard.on(Node.EventType.TOUCH_END, (e: EventTouch) => {
			if (this.isDisable(e.currentTarget)) return;

			this.dispatch(updateAction({
				actionType: ActionType.OUT,
				seatIndex: 0,
				params: [],
				time: 0,
			}))
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (this.node && this.node.isValid) {
			if (key === 'isShowBtn') {
				value.cur ? this.showBtn() : this.hideBtn();
			} else if (key === 'selectCardCount') {
				this.updateDiscardBtn();
				this.updateGroupBtn();
			} else if (key === 'flowInfo') {
				this.updateDiscardBtn();
				this.updateGroupBtn();
				this.updateFlowInfo();
			}
		}
	}

	private updateFlowInfo() {
		// 禁用所有按钮
		if (!this.props.flowInfo) {
			this.updateOpBtnStatus({
				btnType: undefined,
				disable: true,
				time: 0,
			})
			return;
		}
		this.updateOpBtnStatus({
			btnType: BtnType.DROP,
			disable: !this.isMyOp(),
			time: 0,
		})

		this.updateOpBtnStatus({
			btnType: BtnType.SHOW,
			disable: !this.isMyOut(),
			time: 0,
		})

	}

	private updateGroupBtn() {
		const disable = this.props.selectCardCount < 2;

		this.updateOpBtnStatus({
			btnType: BtnType.GROUP,
			disable: disable,
			time: 0,
		})
	}
	private updateDiscardBtn() {
		const disable = !this.isMyOut() || this.props.selectCardCount !== 1;

		this.updateOpBtnStatus({
			btnType: BtnType.DISCARD,
			disable: disable,
			time: 0,
		})
	}

	private updateOpBtnStatus(status: BtnStatus) {
		if (status.btnType) {
			this.disableBtn(this.getBtnNode(status.btnType), status.disable);
		} else {
			this.btnList.forEach(v => this.disableBtn(v, status.disable));
		}
	}

	private getBtnNode(btnType: BtnType) {
		if (BtnType.DISCARD === btnType) {
			return this.propertyNode.props_button_discard;
		} else if (BtnType.DROP === btnType) {
			return this.propertyNode.props_button_drop;
		} else if (BtnType.GROUP === btnType) {
			return this.propertyNode.props_button_group;
		} else if (BtnType.SHOW === btnType) {
			return this.propertyNode.props_button_show;
		}
	}

	private isMyOp() {
		return this.props.flowInfo.curIndex === config.gameConfig.mySeatIndex;
	}

	/**是否自己出牌 */
	private isMyOut() {
		return this.props.flowInfo.deskStatus === DeskStatus.OUT_CARD && this.props.flowInfo.curIndex === config.gameConfig.mySeatIndex;
	}

	protected bindUI(): void {
		this.initBtnList();
		this.hideBtn(false);

		this.btnList.forEach(v => this.disableBtn(v, true));
	}

	private hideBtn(isTween: boolean = true) {
		this.btnList.forEach(v => this.hideNode(v, isTween));
	}

	private showBtn(isTween: boolean = true) {
		this.btnList.forEach(v => this.showNode(v, isTween));
	}

	private hideY = 120;
	private hideNode(curNode: Node, isTween: boolean = true) {
		if (isTween) {
			tween(curNode).to(0.3, { position: new Vec3(curNode.position.x, curNode.position.y - this.hideY) }).start()
		} else {
			curNode.setPosition(new Vec3(curNode.position.x, curNode.position.y - this.hideY))
		}
	}

	private showNode(curNode: Node, isTween: boolean = true) {
		if (isTween) {
			tween(curNode).to(0.3, { position: new Vec3(curNode.position.x, curNode.position.y + this.hideY) }).start()
		} else {
			curNode.setPosition(new Vec3(curNode.position.x, curNode.position.y + this.hideY))
		}
	}

	private disableBtn(btnNode: Node, disable: boolean) {
		btnNode.getChildByName("disable").active = disable;
		btnNode.getComponent(Button).interactable = !disable;
	}

	private isDisable(btnNode: Node) {
		return !btnNode.getComponent(Button).interactable;
	}

	update(deltaTime: number) {

	}
}

