import {
  _decorator,
  assetManager,
  Component,
  ImageAsset,
  Label,
  Node,
  Sprite,
  SpriteFrame
} from "cc";
import { BaseComponent } from "../../../base/BaseComponent";
import { bundleHall } from "../../index";
import { maskBankCardNumber } from "../../../utils/tool";
import { config } from "../../../config/config";
import Guide from "../../../utils/Guide";
import TaskScheduler, { Task } from "../../../utils/TaskScheduler";
const { ccclass, property } = _decorator;

export interface IState {}

export interface IProps {
  /**图标 */
  iconName: string;
  /**账户卡号 */
  accountNumber: string;
  /**提现金额 */
  withdrawAmount: number;
  /**账户名 */
  accountName: string;
  /**提现手续费比例 */
  withdrawalPremium: number;
  /**图片链接 */
  logUrl: string;
}
export interface IEvent {
  onClosehandler: () => void;
  doneHandler: (accountNumber: string, withdrawAmount: number) => void;
}

@ccclass("Hall_WithdrawTip")
export class Hall_WithdrawTip extends BaseComponent<IState, IProps, IEvent> {
  start() {}
  private taskScheduler: TaskScheduler = new TaskScheduler();
  protected propertyNode: { [key: string]: Node } = {
    /**信息背景框 */
    props_spr_tip_bg1: new Node(),
    props_btn_tip_close: new Node(),
    /**图标 */
    props_icon_reken: new Node(),
    /**卡号 */
    props_Label_accountNumber: new Node(),
    /**提现金额 */
    props_Label_jumlah: new Node(),
    /**确认按钮 */
    props_btn_tip_tentukan: new Node(),
    /**名字 */
    props_Label_biaya: new Node(),
    /**引导节点1 */
    props_layout_confirm: new Node(),
    /**引导节点2 */
    props_layout_tentukan: new Node()
  };

  public props: IProps = {
    /**图标 */
    iconName: "",
    /**账户卡号 */
    accountNumber: "",
    /**提现金额 */
    withdrawAmount: 0,
    /**账户名 */
    accountName: "",
    /**提现手续费比例 */
    withdrawalPremium: 0,
    logUrl: ""
  };

  public events: IEvent = {
    onClosehandler: () => {},
    doneHandler: () => {}
  };

  protected initState() {
    return {};
  }

  protected bindEvent(): void {
    this.propertyNode.props_btn_tip_close.on(Node.EventType.TOUCH_END, () => {
      this.events.onClosehandler();
    });
  }

  protected useProps(key: keyof IProps, value: { pre: any; cur: any }) {
    if (key === "iconName") {
      // bundleHall.load(`withdrawal/resource/icon_withdrawal_${value.cur.toLocaleLowerCase()}/spriteFrame`, SpriteFrame, (err, sp) => {
      // 	!err && (this.propertyNode.props_icon_reken.getComponent(Sprite).spriteFrame = sp)
      // })
    }
    if (key === "logUrl") {
      this.props.logUrl &&
        assetManager.loadRemote(this.props.logUrl, (err, asset: ImageAsset) => {
          if (this.propertyNode && !err) {
            this.propertyNode.props_icon_reken.getComponent(
              Sprite
            ).spriteFrame = SpriteFrame.createWithImage(asset);
          }
        });
    }
    if (key === "withdrawAmount") {
      this.scheduleOnce(() => {
        this.propertyNode.props_Label_jumlah.getComponent(Label).string = (
          value.cur *
          (1 - this.props.withdrawalPremium)
        ).formatAmountWithCommas();
        this.beginGuide();
      }, 0.05);
    }
    key === "accountNumber" &&
      (this.propertyNode.props_Label_accountNumber.getComponent(Label).string =
        maskBankCardNumber(value.cur, 3));
    key === "accountName" &&
      (this.propertyNode.props_Label_biaya.getComponent(Label).string =
        value.cur);
  }

  protected bindUI(): void {
    this.propertyNode.props_btn_tip_tentukan.on(
      Node.EventType.TOUCH_END,
      () => {
        this.events.doneHandler(
          this.props.accountNumber,
          this.props.withdrawAmount
        );
      }
    );
  }

  public beginGuide() {
    if (config.fristLogin.main && !config.fristLogin["hasShow_4"]) {
      //标明这里已经显示了
      config.fristLogin["hasShow_4"] = true;
      const guide_1 = new Guide(
        this.propertyNode.props_spr_tip_bg1,
        this.propertyNode.props_layout_confirm
      );
      const guide_2 = new Guide(
        this.propertyNode.props_btn_tip_tentukan,
        this.propertyNode.props_layout_tentukan
      );
      this.taskScheduler
        .joinQueue(
          new Task((done) => {
            guide_1.begin().bindDone(() => done());
          })
        )
        .joinQueue(
          new Task((done) => {
            guide_2.begin().bindDone(() => done());
          })
        );
    }
  }

  update(deltaTime: number) {}
}
