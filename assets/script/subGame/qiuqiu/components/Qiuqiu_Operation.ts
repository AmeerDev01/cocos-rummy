import { Label, Node, Toggle, UITransform, Widget, _decorator, tween } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { CardType, DeskStatus, OperationType, Player } from '../type';
import { Qiuqiu_Sure, IEvent as SPIEvent, IProps as SPIProps, IState as SPIState } from './Qiuqiu_Sure';
import BaseViewModel from '../../../common/viewModel/BaseViewModel';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { roomChooseViewModel, sourceManageSeletor } from '../index';
import config from '../config';
import SureViewModel from '../viewModel/SureViewModel';
import bet from '../../yxx/store/reducer/bet';
import { playerBet } from '../store/action/game';
const { ccclass, property } = _decorator;

enum AutoType {
	/**跟任意注 */
	CALL_ANY,
	/**跟注 */
	CALL,
	/**过 */
	PASS,
	/**弃牌 */
	GIVE_UP,
	/**过或者弃牌 */
	PASS_OR_GIVE_UP
}

export interface IState {
}

export interface IProps {
	deskStatus: DeskStatus,
	/**玩家 */
	playerMap: Player[],
	/**需要跟注的金额 */
	callAmount: number,
	/**当前最新下注 */
	betAmount: number,
	/**当前最高下注 */
	maxAmount: number,
	/**当前玩家的操作 */
	opType: OperationType,
	/**上一个做动作的玩家 */
	lastActiveSeatIndex: number,
	/**当前正激活等待的用户 */
	currActiveSeatIndex: number,
	seatIndex: number,
}
export interface IEvent {
}

@ccclass('Qiuqiu_Operation')
export class Qiuqiu_Operation extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	private lastBetAmount = -1;
	private autoType: AutoType;
	// private sureNode: Node;
	private autoBetTimeT = -1;
	private sureViewModel: SureViewModel;

	protected propertyNode = {
		props_quiqui_operate_going: new Node(),
		props_ToggleGroup_operate_waiting: new Node(),
		props_ToggleGroup_operate_follow: new Node(),

		props_btn_operate_balik: new Node(),
		props_btn_operate_Naik: new Node(),
		props_btn_operate_lkut_or_cek: new Node(),
		props_label_operate_Ikut: new Label(),

		props_btn_operate_cekbalik: new Node(),
		props_btn_operate_cek: new Node(),
		props_btn_operate_lkutapapun: new Node(),

		props_btn_operate_autobalik: new Node(),
		props_btn_operate_autoikut: new Node(),
		props_btn_operate_ikutapaqun: new Node(),
		props_label_operate_autoIkut: new Label(),

	}

	public props: IProps = {
		deskStatus: null,
		playerMap: [],
		callAmount: 0,
		betAmount: 0,
		maxAmount: 0,
		opType: null,
		lastActiveSeatIndex: -1,
		currActiveSeatIndex: -1,
		seatIndex: 0,
	}

	public events: IEvent = {
	}

	protected initState() {
		return {
		}
	}
	protected bindEvent(): void {
		//玩家非自己操作的按钮事件
		this.propertyNode.props_btn_operate_cekbalik.on(Toggle.EventType.TOGGLE, (toggle: Toggle) => {
			this.setAutoType(toggle, AutoType.PASS_OR_GIVE_UP)
		})
		this.propertyNode.props_btn_operate_cek.on(Toggle.EventType.TOGGLE, (toggle: Toggle) => {
			this.setAutoType(toggle, AutoType.PASS)
		})
		this.propertyNode.props_btn_operate_lkutapapun.on(Toggle.EventType.TOGGLE, (toggle: Toggle) => {
			this.setAutoType(toggle, AutoType.CALL_ANY)
		})
		this.propertyNode.props_btn_operate_autobalik.on(Toggle.EventType.TOGGLE, (toggle: Toggle) => {
			this.setAutoType(toggle, AutoType.GIVE_UP)
		})
		this.propertyNode.props_btn_operate_autoikut.on(Toggle.EventType.TOGGLE, (toggle: Toggle) => {
			this.setAutoType(toggle, AutoType.CALL)
		})
		this.propertyNode.props_btn_operate_ikutapaqun.on(Toggle.EventType.TOGGLE, (toggle: Toggle) => {
			this.setAutoType(toggle, AutoType.CALL_ANY)
		})

		//玩家自己操作的按钮事件
		this.propertyNode.props_btn_operate_Naik.on(Node.EventType.TOUCH_END, () => {
			// this.sureNode.active = !this.sureNode.active;
			this.sureViewModel.comp.showHideAnima();
			// 玩家主动操作之后取消自动效果
			this.clearBetTime();
		});
		this.propertyNode.props_btn_operate_balik.on(Node.EventType.TOUCH_END, () => {
			// 玩家主动操作之后取消自动效果
			this.clearBetTime();
			this.lastBetAmount = -1;
			this.playerOp(OperationType.GIVE_UP, this.props.betAmount);
		});
		this.propertyNode.props_btn_operate_lkut_or_cek.on(Node.EventType.TOUCH_END, () => {
			// 玩家主动操作之后取消自动效果
			this.clearBetTime();
			this.lastBetAmount = -1;
			this.playerOp(OperationType.CALL, this.props.callAmount);
		});
	}

	/**获得最后一个操作的类型 */
	private getLastOperationType() {
		if (this.props.lastActiveSeatIndex < 0) {
			return OperationType.WAIT;
		}

		return this.props.playerMap[this.props.lastActiveSeatIndex].gameData.opType;
	}

	private setAutoType(toggle: Toggle, autoType: AutoType) {
		this.autoType = toggle.isChecked ? autoType : null;
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		switch (key) {
			case 'deskStatus':
			case 'currActiveSeatIndex':
				this.changeOperationType();
				break;
			case 'opType':
				this.props.opType === OperationType.GIVE_UP && this.showAnima(false);
				break;
		}
	}

	private isShow() {
		return this.props.deskStatus === DeskStatus.PLAYING;
	}

	private isClearStatus() {
		return this.props.deskStatus === DeskStatus.WAITING || this.props.deskStatus === DeskStatus.COUNTDOWNING;
	}

	private showOpeationType(show: boolean) {
		this.propertyNode.props_quiqui_operate_going.active = show;
		this.propertyNode.props_ToggleGroup_operate_waiting.active = show;
		this.propertyNode.props_ToggleGroup_operate_follow.active = show;
	}

	private changeOperationType() {
		const show = this.isShow();
		if (!show || this.props.currActiveSeatIndex === -1) {
			this.showAnima(false);
			this.lastBetAmount = -1;

			if (this.isClearStatus()) {
				this.autoType = null;
				this.cancelSelect();
			}
			// this.sureNode.active = false;
			this.sureViewModel.comp.showHideAnima(false);
			return;
		}

		// 设置跟注金额
		this.setCellAmount();

		if (this.isMyOp()) {
			this.changePassAndCell();
			this.propertyNode.props_quiqui_operate_going.active = true;
			this.propertyNode.props_ToggleGroup_operate_waiting.active = false;
			this.propertyNode.props_ToggleGroup_operate_follow.active = false;
		} else {
			this.propertyNode.props_quiqui_operate_going.active = false;
			// this.sureNode.active = false;
			this.sureViewModel.comp.showHideAnima(false);
			if (this.lastBetAmount === this.props.betAmount) {
				return;
			}
			this.propertyNode.props_ToggleGroup_operate_waiting.active = this.props.callAmount === 0;
			this.propertyNode.props_ToggleGroup_operate_follow.active = this.props.callAmount > 0;
			this.setSelect();
		}
		this.showAnima(true);
		this.lastBetAmount = this.props.betAmount;
	}

	/**是否自己操作 */
	private isMyOp() {
		return this.props.seatIndex === this.props.currActiveSeatIndex;
	}

	/**设置选中 */
	private setSelect() {
		if (this.autoType === null) {
			return;
		}

		this.cancelSelect();

		if (this.propertyNode.props_ToggleGroup_operate_waiting.active) {
			this.propertyNode.props_btn_operate_cekbalik.getComponent(Toggle).isChecked = this.autoType === AutoType.PASS_OR_GIVE_UP || this.autoType === AutoType.GIVE_UP;
			this.propertyNode.props_btn_operate_lkutapapun.getComponent(Toggle).isChecked = this.autoType === AutoType.CALL_ANY;

			// 如果从跟注切换到不需要加注时，那么自动效果失效
			this.autoType === AutoType.CALL && (this.autoType = null)
		} else if (this.propertyNode.props_ToggleGroup_operate_follow.active) {
			this.propertyNode.props_btn_operate_autobalik.getComponent(Toggle).isChecked = this.autoType === AutoType.PASS_OR_GIVE_UP || this.autoType === AutoType.GIVE_UP;
			this.propertyNode.props_btn_operate_ikutapaqun.getComponent(Toggle).isChecked = this.autoType === AutoType.CALL_ANY;

			// 如果从过切换到需要加注时，那么自动就失效
			this.autoType === AutoType.PASS && (this.autoType = null)
		}
	}

	/**当自己操作时，切换过还是跟 */
	private changePassAndCell() {
		this.propertyNode.props_btn_operate_lkut_or_cek.children.forEach(v => v.active = false);

		this.propertyNode.props_btn_operate_lkut_or_cek.getChildByName('props_spr_oprate_Ikut').active = this.props.betAmount > 0;
		const labelIkut = this.propertyNode.props_label_operate_Ikut;
		labelIkut.node.active = this.props.betAmount > 0;

		this.propertyNode.props_btn_operate_lkut_or_cek.getChildByName('props_spr_oprate_cek').active = this.props.betAmount === 0;
	}

	private setCellAmount() {
		const amount = this.props.callAmount.formatAmountWithLetter(true);
		this.propertyNode.props_label_operate_Ikut.string = amount;
		this.propertyNode.props_label_operate_autoIkut.string = amount;
	}

	/**控制操作面板 */
	private showAnima(show: boolean) {
		const width = this.node.getComponent(UITransform).width;
		const widget = this.node.getComponent(Widget);
		// 重连不要动画
		if (config.isReconnect) {
			widget.bottom === 0 && (widget.bottom -= width);
			show && (widget.bottom = 0);
		} else {
			widget.bottom === 0 && (widget.bottom -= width);

			show && tween(widget).to(0.5, { bottom: 0 }).call(() => {
				// 面板显示出来之后如果是自己操作就处理自动操作
				this.node.isValid && this.isMyOp() && this.autoHandle();
			}).start();
		}
	}

	private cancelSelect() {
		this.propertyNode.props_ToggleGroup_operate_waiting.children.map(v => v.getComponent(Toggle)).forEach(v => v.isChecked = false)
		this.propertyNode.props_ToggleGroup_operate_follow.children.map(v => v.getComponent(Toggle)).forEach(v => v.isChecked = false)
	}

	protected bindUI(): void {
		this.showOpeationType(false);
		this.showAnima(false);
		this.autoType = null;
		this.cancelSelect();
		this.initFillPanel();
	}

	/**自动处理 */
	private autoHandle() {
		if (this.autoType === null) {
			return;
		}

		let opType = OperationType.GIVE_UP;
		switch (this.autoType) {
			case AutoType.CALL:
				opType = OperationType.CALL;
				break;
			case AutoType.CALL_ANY:
				opType = OperationType.CALL;
				break;
			case AutoType.GIVE_UP:
				opType = OperationType.GIVE_UP;
				break;
			case AutoType.PASS:
				opType = OperationType.PASS;
				break;
			case AutoType.PASS_OR_GIVE_UP:
				opType = this.props.betAmount === 0 ? OperationType.PASS : OperationType.GIVE_UP;
				break;
		}

		// 延迟1秒之后自动发送下注信息
		this.autoBetTimeT = window.setTimeout(() => {
			this.playerOp(opType, this.props.callAmount);
		}, 1000)
	}

	/**
	 * 玩家操作
	 * @param opType 操作类型
	 * @param betAmount 下注金额
	 */
	private playerOp(opType: OperationType, betAmount: number) {
		roomChooseViewModel.mainBoardViewModel.playerOp(opType, betAmount);
	}

	private clearBetTime() {
		this.autoType = null;
		this.autoBetTimeT && window.clearTimeout(this.autoBetTimeT);
		this.autoBetTimeT = -1;
	}

	/**初始化加注面板 */
	private initFillPanel() {
		this.sureViewModel = new SureViewModel()
			.mountView(sourceManageSeletor().getFile(PrefabPathDefine.prefabs_quiqui_sure).source).appendTo(this.node.parent).connect();
		this.sureViewModel.setEvent({
			sendBet: (betAmount: number, opType: OperationType) => {
				if (config.isTest) {
					this.dispatch(playerBet(config.testConfig.uid, betAmount, OperationType.CALL, 0));
				} else {
					this.playerOp(opType, betAmount);
				}
			}
		})
		// this.sureNode = this.sureViewModel.viewNode;
		// this.sureNode.active = false;
		this.sureViewModel.viewNode.active = false;
	}

	update(deltaTime: number) {

	}
}

