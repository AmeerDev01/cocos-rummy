import { _decorator, Component, Label, Node } from 'cc';
import config from '../config';
import BaseComponent from "./BaseComponent";
const { ccclass, property } = _decorator;

@ccclass('gxfc_SlotPanel')
export class gxfc_SlotPanel extends BaseComponent {
	// @property(Node)
	// major: Node = null

	@property(Node)
	moni: Node = null

	start() {
		const item = config.winning.find(i => i.id === 2)
		// this.major.getComponent(Label).string = item.minRate.formatAmountWithCommas()
		// this.moni.getComponent(Label).string = item.maxRate.formatAmountWithCommas()
	}
    protected bindUI(): void {

    }
    protected bindEvent(): void {

    }
	update(deltaTime: number) {

	}
}

