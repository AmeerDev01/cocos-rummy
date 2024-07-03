import { _decorator, Component, instantiate, Label, Node, ScrollView } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { lang } from '../../index';
const { ccclass, property } = _decorator;

//UNPAID(1,"待支付"),PAID(2,"已支付"),FINISHED(3,"已完成"),CANCEL(4,"已取消"),ERROR(5,"异常"),WAIT_AUDIT(6,"等待审核"),AUDIT_PASS(7,"审核通过"),AUDIT_REFUSE(8,"审核驳回")

// [
// 	'', 'Proses', 'Berhasil', 'Gagal'
// ]

export type OrderType = {
	orderNo: string
	orderTime: string
	orderMoney: number
	status: number
}

export interface IState {

}

export interface IProps {
	orderList: OrderType[]
}
export interface IEvent {
	onClosehandler: () => void
}

@ccclass('Hall_WithdrawBill')
export class Hall_WithdrawBill extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		/**关闭 */
		props_btn_tips_close: new Node(),
		/**滚动域 */
		props_ScrollView_order_list: new Node(),
		/**模板 */
		props_order_item_template: new Node(),
		/**无信息提示 */
		props_label_catatan_none: new Node()
	}
	private statusType: Array<string> = []
	public props: IProps = {
		orderList: []
	}

	public events: IEvent = {
		onClosehandler: () => { }
	}

	protected initState() {
		return {}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_tips_close.on(Node.EventType.TOUCH_END, () => {
			this.events.onClosehandler()
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "orderList") {
			value.cur.length && (this.propertyNode.props_label_catatan_none.active = false)
			value.cur.forEach(item => {
				const orderItem = instantiate(this.propertyNode.props_order_item_template)
				orderItem.getChildByName("label_catatan_nomor").getComponent(Label).string = item.orderNo
				orderItem.getChildByName("label_catatan_tannggal").getComponent(Label).string = item.orderTime
				orderItem.getChildByName("label_catatan_jumlah").getComponent(Label).string = item.orderMoney
				orderItem.getChildByName("label_catatan_keadaan").getComponent(Label).string = this.statusType[+item.status]
				orderItem.active = true
				this.propertyNode.props_ScrollView_order_list.getComponent(ScrollView).content.addChild(orderItem)
			})
		}
	}

	protected bindUI(): void {
		this.statusType = lang.write(k => k.withdrawal.OrderShowStr).split(',')
	}

	update(deltaTime: number) {

	}
}

