import { _decorator, assetManager, Component, EditBox, ImageAsset, Node, Sprite, SpriteFrame } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
const { ccclass, property } = _decorator;
import { WithdrawBankChannelType } from '../../store/actions/withdraw';
import { bundleHall, global, lang } from '../../index';
import InputValidator from '../../../utils/InputValidator';
import { addToastAction } from '../../store/actions/baseBoard';
import { config } from '../../config';
import Guide from '../../../utils/Guide';

export interface IState {

}

export interface IProps {
	hadChooseBankChannl: WithdrawBankChannelType
}
export interface IEvent {
	onClosehandler: () => void,
	onBindDone: (hadChooseBankChannl: WithdrawBankChannelType, accountNumber: string, realName: string) => void
}

@ccclass('Hall_WithdrawBankBind')
export class Hall_WithdrawBankBind extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_icon_reken: new Node(),
		props_btn_metode_close: new Node(),
		props_nomor_EditBox: new EditBox(),
		props_spr_cetatan_name1: new Node(),
		props_EditBox_name: new EditBox(),
		props_btn_metode_tentukan: new Node(),
		/**引导节点 */
		props_layout_tentukan:new Node()
	}

	public props: IProps = {
		hadChooseBankChannl: null
	}

	public events: IEvent = {
		onClosehandler: () => { },
		onBindDone: (hadChooseBankChannl: WithdrawBankChannelType, accountNumber: string, realName: string) => { }
	}

	protected initState() {
		return {}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_metode_close.on(Node.EventType.TOUCH_END, () => {
			this.events.onClosehandler()
		})
		this.propertyNode.props_btn_metode_tentukan.on(Node.EventType.TOUCH_END, () => {
			const accountNumber = this.propertyNode.props_nomor_EditBox.string
			const realName = this.propertyNode.props_EditBox_name.string
			// if (accountNumber.toString().substring(0, 2) !== '08') {
			// 	global.hallDispatch(addToastAction({ content: lang.write(k => k.InputModule.inputFaildCustomer1, {}, { placeStr: "渠道号码必须以08开头" }) }))
			// 	return
			// }
			new InputValidator().begin().isChartLength([9, 15], accountNumber).done(() => {
				this.events.onBindDone(this.props.hadChooseBankChannl, accountNumber, realName)
			})
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "hadChooseBankChannl") {
			this.propertyNode.props_nomor_EditBox.string = value.cur.accountNumber || ""
			this.propertyNode.props_EditBox_name.string = value.cur.realName || ""

			assetManager.loadRemote(this.props.hadChooseBankChannl.iconMax, (err, asset: ImageAsset) => {
				if (this.propertyNode && !err) {
					this.propertyNode.props_icon_reken.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(asset)
				}
			})
			// bundleHall.load(`withdrawal/resource/icon_withdrawal_${value.cur.name.toLocaleLowerCase()}/spriteFrame`, SpriteFrame, (err, sp) => {
			// 	!err && (this.propertyNode.props_icon_reken.getComponent(Sprite).spriteFrame = sp)
			// })

			// if (this.props.hadChooseBankChannl.channelType === 0) {
			// 	this.propertyNode.props_EditBox_name.node.active = false
			// 	this.propertyNode.props_spr_cetatan_name1.active = false
			// }
			this.beginGuide()
		}
	}

	public beginGuide() {
		if (config.fristLogin.main && !config.fristLogin['hasShow_3']) {
			//标明这里已经显示了
			config.fristLogin['hasShow_3'] = true
			const guide_1 = new Guide(this.propertyNode.props_btn_metode_tentukan, this.propertyNode.props_layout_tentukan)
			guide_1.begin()
		}
	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

