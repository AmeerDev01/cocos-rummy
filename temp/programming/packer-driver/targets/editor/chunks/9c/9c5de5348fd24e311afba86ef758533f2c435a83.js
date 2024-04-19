System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Sprite, BaseComponent, getNodeByNameDeep, omitStr, global, _dec, _class, _crd, ccclass, property, BlessedWealthy_jackPot;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJackPotUserType(extras) {
    _reporterNs.report("JackPotUserType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfomitStr(extras) {
    _reporterNs.report("omitStr", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      getNodeByNameDeep = _unresolved_3.getNodeByNameDeep;
      omitStr = _unresolved_3.omitStr;
    }, function (_unresolved_4) {
      global = _unresolved_4.global;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9819aQKthhNlLgXexB07NTD", "BlessedWealthy_jackPot", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'instantiate', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BlessedWealthy_jackPot", BlessedWealthy_jackPot = (_dec = ccclass('BlessedWealthy_jackPot'), _dec(_class = class BlessedWealthy_jackPot extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_content: new Node(),
            props_item: new Node() // props_gold_label:new Node(),
            // props_head: new Node(),
            // props_user_name:new Node(),

          };
          this.props = {
            jackPotUserArr: []
          };
          this.events = {};
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === "jackPotUserArr") {
            console.log("jackPotUserArr", value.cur);

            if (value.cur) {
              this.propertyNode.props_content.removeAllChildren();
              value.cur.forEach((item, index) => {
                let userItem = instantiate(this.propertyNode.props_item);
                (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                  error: Error()
                }), global) : global).loadHeadSprite(item.avatarIndex, (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                  error: Error()
                }), getNodeByNameDeep) : getNodeByNameDeep)("head", userItem).getComponent(Sprite)); //加载头像

                (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                  error: Error()
                }), getNodeByNameDeep) : getNodeByNameDeep)("gold_label", userItem).getComponent(Label).string = item.winningAmount.formatAmountWithCommas();
                (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                  error: Error()
                }), getNodeByNameDeep) : getNodeByNameDeep)("user_name", userItem).getComponent(Label).string = (_crd && omitStr === void 0 ? (_reportPossibleCrUseOfomitStr({
                  error: Error()
                }), omitStr) : omitStr)(item.nickName + "", 20);
                this.propertyNode.props_content.addChild(userItem);
              });
            }
          }
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9c5de5348fd24e311afba86ef758533f2c435a83.js.map