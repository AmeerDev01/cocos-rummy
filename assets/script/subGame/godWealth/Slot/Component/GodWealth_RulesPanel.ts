 import { _decorator, Node, tween, UIOpacity, UITransform, Vec3, color, Label, } from 'cc';
import GodWealth_BaseComponent from './GodWealth_BaseComponent';
 import {AudioManager, SoundList} from "../Managr/AudioManager";
const { ccclass, property } = _decorator;

@ccclass('dragon_RulesPanel')
export class dragon_RulesPanel extends GodWealth_BaseComponent {

	@property(Node)
	closeButton: Node = null

	//Game gratis按钮
	@property(Node)
	gratisButton: Node = null

	// Mangkuk_harta_karun按钮
	@property(Node)
	karunButton: Node = null

	// Mangkuk_harta_karun文字
	@property(Node)
	karunLabel: Node = null

	// Aturan_dasar按钮
	@property(Node)
	dasarButton: Node = null


	@property(Node)
	mainPanel: Node = null

	@property(Node)
	contentWrap: Node = null

	@property(Node)
	indexMark: Node = null
	// Game gratis文本框
	@property(Node)
	gratisLabel: Node = null
	// Aturan_dasar文本框
	@property(Node)
	dasarLabel: Node = null
	// Game gratis面板
	@property(Node)
	gratisPanel: Node = null
	// Aturan_dasar面板
	@property(Node)
	dasarPanel: Node = null
	// Mangkuk_harta_karun面板
	@property(Node)
	karunPanel: Node = null


	start() {

	}
	private showIndex: number = 0
	protected bindEvent(): void {
		this.closeButton.on(Node.EventType.TOUCH_END, () => {
			this.hidePanel()
		})
		// 点击Game gratis按钮
		this.gratisButton.on(Node.EventType.TOUCH_END, () => {
			// 显示Game gratis页面
			this.gratisPanel.active = true
			//  隐藏Aturan_dasar页面
			this.dasarPanel.active = false
			// 隐藏Mangkuk_harta_karun页面
			this.karunPanel.active = false
		})

		// 点击Mangkuk_harta_karun按钮
		this.karunButton.on(Node.EventType.TOUCH_END, () => {
			// 隐藏显示页面
			this.karunPanel.active = true
			this.gratisPanel.active = false
			this.dasarPanel.active = false
		})
		// 点击Aturan_dasar按钮
		this.dasarButton.on(Node.EventType.TOUCH_END, () => {
			// 隐藏显示页面
			this.dasarPanel.active = true
			this.karunPanel.active = false
			this.gratisPanel.active = false
		})
		// 点击 Aturan_dasar文字改变颜色
		this.dasarLabel.on(Node.EventType.TOUCH_END, () => {
			this.dasarLabel.getComponent(Label).color = color().fromHEX('#942600')
			// Aturan_dasar未选中状态
			this.gratisLabel.getComponent(Label).color = color().fromHEX('#F8C55C')
			//Mangkuk_harta_karun未选中状态
			this.karunLabel.getComponent(Label).color = color().fromHEX('#F8C55C')
		})
		// 点击 Game gratis文字改变颜色
		this.gratisLabel.on(Node.EventType.TOUCH_END, () => {
			this.gratisLabel.getComponent(Label).color = color().fromHEX('#942600')
			// Aturan_dasar未选中状态
			this.dasarLabel.getComponent(Label).color = color().fromHEX('#F8C55C')
			//Mangkuk_harta_karun未选中状态
			this.karunLabel.getComponent(Label).color = color().fromHEX('#F8C55C')
		})

		// 点击Mangkuk_harta_karun文字改变颜色
		this.karunLabel.on(Node.EventType.TOUCH_END, () => {
			this.karunLabel.getComponent(Label).color = color().fromHEX('#942600')
			// Aturan_dasar未选中状态
			this.dasarLabel.getComponent(Label).color = color().fromHEX('#F8C55C')
			//Mangkuk_harta_karun未选中状态
			this.gratisLabel.getComponent(Label).color = color().fromHEX('#F8C55C')
		})
		let con_x: number = 0
		this.showIndexMark()
		let width = this.contentWrap.getComponent(UITransform).width
		this.contentWrap.on(Node.EventType.TOUCH_START, (e: { getLocation: () => { (): any; new(): any; x: number; }; }) => {
			con_x = e.getLocation().x
		})
		this.contentWrap.on(Node.EventType.TOUCH_MOVE, () => { })
		this.contentWrap.on(Node.EventType.TOUCH_END, (e: { getLocation: () => { (): any; new(): any; x: number; }; }) => {
			const t = e.getLocation().x - con_x
			if (t < 0) {
				//向左滑动
                AudioManager.getInstance().playSound(SoundList.dragAndDropToTurnThePage)
                if (this.contentWrap.children[0].position.x <= -(this.contentWrap.children.length - 1) * width) {
					return
				}
				this.contentWrap.children.forEach((child, index) => {
					tween(child).to(0.1, { position: new Vec3(child.position.x - width, child.position.y) }).start()
				})
				this.showIndex++
			}
			if (t > 0) {
				//向右滑动
                AudioManager.getInstance().playSound(SoundList.dragAndDropToTurnThePage)
				if (this.contentWrap.children[this.contentWrap.children.length - 1].position.x + 100 >= (this.contentWrap.children.length - 1) * width) {
					return
				}
				this.contentWrap.children.forEach((child, index) => {
					tween(child).to(0.1, { position: new Vec3(child.position.x + width, child.position.y) }).start()
				})
				this.showIndex--
			}
			this.showIndexMark()
		})
	}

	private showIndexMark() {
		this.indexMark.children.forEach((item, i) => {
			if (this.showIndex !== i) {
				item.children[0].active = false
			} else {
				item.children[0].active = true
			}
		})
	}

	protected bindUI(): void {
		const uiOpacity = this.node.getComponent(UIOpacity)
		uiOpacity.opacity = 0;
		this.mainPanel.setScale(0.8, 0.8)
		tween(this.mainPanel).to(0.4, { scale: new Vec3(1, 1, 1) }, { easing: "backOut" }).start()
		tween(uiOpacity).to(0.4, { opacity: 255 }).call(() => { }).start()
	}

	public hidePanel() {
		const uiOpacity = this.node.getComponent(UIOpacity)
		tween(this.node).to(0.2, { scale: new Vec3(0, 0, 0) }).start()
		tween(uiOpacity).to(0.2, { opacity: 0 }).call(() => {
			this.node.destroy()
		}).start()
	}

	update(deltaTime: number) {

	}
}

