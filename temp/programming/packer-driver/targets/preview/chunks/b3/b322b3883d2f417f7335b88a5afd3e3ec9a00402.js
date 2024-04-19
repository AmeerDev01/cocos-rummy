System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, PageView, Node, tween, UIOpacity, Vec3, BaseComponent, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Egypt_RulesPanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "./BaseComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      PageView = _cc.PageView;
      Node = _cc.Node;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e4fa7YNFbJIu7uwmaeN8IN+", "Egypt_RulesPanel", undefined);

      __checkObsolete__(['_decorator', 'PageView', 'Node', 'tween', 'UIOpacity', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Egypt_RulesPanel", Egypt_RulesPanel = (_dec = ccclass('Egypt_RulesPanel'), _dec2 = property(Node), _dec3 = property(PageView), _dec(_class = (_class2 = class Egypt_RulesPanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "closeButton", _descriptor, this);

          // @property(Node)
          // mainPanel: Node = null
          // @property(Node)
          // contentWrap: Node = null
          _initializerDefineProperty(this, "pageView", _descriptor2, this);

          this.showIndex = 0;
        }

        start() {}

        bindEvent() {
          this.closeButton.on(Node.EventType.TOUCH_END, () => {
            this.hidePanel();
          });

          this._nodes['btnLeft'].on(Node.EventType.TOUCH_END, () => {
            var index = this.pageView.getCurrentPageIndex();

            if (index > 0) {
              this.pageView.scrollToPage(index - 1, 0.5); // 切换到上一页，可设置切换动画时间
            }
          });

          this._nodes['btnRight'].on(Node.EventType.TOUCH_END, () => {
            var index = this.pageView.getCurrentPageIndex();

            if (index < this.pageView.getPages().length - 1) {
              this.pageView.scrollToPage(index + 1, 0.5); // 切换到下一页，可设置切换动画时间
            }
          }); // let con_x: number = 0
          // this.showIndexMark()
          // let width = this.contentWrap.getComponent(UITransform).width
          // this.contentWrap.on(Node.EventType.TOUCH_START, (e) => {
          // 	con_x = e.getLocation().x
          // })
          // this.contentWrap.on(Node.EventType.TOUCH_MOVE, () => { })
          // this.contentWrap.on(Node.EventType.TOUCH_END, (e) => {
          // 	const t = e.getLocation().x - con_x
          // 	if (t < 0) {
          // 		//向左滑动
          // 		if (this.contentWrap.children[0].position.x <= -(this.contentWrap.children.length - 1) * width) {
          // 			return
          // 		}
          // 		this.contentWrap.children.forEach((child, index) => {
          // 			tween(child).to(0.1, { position: new Vec3(child.position.x - width, child.position.y) }).start()
          // 		})
          // 		this.showIndex++
          // 	}
          // 	if (t > 0) {
          // 		//向右滑动
          // 		if (this.contentWrap.children[this.contentWrap.children.length - 1].position.x + 100 >= (this.contentWrap.children.length - 1) * width) {
          // 			return
          // 		}
          // 		this.contentWrap.children.forEach((child, index) => {
          // 			tween(child).to(0.1, { position: new Vec3(child.position.x + width, child.position.y) }).start()
          // 		})
          // 		this.showIndex--
          // 	}
          // 	this.showIndexMark()
          // })

        }

        showIndexMark() {// this.indexMark.children.forEach((item, i) => {
          // 	if (this.showIndex !== i) {
          // 		item.children[0].active = false
          // 	} else {
          // 		item.children[0].active = true
          // 	}
          // })
        }

        bindUI() {
          var uiOpacity = this.node.getComponent(UIOpacity);
          uiOpacity.opacity = 0; // this.mainPanel.setScale(0.8, 0.8)
          // tween(this.mainPanel).to(0.4, { scale: new Vec3(1, 1, 1) }, { easing: "backOut" }).start()

          tween(uiOpacity).to(0.4, {
            opacity: 255
          }).call(() => {}).start();
        }

        hidePanel() {
          var uiOpacity = this.node.getComponent(UIOpacity);
          tween(this.node).to(0.2, {
            scale: new Vec3(0, 0, 0)
          }).start();
          tween(uiOpacity).to(0.2, {
            opacity: 0
          }).call(() => {
            this.node.destroy();
          }).start();
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "closeButton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pageView", [_dec3], {
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
//# sourceMappingURL=b322b3883d2f417f7335b88a5afd3e3ec9a00402.js.map