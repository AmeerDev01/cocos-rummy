System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Node, sys, tween, UITransform, Vec3, BaseComponent, config, getPackageName, getNodePositionInCanvas, _dec, _class, _crd, ccclass, property, Hall_AppDownLoadGuide;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetPackageName(extras) {
    _reporterNs.report("getPackageName", "../../common/bridge", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodePositionInCanvas(extras) {
    _reporterNs.report("getNodePositionInCanvas", "../../utils/tool", _context.meta, extras);
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
      Node = _cc.Node;
      sys = _cc.sys;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      config = _unresolved_3.config;
    }, function (_unresolved_4) {
      getPackageName = _unresolved_4.getPackageName;
    }, function (_unresolved_5) {
      getNodePositionInCanvas = _unresolved_5.getNodePositionInCanvas;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "134b6wVJxRJ5LRuxxYcUjU3", "Hall_AppDownLoadGuide", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Node', 'sys', 'tween', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_AppDownLoadGuide", Hall_AppDownLoadGuide = (_dec = ccclass('Hall_AppDownLoadGuide'), _dec(_class = class Hall_AppDownLoadGuide extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_blockBg: new Node(),
            props_spr_guide_bg: new Node(),
            props_downLoad_btu: new Button(),
            props_btn_off: new Button(),
            props_btn_download: new Button()
          };
          this.props = {};
          this.events = {
            preGoToDownLoad: () => ""
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_off.node.on(Node.EventType.TOUCH_END, () => {
            this.downLoadPanelTroggle(false);
          });
          this.propertyNode.props_btn_download.node.on(Node.EventType.TOUCH_END, () => {
            this.gotoDownload();
          });
          this.propertyNode.props_downLoad_btu.node.on(Node.EventType.TOUCH_END, () => {
            this.downLoadPanelTroggle(true);
          });
        }

        useProps(key, value) {}

        bindUI() {// const isGuide = (sys.os === sys.OS.ANDROID && getPackageName() === 'web') || (sys.os === sys.OS.IOS && !window.navigator['standalone']) || sys.os === sys.OS.OSX || sys.os === sys.OS.WINDOWS
          // this.propertyNode.props_downLoad_btu.node.active = isGuide
          // this.propertyNode.props_blockBg.active = isGuide
        }

        downLoadPanelTroggle(isShow) {
          if (!isShow) {
            var targetNodePosition = (_crd && getNodePositionInCanvas === void 0 ? (_reportPossibleCrUseOfgetNodePositionInCanvas({
              error: Error()
            }), getNodePositionInCanvas) : getNodePositionInCanvas)(this.propertyNode.props_downLoad_btu.node);
            var {
              x,
              y,
              z
            } = this.propertyNode.props_spr_guide_bg.position;
            this.downLoadBtuTroggle(true);
            tween(this.propertyNode.props_spr_guide_bg).to(0.2, {
              position: targetNodePosition,
              scale: new Vec3(0, 0, 0)
            }).call(() => {
              this.propertyNode.props_blockBg.active = false;
            }).start();
          } else {
            this.downLoadBtuTroggle(false);
            this.propertyNode.props_blockBg.active = true;
            tween(this.propertyNode.props_spr_guide_bg).to(0.2, {
              position: new Vec3(0, 0, 0),
              scale: new Vec3(1, 1, 1)
            }).start();
          }
        }

        downLoadBtuTroggle(isShow) {
          var {
            x,
            y,
            z
          } = this.propertyNode.props_downLoad_btu.node.position;

          if (isShow) {
            tween(this.propertyNode.props_downLoad_btu.node).to(0.3, {
              position: new Vec3(x + this.propertyNode.props_downLoad_btu.node.getComponent(UITransform).width, y, z)
            }).start();
          } else {
            tween(this.propertyNode.props_downLoad_btu.node).to(0.3, {
              position: new Vec3(x - this.propertyNode.props_downLoad_btu.node.getComponent(UITransform).width, y, z)
            }).start();
          }
        }

        gotoDownload() {
          var openUrl = this.events.preGoToDownLoad();
          sys.openURL(openUrl || (sys.os === sys.OS.IOS ? (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).appleAppDumpUrl : (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).appDumpUrl + "?pkgId=" + (_crd && getPackageName === void 0 ? (_reportPossibleCrUseOfgetPackageName({
            error: Error()
          }), getPackageName) : getPackageName)()));
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=14e1b05b531d9ca8b5e63f6e79a755b02789715c.js.map