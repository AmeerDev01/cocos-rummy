import {_decorator, Label, Node, tween, UIOpacity, Vec3} from 'cc';
import phoenix_BaseComponent from './phoenix_BaseComponent';

const {ccclass, property} = _decorator;

@ccclass('phoenix_Toast')
export class phoenix_Toast extends phoenix_BaseComponent {

    @property(Node)
    content: Node = null

    start() {

    }

    public showContent(content) {
        this.node.active = true
        this.content.getComponent(Label).string = content
        const uiOpacity = this.node.getComponent(UIOpacity)
        this.node.setScale(0.8, 0.8)
        tween(this.node).to(0.4, {scale: new Vec3(1, 1, 1)}, {easing: "backOut"}).start()
        tween(uiOpacity).to(0.4, {opacity: 255}).call(() => {
        }).start()
        this.scheduleOnce(() => this.hidePanel(), 3)
    }

    protected bindEvent(): void {
        //this.node.active = false
    }

    protected bindUI(): void {
        this.node.setScale(0.7, 0.7)
        const uiOpacity = this.node.getComponent(UIOpacity)
        uiOpacity.opacity = 0;
    }

    public hidePanel() {
        const uiOpacity = this.node.getComponent(UIOpacity)
        tween(this.node).to(0.2, {scale: new Vec3(0, 0, 0)}).start()
        tween(uiOpacity).to(0.2, {opacity: 0}).call(() => {
            this.node.destroy()
        }).start()
    }

    update(deltaTime: number) {

    }
}

