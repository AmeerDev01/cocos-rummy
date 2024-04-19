System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Animation, Label, Sprite, Color, sp, game, Game, instantiate, BaseComponent, getNodeByNameDeep, GameStatus, config, SpriteFramePathDefine, mainGameViewModel, playPK, playTurnCard, sourceManageSelector, TaskScheduler, Task, SkeletonAnimationPlayer, _dec, _class, _crd, ccclass, property, BandarQiuQiu_cards;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTwinNum(extras) {
    _reporterNs.report("TwinNum", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteFramePathDefine(extras) {
    _reporterNs.report("SpriteFramePathDefine", "../sourceDefine/spriteDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmainGameViewModel(extras) {
    _reporterNs.report("mainGameViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayPK(extras) {
    _reporterNs.report("playPK", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayTurnCard(extras) {
    _reporterNs.report("playTurnCard", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSelector(extras) {
    _reporterNs.report("sourceManageSelector", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskScheduler(extras) {
    _reporterNs.report("TaskScheduler", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardType(extras) {
    _reporterNs.report("CardType", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletonAnimationPlayer(extras) {
    _reporterNs.report("SkeletonAnimationPlayer", "../SkeletonPlay", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Animation = _cc.Animation;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      Color = _cc.Color;
      sp = _cc.sp;
      game = _cc.game;
      Game = _cc.Game;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      getNodeByNameDeep = _unresolved_3.getNodeByNameDeep;
    }, function (_unresolved_4) {
      GameStatus = _unresolved_4.GameStatus;
    }, function (_unresolved_5) {
      config = _unresolved_5.default;
    }, function (_unresolved_6) {
      SpriteFramePathDefine = _unresolved_6.SpriteFramePathDefine;
    }, function (_unresolved_7) {
      mainGameViewModel = _unresolved_7.mainGameViewModel;
      playPK = _unresolved_7.playPK;
      playTurnCard = _unresolved_7.playTurnCard;
      sourceManageSelector = _unresolved_7.sourceManageSelector;
    }, function (_unresolved_8) {
      TaskScheduler = _unresolved_8.default;
      Task = _unresolved_8.Task;
    }, function (_unresolved_9) {
      SkeletonAnimationPlayer = _unresolved_9.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c433e2GH1dIdZhay7josQAs", "BandarQiuQiu_cards", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Animation', 'Label', 'SpriteFrame', 'Sprite', 'Color', 'sp', 'Vec3', 'game', 'Game', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BandarQiuQiu_cards", BandarQiuQiu_cards = (_dec = ccclass('BandarQiuQiu_cards'), _dec(_class = class BandarQiuQiu_cards extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
          this.isShowGame = true;
          this.propertyNode = {
            props_layout_cards: new Node(),
            props_spr_clock_bg: new Node(),
            props_label_clock_num: new Node(),
            props_skeleton_blue_cardType: new Node(),
            props_skeleton_red_cardType: new Node(),
            props_spr_blue_win_bg: new Node(),
            props_spr_red_win_bg: new Node(),
            props_node_card_back: new Node(),
            props_note_blue_cardBack: new Node(),
            props_note_red_cardBack: new Node(),
            props_spr_blueCard1: new Node(),
            props_spr_blueCard2: new Node(),
            props_spr_redCard1: new Node(),
            props_spr_redCard2: new Node(),
            props_note_card_roll: new Node(),
            props_spr_blue_roll_card1: new Node(),
            props_spr_blue_roll_card2: new Node(),
            props_spr_red_roll_card1: new Node(),
            props_spr_red_roll_card2: new Node(),
            props_label_blue_winNum: new Label(),
            props_label_red_loseNum: new Label(),
            props_skleton_commpare_bg: new Node(),
            props_skleton_commpare_vs: new Node()
          };
          this.props = {
            countDown: 0,
            gameStatus: null,
            blueCard: null,
            redCard: null,
            twinNum: null,
            cardType: null
          };
          this.events = {};
        }

        // private backCard: Node = null;
        start() {}

        initState() {
          return {
            cardType: null
          };
        }

        bindEvent() {
          game.on(Game.EVENT_HIDE, () => {
            //游戏切入后台
            this.isShowGame = false;
          });
          game.on(Game.EVENT_SHOW, () => {
            //游戏进入
            this.isShowGame = true;

            if (!(_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
              error: Error()
            }), mainGameViewModel) : mainGameViewModel).isUnMount) {
              if (this.node) {}
            }
          });
        }

        useProps(key, value) {
          if (key === "countDown") {
            // console.log("countDown",value.cur);
            if (value.cur <= 15 && value.cur > 0) {
              this.propertyNode.props_node_card_back.active = true;
            }

            if (value.cur > 0) {
              this.propertyNode.props_spr_clock_bg.active = true;
              this.propertyNode.props_label_clock_num.getComponent(Label).string = value.cur + "";
            } else {
              this.propertyNode.props_spr_clock_bg.active = false;
            }
          }

          if (key === "gameStatus") {
            console.log("gameStatus", value.cur);

            if (value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).BET) {
              // this.propertyNode.props_node_card_back.active = true;
              this.initialCardState();
            } else if (value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).STOP_BET) {
              window.setTimeout(() => {
                this.playAnimation();
              }, 2000);
            } else if (value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).WAIT) {
              this.initCardActive();
              this.initialCardState();
            }
          }

          if (key === "blueCard") {}

          if (key === "redCard") {}

          if (key === "cardType") {
            if (!value.cur) {
              return;
            }

            if (value.cur.blueType > value.cur.redType) {
              this.propertyNode.props_label_blue_winNum.color = new Color().fromHEX("#FFD119");
              this.propertyNode.props_label_red_loseNum.color = new Color().fromHEX("#FFFFFF");
            } else if (value.cur.blueType < value.cur.redType) {
              this.propertyNode.props_label_red_loseNum.color = new Color().fromHEX("#FFD119");
              this.propertyNode.props_label_blue_winNum.color = new Color().fromHEX("#FFFFFF");
            } else if (value.cur.greenType > 0) {
              this.propertyNode.props_label_blue_winNum.color = new Color().fromHEX("#FFD119");
              this.propertyNode.props_label_red_loseNum.color = new Color().fromHEX("#FFD119");
            }
          }

          if (key === "twinNum") {
            if (!value.cur) {
              return;
            }

            this.comparePoints(value.cur);
          }
        }
        /**初始牌节点的激活状态 */


        initCardActive() {
          this.propertyNode.props_spr_red_win_bg.active = false;
          this.propertyNode.props_spr_blue_win_bg.active = false;
          this.propertyNode.props_skeleton_blue_cardType.active = false;
          this.propertyNode.props_skeleton_red_cardType.active = false;
          this.propertyNode.props_note_card_roll.active = false;
          this.propertyNode.props_node_card_back.active = false;
          this.propertyNode.props_skleton_commpare_bg.active = false;
          this.propertyNode.props_skleton_commpare_vs.active = false;
          this.propertyNode.props_spr_clock_bg.active = false;
        }
        /**播放 移动牌 翻牌 动画 */


        playAnimation() {
          console.log("this.isShowGame22", this.isShowGame);

          if (!this.isShowGame) {
            this.initialCardState();
            return;
          }

          ;

          if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
            error: Error()
          }), mainGameViewModel) : mainGameViewModel).isUnMount) {
            return;
          }

          ; //避免使用原始节点在弱网情况下播放动画后卡帧，每次克隆，让动画保持初始状态。

          let backCard = instantiate(this.propertyNode.props_node_card_back);
          this.propertyNode.props_node_card_back.active = false;
          backCard.active = true;
          this.propertyNode.props_layout_cards.parent.addChild(backCard);
          this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
            error: Error()
          }), Task) : Task)(done => {
            this.propertyNode.props_skleton_commpare_bg.active = true;
            window.setTimeout(() => done(), 300);
          }), false).joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
            error: Error()
          }), Task) : Task)(done => {
            (_crd && playPK === void 0 ? (_reportPossibleCrUseOfplayPK({
              error: Error()
            }), playPK) : playPK)();
            console.log("backCard", backCard, backCard.getComponent(Animation));
            backCard.getComponent(Animation).play("animation_cardBack_move"); // this.propertyNode.props_node_card_back.getComponent(Animation).play("animation_cardBack_move");

            this.propertyNode.props_skleton_commpare_vs.active = true;
            window.setTimeout(() => done(), 1500);
          }), false).joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
            error: Error()
          }), Task) : Task)(done => {
            backCard.getComponent(Animation).play("animation_cardBack_roll"); // this.propertyNode.props_node_card_back.getComponent(Animation).play("animation_cardBack_roll");

            window.setTimeout(() => done(), 200);
          }), false).joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
            error: Error()
          }), Task) : Task)(done => {
            (_crd && playTurnCard === void 0 ? (_reportPossibleCrUseOfplayTurnCard({
              error: Error()
            }), playTurnCard) : playTurnCard)();

            if (backCard && backCard.isValid) {
              backCard.active = false;
              backCard.destroy();
              backCard = null;
            } // this.propertyNode.props_node_card_back.active = false;


            this.propertyNode.props_note_card_roll.active = true; // this.propertyNode.props_node_card_back.getComponent(Animation).stop();

            this.propertyNode.props_note_card_roll.getComponent(Animation).play("animation_card_roll");
            console.log(this.props.blueCard, this.props.redCard); // this.initCardBack();

            this.initialCardState();
            this.changeCardUpDown(this.props.blueCard, this.props.redCard);
            window.setTimeout(() => done(), 1500);
          }), false).joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
            error: Error()
          }), Task) : Task)(done => {
            this.propertyNode.props_note_card_roll.getComponent(Animation).play("animation_card_move");
            this.propertyNode.props_skleton_commpare_bg.active = false;
            this.propertyNode.props_skleton_commpare_vs.active = false;
            window.setTimeout(() => done(), 500);
          }), false).joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
            error: Error()
          }), Task) : Task)(done => {
            if (!this.props || !this.props.cardType || !this.props.twinNum) return;
            console.log("this.props.twinNum", this.props.twinNum, this.props.cardType);
            this.playWinBg(this.props.twinNum, this.props.cardType);

            if (this.props.cardType.greenType > 0) {
              let ani = this.getGreenCardTypeSkeleton(this.props.cardType.greenType);
              this.propertyNode.props_skeleton_blue_cardType.active = true;
              this.propertyNode.props_skeleton_red_cardType.active = true;
              new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
                error: Error()
              }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(this.propertyNode.props_skeleton_blue_cardType.getComponent(sp.Skeleton), ani, false).playAnimation();
              new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
                error: Error()
              }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(this.propertyNode.props_skeleton_red_cardType.getComponent(sp.Skeleton), ani, false).playAnimation();
            }

            if (this.props.cardType.blueType > 0) {
              let ani = this.getBlueRedCardTypeSkeleton(this.props.cardType.blueType);
              this.propertyNode.props_skeleton_blue_cardType.active = true;
              new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
                error: Error()
              }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(this.propertyNode.props_skeleton_blue_cardType.getComponent(sp.Skeleton), ani, false).playAnimation();
            }

            if (this.props.cardType.redType > 0) {
              let ani = this.getBlueRedCardTypeSkeleton(this.props.cardType.redType);
              this.propertyNode.props_skeleton_red_cardType.active = true;
              new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
                error: Error()
              }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(this.propertyNode.props_skeleton_red_cardType.getComponent(sp.Skeleton), ani, false).playAnimation();
            }

            window.setTimeout(() => done(), 500);
          }), false).joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
            error: Error()
          }), Task) : Task)(done => {
            this.initialCardState(); // console.log("parent",this.propertyNode.props_layout_cards.parent);

            window.setTimeout(() => done(), 500);
          }), false);
        }
        /**更改牌的点数 */


        changeCardUpDown(blueCard, redCard) {
          if (!blueCard || !redCard) {
            return;
          }

          ; // if (!redCard ) { return };

          blueCard.forEach((b, i) => {
            let itemCard = this.getCard(b);
            let num = i + 1;
            let card = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("props_spr_blue_roll_card" + num, this.propertyNode.props_note_card_roll);
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("spr_cardNum_up", card).getComponent(Sprite).spriteFrame = this.getSpriteFrame(itemCard.up);
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("spr_cardNum_down", card).getComponent(Sprite).spriteFrame = this.getSpriteFrame(itemCard.down);
          });
          redCard.forEach((r, i) => {
            let itemCard = this.getCard(r);
            let num = i + 1;
            let card = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("props_spr_red_roll_card" + num, this.propertyNode.props_note_card_roll);
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("spr_cardNum_up", card).getComponent(Sprite).spriteFrame = this.getSpriteFrame(itemCard.up);
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("spr_cardNum_down", card).getComponent(Sprite).spriteFrame = this.getSpriteFrame(itemCard.down);
          });
        }
        /**比较点数，更改labelNum颜色 */


        comparePoints(twins) {
          if (twins) {
            this.propertyNode.props_label_blue_winNum.string = twins.blueNum + "";
            this.propertyNode.props_label_red_loseNum.string = twins.redNum + "";
            this.propertyNode.props_label_blue_winNum.color = new Color().fromHEX("#FFFFFF");
            this.propertyNode.props_label_red_loseNum.color = new Color().fromHEX("#FFFFFF");

            if (twins.blueNum > twins.redNum) {
              this.propertyNode.props_label_blue_winNum.color = new Color().fromHEX("#FFD119");
            } else if (twins.blueNum < twins.redNum) {
              this.propertyNode.props_label_red_loseNum.color = new Color().fromHEX("#FFD119");
            } else if (twins.blueNum === twins.redNum) {
              this.propertyNode.props_label_blue_winNum.color = new Color().fromHEX("#FFD119");
              this.propertyNode.props_label_red_loseNum.color = new Color().fromHEX("#FFD119");
            }
          }
        }
        /**比较点数 和特殊牌型，判断是否展示赢的光圈 */


        playWinBg(twins, cardType) {
          if (cardType) {
            if (cardType.blueType > cardType.redType) {
              this.propertyNode.props_spr_blue_win_bg.active = true;
              this.propertyNode.props_spr_red_win_bg.active = false;
            } else if (cardType.blueType < cardType.redType) {
              this.propertyNode.props_spr_red_win_bg.active = true;
              this.propertyNode.props_spr_blue_win_bg.active = false;
            } else if (cardType.greenType <= 0) {
              if (twins) {
                if (twins.blueNum > twins.redNum) {
                  this.propertyNode.props_spr_blue_win_bg.active = true;
                  this.propertyNode.props_spr_red_win_bg.active = false;
                } else if (twins.blueNum < twins.redNum) {
                  this.propertyNode.props_spr_red_win_bg.active = true;
                  this.propertyNode.props_spr_blue_win_bg.active = false;
                }
              }
            }
          }
        }

        initialCardState() {// this.propertyNode.props_note_blue_cardBack.setPosition(-309, 0);
          // this.propertyNode.props_note_red_cardBack.setPosition(309, 0);
          // this.propertyNode.props_spr_blueCard1.setPosition(-34, 0);
          // this.propertyNode.props_spr_blueCard2.setPosition(34, 0);
          // this.propertyNode.props_spr_redCard1.setPosition(-34, 0);
          // this.propertyNode.props_spr_redCard2.setPosition(34, 0);
          // this.propertyNode.props_note_blue_cardBack.scale = new Vec3(1, 1);
          // this.propertyNode.props_spr_blueCard1.scale = new Vec3(0.7, 0.7);
          // this.propertyNode.props_spr_blueCard2.scale = new Vec3(0.7, 0.7);
          // this.propertyNode.props_spr_redCard1.scale = new Vec3(0.7, 0.7);
          // this.propertyNode.props_spr_redCard2.scale = new Vec3(0.7, 0.7);
          // this.propertyNode.props_note_red_cardBack.scale = new Vec3(1, 1);
        }

        initCardBack() {// this.propertyNode.props_note_blue_cardBack.setPosition(-309, 0);
          // this.propertyNode.props_note_red_cardBack.setPosition(309, 0);
          // this.propertyNode.props_spr_blueCard1.setPosition(-34, 0);
          // this.propertyNode.props_spr_blueCard2.setPosition(34, 0);
          // this.propertyNode.props_spr_redCard1.setPosition(-34, 0);
          // this.propertyNode.props_spr_redCard2.setPosition(34, 0);
          // this.propertyNode.props_spr_blueCard1.scale = new Vec3(0.7, 0.7);
          // this.propertyNode.props_spr_blueCard2.scale = new Vec3(0.7, 0.7);
          // this.propertyNode.props_spr_redCard1.scale = new Vec3(0.7, 0.7);
          // this.propertyNode.props_spr_redCard2.scale = new Vec3(0.7, 0.7);
        }
        /**获取每张牌的组型 */


        getCard(cardT) {
          return (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).cardType[cardT];
        }
        /**计算点数 */


        sumCard(itemCard) {
          let num;
          num = (itemCard.up + itemCard.down) % 10;
          return num;
        }
        /**切换输赢数字颜色 */


        changeNumColor(num) {
          if (num === 1) {
            return new Color().fromHEX("#FFD119");
          } else if (num === 2) {
            return new Color().fromHEX("#FFFFFF");
          }
        }
        /**获取牌的点数资源 */


        getSpriteFrame(result) {
          let fileName = '';

          if (result === 0) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDARQIUQIU_POKER0;
          } else if (result === 1) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDARQIUQIU_POKER1;
          } else if (result === 2) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDARQIUQIU_POKER2;
          } else if (result === 3) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDARQIUQIU_POKER3;
          } else if (result === 4) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDARQIUQIU_POKER4;
          } else if (result === 5) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDARQIUQIU_POKER5;
          } else if (result === 6) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDARQIUQIU_POKER6;
          }

          return (_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile(fileName).source;
        }
        /**获取牌的点数资源 */


        getBlueRedCardTypeSkeleton(result) {
          let animationName = '';

          if (result < 2) {
            return;
          }

          ;

          if (result === 2) {
            animationName = "qiu";
          } else if (result === 3) {
            animationName = "twin";
          }

          return animationName;
        }
        /**获取牌的点数资源 */


        getGreenCardTypeSkeleton(result) {
          let animationName = '';

          if (result < 2) {
            return;
          }

          ;

          if (result === 2) {
            animationName = "qiuqiu";
          } else if (result === 3) {
            animationName = "twins";
          } else if (result === 4) {
            animationName = "six";
          }

          return animationName;
        }

        destroyCallBack() {
          this.taskScheduler.destoryQueue();
          this.taskScheduler.stopQueue(false);
        }

        bindUI() {
          this.initCardActive(); // this.propertyNode.props_spr_clock_bg.active = false;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dd8d17ea2996fd62fcc381d821821782a69d6f6c.js.map