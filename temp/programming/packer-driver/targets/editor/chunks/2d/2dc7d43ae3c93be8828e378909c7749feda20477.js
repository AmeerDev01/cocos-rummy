System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, instantiate, Label, Node, PageView, sys, BaseComponent, SKT_MAG_TYPE, sktInstance, sktMsgListener, setLoadingAction, global, hallAudio, lang, sourceManageSeletor, BaseViewModel, PrefabPathDefine, EffectType, ModalBox, SoundPathDefine, _dec, _class, _crd, ccclass, property, Hall_GiftBag;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../base/BaseComponent", _context.meta, extras);
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

  function _reportPossibleCrUseOfsetLoadingAction(extras) {
    _reporterNs.report("setLoadingAction", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhallAudio(extras) {
    _reporterNs.report("hallAudio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
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

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModalBox(extras) {
    _reporterNs.report("ModalBox", "../../common/ModalBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      PageView = _cc.PageView;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      SKT_MAG_TYPE = _unresolved_3.SKT_MAG_TYPE;
      sktInstance = _unresolved_3.sktInstance;
      sktMsgListener = _unresolved_3.sktMsgListener;
    }, function (_unresolved_4) {
      setLoadingAction = _unresolved_4.setLoadingAction;
    }, function (_unresolved_5) {
      global = _unresolved_5.global;
      hallAudio = _unresolved_5.hallAudio;
      lang = _unresolved_5.lang;
      sourceManageSeletor = _unresolved_5.sourceManageSeletor;
    }, function (_unresolved_6) {
      BaseViewModel = _unresolved_6.default;
    }, function (_unresolved_7) {
      PrefabPathDefine = _unresolved_7.PrefabPathDefine;
    }, function (_unresolved_8) {
      EffectType = _unresolved_8.EffectType;
    }, function (_unresolved_9) {
      ModalBox = _unresolved_9.default;
    }, function (_unresolved_10) {
      SoundPathDefine = _unresolved_10.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5d0casotmBMF4OercUwlnC7", "Hall_GiftBag", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'instantiate', 'Label', 'Node', 'PageView', 'sys', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_GiftBag", Hall_GiftBag = (_dec = ccclass('Hall_GiftBag'), _dec(_class = class Hall_GiftBag extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_btn_close: new Button(),
            props_PageView_gift_bag: new PageView(),
            props_page_template_item: new Node(),
            props_btn_left: new Node(),
            props_btn_right: new Node()
          };
          this.props = {
            isAutoShowPopItem: false,
            giftList: null
          };
          this.events = {
            onClosePanel: () => {}
          };
        }

        start() {}

        initState() {
          return {
            giftList: []
          };
        }

        bindEvent() {
          this.propertyNode.props_btn_close.node.on(Node.EventType.TOUCH_END, () => {
            !(_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
              error: Error()
            }), hallAudio) : hallAudio).getAudioInstance().playing && (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
              error: Error()
            }), hallAudio) : hallAudio).play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).MAIN_BGM, true);
            this.events.onClosePanel();
          });
          this.propertyNode.props_btn_left.on(Node.EventType.TOUCH_END, () => {
            const index = this.propertyNode.props_PageView_gift_bag.getCurrentPageIndex();
            this.propertyNode.props_PageView_gift_bag.scrollToPage(index > 0 ? index - 1 : 0);
            this.setArrowDisplay();
          });
          this.propertyNode.props_btn_right.on(Node.EventType.TOUCH_END, () => {
            // const count = this.propertyNode.props_PageView_gift_bag.getPages().length
            const count = this.propertyNode.props_PageView_gift_bag.content.children.filter(i => i.active).length;
            const index = this.propertyNode.props_PageView_gift_bag.getCurrentPageIndex();
            this.propertyNode.props_PageView_gift_bag.scrollToPage(index < count - 1 ? index + 1 : count - 1);
            this.setArrowDisplay();
          });
          this.propertyNode.props_PageView_gift_bag.node.on('page-turning', () => {
            this.setArrowDisplay();
          }, this);
          this.setArrowDisplay();
        }

        setArrowDisplay() {
          // const count = this.propertyNode.props_PageView_gift_bag.getPages().length
          const count = this.propertyNode.props_PageView_gift_bag.content.children.filter(i => i.active).length;
          const index = this.propertyNode.props_PageView_gift_bag.getCurrentPageIndex();
          this.propertyNode.props_btn_left.active = count > 1 ? true : false;
          this.propertyNode.props_btn_right.active = count > 1 ? true : false;

          if (index === 0) {
            this.propertyNode.props_btn_left.active = false;
          } else if (index + 1 === count) {
            this.propertyNode.props_btn_right.active = false;
          }
        }

        useProps(key, value) {
          if (key === "giftList") {
            if (!this.props.giftList.length) {
              (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
                error: Error()
              }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                error: Error()
              }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GIFT_LIST, {}, {
                isLoading: true
              });
            } else {
              this.setState({
                giftList: this.props.giftList
              });
            }
          }
        }

        bindUI() {
          this.propertyNode.props_page_template_item.active = false;
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GIFT_LIST, "gift", data => {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).hallDispatch((_crd && setLoadingAction === void 0 ? (_reportPossibleCrUseOfsetLoadingAction({
              error: Error()
            }), setLoadingAction) : setLoadingAction)({
              isShow: false
            }));
            this.setState({
              giftList: data
            });
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).RECHARGE_ORDER, 'gift', data => {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).hallDispatch((_crd && setLoadingAction === void 0 ? (_reportPossibleCrUseOfsetLoadingAction({
              error: Error()
            }), setLoadingAction) : setLoadingAction)({
              isShow: false
            }));
            sys.openURL(data); // ModalBox.Instance().show({ url: data })
          });
          this.useState((key, value) => {
            if (!this.state.giftList.filter(i => i.separatePage === 1).length) {
              (_crd && ModalBox === void 0 ? (_reportPossibleCrUseOfModalBox({
                error: Error()
              }), ModalBox) : ModalBox).Instance().show({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.MainPaneModule.NoGiftData, {}, {
                  placeStr: "暂无礼包数据"
                }),
                type: "Prompt"
              }, () => {
                this.events.onClosePanel();
                return true;
              });
            }

            this.propertyNode.props_PageView_gift_bag.removeAllPages(); //.content.removeAllChildren()

            this.state.giftList.filter(i => i.separatePage === 1).forEach((item, index) => {
              const node = instantiate(this.propertyNode.props_page_template_item);
              node.getChildByName("label_name").getComponent(Label).string = item.giftName;
              node.getChildByName("label_gole_old").getComponent(Label).string = item.normalGoldCoin.formatAmountWithCommas();
              node.getChildByName("label_gole_old").getComponent(Label).updateRenderData(true);
              node.getChildByName("label_gole").getComponent(Label).string = item.discountCoins.formatAmountWithCommas();
              node.getChildByName("label_price_buy").getComponent(Label).string = item.amount.formatAmountWithCommas();
              node.getChildByName("label_free").getComponent(Label).string = `+${item.discountRate}%`;
              node.getChildByName("btn_buy").on(Node.EventType.TOUCH_END, () => {
                //购买
                const chooseBankVM = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
                  error: Error()
                }), BaseViewModel) : BaseViewModel)('Hall_ChooseBank').mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                  error: Error()
                }), PrefabPathDefine) : PrefabPathDefine).HELL_CHOOSE_BANK).source).appendTo(this.node, {
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
              this.startCountdown(node.getChildByName("props_Label_cutdown_num").getComponent(Label)); // this.propertyNode.props_PageView_gift_bag.content.addChild(node)

              try {
                this.propertyNode.props_PageView_gift_bag.addPage(node);
              } catch (e) {
                console.log(e);
              }
            });
            this.scheduleOnce(() => {
              //加个延时是为了确认isAutoShowPopItem已经获取了值
              if (this.props && !this.props.isAutoShowPopItem) {
                this.state.giftList.forEach((item, index) => {
                  if (item.separatePage === 1) {
                    this.propertyNode.props_PageView_gift_bag.scrollToPage(index);
                  }
                });
              }
            }, 0.05);
            this.setArrowDisplay();
          }, ["giftList"]);
        }

        onDestroy() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).removeById("gift");
        }

        startCountdown(timeLabel) {
          const targetDate = new Date();
          targetDate.setDate(targetDate.getDate() + 1);
          targetDate.setHours(0);
          targetDate.setMinutes(0);
          targetDate.setSeconds(0);
          targetDate.setMilliseconds(0);
          this.updateCountdownLabel(timeLabel, targetDate);
          this.schedule(() => {
            this.updateCountdownLabel(timeLabel, targetDate);
          }, 1);
        }

        updateCountdownLabel(timeLabel, targetDate) {
          const currentDate = new Date();
          let times = (targetDate.getTime() - currentDate.getTime()) / 1000; // times是剩余时间总的秒数

          let h = parseInt(times / 60 / 60 + ''); //时

          const remainHours = h < 10 ? '0' + h : h;
          let m = parseInt(times / 60 % 60 + ''); //分

          const remainMinutes = m < 10 ? '0' + m : m;
          let s = parseInt(times % 60 + ''); // 秒

          const remainSeconds = s < 10 ? '0' + s : s;
          const remainTimeStr = `${remainHours}:${remainMinutes}:${remainSeconds}`;
          timeLabel.string = remainTimeStr;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2dc7d43ae3c93be8828e378909c7749feda20477.js.map