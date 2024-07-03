import { Button, EventTouch, Label, Node, Vec3, _decorator, tween } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { ActionType, BtnStatus, BtnType, DeskStatus, FlowInfo, Player, PlayerStatus, PromptType } from '../type';
import config from '../config';
import { updateAction } from '../store/action/game';
import { rummyRoomChoseView } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;

type NodePosInfo = {
	uuid: string,
	originPos: Vec3,
	movePos: Vec3,
}

export interface IState {
}

export interface IProps {
	isGame: boolean,
	myPlayerStatus: number,
	/**流程信息 */
	flowInfo: FlowInfo,
	isShowBtn: boolean,
	/**选择的牌数量 */
	selectCardCount: number,
	dropAmount: number,
}
export interface IEvent {
	/**分组 */
	groupCard: () => void,
	/**出牌 */
	outCard: () => void,
	/**投降 */
	drop: () => void,
	/**提前结算 */
	show: () => void,
	/**确认消息 */
	confirm: () => void,
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

	private hideY = 120;
	private btnList: Node[] = []
	private nodePosInfos: NodePosInfo[] = []

	public props: IProps = {
		isGame: false,
		myPlayerStatus: 0,
		flowInfo: undefined,
		isShowBtn: false,
		selectCardCount: 0,
		dropAmount: 0,
	}

	public events: IEvent = {
		/**分组 */
		groupCard: () => { },
		/**出牌 */
		outCard: () => { },
		/**投降 */
		drop: () => { },
		/**提前结算 */
		show: () => { },
		/**确认消息 */
		confirm: () => { },
	}

	private initBtnList() {
		this.btnList = [
			this.propertyNode.props_button_drop, this.propertyNode.props_button_show, this.propertyNode.props_button_group, this.propertyNode.props_button_discard
		]

		this.btnList.forEach(v => {
			const pos = v.position.clone()
			this.nodePosInfos.push({
				uuid: v.uuid,
				originPos: pos,
				movePos: new Vec3(pos.x, pos.y - this.hideY),
			})
		})
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_button_drop.on(Node.EventType.TOUCH_END, (e: EventTouch) => {
			if (this.isDisable(e.currentTarget)) return;
			rummyRoomChoseView.playSound(SoundPathDefine.btn_click)
			rummyRoomChoseView.getGameMain().showPromptPanel(PromptType.DROP_PROMPT, [this.props.dropAmount], () => {
				this.events.drop();
			})
		})
		this.propertyNode.props_button_show.on(Node.EventType.TOUCH_END, (e: EventTouch) => {
			if (this.isDisable(e.currentTarget)) return;
			rummyRoomChoseView.playSound(SoundPathDefine.btn_click)

			if (this.isConfirmBtn()) {
				this.events.confirm();
			} else {
				rummyRoomChoseView.getGameMain().showPromptPanel(PromptType.SHOW_CONFIRM, [], () => {
					this.events.show();
				})
			}
		})
		this.propertyNode.props_button_group.on(Node.EventType.TOUCH_END, (e: EventTouch) => {
			if (this.isDisable(e.currentTarget)) return;
			rummyRoomChoseView.playSound(SoundPathDefine.btn_click)

			this.dispatch(updateAction({
				actionType: ActionType.GROUP,
				seatIndex: -1,
				params: [],
				time: 0,
			}))
		})
		this.propertyNode.props_button_discard.on(Node.EventType.TOUCH_END, (e: EventTouch) => {
			if (this.isDisable(e.currentTarget)) return;
			rummyRoomChoseView.playSound(SoundPathDefine.btn_click)

			this.dispatch(updateAction({
				actionType: ActionType.OUT,
				seatIndex: config.gameConfig.mySeatIndex,
				params: [],
				time: 0,
			}))
		})
	}

	protected useProps(key: keyof IProps | '_setDone', value: { pre: any, cur: any }) {
		if (this.node && this.node.isValid) {
			if (key === 'isShowBtn') {
				value.cur ? this.showBtn() : this.hideBtn();
			} else if (key === 'selectCardCount') {
				this.updateDiscardBtn();
				this.updateGroupBtn();
			} else if (key === 'flowInfo' && value.cur) {
				this.updateDiscardBtn();
				this.updateGroupBtn();
				this.updateFlowInfo();
				this.showBtnHandle();
			} else if (key === 'dropAmount') {
				this.updateDropAmount();
			} else if (key === 'isGame') {
				this.showBtnHandle();
			} else if (key === '_setDone') {
				this.updateDiscardBtn();
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
			disable: !this.isMyTouch(),
			time: 0,
		})
	}

	private showBtnHandle() {
		if (!this.props.flowInfo) {
			this.hideBtn();
			return;
		}
		const deskStatus = this.props.flowInfo.deskStatus;
		let isShowBtn = deskStatus === DeskStatus.OUT_CARD || deskStatus === DeskStatus.TOUCH_CARD || deskStatus === DeskStatus.CONFIRM;

		if (isShowBtn && this.props.isGame) {
			this.showBtn()
		} else {
			this.hideBtn();
		}
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
		if (!this.props.flowInfo) {
			return;
		}
		let disable = !this.isMyOut() || this.props.selectCardCount !== 1;

		this.updateOpBtnStatus({
			btnType: BtnType.DISCARD,
			disable: disable,
			time: 0,
		})

		const isConfirm = this.props.myPlayerStatus === PlayerStatus.CONFIRM_COUNTDOWN;
		this.changeConfirmBtn(isConfirm);
		// 确认阶段
		if (isConfirm) {
			disable = false;
		}

		this.updateOpBtnStatus({
			btnType: BtnType.SHOW,
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

	private updateDropAmount() {
		const dropAmount = this.props.dropAmount;
		this.propertyNode.props_label_drop.string = dropAmount >= 10000 ? dropAmount.formatAmountWithLetter() : dropAmount.formatAmountWithCommas();
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

	/**是否自己摸牌 */
	private isMyTouch() {
		return this.props.flowInfo.deskStatus === DeskStatus.TOUCH_CARD && this.props.flowInfo.curIndex === config.gameConfig.mySeatIndex;
	}

	protected bindUI(): void {
		this.initBtnList();
		this.hideBtn(false);

		this.btnList.forEach(v => this.disableBtn(v, true));
	}

	private hideBtn(isTween: boolean = true) {
		this.btnList.forEach(v => this.showNode(v, false, isTween));
	}

	private showBtn(isTween: boolean = true) {
		this.btnList.forEach(v => this.showNode(v, true, isTween));
	}

	private changeConfirmBtn(isConfirm: boolean) {
		this.propertyNode.props_button_show.getChildByName("button_confirm").active = isConfirm;
	}

	private isConfirmBtn() {
		return this.propertyNode.props_button_show.getChildByName("button_confirm").active;
	}

	private showNode(curNode: Node, isShow: boolean, isTween: boolean = true) {
		const nodePosInfo = this.nodePosInfos.find(v => v.uuid === curNode.uuid)
		let pos = isShow ? nodePosInfo.originPos : nodePosInfo.movePos;
		if (isTween) {
			tween(curNode).to(0.3, { position: pos }).start()
		} else {
			curNode.setPosition(pos)
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

