System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, bezier, Color, Component, Graphics, instantiate, misc, Node, Sprite, Vec3, _dec, _class, _crd, ccclass, property, Fish_senceStartUp1;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      bezier = _cc.bezier;
      Color = _cc.Color;
      Component = _cc.Component;
      Graphics = _cc.Graphics;
      instantiate = _cc.instantiate;
      misc = _cc.misc;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a5c58xsc0lLfL18RABWPbH5", "Fish_senceStartUp1", undefined);

      __checkObsolete__(['_decorator', 'bezier', 'Color', 'Component', 'EditBox', 'EventTouch', 'Graphics', 'instantiate', 'Label', 'misc', 'Node', 'Sprite', 'SpriteAtlas', 'tween', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Fish_senceStartUp1", Fish_senceStartUp1 = (_dec = ccclass('Fish_senceStartUp1'), _dec(_class = class Fish_senceStartUp1 extends Component {
        constructor(...args) {
          super(...args);
          this.midNode = void 0;
          this.midNode1 = void 0;
          this.grap = void 0;
          this.startPos = void 0;
          this.nextPos = void 0;
          this.endPos = void 0;
          this.height = 100;
          this.startPosA = new Vec3(-800, 0);
          this.startPosB = new Vec3(-800, 0);
        }

        start() {
          // this.loadPlist();
          // this.startPos = new Vec3(-400, 600);
          // this.initCurve(this.startPos);
          // let n = new Node();
          // n.addComponent(Label).string = "123123";
          // this.node.addChild(n);
          // this.draw(p1.position, mid);
          // this.draw(p2.position, mid);
          this.listenerEvent();
          this.calLiangdian();
        }

        listenerEvent() {
          const p2 = this.node.getChildByName('p2');
          p2.on(Node.EventType.TOUCH_MOVE, e => {
            p2.setWorldPosition(new Vec3(e.getUILocation().x, e.getUILocation().y));
            this.calLiangdian();
          });
        }

        calLiangdian() {
          const p1 = this.node.getChildByName('p1');
          const p2 = this.node.getChildByName('p2');
          this.midNode && this.midNode.destroy();
          this.midNode1 && this.midNode1.destroy(); // 将世界坐标转换为节点坐标

          const c = this.getMidPoint(p1.getWorldPosition(), p2.getWorldPosition());
          this.midNode = this.addNode(c);
          let mid = this.getMidVerticalPoint(p1.getWorldPosition(), p2.getWorldPosition(), 40);
          this.midNode1 = this.addNode(mid);
          this.node.getChildByName("ddd").getComponent(Graphics).clear();
          this.draw(p1.position, p2.position);
          this.draw(mid, c);
        }

        ddd(gg, t) {
          var progressX = function (start, end, current, t) {
            //@ts-ignore
            current = bezier(start, mixX, maxX, end, t);
            return current;
          };

          var progressY = function (start, end, current, t) {
            //@ts-ignore
            current = bezier(start, mixY, maxY, end, t);
            return current;
          };

          this.nextPos = new Vec3(progressX(this.startPos.x, this.endPos.x, undefined, t), progressY(this.startPos.y, this.endPos.y, undefined, t));
          gg.moveTo(this.startPos.x, this.startPos.y);
          gg.lineTo(this.nextPos.x, this.nextPos.y);
          gg.stroke();
        }

        addNode(v) {
          const p4 = instantiate(this.node.getChildByName('p1'));
          this.node.addChild(p4);
          p4.getComponent(Sprite).color = Color.YELLOW;
          p4.setPosition(v);
          return p4;
        }

        d() {
          let x = 0;
          let y = 1;
          let z = 2;
          return [x, y, z];
        }

        getMidPoint(fromPos, toPos) {
          var centerX = fromPos.x + (toPos.x - fromPos.x) / 2;
          var centerY = fromPos.y + (toPos.y - fromPos.y) / 2; //取离中点指定距离点

          return new Vec3(centerX, centerY);
        }

        getMidVerticalPoint(fromPos, toPos, offsetAngin = 0) {
          //得到中点C的坐标值
          let midPoint = this.getMidPoint(fromPos, toPos); // 计算∠BAF的两个点的角度

          const bafAngle = this.calAngle(fromPos, toPos); // ∠BAF=∠ECA的角度，那么90-∠BAF就是∠DCE的角度

          let angle = 90 - bafAngle; // 把偏移的角度换算成弧度

          let radian = misc.degreesToRadians(offsetAngin); // 计算出AB的中点AC的距离

          const zhongdian = toPos.clone().subtract(fromPos).length() / 2; // 三角函数公式计算出CD的距离，tan = 对边/邻边，那么邻边知道了，tanx角度也知道了，就可以计算出CD的值

          const cd = zhongdian * Math.tan(radian); // 把∠DCE的角度换算为弧度

          radian = misc.degreesToRadians(angle); // 根据三角函数公式 sin = 对边/斜边，那么斜边知道了，sinx角度值也知道就是angle，就可以计算出DG的值

          const dg = cd * Math.sin(radian);
          let y = midPoint.y + dg; // 根据三角函数公式 cos = 邻边/斜边，那么斜边知道了，cosx角度值也知道就是angle，就可以计算出GC的值

          const gc = cd * Math.cos(radian);
          const x = midPoint.x - gc;
          let midDisPoint = new Vec3(x, y);
          return midDisPoint;
        }

        calAngle(fromPos, toPos) {
          // const angle = Math.atan2(toPos.y - fromPos.y, toPos.x - fromPos.x) * 180 / Math.PI
          const dy = toPos.y - fromPos.y;
          const dx = toPos.x - fromPos.x;
          const angle = Math.atan(dy / dx) * 180 / Math.PI;
          console.log(angle);
          return angle;
        }

        rotatinPoint(x, y, degree) {
          let radian = degree / 180 * Math.PI;
          return [x * Math.cos(radian) + y * Math.sin(radian), y * Math.cos(radian) - x * Math.sin(radian)]; // return [x * Math.cos(radian) - y * Math.sin(radian), x * Math.sin(radian) + y * Math.cos(radian)]
        }

        testDraw11() {
          // const newNode = instantiate(this.node.getChildByName("ddd"));
          // this.node.addChild(newNode);
          let gg = this.node.getChildByName("ddd").getComponent(Graphics); // 设置线条宽度和颜色

          gg.lineWidth = 5;
          gg.strokeColor = Color.WHITE;
          let drawdt = 0;
          let speed = 2 * Math.PI * 0.01;
          gg.moveTo(this.startPosA.x, this.startPosA.y);
          this.startPosA.x++;
          const angin = this.startPosA.x * speed * 180 / Math.PI;
          const sin = Math.sin(this.startPosA.x * speed); // console.log(angin);

          this.startPosA.y = this.height + sin * 40;
          gg.lineTo(this.startPosA.x, this.startPosA.y);
          gg.stroke();
          gg.moveTo(this.startPosB.x, this.startPosB.y);
          this.startPosB.x++;
          this.startPosB.y = this.height * 2 + Math.cos(this.startPosA.x * speed) * 40;
          gg.lineTo(this.startPosB.x, this.startPosB.y);
          gg.stroke();
          drawdt += 0.1;
        }

        draw(startPos, endPos) {
          let gg = this.node.getChildByName("ddd").getComponent(Graphics); // 设置线条宽度和颜色

          gg.lineWidth = 5;
          gg.strokeColor = Color.WHITE;
          gg.moveTo(startPos.x, startPos.y);
          gg.lineTo(endPos.x, endPos.y);
          gg.stroke();
        }

        update(deltaTime) {// this.testDraw11();
          // this.drawCurve(deltaTime);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=41c5c52988f8cb41001e1aff00f054a578deeec1.js.map