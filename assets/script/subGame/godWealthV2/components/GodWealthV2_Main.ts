import {
  _decorator,
  instantiate,
  Label,
  Node,
  sp,
  Sprite,
  Toggle,
  Vec3
} from "cc";
import { BaseComponent } from "../../../base/BaseComponent";
import {
  changeGame,
  setAutoLauncherInfo,
  setBetDropDownList,
  updateWinloss
} from "../store/actions/game";
import {
  AutoLauncherInfo,
  AutoLauncherType,
  GameType,
  GameTypeInfo,
  getAutoCount,
  isLimit,
  JackpotData,
  RollerStatus,
  SubGameAnimationPlayInfo
} from "../type";
import { updateRollerStatus } from "../store/actions/roller";
import { getNodeByNameDeep, omitStr } from "../../../utils/tool";
import { global } from "../../../hall";
import StepNumber from "../../../utils/StepNumber";
import config from "../config";
import {
  godWealthV2_Audio,
  mainViewModel,
  sourceManageSeletor
} from "../index";
import { PrefabPathDefine } from "../sourceDefine/prefabDefine";
import SkeletonAnimationPlayer from "../../../utils/SkeletonPlay";
import { SoundPathDefine } from "../sourceDefine/soundDefine";
const { ccclass, property } = _decorator;

export interface IState {}

export interface IProps {
  betDropDownlist: boolean;
  positionId: number;
  gold: number;
  gameTypeInfo: GameTypeInfo;
  subGameAnimationPlayInfo: SubGameAnimationPlayInfo;
  jackpotDatas: JackpotData[];
  jackpotTotalAmount: number;
  autoLauncherInfo: AutoLauncherInfo;
}
export interface IEvent {
  onSendBet: () => void;
}

@ccclass("GodWealthV2_Main")
export class GodWealthV2_Main extends BaseComponent<IState, IProps, IEvent> {
  start() {}
  private baseNodeOffectNode: Vec3;

  private baseNodeOrigonScale: Vec3 = new Vec3(1, 1, 1);
  private baseNodeScale: Vec3 = new Vec3(3, 3, 3);
  public majorNum: number = 0;
  public miniNum: number = 0;
  private isChecked: boolean = false;

  protected propertyNode = {
    props_main_bg: new Node(),
    props_mini_game_bg: new Node(),
    props_main_slot_bg: new Node(),

    props_Up_Feature: new Node(),
    props_buttomBar: new Node(),
    props_roller: new Node(),
    props_bet_dropdownlist: new Node(),
    props_autoLauncher: new Node(),
    props_jackpot_user_list: new Node(),
    props_jackpot_item: new Node(),
    props_jackpot_panel: new Node(),
    props_grand_number: new Label(),
    props_major_number: new Label(),
    props_mini_number: new Label(),
    props_God_tk_center: new Node(),
    props_btn_jackpot: new Node(),
    props_btn_off: new Node(),
    props_btn_confirm: new Node()
  };

  public props: IProps = {
    betDropDownlist: false,
    positionId: 0,
    gold: 0,
    gameTypeInfo: {
      lastGameType: GameType.NONE,
      currGameType: GameType.NONE,
      viewGameType: GameType.NONE,
      leftCount: 0
    },
    subGameAnimationPlayInfo: null,
    jackpotDatas: [],
    jackpotTotalAmount: 0,
    autoLauncherInfo: null
  };
  private selectedNode: Node;
  public events: IEvent = {
    onSendBet: () => {}
  };

  public getHeader() {
    return this.propertyNode.props_Up_Feature;
  }

  public getFooter() {
    return this.propertyNode.props_buttomBar;
  }

  public getRoller() {
    return this.propertyNode.props_roller;
  }

  protected initState() {
    return {};
  }

  protected bindEvent(): void {
    this.propertyNode.props_bet_dropdownlist.on(
      Node.EventType.TOUCH_END,
      () => {
        this.dispatch(setBetDropDownList(false));
      }
    );

    this.propertyNode.props_God_tk_center.on(Node.EventType.TOUCH_END, () => {
      godWealthV2_Audio.playOneShot(SoundPathDefine.BTN_CLICK);

      this.propertyNode.props_jackpot_panel.active =
        !this.propertyNode.props_jackpot_panel.active;
    });

    this.propertyNode.props_btn_jackpot.on(Node.EventType.TOUCH_END, () => {
      godWealthV2_Audio.playOneShot(SoundPathDefine.BTN_CLICK);
      this.propertyNode.props_jackpot_panel.active =
        !this.propertyNode.props_jackpot_panel.active;
      getNodeByNameDeep(
        "isjackpot",
        this.propertyNode.props_btn_jackpot
      ).active = !this.isChecked;
      this.isChecked = !this.isChecked;
    });

    this.listenerBetDropDownListEvent();
  }

  private listenerBetDropDownListEvent() {
    this.propertyNode.props_autoLauncher.children.forEach((toggle) => {
      toggle
        .getComponent(Toggle)
        .node.on(Node.EventType.TOUCH_END, this.onToggleClick, this);
    });
    this.propertyNode.props_btn_off.on(Node.EventType.TOUCH_END, () => {
      this.openAoutoPanl();
    });
    this.propertyNode.props_btn_confirm.on(Node.EventType.TOUCH_END, () => {
      const autoLauncherType = (
        this.selectedNode ? this.selectedNode.name : "t10"
      ) as AutoLauncherType;
      const count = getAutoCount(autoLauncherType);
      this.dispatch(
        setAutoLauncherInfo({
          autoLauncherType: autoLauncherType,
          totalCount: count,
          leftCount: isLimit(autoLauncherType) ? 1 : count - 1
        })
      );
      godWealthV2_Audio.playOneShot(SoundPathDefine.BIU);
      this.dispatch(setBetDropDownList(false));
      this.events.onSendBet();
      this.openAoutoPanl();
    });
  }
  public openAoutoPanl() {
    this.propertyNode.props_bet_dropdownlist.active =
      !this.propertyNode.props_bet_dropdownlist.active;
  }
  public getAutoState() {
    return this.propertyNode.props_bet_dropdownlist.active;
  }
  public clearAuto() {
    this.dispatch(
      setAutoLauncherInfo({
        autoLauncherType: AutoLauncherType.NONE,
        totalCount: 0,
        leftCount: 0
      })
    );
  }
  private onToggleClick(event) {
    const clickedToggle = event.target.getComponent(Toggle);
    if (!clickedToggle.isChecked) {
      clickedToggle.isChecked = true;
      this.selectedNode = event.target;
      return;
    }

    this.propertyNode.props_autoLauncher.children.forEach((toggle) => {
      if (toggle !== clickedToggle) {
        toggle.getComponent(Toggle).isChecked = false;
      }
    });
  }
  protected useProps(key: keyof IProps, value: { pre: any; cur: any }) {
    if (this.node && this.node.isValid) {
      if (key === "betDropDownlist") {
      } else if (key === "subGameAnimationPlayInfo") {
        if (value.cur) {
          this.createFlyBg();
        }
      } else if (key === "gameTypeInfo") {
        this.changeGameType(this.props.gameTypeInfo.viewGameType);
      } else if (key === "jackpotDatas") {
        if (value.cur) {
          this.propertyNode.props_jackpot_user_list.removeAllChildren();
          value.cur.forEach((item, index) => {
            let userItem = instantiate(this.propertyNode.props_jackpot_item);
            global.loadHeadSprite(
              item.avatarIndex,
              getNodeByNameDeep("head", userItem).getComponent(Sprite)
            );
            getNodeByNameDeep("gold_label", userItem).getComponent(
              Label
            ).string = item.winningAmount.formatAmountWithCommas();
            getNodeByNameDeep("user_name", userItem).getComponent(
              Label
            ).string = omitStr(item.nickName + "", 20);
            this.propertyNode.props_jackpot_user_list.addChild(userItem);
          });
        }
      } else if (key === "positionId") {
        let startNumberGrand = parseInt(
          this.propertyNode.props_grand_number.string.replace(/,/g, "")
        );
        let startNumberMajor = parseInt(
          this.propertyNode.props_major_number.string.replace(/,/g, "")
        );
        let startNumberMini = parseInt(
          this.propertyNode.props_mini_number.string.replace(/,/g, "")
        );
        let betValueId = config.betSwitcher[0].amount[value.cur - 1].value;
        this.majorNum = 1500 * betValueId;
        this.miniNum = 750 * betValueId;
        if (value.cur <= config.betAmountLimit) {
          new StepNumber(startNumberGrand, 15000 * betValueId, (num) => {
            if (this.node && this.node.isValid) {
              const value = Number(num.toFixed(2));
              this.propertyNode.props_grand_number.string = value
                .formatAmountWithCommas()
                .split(".")[0];
            }
          })
            .set(config.normalRollOption.numberRollerTime)
            .start();
        }
        new StepNumber(startNumberMajor, 1500 * betValueId, (num) => {
          if (this.node && this.node.isValid) {
            const value = Number(num.toFixed(2));
            this.propertyNode.props_major_number.string =
              value.formatAmountWithCommas();
          }
        })
          .set(config.normalRollOption.numberRollerTime)
          .start();
        new StepNumber(startNumberMini, 750 * betValueId, (num) => {
          if (this.node && this.node.isValid) {
            const value = Number(num.toFixed(2));
            this.propertyNode.props_mini_number.string =
              value.formatAmountWithCommas();
          }
        })
          .set(config.normalRollOption.numberRollerTime)
          .start();
      } else if (key === "jackpotTotalAmount") {
        if (this.props.positionId > config.betAmountLimit) {
          new StepNumber(value.pre, value.cur, (num) => {
            if (this.node && this.node.isValid) {
              const value = Number(num.toFixed(0));
              this.propertyNode.props_grand_number.string =
                value.formatAmountWithCommas();
            }
          })
            .set(config.normalRollOption.numberRollerTime)
            .start();
        }
      }
    }
  }

  private changeGameType(gameType: GameType) {
    const isMainGame = gameType === GameType.MAIN;

    this.propertyNode.props_main_bg.active = isMainGame;

    this.propertyNode.props_mini_game_bg.active = !isMainGame;
  }
  protected bindUI(): void {
    this.baseNodeOffectNode = new Vec3(-100, -200);

    this.propertyNode.props_bet_dropdownlist.active = false;
  }

  public createFlyBg() {
    let flyBgNode = instantiate(
      sourceManageSeletor().getFile(PrefabPathDefine.FLY_BG).source
    );
    this.node.addChild(flyBgNode);
    const titleSkeleton = flyBgNode
      .getChildByName("caishenguochang")
      .getComponent(sp.Skeleton);
    new SkeletonAnimationPlayer(titleSkeleton, "animation", false, () => {
      flyBgNode && flyBgNode.destroy();
      this.node && this.node.isValid && this.subGameAnimationEndHandle(0);

      if (this.props.gameTypeInfo.currGameType === GameType.SUBGAME1) {
        this.dispatch(updateWinloss(0));
      }
    }).playAnimation();
  }

  private subGameAnimationEndHandle(type: number) {
    const gameTypeInfo = { ...this.props.gameTypeInfo };
    gameTypeInfo.lastGameType = gameTypeInfo.viewGameType;
    gameTypeInfo.viewGameType = gameTypeInfo.currGameType;

    mainViewModel.playBgMusic();
    this.dispatch(changeGame(gameTypeInfo));

    if (type === 0) {
      this.scheduleOnce(() => {
        this.dispatch(updateRollerStatus(RollerStatus.END));
      }, 1);
    }
  }

  update(deltaTime: number) {}
}
