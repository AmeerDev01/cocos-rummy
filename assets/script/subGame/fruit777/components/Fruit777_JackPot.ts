import { _decorator, Component, Label, Node, tween, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import TaskScheduler, { Task } from '../../../utils/TaskScheduler';
import { footerViewModel } from '../index';
import config from '../config';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	fruitHeader: {
		banana: boolean,
		strawberry: boolean,
		apple: boolean,
		grape: boolean,
		watermelon: boolean
	},
	level: number
}
export interface IEvent {

}

@ccclass('Fruit777_JackPot')
export class Fruit777_JackPot extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}
	private taskScheduler: TaskScheduler = new TaskScheduler()
	protected propertyNode = {
		props_header: new Node(),
		props_level_body: new Node(),
		props_spr_jackpot_banban: new Node(),
		props_spr_jackpot_strawberry: new Node(),
		props_spr_jackpot_apple: new Node(),
		props_spr_jackpot_grape: new Node(),
		props_spr_jackpot_watermelon: new Node(),
		props_spr_level_bg: new Node()
	}

	public props: IProps = {
		fruitHeader: {
			banana: false,
			strawberry: false,
			apple: false,
			grape: false,
			watermelon: false
		},
		level: 0
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
		if (key === "fruitHeader") {
			this.propertyNode.props_spr_jackpot_banban.getChildByName("light").active = this.props.fruitHeader.banana
			this.propertyNode.props_spr_jackpot_strawberry.getChildByName("light").active = this.props.fruitHeader.strawberry
			this.propertyNode.props_spr_jackpot_apple.getChildByName("light").active = this.props.fruitHeader.apple
			this.propertyNode.props_spr_jackpot_grape.getChildByName("light").active = this.props.fruitHeader.grape
			this.propertyNode.props_spr_jackpot_watermelon.getChildByName("light").active = this.props.fruitHeader.watermelon
		}
		if (key === "level") {
			this.taskScheduler.joinqQueue(new Task((done) => {
				this.propertyNode.props_spr_level_bg.active = true
				const { x, y, z } = this.propertyNode.props_spr_level_bg.position
				tween(this.propertyNode.props_spr_level_bg).to(0.3, { position: new Vec3(x, y + 37.8, z) }).call(() => done()).start()
			}))
		}
	}

	protected bindUI(): void {
		const value = footerViewModel.comp.getPositionData().value
		this.propertyNode.props_level_body.children[0].getComponent(Label).string = "+" + (value * config.treasureBoxAddition.multiple1).formatAmountWithCommas()
		this.propertyNode.props_level_body.children[1].getComponent(Label).string = "+" + (value * config.treasureBoxAddition.multiple2).formatAmountWithCommas()
		// this.propertyNode.props_level_body.children[2].getComponent(Label).string = "3 Rotasi gratis + " + this.getGratisAmount(value * config.treasureBoxAddition.multiple3)//(value * config.treasureBoxAddition.multiple3 / 1000).toFixed(1) + "K"
		// this.propertyNode.props_level_body.children[3].getComponent(Label).string = "6 Rotasi gratis + " + this.getGratisAmount(value * config.treasureBoxAddition.multiple3)
		this.propertyNode.props_level_body.children[2].getComponent(Label).string = "3 Rotasi gratis + " + (value * config.treasureBoxAddition.multiple3).formatAmountWithLetter()
		this.propertyNode.props_level_body.children[3].getComponent(Label).string = "6 Rotasi gratis + " + (value * config.treasureBoxAddition.multiple4).formatAmountWithLetter()
	}

	private getGratisAmount(amount: number) {
		if (amount > 1000) {
			return (amount / 1000).toFixed(0) + "K"
		} else {
			return amount.toFixed(0)
		}
	}

	protected destroyCallBack() {
		this.taskScheduler.destoryQueue()
	}

	public getHeaderNode() {
		return this.propertyNode.props_header
	}
	public getLevelBodyNode() {
		return this.propertyNode.props_level_body
	}

	update(deltaTime: number) {

	}
}

