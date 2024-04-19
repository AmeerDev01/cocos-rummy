System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, ProgressBar, Node, global, lang, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, phoenix_Loader;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../../../hall", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      ProgressBar = _cc.ProgressBar;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      global = _unresolved_2.global;
      lang = _unresolved_2.lang;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1114fq/p6dBWquaitbgqW1h", "phoenix_Loader", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'ProgressBar', 'Node', 'log']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("phoenix_Loader", phoenix_Loader = (_dec = ccclass('phoenix_Loader'), _dec2 = property(Label), _dec(_class = (_class2 = class phoenix_Loader extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "loaderTxt", _descriptor, this);

          this.loaderState = true;
        }

        onLoad() {
          this.getCloseBtn().active = false;
        }

        getCloseBtn() {
          return this.node.getChildByName('props_btn_return');
        }

        start() {
          this.getCloseBtn().on(Node.EventType.TOUCH_END, () => {
            this.loaderState = false;
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).closeSubGame();
          });
        }

        getLoaderState() {
          return this.loaderState;
        }
        /**
         *
         * @param fileName 资源名称
         * @param total 全部文件数量
         * @param remain 剩余的数量
         */


        setLoadingProgress(fileName, total, remain) {
          if (!this.node || !this.node.isValid) return;
          var progressBar = this.node.getChildByName('props_progressBar').getComponent(ProgressBar);
          var str = remain / total;
          progressBar.progress = str;
          this.loaderTxt.string = ((1 - remain / total) * 100).toFixed(0) + "%"; //this.node.getChildByName('props_btn_return').active = remain !== 0;

          if (str <= 0) {
            this.loaderTxt.string = (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
              error: Error()
            }), lang) : lang).write(k => k.WebSocketModule.GameInit, {}, {
              placeStr: "Game init..."
            });
          }
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loaderTxt", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fe557f1cdc31dc5a069e809108d4525e3f0ad38a.js.map