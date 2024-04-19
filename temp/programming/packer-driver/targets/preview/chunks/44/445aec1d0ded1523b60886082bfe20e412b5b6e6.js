System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, Graphics, Label, Node, UITransform, CaptchaGenerator, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
      Graphics = _cc.Graphics;
      Label = _cc.Label;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a7819aA0VdEx4Z9mqJNMM5x", "CaptchaGenerator", undefined);

      __checkObsolete__(['Color', 'Graphics', 'Label', 'Node', 'UITransform']);

      _export("default", CaptchaGenerator = class CaptchaGenerator {
        constructor(node, chartLength) {
          this.node = void 0;
          this.chartLength = void 0;
          this.displayNode = void 0;
          this.displayNoiseNode = void 0;
          this.captcha = void 0;
          this.node = node;
          this.chartLength = chartLength;
          this.generate();
        }

        generate() {
          this.generateCaptcha(this.chartLength);
          this.displayCaptcha();
          this.addNoise();
        }
        /**生成指定长度的随机字符验证码 */


        generateCaptcha(length) {
          var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          var captcha = "";

          for (var i = 0; i < length; i++) {
            var randomIndex = Math.floor(Math.random() * charset.length);
            captcha += charset.charAt(randomIndex);
          }

          this.captcha = captcha;
        }
        /**将验证码显示在精灵节点上 */


        displayCaptcha() {
          // 此处假设你有一个字体文件来渲染文本，你可以在精灵上创建一个Label组件
          this.displayNode && this.displayNode.destroy();
          this.displayNoiseNode && this.displayNoiseNode.destroy();
          this.displayNode = new Node();
          var labelComponent = this.displayNode.addComponent(Label);
          labelComponent.string = this.captcha;
          labelComponent.color = new Color(0, 0, 0, 255);
          labelComponent.fontSize = 26 + parseInt(Math.random() * 6 + ''); // 设置字体大小

          labelComponent.fontFamily = "Arial"; // 设置字体类型

          labelComponent.horizontalAlign = Label.HorizontalAlign.CENTER; // 设置文本水平对齐方式
          // 将Label节点作为子节点添加到验证码精灵节点上

          this.node.addChild(this.displayNode);
        }
        /**添加噪点到验证码图片 */


        addNoise() {
          // 获取精灵的宽度和高度
          this.displayNoiseNode = new Node();
          var ui = this.node.getComponent(UITransform);
          var transform = this.displayNoiseNode.addComponent(UITransform);
          transform.width = ui.width;
          transform.height = ui.height;
          var ctx = this.displayNoiseNode.addComponent(Graphics); // 添加噪点

          var noiseAmount = 70; // 调整噪点数量

          for (var i = 0; i < noiseAmount; i++) {
            // 随机生成噪点的坐标和颜色
            var x = Math.floor(Math.random() * ui.width / 2 * (Math.random() > 0.5 ? 1 : -1));
            var y = Math.floor(Math.random() * ui.height / 2 * (Math.random() > 0.5 ? 1 : -1));
            var color = new Color(Math.random() * 255, Math.random() * 255, Math.random() * 255, 255); // 绘制一个小的随机颜色点

            ctx.fillColor = color; //Color.fromHEX(color, '')//hexToColor(color);

            ctx.fillRect(x, y, Math.random() > 0.5 ? 2 : 1, Math.random() > 0.5 ? 2 : 1);
          }

          this.node.addChild(this.displayNoiseNode);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=445aec1d0ded1523b60886082bfe20e412b5b6e6.js.map