System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, BaseComponent, ruleViewModel, setViewModel, playBtnClick, global, lang, addToastAction, _dec, _class, _crd, ccclass, property, DragonTiger_title;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfruleViewModel(extras) {
    _reporterNs.report("ruleViewModel", "../ViewModel/DragonTigerTitleViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetViewModel(extras) {
    _reporterNs.report("setViewModel", "../ViewModel/DragonTigerTitleViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayBtnClick(extras) {
    _reporterNs.report("playBtnClick", "../music", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      ruleViewModel = _unresolved_3.ruleViewModel;
      setViewModel = _unresolved_3.setViewModel;
    }, function (_unresolved_4) {
      playBtnClick = _unresolved_4.playBtnClick;
    }, function (_unresolved_5) {
      global = _unresolved_5.global;
      lang = _unresolved_5.lang;
    }, function (_unresolved_6) {
      addToastAction = _unresolved_6.addToastAction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d646aoDTspMf5+OP1KKfaru", "DragonTiger_title", undefined);

      __checkObsolete__(['_decorator', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DragonTiger_title", DragonTiger_title = (_dec = ccclass('DragonTiger_title'), _dec(_class = class DragonTiger_title extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.isOpenMenu = false;
          this.propertyNode = {
            // 返回按钮
            props_btn_title_return: new Node(),
            // 菜单按钮
            props_btn_title_menu: new Node(),
            // 菜单-设置
            props_btn_title_set: new Node(),
            // 菜单—说明
            props_btn_title_help: new Node()
          };
          this.props = {
            memberBet: null,
            winType: 0
          };
          this.events = {
            onClosePanel: () => {},
            returnHall: () => {},
            openMenuPanel: () => {},
            openHelpPenel: () => {},
            openSetPanel: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_title_return.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();

            if (this.props.memberBet && Object.keys(this.props.memberBet).length != 0) {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.palyingModule.GameExit, {}, {
                  placeStr: "您正在游戏中，退出失败，请游戏结束后重试。"
                })
              }));
              return;
            }

            this.events.returnHall();
          });
          this.propertyNode.props_btn_title_menu.on(Node.EventType.TOUCH_END, () => {
            this.events.openMenuPanel();
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
          });
          this.propertyNode.props_btn_title_help.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();

            if ((_crd && ruleViewModel === void 0 ? (_reportPossibleCrUseOfruleViewModel({
              error: Error()
            }), ruleViewModel) : ruleViewModel) === undefined) {
              this.events.openHelpPenel();
            } else {
              if ((_crd && ruleViewModel === void 0 ? (_reportPossibleCrUseOfruleViewModel({
                error: Error()
              }), ruleViewModel) : ruleViewModel).isUnMount) {
                this.events.openHelpPenel();
              }
            }
          });
          this.propertyNode.props_btn_title_set.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();

            if ((_crd && setViewModel === void 0 ? (_reportPossibleCrUseOfsetViewModel({
              error: Error()
            }), setViewModel) : setViewModel) === undefined) {
              this.events.openSetPanel();
            } else {
              if ((_crd && setViewModel === void 0 ? (_reportPossibleCrUseOfsetViewModel({
                error: Error()
              }), setViewModel) : setViewModel).isUnMount) {
                this.events.openSetPanel();
              }
            }
          });
        }

        useProps(key, value) {
          if (key === "winType") {}

          if (key === "memberBet") {}
        }

        toggleCallback(event, customEventData) {}

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0b8230c2aee4fd3206b972f940e53b7e44d98694.js.map