System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EditBox, Node, BaseComponent, InputValidator, _dec, _class, _crd, ccclass, property, Hall_ChangeNickName;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInputValidator(extras) {
    _reporterNs.report("InputValidator", "../../utils/InputValidator", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      EditBox = _cc.EditBox;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      InputValidator = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "422225kLsdGgJSVYOAchP3n", "Hall_ChangeNickName", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EditBox', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_ChangeNickName", Hall_ChangeNickName = (_dec = ccclass('Hall_ChangeNickName'), _dec(_class = class Hall_ChangeNickName extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_EditBox_changeName: new EditBox(),

            /**取消 */
            props_btn_set_batal: new Node(),

            /**确认 */
            props_btn_tentu: new Node()
          };
          this.props = {
            nickName: ""
          };
          this.events = {
            onCloseHandler: () => {},
            onModifyHandler: newNickName => new Promise(resolve => resolve(false))
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_set_batal.on(Node.EventType.TOUCH_END, () => {
            this.events.onCloseHandler();
          });
          this.propertyNode.props_btn_tentu.on(Node.EventType.TOUCH_END, () => {
            new (_crd && InputValidator === void 0 ? (_reportPossibleCrUseOfInputValidator({
              error: Error()
            }), InputValidator) : InputValidator)().begin().isChartLength([2, 16], this.propertyNode.props_EditBox_changeName.string).done(() => {
              this.events.onModifyHandler(this.propertyNode.props_EditBox_changeName.string).then(() => {
                this.events.onCloseHandler();
              });
            });
          });
        }

        useProps(key, value) {
          if (key === "nickName") this.propertyNode.props_EditBox_changeName.string = value.cur;
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5090f50cdeb0ffc61397cfed510762b704594663.js.map