import { _decorator, Component, Node } from 'cc';
import GodWealth_BaseComponent from './GodWealth_BaseComponent';
const { ccclass, property } = _decorator;

@ccclass('GodWealth_FlyBg')
export class GodWealth_FlyBg extends GodWealth_BaseComponent {
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
        this.node.getChildByName('caishenguochang').setScale(bl?-1:1,1)
    }
    update(deltaTime: number) {

    }
}

