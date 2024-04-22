import { _decorator, Component, Node, sp, Sprite, SpriteFrame } from 'cc';


const { ccclass, property } = _decorator;

@ccclass('GameBoxDFDC')
export class GameBoxDFDC extends Component {
    /**显示图标 */
    @property(Sprite)
    sprIcon: Sprite = null;
    /**icon图片 */
    @property(SpriteFrame)
    sfIconList: SpriteFrame[] = [];

    /**当前显示的图标 */
    iconID: number = 0;

    /**显示图标 图片*/
    showIconSprite(icon: number) {
        this.iconID = icon;
        this.sprIcon.node.active = true;
        this.sprIcon.spriteFrame = this.sfIconList[this.iconID - 1];
    }

}


