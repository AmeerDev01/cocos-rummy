import { _decorator, Component, Node, sp, Sprite, SpriteFrame } from 'cc';
import { BaseGameDataMgeZCH } from '../../base/BaseGameDataMgeZCH';
import { showIconSpine } from '../../config/DefinedDataTypeZCH';
import { SpinePlayZCH } from '../../base/show/SpinePlayZCH';
import { BaseEventZCH } from '../../base/BaseEventZCH';
import { GameConfigZCH } from '../../config/GameConfigZCH';


const { ccclass, property } = _decorator;

@ccclass('GameBoxZCH')
export class GameBoxZCH extends Component {
    /**图片节点 */
    @property(Node)
    ndSpr: Node = null;
    /**显示图标 */
    @property(Sprite)
    sprIcon: Sprite = null;
    /**糊图 */
    @property(Sprite)
    sprIcon2: Sprite = null;
    /**icon图片 */
    @property(SpriteFrame)
    sfIconList: SpriteFrame[] = [];
    /**糊图 */
    @property(SpriteFrame)
    sfIconList2: SpriteFrame[] = [];



    /**动画节点 */
    @property(Node)
    ndSpine: Node = null;
    /**icon 动画 节点*/
    @property(sp.Skeleton)
    spIcon: sp.Skeleton = null;
    /**底框动画 */
    @property(Node)
    ndDi: Node = null;
    /**动画数据 */
    @property(sp.SkeletonData)
    spDataList: sp.SkeletonData[] = [];
    /**光圈动画 */
    @property(sp.Skeleton)
    spGuang: sp.Skeleton = null;
    /**是否显示免费游戏的图标 */
    isShowFreeIcon: boolean = false;
    /**数据 */
    icondData: showIconSpine = null;
    /**当前显示的图标 */
    iconID: number = 0;
    protected onLoad(): void {
        this.spGuang.setCompleteListener(() => {
            this.spGuang.node.active = false;
        })
    }
    iconShow() {
        this.showIconSprite(this.iconID, 1);
    }
    /**显示图标 图片 type0不限icon 1 正常显示icon 2 显示糊图*/
    showIconSprite(icon: number, type: number) {
        this.iconID = icon;
        this.ndSpr.active = true;
        this.ndSpine.active = false;
        if (this.isShowFreeIcon) {
            let num = BaseGameDataMgeZCH.Instance.getIcon10();
            if (num != icon && icon != GameConfigZCH.iconID.wild) {
                this.sprIcon.node.active = false;
                this.sprIcon2.node.active = false;
                return;
            }
        }
        if (type == 0) {
            this.sprIcon.spriteFrame = this.sfIconList[this.iconID - 1];
            this.sprIcon2.node.active = false;
            this.sprIcon.node.active = false;
        } else if (type == 1) {
            // let is10 = BaseGameDataMgeZCH.Instance.getCurrIsFreeGame();
            // let isFirst = BaseGameDataMgeZCH.Instance.getFirstFree();
            // if (is10 && !isFirst) {
            //     let num = BaseGameDataMgeZCH.Instance.getIcon10();
            //     if (num != icon && icon != GameConfigZCH.iconID.wild) {
            //         this.sprIcon.node.active = false;
            //         this.sprIcon2.node.active = false;
            //         return;
            //     }
            // }
            this.sprIcon2.node.active = false;
            this.sprIcon.node.active = true;
            this.sprIcon.spriteFrame = this.sfIconList[this.iconID - 1];
        } else if (type == 2) {

            this.sprIcon.node.active = false;
            this.sprIcon2.node.active = true;
            this.sprIcon2.spriteFrame = this.sfIconList2[this.iconID - 1];
        }
    }
    /**设置图片 */
    showSprite(data: showIconSpine) {
        this.icondData = data;
        this.showIconSprite(data.icon, 1);
    }
    /**设置免费游戏的icon显示 */
    showFreeIcon(isShow) {
        this.isShowFreeIcon = isShow;
    }
    /**播放动画 */
    showSpine(data: showIconSpine, isWin: boolean, cd?: Function) {
        this.ndSpr.active = false;
        this.ndSpine.active = true;
        this.icondData = data;
        this.iconID = data.icon;
        this.spIcon.skeletonData = this.spDataList[data.icon - 1];
        this.ndDi.active = isWin;
        this.spGuang.node.active = false;
        let list = ["spawn", "win", "win_idle"];
        this.spIcon.node.getComponent(SpinePlayZCH).setListName(list);
        BaseEventZCH.Instance.emit(GameConfigZCH.gameEventName.iconSpineIng, data);
        this.spIcon.node.getComponent(SpinePlayZCH).showSpine(0, false, () => {
            this.spIcon.node.getComponent(SpinePlayZCH).showSpine(1, false, () => {
                if (cd) {
                    cd();
                }
                this.spIcon.node.getComponent(SpinePlayZCH).showSpine(2, true, () => {

                })
            })
        })
    }

    /**播放光驱动画 */
    showGuang() {
        this.spGuang.node.active = true;
        this.spGuang.setAnimation(0, "daianji", false);

    }
    /**获取动画数据 */
    getSpinData(): showIconSpine {
        return this.icondData;
    }
    getIsIcon(data: showIconSpine): boolean {

        if (data.x == this.icondData.x && data.y == this.icondData.y) {
            return true;
        }
        return false;
    }
}


