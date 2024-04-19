import {_decorator} from 'cc';
import phoenix_BaseComponent from './phoenix_BaseComponent';

const {ccclass, property} = _decorator;

@ccclass('phoenix_FlyBg')
export class phoenix_FlyBg extends phoenix_BaseComponent {
    start() {
        this.mirrorImage()
    }

    protected bindEvent(): void {
    }

    protected bindUI(): void {
        this.node.setSiblingIndex(1000)
    }

    mirrorImage() {
        const bl = Math.random() >= 0.5;
        this.node.getChildByName('caishenguochang').setScale(bl ? -1 : 1, 1)
    }

    update(deltaTime: number) {

    }
}

