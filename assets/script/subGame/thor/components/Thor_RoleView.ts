import { _decorator, Button, Component, Label, Layout, Node, ScrollView, sp } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { GameType } from '../type';
import SkeletonAnimationPlayer from '../SkeletonPlay';
import { thor_Audio } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	roleAttack?: boolean,
	gameType?: number

}
export interface IEvent {

}
const enum ROLE_STATE {
	MAIN = 'anima_3',
	SUBGAME1 = 'anima_2',
	ATTACK = 'anima_1',
}
@ccclass('Thor_RoleView')
export class Thor_RoleView extends BaseComponent<IState, IProps, IEvent> {
	private ani
	start() {

	}

	protected propertyNode = {
		props_thor: new Node()
	}

	public props: IProps = {
		roleAttack: false,
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
			if (this.props.gameType === GameType.MAIN) {
				new SkeletonAnimationPlayer(this.propertyNode.props_thor.getComponent(sp.Skeleton), ROLE_STATE.MAIN, true).playAnimation();
			} else if (this.props.gameType === GameType.SUBGAME1) {
				new SkeletonAnimationPlayer(this.propertyNode.props_thor.getComponent(sp.Skeleton), ROLE_STATE.SUBGAME1, true).playAnimation();
			}
		}
		if (key === 'roleAttack') {
			if (!value.cur) {
				if (!this.ani) {
					thor_Audio.playOneShot(SoundPathDefine.THOR_SMILES)
					this.ani = this.propertyNode.props_thor && new SkeletonAnimationPlayer(this.propertyNode.props_thor.getComponent(sp.Skeleton), ROLE_STATE.ATTACK, false, () => {
						if (this.props.gameType === GameType.MAIN) {
							this.ani.changeAnimation(ROLE_STATE.MAIN, true, () => {
								this.ani = null
							})
						} else {
							this.ani.changeAnimation(ROLE_STATE.SUBGAME1, true, () => {
								this.ani = null
							})
						}

					});
					this.ani.playAnimation()
				}

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

