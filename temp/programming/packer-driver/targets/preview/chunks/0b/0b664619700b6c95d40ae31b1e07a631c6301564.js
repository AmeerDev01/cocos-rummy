System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, Toggle, Widget, _decorator, tween, sourceManageSelector, BaseComponent, EffectType, PrefabPathDefine, HelpViewModel, _dec, _class, _crd, ccclass, property, Fish_Room;

  function _reportPossibleCrUseOfsourceManageSelector(extras) {
    _reporterNs.report("sourceManageSelector", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHelpViewModel(extras) {
    _reporterNs.report("HelpViewModel", "../viewModel/HelpViewModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      Toggle = _cc.Toggle;
      Widget = _cc.Widget;
      _decorator = _cc._decorator;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      sourceManageSelector = _unresolved_2.sourceManageSelector;
    }, function (_unresolved_3) {
      BaseComponent = _unresolved_3.BaseComponent;
    }, function (_unresolved_4) {
      EffectType = _unresolved_4.EffectType;
    }, function (_unresolved_5) {
      PrefabPathDefine = _unresolved_5.PrefabPathDefine;
    }, function (_unresolved_6) {
      HelpViewModel = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "80cb7n7aOhFE7kR2WX3q5mx", "Fish_Room", undefined);

      __checkObsolete__(['Node', 'Toggle', 'Vec3', 'Widget', '_decorator', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Fish_Room", Fish_Room = (_dec = ccclass('Fish_Room'), _dec(_class = class Fish_Room extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_background_node: new Node(),
            props_fish_pond_node: new Node(),
            props_battery_node: new Node(),
            props_auto: new Node(),
            props_lock: new Node(),
            props_side_board: new Node(),
            props_side_jiantou: new Node(),
            props_sidebtn_exit: new Node(),
            props_sidebtn_help: new Node()
          };
          this.props = {};
          this.events = {
            update: deltaTime => {},
            setLockFisState: isChecked => {},
            setAutoFire: isChecked => {},
            exitRoom: () => {},
            onDestroy: () => {}
          };
          this.isTweenIn = false;
        }

        start() {}

        getFishPondNode() {
          return this.propertyNode.props_fish_pond_node;
        }

        getBatteryNode() {
          return this.propertyNode.props_battery_node;
        }

        getBackgroundNode() {
          return this.propertyNode.props_background_node;
        }

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_auto.on(Toggle.EventType.TOGGLE, toggle => {
            this.events.setAutoFire(toggle.isChecked);
          });
          this.propertyNode.props_lock.on(Toggle.EventType.TOGGLE, toggle => {
            this.events.setLockFisState(toggle.isChecked);
          });
          this.propertyNode.props_side_jiantou.on(Node.EventType.TOUCH_END, e => {
            this.sideBoardHideShow();
          });
          this.propertyNode.props_sidebtn_exit.on(Node.EventType.TOUCH_END, e => {
            this.events.exitRoom();
          });
          this.propertyNode.props_sidebtn_help.on(Node.EventType.TOUCH_END, () => {
            this.openHelp();
          });
        }

        useProps(key, value) {}

        bindUI() {}

        sideBoardHideShow(done) {
          if (this.isTweenIn || !this.isValid) {
            return;
          }

          var widget = this.propertyNode.props_side_board.getComponent(Widget);
          var right = widget.right !== -1 ? -1 : -74;

          if (right === -1) {
            this.propertyNode.props_side_jiantou.setScale(1, 1);
          } else {
            this.propertyNode.props_side_jiantou.setScale(-1, 1);
          }

          this.isTweenIn = true;
          tween(widget).to(0.5, {
            right
          }).call(() => {
            this.isTweenIn = false;
            done && done();
          }).start();
        }

        initSideBoard() {
          this.scheduleOnce(() => {
            this.sideBoardHideShow(() => {
              this.scheduleOnce(() => {
                this.sideBoardHideShow();
              }, 0.5);
            });
          }, 0.1);
        }

        hideSideBoard() {
          this.propertyNode.props_side_board.getComponent(Widget).right = -74;
        }

        setBtnLocaltion(scaleRatio) {}

        setScale(scale) {}

        update(deltaTime) {
          this.events.update(deltaTime);
        }

        openHelp() {
          new (_crd && HelpViewModel === void 0 ? (_reportPossibleCrUseOfHelpViewModel({
            error: Error()
          }), HelpViewModel) : HelpViewModel)().mountView((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).HELP).source).appendTo(this.node.parent, {
            effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
              error: Error()
            }), EffectType) : EffectType).EFFECT1
          }).connect();
        }

        onDestroy() {
          this.events.onDestroy();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0b664619700b6c95d40ae31b1e07a631c6301564.js.map