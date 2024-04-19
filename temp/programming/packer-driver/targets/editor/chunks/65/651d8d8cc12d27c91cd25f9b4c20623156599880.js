System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Graphics, instantiate, Label, Node, Sprite, Vec3, BaseComponent, getNodeByNameDeep, SpriteFramePathDefine, playBtnClick, sourceManageSelector, GameStatus, _dec, _class, _crd, ccclass, property, BandarQiuQiu_maxHistory;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteFramePathDefine(extras) {
    _reporterNs.report("SpriteFramePathDefine", "../sourceDefine/spriteDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayBtnClick(extras) {
    _reporterNs.report("playBtnClick", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSelector(extras) {
    _reporterNs.report("sourceManageSelector", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHistory(extras) {
    _reporterNs.report("History", "../type", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Graphics = _cc.Graphics;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      getNodeByNameDeep = _unresolved_3.getNodeByNameDeep;
    }, function (_unresolved_4) {
      SpriteFramePathDefine = _unresolved_4.SpriteFramePathDefine;
    }, function (_unresolved_5) {
      playBtnClick = _unresolved_5.playBtnClick;
      sourceManageSelector = _unresolved_5.sourceManageSelector;
    }, function (_unresolved_6) {
      GameStatus = _unresolved_6.GameStatus;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b09c5D07iZG/rkuCFkQDuay", "BandarQiuQiu_maxHistory", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Graphics', 'instantiate', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BandarQiuQiu_maxHistory", BandarQiuQiu_maxHistory = (_dec = ccclass('BandarQiuQiu_maxHistory'), _dec(_class = class BandarQiuQiu_maxHistory extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.line = [];
          this.propertyNode = {
            props_layout_history_item: new Node(),
            props_history_content: new Node(),
            props_line_content: new Graphics(),
            props_history_bg_off: new Node()
          };
          this.props = {
            maxHistory: null,
            gameStatus: null
          };
          this.events = {
            onClosePanel: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_history_bg_off.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.clearTheCacheData();
            this.events.onClosePanel();
          });
        }

        useProps(key, value) {
          if (key === "maxHistory") {
            if (value.cur && value.cur.length > 0) {
              this.createHistory(value.cur);
            }
          }

          if (key === "gameStatus") {
            if (value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).WAIT) {// this.line=[]
            }
          }
        }
        /**创建历史记录 */


        createHistory(maxHistory) {
          this.line = [];
          let startPosition = new Vec3(0, 10);
          this.propertyNode.props_layout_history_item.removeAllChildren();
          maxHistory.reverse().forEach((item, i) => {
            if (i === 0) {
              if (item.win === 1) {
                startPosition = new Vec3(-64, 10);
              } else if (item.win === 2) {
                startPosition = new Vec3(64, 10);
              } else if (item.win === 3) {
                startPosition = new Vec3(0, 10);
              }

              this.line.push(startPosition);
            }

            let nextP;

            if (i != maxHistory.length - 1) {
              nextP = maxHistory[i + 1].win;
            }

            let historyContent = instantiate(this.propertyNode.props_history_content);
            let blue = 4;
            let red = 4;
            let green = 4; // 4代表输 1为蓝方赢  2为红方赢  3为绿方赢

            if (item.win === 1) {
              blue = 1;
            } else if (item.win === 2) {
              red = 2;
            } else if (item.win === 3) {
              green = 3;
            }

            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("props_spr_icon_blue", historyContent).getComponent(Sprite).spriteFrame = this.getSpriteFrame(blue);
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("label_blue_cardNum", historyContent).getComponent(Label).string = item.blueNum + "";
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("props_spr_icon_red", historyContent).getComponent(Sprite).spriteFrame = this.getSpriteFrame(red);
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("label_red_cardNum", historyContent).getComponent(Label).string = item.redNum + "";
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("props_spr_icon_green", historyContent).active = green === 3;
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("props_spr_blue_cardType", historyContent).getComponent(Sprite).spriteFrame = item.blueType > 1 ? this.getSpecialCard(item.blueType) : this.getSpecialCard(2);
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("props_spr_blue_cardType", historyContent).active = item.blueType > 1;
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("props_spr_red_cardType", historyContent).getComponent(Sprite).spriteFrame = item.redType > 1 ? this.getSpecialCard(item.redType) : this.getSpecialCard(2);
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("props_spr_red_cardType", historyContent).active = item.redType > 1;
            this.propertyNode.props_layout_history_item.addChild(historyContent);

            if (i != maxHistory.length - 1) {
              let nextPosition = this.compareCoordinates(startPosition, nextP, i + 1);
              this.line.push(nextPosition);
            }
          });

          if (this.line && this.line.length > 0) {
            window.setTimeout(() => {
              this.drawLine(this.line);
            }, 200);
          }
        }

        compareCoordinates(startPosition, nextP, i) {
          let nextPosition;

          if (startPosition.x > 0) {
            if (nextP === 1) {
              nextPosition = new Vec3(startPosition.x - 128, startPosition.y - i * 60);
            } else if (nextP === 2) {
              nextPosition = new Vec3(startPosition.x, startPosition.y - i * 60);
            } else if (nextP === 3) {
              nextPosition = new Vec3(startPosition.x - 64, startPosition.y - i * 60);
            }
          } else if (startPosition.x < 0) {
            if (nextP === 1) {
              nextPosition = new Vec3(startPosition.x, startPosition.y - i * 60);
            } else if (nextP === 2) {
              nextPosition = new Vec3(startPosition.x + 128, startPosition.y - i * 60);
            } else if (nextP === 3) {
              nextPosition = new Vec3(startPosition.x + 64, startPosition.y - i * 60);
            }
          } else {
            if (nextP === 1) {
              nextPosition = new Vec3(startPosition.x - 64, startPosition.y - i * 60);
            } else if (nextP === 2) {
              nextPosition = new Vec3(startPosition.x + 64, startPosition.y - i * 60);
            } else if (nextP === 3) {
              nextPosition = new Vec3(startPosition.x, startPosition.y - i * 60);
            }
          }

          return nextPosition;
        }
        /**画线 */


        drawLine(line) {
          this.propertyNode.props_line_content.clear(); // 设置线条宽度和颜色

          this.propertyNode.props_line_content.lineWidth = 5;
          this.propertyNode.props_line_content.strokeColor = Color.YELLOW;

          for (let i = 0; i < line.length; i++) {
            this.propertyNode.props_line_content.moveTo(line[i].x, line[i].y);

            if (i != line.length - 1) {
              this.propertyNode.props_line_content.lineTo(line[i + 1].x, line[i + 1].y);
            }
          }

          this.propertyNode.props_line_content.stroke();
        }
        /**清除缓存数据 */


        clearTheCacheData() {
          this.line = [];
        }
        /**获取特殊牌资源 */


        getSpecialCard(result) {
          let fileName = '';

          if (result === 4) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).S;
          } else if (result === 3) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).T;
          } else if (result === 2) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).Q;
          }

          return (_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile(fileName).source;
        }

        getSpriteFrame(result) {
          let fileName = '';

          if (result === 1) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDARQIUQIU_HISTORY_BLUE_WIN;
          } else if (result === 2) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDARQIUQIU_HISTORY_RED_WIN;
          } else if (result === 3) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDARQIUQIU_HISTORY_LV_WIN;
          } else if (result === 4) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDARQIUQIU_HISTORY_LOSE;
          }

          return (_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile(fileName).source;
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=651d8d8cc12d27c91cd25f9b4c20623156599880.js.map