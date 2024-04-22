import { Node, Sprite, Vec3, instantiate, sp, tween } from "cc"
import ViewModel from "../../base/ViewModel"
import { Common_GiftUser, IProps, IEvent, GIFT_ICON_CONFIG } from "../components/Common_GiftUser"
import { commonAudio, sourceManageSeletor } from "../../hall"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { isChatShieldingUser } from "../../utils/tool"
import { SoundPathDefine } from "../sourceDefine/soundDefine"

export const BANKER_ID = "1100000";

export enum GameType {
  /**鱼虾蟹 */
  YXX = 1,
  /**龙虎 */
  DRAGON_TIGER = 2,
  /**BANDER球球 */
  BANDAR_QIU_QIU = 3,
  /**BANDER */
  BANDAR = 4,
}

export type UserInfo = {
  memberId: string,
  head: number,
  name: string,
  gold: number
}

let initStatus = false;

class GiftUserViewModel extends ViewModel<Common_GiftUser, IProps, IEvent> {
  constructor() {
    super('Common_GiftUser')
  }
  protected begin() {
    initStatus = false;
  }
  public connect(initProps: Partial<IProps> = {}) {
    this.inject(initProps, () => {
      return {
      }
    })
    return this
  }

  private static instance: GiftUserViewModel = null;

  /**
   * 显示礼物窗口
   * @param parent 
   * @param gameType 游戏类型
   * @param userInfo 
   * @param startPos 
   * @param endPos 
   */
  public static show(parent: Node, gameType: GameType, userInfo: UserInfo | null, callback: (value: number, memberId?: string) => void) {
    if (initStatus) {
      return;
    }
    initStatus = true;
    if (this.instance) {
      this.instance.viewNode.active = true;
      this.instance.viewNode.setSiblingIndex(this.instance.viewNode.parent.children.length);
      initStatus = false;
    } else {
      this.instance = new GiftUserViewModel().mountView(sourceManageSeletor("common").getFile(PrefabPathDefine.GIFT_USER).source).appendTo(parent)
    }
    const memberId = userInfo ? userInfo.memberId : BANKER_ID;
    commonAudio.playOneShot(SoundPathDefine.spin);
    this.instance.setProps({
      isUser: userInfo ? true : false,
      gameType: gameType,
      head: userInfo ? userInfo.head : 0,
      gold: userInfo ? userInfo.gold : 0,
      name: userInfo ? userInfo.name : "",
      memberId: userInfo ? userInfo.memberId : "",
    }).setEvent({
      selectGift: (value: number, count: number) => {
        for (let i = 0; i < count; i++) {
          window.setTimeout(() => {
            callback && callback(value, memberId);
          }, 200 * i)
        }
      }
    })
  }

  /**
   * 飞礼物
   * @param parent 
   * @param fromMemberId 开始的用户id
   * @param toMemberId 结束的用户id
   * @param startPos 
   * @param endPos 
   * @param value 
   * @param count 执行次数
   */
  public static flyGift(parent: Node, fromMemberId: string, toMemberId: string, startPos: Vec3, endPos: Vec3, value: number) {
    if (isChatShieldingUser(fromMemberId) || isChatShieldingUser(toMemberId)) {
      return;
    }
    if (!startPos || !endPos) {
      return;
    }
    const sourceFile = sourceManageSeletor("common").getFile(PrefabPathDefine.GIFT_ANIMATION);
    if (!sourceFile) {
      console.error(PrefabPathDefine.GIFT_ANIMATION, " prefab not fround")
      return;
    }

    const iconConfig = this.getIconConfig(value)
    if (!iconConfig) {
      console.error("gift spriteFrame is null")
      return;
    }

    const node = instantiate(sourceFile.source) as Node;
    parent.addChild(node);

    const sprGiftNode = node.getChildByName("props_spr_gift").getComponent(Sprite);
    sprGiftNode.spriteFrame = sourceManageSeletor("common").getFile(iconConfig.spriteFramePath).source;
    const giftAnimationNode = node.getChildByName("props_gift_animation")
    const skeleton = giftAnimationNode.getComponent(sp.Skeleton);

    const source = sourceManageSeletor("common").getFile(iconConfig.skeletonPath).source
    skeleton.skeletonData = source;
    // skeleton.paused = true;
    giftAnimationNode.active = false;
    skeleton.setCompleteListener(() => {
      // this.instance && this.instance.comp && this.instance.comp.scheduleOnce(() => {
      if (node.isValid) {
        node.destroy();
      }
        // })
      })
      node.setWorldPosition(startPos)
      
      endPos = endPos.add(iconConfig.offset)
      tween(node).to(0.5, { worldPosition: endPos, angle: iconConfig.angle }).call(() => {
        if (node.isValid) {
          skeleton.setAnimation(0, "animation", false);
          giftAnimationNode.active = true;
          sprGiftNode.node.active = false;
          // skeleton.paused = false;
          commonAudio.playOneShot(iconConfig.dub);
      }
    }).start();
  }

  private static getIconConfig(value: number) {
    const iconConfig = GIFT_ICON_CONFIG.find(v => v.value === value)
    if (iconConfig) {
      return iconConfig;
    }
    return undefined;
  }
}

export default GiftUserViewModel