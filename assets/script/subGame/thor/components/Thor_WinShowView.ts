import { _decorator, instantiate, Component, Label, Layout, Node, ScrollView, tween, Vec3, log, Sprite } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { sourceManageSeletor } from '../index';
import spriteDefine, { SpriteFramePathDefine } from '../sourceDefine/spriteDefine';
import StepNumber from '../../../utils/StepNumber';
import { changeProfit } from '../store/actions/game';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	winningData?: object
	multipleTotal?: number
	gameFreeGametotalMultiplier?: number
	viewGameType?: number,
	profit: number

}
export interface IEvent {

}

@ccclass('Thor_WinShowView')
export class Thor_WinShowView extends BaseComponent<IState, IProps, IEvent> {
	private arrayOfIcons = []
	private total = 0
	private smallTotal = 0
	start() {

	}

	protected propertyNode = {
		props_item: new Node(),
		props_content: new Node(),
		props_spr_win_box: new Node(),
		props_label_rate: new Node(),
	}

	public props: IProps = {
		winningData: [],
		multipleTotal: 0,
		gameFreeGametotalMultiplier: 0,
		viewGameType: 0,
		profit: 0
	}

	public events: IEvent = {

	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "winningData" && value.cur) {
			let length = this.propertyNode.props_content.children.length
			if (value.cur.count >= 0) {
				let smallIconIcons = [
					SpriteFramePathDefine.icon_1,
					SpriteFramePathDefine.icon_2,
					SpriteFramePathDefine.icon_3,
					SpriteFramePathDefine.icon_4,
					SpriteFramePathDefine.icon_5,
					SpriteFramePathDefine.icon_6,
					SpriteFramePathDefine.icon_7,
					SpriteFramePathDefine.icon_8,
					SpriteFramePathDefine.icon_9,
				]
				let node: Node = instantiate(this.propertyNode.props_item)
				node.active = true
				let { x, y } = node.getPosition()
				node.getChildByName('props_label_num').getComponent(Label).string = value.cur.count + ''
				if (smallIconIcons[value.cur.itemId - 1]) {
					node.getChildByName('props_spr_icon').getComponent(Sprite).spriteFrame = sourceManageSeletor().getFile(smallIconIcons[value.cur.itemId - 1]).source
				} else {
					console.log('winshow NULL', JSON.stringify(this.props.winningData));
				}
				node.getChildByName('props_label_glod').getComponent(Label).string = value.cur.amount.formatAmountWithCommas()
				this.total += value.cur.amount
				if (this.props.viewGameType != 1) {
					this.dispatch(changeProfit(this.total))
				} else {
					this.dispatch(changeProfit(this.props.profit + value.cur.amount))
				}
				this.propertyNode.props_content.addChild(node)
				tween(node)
					.to(0.4, { position: new Vec3(x, (length * 34) + 17, 1) }, { easing: 'cubicInOut' }) // 使用 cubicInOut 缓动到新位置
					.call(() => {
						if (!this.propertyNode) return
						this.propertyNode.props_spr_win_box.active = true;
						let str = this.propertyNode.props_spr_win_box.getChildByName('props_label_gold').getComponent(Label).string
						if (str) {
							str = str.replace(/,/g, "")
						} else {
							str = '0'
						}
						(new StepNumber(Number(str), this.total, (num) => {
							this.propertyNode && (this.propertyNode.props_spr_win_box.getChildByName('props_label_gold').getComponent(Label).string = (+num.toFixed(0)).formatAmountWithCommas())
						})).start()
					})
					// 添加一个简短的回弹动作
					// .by(0.1, { position: new Vec3(0, -10, 0) }, { easing: 'sineOut' }) // 先向下移动一点
					// .by(0.1, { position: new Vec3(0, 10, 0) }, { easing: 'sineIn' }) // 再回到原来的位置
					.start();
			} else {
				if (length > 0) {
					if (!this.propertyNode) return
					this.propertyNode.props_content.children.forEach(item => {
						let { x, y } = item.getPosition()
						tween(item)
							.to(0.2, { position: new Vec3(x, -188, 1) }) // 使用 to 缓动到新位置
							.call(() => {
								item.destroy()
							})
							.start();
					})
					this.total = 0
					this.propertyNode.props_spr_win_box.getChildByName('props_label_gold').getComponent(Label).string = '0'
					this.propertyNode.props_spr_win_box.active = false
				}
			}
		}
		if (key === 'multipleTotal' || key === "gameFreeGametotalMultiplier") {
			if (this.props.viewGameType == 1) {
				if (this.total !== 0 && this.props.gameFreeGametotalMultiplier !== 0) {
					this.calcMultiple(this.props.gameFreeGametotalMultiplier)
				}
			} else {
				if (this.total !== 0 && this.props.multipleTotal !== 0) {
					this.calcMultiple(this.props.multipleTotal)
				}
			}
		}
	}
	calcMultiple(rate) { // 倍数相乘
		if (!this.propertyNode) return
		let str = this.propertyNode.props_spr_win_box.getChildByName('props_label_gold').getComponent(Label).string
		if (str) {
			str = str.replace(/,/g, "")
		} else {
			str = '0'
		}
		let props_label_gold = this.propertyNode.props_spr_win_box.getChildByName('props_label_gold')
		this.propertyNode.props_label_rate.active = true
		this.propertyNode.props_label_rate.getComponent(Label).string =  rate + 'x'
		tween(props_label_gold)
			.to(0.5, { scale: new Vec3(1.2, 1.2) })
			.call(() => {
				this.propertyNode && tween(this.propertyNode.props_label_rate)
					.to(0.5, { position: new Vec3(0, 0, 1), scale: new Vec3(0, 0) })
					.call(() => {
						this.propertyNode.props_spr_win_box && (new StepNumber(Number(str), (this.total * rate), (num) => {
							this.propertyNode && (this.propertyNode.props_spr_win_box.getChildByName('props_label_gold').getComponent(Label).string = (+num.toFixed(0)).formatAmountWithCommas())
						}, () => {
							this.scheduleOnce(()=>{
								this.propertyNode && this.initTotalPanl()
							},0.5)
						})).start()
					})
					.start()
			})
			.start();
	}
	private initTotalPanl() {
		this.propertyNode.props_label_rate.active = false
		this.propertyNode.props_label_rate.setPosition(new Vec3(0, -20, 1))
		this.propertyNode.props_label_rate.setScale(new Vec3(1, 1))
		this.propertyNode.props_spr_win_box.getChildByName('props_label_gold').setPosition(new Vec3(0, 5))
		this.propertyNode.props_spr_win_box.getChildByName('props_label_gold').setScale(new Vec3(1, 1))
	}
	private startFalling() {

	}
	private clearTheDrop() {

	}
	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

