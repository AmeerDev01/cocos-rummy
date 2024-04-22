import { _decorator, Button, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BtnSetSprZCH')
export class BtnSetSprZCH extends Button {
    /**显示显示图片 */
    @property({ type: SpriteFrame, tooltip: "显示时图片" })
    sf1: SpriteFrame = null;
    /**禁用显示图片 */
    @property({ type: SpriteFrame, tooltip: "禁用时图片" })
    sf2: SpriteFrame = null;
    @property({ tooltip: "是否播放按钮音效" })
    isSound: boolean = true;
    protected onLoad(): void {
        this.setBtnTouchType(1)
        this.node.on(Button.EventType.CLICK, this.callback, this);
    }
    callback() {
        if (!this.isSound) {
            return;
        }
    }
    /**设置按钮点击类型 0没有缩放1缩放*/
    setBtnTouchType(type: number) {
        if (type == 0) {
            this.transition = Button.Transition.NONE;
        } else {
            this.transition = Button.Transition.SCALE;
            this.zoomScale = 0.9;
        }

    }
    setShow(isShow: boolean, isInteractable: boolean) {
        if (isShow) {
            if (this.sf1) {
                this.node.getComponent(Sprite).spriteFrame = this.sf1;
            }
        } else {
            if (this.sf2) {
                this.node.getComponent(Sprite).spriteFrame = this.sf2;
            }
        }
        this.node.getComponent(Button).interactable = isInteractable;
    }
}


