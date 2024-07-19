import {
  _decorator,
  assetManager,
  Button,
  Component,
  EditBox,
  EventHandler,
  ImageAsset,
  instantiate,
  Label,
  Node,
  Prefab,
  ProgressBar,
  ScrollView,
  Sprite,
  SpriteFrame,
  sys,
  Toggle,
  ToggleContainer,
  UITransform
} from "cc";
import { BaseComponent } from "../../base/BaseComponent";
import { config, vipMap } from "../../config/config";
import { getNodeByNameDeep, initToggle } from "../../utils/tool";
import {
  baseBoardView,
  bundleCommon,
  global,
  hallAudio,
  sourceManageSeletor
} from "../index";
import { SoundPathDefine } from "../sourceDefine/soundDefine";
import { InitStateType } from "../store/actions/memberInfo";
import {
  addToastAction,
  changeChooseAmount,
  ChooseAmount,
  setLoadingAction
} from "../store/actions/baseBoard";
import { lang } from "../index";
import { SKT_MAG_TYPE, hallWebSocketDriver } from "../socketConnect";
import { GiftItemType } from "./Hall_GiftBag";
import BaseViewModel from "../viewModel/BaseViewModel";
import {
  Hall_ChooseBank,
  IState as CBState,
  IProps as CBProps,
  IEvent as CBEvent
} from "./Hall_ChooseBank";
import { EffectType } from "../../utils/NodeIOEffect";
import { PrefabPathDefine } from "../sourceDefine/prefabDefine";
import ModalBox from "../../common/ModalBox";
const { ccclass, property } = _decorator;

type PreinstallList = {
  defaultGold: number;
  firstDepositBonusGold: number;
  activityDailyFirstDepositProportion: number;
  /**类型 0：无 1：新人首充 2：每日首充 */
  type: number;
};

export type ChannelItemType = {
  /**渠道type */
  channelType: number;
  iconMax: string;
  iconMin: string;
  iconUrl: string;
  id: string;
  /**充值最低值 */
  limitDown: number;
  /**充值最高值 */
  limitUp: number;
  /**充值预制额度 */
  preinstallList: Array<PreinstallList>;
  // preinstallList: Array<string>,

  /**换算的额度 */
  rateOfExchange: number;
  /**类型 */
  type: number;
  name: string;
};

export enum BuyType {
  COIN,
  TAS
}
export interface IState {
  /**选中的充值类型, */
  buyType: BuyType;
  /**选中的渠道 */
  chooseChannelIndex: number;
  /**选择的金额 */
  chooseAmount: number;
  /**选择的渠道数据 */
  // chooseChannelItem: ChannelItemType,
  giftList: Array<GiftItemType>;
}

export interface IProps {
  /**主数据 */
  dataList?: ChannelItemType[];
  memberInfo: InitStateType;
  defaultBuyType?: BuyType;
  /**类型 0：无 1：新人首充 2：每日首充 */
  rechargeType: number;
  /**充值选择的金额 */
  chooseAmount: ChooseAmount;
}
export interface IEvent {
  onClosePanel?: () => void;
  /**确认充值 */
  rechargeHandler: (
    channelItem: ChannelItemType | null,
    amount: string
  ) => void;
  openShopHistory: () => void;
  openRachargeRule: () => void;
}

@ccclass("Hall_ShopPanel")
export class Hall_ShopPanel extends BaseComponent<IState, IProps, IEvent> {
  start() {}

  protected propertyNode = {
    props_ToggleGroup_shop_title: new ToggleContainer(),
    props_btn_tips_close: new Node(),
    /**toggle选择外框 */
    // props_ToggleGroup: new Node(),
    // props_ToggleGroup1: new Node(),
    /**新人首充的 */
    props_ToggleGroup2: new Node(),
    /**自定义输入 */
    props_input_gold_num: new Node(),
    /**每日充值平铺金额选择框 */
    props_ToggleGroup_gold: new Node(),
    /**新人首充平铺金额选择框 */
    props_ToggleGroup_gold1: new Node(),
    /**确认充值 */
    props_sbtn_shop_pergi: new Node(),
    /**置空 */
    props_btn_gold_null: new Node(),
    /** 兑换率 */
    props_Label_choose_2: new Node(),
    /**当前VIP */
    props_word_vip_left: new Sprite(),
    /**目标VIP */
    props_word_vip_right: new Sprite(),
    /**VIP描述 */
    props_Label_vip: new Label(),
    /**vip进度条 */
    props_ProgressBar_vip: new ProgressBar(),
    /**说明页 */
    props_spr_title: new Node(),
    props_btn_shop_tolong: new Button(),
    props_Toggle_template2: new Node(),
    props_ScrollView_tas: new ScrollView(),
    props_spr_tas_template: new Node(),
    /**充值限制节点 */
    props_label_amount_limit: new Label(),
    /**充值历史记录按钮 */
    props_btn_history: new Node(),
    /**每日首充规则 */
    props_label_recharge: new Node(),
    /**每日首充规则按钮 */
    props_btn_racharge: new Node(),
    /**每日充值面板节点 */
    props_node_coin: new Node(),
    /**每日充值金币选择框 */
    props_Layout_gold_choose: new Node(),
    /**新人充值标题 */
    props_spr_newcomer_title: new Node(),
    /**新人充值金币选择框 */
    props_newcomer_Layout_gold_choose: new Node(),
    /**新人充值的优惠面板 */
    props_newcomer_get_gold: new Node(),
    /**新人充值金币 */
    props_cash: new Label(),
    /**新人充值福利比例 */
    props_jiaobiao_label: new Label(),
    /**新人充值获得金额福利 */
    props_bonus: new Label(),
    /**新人充值获取到的总金额 */
    props_total: new Label(),
    /**新人充值支付金币 */
    props_payment: new Label()
  };

  public props: IProps = {
    dataList: [],
    memberInfo: null,
    defaultBuyType: BuyType.COIN,
    rechargeType: -1,
    chooseAmount: null
  };

  public events: IEvent = {
    onClosePanel: () => {},
    rechargeHandler: (
      channelItem: ChannelItemType | null,
      amount: string
    ) => {},
    openShopHistory: () => {},
    openRachargeRule: () => {}
  };
  private chooseChannelItem: ChannelItemType = null;
  protected initState(props) {
    return {
      buyType: BuyType.COIN,
      chooseChannelIndex: -1,
      chooseAmount: -1,
      giftList: []
    };
  }

  protected bindEvent(): void {
    this.propertyNode.props_btn_tips_close.on(Node.EventType.TOUCH_END, () => {
      this.events.onClosePanel();
    });

    this.propertyNode.props_btn_gold_null.on(Node.EventType.TOUCH_END, () => {
      this.setState({ chooseAmount: 0 });
    });

    this.propertyNode.props_input_gold_num.on(
      EditBox.EventType.TEXT_CHANGED,
      (e) => {
        this.setState({ chooseAmount: +e.string });
      }
    );

    this.propertyNode.props_spr_title.on(Node.EventType.TOUCH_END, () => {
      sys.openURL(config.bankHelpUrl);
      // ModalBox.Instance().show({ url: config.bankHelpUrl, type: "Confirm" })
    });
    this.propertyNode.props_btn_shop_tolong.node.on(
      Node.EventType.TOUCH_END,
      () => {
        sys.openURL(config.bankHelpUrl);
        // ModalBox.Instance().show({ url: config.bankHelpUrl, type: "Confirm" })
      }
    );
    this.propertyNode.props_btn_history.on(Node.EventType.TOUCH_END, () => {
      this.events.openShopHistory();
    });

    this.propertyNode.props_sbtn_shop_pergi.on(Node.EventType.TOUCH_END, () => {
      if (!this.chooseChannelItem) return;
      const amount =
        +this.propertyNode.props_input_gold_num.getComponent(EditBox).string;
      if (
        amount < this.chooseChannelItem.limitDown ||
        amount > this.chooseChannelItem.limitUp
      ) {
        this.dispatch(
          addToastAction({
            content: lang.write(
              (k) => k.HallModule.HallShopAmount,
              {
                down: this.chooseChannelItem.limitDown,
                up: this.chooseChannelItem.limitUp
              },
              {
                placeStr: `充值金额需在${this.chooseChannelItem.limitDown}~${this.chooseChannelItem.limitUp}之间`
              }
            )
          })
        );
        return;
      }
      this.events.rechargeHandler(
        this.chooseChannelItem,
        this.propertyNode.props_input_gold_num.getComponent(EditBox).string
      );
    });
    this.propertyNode.props_btn_racharge.on(Node.EventType.TOUCH_END, () => {
      this.events.openRachargeRule();
    });
    initToggle(
      this.propertyNode.props_ToggleGroup_shop_title.node,
      this.node,
      new Hall_ShopPanel.EventHandler(),
      "Hall_ShopPanel",
      "buyTypeToggleCallback"
    );
    initToggle(
      this.propertyNode.props_ToggleGroup2,
      this.node,
      new Hall_ShopPanel.EventHandler(),
      "Hall_ShopPanel",
      "channelToggleCallback"
    );
    initToggle(
      this.propertyNode.props_ToggleGroup_gold1,
      this.node,
      new Hall_ShopPanel.EventHandler(),
      "Hall_ShopPanel",
      "channelAmountToggleCallback1"
    );
    initToggle(
      this.propertyNode.props_ToggleGroup_gold,
      this.node,
      new Hall_ShopPanel.EventHandler(),
      "Hall_ShopPanel",
      "channelAmountToggleCallback"
    );
  }

  protected useProps(key: keyof IProps, value: { pre: any; cur: any }) {
    if (key === "dataList") {
      const rechargeType = this.getTypeValue(value.cur);
      this.propertyNode.props_ToggleGroup2.removeAllChildren();
      (value.cur as Array<any>).forEach((item, index) => {
        // const toggleItem = rechargeType === 1 ? instantiate(this.propertyNode.props_Toggle_template1) : instantiate(this.propertyNode.props_Toggle_template2);
        const toggleItem = instantiate(
          this.propertyNode.props_Toggle_template2
        );
        toggleItem.active = true;
        item.iconMin &&
          assetManager.loadRemote(item.iconMin, (err, asset: ImageAsset) => {
            if (!this || !this.node) {
              return;
            }
            if (this.propertyNode && !err) {
              toggleItem
                .getChildByName("spr_icon")
                .getComponent(Sprite).spriteFrame =
                SpriteFrame.createWithImage(asset);
            }
          });
        toggleItem.getChildByName("spr_icon_name").getComponent(Label).string =
          item.name;
        item.type === 0 &&
          (toggleItem.getChildByName("spr_tag-red").active = true);
        item.type === 1 &&
          (toggleItem.getChildByName("spr_tag-green").active = true);
        // rechargeType === 1 ? this.propertyNode.props_ToggleGroup1.addChild(toggleItem) : this.propertyNode.props_ToggleGroup2.addChild(toggleItem);
        this.propertyNode.props_ToggleGroup2.addChild(toggleItem);
        if (index === 0) {
          this.state.buyType === BuyType.COIN &&
            (toggleItem.getComponent(Toggle).isChecked = true);
        }
      });
    }

    if (key === "memberInfo") {
      if (!this.props.memberInfo.memberId) return;

      let vipItem = vipMap.find(
        (i) => i[0] === this.props.memberInfo.vipLevel + 1
      );

      if (!vipItem) vipItem = vipMap[vipMap.length - 1];
      const experience = vipItem[1] - this.props.memberInfo.vipLevelExperience;
      this.propertyNode.props_Label_vip.string = `Still need top up ${experience.formatAmountWithCommas()}`;
      this.propertyNode.props_ProgressBar_vip.progress =
        this.props.memberInfo.vipLevelExperience / vipItem[1];
      bundleCommon.load(
        `resource/vip/b_VIP${this.props.memberInfo.vipLevel}/spriteFrame`,
        SpriteFrame,
        (err, sp) => {
          !err &&
            (this.propertyNode.props_word_vip_left.getComponent(
              Sprite
            ).spriteFrame = sp);
        }
      );
      bundleCommon.load(
        `resource/vip/b_VIP${vipItem[0]}/spriteFrame`,
        SpriteFrame,
        (err, sp) => {
          !err &&
            (this.propertyNode.props_word_vip_right.getComponent(
              Sprite
            ).spriteFrame = sp);
        }
      );
    }

    if (key === "defaultBuyType") {
      if (this.props.defaultBuyType === BuyType.TAS) {
        this.propertyNode.props_ToggleGroup_shop_title.node.children[1].getComponent(
          Toggle
        ).isChecked = true;
      }
    }

    if (key === "rechargeType") {
      this.propertyNode.props_btn_history.active = value.cur !== 1;
      this.propertyNode.props_Layout_gold_choose.active = value.cur !== 1;
      this.propertyNode.props_spr_title.active = value.cur !== 1;
      this.propertyNode.props_spr_newcomer_title.active = value.cur === 1;
      this.propertyNode.props_newcomer_Layout_gold_choose.active =
        value.cur === 1;
      this.propertyNode.props_label_recharge.active = value.cur === 2;
      this.propertyNode.props_btn_racharge.active = value.cur === 2;
    }

    if (key === "chooseAmount") {
      const bonus = value.cur.totalGet - value.cur.chooseAmount;
      const rate = value.cur.chooseAmount
        ? (bonus / value.cur.chooseAmount) * 100
        : 0;
      const amountString = value.cur.chooseAmount.formatAmountWithCommas();
      this.propertyNode.props_cash.string = amountString;
      this.propertyNode.props_bonus.string = bonus.formatAmountWithCommas();
      this.propertyNode.props_total.string =
        value.cur.totalGet.formatAmountWithCommas();
      this.propertyNode.props_payment.string = "₹ " + amountString;
      this.propertyNode.props_jiaobiao_label.string = "+" + rate + "%";
      this.propertyNode.props_newcomer_get_gold.active = true;
    }
  }

  protected bindUI(): void {
    this.propertyNode.props_spr_tas_template.active = false;
    let lastQeqPicUrl: string = "";
    this.useState(
      (key, value) => {
        const dataItem = this.props.dataList[value.cur];

        const itemRechargeType = this.getItemTypeValue(dataItem);

        this.chooseChannelItem = dataItem;
        if (dataItem) {
          if (itemRechargeType === 1) {
            //如果为新人首充
            this.propertyNode.props_ToggleGroup_gold1.children.forEach(
              (child, index) => {
                if (index >= 1) {
                  child.destroy();
                }
              }
            );
            const itemTemplate =
              this.propertyNode.props_ToggleGroup_gold1.children[0];
            dataItem.preinstallList.forEach((list: PreinstallList, i) => {
              const node = instantiate(itemTemplate);
              node.getChildByName("amount").getComponent(Label).string =
                list.defaultGold.formatAmountWithCommas();
              node.getChildByName("amount_show").getComponent(Label).string =
                list.defaultGold + "";
              getNodeByNameDeep("Label_5000", node).getComponent(Label).string =
                list.defaultGold.formatAmountWithCommas();
              getNodeByNameDeep("label_actual", node).getComponent(
                Label
              ).string =
                "Get " + list.firstDepositBonusGold.formatAmountWithCommas();
              getNodeByNameDeep("label_actual_show", node).getComponent(
                Label
              ).string =
                "Get " + list.firstDepositBonusGold.formatAmountWithCommas();
              node.active = true;
              this.propertyNode.props_ToggleGroup_gold1.addChild(node);

              if (i === 0) {
                node.getComponent(Toggle).isChecked = true;
                this.dispatch(
                  changeChooseAmount({
                    chooseAmount: list.defaultGold,
                    totalGet: list.firstDepositBonusGold
                  })
                );
              }
            });
          } else {
            //每日充值
            this.propertyNode.props_newcomer_get_gold.active = false;
            this.propertyNode.props_Label_choose_2.getComponent(
              Label
            ).string = `=${dataItem.rateOfExchange} Cash`;
            this.propertyNode.props_label_amount_limit.getComponent(
              Label
            ).string = `Limit ${dataItem.limitDown}~${dataItem.limitUp}`;
            this.propertyNode.props_ToggleGroup_gold.children.forEach(
              (child, index) => {
                if (index >= 1) {
                  child.destroy();
                }
              }
            );
            const itemTemplate =
              this.propertyNode.props_ToggleGroup_gold.children[0];
            dataItem.preinstallList.forEach((list: PreinstallList) => {
              const node = instantiate(itemTemplate);
              node.getChildByName("amount").getComponent(Label).string =
                list.defaultGold.formatAmountWithCommas();
              node.getChildByName("amount_show").getComponent(Label).string =
                list.defaultGold + "";
              getNodeByNameDeep("spr_daily_bg", node).active = list.type === 2;
              getNodeByNameDeep("spr_label_rate", node).getComponent(
                Label
              ).string = "+" + list.activityDailyFirstDepositProportion + "%";
              node.active = true;
              this.propertyNode.props_ToggleGroup_gold.addChild(node);
            });

            lastQeqPicUrl = this.props.dataList[value.cur].iconUrl;

            assetManager.loadRemote(
              this.props.dataList[value.cur].iconUrl,
              (err, asset: ImageAsset) => {
                if (!this || !this.node) {
                  return;
                }
                if (
                  this.propertyNode &&
                  !err &&
                  asset.nativeUrl === lastQeqPicUrl
                ) {
                  this.propertyNode.props_spr_title.getComponent(
                    Sprite
                  ).spriteFrame = SpriteFrame.createWithImage(asset);
                }
              }
            );
          }
        } else {
          // console.error("未找到相应的渠道类型。序号：" + value.cur)
        }
      },
      ["chooseChannelIndex"]
    );

    this.useState(
      (key, value) => {
        if (this.state.chooseAmount) {
          this.propertyNode.props_input_gold_num.getComponent(EditBox).string =
            value.cur;
        } else {
          this.propertyNode.props_input_gold_num.getComponent(EditBox).string =
            "";
        }
      },
      ["chooseAmount"]
    );

    this.useState(
      (key, value) => {
        this.propertyNode.props_ScrollView_tas.content.removeAllChildren();
        this.state.giftList
          .filter((i) => i.mallPage === 1)
          .forEach((item, index) => {
            const node = instantiate(this.propertyNode.props_spr_tas_template);
            node.getChildByName("Label_name").getComponent(Label).string =
              item.giftName;
            node.getChildByName("Label_gole_old").getComponent(Label).string =
              item.normalGoldCoin.formatAmountWithCommas();
            node
              .getChildByName("Label_gole_old")
              .getComponent(Label)
              .updateRenderData(true);
            node.getChildByName("Label_gole").getComponent(Label).string =
              item.discountCoins.formatAmountWithCommas();
            node
              .getChildByName("btn_buy")
              .getChildByName("label_price_buy")
              .getComponent(Label).string =
              item.amount.formatAmountWithCommas();
            node
              .getChildByName("btn_buy")
              .on(Node.EventType.TOUCH_END, async () => {
                //购买
                const chooseBankVM = new BaseViewModel<
                  Hall_ChooseBank,
                  CBState,
                  CBProps,
                  CBEvent
                >("Hall_ChooseBank")
                  .mountView(
                    (
                      await sourceManageSeletor().getFileAsync(
                        PrefabPathDefine._HELL_CHOOSE_BANK,
                        Prefab
                      )
                    ).source
                  )
                  .appendTo(baseBoardView.mainPanelViewModel.parentNode, {
                    effectType: EffectType.EFFECT1,
                    isModal: true
                  })
                  .setEvent({
                    onClosePanel: () => {
                      chooseBankVM.unMount(EffectType.EFFECT2);
                    },
                    onOrder: (rechargeChannelId) => {
                      hallWebSocketDriver.sendSktMessage(
                        SKT_MAG_TYPE.RECHARGE_ORDER,
                        {
                          rechargeChannelId,
                          money: item.amount,
                          orderRechargeType: 2,
                          giftBagMallId: item.id
                        },
                        { isLoading: true }
                      );
                      // purchaseAppsflyerEvents(item.amount + '', 'IDR')
                    }
                  })
                  .setProps({
                    onlyDisplayArr: item.rechargeChannelIds || []
                  });
              });
            node.active = true;
            this.propertyNode.props_ScrollView_tas.content.addChild(node);
          });
      },
      ["giftList"]
    );

    hallWebSocketDriver.sktMsgListener.add(
      SKT_MAG_TYPE.GIFT_LIST,
      "shop",
      (data, error) => {
        if (error) return;
        // global.hallDispatch(setLoadingAction({ isShow: false }))
        this.setState({ giftList: data || [] });
      }
    );
    hallWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.GIFT_LIST, "", {
      isLoading: true
    });
  }

  /**选择银行的回调 获取点击的index */
  channelToggleCallback(event: Event, customEventData: string) {
    hallAudio.playOneShot(SoundPathDefine.BTU_CLICK);
    const chooseIndex = event.target["parent"].children.indexOf(event.target);
    this.setState({
      chooseChannelIndex: chooseIndex //chooseIndex % 2 === 0 ? chooseIndex / 2 : parseInt((chooseIndex / 2) + '') + 1
    });
  }
  buyTypeToggleCallback(event: Event, customEventData: string) {
    hallAudio.playOneShot(SoundPathDefine.BTU_CLICK);
    const chooseIndex = event.target["parent"].children.indexOf(event.target);
    this.setState({
      buyType: chooseIndex
    });
  }
  /**新人首充选充值金额 */
  channelAmountToggleCallback1(event: Event, customEventData: string) {
    hallAudio.playOneShot(SoundPathDefine.BTU_CLICK);
    const chooseAmount =
      +event.target["getChildByName"]("amount_show").getComponent(Label).string;
    const totalGet =
      event.target["getChildByName"]("label_actual").getComponent(Label).string;
    const total = +totalGet.substring(4).replace(/,/g, "");
    this.dispatch(changeChooseAmount({ chooseAmount, totalGet: total }));

    this.setState({ chooseAmount });
  }
  /**每日选充值金额 */
  channelAmountToggleCallback(event: Event, customEventData: string) {
    hallAudio.playOneShot(SoundPathDefine.BTU_CLICK);
    const chooseAmount =
      +event.target["getChildByName"]("amount_show").getComponent(Label).string;
    // console.log(chooseAmount)
    this.setState({ chooseAmount });
  }

  /**获取当前充值界面的类型 0为无 1为新人首充 2为每日首充 */
  public getTypeValue(array) {
    for (let item of array) {
      let preinstallList = item.preinstallList || [];
      for (let preinstallItem of preinstallList) {
        if (preinstallItem.type !== 1) {
          return preinstallItem.type;
        }
      }
    }
    return 1;
  }

  /**获取选择银行后的充值界面类型  0为无 1为新人首充 2为每日首充*/
  private getItemTypeValue(item) {
    let preinstallList = item.preinstallList || [];
    for (let preinstallItem of preinstallList) {
      if (preinstallItem.type !== 1) {
        return preinstallItem.type;
      }
    }

    return 1;
  }
  protected onDestroy() {
    this.dispatch(changeChooseAmount(null));
    hallWebSocketDriver.sktMsgListener.removeById("shop");
  }
  update(deltaTime: number) {}
}
