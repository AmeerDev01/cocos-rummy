import {
  _decorator,
  assetManager,
  Button,
  Component,
  ImageAsset,
  instantiate,
  Label,
  Node,
  ScrollView,
  Sprite,
  SpriteFrame,
  sys,
  ToggleContainer
} from "cc";
import { BaseComponent } from "../../../base/BaseComponent";
import { WithdrawBankChannelType } from "../../store/actions/withdraw";
import { bundleHall, hallAudio } from "../../index";
import { config } from "../../../config/config";
import { initToggle } from "../../../utils/tool";
import { SoundPathDefine } from "../../sourceDefine/soundDefine";
import { addToastAction } from "../../store/actions/baseBoard";
import { lang } from "../../index";
import Guide from "../../../utils/Guide";
import TaskScheduler, { Task } from "../../../utils/TaskScheduler";
const { ccclass, property } = _decorator;

export interface IState {
  isDisableBind: boolean;
}

export interface IProps {
  withdrawBankChannelList: WithdrawBankChannelType[];
}
export interface IEvent {
  onCloseHandler: () => void;
  /**点击提现渠道 */
  onClickBankChannl: (bankItem: WithdrawBankChannelType) => void;
  /**点击提现渠道按钮 */
  onBankChannlDone: (bankItem: WithdrawBankChannelType) => void;
}

@ccclass("Hall_WithdrawBank")
export class Hall_WithdrawBank extends BaseComponent<IState, IProps, IEvent> {
  start() {}
  private taskScheduler: TaskScheduler = new TaskScheduler();
  protected propertyNode = {
    props_btn_metode_close: new Node(),
    props_ScrollView_metode: new Node(),
    /**打开帮助页面按钮 */
    props_btn_metode_tentukan: new Node(),
    props_ToggleGroup_bankType: new Node(),
    /**引导节点1 */
    props_layout_choose: new Node(),
    /**引导节点2 */
    props_layout_tentukan: new Node()
  };
  private chooseItem: WithdrawBankChannelType;
  public props: IProps = {
    withdrawBankChannelList: []
  };

  public events: IEvent = {
    onCloseHandler: () => {},
    onClickBankChannl: (bankItem: WithdrawBankChannelType) => {},
    onBankChannlDone: (bankItem: WithdrawBankChannelType) => {}
  };

  protected initState() {
    return {
      isDisableBind: false
    };
  }

  protected bindEvent(): void {
    this.propertyNode.props_btn_metode_close.on(
      Node.EventType.TOUCH_END,
      () => {
        this.events.onCloseHandler();
      }
    );
    this.propertyNode.props_btn_metode_tentukan.on(
      Node.EventType.TOUCH_END,
      () => {
        if (this.chooseItem) {
          if (
            !this.chooseItem.bind &&
            this.props.withdrawBankChannelList.filter((i) => i.bind).length >= 1
          ) {
            this.dispatch(
              addToastAction({
                content: lang.write(
                  (k) => k.HallModule.HallWithdrawalBank,
                  {},
                  { placeStr: "请选择有效的提现渠道~" }
                )
              })
            );
            return;
          }
          this.events.onBankChannlDone(this.chooseItem);
        } else {
          this.dispatch(
            addToastAction({
              content: lang.write(
                (k) => k.HallModule.HallWithdrawalBank,
                {},
                { placeStr: "请选择~" }
              )
            })
          );
        }
        // sys.openURL(config.bankHelpUrl)
      }
    );
    // const scroll = this.propertyNode.props_ScrollView_metode.getComponent(ScrollView)
    initToggle(
      this.propertyNode.props_ToggleGroup_bankType,
      this.node,
      new Hall_WithdrawBank.EventHandler(),
      "Hall_WithdrawBank",
      "callback"
    );
  }

  protected useProps(key: keyof IProps, value: { pre: any; cur: any }) {
    if (key === "withdrawBankChannelList") {
      // const scroll = this.propertyNode.props_ScrollView_metode.getComponent(ScrollView)
      const toggleWrap = this.propertyNode.props_ToggleGroup_bankType; //scroll.content.getChildByName("ToggleGroup_gold")
      const template = toggleWrap.children[0] as Node;
      toggleWrap.children.forEach((child: Node, index) => {
        index > 0 && child.destroy();
      });
      value.cur
        .sort((a, b) => b.bind - a.bind)
        .forEach((item: WithdrawBankChannelType, index) => {
          const childNode = instantiate(template);
          childNode.active = true;
          childNode
            .getChildByName("Label_num1")
            .getComponent(Label).string = `${item.limitDown}-${item.limitUp}`;
          childNode
            .getChildByName("Label_bank_name")
            .getComponent(Label).string = item.name;
          item.iconMax &&
            assetManager.loadRemote(item.iconMax, (err, asset: ImageAsset) => {
              if (this.propertyNode && !err) {
                childNode
                  .getChildByName("icon")
                  .getComponent(Sprite).spriteFrame =
                  SpriteFrame.createWithImage(asset);
              }
            });
          // bundleHall.load(`withdrawal/resource/icon_withdrawal_${item.name.toLocaleLowerCase()}/spriteFrame`, SpriteFrame, (err, sp) => {
          // 	!err && (childNode.getChildByName("icon").getComponent(Sprite).spriteFrame = sp)
          // })

          if (item.bind) {
            //如果是已经绑定的卡，按钮显示另外一个
            bundleHall.load(
              `withdrawal/resource/btn_withdrawal_ikatRed/spriteFrame`,
              SpriteFrame,
              (err, sp) => {
                !err &&
                  (childNode
                    .getChildByName("btn_ikat1")
                    .getComponent(Sprite).spriteFrame = sp);
              }
            );
          }
          toggleWrap.addChild(childNode);
          childNode
            .getChildByName("btn_ikat1")
            .on(Node.EventType.TOUCH_END, () => {
              if (item.bind) {
                // this.dispatch(addToastAction({ content: lang.write(k => k.withdrawal.GotoServiceModify, {}, { placeStr: "请联系客服修改" }) }))
              } else {
                //打开详情
                const grayscale = childNode
                  .getChildByName("btn_ikat1")
                  .getComponent(Sprite).grayscale;
                !grayscale && this.events.onClickBankChannl(item);
              }
            });
        });
      this.setState({
        isDisableBind: this.props.withdrawBankChannelList.filter((i) => i.bind)
          .length
          ? true
          : false
      });
      this.beginGuide();
    }
  }

  callback(event: Event, customEventData: string) {
    hallAudio.playOneShot(SoundPathDefine.BTU_CLICK);
    const index = this.propertyNode.props_ToggleGroup_bankType.children.indexOf(
      event.target as any
    );
    this.chooseItem = this.props.withdrawBankChannelList[index - 1];
  }

  public beginGuide() {
    if (config.fristLogin.main && !config.fristLogin["hasShow_2"]) {
      //标明这里已经显示了
      config.fristLogin["hasShow_2"] = true;
      const children = this.propertyNode.props_ToggleGroup_bankType.children;
      const guide_1 = new Guide(
        children.length
          ? children[0]
          : this.propertyNode.props_ToggleGroup_bankType,
        this.propertyNode.props_layout_choose
      );
      const guide_2 = new Guide(
        this.propertyNode.props_btn_metode_tentukan,
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

  protected bindUI(): void {
    this.useState(
      (key, value) => {
        this.propertyNode.props_ToggleGroup_bankType.children
          .filter((i) => i.active)
          .forEach((child, index) => {
            child.getChildByName("btn_ikat1").getComponent(Sprite).grayscale =
              false;
            const item = this.props.withdrawBankChannelList.sort(
              (a, b) => b.bind - a.bind
            )[index];
            if (item && !item.bind) {
              child.getChildByName("btn_ikat1").getComponent(Sprite).grayscale =
                value.cur;
            }
          });
      },
      ["isDisableBind"]
    );
  }

  update(deltaTime: number) {}
}
