import { _decorator, assetManager, Button, Component, EditBox, ImageAsset, instantiate, Label, Node, ScrollView, Sprite, SpriteFrame, tween, UITransform } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { WithdrawBankChannelType } from '../../store/actions/withdraw';
import { bundleHall } from '../../index';
import { maskBankCardNumber } from '../../../utils/tool';
import InputValidator from '../../../utils/InputValidator';
import { addToastAction } from '../../store/actions/baseBoard';
import TaskScheduler, { Task } from '../../../utils/TaskScheduler';
import { lang } from '../../index';
import ModalBox from '../../../common/ModalBox';
import Guide from '../../../utils/Guide';
import { config } from '../../config';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	memberAssetGoldPieces: number
	withdrawBankChannelChoose: WithdrawBankChannelType,
	validFlowingWater: number
}
export interface IEvent {
	onClosePanel?: () => void
	/**打开提现渠道 */
	openWithdrawBank?: () => void
	/**确认提现 */
	trueToWithdraw?: (amount: number) => void
	/**打开提现流水 */
	openWithdrawBill?: () => void
}

export type WithDrawHistoryType = {
	elapsedTime: string,
	nickName: string,
	orderMoney: number,
	orderStatus: number,
	transferTime: string
}

@ccclass('Hall_WithdrawalPanel')
export class Hall_WithdrawalPanel extends BaseComponent<IState, IProps, IEvent> {
	start() { }
	private taskScheduler: TaskScheduler = new TaskScheduler()
	private taskScheduler2: TaskScheduler = new TaskScheduler()
	protected propertyNode = {
		props_btn_tips_close: new Node(),
		/**用户余额 */
		props_label_saldo_num: new Node(),
		/**选择提现渠道按钮 */
		props_btn_withdrawal_ikat: new Node(),
		/**提现金额 */
		props_EditBox_jumlah: new Node(),
		/**减金额 */
		props_btn_withdrawal_subtract: new Node(),
		/**加金额 */
		props_btn_withdrawal_add: new Node(),
		/**最大金额 */
		props_btn_withdrawal_max: new Node(),
		/**Tips */
		props_btn_withdrawal_kirim: new Node(),
		/**未选择银行卡 */
		props_no_bank_choose: new Node(),
		/**已选择银行卡 */
		props_had_bank_choose: new Node(),
		/**打开流水按钮 */
		props_btn_withdrawal_catatan: new Node(),
		/**末班样式 */
		props_spr_one: new Node(),
		/**无数据节点 */
		props_no_message: new Node(),
		/**提现记录 */
		props_scrollView_withDraw: new Node(),

		/**引导界面1 */
		props_layout_remind_lakt: new Node(),
		/**引导界面1 */
		props_layout_remind_jumlah: new Node(),
		/**引导界面1 */
		props_layout_remind_kirim: new Node(),
		/**手动打开引导 */
		props_btn_newHelp: new Button()
	}

	public props: IProps = {
		memberAssetGoldPieces: 0,
		withdrawBankChannelChoose: null,
		validFlowingWater: -1
	}

	public events: IEvent = {
		onClosePanel: () => { },
		openWithdrawBank: () => { },
		trueToWithdraw: (amount: number) => { },
		openWithdrawBill: () => { }
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_tips_close.on(Node.EventType.TOUCH_END, () => {
			this.events.onClosePanel()
		})
		this.propertyNode.props_btn_withdrawal_ikat.on(Node.EventType.TOUCH_END, () => {
			this.events.openWithdrawBank()
		})
		this.propertyNode.props_btn_withdrawal_subtract.on(Node.EventType.TOUCH_END, () => {
			const amountStr = this.propertyNode.props_EditBox_jumlah.getComponent(EditBox).string
			const amount = amountStr === "" ? 0 : +amountStr
			if (amount <= 100) {
				this.propertyNode.props_EditBox_jumlah.getComponent(EditBox).string = 0 + ''
			} else {
				this.propertyNode.props_EditBox_jumlah.getComponent(EditBox).string = (amount - 10000) + ''
			}
		})
		this.propertyNode.props_btn_withdrawal_add.on(Node.EventType.TOUCH_END, () => {
			const amountStr = this.propertyNode.props_EditBox_jumlah.getComponent(EditBox).string
			const amount = amountStr === "" ? 0 : +amountStr
			if (amount + 100 > this.props.memberAssetGoldPieces) {
				this.propertyNode.props_EditBox_jumlah.getComponent(EditBox).string = this.props.memberAssetGoldPieces + ''
			} else {
				this.propertyNode.props_EditBox_jumlah.getComponent(EditBox).string = (amount + 10000) + ''
			}
		})
		this.propertyNode.props_btn_withdrawal_max.on(Node.EventType.TOUCH_END, () => {
			this.propertyNode.props_EditBox_jumlah.getComponent(EditBox).string = this.props.memberAssetGoldPieces + ''
		})
		this.propertyNode.props_btn_withdrawal_catatan.on(Node.EventType.TOUCH_END, () => {
			this.events.openWithdrawBill()
		})
		this.propertyNode.props_btn_withdrawal_kirim.on(Node.EventType.TOUCH_END, () => {
			if (this.propertyNode.props_btn_withdrawal_kirim.getComponent(Sprite).grayscale) return
			if (this.props.withdrawBankChannelChoose) {
				const amount2 = this.propertyNode.props_EditBox_jumlah.getComponent(EditBox).string;
				new InputValidator().begin().isDecimal(amount2, false).done(() => {
					if (+amount2 > this.props.memberAssetGoldPieces) {
						this.dispatch(addToastAction({ content: lang.write(k => k.HallModule.HallWithdrawalNoEnough, {}, { placeStr: "对不起，您的可提现金额不足~" }) }))
						return
					}
					if (+amount2 < this.props.withdrawBankChannelChoose.limitDown || +amount2 > this.props.withdrawBankChannelChoose.limitUp) {
						this.dispatch(addToastAction({
							content: lang.write(k => k.HallModule.HallWithdrawalglod, {
								down: this.props.withdrawBankChannelChoose.limitDown.formatAmountWithCommas(),
								up: this.props.withdrawBankChannelChoose.limitUp.formatAmountWithCommas()
							}, { placeStr: "对不起，提现金额应在{down}~{up}之间" })
						}))
						return
					}
					this.events.trueToWithdraw(+amount2)
				})
			} else {
				this.dispatch(addToastAction({ content: lang.write(k => k.HallModule.HallWithdrawalMessage, {}, { placeStr: "请选择提现到账的银行信息~" }) }))
			}
		})

		this.propertyNode.props_btn_newHelp.node.on(Node.EventType.TOUCH_END, () => {
			config.fristLogin = { main: true }
			this.beginGuide()
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		key === "memberAssetGoldPieces" && (this.propertyNode.props_label_saldo_num.getComponent(Label).string = value.cur.formatAmountWithCommas())
		if (key === "withdrawBankChannelChoose") {
			const cur = value.cur as WithdrawBankChannelType
			this.propertyNode.props_no_bank_choose.active = false
			this.propertyNode.props_had_bank_choose.active = true
			this.propertyNode.props_had_bank_choose.getChildByName("account_number").getComponent(Label).string = maskBankCardNumber(cur.accountNumber, 3)
			// bundleHall.load(`withdrawal/resource/icon_withdrawal_${cur.name.toLocaleLowerCase()}/spriteFrame`, SpriteFrame, (err, sp) => {
			// 	!err && (this.propertyNode.props_had_bank_choose.getChildByName("icon").getComponent(Sprite).spriteFrame = sp)
			// })
			assetManager.loadRemote(this.props.withdrawBankChannelChoose.iconMax, (err, asset: ImageAsset) => {
				if (this.propertyNode && !err) {
					this.propertyNode.props_had_bank_choose.getChildByName("icon").getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(asset)
				}
			})
		}
		if (key === "validFlowingWater") {
			this.isFlowingWater()
			!(this.propertyNode.props_btn_withdrawal_kirim as Node).getComponent(Sprite).grayscale && this.beginGuide()
		}
	}
	/**添加流水 */
	public addWithdrawBill(dataList: WithDrawHistoryType[]) {
		if (!this.propertyNode) return
		const isFrist: boolean = this.propertyNode.props_scrollView_withDraw.getComponent(ScrollView).content.children.length ? true : false
		this.propertyNode.props_no_message.active = false
		if (isFrist) {
			//先整几条进去
			dataList.slice(0, 5).forEach((item) => {
				const node = this.creatorNodeItem(item)
				this.propertyNode.props_scrollView_withDraw.getComponent(ScrollView).content.addChild(node)
				node.setSiblingIndex(0)
			})
		}
		dataList.forEach((data, index) => {
			if (isFrist && index < 5) return
			this.taskScheduler.joinqQueue(new Task((done) => {
				const l = this.propertyNode.props_scrollView_withDraw.getComponent(ScrollView).content.children.length
				if (l > 10) {
					this.propertyNode.props_scrollView_withDraw.getComponent(ScrollView).content.children[l - 3].destroy()
				}
				const node = this.creatorNodeItem(data)
				this.propertyNode.props_scrollView_withDraw.getComponent(ScrollView).content.addChild(node)
				node.getComponent(UITransform).height = 0
				tween(node.getComponent(UITransform)).to(0.1, { height: 120 }).start()
				node.setSiblingIndex(0)
				this.scheduleOnce(() => done(), 1.5)
			}))
		})
	}

	private creatorNodeItem(data: WithDrawHistoryType) {
		const node = instantiate(this.propertyNode.props_spr_one)
		node.active = true
		node.getChildByName("label_time").getComponent(Label).string = data.transferTime
		node.getChildByName("label_name").getComponent(Label).string = data.nickName
		node.getChildByName("label_menarik").getComponent(Label).string = data.orderMoney.formatAmountWithCommas() + ' RP'
		node.getChildByName("label_waktu").getComponent(Label).string = data.elapsedTime
		return node
	}

	protected destroyCallBack(): void {
		this.taskScheduler.stopQueue(false)
		this.taskScheduler2.stopQueue(false)
	}
	protected bindUI(): void {
		// 第二次打开，就得看这个了
		this.isFlowingWater()
	}

	private isFlowingWater() {
		if (this.props.validFlowingWater > 0) {
			!ModalBox.Instance().isShow && ModalBox.Instance().show({ content: lang.write(k => k.withdrawal.flllowWaterNoLevel, {}, { placeStr: "抱歉，你的投注额未达到提现标准！" }), type: "Prompt" },
				() => true);
			(this.propertyNode.props_btn_withdrawal_kirim as Node).getComponent(Sprite).grayscale = true
		} else {
			(this.propertyNode.props_btn_withdrawal_kirim as Node).getComponent(Sprite).grayscale = false
		}
	}

	public beginGuide() {
		if (config.fristLogin.main && !config.fristLogin['hasShow_1']) {
			//标明这里已经显示了
			config.fristLogin['hasShow_1'] = true
			const guide_1 = new Guide(this.propertyNode.props_btn_withdrawal_ikat, this.propertyNode.props_layout_remind_lakt)
			const guide_2 = new Guide(this.propertyNode.props_EditBox_jumlah, this.propertyNode.props_layout_remind_jumlah)
			const guide_3 = new Guide(this.propertyNode.props_btn_withdrawal_kirim, this.propertyNode.props_layout_remind_kirim)
			// this.taskScheduler.stopQueue(false)
			this.taskScheduler2.joinqQueue(new Task((done) => {
				guide_1.begin().bindDone(() => done())
			})).joinqQueue(new Task((done) => {
				guide_2.begin().bindDone(() => done())
			})).joinqQueue(new Task((done) => {
				guide_3.begin().bindDone(() => done())
			}))
		}
	}

	update(deltaTime: number) {

	}
}

