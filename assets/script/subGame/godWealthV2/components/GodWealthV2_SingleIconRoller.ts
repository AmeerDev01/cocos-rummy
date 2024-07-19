import { _decorator, Node, Vec3 } from "cc";
import { BaseComponent } from "../../../base/BaseComponent";
import { IconPool } from "../IconPool";
import config from "../config";
import { GodWealthV2Icon } from "./GodWealthV2_Icon";
import { GameType, GameTypeInfo, getColumnLockIconArr, IconId } from "../type";
import { cacheData } from "../dataTransfer";
const { ccclass, property } = _decorator;

export interface IState {}

export interface IProps {
  gameTypeInfo: GameTypeInfo;
}
export interface IEvent {}

@ccclass("GodWealthV2_SingleIconRoller")
export class GodWealthV2_SingleIconRoller extends BaseComponent<
  IState,
  IProps,
  IEvent
> {
  start() {}

  private lastIndex = 0;
  private showIconCount = 1;
  private stopIconIndex = -1;
  private columnIndex = 0;
  private slotIndex = 0;
  private iconPool: IconPool;
  private iconRollerQueue: any[];
  private iconArr: GodWealthV2Icon[] = [];
  private intervalHeight = config.normalRollOption.intervalHeight;

  private rollOverCallback;
  private props_column_effect_node: Node;
  private iconAnimationNode: Node;

  private isRoll = false;
  private rollCount = 0;
  private rollerSpeed = config.subGameRollOption.rollerSpeed;

  protected propertyNode = {
    props_icon_list: new Node()
  };

  public props: IProps = {
    gameTypeInfo: {
      lastGameType: GameType.MAIN,
      viewGameType: GameType.MAIN,
      currGameType: GameType.MAIN,
      leftCount: 0
    }
  };

  public events: IEvent = {};

  protected initState() {
    return {};
  }

  public setColumnEffectNode(props_column_effect_node: Node) {
    this.props_column_effect_node = props_column_effect_node;
    this.iconAnimationNode = this.props_column_effect_node.getChildByName(
      "props_icon_animation"
    );
  }

  public initSlot(
    columnIndex: number,
    slotIndex: number,
    lastIndex: number,
    iconPool: IconPool
  ) {
    this.columnIndex = columnIndex;
    this.iconRollerQueue = config.iconRollerQueue[this.columnIndex];
    this.slotIndex = slotIndex;
    this.lastIndex = this.addIconIndex(lastIndex, 1);
    this.iconPool = iconPool;

    this.initColumn(this.showIconCount + 1);
  }

  public getSlotIndex() {
    return this.slotIndex;
  }

  private initColumn(iconCount: number) {
    for (let i = 0; i < iconCount; i++) {
      this.joinIcon();
    }
  }

  private joinIcon() {
    const length = this.iconArr.length;

    this.lastIndex =
      this.lastIndex - 1 < 0
        ? this.iconRollerQueue.length - 1
        : --this.lastIndex;
    const iconId = this.iconRollerQueue[this.lastIndex];
    const iconConfig = config.icon.find((v) => v.id === iconId);

    const icon = this.iconPool.getIcon(
      iconConfig,
      this.propertyNode.props_icon_list,
      this.lastIndex
    );
    const position = new Vec3(0, 0);
    if (length > 0) {
      const lastNode = this.iconArr[length - 1];
      position.y =
        lastNode.getPosition().y + lastNode.getHeight() + this.intervalHeight;
    }

    icon.getNode().setPosition(position);
    this.iconArr.push(icon);
    if (iconConfig.id === 12) {
      icon.amountNode.active = true;
    }
    this.setBeetleAmount(icon);
  }

  /**
   * 设置宝盒上面的数字
   */
  private setBeetleAmount(icon: GodWealthV2Icon) {
    if (icon.getId() !== IconId.BEETLE) {
      return;
    }

    if (
      this.props.gameTypeInfo.currGameType !== GameType.SUBGAME2 &&
      this.props.gameTypeInfo.viewGameType === GameType.SUBGAME2
    ) {
      return;
    }

    const diff = this.calIndexDiff(this.lastIndex, this.stopIconIndex);
    if (diff > 1) {
      return;
    }

    const lockIconDatas = getColumnLockIconArr(
      cacheData.fixedChessboardIcon,
      this.columnIndex
    );

    if (lockIconDatas.length === 0) {
      return;
    }
    const lockIconData = lockIconDatas.find((v) => v.index === this.slotIndex);
    if (lockIconData) {
      icon.setAmount(lockIconData.amount);
    }
  }

  private calIndexDiff(index1: number, index2: number) {
    let diff = index1 - index2;
    if (index1 < index2) {
      diff = index1 + this.iconRollerQueue.length - index2;
    }
    return diff;
  }

  protected bindEvent(): void {}

  protected useProps(key: keyof IProps, value: { pre: any; cur: any }) {}

  private hideIconWin() {
    this.stopWinIcon();
    this.iconAnimationNode.children.forEach((v) => {
      v.name === "bigNode" && v.destroy();
    });
    this.iconAnimationNode.removeAllChildren();
  }

  public startRoll() {
    this.isRoll = true;
    this.rollCount = 0;
    this.rollerSpeed = config.subGameRollOption.rollerSpeed;
  }

  public stopRoll(stopIconIndex: number, rollOverCallback: Function) {
    this.stopIconIndex = stopIconIndex;
    this.rollOverCallback = rollOverCallback;

    const diff = this.slotIndex === 2 ? 0 : this.slotIndex === 0 ? 2 : 1;
    this.stopIconIndex = this.addIconIndex(this.stopIconIndex, diff);
    this.addLastJoinIconIndex(this.stopIconIndex, 3);
  }

  private addLastJoinIconIndex(stopIndex: number, value: number) {
    this.lastIndex = this.addIconIndex(stopIndex, value);
  }

  private addIconIndex(index: number, value: number) {
    let newValue = index + value;
    if (newValue >= this.iconRollerQueue.length) {
      newValue = newValue - this.iconRollerQueue.length;
    }
    return newValue;
  }

  private getStopIconIndex() {
    return this.stopIconIndex;
  }

  protected bindUI(): void {}

  private getRollSpeed() {
    if (this.rollCount <= 30 || this.stopIconIndex === -1) {
      return this.rollerSpeed;
    }
    let rollerSpeed = this.rollerSpeed;
    if (this.rollCount % 5 === 0) {
      rollerSpeed -= 5;
      rollerSpeed = rollerSpeed <= 0 ? 1 : rollerSpeed;
      this.rollerSpeed = rollerSpeed;
    }

    return rollerSpeed;
  }

  public stopWinIcon() {
    this.iconArr.forEach((v) => v.hideWin());
  }

  public playWinIcon(index) {
    const icon = this.iconArr[index];

    if (icon.getId() !== IconId.WILD) {
      icon.playWin(this.iconAnimationNode);
    }
  }

  private rollOverHandle(endIcon: GodWealthV2Icon) {
    this.scheduleOnce(() => {
      this.node && this.node.isValid && this.rollOverCallback();
    }, 0.05);
  }

  /**
   * 根据索引获得图标的位置
   * @param index
   * @returns
   */
  private getIconPosByIndex(index: number) {
    const height = config.normalRollOption.singleRollerHeight;
    const interval = this.intervalHeight * (index + 1);
    const y = interval + height / 2 + height * index;
    return new Vec3(0, y);
  }

  public getFirstIcon() {
    return this.iconArr.shift();
  }

  public rollerIcon() {
    this.rollCount++;
    const speed = this.getRollSpeed();
    this.iconArr.forEach((v) => {
      v.setPosition(new Vec3(v.getPosition().x, v.getPosition().y - speed));
    });
    const frist = this.iconArr[0];
    const hideY = -(frist.getHeight() + this.intervalHeight);
    if (frist.getPosition().y <= hideY) {
      this.iconArr.shift();
      frist.restore();
      this.joinIcon();

      const endIcon = this.iconArr[0];
      if (endIcon.getIconIndex() === this.getStopIconIndex()) {
        this.isRoll = false;
        this.stopIconIndex = -1;
        this.rollOverHandle(endIcon);
      }
    }
  }
  protected onDestroy(): void {
    this.iconArr.forEach((v) => v.restore());
    this.iconArr = [];
    this.iconRollerQueue = null;
    this.props_column_effect_node = null;
    this.iconAnimationNode = null;
  }
  update(deltaTime: number) {
    if (this.isRoll) {
      this.rollerIcon();
    }
  }
}
