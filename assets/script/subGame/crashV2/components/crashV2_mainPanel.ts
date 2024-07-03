import { _decorator, Color, Component, game, instantiate, Label, Node, ParticleSystem2D, ProgressBar, sp, Sprite, tween, Tween, UITransform, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { updateGold } from '../store/actions/game';
import { GameType, ROCKETANI } from '../type';
import SkeletonAnimationPlayer from '../../../utils/SkeletonPlay';
import config from '../config';
import { CrashV2_Audio } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	gameType: GameType
}
export interface IEvent {

}

@ccclass('CrashV2_mainPanel')
export class CrashV2_mainPanel extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}
	protected propertyNode = {
		/** 火箭动画 */
		props_rocket: new Node(),
		/** 星星 */
		props_xingxing: new Node(),
		/** 进度条 */
		props_persiapan_putaran: new Node(),
		/** 垂直线 */
		props_vertical: new Node(),
		/** 横线 */
		props_lnexbox: new Node(),
		/** 曲线遮罩 */
		props_Mask: new Node(),
		/** 曲线 */
		props_xian: new Node(),
		/** 结果显示 */
		props_outcome: new Node(),
	}

	public props: IProps = {
		gameType: 0
	}

	public events: IEvent = {

	}

	protected initState() {
		return {

		}
	}
	time: number = 0;
	/** 总时间 */
	totalTime: number = 15
	/** 当前时间 */
	currentTime: number
	/* 滚动开始 */
	scrollToBegin: boolean = false
	// 初始y
	firstY: number = 1
	// 初始秒数
	firstSeconds: number = 10
	/** 火箭动画 */
	rocketAnimation: SkeletonAnimationPlayer
	/**  结果 */
	overallHeight: number = 0
	/**  画线时间 */
	rockettime: number = 0;
	protected bindEvent(): void {
		this.scheduleOnce(() => {
			this.dispatch(updateGold(5000))
		}, 1)
		let ske = this.propertyNode.props_rocket.getChildByName('spine').getComponent(sp.Skeleton)
		this.rocketAnimation = new SkeletonAnimationPlayer(ske, ROCKETANI.DENGDAIXAIZHU, true)
	}

	// 初始化ui
	gameInit() {
		this.propertyNode.props_xingxing.active = false
		this.propertyNode.props_persiapan_putaran.active = false
	}
	/** 主面板的切换 */
	private switchPanels() {
		this.gameInit()
		if (this.props.gameType === GameType.BET) {
			this.propertyNode.props_persiapan_putaran.active = true
			this.propertyNode.props_rocket.active=true
			this.currentTime = 15
			this.startTime(this.currentTime)
			this.restVertical()
			this.propertyNode.props_outcome.active = false
		}
		else if (this.props.gameType === GameType.FLIGHT) {
			this.propertyNode.props_xingxing.active = true
			this.propertyNode.props_outcome.active = true
			this.rocketAnimation.changeAnimation(ROCKETANI.QIBU, true)
			this.propertyNode.props_rocket.setPosition(new Vec3(176, -504))
			this.propertyNode.props_rocket.eulerAngles = new Vec3(0, 0, -80);
			this.propertyNode.props_xingxing.getComponent(ParticleSystem2D).emissionRate = 8
			this.propertyNode.props_xingxing.getComponent(ParticleSystem2D).resetSystem()
			this.propertyNode.props_Mask.active = true
			this.overallHeight =11.5
			CrashV2_Audio.playOneShot(SoundPathDefine.XIU)
			this.theRocketTakesOff(this.overallHeight)
		}
		else if (this.props.gameType === GameType.SETTLEMENT) {
			this.scrollToBegin = false
			this.propertyNode.props_xingxing.getComponent(ParticleSystem2D).stopSystem()
		}
	}
	set time_c(num: number) {
		this.time = num;
		let Label_text = this.propertyNode.props_persiapan_putaran.getChildByName('Label_text').getComponent(Label)
		Label_text.string = `Jada game dimulai ${(this.currentTime - num).toFixed(2)}s`
		this.propertyNode.props_persiapan_putaran.getChildByName('Progress_bar').getComponent(ProgressBar).progress = (this.currentTime - num) / this.totalTime
	}
	get time_c(): number {
		return this.time;
	}
	
	public startTime(time: number) {
		this.time = 0
		Tween.stopAllByTarget(this);
		tween(<any>this).to(time, { time_c: time }).start();
	}

	/** 火箭飞行计数器 */
	public theRocketTakesOff(rockettime: number) {
		this.rockettime = 0
		Tween.stopAllByTarget(this);
		tween(<any>this).to(rockettime, { rockettime_c: rockettime }).start();
	}
	get rockettime_c(): number {
		return this.rockettime;
	}
	set rockettime_c(num: number) {
		this.propertyNode.props_outcome.getChildByName('label').getComponent(Label).string = `${(num).toFixed(2)}x`
		if (num > 3) {
			// this.scrollToBegin = true
			this.moveVertical(num)
			this.moveline(num)
		}
		this.moveTheCurve()
		if (num >= this.overallHeight) {
			this.rocketExplosion()
		}
	}
	/** 火箭爆炸 */
	rocketExplosion(){
		this.scrollToBegin = false
		this.rocketAnimation.changeAnimation(ROCKETANI.DIE1, false,()=>{
			this.rocketAnimation.changeAnimation(ROCKETANI.DIE2,false,()=>{
				this.propertyNode.props_rocket.active=false
			})
		})
		this.propertyNode.props_xian.getComponent(Sprite).grayscale=true
		this.propertyNode.props_xian.getComponent(Sprite).color=new Color(255,98,88,255)
		this.propertyNode.props_outcome.getChildByName('label').getComponent(Label).color=new Color(255,98,88,255)
		// #FF0000
	}
	/** 重置所有 */
	restVertical() {
		/** 重置参数 */
		this.firstSeconds = 10
		this.firstY = 1
		this.propertyNode.props_vertical.children.forEach((item, i) => {
			item.setPosition(new Vec3(0, (i * 130)))
			this.firstY += 1
			item.getChildByName('Label').getComponent(Label).string = this.firstY.toFixed(2) + 'x'
		})

		this.propertyNode.props_lnexbox.children.forEach((item, i) => {
			item.setPosition(new Vec3(840 + (i * 200), 0))
			item.getChildByName('Label').getComponent(Label).string = 5 + i + 's'
		})
		// 904 258
		this.propertyNode.props_Mask.getComponent(UITransform).setContentSize(0, 258)
		this.propertyNode.props_Mask.active = false
		// 904 254 
		this.propertyNode.props_xian.getComponent(UITransform).setContentSize(891, 90)
		// 火箭回归等待
		this.propertyNode.props_rocket.setPosition(new Vec3(294, -274))
		this.propertyNode.props_rocket.eulerAngles = new Vec3(0, 0, 0);
		this.rocketAnimation.changeAnimation(ROCKETANI.DENGDAIXAIZHU, true)
		this.propertyNode.props_xian.getComponent(Sprite).grayscale=false
		this.propertyNode.props_xian.getComponent(Sprite).color=new Color(255,255,255,255)
		this.propertyNode.props_outcome.getChildByName('label').getComponent(Label).color=new Color(148,254,150,255)
	}

	/** 移动垂直线 */
	moveVertical(num) {
		//垂直进度条滚动
		this.propertyNode.props_vertical.children.forEach((item: any) => {
			let y = item.getPosition().y
			item.resetFlag = false;
			item.setPosition(new Vec3(0, y - 130 / 60))
			if (y <= -130 && !item.resetFlag) {
				item.resetFlag = true; // 设置状态标志
				item.setPosition(new Vec3(0, 520))
				this.firstY += 1
				item.getChildByName('Label').getComponent(Label).string = this.firstY.toFixed(2) + 'x'
			}
		})
	}
	/** 移动横线 */
	moveline(num) {
		this.propertyNode.props_lnexbox.children.forEach((item: any) => {
			let x = item.getPosition().x
			item.resetFlag = false;
			item.setPosition(new Vec3(x - 160 / 60, 0))
			if (x <= -160 && !item.resetFlag) {
				item.resetFlag = true; // 设置状态标志
				this.firstSeconds += 1
				item.getChildByName('Label').getComponent(Label).string = this.firstSeconds + 's'
				item.setPosition(new Vec3(1040, 0))
			}
		})
	}
	/** 移动曲线 */
	moveTheCurve() {
		let width = this.propertyNode.props_Mask.getComponent(UITransform).width
		if (width < 904) { //  先横着飞
			this.propertyNode.props_Mask.getComponent(UITransform).setContentSize(width + 9.1, 258)
			let y = this.propertyNode.props_rocket.getPosition().y
			if (y < 100) {
				this.propertyNode.props_rocket.setPosition(new Vec3(width + config.speed + 20, y + 0.5)) // 适当移动Y轴
			} else {
				this.propertyNode.props_rocket.setPosition(new Vec3(width + config.speed + 20, y))//  偏移20到正中
			}
			let z = this.propertyNode.props_rocket.eulerAngles.z
			if (z < -60) {
				this.propertyNode.props_rocket.eulerAngles = new Vec3(0, 0, z + 0.1); // 适当修正角度
			}
		} else { //  缓慢上升
			let height = this.propertyNode.props_xian.getComponent(UITransform).height
			let { x, y } = this.propertyNode.props_rocket.getPosition()
			let z = this.propertyNode.props_rocket.eulerAngles.z
			if (height < 254) { // 修正线的高度到254
				if(this.rocketAnimation.getAnimationName() == ROCKETANI.QIBU){
					this.rocketAnimation.changeAnimation(ROCKETANI.PASHENG, true)
				}
				this.propertyNode.props_xian.getComponent(UITransform).setContentSize(891, height + 2)
			}
			if (y < -160) {
				this.propertyNode.props_rocket.setPosition(new Vec3(x, y + 3)) // 修正火箭停止高度到-160
			}
			if (z < 0) {//  火箭方向角度修正
				this.propertyNode.props_rocket.eulerAngles = new Vec3(0, 0, z + 0.7);
			}
		}
	}
	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === 'gameType') {
			this.switchPanels()
		}
	}

	protected bindUI(): void {

	}


	update(deltaTime: number) {
		if (this.scrollToBegin) {

		}
		// this.timer += deltaTime;
		// if (this.timer >= 1) {
		// 	this.updateCount++;
		// 	this.timer = 0;
		// }
		// // 如果计数器小于最大更新次数，执行更新操作
		// if (this.updateCount <= this.maxUpdateCount) {
		// 	// 执行更新操作
		// 	console.log('Update ', this.updateCount);
		// }
		// // 如果计数器达到最大更新次数，停止更新
		// if (this.updateCount >= this.maxUpdateCount) {
		// 	this.enabled = false; // 停止执行 update 函数
		// 	console.log('Update stopped');
		// }
	}
}

