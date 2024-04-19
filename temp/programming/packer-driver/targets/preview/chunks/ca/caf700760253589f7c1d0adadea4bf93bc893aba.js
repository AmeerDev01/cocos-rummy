System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, instantiate, Node, Sprite, tween, UITransform, Vec3, BaseComponent, sourceManageSeletor, playBtnClick, SpriteFramePathDefine, AnimationStatus, BetType, GameStatus, _dec, _class, _crd, ccclass, property, Yxx_HistoryMin;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayBtnClick(extras) {
    _reporterNs.report("playBtnClick", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteFramePathDefine(extras) {
    _reporterNs.report("SpriteFramePathDefine", "../sourceDefine/spriteDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationStatus(extras) {
    _reporterNs.report("AnimationStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetType(extras) {
    _reporterNs.report("BetType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResult(extras) {
    _reporterNs.report("Result", "../type", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      sourceManageSeletor = _unresolved_3.sourceManageSeletor;
    }, function (_unresolved_4) {
      playBtnClick = _unresolved_4.playBtnClick;
    }, function (_unresolved_5) {
      SpriteFramePathDefine = _unresolved_5.SpriteFramePathDefine;
    }, function (_unresolved_6) {
      AnimationStatus = _unresolved_6.AnimationStatus;
      BetType = _unresolved_6.BetType;
      GameStatus = _unresolved_6.GameStatus;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "056571/QadJHqNDDvNgdKj/", "Yxx_HistoryMin", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Game', 'instantiate', 'log', 'Node', 'Sprite', 'SpriteFrame', 'Tween', 'tween', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Yxx_HistoryMin", Yxx_HistoryMin = (_dec = ccclass('Yxx_HistoryMin'), _dec(_class = class Yxx_HistoryMin extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.init = false;
          this.propertyNode = {
            props_btn_history: new Button(),
            props_history_group: new Node(),
            props_spr_result: new Node(),
            props_history_list: new Node(),
            props_temp_history_list: new Node()
          };
          this.props = {
            newResult: null,
            gameStatus: null,
            animationStatus: null,
            results: []
          };
          this.events = {
            openHistoryMax: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_history.node.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.events.openHistoryMax();
          });
        }

        useProps(key, value) {
          // log("history min ==================== ", key, value);
          if (key === 'animationStatus') {
            if (value.cur === (_crd && AnimationStatus === void 0 ? (_reportPossibleCrUseOfAnimationStatus({
              error: Error()
            }), AnimationStatus) : AnimationStatus).KAI_GAI) {
              this.createResult(this.props.newResult);
            }
          } else if (key === 'gameStatus' && value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).BET && this.props.results.length) {
            // 为了防止通过动画添加历史记录时，由于动画播放的原因没有添加，所以在每次开始游戏的时候，处理一次历史记录
            this.propertyNode.props_history_list.removeAllChildren();

            for (var i = 0; i < this.props.results.length; i++) {
              var element = this.props.results[i];
              this.createResult(element, false);
            }
          } else if (key === 'results' && !this.init) {
            //游戏初始化时调用
            this.init = true;
            this.propertyNode.props_history_list.removeAllChildren();
            var length = this.props.gameStatus === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).BET ? this.props.results.length : this.props.results.length - 1;

            for (var _i = 0; _i < length; _i++) {
              var _element = this.props.results[_i];
              this.createResult(_element, false);
            }
          }
        }

        moveHistory(isTween) {
          if (isTween === void 0) {
            isTween = true;
          }

          var children = this.propertyNode.props_history_list.children;
          var offset = 37;

          for (var index = 0; index < children.length; index++) {
            var element = children[index];

            if (isTween) {
              tween(element).by(0.7, {
                position: new Vec3(offset, 0)
              }).start();
            } else {
              element.setPosition(new Vec3(element.position.x + offset, element.position.y));
            }
          }
        }

        createResult(result, isTween) {
          if (isTween === void 0) {
            isTween = true;
          }

          this.moveHistory(isTween);
          var groupNode = instantiate(this.propertyNode.props_history_group);
          groupNode.active = true;
          groupNode.removeAllChildren();
          result.betTypes.forEach((v, index) => {
            var node = instantiate(this.propertyNode.props_spr_result);
            groupNode.addChild(node);
            node.getComponent(Sprite).spriteFrame = this.getSpriteFrame(v);
            node.scale = new Vec3(1.0, 1.0);
          });

          if (isTween) {
            this.propertyNode.props_temp_history_list.addChild(groupNode);
            tween(groupNode).by(0.5, {
              scale: new Vec3(0.2, 0.2)
            }).by(0.2, {
              scale: new Vec3(-0.2, -0.2)
            }).call(() => {
              this.propertyNode.props_history_list.addChild(groupNode);
              this.updateHistoryListWidth();
              this.propertyNode.props_temp_history_list.removeAllChildren();
            }).start();
          } else {
            this.propertyNode.props_history_list.addChild(groupNode);
            this.updateHistoryListWidth();
          }
        }

        updateHistoryListWidth() {
          this.propertyNode.props_history_list.getComponent(UITransform).width = this.propertyNode.props_history_list.children.length * 37;
        }

        getSpriteFrame(betType) {
          var fileName = '';

          if (betType === (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).SHRIMP) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).HISTORY_MIN_1;
          } else if (betType === (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).GOURD) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).HISTORY_MIN_2;
          } else if (betType === (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).DEER) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).HISTORY_MIN_3;
          } else if (betType === (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).CHOOK) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).HISTORY_MIN_4;
          } else if (betType === (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).CRAB) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).HISTORY_MIN_5;
          } else if (betType === (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).FISH) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).HISTORY_MIN_6;
          }

          return (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile(fileName).source;
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=caf700760253589f7c1d0adadea4bf93bc893aba.js.map