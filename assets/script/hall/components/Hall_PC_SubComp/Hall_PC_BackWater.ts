import { _decorator, Button, Component, EditBox, Label, Node, Sprite, SpriteFrame } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { baseBoardView, bundleCommon, fetcher, global, lang, sourceManageSeletor } from '../../index';
import { ApiUrl } from '../../apiUrl';
import { addToastAction, ToastPosition, ToastType } from '../../store/actions/baseBoard';
import { Hall_WaterHelp, IState as HHIState, IProps as HHIprops, IEvent as HHIEvent } from '../Hall_WaterHelp';
import { SKT_MAG_TYPE, hallWebSocketDriver } from '../../socketConnect';
const { ccclass, property } = _decorator;
import { InitStateType } from '../../store/actions/memberInfo';
import BaseViewModel from '../../viewModel/BaseViewModel';
import { EffectType } from '../../../utils/NodeIOEffect';
import { PrefabPathDefine } from '../../sourceDefine/prefabDefine';

export interface IState {

}

export interface IProps {
	memberInfo: InitStateType
}
export interface IEvent {

}

@ccclass('Hall_PC_BackWater')
export class Hall_PC_BackWater extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	protected propertyNode = {
		/**可提返水 */
		props_label_water_pro: new Label(),//
		/**有效下注 */
		props_label_sisa: new Label(),
		/**返水比例 */
		props_label_skalaSaat: new Label(),
		/**洗码数 */
		props_label_jumlah: new Label(),
		/**返水的vip级别 */
		props_water_spr_vip: new Sprite(),
		/**确认抽取返水 */
		props_water_cuci: new Button(),
		/**返水置灰覆盖节点 */
		props_spr_word_cuci: new Node(),
		/**返水最小值说明 */
		props_Label_lorem: new Label(),
		/**返水说明 */
		props_btn_ratio_help: new Button()
	}

	public props: IProps = {
		memberInfo: null
	}

	public events: IEvent = {

	}

	protected initState() {
		return { }
	}

	protected bindEvent(): void {
		/**确认提取返水 */
		this.propertyNode.props_water_cuci.node.on(Node.EventType.TOUCH_END, () => {
			fetcher.send(ApiUrl.DRAW_WATER, { type: 1 }).then((data) => {
				global.hallDispatch(addToastAction({ content: lang.write(k => k.BaseBoardModule.operateDone, {}, { placeStr: "操作完成" }), type: ToastType.SUCCESS }))
				hallWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.MEMBER_INFO, {})
			})
		})
		this.propertyNode.props_btn_ratio_help.node.on(Node.EventType.TOUCH_END, () => {
			const waterHelpViewModel = new BaseViewModel<Hall_WaterHelp, HHIState, HHIprops, HHIEvent>("Hall_WaterHelp").mountView(sourceManageSeletor().getFile(PrefabPathDefine.HELL_WATER_HELP).source)
				.appendTo(baseBoardView.viewNode, { effectType: EffectType.EFFECT1, isModal: true }).setEvent({ onCloseHandler: () => waterHelpViewModel.unMount(EffectType.EFFECT2) })
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "memberInfo") {
			if (!this.props.memberInfo.memberId) return
			const memberInfoNew = value.cur as InitStateType;
			bundleCommon.load(`resource/vip/b_VIP${memberInfoNew.vipLevel}/spriteFrame`, SpriteFrame, (err, sp) => {
				!err && this.propertyNode && (this.propertyNode.props_water_spr_vip.spriteFrame = sp)
			})
			this.propertyNode.props_label_water_pro.string = this.props.memberInfo.memberRechargeWater.formatAmountWithCommas()
			this.propertyNode.props_label_sisa.string = this.props.memberInfo.totalFlowingWater.formatAmountWithCommas()
			this.propertyNode.props_label_jumlah.string = this.props.memberInfo.totalReturnWaterAmount.formatAmountWithCommas()
			this.propertyNode.props_label_skalaSaat.string = (this.props.memberInfo.rebateScale * 10000) + ''
			this.propertyNode.props_Label_lorem.string = this.propertyNode.props_Label_lorem.string.replace('0', this.props.memberInfo.minimumWithdrawal.formatAmountWithCommas())
			/**如果抽数值小于最小返水线，就置灰 */
			this.propertyNode.props_spr_word_cuci.active = this.props.memberInfo.minimumWithdrawal > this.props.memberInfo.memberRechargeWater
		}
	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

