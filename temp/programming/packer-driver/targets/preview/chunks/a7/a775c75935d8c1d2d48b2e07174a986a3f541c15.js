System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, tween, Vec3, Sprite, BaseComponent, sourceManageSeletor, SpriteFramePathDefine, StepNumber, changeProfit, _dec, _class, _crd, ccclass, property, Starlight_WinShowView;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteFramePathDefine(extras) {
    _reporterNs.report("SpriteFramePathDefine", "../sourceDefine/spriteDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStepNumber(extras) {
    _reporterNs.report("StepNumber", "../../../utils/StepNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeProfit(extras) {
    _reporterNs.report("changeProfit", "../store/actions/game", _context.meta, extras);
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
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      sourceManageSeletor = _unresolved_3.sourceManageSeletor;
    }, function (_unresolved_4) {
      SpriteFramePathDefine = _unresolved_4.SpriteFramePathDefine;
    }, function (_unresolved_5) {
      StepNumber = _unresolved_5.default;
    }, function (_unresolved_6) {
      changeProfit = _unresolved_6.changeProfit;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1ba95nodzZOmInPQj0WMvlF", "Starlight_WinShowView", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Component', 'Label', 'Layout', 'Node', 'ScrollView', 'tween', 'Vec3', 'log', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Starlight_WinShowView", Starlight_WinShowView = (_dec = ccclass('Starlight_WinShowView'), _dec(_class = class Starlight_WinShowView extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.arrayOfIcons = [];
          this.total = 0;
          this.propertyNode = {
            props_item: new Node(),
            props_content: new Node(),
            props_spr_win_box: new Node(),
            props_label_rate: new Node(),
            props_spr_reminds: new Node()
          };
          this.props = {
            winningData: [],
            multipleTotal: 0,
            gameFreeGametotalMultiplier: 0,
            viewGameType: 0,
            profit: 0
          };
          this.events = {};
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === "winningData" && value.cur) {
            var length = this.propertyNode.props_content.children.length;

            if (value.cur.count >= 0) {
              var smallIconIcons = [(_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                error: Error()
              }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_1, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                error: Error()
              }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_2, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                error: Error()
              }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_3, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                error: Error()
              }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_4, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                error: Error()
              }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_5, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                error: Error()
              }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_6, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                error: Error()
              }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_7, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                error: Error()
              }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_8, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                error: Error()
              }), SpriteFramePathDefine) : SpriteFramePathDefine).icon_9];
              var node = instantiate(this.propertyNode.props_item);
              node.active = true;
              var {
                x,
                y
              } = node.getPosition();
              node.getChildByName('props_label_num').getComponent(Label).string = value.cur.count + '';

              if (smallIconIcons[value.cur.itemId - 1]) {
                node.getChildByName('props_spr_icon').getComponent(Sprite).spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFile(smallIconIcons[value.cur.itemId - 1]).source;
              } else {
                console.log('winshow NULL', JSON.stringify(this.props.winningData));
              }

              node.getChildByName('props_label_glod').getComponent(Label).string = value.cur.amount.formatAmountWithCommas();
              this.total += value.cur.amount;

              if (this.props.viewGameType != 1) {
                this.dispatch((_crd && changeProfit === void 0 ? (_reportPossibleCrUseOfchangeProfit({
                  error: Error()
                }), changeProfit) : changeProfit)(this.total));
              } else {
                this.dispatch((_crd && changeProfit === void 0 ? (_reportPossibleCrUseOfchangeProfit({
                  error: Error()
                }), changeProfit) : changeProfit)(this.props.profit + value.cur.amount));
              }

              this.propertyNode.props_content.addChild(node);
              tween(node).to(0.4, {
                position: new Vec3(x, length * 34 + 17, 1)
              }, {
                easing: 'cubicInOut'
              }) // 使用 cubicInOut 缓动到新位置
              .call(() => {
                if (!this.propertyNode) return;
                this.propertyNode.props_spr_win_box.active = true;
                this.propertyNode.props_spr_reminds.active = false;
                var str = this.propertyNode.props_spr_win_box.getChildByName('props_label_gold').getComponent(Label).string;

                if (str) {
                  str = str.replace(/,/g, "");
                } else {
                  str = '0';
                }

                this.propertyNode.props_spr_win_box && new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
                  error: Error()
                }), StepNumber) : StepNumber)(Number(str), this.total, num => {
                  this.propertyNode && (this.propertyNode.props_spr_win_box.getChildByName('props_label_gold').getComponent(Label).string = (+num.toFixed(0)).formatAmountWithCommas());
                }).start();
              }) // 添加一个简短的回弹动作
              // .by(0.1, { position: new Vec3(0, -10, 0) }, { easing: 'sineOut' }) // 先向下移动一点
              // .by(0.1, { position: new Vec3(0, 10, 0) }, { easing: 'sineIn' }) // 再回到原来的位置
              .start();
            } else {
              if (length > 0) {
                if (!this.propertyNode) return;
                this.propertyNode.props_content.children.forEach(item => {
                  var {
                    x,
                    y
                  } = item.getPosition();
                  tween(item).to(0.2, {
                    position: new Vec3(x, -188, 1)
                  }) // 使用 to 缓动到新位置
                  .call(() => {
                    item.destroy();
                  }).start();
                });
                this.total = 0;
                this.propertyNode.props_spr_win_box.active = false;
                this.propertyNode.props_spr_reminds.active = true;
                this.propertyNode.props_spr_win_box.getChildByName('props_label_gold').getComponent(Label).string = '0';
              }
            }
          }

          if (key === 'multipleTotal' || key === "gameFreeGametotalMultiplier") {
            if (this.props.viewGameType == 1) {
              if (this.total !== 0 && this.props.gameFreeGametotalMultiplier !== 0) {
                this.calcMultiple(this.props.gameFreeGametotalMultiplier);
              }
            } else {
              if (this.total !== 0 && this.props.multipleTotal !== 0) {
                this.calcMultiple(this.props.multipleTotal);
              }
            }
          }
        }

        calcMultiple(rate) {
          // 倍数相乘
          if (!this.propertyNode) return;
          var str = this.propertyNode.props_spr_win_box.getChildByName('props_label_gold').getComponent(Label).string;

          if (str) {
            str = str.replace(/,/g, "");
          } else {
            str = '0';
          }

          var props_label_gold = this.propertyNode.props_spr_win_box.getChildByName('props_label_gold');
          this.propertyNode.props_label_rate.active = true;
          this.propertyNode.props_label_rate.getComponent(Label).string = 'x' + rate;
          tween(props_label_gold).to(0.5, {
            scale: new Vec3(1.2, 1.2)
          }).call(() => {
            this.propertyNode && tween(this.propertyNode.props_label_rate).to(0.5, {
              position: new Vec3(0, 0, 1),
              scale: new Vec3(0, 0)
            }).call(() => {
              this.propertyNode.props_spr_win_box && new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
                error: Error()
              }), StepNumber) : StepNumber)(Number(str), this.total * rate, num => {
                this.propertyNode && (this.propertyNode.props_spr_win_box.getChildByName('props_label_gold').getComponent(Label).string = (+num.toFixed(0)).formatAmountWithCommas());
              }, () => {
                this.scheduleOnce(() => {
                  this.propertyNode && this.initTotalPanl();
                }, 0.5);
              }).start();
            }).start();
          }).start();
        }

        initTotalPanl() {
          this.propertyNode.props_label_rate.active = false;
          this.propertyNode.props_label_rate.setPosition(new Vec3(50, 4, 1));
          this.propertyNode.props_label_rate.setScale(new Vec3(1, 1));
          this.propertyNode.props_spr_win_box.getChildByName('props_label_gold').setPosition(new Vec3(0, 2));
          this.propertyNode.props_spr_win_box.getChildByName('props_label_gold').setScale(new Vec3(1, 1));
        }

        startFalling() {}

        clearTheDrop() {}

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a775c75935d8c1d2d48b2e07174a986a3f541c15.js.map