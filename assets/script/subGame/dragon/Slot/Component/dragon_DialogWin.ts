import { _decorator, Component, Label, Node, tween, UIOpacity, Vec2, Vec3 } from 'cc';
import BaseComponent from './BaseComponent';
const { ccclass, property } = _decorator;


export enum DialogType {
	BIG_WIN = "bigWin",
	JACKPOT = "jackpot",
	MEGA_WIN = "megaWin",
	SUPER_WIN = "superWin",
	SETTLE = "settle",
	JACKPOTS = "jackPots",
	SPECIALGAME = "specialGame",
	YOUWON = "youWon",
	JACKPOTPOPUPS = "jackpotpopUps",
}
@ccclass('dragon_DialogWin')
export class dragon_DialogWin extends BaseComponent {

	@property(Node)
	insider: Node = null

	@property(Node)
	bigWin: Node = null

	@property(Node)
	jackpot: Node = null

	@property(Node)
	megaWin: Node = null

	@property(Node)
	superWin: Node = null

	@property(Node)
	specialGame: Node = null

	@property(Node)
	jackPots: Node = null

	@property(Node)
	youWon: Node = null

	@property(Node)
	jackpotpopUps: Node = null

	@property(Node)
	settle: Node = null

	@property(Node)
	SpriteSplash: Node = null

	start() {

	}

	protected bindEvent(): void {
	}

	protected bindUI(): void {
	}

	private timer: number
	private showNode: Node
	/**
	 * 大奖弹窗
	 * @param dialogType 展示类型
	 * @param amount 展示金额
	 * @param keepTime 持续时间（若传0，则不自动关闭）
	 * @param cb 回调函数
	 */
	public showDialog(dialogType: DialogType, amount: number, keepTime: number, cb?: () => void,length?,tatalNum?) {
		this.insider.setScale(new Vec3(0, 0, 0))
		const uiOpacity = this.insider.getComponent(UIOpacity)
		uiOpacity.opacity = 0;
		this.showNode = this[dialogType] as Node
		this.showNode.active = true;
		if(dialogType==DialogType.JACKPOTPOPUPS){
			if(length>=15){
				this.showNode.getChildByName('Title_Youwon2').active=true
			}else if(length>=10){
				this.showNode.getChildByName('Title_Youwon1').active=true
			}else if(length>=5){
				this.showNode.getChildByName('Title_Youwon').active=true
			}
			amount=tatalNum
		}
		this.SpriteSplash.active = false;
		this.showNode.getChildByName("score").getComponent(Label).string = amount + ''//.formatAmountWithCommas()
		tween(this.insider).to(0.5, { scale: new Vec3(1, 1, 0) }, { easing: "backOut" }).start()
		tween(uiOpacity).to(0.2, { opacity: 255 }).call(() => {
			this.SpriteSplash.active = true;
		}).start()
		keepTime && (this.timer = window.setTimeout(() => {
			this.hideDialog()
			this.node.destroy()
			cb && cb()
		}, keepTime))
	}

	public hideDialog() {
		const uiOpacity = this.insider.getComponent(UIOpacity)
		this.SpriteSplash.active = false;
		tween(this.insider).to(0.3, { scale: new Vec3(0, 0, 0) }).start()
		tween(uiOpacity).to(0.3, { opacity: 0 }).call(() => {
			this.showNode.active = false
		}).start()
		this.timer && window.clearTimeout(this.timer)
	}

	update(deltaTime: number) {

	}

}

