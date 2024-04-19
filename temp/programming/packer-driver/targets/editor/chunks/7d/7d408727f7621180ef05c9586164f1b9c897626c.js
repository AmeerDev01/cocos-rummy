System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, UITransform, Vec3, BaseComponent, _dec, _class, _crd, ccclass, property, Common_Marquee;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../base/BaseComponent", _context.meta, extras);
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
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ea5abWvL4dMS5Uq675tV4tE", "Common_Marquee", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'RichText', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Common_Marquee", Common_Marquee = (_dec = ccclass('Common_Marquee'), _dec(_class = class Common_Marquee extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.marueeMap = [];
          this.propertyNode = {
            props_Mask_ticker: new Node(),

            /**跑马灯模板 */
            props_template_label_ticker: new Node()
          };
          this.props = {
            addInfoQueue: [],
            speed: 3,
            isInSubGame: false
          };
          this.events = {};
        }

        start() {
          this.schedule(this.move, 0.02);
        }

        initState() {
          return {
            isDone: true
          };
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === "addInfoQueue") {
            if (!value.cur.length) return;

            try {
              const list = [...value.cur];
              this.marueeMap = this.marueeMap.concat(list);
              this.marueeMap.sort((a, b) => b.priority - a.priority);

              if (this.state.isDone) {
                this.setState({
                  isDone: false
                });
                this.run();
              }
            } catch (e) {
              console.error(e);
            }
          }

          if (key === "isInSubGame") {
            if (this.props.isInSubGame) {
              this.node.active = false;
            } else {
              if (this.props.addInfoQueue.length) {
                this.node.active = true;
              }
            }
          }
        }

        run() {
          if (this.marueeMap.length) {
            const fristItem = this.marueeMap[0];

            if (fristItem.count === -1) {//无线循环
            } else if (fristItem.count <= 1) {
              this.marueeMap.shift();
            } else {
              fristItem.count--;
            } //const fristItem = this.marueeMap.shift()


            const itemNode = instantiate(this.propertyNode.props_template_label_ticker); // itemNode.getComponent(Label).string = decodeURI(fristItem.content)
            // const cocosString = decodeURI(fristItem.content).replace(/<span\s+style=['"]color\s*:\s*#([^'"]+)['"]>([^<]+)<\/span>/gi, (match, color, content) => {
            // 	// 返回转换后的格式
            // 	return `<color=#${color}>${content}</color>`;
            // })

            const cocosString = this.convertHtmlToCustomFormat(decodeURI(fristItem.content));
            console.log(decodeURI(fristItem.content), cocosString); // itemNode.getComponent(RichText).string = cocosString

            itemNode.getComponent(Label).string = decodeURI(fristItem.content);
            !this.props.isInSubGame && (itemNode.active = true);
            this.propertyNode.props_Mask_ticker.addChild(itemNode); // itemNode.getComponent(RichText)['_updateRichText']()
            // console.log('width', itemNode.getComponent(UITransform).width)

            itemNode.setPosition(new Vec3(itemNode.position.x * 2, itemNode.position.y, 0));
          } else {
            this.setState({
              isDone: true
            });
          }
        }

        convertHtmlToCustomFormat(inputString) {
          const regex = /<span\s+style=['"]color\s*:\s*rgb\((\d+),\s*(\d+),\s*(\d+)\);['"]>([^<]+)<\/span>/gi;
          const convertedString = inputString.replace(regex, (match, r, g, b, content) => {
            const hexColor = this.rgbToHex(parseInt(r), parseInt(g), parseInt(b));
            return `<color=${hexColor}>${content}</color>`;
          });
          return convertedString;
        } // RGB 转换为十六进制格式的函数


        rgbToHex(r, g, b) {
          const _r = Math.max(0, Math.min(255, r));

          const _g = Math.max(0, Math.min(255, g));

          const _b = Math.max(0, Math.min(255, b));

          const hexR = _r.toString(16).padStart(2, '0');

          const hexG = _g.toString(16).padStart(2, '0');

          const hexB = _b.toString(16).padStart(2, '0');

          return `#${hexR}${hexG}${hexB}`;
        }

        bindUI() {
          this.node.active = false;
          this.useState((key, value) => {
            if (value.cur) {
              this.node.active = false;
            } else {
              !this.props.isInSubGame && (this.node.active = true);
            }
          }, ["isDone"]);
        }

        move() {
          this.propertyNode.props_Mask_ticker.children.forEach(child => {
            child.position = new Vec3(child.position.x - this.props.speed, child.position.y, 0);

            if (child.position.x < -child.getComponent(UITransform).width) {
              child.destroy();
              this.run();
            }
          });
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7d408727f7621180ef05c9586164f1b9c897626c.js.map