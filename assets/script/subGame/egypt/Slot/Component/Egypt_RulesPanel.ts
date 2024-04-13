import { _decorator, PageView, Node, tween, UIOpacity, UITransform, Vec3 } from 'cc';
import BaseComponent from './BaseComponent';
const { ccclass, property } = _decorator;

@ccclass('Egypt_RulesPanel')
export class Egypt_RulesPanel extends BaseComponent {

	@property(Node)
	closeButton: Node = null

	// @property(Node)
	// mainPanel: Node = null

	// @property(Node)
	// contentWrap: Node = null
    @property(PageView)
    pageView:PageView=null
	start() {

	}
	private showIndex: number = 0
	protected bindEvent(): void {
		this.closeButton.on(Node.EventType.TOUCH_END, () => {
			this.hidePanel()
		})
        this._nodes['btnLeft'].on(Node.EventType.TOUCH_END,()=>{
            const index = this.pageView.getCurrentPageIndex();
            if (index > 0) {
                this.pageView.scrollToPage(index - 1, 0.5); // 切换到上一页，可设置切换动画时间
            }
        })
        this._nodes['btnRight'].on(Node.EventType.TOUCH_END,()=>{
            const index = this.pageView.getCurrentPageIndex();
            if (index < this.pageView.getPages().length - 1) {
                this.pageView.scrollToPage(index + 1, 0.5); // 切换到下一页，可设置切换动画时间
            }
        })
		// let con_x: number = 0

		// this.showIndexMark()
		// let width = this.contentWrap.getComponent(UITransform).width
		// this.contentWrap.on(Node.EventType.TOUCH_START, (e) => {
		// 	con_x = e.getLocation().x
		// })
		// this.contentWrap.on(Node.EventType.TOUCH_MOVE, () => { })
		// this.contentWrap.on(Node.EventType.TOUCH_END, (e) => {
		// 	const t = e.getLocation().x - con_x
		// 	if (t < 0) {
		// 		//向左滑动
		// 		if (this.contentWrap.children[0].position.x <= -(this.contentWrap.children.length - 1) * width) {
		// 			return
		// 		}
		// 		this.contentWrap.children.forEach((child, index) => {
		// 			tween(child).to(0.1, { position: new Vec3(child.position.x - width, child.position.y) }).start()
		// 		})
		// 		this.showIndex++
		// 	}
		// 	if (t > 0) {
		// 		//向右滑动
		// 		if (this.contentWrap.children[this.contentWrap.children.length - 1].position.x + 100 >= (this.contentWrap.children.length - 1) * width) {
		// 			return
		// 		}
		// 		this.contentWrap.children.forEach((child, index) => {
		// 			tween(child).to(0.1, { position: new Vec3(child.position.x + width, child.position.y) }).start()
		// 		})
		// 		this.showIndex--
		// 	}
		// 	this.showIndexMark()
		// })
	}
	private showIndexMark() {
		// this.indexMark.children.forEach((item, i) => {
		// 	if (this.showIndex !== i) {
		// 		item.children[0].active = false
		// 	} else {
		// 		item.children[0].active = true
		// 	}
		// })
	}

	protected bindUI(): void {
		const uiOpacity = this.node.getComponent(UIOpacity)
		uiOpacity.opacity = 0;
		// this.mainPanel.setScale(0.8, 0.8)
		// tween(this.mainPanel).to(0.4, { scale: new Vec3(1, 1, 1) }, { easing: "backOut" }).start()
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

