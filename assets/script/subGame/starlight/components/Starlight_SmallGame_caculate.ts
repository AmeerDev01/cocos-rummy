import { _decorator, instantiate, Component, Label, Layout, Node, ScrollView, tween, Vec3, log, Sprite, sp } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import StepNumber from '../../../utils/StepNumber';
import SkeletonAnimationPlayer from '../SkeletonPlay';
import { AutoLauncherType } from '../type';
import { starlight_Audio } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	type?:Number,
	total?: number,
	autoLaunchType?: AutoLauncherType,
}
export interface IEvent {
	/**自灭弹窗 */
	killSelfHandler: () => void
}

@ccclass('Starlight_SmallGame_caculate')
export class Starlight_SmallGame_caculate extends BaseComponent<IState, IProps, IEvent> {
	ani=true
	start() {

	}

	protected propertyNode = {
		props_node_start: new Node(),
		props_node_end: new Node(),
		props_label_goldNum: new Label(),
		props_label_sgNum: new Label(),
		props_calcuate_box: new Node(),
	}

	public props: IProps = {
		type:1,
		total:0,
		autoLaunchType:AutoLauncherType.NONE
	}

	public events: IEvent = {
		killSelfHandler: () => { }
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_calcuate_box.on(Node.EventType.TOUCH_END, (e => {
			if(this.ani){
				this.ani=false
				if(this.props.type===1){
					this.propertyNode.props_label_sgNum&&(this.propertyNode.props_label_sgNum.string=this.props.total.formatAmountWithCommas())
				}else{
					this.propertyNode.props_label_goldNum&&(this.propertyNode.props_label_goldNum.string=this.props.total.formatAmountWithCommas())
				}
				starlight_Audio.playOneShot(SoundPathDefine.FREE_TRANS)
				new SkeletonAnimationPlayer(this.propertyNode.props_calcuate_box.getComponent(sp.Skeleton), "cx3", false, () => {
					this.scheduleOnce(()=>{
					this.ani=true
						this.events && this.events.killSelfHandler()
					},1)
				}).playAnimation();
			}
		}))
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if(key === "type" || key==="total" ){
			if(this.props.type===1){
				this.propertyNode.props_node_start.active=true
				this.propertyNode.props_node_end.active=false
				let ani=new SkeletonAnimationPlayer(this.propertyNode.props_calcuate_box.getComponent(sp.Skeleton), "cx", false, () => {
					(new StepNumber(0, value.cur, (num) => {
						this.propertyNode && this.propertyNode.props_label_sgNum && (this.propertyNode.props_label_sgNum.string = (+num).formatAmountWithCommas())
					})).start()
					ani.changeAnimation('cx2', false, () => {
						if(this.props.autoLaunchType!==AutoLauncherType.NONE){
							this.scheduleOnce(()=>{
								this.events && this.events.killSelfHandler()
							},2)
						}
					})
				});
				ani.playAnimation();
			}	
			if(this.props.type===2){
				this.propertyNode.props_node_start.active=false
				this.propertyNode.props_node_end.active=true
				let ani=new SkeletonAnimationPlayer(this.propertyNode.props_calcuate_box.getComponent(sp.Skeleton), "cx", false, () => {
					(new StepNumber(0, value.cur, (num) => {
						this.propertyNode && this.propertyNode.props_label_goldNum && (this.propertyNode.props_label_goldNum.string = (+num).formatAmountWithCommas())
					},()=>{})).start()
					if(this.props.autoLaunchType!==AutoLauncherType.NONE){
						this.scheduleOnce(()=>{
							this.events && this.events.killSelfHandler()
						},2)
					}
				});
				ani.playAnimation();
			}
		}
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

