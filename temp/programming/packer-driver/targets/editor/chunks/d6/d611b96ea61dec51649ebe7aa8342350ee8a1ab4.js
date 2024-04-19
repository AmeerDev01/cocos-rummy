System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, Sprite, tween, UIOpacity, UITransform, Vec3, BaseComponent, CardPosition, DeskStatus, genCardItem, SpriteFramePathDefine, roomChooseViewModel, sourceManageSeletor, getNodePositionInCanvas, setDeskCardOutline, config, _dec, _class, _crd, ccclass, property, Domino_Card;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardItem(extras) {
    _reporterNs.report("CardItem", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardPosition(extras) {
    _reporterNs.report("CardPosition", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeskStatus(extras) {
    _reporterNs.report("DeskStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgenCardItem(extras) {
    _reporterNs.report("genCardItem", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteFramePathDefine(extras) {
    _reporterNs.report("SpriteFramePathDefine", "../sourceDefine/spriteDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfroomChooseViewModel(extras) {
    _reporterNs.report("roomChooseViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodePositionInCanvas(extras) {
    _reporterNs.report("getNodePositionInCanvas", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetDeskCardOutline(extras) {
    _reporterNs.report("setDeskCardOutline", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
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
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      CardPosition = _unresolved_3.CardPosition;
      DeskStatus = _unresolved_3.DeskStatus;
      genCardItem = _unresolved_3.genCardItem;
    }, function (_unresolved_4) {
      SpriteFramePathDefine = _unresolved_4.SpriteFramePathDefine;
    }, function (_unresolved_5) {
      roomChooseViewModel = _unresolved_5.roomChooseViewModel;
      sourceManageSeletor = _unresolved_5.sourceManageSeletor;
    }, function (_unresolved_6) {
      getNodePositionInCanvas = _unresolved_6.getNodePositionInCanvas;
    }, function (_unresolved_7) {
      setDeskCardOutline = _unresolved_7.setDeskCardOutline;
    }, function (_unresolved_8) {
      config = _unresolved_8.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a3c6e9nYAlLTIzsyZWZ0Iok", "Domino_Card", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'find', 'instantiate', 'Node', 'Sprite', 'Tween', 'tween', 'UIOpacity', 'UITransform', 'utils', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Domino_Card", Domino_Card = (_dec = ccclass('Domino_Card'), _dec(_class = class Domino_Card extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.cardImageMap = [(_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CARD_NUMBER_0, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CARD_NUMBER_1, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CARD_NUMBER_2, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CARD_NUMBER_3, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CARD_NUMBER_4, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CARD_NUMBER_5, (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
            error: Error()
          }), SpriteFramePathDefine) : SpriteFramePathDefine).CARD_NUMBER_6];
          this.propertyNode = {
            props_spr_card_up: new Sprite(),
            props_spr_card_down: new Sprite(),
            props_grayscale: new Node(),
            props_spr_card_bigBg: new Node(),
            props_outline: new Node()
          };
          this.initWidth = 0;
          this.initHeight = 0;
          this.initY = 0;
          // 是否可以出牌了
          this._isCanOutCard = false;
          this.outAzimuth = -1;
          this.nodeCopy = void 0;
          this.startPos = void 0;

          /**是否初始化隐藏 */
          this.isInitHide = true;
          this.isCheckedAnime = true;
          this.props = {
            isOutline: false,
            deskStatus: null,
            newCardItem: null,
            upFace: -1,
            downFace: -1,
            lastAlignValue: -1,
            alignValue: -1,
            position: null,
            isAnime: false,
            isShow: undefined,
            isHand: false,
            isChecked: false,
            isBright: false,
            type: 0,
            poseAzimuth: -1,
            scale: 0.5,
            value: -1,
            isDisable: false
          };
          this.events = {
            onOutCard: (value, azimuth) => {},
            onDestroy: () => {}
          };
          this.downT = 0;
          this.touchDown = 0;
          this.tweenValue = void 0;
        }

        start() {}

        initState() {
          return {
            isDrag: false,
            isInitHide: true
          };
        }

        isCanOutCard() {
          return this._isCanOutCard;
        }

        dragMove(event) {
          if (this.touchDown === 0) {
            return;
          }

          this.state.isDrag = true;
          const startPosition = event.getUIStartLocation();
          const uiLocation = event.getUILocation(); // console.log(`start x ${startPosition.x}, y ${startPosition.y}, move x ${uiLocation.x}, y ${uiLocation.y}`);

          this._isCanOutCard = uiLocation.y - startPosition.y >= 50;
          this.nodeCopy.setWorldPosition(new Vec3(uiLocation.x, uiLocation.y));

          if (this._isCanOutCard) {
            const position = this.root.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(uiLocation.x, uiLocation.y));
            this.outAzimuth = position.x < 0 ? 0 : 1;
          }
        }

        dragEnd() {
          this.node.off(Node.EventType.TOUCH_MOVE);
          const isDrag = this.state.isDrag;
          this.state.isDrag = false;

          if (this._isCanOutCard) {
            this.setProps({
              isDisable: true
            });
            this.events.onOutCard(this.props.value, this.outAzimuth === 0 ? 0 : 1);
            return;
          }

          this.backToPosition();
          isDrag && this.setProps({
            isChecked: false
          });
          this._isCanOutCard = false;
        }

        bindEvent() {
          const outCardNode = (_crd && roomChooseViewModel === void 0 ? (_reportPossibleCrUseOfroomChooseViewModel({
            error: Error()
          }), roomChooseViewModel) : roomChooseViewModel).mainBoardViewModel.comp.getOutCardWrapNode();
          this.node.on(Node.EventType.TOUCH_START, () => {
            // 只有在牌局中才能拖动
            if (!this.isAllowDrag()) return;
            this.dispatch((_crd && setDeskCardOutline === void 0 ? (_reportPossibleCrUseOfsetDeskCardOutline({
              error: Error()
            }), setDeskCardOutline) : setDeskCardOutline)((_crd && genCardItem === void 0 ? (_reportPossibleCrUseOfgenCardItem({
              error: Error()
            }), genCardItem) : genCardItem)(this.props.value)));

            const handle = () => {
              this.nodeCopy = instantiate(this.node);
              const cardComponent = this.nodeCopy.getComponent(Domino_Card);
              cardComponent.setInitHide(false);
              this.nodeCopy.name += '_copy';
              this.nodeCopy.setPosition((_crd && getNodePositionInCanvas === void 0 ? (_reportPossibleCrUseOfgetNodePositionInCanvas({
                error: Error()
              }), getNodePositionInCanvas) : getNodePositionInCanvas)(this.node));
              this.setOpacity(false);
              outCardNode.addChild(this.nodeCopy);
              this.node.on(Node.EventType.TOUCH_MOVE, event => {
                this.dragMove(event);
              });
              this.node.once(Node.EventType.TOUCH_CANCEL, event => {
                this.dragEnd();
              }); // this.node.once(Node.EventType.TOUCH_END, (event) => {
              // 	this.touchDown = 0;
              // 	this.downT && window.clearTimeout(this.downT);
              // })
            };

            if (this.touchDown === 0) {
              // 长按时长
              const time = 100;
              this.downT && window.clearTimeout(this.downT);
              this.downT = window.setTimeout(() => {
                this.touchDown = 1;
                this.props && this.node && this.node.isValid && handle();
              }, time);
              return;
            }
          });
        }

        clearLangPressStatus() {
          this.touchDown = 0;
          this.downT && window.clearTimeout(this.downT);
        }

        setOutline() {
          this.propertyNode.props_outline.active = this.props.isOutline;
          this.propertyNode.props_grayscale.active = !this.props.isOutline;
          this.propertyNode.props_spr_card_bigBg.active = !this.props.isOutline;
          this.propertyNode.props_spr_card_down.node.active = !this.props.isOutline;
          this.propertyNode.props_spr_card_up.node.active = !this.props.isOutline;
        }
        /**是否允许拖动 */


        isAllowDrag() {
          return !this.props.isDisable && this.props.type === 0 && this.props.deskStatus === (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
            error: Error()
          }), DeskStatus) : DeskStatus).PLAYING && this.props.isBright;
        }

        useProps(key, value) {
          if (key === 'isOutline') {
            this.setOutline();
          }

          if (key === "upFace" && value.cur >= 0) {
            this.propertyNode.props_spr_card_up.spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile(this.cardImageMap[value.cur]).source;
            this.setBright(false);
          }

          if (key === "downFace" && value.cur >= 0) {
            this.propertyNode.props_spr_card_down.spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile(this.cardImageMap[value.cur]).source;
            this.setBright(false);
          }

          if (key === "isShow") {
            if (value.cur === false) {
              this.hide(this.props.isAnime);
            } else {
              this.show(this.props.isAnime);
            }
          } else if (key === 'isChecked') {
            this.setChecked(value.cur);
          } else if (key === 'isBright') {
            this.setBright(value.cur);
          } else if (key === 'position') {
            this.horizontal();
          } else if (key === 'type') {
            this.scale();
          } else if (key === 'newCardItem' && value.cur && this.props.isHand) {
            if (this.props.value === value.cur.value) {
              this.outFlyCard();
              this.events.onDestroy();
              this.nodeCopy && this.nodeCopy.isValid && this.nodeCopy.destroy();
            } else {
              // 如果拖动过程中不是出的当前拖动的这张牌，就直接销毁
              this.clearLangPressStatus();
              this._isCanOutCard = false;
              this.dragEnd();
              this.isCheckedAnime = false;
              this.setProps({
                isChecked: false
              });
            }
          }
        }

        setCheckedAnime(value) {
          this.isCheckedAnime = value;
        }

        setChecked(isChecked) {
          const offset = isChecked ? this.initY + 20 : this.initY;
          this.tweenValue && this.tweenValue.stop();

          if (this.isCheckedAnime) {
            this.tweenValue = tween(this.node).to(0.2, {
              position: new Vec3(this.node.position.x, offset)
            }).start();
          } else {
            this.node.setPosition(new Vec3(this.node.position.x, offset));
          }

          this.isCheckedAnime = true;
        }

        setBright(value) {
          this.propertyNode.props_grayscale.active = !value;
        }

        show(isAnime, done) {
          const uiTransform = this.node.getComponent(UITransform);

          if (this.props.type === 1) {
            uiTransform.width = this.getScaleWidth();
            this.setOpacity(true);
          } else {
            if (isAnime) {
              const speed = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).dealAnimeSpeed;
              tween(uiTransform).to(speed, {
                width: this.initWidth
              }).call(() => {
                this.setOpacity(true);
                done && done();
              }).start();
            } else {
              uiTransform.width = this.initWidth;
              this.setOpacity(true);
            }
          }
        }

        hide(isAnime, done) {
          this.setOpacity(false);
          const uiTransform = this.node.getComponent(UITransform);

          if (this.props.type === 0) {
            if (isAnime) {
              tween(uiTransform).to(0.1, {
                width: 0
              }).call(() => done && done()).start();
            } else {
              uiTransform.width = 0;
            }
          }
        }

        backToPosition() {
          tween(this.nodeCopy).to(0.2, {
            position: (_crd && getNodePositionInCanvas === void 0 ? (_reportPossibleCrUseOfgetNodePositionInCanvas({
              error: Error()
            }), getNodePositionInCanvas) : getNodePositionInCanvas)(this.node)
          }).call(() => {
            this.nodeCopy && this.nodeCopy.destroy();
            this.nodeCopy = null;
            this.setOpacity(true);
          }).start();
        }

        setOpacity(show) {
          if (!this.node || !this.node.isValid) return;
          const uiOpacity = this.node.getComponent(UIOpacity);
          uiOpacity.opacity = show ? 255 : 0;
        }
        /**横向旋转角度 */


        horizontal() {
          // this.props.type === 1 && console.log(`card ==== poseAzimuth ${this.props.poseAzimuth}, upFace ${this.props.upFace}, downFace: ${this.props.downFace}, alignValue: ${this.props.alignValue} `);
          if (this.props.position === (_crd && CardPosition === void 0 ? (_reportPossibleCrUseOfCardPosition({
            error: Error()
          }), CardPosition) : CardPosition).HORIZONTAL) {
            if (this.props.alignValue === this.props.upFace) {
              this.node.angle = this.props.poseAzimuth === 0 ? -90 : 90;
            } else {
              this.node.angle = this.props.poseAzimuth === 0 ? 90 : -90;
            }
          } else if (this.props.type === 1 && this.props.alignValue >= 0) {
            if (this.props.upFace !== this.props.downFace) {
              if (this.props.alignValue === this.props.upFace) {
                this.node.angle = this.props.poseAzimuth === 0 ? 180 : 0;
              } else {
                this.node.angle = this.props.poseAzimuth === 0 ? 0 : 180;
              }
            }
          }
        }
        /**缩放 */


        scale() {
          if (this.props.type === 1) {
            this.node.setScale(new Vec3(this.props.scale, this.props.scale));
          }
        }

        getInitWidth() {
          return this.initWidth;
        }

        getInitHeight() {
          return this.initHeight;
        }

        getScaleWidth() {
          return this.initWidth * this.props.scale;
        }

        getScaleHeight() {
          return this.initHeight * this.props.scale;
        }

        bindUI() {
          const transform = this.node.getComponent(UITransform);
          this.initHeight = transform.height;
          this.initWidth = transform.width;
          this.initY = this.node.position.y; // 拖动复制出来的组件不隐藏

          this.isInitHide && this.hide(false);
        }

        setInitHide(value) {
          this.isInitHide = value;
        }

        outFlyCard() {
          this.nodeCopy = this.nodeCopy ? this.nodeCopy : this.node;
          this.nodeCopy && this.nodeCopy.isValid && (_crd && roomChooseViewModel === void 0 ? (_reportPossibleCrUseOfroomChooseViewModel({
            error: Error()
          }), roomChooseViewModel) : roomChooseViewModel).mainBoardViewModel.comp.outFlyCard(this.nodeCopy.getWorldPosition());
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d611b96ea61dec51649ebe7aa8342350ee8a1ab4.js.map