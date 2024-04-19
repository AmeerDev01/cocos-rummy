System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Node, Sprite, _decorator, log, BaseComponent, global, Throttler, ApiUrl, omitStr, _dec, _class, _crd, ccclass, property, Hall_ShareSure;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThrottler(extras) {
    _reporterNs.report("Throttler", "../../utils/Throttler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApiUrl(extras) {
    _reporterNs.report("ApiUrl", "../apiUrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfomitStr(extras) {
    _reporterNs.report("omitStr", "../../utils/tool", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      _decorator = _cc._decorator;
      log = _cc.log;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      global = _unresolved_3.global;
    }, function (_unresolved_4) {
      Throttler = _unresolved_4.default;
    }, function (_unresolved_5) {
      ApiUrl = _unresolved_5.ApiUrl;
    }, function (_unresolved_6) {
      omitStr = _unresolved_6.omitStr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "920fdXwbEJCirkkAbkv+w26", "Hall_ShareSure", undefined);

      __checkObsolete__(['Label', 'Node', 'Sprite', '_decorator', 'log', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_ShareSure", Hall_ShareSure = (_dec = ccclass('Hall_ShareSure'), _dec(_class = class Hall_ShareSure extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_btn_set_batal: new Node(),
            props_btn_tentu: new Node(),
            props_Label_pemain: new Label(),
            props_Label_id: new Label(),
            props_spr_head: new Sprite()
          };
          this.props = {
            avatarIndex: -1,
            memberId: '',
            nickName: '',
            actingId: ''
          };
          this.events = {
            batalActing: actingId => {},
            close: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_set_batal.on(Node.EventType.TOUCH_END, () => {
            this.events.close();
          });
          this.propertyNode.props_btn_tentu.on(Node.EventType.TOUCH_END, () => {
            (_crd && Throttler === void 0 ? (_reportPossibleCrUseOfThrottler({
              error: Error()
            }), Throttler) : Throttler).isDebouncerAsync((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
              error: Error()
            }), ApiUrl) : ApiUrl).RECOMMEND_BIND, 500, true, () => {}).then(isPass => {
              this.events.batalActing(this.props.actingId);
            });
          });
        }

        bindUI() {}

        useProps(key, value) {
          log("usr === ", key, value);

          if (key === 'avatarIndex') {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).loadHeadSprite(value.cur, this.propertyNode.props_spr_head);
          } else if (key === 'memberId') {
            this.propertyNode.props_Label_id.string = value.cur;
          } else if (key === 'nickName') {
            this.propertyNode.props_Label_pemain.string = (_crd && omitStr === void 0 ? (_reportPossibleCrUseOfomitStr({
              error: Error()
            }), omitStr) : omitStr)(value.cur, 14);
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=472bc1dc9fd4b0ed4835b62cbbbbf522706b4ca5.js.map