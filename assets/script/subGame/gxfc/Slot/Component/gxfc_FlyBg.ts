import { _decorator, Component, Node } from 'cc';
import BaseComponent from './BaseComponent';
const { ccclass, property } = _decorator;

@ccclass('gxfc_FlyBg')
export class gxfc_FlyBg extends BaseComponent {
    start() {
        this.mirrorImage()
    }
    protected bindEvent(): void {
	}

    protected bindUI(): void {
        this.node.setSiblingIndex(1000)
	}
    mirrorImage(){
        const bl=Math.random() >=0.5;
        this.node.getChildByName('fly').setScale(bl?-1:1,1)
    }
    update(deltaTime: number) {

    }
}

