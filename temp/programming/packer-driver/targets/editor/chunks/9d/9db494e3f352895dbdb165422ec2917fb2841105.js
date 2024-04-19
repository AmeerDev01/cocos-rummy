System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, assetManager, Button, EditBox, instantiate, Label, Node, ProgressBar, ScrollView, Sprite, SpriteFrame, sys, Toggle, ToggleContainer, BaseComponent, config, vipMap, initToggle, baseBoardView, bundleCommon, global, hallAudio, sourceManageSeletor, SoundPathDefine, addToastAction, setLoadingAction, lang, SKT_MAG_TYPE, sktInstance, sktMsgListener, BaseViewModel, EffectType, PrefabPathDefine, _dec, _class, _crd, ccclass, property, BuyType, Hall_ShopPanel;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfvipMap(extras) {
    _reporterNs.report("vipMap", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitToggle(extras) {
    _reporterNs.report("initToggle", "../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbaseBoardView(extras) {
    _reporterNs.report("baseBoardView", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbundleCommon(extras) {
    _reporterNs.report("bundleCommon", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhallAudio(extras) {
    _reporterNs.report("hallAudio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInitStateType(extras) {
    _reporterNs.report("InitStateType", "../store/actions/memberInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetLoadingAction(extras) {
    _reporterNs.report("setLoadingAction", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKT_MAG_TYPE(extras) {
    _reporterNs.report("SKT_MAG_TYPE", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktInstance(extras) {
    _reporterNs.report("sktInstance", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktMsgListener(extras) {
    _reporterNs.report("sktMsgListener", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGiftItemType(extras) {
    _reporterNs.report("GiftItemType", "./Hall_GiftBag", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseViewModel(extras) {
    _reporterNs.report("BaseViewModel", "../viewModel/BaseViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_ChooseBank(extras) {
    _reporterNs.report("Hall_ChooseBank", "./Hall_ChooseBank", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCBState(extras) {
    _reporterNs.report("CBState", "./Hall_ChooseBank", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCBProps(extras) {
    _reporterNs.report("CBProps", "./Hall_ChooseBank", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCBEvent(extras) {
    _reporterNs.report("CBEvent", "./Hall_ChooseBank", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      assetManager = _cc.assetManager;
      Button = _cc.Button;
      EditBox = _cc.EditBox;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
      ScrollView = _cc.ScrollView;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      sys = _cc.sys;
      Toggle = _cc.Toggle;
      ToggleContainer = _cc.ToggleContainer;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      config = _unresolved_3.config;
      vipMap = _unresolved_3.vipMap;
    }, function (_unresolved_4) {
      initToggle = _unresolved_4.initToggle;
    }, function (_unresolved_5) {
      baseBoardView = _unresolved_5.baseBoardView;
      bundleCommon = _unresolved_5.bundleCommon;
      global = _unresolved_5.global;
      hallAudio = _unresolved_5.hallAudio;
      sourceManageSeletor = _unresolved_5.sourceManageSeletor;
    }, function (_unresolved_6) {
      SoundPathDefine = _unresolved_6.SoundPathDefine;
    }, function (_unresolved_7) {
      addToastAction = _unresolved_7.addToastAction;
      setLoadingAction = _unresolved_7.setLoadingAction;
    }, function (_unresolved_8) {
      lang = _unresolved_8.lang;
    }, function (_unresolved_9) {
      SKT_MAG_TYPE = _unresolved_9.SKT_MAG_TYPE;
      sktInstance = _unresolved_9.sktInstance;
      sktMsgListener = _unresolved_9.sktMsgListener;
    }, function (_unresolved_10) {
      BaseViewModel = _unresolved_10.default;
    }, function (_unresolved_11) {
      EffectType = _unresolved_11.EffectType;
    }, function (_unresolved_12) {
      PrefabPathDefine = _unresolved_12.PrefabPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e4f8dqaQqlKnKH/SUStZtlB", "Hall_ShopPanel", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'Button', 'Component', 'EditBox', 'EventHandler', 'ImageAsset', 'instantiate', 'Label', 'Node', 'ProgressBar', 'ScrollView', 'Sprite', 'SpriteFrame', 'sys', 'Toggle', 'ToggleContainer', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BuyType", BuyType = /*#__PURE__*/function (BuyType) {
        BuyType[BuyType["COIN"] = 0] = "COIN";
        BuyType[BuyType["TAS"] = 1] = "TAS";
        return BuyType;
      }({}));

      _export("Hall_ShopPanel", Hall_ShopPanel = (_dec = ccclass('Hall_ShopPanel'), _dec(_class = class Hall_ShopPanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_ToggleGroup_shop_title: new ToggleContainer(),
            props_btn_tips_close: new Node(),

            /**toggle选择外框 */
            // props_ToggleGroup: new Node(),
            props_ToggleGroup2: new Node(),

            /**自定义输入 */
            props_input_gold_num: new Node(),

            /**平铺金额选择框 */
            props_ToggleGroup_gold: new Node(),

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
            // props_Toggle_template: new Node(),
            props_Toggle_template2: new Node(),
            props_ScrollView_tas: new ScrollView(),
            props_spr_tas_template: new Node()
          };
          this.props = {
            dataList: [],
            memberInfo: null,
            defaultBuyType: BuyType.COIN
          };
          this.events = {
            onClosePanel: () => {},
            rechargeHandler: (channelItem, amount) => {}
          };
        }

        start() {}

        initState(props) {
          return {
            buyType: BuyType.COIN,
            chooseChannelIndex: -1,
            chooseAmount: -1,
            chooseChannelItem: null,
            giftList: []
          };
        }

        bindEvent() {
          this.propertyNode.props_btn_tips_close.on(Node.EventType.TOUCH_END, () => {
            this.events.onClosePanel();
          });
          this.propertyNode.props_btn_gold_null.on(Node.EventType.TOUCH_END, () => {
            this.setState({
              chooseAmount: 0
            });
          });
          this.propertyNode.props_spr_title.on(Node.EventType.TOUCH_END, () => {
            sys.openURL((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).bankHelpUrl); // ModalBox.Instance().show({ url: config.bankHelpUrl, type: "Confirm" })
          });
          this.propertyNode.props_btn_shop_tolong.node.on(Node.EventType.TOUCH_END, () => {
            sys.openURL((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).bankHelpUrl); // ModalBox.Instance().show({ url: config.bankHelpUrl, type: "Confirm" })
          });
          (_crd && initToggle === void 0 ? (_reportPossibleCrUseOfinitToggle({
            error: Error()
          }), initToggle) : initToggle)(this.propertyNode.props_ToggleGroup_shop_title.node, this.node, new Hall_ShopPanel.EventHandler(), "Hall_ShopPanel", "buyTypeToggleCallback");
          (_crd && initToggle === void 0 ? (_reportPossibleCrUseOfinitToggle({
            error: Error()
          }), initToggle) : initToggle)(this.propertyNode.props_ToggleGroup2, this.node, new Hall_ShopPanel.EventHandler(), "Hall_ShopPanel", "channelToggleCallback");
          (_crd && initToggle === void 0 ? (_reportPossibleCrUseOfinitToggle({
            error: Error()
          }), initToggle) : initToggle)(this.propertyNode.props_ToggleGroup_gold, this.node, new Hall_ShopPanel.EventHandler(), "Hall_ShopPanel", "channelAmountToggleCallback");
        }

        useProps(key, value) {
          if (key === "dataList") {
            // let defaultChooseIndex = 0
            // this.propertyNode.props_ToggleGroup.children.forEach(i => i.active = false);
            // (value.cur as Array<any>).sort((a, b) => a.channelType - b.channelType).forEach((item, index) => {
            // 	if (item.type === 1) {
            // 		this.propertyNode.props_ToggleGroup.children[(item.channelType - 1) * 2].active = true
            // 		if (index === 0) {
            // 			defaultChooseIndex = (item.channelType - 1) * 2
            // 			this.propertyNode.props_ToggleGroup.children[defaultChooseIndex].getComponent(Toggle).isChecked = true
            // 		}
            // 	}
            // 	if (item.type === 2) {
            // 		this.propertyNode.props_ToggleGroup.children[(item.channelType - 1) * 2 + 1].active = true
            // 	}
            // })
            value.cur.forEach((item, index) => {
              const toggleItem = instantiate(this.propertyNode.props_Toggle_template2);
              toggleItem.active = true;
              assetManager.loadRemote(item.iconMin, (err, asset) => {
                if (this.propertyNode && !err) {
                  toggleItem.getChildByName('spr_icon').getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(asset);
                }
              });
              toggleItem.getChildByName('spr_icon_name').getComponent(Label).string = item.name;
              item.type === 0 && (toggleItem.getChildByName('spr_tag-red').active = true);
              item.type === 1 && (toggleItem.getChildByName('spr_tag-green').active = true);
              this.propertyNode.props_ToggleGroup2.addChild(toggleItem);

              if (index === 0) {
                toggleItem.getComponent(Toggle).isChecked = true;
              }
            });
          }

          if (key === "memberInfo") {
            if (!this.props.memberInfo.memberId) return;
            let vipItem = (_crd && vipMap === void 0 ? (_reportPossibleCrUseOfvipMap({
              error: Error()
            }), vipMap) : vipMap).find(i => i[0] === this.props.memberInfo.vipLevel + 1);
            if (!vipItem) vipItem = (_crd && vipMap === void 0 ? (_reportPossibleCrUseOfvipMap({
              error: Error()
            }), vipMap) : vipMap)[(_crd && vipMap === void 0 ? (_reportPossibleCrUseOfvipMap({
              error: Error()
            }), vipMap) : vipMap).length - 1];
            this.propertyNode.props_Label_vip.string = `Masih perlu to up ${vipItem[1].formatAmountWithCommas()}`;
            this.propertyNode.props_ProgressBar_vip.progress = this.props.memberInfo.vipLevelExperience / vipItem[1];
            (_crd && bundleCommon === void 0 ? (_reportPossibleCrUseOfbundleCommon({
              error: Error()
            }), bundleCommon) : bundleCommon).load(`resource/vip/b_VIP${this.props.memberInfo.vipLevel}/spriteFrame`, SpriteFrame, (err, sp) => {
              !err && (this.propertyNode.props_word_vip_left.getComponent(Sprite).spriteFrame = sp);
            });
            (_crd && bundleCommon === void 0 ? (_reportPossibleCrUseOfbundleCommon({
              error: Error()
            }), bundleCommon) : bundleCommon).load(`resource/vip/b_VIP${vipItem[0]}/spriteFrame`, SpriteFrame, (err, sp) => {
              !err && (this.propertyNode.props_word_vip_right.getComponent(Sprite).spriteFrame = sp);
            });
          }

          if (key === "defaultBuyType") {
            if (this.props.defaultBuyType === BuyType.TAS) {
              this.propertyNode.props_ToggleGroup_shop_title.node.children[1].getComponent(Toggle).isChecked = true;
            }
          }
        }

        bindUI() {
          this.propertyNode.props_spr_tas_template.active = false;
          let lastQeqPicUrl = '';
          this.useState((key, value) => {
            // const chooseChooseType = rechargeChannel[value.cur].channelType //parseInt(((value.cur + 1) / 2) + '')
            // const chooseChooseType = this.props.dataList[value.cur].channelType //parseInt(((value.cur + 1) / 2) + '')
            // const type = this.props.dataList[value.cur].type
            // const dataItem = this.props.dataList.find(item => item.channelType === this.props.dataList[value.cur].channelType && item.type === this.props.dataList[value.cur].type)
            const dataItem = this.props.dataList[value.cur];
            this.setState({
              chooseChannelItem: dataItem
            });

            if (dataItem) {
              this.propertyNode.props_Label_choose_2.getComponent(Label).string = `=${dataItem.rateOfExchange} Cash`;
              this.propertyNode.props_ToggleGroup_gold.children.forEach((child, index) => {
                if (index >= 1) {
                  child.destroy();
                }
              });
              const itemTemplate = this.propertyNode.props_ToggleGroup_gold.children[0];
              dataItem.preinstallList.forEach(amount => {
                const node = instantiate(itemTemplate);
                node.getChildByName("amount").getComponent(Label).string = (+amount).formatAmountWithCommas();
                node.getChildByName("amount_show").getComponent(Label).string = amount;
                node.active = true;
                this.propertyNode.props_ToggleGroup_gold.addChild(node);
              });
            } else {// console.error("未找到相应的渠道类型。序号：" + value.cur)
            }

            lastQeqPicUrl = this.props.dataList[value.cur].iconUrl;
            assetManager.loadRemote(this.props.dataList[value.cur].iconUrl, (err, asset) => {
              if (this.propertyNode && !err && asset.nativeUrl === lastQeqPicUrl) {
                this.propertyNode.props_spr_title.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(asset);
              }
            });
          }, ["chooseChannelIndex"]);
          this.useState((key, value) => {
            if (this.state.chooseAmount) {
              this.propertyNode.props_input_gold_num.getComponent(EditBox).string = value.cur;
            } else {
              this.propertyNode.props_input_gold_num.getComponent(EditBox).string = '';
            }
          }, ["chooseAmount"]);
          this.propertyNode.props_sbtn_shop_pergi.on(Node.EventType.TOUCH_END, () => {
            const amount = +this.propertyNode.props_input_gold_num.getComponent(EditBox).string;

            if (amount < this.state.chooseChannelItem.limitDown || amount > this.state.chooseChannelItem.limitUp) {
              this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.HallModule.HallShopAmount, {
                  gold1: this.state.chooseChannelItem.limitDown,
                  gold2: this.state.chooseChannelItem.limitUp
                }, {
                  placeStr: `充值金额需在${this.state.chooseChannelItem.limitDown}~${this.state.chooseChannelItem.limitUp}之间`
                })
              }));
              return;
            }

            this.events.rechargeHandler(this.state.chooseChannelItem, this.propertyNode.props_input_gold_num.getComponent(EditBox).string);
          });
          this.useState((key, varue) => {
            this.propertyNode.props_ScrollView_tas.content.removeAllChildren();
            this.state.giftList.filter(i => i.mallPage === 1).forEach((item, index) => {
              const node = instantiate(this.propertyNode.props_spr_tas_template);
              node.getChildByName("Label_name").getComponent(Label).string = item.giftName;
              node.getChildByName("Label_gole_old").getComponent(Label).string = item.normalGoldCoin.formatAmountWithCommas();
              node.getChildByName("Label_gole_old").getComponent(Label).updateRenderData(true);
              node.getChildByName("Label_gole").getComponent(Label).string = item.discountCoins.formatAmountWithCommas();
              node.getChildByName("btn_buy").getChildByName("label_price_buy").getComponent(Label).string = item.amount.formatAmountWithCommas();
              node.getChildByName("btn_buy").on(Node.EventType.TOUCH_END, () => {
                //购买
                const chooseBankVM = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
                  error: Error()
                }), BaseViewModel) : BaseViewModel)('Hall_ChooseBank').mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                  error: Error()
                }), PrefabPathDefine) : PrefabPathDefine).HELL_CHOOSE_BANK).source).appendTo((_crd && baseBoardView === void 0 ? (_reportPossibleCrUseOfbaseBoardView({
                  error: Error()
                }), baseBoardView) : baseBoardView).mainPanelViewModel.parentNode, {
                  effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                    error: Error()
                  }), EffectType) : EffectType).EFFECT1,
                  isModal: true
                }).setEvent({
                  onClosePanel: () => {
                    chooseBankVM.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                      error: Error()
                    }), EffectType) : EffectType).EFFECT2);
                  },
                  onOrder: rechargeChannelId => {
                    (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
                      error: Error()
                    }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                      error: Error()
                    }), SKT_MAG_TYPE) : SKT_MAG_TYPE).RECHARGE_ORDER, {
                      rechargeChannelId,
                      money: item.amount,
                      orderRechargeType: 2,
                      giftBagMallId: item.id
                    }, {
                      isLoading: true
                    }); // purchaseAppsflyerEvents(item.amount + '', 'IDR')
                  }
                }).setProps({
                  onlyDisplayArr: item.rechargeChannelIds || []
                });
              });
              node.active = true;
              this.propertyNode.props_ScrollView_tas.content.addChild(node);
            });
          }, ["giftList"]);
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GIFT_LIST, "shop", data => {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).hallDispatch((_crd && setLoadingAction === void 0 ? (_reportPossibleCrUseOfsetLoadingAction({
              error: Error()
            }), setLoadingAction) : setLoadingAction)({
              isShow: false
            }));
            this.setState({
              giftList: data || []
            });
          });
          (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GIFT_LIST, {}, {
            isLoading: true
          });
        }

        channelToggleCallback(event, customEventData) {
          (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
            error: Error()
          }), hallAudio) : hallAudio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).BTU_CLICK);
          const chooseIndex = event.target['parent'].children.indexOf(event.target);
          this.setState({
            chooseChannelIndex: chooseIndex //chooseIndex % 2 === 0 ? chooseIndex / 2 : parseInt((chooseIndex / 2) + '') + 1

          });
        }

        buyTypeToggleCallback(event, customEventData) {
          (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
            error: Error()
          }), hallAudio) : hallAudio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).BTU_CLICK);
          const chooseIndex = event.target['parent'].children.indexOf(event.target);
          this.setState({
            buyType: chooseIndex
          });
        }
        /**选充值金额 */


        channelAmountToggleCallback(event, customEventData) {
          (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
            error: Error()
          }), hallAudio) : hallAudio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).BTU_CLICK);
          const chooseAmount = +event.target['getChildByName']("amount_show").getComponent(Label).string; // console.log(chooseAmount)

          this.setState({
            chooseAmount
          });
        }

        onDestroy() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).removeById("shop");
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9db494e3f352895dbdb165422ec2917fb2841105.js.map