import { _decorator, Button, Component, Label, Layout, Node, ScrollView, sp } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { GameType } from '../type';
import SkeletonAnimationPlayer from '../SkeletonPlay';
import { starlight_Audio } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	roleAttack?: number,
	gameType?: number

}
export interface IEvent {

}
const enum ROLE_STATE {
	MAIN = 'idle',
	ATTACK = 'idle_j',
}
@ccclass('Starlight_RoleView')
export class Starlight_RoleView extends BaseComponent<IState, IProps, IEvent> {
	private ani
	start() {
		this.ani = new SkeletonAnimationPlayer(this.propertyNode.props_princess.getComponent(sp.Skeleton), ROLE_STATE.MAIN, true, () => { });
	}

	protected propertyNode = {
		props_princess: new Node(),
		props_princess2: new Node(),
		props_flash: new Node()
	}

	public props: IProps = {
		roleAttack: 0,
		gameType: 0
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
		if (key === 'gameType') {
			new SkeletonAnimationPlayer(this.propertyNode.props_princess.getComponent(sp.Skeleton), ROLE_STATE.MAIN, true).playAnimation();
			// if (this.props.gameType === GameType.MAIN) {
				
			// } else if (this.props.gameType === GameType.SUBGAME1) {
			// 	new SkeletonAnimationPlayer(this.propertyNode.props_princess.getComponent(sp.Skeleton), ROLE_STATE.ATTACK, false).playAnimation();
			// }
		}
		if (key === 'roleAttack') {
			if (value.cur === 0) {
				if (this.ani) {
					starlight_Audio.playOneShot(SoundPathDefine.THOR_SMILES)
					this.ani = new SkeletonAnimationPlayer(this.propertyNode.props_princess.getComponent(sp.Skeleton), ROLE_STATE.MAIN, true, () => { });
					this.ani.playAnimation()
				}
			} else if (value.cur === 1) {
				if (this.ani) {
					this.ani.changeAnimation(ROLE_STATE.ATTACK, false, () => {
						this.ani.changeAnimation(ROLE_STATE.MAIN, true, () => { })
					})
				}
			} else if (value.cur === 2) {
				this.propertyNode.props_princess.active = false
				this.propertyNode.props_princess2.active = true
				new SkeletonAnimationPlayer(this.propertyNode.props_princess2.getComponent(sp.Skeleton), 'idle4', false, () => {
					this.propertyNode.props_princess.active = true
					this.propertyNode.props_princess2.active = false
				}).playAnimation();
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

