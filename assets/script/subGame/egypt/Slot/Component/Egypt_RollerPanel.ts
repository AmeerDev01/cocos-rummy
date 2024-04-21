import { _decorator, sp, instantiate, Layout, Node, Prefab, tween, UIOpacity, Vec3 } from 'cc';
import { ProxyDefine } from '../Const/ProxyDefine';
import BaseComponent from './BaseComponent';
import { Egypt_Roller } from './Egypt_Roller';
import { RollerType } from '../Repositories/SlotRepository';
import { AudioManager, SoundList } from '../Managr/AudioManager';
import { getSpeedTime } from '../../../../utils/SlotSpeedConfig';
const { ccclass, property } = _decorator;

@ccclass('Egypt_RollerPanel')
export class Egypt_RollerPanel extends BaseComponent {
	@property(Prefab)
	roller: Prefab = null

	public rollerList: Array<Node> = []
	private isSpeed;

	protected bindUI(): void {
		const rollerData = this.getRollProxy().getRepository()
		const layout = this.node.getComponent(Layout)
		// layout.spacingX = 35

		rollerData.rollerList.forEach((roller, index) => {
			const rollerNode = instantiate(this.roller);
			(rollerNode.getComponent("Egypt_Roller") as Egypt_Roller).bindRollerData(index, roller)
			rollerNode.setPosition(new Vec3(0, rollerNode.position.y))
			this.root.addChild(rollerNode)
			this.rollerList.push(rollerNode)
		})


		// const rollerNode = instantiate(this.roller);
		// (rollerNode.getComponent("Roller") as Roller).bindRollerData(0, rollerData.rollerList.data[0])
		// rollerNode.setPosition(new Vec3(0, rollerNode.position.y))
		// this.root.addChild(rollerNode)
		// this.rollerList.push(rollerNode)

		// this.node.getParent().setScale(0.95, 0.95)
		this.node.getParent().setSiblingIndex(100)

		const ui = this.node.parent.getComponent(UIOpacity)
		ui.opacity = 0;
		tween().target(ui).to(0.5, { opacity: 255 }).call(() => { }).start()
	}

	/**所有的滑槽都开始转动，传入停止信号发出后要停止的序列号(从1开始) */
	public startAllRoll(stopIndexArr: number[], isSpeed: boolean = false) {
		this.isSpeed = isSpeed;
		AudioManager.getInstance().playSound(SoundList.rollerFast);
		this.rollerList.forEach((roller, i) => {
			(<Egypt_Roller>roller.getComponent("Egypt_Roller")).startRoll(stopIndexArr[i], isSpeed)
		})
	}

	/**发出停止的信号（启动的时候已经传入了停止位置，不是马上停止，转到位置才停，这里需要传入闪动的图标队列） */
	public stopAllRoll(isManualStop: boolean, callBack: () => void) {
		if(isManualStop){
			this.isSpeed = true;
		}
		this.stopRoll(0, callBack);
	}

	private stopRoll(i: number, callBack: () => void) {
		// 这里调停止滚动的速度
		const time = getSpeedTime(this.isSpeed)
		const isEnd = i >= this.rollerList.length - 1;
		const rollerComp = this.rollerList[i].getComponent("Egypt_Roller") as Egypt_Roller;
		rollerComp.stopRoll((rollerIndex: number, rollerData: RollerType) => {
			if (this.node.isValid) {
				if (isEnd) {
					callBack()
				}
			}
		})
		this.scheduleOnce(() => {
			if (this.node.isValid) {
				if (!isEnd) {
					this.stopRoll(i + 1, callBack)
				}
			}
		}, time)
	}

	public togglesALLLayer(state: boolean) {
		this.rollerList.forEach((roller, i) => {
			(<Egypt_Roller>roller.getComponent("Egypt_Roller")).togglesThePopUpLayerState(state)
		})
	}
	/**图标闪动 */
	public iconFlicker(mode: 'index' | 'coord', targetArr: number[][], allstate: boolean = false, cb?) {
		this.rollerList.forEach((roller, i) => {
			(<Egypt_Roller>roller.getComponent("Egypt_Roller")).setIconEffect(mode, [], true)
			if (targetArr[i].length && allstate) {
				(<Egypt_Roller>roller.getComponent("Egypt_Roller")).setIconEffect(mode, targetArr[i]);
				setTimeout(() => {
					this.clearStatus()
					cb()
				}, 1000)
			} else if (targetArr[i].length) {
				(<Egypt_Roller>roller.getComponent("Egypt_Roller")).setIconEffect(mode, targetArr[i], true);
			}
		})
	}
	/**图标定住 */
	public iconDock(mode: 'index' | 'coord', targetArr: number[][][]) {
		this.rollerList.forEach((roller, i) => {
			(<Egypt_Roller>roller.getComponent("Egypt_Roller")).removeAllDockIcon()
			targetArr[i][1].length && (<Egypt_Roller>roller.getComponent("Egypt_Roller")).addDockIcon(targetArr[i][1])
		})
	}
	public clearStatus() {
		this.rollerList.forEach((roller, i) => {
			(<Egypt_Roller>roller.getComponent("Egypt_Roller")).setIconEffect('coord', [], true)
		})
	}
	/**卸载面板(淡出) */
	public uninstall(done?: () => void) {
		const ui = this.node.parent.getComponent(UIOpacity)
		tween().target(ui).to(0.5, { opacity: 0 }).call(() => {
			// this.node.parent.removeAllChildren()
			this.node.parent.destroy()
			done && done()
		}).start()

		// tween().target(icon).to(0.5, {
		// 	position: new Vec3(icon.position.x, icon.position.y + deviation - (this.rollerData.rollerheight + this.rollerData.intervalHeight))
		// }, {
		// 	easing: "backOut"//"elasticOut"
		// }).call(() => {
		// 	count++
		// 	if (count === this.RollerLayOut.children.length) {
		// 		this.stopCallBack()
		// 	}
		// }).start()
	}

	protected bindEvent(): void {

	}

	start() {

	}

	update(deltaTime: number) {

	}


}
