System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Sprite, BaseComponent, formatNumber, getGoldShorten, getNodeByNameDeep, omitStr, config, global, _dec, _class, _crd, ccclass, property, Yxx_WinPanel;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfformatNumber(extras) {
    _reporterNs.report("formatNumber", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetGoldShorten(extras) {
    _reporterNs.report("getGoldShorten", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfomitStr(extras) {
    _reporterNs.report("omitStr", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserInfo(extras) {
    _reporterNs.report("UserInfo", "../type", _context.meta, extras);
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
      Label = _cc.Label;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      formatNumber = _unresolved_3.formatNumber;
      getGoldShorten = _unresolved_3.getGoldShorten;
      getNodeByNameDeep = _unresolved_3.getNodeByNameDeep;
      omitStr = _unresolved_3.omitStr;
    }, function (_unresolved_4) {
      config = _unresolved_4.default;
    }, function (_unresolved_5) {
      global = _unresolved_5.global;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "62f99BLgaFPcJhWV42VolQs", "Yxx_WinPanel", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Yxx_WinPanel", Yxx_WinPanel = (_dec = ccclass('Yxx_WinPanel'), _dec(_class = class Yxx_WinPanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_win_label: new Label()
          };
          this.props = {
            userInfos: null,
            balance: 0
          };
          this.events = {};
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {}

        updateUserInfo(userInfo, index) {
          index++;
          var userNode = this.node.getChildByName("spr_user_bg" + index);
          userNode.active = true;
          (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("Label_user_name", userNode).getComponent(Label).string = (_crd && omitStr === void 0 ? (_reportPossibleCrUseOfomitStr({
            error: Error()
          }), omitStr) : omitStr)(userInfo.name, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).gameOption.nicknameOmitLength);
          (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("Label_user_gold", userNode).getComponent(Label).string = "+" + (_crd && getGoldShorten === void 0 ? (_reportPossibleCrUseOfgetGoldShorten({
            error: Error()
          }), getGoldShorten) : getGoldShorten)(userInfo.gold);
          (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
            error: Error()
          }), global) : global).loadHeadSprite(userInfo.icon, (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("spr_user_head", userNode).getComponent(Sprite));
        }

        useProps(key, value) {
          if (key === 'userInfos') {
            this.props.userInfos.forEach((v, index) => {
              this.updateUserInfo(v, index);
            });
          } else if (key === 'balance') {
            this.propertyNode.props_win_label.string = "+" + (_crd && formatNumber === void 0 ? (_reportPossibleCrUseOfformatNumber({
              error: Error()
            }), formatNumber) : formatNumber)(value.cur);
          }
        }

        bindUI() {
          this.node.children.forEach(v => {
            if (v.name.startsWith("spr_user_bg")) {
              v.active = false;
            }
          });
        }

        onDestroy() {
          this.props.userInfos = null;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f93bc8a2280084bb211301ceb4585f44194cec04.js.map