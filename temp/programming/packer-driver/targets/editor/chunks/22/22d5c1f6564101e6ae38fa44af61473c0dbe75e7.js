System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, assetManager, Button, instantiate, Label, Node, Sprite, SpriteFrame, BaseComponent, SKT_MAG_TYPE, sktInstance, sktMsgListener, setLoadingAction, global, hallAudio, initToggle, SoundPathDefine, _dec, _class, _crd, ccclass, property, Hall_ChooseBank;

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

  function _reportPossibleCrUseOfChannelItemType(extras) {
    _reporterNs.report("ChannelItemType", "./Hall_ShopPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhallAudio(extras) {
    _reporterNs.report("hallAudio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitToggle(extras) {
    _reporterNs.report("initToggle", "../../utils/tool", _context.meta, extras);
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
      assetManager = _cc.assetManager;
      Button = _cc.Button;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
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
    }, function (_unresolved_6) {
      initToggle = _unresolved_6.initToggle;
    }, function (_unresolved_7) {
      SoundPathDefine = _unresolved_7.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "65c422XejBD17d4IhlIVqG5", "Hall_ChooseBank", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'Button', 'Component', 'ImageAsset', 'instantiate', 'Label', 'Node', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_ChooseBank", Hall_ChooseBank = (_dec = ccclass('Hall_ChooseBank'), _dec(_class = class Hall_ChooseBank extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_btn_spr_choose_close: new Button(),
            props_btn_sure: new Button(),
            props_Toggle_template: new Node(),
            props_toggleGroup_bank: new Node()
          };
          this.props = {
            onlyDisplayArr: []
          };
          this.events = {
            onClosePanel: () => {},
            onOrder: rechargeChannelId => {}
          };
        }

        start() {}

        initState() {
          return {
            dataList: [],
            chooseItemIndex: 0
          };
        }

        bindEvent() {
          this.propertyNode.props_btn_spr_choose_close.node.on(Node.EventType.TOUCH_END, () => {
            this.events.onClosePanel();
          });
          this.propertyNode.props_btn_sure.node.on(Node.EventType.TOUCH_END, () => {
            if (this.state.dataList.length && this.state.dataList[this.state.chooseItemIndex]) {
              this.events.onOrder(this.state.dataList[this.state.chooseItemIndex].id);
            }
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GET_WITH_DRAW_CHANNEL, 'chooseBank', data => {
            if (this.props.onlyDisplayArr.length) {
              this.setState({
                dataList: data.filter(i => this.props.onlyDisplayArr.indexOf(i.id) !== -1)
              });
            } else {
              this.setState({
                dataList: data
              });
            }

            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).hallDispatch((_crd && setLoadingAction === void 0 ? (_reportPossibleCrUseOfsetLoadingAction({
              error: Error()
            }), setLoadingAction) : setLoadingAction)({
              isShow: false
            }));
          });
          (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GET_WITH_DRAW_CHANNEL, {}, {
            isLoading: true
          });
        }

        useProps(key, value) {}

        bindUI() {
          this.useState((key, value) => {
            this.state.dataList.forEach((item, index) => {
              const node = instantiate(this.propertyNode.props_Toggle_template);
              node.getChildByName("spr_bankName").getComponent(Label).string = item.name;
              assetManager.loadRemote(item.iconMax, (err, asset) => {
                if (this.propertyNode && !err) {
                  node.getChildByName("spr_bankIcon").getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(asset);
                }
              });
              node.active = true;
              this.propertyNode.props_toggleGroup_bank.addChild(node);
            });
          }, ["dataList"]);
          (_crd && initToggle === void 0 ? (_reportPossibleCrUseOfinitToggle({
            error: Error()
          }), initToggle) : initToggle)(this.propertyNode.props_toggleGroup_bank, this.node, new Hall_ChooseBank.EventHandler(), "Hall_ChooseBank", "channelToggleCallback");
        }

        channelToggleCallback(event, customEventData) {
          (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
            error: Error()
          }), hallAudio) : hallAudio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).BTU_CLICK);
          const chooseIndex = event.target['parent'].children.indexOf(event.target);
          this.setState({
            chooseItemIndex: chooseIndex
          });
        }

        onDestroy() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).removeById("chooseBank");
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=22d5c1f6564101e6ae38fa44af61473c0dbe75e7.js.map