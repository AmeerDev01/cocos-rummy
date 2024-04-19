import { _decorator, Component, Node } from 'cc';
import BaseComponent from './BaseComponent';
const { ccclass, property } = _decorator;

@ccclass('Egypt_FlyBg')
export class Egypt_FlyBg extends BaseComponent {
    start() {

    }
    protected bindEvent(): void {
	}

    protected bindUI(): void {
        this.node.setSiblingIndex(1000)
	}

    update(deltaTime: number) {

    }
}

