import { _decorator, Button, Label, Node, Toggle, Color } from "cc";
import { BaseComponent } from "../../../base/BaseComponent";
import {
  setAutoLauncherInfo,
  setBetDropDownList,
  updatePositionId
} from "../store/actions/game";
import { updateRollerStatus, updateSpeedStatus } from "../store/actions/roller";
import {
  AutoLauncherInfo,
  AutoLauncherType,
  calBetAmount,
  GameType,
  GameTypeInfo,
  isAuto,
  RollerStatus
} from "../type";
import config from "../config";
import StepNumber from "../../../utils/StepNumber";
import { cacheData } from "../dataTransfer";
import { godWealthV2_Audio, mainViewModel } from "../index";
import { SoundPathDefine } from "../sourceDefine/soundDefine";
import StepNumberV2 from "../../../utils/StepNumberV2";
import { global } from "../../../hall";
const { ccclass, property } = _decorator;

export interface IState {}

export interface IProps {
  rollerStatus: RollerStatus;
  autoLauncherInfo: AutoLauncherInfo;
  betDropDownlist: boolean;
  positionId: number;
  winloss: number;
  gameTypeInfo: GameTypeInfo;
  gold: number;
}
export interface IEvent {
  onSendBet: () => void;
  openHelpPanel: () => void;
}

@ccclass("GodWealthV2_Footer")
export class GodWealthV2_Footer extends BaseComponent<IState, IProps, IEvent> {
  start() {}
  private isLongPress = false;
  private longPressTime = 0;

  private executeEnding = false;
  private stepNumberV2: StepNumberV2 = new StepNumberV2(this);

  protected propertyNode = {
    props_startButton: new Node(),
    props_toggle_fast: new Node(),
    props_min_btn: new Node(),
    props_max_btn: new Node(),

    props_goodluck: new Node(),
    props_bottom_score: new Label(),
    props_word_down_menang: new Node(),
    props_betAmount: new Label(),
    props_lineCount: new Label(),
    props_spr_nomoney: new Node(),
    props_autoLaunch_label: new Node(),
    props_btn_down_auto: new Node()
  };

  public props: IProps = {
    rollerStatus: RollerStatus.END,
    autoLauncherInfo: null,
    betDropDownlist: false,
    positionId: 1,
    winloss: -1,
    gameTypeInfo: {
      lastGameType: GameType.MAIN,
      currGameType: GameType.MAIN,
      viewGameType: GameType.MAIN,
      leftCount: 0
    },
    gold: -1
  };

  public events: IEvent = {
    onSendBet: () => {},
    openHelpPanel: () => {}
  };

  protected initState() {
    return {};
  }
  private longPressHandleCallback;
  private longPressHandle() {
    if (this.node.isValid) {
      this.unscheduleLong();
      this.isLongPress = true;
      this.dispatch(setBetDropDownList(true));
    }
  }

  private unscheduleLong() {
    this.longPressHandleCallback &&
      this.unschedule(this.longPressHandleCallback);
    this.longPressHandleCallback = undefined;
  }

  protected bindEvent(): void {
    this.propertyNode.props_startButton.on(Node.EventType.TOUCH_START, () => {
      if (
        isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo) ||
        this.isLongPress ||
        !this.isMain() ||
        this.props.rollerStatus !== RollerStatus.END ||
        this.longPressHandleCallback
      ) {
        return;
      }
      this.longPressHandleCallback = this.longPressHandle.bind(this);
      this.schedule(
        this.longPressHandleCallback,
        config.normalRollOption.startButtonLangTime / 1000
      );
    });
    this.propertyNode.props_btn_down_auto
      .getComponent(Button)
      .node.on(Node.EventType.TOUCH_END, () => {
        const isDisable = this.getBtnStatus(
          this.propertyNode.props_btn_down_auto
        );
        if (!isDisable) {
          godWealthV2_Audio.playOneShot(SoundPathDefine.BTN_CLICK);
        }

        if (this.getAutoLauncherType() !== AutoLauncherType.NONE) {
          mainViewModel.comp.clearAuto();
        } else {
          if (this.isBtnDisable()) {
            return;
          } else if (this.isMain()) {
            mainViewModel.comp.openAoutoPanl();
          }
        }
      });
    this.propertyNode.props_startButton.on(Node.EventType.TOUCH_CANCEL, () => {
      this.isLongPress = false;
      this.unscheduleLong();
    });
    this.propertyNode.props_startButton.on(Node.EventType.TOUCH_END, () => {
      const isDisable = this.getBtnStatus(this.propertyNode.props_startButton);
      if (!isDisable) {
        godWealthV2_Audio.playOneShot(SoundPathDefine.BTN_CLICK);
      }

      this.unscheduleLong();

      if (this.isLongPress) {
        this.isLongPress = false;
        return;
      }
      if (!mainViewModel.isAuthDone) return;
      if (
        this.isMain() &&
        this.isEnd() &&
        this.props.gold < calBetAmount(this.props.positionId)
      ) {
        global.openShop();
        return;
      }

      if (this.props.betDropDownlist) {
        this.dispatch(setBetDropDownList(false));
      }

      if (this.isSubGame()) {
        return;
      }
      if (isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
        this.dispatch(
          setAutoLauncherInfo({
            autoLauncherType: AutoLauncherType.NONE,
            totalCount: 0,
            leftCount: 0
          })
        );
      } else {
        if (
          this.props.rollerStatus === RollerStatus.END &&
          !this.isChangeGame()
        ) {
          this.events.onSendBet();
        } else if (
          !this.isSubGame2() &&
          this.props.rollerStatus === RollerStatus.RUNNING &&
          !this.executeEnding
        ) {
          if (cacheData.rollerLaunchResult) {
            this.dispatch(updateRollerStatus(RollerStatus.ENDING));
          } else {
            this.executeEnding = true;
          }
        }
      }
    });

    this.propertyNode.props_toggle_fast.on(
      Toggle.EventType.TOGGLE,
      (e: Toggle) => {
        godWealthV2_Audio.playOneShot(SoundPathDefine.BTN_CLICK);
        this.dispatch(updateSpeedStatus(e.isChecked));
      }
    );

    const amount = config.betSwitcher[0].amount;
    this.propertyNode.props_min_btn.on(Node.EventType.TOUCH_END, () => {
      const isDisable = this.getBtnStatus(this.propertyNode.props_min_btn);
      if (!isDisable) {
        godWealthV2_Audio.playOneShot(SoundPathDefine.MIN_COIN);
      }

      if (
        this.isBtnDisable() ||
        !this.propertyNode.props_min_btn.getComponent(Button).enabled
      ) {
        return;
      }
      if (this.props.positionId <= amount[0].positionId) {
        return;
      }
      this.dispatch(updatePositionId(this.props.positionId - 1));
      this.updateSprMoney();
    });
    this.propertyNode.props_max_btn.on(Node.EventType.TOUCH_END, () => {
      const isDisable = this.getBtnStatus(this.propertyNode.props_max_btn);
      if (!isDisable) {
        godWealthV2_Audio.playOneShot(SoundPathDefine.MAX_COIN);
      }

      if (
        this.isBtnDisable() ||
        !this.propertyNode.props_max_btn.getComponent(Button).enabled
      ) {
        return;
      }
      if (this.props.positionId >= amount[amount.length - 1].positionId) {
        return;
      }
      this.dispatch(updatePositionId(this.props.positionId + 1));
      this.updateSprMoney();
    });

    this.propertyNode.props_spr_nomoney.on(Node.EventType.TOUCH_END, () => {
      godWealthV2_Audio.playOneShot(SoundPathDefine.BTN_CLICK);
      global.openShop();
    });
  }

  private updateStartButtonAutoType() {
    const startBgNode =
      this.propertyNode.props_startButton.getChildByName("STARTBG");
    const stopBgNode = this.propertyNode.props_startButton.getChildByName(
      "scrollingThePicture"
    );
    const autoNode = this.propertyNode.props_autoLaunch_label;
    const zi_AUTO =
      this.propertyNode.props_btn_down_auto.getChildByName("zi_AUTO");
    const limitNode =
      this.propertyNode.props_btn_down_auto.getChildByName("Limit");
    const props_sg_free = this.node.parent.getChildByName("props_sg_free");
    const auto = isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo);
    if (!this.isMain()) {
      autoNode.active = false;
      limitNode.active = false;
      startBgNode.active = false;
      stopBgNode.active = false;
      props_sg_free.active = true;
      props_sg_free
        .getChildByName("props_label_sg_num")
        .getComponent(Label).string = this.props.gameTypeInfo.leftCount + "";
    } else {
      props_sg_free.active = false;

      startBgNode.active =
        !auto && this.props.rollerStatus === RollerStatus.END;

      stopBgNode.active = !auto && this.props.rollerStatus !== RollerStatus.END;
      if (auto) {
        autoNode.active = !this.isLimit();
        zi_AUTO.active = false;
        limitNode.active = this.isLimit();
        if (!this.isLimit()) {
          autoNode.getComponent(Label).string =
            this.props.autoLauncherInfo.leftCount +
            "/" +
            this.props.autoLauncherInfo.totalCount;
        } else {
          limitNode
            .getChildByName("layout_limit")
            .getChildByName("Number")
            .getComponent(Label).string =
            this.props.autoLauncherInfo.leftCount + "";
        }
      } else {
        autoNode.active = false;
        zi_AUTO.active = true;
        limitNode.active = false;
      }
    }
  }

  private getAutoLauncherType() {
    return this.props.autoLauncherInfo
      ? this.props.autoLauncherInfo.autoLauncherType
      : AutoLauncherType.NONE;
  }

  private isRoll() {
    return this.props.rollerStatus !== RollerStatus.END;
  }

  /**
   * 更新开始按钮是否禁用
   */
  private updateStartButtonDisable() {
    const auto = isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo);

    if (auto) {
      this.updateBtnStatus(this.propertyNode.props_startButton, true);
      return;
    }
    if (
      (this.isMain() && this.props.rollerStatus === RollerStatus.ENDING) ||
      (this.isChangeGame() && this.isNextSubGame())
    ) {
      this.updateBtnStatus(this.propertyNode.props_startButton, true);
    } else {
      if (!this.isChangeGame()) {
        this.updateBtnStatus(this.propertyNode.props_startButton, false);
      }
    }
  }

  private isChangeGame() {
    return (
      this.props.gameTypeInfo &&
      this.props.gameTypeInfo.viewGameType !==
        this.props.gameTypeInfo.currGameType
    );
  }

  private isSubGame2() {
    return (
      this.props.gameTypeInfo &&
      this.props.gameTypeInfo.viewGameType === GameType.SUBGAME2
    );
  }

  private isNextSubGame() {
    return (
      this.props.gameTypeInfo.currGameType === GameType.SUBGAME2 ||
      this.props.gameTypeInfo.currGameType === GameType.SUBGAME1
    );
  }

  /**
   * 是否无限运行
   * @returns
   */
  private isLimit() {
    if (!this.props.autoLauncherInfo) {
      return false;
    }
    if (
      this.props.autoLauncherInfo.autoLauncherType === AutoLauncherType.LIMIT ||
      this.props.autoLauncherInfo.autoLauncherType ===
        AutoLauncherType.LAMIT_FAST
    ) {
      return true;
    }
    return false;
  }

  public isBtnDisable() {
    if (!this.isMain() || this.isChangeGame()) {
      return true;
    }
    return (
      this.props.rollerStatus !== RollerStatus.END ||
      isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo)
    );
  }

  private updateBtnDisableStatus() {
    const isDisable = this.isBtnDisable();
    this.updateBtnStatus(this.propertyNode.props_max_btn, isDisable);
    this.updateBtnStatus(this.propertyNode.props_min_btn, isDisable);

    if (!isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
      this.updateBtnStatus(this.propertyNode.props_btn_down_auto, isDisable);
    } else {
      if (!this.isMain()) {
        this.updateBtnStatus(this.propertyNode.props_btn_down_auto, true);
      } else {
        this.updateBtnStatus(this.propertyNode.props_btn_down_auto, false);
      }
    }

    this.propertyNode.props_max_btn.getComponent(Button).enabled = !isDisable;
    this.propertyNode.props_min_btn.getComponent(Button).enabled = !isDisable;

    this.propertyNode.props_btn_down_auto.getComponent(Button).enabled =
      !isDisable;
  }

  private updateBtnStatus(btnNode: Node, isDisable: boolean) {
    btnNode.getChildByName("disable").active = isDisable;
  }

  private getBtnStatus(btnNode: Node) {
    return btnNode.getChildByName("disable").active;
  }

  private updateMaxMinBetDisableStatus() {
    const amount = config.betSwitcher[0].amount;

    const isDisable = this.isBtnDisable();

    if (
      isDisable ||
      amount[amount.length - 1].positionId === this.props.positionId
    ) {
      this.updateBtnStatus(this.propertyNode.props_max_btn, true);

      this.propertyNode.props_max_btn.getComponent(Button).enabled = false;
    } else {
      this.updateBtnStatus(this.propertyNode.props_max_btn, false);

      this.propertyNode.props_max_btn.getComponent(Button).enabled = true;
    }

    if (isDisable || this.props.positionId === amount[0].positionId) {
      this.updateBtnStatus(this.propertyNode.props_min_btn, true);

      this.propertyNode.props_min_btn.getComponent(Button).enabled = false;
    } else {
      this.updateBtnStatus(this.propertyNode.props_min_btn, false);

      this.propertyNode.props_min_btn.getComponent(Button).enabled = true;
    }

    this.updateMaxBetStatus();
  }

  private getMaxBetPositionId() {
    const amount = config.betSwitcher[0].amount;
    let maxBetPositionId = 1;
    for (let i = amount.length - 1; i >= 0; i--) {
      const positionId = amount[i].positionId;
      const betAmount = calBetAmount(positionId);
      if (this.props.gold >= betAmount) {
        maxBetPositionId = positionId;
        break;
      }
    }
    return maxBetPositionId;
  }

  private updateMaxBetStatus() {
    const isMaxBet = this.props.positionId >= this.getMaxBetPositionId();
  }

  private updateBetInfo() {
    const amountInfo = config.betSwitcher[0].amount.find(
      (v) => v.positionId === this.props.positionId
    );
    this.propertyNode.props_betAmount.string = calBetAmount(
      this.props.positionId
    ).formatAmountWithCommas();
    this.propertyNode.props_lineCount.string =
      config.betAmount + "x" + amountInfo.value;
  }

  private updateScore(value: { pre: any; cur: any }) {
    this.propertyNode.props_goodluck.active = value.cur === 0;
    this.propertyNode.props_word_down_menang.active = value.cur > 0;
    this.propertyNode.props_bottom_score.node.active = value.cur > 0;

    new StepNumber(value.pre, value.cur, (num) => {
      if (this.node && this.node.isValid) {
        const value = Number(num);
        this.propertyNode.props_bottom_score.string =
          value.formatAmountWithCommas();
      }
    })
      .set(config.normalRollOption.numberRollerTime)
      .start();
  }

  protected useProps(
    key: keyof IProps | "_setDone",
    value: { pre: any; cur: any }
  ) {
    if (this.node && this.node.isValid) {
      if (key === "rollerStatus") {
        this.updateStartButtonDisable();
        this.updateStartButtonAutoType();
        this.updateBtnDisableStatus();
        this.roundEndAutoHandle();
      } else if (key === "autoLauncherInfo") {
        this.updateStartButtonAutoType();
        this.updateStartButtonDisable();
        this.updateBtnDisableStatus();
      } else if (key === "gameTypeInfo") {
        this.updateStartButtonAutoType();
        this.updateStartButtonDisable();
        this.updateBtnDisableStatus();
      } else if (key === "positionId") {
        this.updateBetInfo();
      } else if (key === "gold") {
        this.updateSprMoney();
      } else if (key === "winloss") {
        this.updateScore(value);
      } else if (key === "_setDone") {
        this.updateMaxMinBetDisableStatus();
      }
    }
  }

  private isMain() {
    return this.props.gameTypeInfo.viewGameType === GameType.MAIN;
  }

  private isEnd() {
    return this.props.rollerStatus === RollerStatus.END;
  }

  private isSubGame() {
    return this.props.gameTypeInfo.viewGameType !== GameType.MAIN;
  }

  private roundEndAutoHandle() {
    if (RollerStatus.END === this.props.rollerStatus) {
      if (isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
        if (this.isMain()) {
          const leftCount = this.isLimit()
            ? this.props.autoLauncherInfo.leftCount + 1
            : this.props.autoLauncherInfo.leftCount - 1;
          this.dispatch(
            setAutoLauncherInfo({
              autoLauncherType: this.props.autoLauncherInfo.autoLauncherType,
              totalCount: this.props.autoLauncherInfo.totalCount,
              leftCount
            })
          );
        }
        this.scheduleOnce(() => {
          this.node && this.node.isValid && this.events.onSendBet();
        }, 0.5);
      }

      if (!this.isMain()) {
        this.scheduleOnce(() => {
          this.node && this.node.isValid && this.events.onSendBet();
        }, 0.5);
      }
    }
  }

  private updateSprMoney() {
    if (this.props.gold < calBetAmount(this.props.positionId)) {
      if (!this.propertyNode.props_spr_nomoney.active) {
        this.propertyNode.props_spr_nomoney.active = true;
        this.propertyNode.props_betAmount.getComponent(Label).color = new Color(
          144,
          144,
          134
        );
        this.scheduleOnce(() => {
          this.propertyNode.props_spr_nomoney.active = false;
        }, 4);
      }
    } else {
      this.propertyNode.props_spr_nomoney.active = false;
      this.propertyNode.props_betAmount.getComponent(Label).color = new Color(
        255,
        255,
        255
      );
    }
  }

  protected bindUI(): void {
    mainViewModel.setGoodLuckPos(
      this.propertyNode.props_bottom_score.node.worldPosition
    );
    mainViewModel.setStartBtnPos(
      this.propertyNode.props_startButton.worldPosition
    );
    this.propertyNode.props_spr_nomoney.active = false;
  }

  update(deltaTime: number) {
    if (this.executeEnding && cacheData.rollerLaunchResult) {
      this.executeEnding = false;
      this.dispatch(updateRollerStatus(RollerStatus.ENDING));
    }
  }
}
