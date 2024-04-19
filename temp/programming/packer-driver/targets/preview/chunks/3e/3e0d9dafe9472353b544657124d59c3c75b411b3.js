System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "fast-deep-equal", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "cc/env", "__unresolved_17"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, assetManager, Button, game, instantiate, Label, Node, PageView, ScrollView, Sprite, SpriteFrame, sys, Toggle, tween, UITransform, Vec3, BaseComponent, subGameGateQueue, SubGameType, bundleCommon, fetcher, global, hallAudio, lang, sourceManageSeletor, PrefabPathDefine, EffectType, arrowDisplay, initToggle, setByScreenScale, SoundPathDefine, SubGameGateViewModel, MarqueeViewModel, PrefabPathDefineCommon, sktInstance, sktMsgListener, equal, addToastAction, setSocketConnectStatus, ToastType, Throttler, BuyType, ApiUrl, ModalBox, DEV, getPackageName, _dec, _class, _crd, ccclass, property, ToggleTabName, Hall_MainPanel;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGateQueueType(extras) {
    _reporterNs.report("GateQueueType", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallGameGateType(extras) {
    _reporterNs.report("HallGameGateType", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsubGameGateQueue(extras) {
    _reporterNs.report("subGameGateQueue", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubGameType(extras) {
    _reporterNs.report("SubGameType", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbundleCommon(extras) {
    _reporterNs.report("bundleCommon", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOffetcher(extras) {
    _reporterNs.report("fetcher", "../index", _context.meta, extras);
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

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../../hall/sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfarrowDisplay(extras) {
    _reporterNs.report("arrowDisplay", "../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitToggle(extras) {
    _reporterNs.report("initToggle", "../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetByScreenScale(extras) {
    _reporterNs.report("setByScreenScale", "../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubGameGateViewModel(extras) {
    _reporterNs.report("SubGameGateViewModel", "../viewModel/SubGameGateViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMarqueeViewModel(extras) {
    _reporterNs.report("MarqueeViewModel", "../viewModel/MarqueeViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefineCommon(extras) {
    _reporterNs.report("PrefabPathDefineCommon", "../../../script/common/sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktInstance(extras) {
    _reporterNs.report("sktInstance", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktMsgListener(extras) {
    _reporterNs.report("sktMsgListener", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfequal(extras) {
    _reporterNs.report("equal", "fast-deep-equal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetSocketConnectStatus(extras) {
    _reporterNs.report("setSocketConnectStatus", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToastType(extras) {
    _reporterNs.report("ToastType", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThrottler(extras) {
    _reporterNs.report("Throttler", "../../utils/Throttler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuyType(extras) {
    _reporterNs.report("BuyType", "./Hall_ShopPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApiUrl(extras) {
    _reporterNs.report("ApiUrl", "../apiUrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModalBox(extras) {
    _reporterNs.report("ModalBox", "../../common/ModalBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetPackageName(extras) {
    _reporterNs.report("getPackageName", "../../common/bridge", _context.meta, extras);
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
      game = _cc.game;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      PageView = _cc.PageView;
      ScrollView = _cc.ScrollView;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      sys = _cc.sys;
      Toggle = _cc.Toggle;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      subGameGateQueue = _unresolved_3.subGameGateQueue;
      SubGameType = _unresolved_3.SubGameType;
    }, function (_unresolved_4) {
      bundleCommon = _unresolved_4.bundleCommon;
      fetcher = _unresolved_4.fetcher;
      global = _unresolved_4.global;
      hallAudio = _unresolved_4.hallAudio;
      lang = _unresolved_4.lang;
      sourceManageSeletor = _unresolved_4.sourceManageSeletor;
    }, function (_unresolved_5) {
      PrefabPathDefine = _unresolved_5.PrefabPathDefine;
    }, function (_unresolved_6) {
      EffectType = _unresolved_6.EffectType;
    }, function (_unresolved_7) {
      arrowDisplay = _unresolved_7.arrowDisplay;
      initToggle = _unresolved_7.initToggle;
      setByScreenScale = _unresolved_7.setByScreenScale;
    }, function (_unresolved_8) {
      SoundPathDefine = _unresolved_8.SoundPathDefine;
    }, function (_unresolved_9) {
      SubGameGateViewModel = _unresolved_9.default;
    }, function (_unresolved_10) {
      MarqueeViewModel = _unresolved_10.default;
    }, function (_unresolved_11) {
      PrefabPathDefineCommon = _unresolved_11.PrefabPathDefine;
    }, function (_unresolved_12) {
      sktInstance = _unresolved_12.sktInstance;
      sktMsgListener = _unresolved_12.sktMsgListener;
    }, function (_fastDeepEqual) {
      equal = _fastDeepEqual.default;
    }, function (_unresolved_13) {
      addToastAction = _unresolved_13.addToastAction;
      setSocketConnectStatus = _unresolved_13.setSocketConnectStatus;
      ToastType = _unresolved_13.ToastType;
    }, function (_unresolved_14) {
      Throttler = _unresolved_14.default;
    }, function (_unresolved_15) {
      BuyType = _unresolved_15.BuyType;
    }, function (_unresolved_16) {
      ApiUrl = _unresolved_16.ApiUrl;
    }, function (_unresolved_17) {
      ModalBox = _unresolved_17.default;
    }, function (_ccEnv) {
      DEV = _ccEnv.DEV;
    }, function (_unresolved_18) {
      getPackageName = _unresolved_18.getPackageName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dfcc40+Z95G0Ibe9dVNS2JZ", "Hall_MainPanel", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'Button', 'EventHandler', 'game', 'ImageAsset', 'instantiate', 'Label', 'log', 'Node', 'PageView', 'ScrollView', 'Sprite', 'SpriteFrame', 'sys', 'Toggle', 'ToggleContainer', 'Tween', 'tween', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ToggleTabName", ToggleTabName = /*#__PURE__*/function (ToggleTabName) {
        ToggleTabName["ALL"] = "Toggle_all";
        ToggleTabName["DOMINO"] = "Toggle_domino";
        ToggleTabName["SLOTS"] = "Toggle_slots";
        ToggleTabName["OTHER"] = "Toggle_other";
        ToggleTabName["INIT"] = "";
        return ToggleTabName;
      }({}));

      _export("Hall_MainPanel", Hall_MainPanel = (_dec = ccclass('Hall_MainPanel'), _dec(_class = class Hall_MainPanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.props = {
            memberAssetGoldPieces: 0,
            nickName: 'noName',
            avatarIndex: 0,
            level: 0,
            vipLevel: 0,
            subGameInfo: null,
            tourist: 1,
            memberId: '',
            memberName: '',
            isConnect: true,
            retryConnectTimes: 1,
            isUnreadActivity: false
          };
          // public gateViewModelList: BaseViewModel<Hall_SubGameGate, GateState, GateProps, GateEvent>[] = []
          this.gateViewModelList = [];
          this.totalGateQueue = (_crd && subGameGateQueue === void 0 ? (_reportPossibleCrUseOfsubGameGateQueue({
            error: Error()
          }), subGameGateQueue) : subGameGateQueue)[0].queue;
          this.timerBg = 0;
          this.connectRetryDone = true;
          this.swiperDatas = [];
          this.events = {
            // onToggleGameTypeHandler: (gameType: SubGameType, gameGateViewModelList: BaseViewModel<Hall_SubGameGate, GateState, GateProps, GateEvent>[]) => {},
            onToggleGameTypeHandler: (gameType, gameGateViewModelList) => {},
            onTouchIntoHandler: gameInfo => {},
            onOpenPersonCenter: index => {},
            onOpenBankPanel: () => {},
            onOpenMailPanel: () => {},
            onOpenShopPanel: () => {},
            onOpenWithdrawalPanel: () => {},
            onOpenBindPhonePanel: () => {},
            onOpenUpgradePanel: () => {},
            onOpenAwardPanel: () => {},
            onOpenGiftBoxanel: () => {},
            onOpenSignInPanel: () => {},
            onOpenVipMainPanel: () => {},
            onOpenService: () => {}
          };
          this.propertyNode = {
            /**白天 */
            props_hall_background_day: new Node(),

            /**黑夜 */
            props_hall_background_night: new Node(),

            /**tab头 */
            props_ToggleGroup_type: new Node(),

            /**游戏入口主scrollView */
            props_ScrollView_game_icon: new Node(),

            /**用户选择头像 */
            props_btn_head_choose: new Node(),
            props_btn_down_bank: new Node(),
            props_btn_down_inbox: new Node(),
            props_btn_down_shop: new Node(),
            props_btn_down_withdrawal: new Node(),
            props_btn_down_phone: new Node(),
            props_btn_down_gift: new Node(),

            /**用户昵称 */
            props_Label_name: new Label(),

            /**用户金币 */
            props_Label_gold: new Node(),

            /**用户头像边的加号 */
            props_btn_gold_add: new Node(),

            /**用户头像图片 */
            props_spr_head: new Node(),

            /**vip级别 */
            props_spr_vip: new Node(),

            /**签到按钮 */
            props_btn_down_signIn: new Node(),

            /**vip按钮 */
            props_btn_down_vip: new Node(),

            /**返佣按钮 */
            props_btn_down_rabat: new Node(),

            /**分佣按钮 */
            props_btn_down_referral: new Node(),

            /**背包按钮 */
            props_btn_down_bag: new Node(),

            /** */
            props_btn_down_hadiah: new Node(),

            /**任务按钮 */
            props_btn_down_task: new Node(),

            /**客户按钮 */
            props_btn_down_service: new Node(),

            /**礼包入口按钮 */
            props_btn_down_shopGift: new Node(),

            /**跑马灯位置 */
            props_Marquee_node: new Node(),

            /**左箭头 */
            props_btn_left: new Node(),

            /**右箭头 */
            props_btn_right: new Node(),

            /**断链提示面板 */
            props_disconnect_panel: new Node(),
            props_connect_tip: new Label(),

            /**关闭和重试连接外框 */
            props_user_opa: new Node(),

            /**连接关闭，退出 */
            props_sokt_close: new Button(),

            /**连接重试 */
            props_sokt_retry: new Button(),

            /**宣传画册 */
            props_PageView: new PageView(),

            /**宣传画册-轮播灯 */
            props_indicator: new Node(),

            /**宣传画册-轮播灯 */
            props_indicator_toggle: new Node(),

            /**游戏轮播广告 */
            props_page_template: new Node(),

            /**大厅的爆奖公告 */
            props_winningBox: new Node()
          };
          this.swipeTime = 0;
        }

        start() {}

        callback(event, customEventData) {
          (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
            error: Error()
          }), hallAudio) : hallAudio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).BTU_CLICK);
          var gameType = (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
            error: Error()
          }), SubGameType) : SubGameType).All;

          switch (event.target["name"]) {
            case ToggleTabName.ALL:
              //全部游戏
              gameType = (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                error: Error()
              }), SubGameType) : SubGameType).All;
              break;

            case ToggleTabName.DOMINO:
              //多米诺
              gameType = (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                error: Error()
              }), SubGameType) : SubGameType).Domino;
              break;

            case ToggleTabName.SLOTS:
              //slot游戏
              gameType = (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                error: Error()
              }), SubGameType) : SubGameType).Slot;
              break;

            case ToggleTabName.OTHER:
              //其他
              gameType = (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
                error: Error()
              }), SubGameType) : SubGameType).Other;
              break;
          }

          this.getGetSubGameGateQueue(event.target["name"], gameType);
          this.scheduleOnce(() => {
            (_crd && arrowDisplay === void 0 ? (_reportPossibleCrUseOfarrowDisplay({
              error: Error()
            }), arrowDisplay) : arrowDisplay)(this.propertyNode.props_ScrollView_game_icon.getComponent(ScrollView), this.propertyNode.props_btn_left, this.propertyNode.props_btn_right, 40);
          }, 0.1);
        }

        update(deltaTime) {}

        initState() {
          return {
            currGateQueue: (_crd && subGameGateQueue === void 0 ? (_reportPossibleCrUseOfsubGameGateQueue({
              error: Error()
            }), subGameGateQueue) : subGameGateQueue)[0],
            chooseTabName: ToggleTabName.INIT,
            subGameType: (_crd && SubGameType === void 0 ? (_reportPossibleCrUseOfSubGameType({
              error: Error()
            }), SubGameType) : SubGameType).All
          };
        }

        bindEvent() {
          (_crd && initToggle === void 0 ? (_reportPossibleCrUseOfinitToggle({
            error: Error()
          }), initToggle) : initToggle)(this.propertyNode.props_ToggleGroup_type, this.node, new Hall_MainPanel.EventHandler(), "Hall_MainPanel", "callback");
          this.propertyNode.props_btn_head_choose.on(Node.EventType.TOUCH_END, () => {
            this.isDebouncerAsync(() => {
              this.events.onOpenPersonCenter(1);
            });
          });
          this.propertyNode.props_btn_down_bag.on(Node.EventType.TOUCH_END, () => {
            this.isDebouncerAsync(() => {
              this.events.onOpenPersonCenter(5);
            });
          });
          this.propertyNode.props_btn_down_hadiah.on(Node.EventType.TOUCH_END, () => {
            this.isDebouncerAsync(() => {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).openShop((_crd && BuyType === void 0 ? (_reportPossibleCrUseOfBuyType({
                error: Error()
              }), BuyType) : BuyType).TAS);
            });
          });
          this.propertyNode.props_btn_down_rabat.on(Node.EventType.TOUCH_END, () => {
            this.isDebouncerAsync(() => {
              this.events.onOpenPersonCenter(6);
            });
          });
          this.propertyNode.props_btn_down_referral.on(Node.EventType.TOUCH_END, () => {
            this.isDebouncerAsync(() => {
              this.events.onOpenPersonCenter(4);
            });
          });
          this.propertyNode.props_btn_down_bank.on(Node.EventType.TOUCH_END, () => {
            this.isDebouncerAsync(() => {
              this.events.onOpenBankPanel();
            });
          });
          this.propertyNode.props_btn_down_inbox.on(Node.EventType.TOUCH_END, () => {
            this.isDebouncerAsync(() => {
              this.events.onOpenMailPanel();
            });
          });
          this.propertyNode.props_btn_down_shop.on(Node.EventType.TOUCH_END, () => {
            this.isDebouncerAsync(() => {
              this.events.onOpenShopPanel();
            });
          });
          this.propertyNode.props_btn_gold_add.on(Node.EventType.TOUCH_END, () => {
            this.isDebouncerAsync(() => {
              this.events.onOpenShopPanel();
            });
          });
          this.propertyNode.props_btn_down_withdrawal.on(Node.EventType.TOUCH_END, () => {
            this.isDebouncerAsync(() => {
              this.events.onOpenWithdrawalPanel();
            });
          });
          this.propertyNode.props_btn_down_phone.on(Node.EventType.TOUCH_END, () => {
            this.isDebouncerAsync(() => {
              this.events.onOpenUpgradePanel();
            }); // this.events.onOpenBindPhonePanel()
          });
          this.propertyNode.props_btn_down_gift.on(Node.EventType.TOUCH_END, () => {
            this.isDebouncerAsync(() => {
              this.events.onOpenAwardPanel();
            });
          });
          this.propertyNode.props_btn_down_shopGift.on(Node.EventType.TOUCH_END, () => {
            this.isDebouncerAsync(() => {
              this.events.onOpenGiftBoxanel();
            });
          });
          this.propertyNode.props_btn_down_signIn.on(Node.EventType.TOUCH_END, () => {
            this.isDebouncerAsync(() => {
              this.events.onOpenSignInPanel();
            });
          });
          this.propertyNode.props_btn_down_task.on(Node.EventType.TOUCH_END, () => {
            this.isDebouncerAsync(() => {
              this.events.onOpenSignInPanel();
            });
          });
          this.propertyNode.props_btn_down_vip.on(Node.EventType.TOUCH_END, () => {
            this.isDebouncerAsync(() => {
              this.events.onOpenVipMainPanel();
            });
          });
          this.propertyNode.props_btn_down_service.on(Node.EventType.TOUCH_END, () => {
            this.isDebouncerAsync(() => {
              this.events.onOpenService();
            });
          });
          this.propertyNode.props_ScrollView_game_icon.on(ScrollView.EventType.SCROLLING, e => {
            (_crd && arrowDisplay === void 0 ? (_reportPossibleCrUseOfarrowDisplay({
              error: Error()
            }), arrowDisplay) : arrowDisplay)(e, this.propertyNode.props_btn_left, this.propertyNode.props_btn_right, 40);
          });
          this.propertyNode.props_sokt_close.node.on(Node.EventType.TOUCH_END, () => {
            game.end();
          });
          this.propertyNode.props_sokt_retry.node.on(Node.EventType.TOUCH_END, () => {
            if (!this.connectRetryDone) {
              console.log('wait please');
              return;
            }

            this.dispatch((_crd && setSocketConnectStatus === void 0 ? (_reportPossibleCrUseOfsetSocketConnectStatus({
              error: Error()
            }), setSocketConnectStatus) : setSocketConnectStatus)({
              isConnect: false,
              retryConnectTimes: 1
            }));
            (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
              error: Error()
            }), sktInstance) : sktInstance).reConnectTimes = 0;
            this.connectRetryDone = false;
            (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
              error: Error()
            }), sktInstance) : sktInstance).reconnect().then(() => {
              this.connectRetryDone = true;
            }).catch(() => {
              this.connectRetryDone = true;
            });
          });
          this.propertyNode.props_btn_left.on(Node.EventType.TOUCH_END, () => {
            var scrollView = this.propertyNode.props_ScrollView_game_icon.getComponent(ScrollView);
            tween(scrollView.content).to(0.1, {
              position: new Vec3(0, 0, 0)
            }).call(() => {
              (_crd && arrowDisplay === void 0 ? (_reportPossibleCrUseOfarrowDisplay({
                error: Error()
              }), arrowDisplay) : arrowDisplay)(scrollView, this.propertyNode.props_btn_left, this.propertyNode.props_btn_right, 40);
            }).start();
          });
          this.propertyNode.props_btn_right.on(Node.EventType.TOUCH_END, () => {
            var scrollView = this.propertyNode.props_ScrollView_game_icon.getComponent(ScrollView);
            var wrapWodth = this.propertyNode.props_ScrollView_game_icon.getComponent(UITransform).width;
            tween(scrollView.content).to(0.1, {
              position: new Vec3(-scrollView.content.getComponent(UITransform).width + wrapWodth, 0, 0)
            }).call(() => {
              (_crd && arrowDisplay === void 0 ? (_reportPossibleCrUseOfarrowDisplay({
                error: Error()
              }), arrowDisplay) : arrowDisplay)(scrollView, this.propertyNode.props_btn_left, this.propertyNode.props_btn_right, 40);
            }).start();
          });
        }

        useProps(key, value) {
          key === "nickName" && (this.propertyNode.props_Label_name.string = value.cur + "");
          key === "memberAssetGoldPieces" && value.cur && (this.propertyNode.props_Label_gold.getComponent(Label).string = value.cur.formatAmountWithCommas(0).split('.')[0]);

          if (key === "avatarIndex") {
            (_crd && bundleCommon === void 0 ? (_reportPossibleCrUseOfbundleCommon({
              error: Error()
            }), bundleCommon) : bundleCommon).load("resource/head/head_circle_" + value.cur + "/spriteFrame", SpriteFrame, (err, sp) => {
              if (!err) {
                this.propertyNode.props_spr_head.getComponent(Sprite).spriteFrame = sp;
              }
            });
          }

          if (key === "vipLevel") {
            (_crd && bundleCommon === void 0 ? (_reportPossibleCrUseOfbundleCommon({
              error: Error()
            }), bundleCommon) : bundleCommon).load("resource/vip/VIP" + value.cur + "/spriteFrame", SpriteFrame, (err, sp) => {
              !err && (this.propertyNode.props_spr_vip.getComponent(Sprite).spriteFrame = sp);
            });
          }

          if (key === "tourist") {
            this.propertyNode.props_btn_down_phone.active = this.props.tourist !== 0;
          }

          if (key === "memberName") {
            if (this.props.memberName) {
              sys.localStorage.setItem('loginName', this.props.memberName);
            } else {// sys.localStorage.removeItem('loginName')
            }
          }

          if (key === "isConnect") {
            this.propertyNode.props_disconnect_panel.active = !this.props.isConnect;
          }

          if (key === "retryConnectTimes") {
            if (!(_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
              error: Error()
            }), sktInstance) : sktInstance)) return;
            this.propertyNode.props_user_opa.active = this.props.retryConnectTimes >= (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
              error: Error()
            }), sktInstance) : sktInstance).maxReConnectTimes;
            this.propertyNode.props_connect_tip.node.active = this.props.retryConnectTimes < (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
              error: Error()
            }), sktInstance) : sktInstance).maxReConnectTimes;
            this.propertyNode.props_connect_tip.string = (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
              error: Error()
            }), lang) : lang).write(k => k.WebSocketModule.socketRetryTimes, {
              times: this.props.retryConnectTimes
            }, {
              placeStr: "连接断开，正在进行第{times}次重连..."
            });
          }

          if (key === 'isUnreadActivity') {// this.propertyNode.props_btn_down_gift.getChildByName("props_gift_red_dot").active = this.props.isUnreadActivity ? true : false;
          } // if (key === "_setDone") {
          // 	console.log(this.props)
          // 	if (!this.props.tourist) {
          // 		// 如果不是游客，先把登录名缓存下来，用于登录页显示
          // 		sys.localStorage.setItem('loginName', this.props.memberName)
          // 	} else {
          // 		sys.localStorage.removeItem('loginName')
          // 	}
          // }

        }

        bindUI() {
          this.useState(() => {
            // 实例化图标对象，先清空
            var scrollViewContent = this.propertyNode.props_ScrollView_game_icon.getComponent(ScrollView).content; // scrollViewContent.removeAllChildren()
            // const gateViewModelList: BaseViewModel<Hall_SubGameGate, GateState, GateProps, GateEvent>[] = []

            var ratio = (_crd && setByScreenScale === void 0 ? (_reportPossibleCrUseOfsetByScreenScale({
              error: Error()
            }), setByScreenScale) : setByScreenScale)(); // this.gateViewModelList = []

            var isInit = this.gateViewModelList.length === 0 ? true : false;

            if (!isInit) {
              this.gateViewModelList.forEach(item => item.viewNode.active = false);
            }

            this.state.currGateQueue.queue.forEach(gamesIds => {
              // const gateModelView = new BaseViewModel<Hall_SubGameGate, GateState, GateProps, GateEvent>("Hall_SubGameGate")
              // const target = this.gateViewModelList.find(item => equal(item.comp.props.gamesIds, gamesIds))
              if (!isInit) {
                var target = this.gateViewModelList.find(item => (_crd && equal === void 0 ? (_reportPossibleCrUseOfequal({
                  error: Error()
                }), equal) : equal)(item.comp.props.gamesIds, gamesIds));
                target && (target.viewNode.active = true);
              } else {
                var gateModelView = new (_crd && SubGameGateViewModel === void 0 ? (_reportPossibleCrUseOfSubGameGateViewModel({
                  error: Error()
                }), SubGameGateViewModel) : SubGameGateViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                  error: Error()
                }), PrefabPathDefine) : PrefabPathDefine).SUB_GAME_GATE).source).appendTo(scrollViewContent, {
                  effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                    error: Error()
                  }), EffectType) : EffectType).EFFECT1 // effectOption: {
                  // 	scaleOrigin: {
                  // 		x: ratio,
                  // 		y: ratio
                  // 	}
                  // }

                }).setProps({
                  gamesIds
                }).setEvent({
                  onTouchInto: gameInfo => {
                    this.isDebouncerAsync(() => {
                      this.events.onTouchIntoHandler(gameInfo);
                    });
                  }
                }).connect();
                this.gateViewModelList.push(gateModelView);
              }
            });
            this.events.onToggleGameTypeHandler(this.state.subGameType, this.gateViewModelList);
          }, ["chooseTabName"]);
          this.setState({
            chooseTabName: ToggleTabName.ALL
          });
          this.propertyNode.props_indicator_toggle.active = false;
          (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
            error: Error()
          }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
            error: Error()
          }), ApiUrl) : ApiUrl).GAME_SWIPE, {}, "get").then(data => {
            data.forEach((item, index) => {
              assetManager.loadRemote(item.swiperUrl, (err, asset) => {
                if (this.propertyNode && !err) {
                  var sp = SpriteFrame.createWithImage(asset);
                  item.sp = sp;
                  this.swiperDatas.push(item);
                }

                if (err) {
                  (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                    error: Error()
                  }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                    error: Error()
                  }), addToastAction) : addToastAction)({
                    content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                      error: Error()
                    }), lang) : lang).write(k => k.HallModule.LoadFaild, {}, {
                      placeStr: "加载资源失败"
                    }),
                    type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                      error: Error()
                    }), ToastType) : ToastType).ERROR
                  }));
                }

                if (this.propertyNode && index + 1 === data.length) {
                  this.propertyNode.props_page_template.active = false; // this.scrollPageView()

                  if (this.swiperDatas.length > 0) {
                    this.addPageViewNode(this.swiperDatas.length - 1);

                    if (this.swiperDatas.length > 1) {
                      this.swiperDatas.forEach((v, i) => {
                        this.addPageViewNode(i);
                        this.createIndicatorToggle(v);
                      });
                      this.addPageViewNode(0);
                      this.swipeTimeScoll();
                    }
                  }
                }
              });
            });
          });
          this.scrollPageViewListener();
          this.updateBackground();
          new (_crd && MarqueeViewModel === void 0 ? (_reportPossibleCrUseOfMarqueeViewModel({
            error: Error()
          }), MarqueeViewModel) : MarqueeViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)("common").getFile((_crd && PrefabPathDefineCommon === void 0 ? (_reportPossibleCrUseOfPrefabPathDefineCommon({
            error: Error()
          }), PrefabPathDefineCommon) : PrefabPathDefineCommon).MARQUEE_INSERT).source).appendTo(this.propertyNode.props_Marquee_node).connect(); // new MarqueeViewModel().mountView(sourceManageSeletor("common").getFile(CommonPrefabPathDefine.MARQUEE).source, "Common_Marquee").appendTo(this.propertyNode.props_marquee)
        }

        scrollPageViewListener() {
          this.propertyNode.props_PageView.node.on(PageView.EventType.SCROLL_ENDED, pageView => {
            if (pageView.curPageIdx === 0) {
              pageView.scrollToPage(pageView.getPages().length - 2, 0);
            } else if (pageView.curPageIdx + 1 === pageView.getPages().length) {
              pageView.scrollToPage(1, 0);
            }

            var page = pageView.getPages()[pageView.curPageIdx];
            this.swiperDatas.find(v => v.name === page.name).toggle.isChecked = true;
            this.swipeTimeScoll();
          });
        }

        scrollPageView() {
          if (!this.propertyNode) return;
          var pageIndex = this.propertyNode.props_PageView.getCurrentPageIndex();
          var length = this.propertyNode.props_PageView.getPages().length;
          this.propertyNode.props_PageView.scrollToPage(pageIndex === length - 1 ? 1 : ++pageIndex);
        }

        createIndicatorToggle(swipeData) {
          var toggleNode = instantiate(this.propertyNode.props_indicator_toggle);
          toggleNode.active = true;
          this.propertyNode.props_indicator.addChild(toggleNode);
          swipeData.toggle = toggleNode.getComponent(Toggle);
          swipeData.toggle.isChecked = true;
        }

        swipeTimeScoll() {
          this.unschedule(this.scrollPageView);
          this.scheduleOnce(this.scrollPageView, 5); // this.swipeTime && window.clearTimeout(this.swipeTime);
          // this.swipeTime = window.setTimeout(() => {
          // 	this.scrollPageView()
          // }, 5000)
        }

        addPageViewNode(index, insertIndex) {
          if (insertIndex === void 0) {
            insertIndex = -1;
          }

          if (!this.node.isValid) return;
          var item = this.swiperDatas[index];
          item.name = "swpier_" + index;
          var node = instantiate(this.propertyNode.props_page_template);
          node.getComponent(Sprite).spriteFrame = item.sp;
          node.name = item.name;
          node.active = true;
          insertIndex >= 0 ? this.propertyNode.props_PageView.insertPage(node, insertIndex) : this.propertyNode.props_PageView.addPage(node);
          node.on(Node.EventType.TOUCH_END, () => {
            item.jump && (_crd && ModalBox === void 0 ? (_reportPossibleCrUseOfModalBox({
              error: Error()
            }), ModalBox) : ModalBox).Instance().show({
              url: item.detailUrl
            });
          });
        }

        updateBackground() {
          var hours = new Date().getHours();
          var isNight = hours > 18 || hours <= 6;

          if (this.propertyNode) {
            this.propertyNode.props_hall_background_day.active = !isNight;
            this.propertyNode.props_hall_background_night.active = isNight;
          }

          this.unschedule(this.updateBackground);
          this.schedule(this.updateBackground, 60);
        }

        getGetSubGameGateQueue(tabName, typeName) {
          // 获取当前要显示的图标数据
          var subGameQueue = (_crd && subGameGateQueue === void 0 ? (_reportPossibleCrUseOfsubGameGateQueue({
            error: Error()
          }), subGameGateQueue) : subGameGateQueue).find(item => "Toggle_" + item.toggleName === tabName).queue;
          this.setState({
            currGateQueue: {
              typeName,
              toggleName: tabName,
              queue: subGameQueue
            },
            chooseTabName: tabName,
            subGameType: typeName
          });
        }

        setGiftButtonDisplay(active) {
          this.propertyNode.props_btn_down_shopGift.active = active;
        }

        onDestroy() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).removeById("mainboard");
        }
        /**设置子游戏图标入口的加载状态 */


        setSubGameGate(gameId, progress, isShow) {
          var gateViewModel = this.gateViewModelList.find(item => item.comp.props.gamesIds.indexOf(gameId) !== -1);
          var isH5 = !DEV && (_crd && getPackageName === void 0 ? (_reportPossibleCrUseOfgetPackageName({
            error: Error()
          }), getPackageName) : getPackageName)() === 'web' && window['installBundle'];
          gateViewModel.comp.setLoadingState(gameId, progress, isShow, isH5 ? 0.5 : 1);
        }
        /**
         * 大厅功能入口防抖
         * @param done 
         */


        isDebouncerAsync(done) {
          (_crd && Throttler === void 0 ? (_reportPossibleCrUseOfThrottler({
            error: Error()
          }), Throttler) : Throttler).isDebouncerAsync('hall_entry', 200, true, () => {}).then(isPass => {
            done && done();
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3e0d9dafe9472353b544657124d59c3c75b411b3.js.map