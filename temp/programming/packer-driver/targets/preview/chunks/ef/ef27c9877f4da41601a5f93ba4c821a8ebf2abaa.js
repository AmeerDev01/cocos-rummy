System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Game, game, instantiate, Label, Node, Sprite, tween, Vec3, BaseComponent, formatNumber, getNodeByNameDeep, getNodePositionInCanvas, SpriteFramePathDefine, mainGameViewModel, playTurnCard, sourceManageSelector, PrefabPathDefine, gameCacheData, GameStatus, TaskScheduler, Task, config, getSpecialCard, restructureCard, sumCard, setMemberBetAction, betAreaViewModel, _dec, _class, _crd, ccclass, property, Bandar_card_user;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfformatNumber(extras) {
    _reporterNs.report("formatNumber", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodePositionInCanvas(extras) {
    _reporterNs.report("getNodePositionInCanvas", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteFramePathDefine(extras) {
    _reporterNs.report("SpriteFramePathDefine", "../sourceDefine/spriteDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmainGameViewModel(extras) {
    _reporterNs.report("mainGameViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayTurnCard(extras) {
    _reporterNs.report("playTurnCard", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSelector(extras) {
    _reporterNs.report("sourceManageSelector", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardNum(extras) {
    _reporterNs.report("CardNum", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetType(extras) {
    _reporterNs.report("BetType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameCacheData(extras) {
    _reporterNs.report("gameCacheData", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskScheduler(extras) {
    _reporterNs.report("TaskScheduler", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardP(extras) {
    _reporterNs.report("CardP", "./Bandar_card_banker", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetSpecialCard(extras) {
    _reporterNs.report("getSpecialCard", "./Bandar_card_banker", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrestructureCard(extras) {
    _reporterNs.report("restructureCard", "./Bandar_card_banker", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsumCard(extras) {
    _reporterNs.report("sumCard", "./Bandar_card_banker", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetMemberBetAction(extras) {
    _reporterNs.report("setMemberBetAction", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbetAreaViewModel(extras) {
    _reporterNs.report("betAreaViewModel", "../viewModel/BandarGameBoardViewModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Game = _cc.Game;
      game = _cc.game;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      formatNumber = _unresolved_3.formatNumber;
      getNodeByNameDeep = _unresolved_3.getNodeByNameDeep;
      getNodePositionInCanvas = _unresolved_3.getNodePositionInCanvas;
    }, function (_unresolved_4) {
      SpriteFramePathDefine = _unresolved_4.SpriteFramePathDefine;
    }, function (_unresolved_5) {
      mainGameViewModel = _unresolved_5.mainGameViewModel;
      playTurnCard = _unresolved_5.playTurnCard;
      sourceManageSelector = _unresolved_5.sourceManageSelector;
    }, function (_unresolved_6) {
      PrefabPathDefine = _unresolved_6.PrefabPathDefine;
    }, function (_unresolved_7) {
      gameCacheData = _unresolved_7.gameCacheData;
      GameStatus = _unresolved_7.GameStatus;
    }, function (_unresolved_8) {
      TaskScheduler = _unresolved_8.default;
      Task = _unresolved_8.Task;
    }, function (_unresolved_9) {
      config = _unresolved_9.default;
    }, function (_unresolved_10) {
      getSpecialCard = _unresolved_10.getSpecialCard;
      restructureCard = _unresolved_10.restructureCard;
      sumCard = _unresolved_10.sumCard;
    }, function (_unresolved_11) {
      setMemberBetAction = _unresolved_11.setMemberBetAction;
    }, function (_unresolved_12) {
      betAreaViewModel = _unresolved_12.betAreaViewModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "44d03d5IcNCiKpJFAGWxshP", "Bandar_card_user", undefined);

      __checkObsolete__(['_decorator', 'Game', 'game', 'instantiate', 'Label', 'Node', 'sp', 'Sprite', 'SpriteFrame', 'tween', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bandar_card_user", Bandar_card_user = (_dec = ccclass('Bandar_card_user'), _dec(_class = class Bandar_card_user extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
          this.areaInfo = [1, 2, 3, 4];
          this.blackCard = [];
          this.redCard = [];
          this.plumCard = [];
          this.diamondCard = [];
          this.allUserCard = [];
          this.userCard = [];
          this.isShowGame = true;
          this.propertyNode = {
            props_spr_usercard_num_bg: new Node(),
            props_usercard_num_query: new Node(),
            props_usercard_type: new Node(),
            props_label_carduser_losenum: new Node(),
            props_label_carduser_winnum: new Node(),
            // props_bandar_userbet:new Node(),
            props_user_all_card: new Node()
          };
          this.props = {
            /** 黑桃区域牌信息*/
            blackPoker: null,

            /** 红桃区域牌信息*/
            redPoker: null,

            /** 梅花区域牌信息*/
            plumPoker: null,

            /** 方块区域牌信息*/
            diamondPoker: null,
            areaWinLose: null,
            countDown: 0,
            gameStatus: null,
            memberBet: null,
            allCardRate: null,
            cardType: null,
            spadeNum: null,
            heartNum: null,
            sakuraNum: null,
            blockNum: null,
            allCardType: null
          };
          this.events = {};
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          game.on(Game.EVENT_HIDE, () => {
            //游戏切入后台
            this.isShowGame = false;
          });
          game.on(Game.EVENT_SHOW, () => {
            //游戏进入
            this.isShowGame = true;
          });
        }

        useProps(key, value) {
          if (key === "spadeNum") {
            if (value.cur && Object.keys(value.cur).length != 0) {
              // window.setTimeout(() => {
              // console.log("this.userCard",this.userCard);
              // console.log(!this.userCard);
              if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
                error: Error()
              }), mainGameViewModel) : mainGameViewModel).isUnMount) {
                return;
              }

              if (!this.userCard || this.userCard.length === 0) {
                return;
              }

              var item = this.props.allCardType[1];
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_usercard_type", this.userCard[0]).getComponent(Sprite).spriteFrame = item > 2 ? (_crd && getSpecialCard === void 0 ? (_reportPossibleCrUseOfgetSpecialCard({
                error: Error()
              }), getSpecialCard) : getSpecialCard)(item) : (_crd && getSpecialCard === void 0 ? (_reportPossibleCrUseOfgetSpecialCard({
                error: Error()
              }), getSpecialCard) : getSpecialCard)(3);
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_usercard_type", this.userCard[0]).active = item > 2;
              ; //这里是特殊奖

              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_label_carduser_losenum", this.userCard[0]).getComponent(Label).string = value.cur.num1 + ":" + value.cur.num2;
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_label_carduser_losenum", this.userCard[0]).active = value.cur.win === 2;
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_label_carduser_winnum", this.userCard[0]).getComponent(Label).string = value.cur.num1 + ":" + value.cur.num2;
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_label_carduser_winnum", this.userCard[0]).active = item > 2 ? false : value.cur.win === 1;

              if (value.cur.win === 1) {
                (_crd && betAreaViewModel === void 0 ? (_reportPossibleCrUseOfbetAreaViewModel({
                  error: Error()
                }), betAreaViewModel) : betAreaViewModel).comp.playWinArea(1);
              } // }, 500)

            }
          }

          if (key === "heartNum") {
            if (value.cur && Object.keys(value.cur).length != 0) {
              // window.setTimeout(() => {
              if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
                error: Error()
              }), mainGameViewModel) : mainGameViewModel).isUnMount) {
                return;
              }

              if (!this.userCard || this.userCard.length === 0) {
                return;
              }

              var _item = this.props.allCardType[2];
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_usercard_type", this.userCard[1]).getComponent(Sprite).spriteFrame = _item > 2 ? (_crd && getSpecialCard === void 0 ? (_reportPossibleCrUseOfgetSpecialCard({
                error: Error()
              }), getSpecialCard) : getSpecialCard)(_item) : (_crd && getSpecialCard === void 0 ? (_reportPossibleCrUseOfgetSpecialCard({
                error: Error()
              }), getSpecialCard) : getSpecialCard)(3);
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_usercard_type", this.userCard[1]).active = _item > 2;
              ; //这里是特殊奖

              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_label_carduser_losenum", this.userCard[1]).getComponent(Label).string = value.cur.num1 + ":" + value.cur.num2;
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_label_carduser_losenum", this.userCard[1]).active = value.cur.win === 2;
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_label_carduser_winnum", this.userCard[1]).getComponent(Label).string = value.cur.num1 + ":" + value.cur.num2;
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_label_carduser_winnum", this.userCard[1]).active = _item > 2 ? false : value.cur.win === 1;

              if (value.cur.win === 1) {
                (_crd && betAreaViewModel === void 0 ? (_reportPossibleCrUseOfbetAreaViewModel({
                  error: Error()
                }), betAreaViewModel) : betAreaViewModel).comp.playWinArea(2);
              } // }, 500)

            }
          }

          if (key === "sakuraNum") {
            if (value.cur && Object.keys(value.cur).length != 0) {
              // window.setTimeout(() => {
              if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
                error: Error()
              }), mainGameViewModel) : mainGameViewModel).isUnMount) {
                return;
              }

              if (!this.userCard || this.userCard.length === 0) {
                return;
              }

              var _item2 = this.props.allCardType[3];
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_usercard_type", this.userCard[2]).getComponent(Sprite).spriteFrame = _item2 > 2 ? (_crd && getSpecialCard === void 0 ? (_reportPossibleCrUseOfgetSpecialCard({
                error: Error()
              }), getSpecialCard) : getSpecialCard)(_item2) : (_crd && getSpecialCard === void 0 ? (_reportPossibleCrUseOfgetSpecialCard({
                error: Error()
              }), getSpecialCard) : getSpecialCard)(3);
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_usercard_type", this.userCard[2]).active = _item2 > 2; //这里是特殊奖

              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_label_carduser_losenum", this.userCard[2]).getComponent(Label).string = value.cur.num1 + ":" + value.cur.num2;
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_label_carduser_losenum", this.userCard[2]).active = value.cur.win === 2;
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_label_carduser_winnum", this.userCard[2]).getComponent(Label).string = value.cur.num1 + ":" + value.cur.num2;
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_label_carduser_winnum", this.userCard[2]).active = _item2 > 2 ? false : value.cur.win === 1;

              if (value.cur.win === 1) {
                (_crd && betAreaViewModel === void 0 ? (_reportPossibleCrUseOfbetAreaViewModel({
                  error: Error()
                }), betAreaViewModel) : betAreaViewModel).comp.playWinArea(3);
              } // },500)

            }
          }

          if (key === "blockNum") {
            if (value.cur && Object.keys(value.cur).length != 0) {
              // window.setTimeout(() => {
              if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
                error: Error()
              }), mainGameViewModel) : mainGameViewModel).isUnMount) {
                return;
              }

              if (!this.userCard || this.userCard.length === 0) {
                return;
              }

              var _item3 = this.props.allCardType[4];
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_usercard_type", this.userCard[3]).getComponent(Sprite).spriteFrame = _item3 > 2 ? (_crd && getSpecialCard === void 0 ? (_reportPossibleCrUseOfgetSpecialCard({
                error: Error()
              }), getSpecialCard) : getSpecialCard)(_item3) : (_crd && getSpecialCard === void 0 ? (_reportPossibleCrUseOfgetSpecialCard({
                error: Error()
              }), getSpecialCard) : getSpecialCard)(3);
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_usercard_type", this.userCard[3]).active = _item3 > 2;
              ; //这里是特殊奖

              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_label_carduser_losenum", this.userCard[3]).getComponent(Label).string = value.cur.num1 + ":" + value.cur.num2;
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_label_carduser_losenum", this.userCard[3]).active = value.cur.win === 2;
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_label_carduser_winnum", this.userCard[3]).getComponent(Label).string = value.cur.num1 + ":" + value.cur.num2;
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_label_carduser_winnum", this.userCard[3]).active = _item3 > 2 ? false : value.cur.win === 1;

              if (value.cur.win === 1) {
                (_crd && betAreaViewModel === void 0 ? (_reportPossibleCrUseOfbetAreaViewModel({
                  error: Error()
                }), betAreaViewModel) : betAreaViewModel).comp.playWinArea(4);
              } // },500)

            }
          }

          if (key === "allCardType") {
            window.setTimeout(() => {
              if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
                error: Error()
              }), mainGameViewModel) : mainGameViewModel).isUnMount) {
                return;
              }

              if (!value.cur) {
                return;
              }

              ;
              value.cur.forEach((item, i) => {
                if (item != 2 && i != 0 && this.userCard.length != 0) {
                  // window.setTimeout(() => {
                  (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                    error: Error()
                  }), getNodeByNameDeep) : getNodeByNameDeep)("props_label_carduser_winnum", this.userCard[i - 1]).active = false;
                  (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                    error: Error()
                  }), getNodeByNameDeep) : getNodeByNameDeep)("props_usercard_type", this.userCard[i - 1]).getComponent(Sprite).spriteFrame = (_crd && getSpecialCard === void 0 ? (_reportPossibleCrUseOfgetSpecialCard({
                    error: Error()
                  }), getSpecialCard) : getSpecialCard)(item);
                  (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                    error: Error()
                  }), getNodeByNameDeep) : getNodeByNameDeep)("props_usercard_type", this.userCard[i - 1]).active = true; //这里是特殊奖
                  // },500)
                }
              });
            }, 600);
          }

          if (key === "blackPoker") {
            // console.log("blackPoker",value.cur);
            this.createCard(this.userCard[0], 0, value.cur);
          }

          if (key === "redPoker") {
            // console.log("redPoker",value.cur);
            this.createCard(this.userCard[1], 1, value.cur);
          }

          if (key === "plumPoker") {
            // console.log("plumPoker",value.cur);
            this.createCard(this.userCard[2], 2, value.cur);
          }

          if (key === "diamondPoker") {
            // console.log("diamondPoker",value.cur);
            this.createCard(this.userCard[3], 3, value.cur);
          }

          if (key === "gameStatus") {
            if (value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).BET) {
              if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
                error: Error()
              }), mainGameViewModel) : mainGameViewModel).isUnMount) {
                return;
              }

              this.areaInfo.forEach((item, index) => {
                var poker = instantiate((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
                  error: Error()
                }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                  error: Error()
                }), PrefabPathDefine) : PrefabPathDefine).MAIN_CARD_USER).source);
                var pokerPosition = new Vec3(0, 0, 1); // let	pokerPosition = getNodePositionInCanvas(this.node);

                poker.setPosition(pokerPosition.x + index * 220, pokerPosition.y);
                this.userCard.push(poker);
                this.node.parent.addChild(poker);
                window.setTimeout(() => {
                  if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
                    error: Error()
                  }), mainGameViewModel) : mainGameViewModel).isUnMount) {
                    return;
                  }

                  (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                    error: Error()
                  }), getNodeByNameDeep) : getNodeByNameDeep)("props_usercard_num_query", poker).active = true;
                  (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                    error: Error()
                  }), getNodeByNameDeep) : getNodeByNameDeep)("props_spr_usercard_num_bg", poker).active = true;
                }, 2000);
              });
            } else if (value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).STOP_BET) {
              window.setTimeout(() => {
                if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
                  error: Error()
                }), mainGameViewModel) : mainGameViewModel).isUnMount) {
                  return;
                }

                this.playAnimation();
              }, 1000);
            } else {
              // this.findCardUser()
              this.clearCardArr();
            }
          }
        }
        /** 初始化 牌 改变资源 */


        createCard(parentNode, type, cardInfos) {
          // console.log("this.userCard",this.userCard);
          // console.log("cardInfos1111111111",parentNode,cardInfos);
          if (!parentNode || !cardInfos) {
            return;
          }

          (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("props_user_all_card", parentNode).removeAllChildren();
          var cardInfo = cardInfos;
          cardInfo.forEach((item, index) => {
            var card = instantiate((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
              error: Error()
            }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine).MAIN_CARD_SMALL).source);
            var itemCard = this.getCard(item);
            var num = 0;
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("props_skeleton_rollcard", card).active = true;
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("spr_card_bg", card).active = false;

            if (index === 1) {
              num = 38;
            } else if (index === 2) {
              num = 80;
            } else if (index === 3) {
              num = 118;
            }

            var X = -388 + num;
            card.setPosition(X, -155);
            var itemCardNum = (_crd && sumCard === void 0 ? (_reportPossibleCrUseOfsumCard({
              error: Error()
            }), sumCard) : sumCard)(itemCard.up, itemCard.down);

            if (type === 0) {
              var newCard = {
                cardNum: item,
                cardSum: itemCardNum,
                up: itemCard.up,
                down: itemCard.down,
                card: card
              };
              this.blackCard.push(newCard);
            } else if (type === 1) {
              var _newCard = {
                cardNum: item,
                cardSum: itemCardNum,
                up: itemCard.up,
                down: itemCard.down,
                card: card
              };
              this.redCard.push(_newCard);
            } else if (type === 2) {
              var _newCard2 = {
                cardNum: item,
                cardSum: itemCardNum,
                up: itemCard.up,
                down: itemCard.down,
                card: card
              };
              this.plumCard.push(_newCard2);
            } else if (type === 3) {
              var _newCard3 = {
                cardNum: item,
                cardSum: itemCardNum,
                up: itemCard.up,
                down: itemCard.down,
                card: card
              };
              this.diamondCard.push(_newCard3);
            }

            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("spr_card_up", card).getComponent(Sprite).spriteFrame = this.getSpriteFrame(itemCard.up);
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("spr_card_down", card).getComponent(Sprite).spriteFrame = this.getSpriteFrame(itemCard.down);
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("props_user_all_card", parentNode).addChild(card);
          });
        }
        /**翻牌动画 */


        playAnimation() {
          // console.log("this.userCard",this.userCard);
          if (this.userCard.length === 0) {
            return;
          }

          this.userCard.forEach((itemCard, index) => {
            // playTurnCard()
            var banker;
            this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
              error: Error()
            }), Task) : Task)(done => {
              // console.log("111");
              (_crd && playTurnCard === void 0 ? (_reportPossibleCrUseOfplayTurnCard({
                error: Error()
              }), playTurnCard) : playTurnCard)();
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_user_all_card", itemCard).children.forEach(c => {
                (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                  error: Error()
                }), getNodeByNameDeep) : getNodeByNameDeep)("props_skeleton_rollcard", c).active = true; // getNodeByNameDeep("props_skeleton_rollcard",c).getComponent(sp.Skeleton).animation="animation";
              });
              window.setTimeout(() => done(), 100);
            }), false).joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
              error: Error()
            }), Task) : Task)(done => {
              // console.log("222");
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_user_all_card", itemCard).children.forEach(c => {
                (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                  error: Error()
                }), getNodeByNameDeep) : getNodeByNameDeep)("spr_card_bg", c).active = true;
                (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                  error: Error()
                }), getNodeByNameDeep) : getNodeByNameDeep)("props_skeleton_rollcard", c).active = false;
              });

              if (index === 0) {
                banker = this.blackCard;
              } else if (index === 1) {
                banker = this.redCard;
              } else if (index === 2) {
                banker = this.plumCard;
              } else if (index === 3) {
                banker = this.diamondCard;
              } // console.log("banker111111",banker);


              window.setTimeout(() => done(), 100);
            }), false).joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
              error: Error()
            }), Task) : Task)(done => {
              // console.log("3333");
              var userAllCard = [];
              userAllCard.push((_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                error: Error()
              }), gameCacheData) : gameCacheData).newBlackPoker);
              userAllCard.push((_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                error: Error()
              }), gameCacheData) : gameCacheData).newRedPoker);
              userAllCard.push((_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                error: Error()
              }), gameCacheData) : gameCacheData).newPlumPoker);
              userAllCard.push((_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                error: Error()
              }), gameCacheData) : gameCacheData).newDiamondPoker); // console.log("banker22222222",banker);

              var bankerItem = (_crd && restructureCard === void 0 ? (_reportPossibleCrUseOfrestructureCard({
                error: Error()
              }), restructureCard) : restructureCard)(banker, userAllCard[index]);

              if (!bankerItem || !bankerItem.newArray) {
                return;
              }

              ;
              bankerItem.newArray.forEach((item, i) => {
                // console.log("item111111",item);
                var result = this.props.cardType;
                var endP = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).cardItemPosition[1][i];
                tween(item.card).to(0.6, {
                  position: new Vec3(endP.x, endP.y)
                }).call(() => {
                  // if(){}//需要判定比例情况来展示比例还是特殊奖，特殊奖共有5种，需要判定用哪种资源
                  // console.log("bankerItem.result-------",bankerItem.result);
                  if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
                    error: Error()
                  }), mainGameViewModel) : mainGameViewModel).isUnMount) {
                    return;
                  }

                  (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                    error: Error()
                  }), getNodeByNameDeep) : getNodeByNameDeep)("props_usercard_num_query", itemCard).active = false;
                  (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                    error: Error()
                  }), getNodeByNameDeep) : getNodeByNameDeep)("props_label_carduser_losenum", itemCard).getComponent(Label).string = bankerItem.max + ":" + bankerItem.min;
                  (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                    error: Error()
                  }), getNodeByNameDeep) : getNodeByNameDeep)("props_label_carduser_losenum", itemCard).active = result[index + 1] <= 2; //这里是输的比例展示.需要判定输赢

                  (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                    error: Error()
                  }), getNodeByNameDeep) : getNodeByNameDeep)("props_label_carduser_winnum", itemCard).getComponent(Label).string = bankerItem.max + ":" + bankerItem.min;
                  (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                    error: Error()
                  }), getNodeByNameDeep) : getNodeByNameDeep)("props_usercard_type", itemCard).getComponent(Sprite).spriteFrame = result[index + 1] > 2 ? (_crd && getSpecialCard === void 0 ? (_reportPossibleCrUseOfgetSpecialCard({
                    error: Error()
                  }), getSpecialCard) : getSpecialCard)(result[index + 1]) : (_crd && getSpecialCard === void 0 ? (_reportPossibleCrUseOfgetSpecialCard({
                    error: Error()
                  }), getSpecialCard) : getSpecialCard)(3);
                  (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                    error: Error()
                  }), getNodeByNameDeep) : getNodeByNameDeep)("props_usercard_type", itemCard).active = result[index + 1] > 2; //这里是特殊奖

                  (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                    error: Error()
                  }), getNodeByNameDeep) : getNodeByNameDeep)("props_label_carduser_winnum", itemCard).active = result[index + 1] <= 2 && this.props.areaWinLose[index] === 1;
                  (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                    error: Error()
                  }), getNodeByNameDeep) : getNodeByNameDeep)("bandar_userbet", itemCard).active = true;
                  var isBet;

                  if (!this.props.memberBet) {
                    isBet = true;
                    /**没有下注 */
                  } else {
                    isBet = !this.props.memberBet.hasOwnProperty(index + 1);
                  }

                  (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                    error: Error()
                  }), getNodeByNameDeep) : getNodeByNameDeep)("label_userbet_no", itemCard).active = isBet;
                  /**没有下注ui节点 */

                  if (!isBet) {
                    /**若用户下注 区域下ui节点展示情况*/
                    var rateNode = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                      error: Error()
                    }), getNodeByNameDeep) : getNodeByNameDeep)("label_userbet_rate", itemCard);
                    var winNode = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                      error: Error()
                    }), getNodeByNameDeep) : getNodeByNameDeep)("label_userbet_win", itemCard);
                    var loseNode = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                      error: Error()
                    }), getNodeByNameDeep) : getNodeByNameDeep)("label_userbet_lose", itemCard);
                    var rate = this.props.allCardRate[index] - 1; // console.log("this.props.memberBet[index + 1]",this.props.memberBet[index + 1],index + 1);

                    var winLoseNum = this.props.memberBet[index + 1] * rate; // console.log("winLoseNum",winLoseNum);

                    rateNode.getComponent(Label).string = "x" + rate;
                    winNode.getComponent(Label).string = "+" + (_crd && formatNumber === void 0 ? (_reportPossibleCrUseOfformatNumber({
                      error: Error()
                    }), formatNumber) : formatNumber)(winLoseNum);
                    loseNode.getComponent(Label).string = "-" + (_crd && formatNumber === void 0 ? (_reportPossibleCrUseOfformatNumber({
                      error: Error()
                    }), formatNumber) : formatNumber)(winLoseNum);
                    rateNode.active = true;
                    winNode.active = this.props.areaWinLose[index] === 1;
                    loseNode.active = this.props.areaWinLose[index] === 2;
                  }
                }).start();
              });
              window.setTimeout(() => done(), 400);
            }), false);
          });
        }

        clearCardArr() {
          this.blackCard = [];
          this.redCard = [];
          this.plumCard = [];
          this.diamondCard = [];
          this.dispatch((_crd && setMemberBetAction === void 0 ? (_reportPossibleCrUseOfsetMemberBetAction({
            error: Error()
          }), setMemberBetAction) : setMemberBetAction)(null));
          this.userCard.forEach(item => {
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("props_usercard_num_query", item).active = false;
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("props_spr_usercard_num_bg", item).active = false;
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("props_usercard_type", item).active = false;
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("props_label_carduser_losenum", item).active = false;
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("props_label_carduser_winnum", item).active = false;
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("bandar_userbet", item).active = false;
            this.node.parent.removeChild(item);
          });
          this.userCard = [];
          this.taskScheduler.destoryQueue();
        }

        destroyCallBack() {
          this.taskScheduler.destoryQueue();
        }

        createUserCard() {
          this.areaInfo.forEach((item, index) => {
            var poker = instantiate((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
              error: Error()
            }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine).MAIN_CARD_USER).source);
            var pokerPosition;

            if (this.node) {
              pokerPosition = (_crd && getNodePositionInCanvas === void 0 ? (_reportPossibleCrUseOfgetNodePositionInCanvas({
                error: Error()
              }), getNodePositionInCanvas) : getNodePositionInCanvas)(this.node);
            }

            poker.setPosition(pokerPosition.x + index * 220, pokerPosition.y);

            for (var i = 0; i < 4; i++) {
              var card = instantiate((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
                error: Error()
              }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                error: Error()
              }), PrefabPathDefine) : PrefabPathDefine).MAIN_CARD_SMALL).source);
              var num = 0;
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_skeleton_rollcard", card).active = true;
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("spr_card_bg", card).active = false;

              if (i === 1) {
                num = 38;
              } else if (i === 2) {
                num = 80;
              } else if (i === 3) {
                num = 118;
              }

              var X = -388 + num;
              card.setPosition(X, -155);
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_user_all_card", poker).addChild(card);
            }

            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("bandar_userbet", poker).active = true;
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("label_userbet_no", poker).active = true;
            this.userCard.push(poker);
            this.node.parent.addChild(poker);
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("props_spr_usercard_num_bg", poker).active = true;
          });
        }

        getSpriteFrame(result) {
          var fileName = '';

          if (result === 0) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDAR_POKER0;
          } else if (result === 1) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDAR_POKER1;
          } else if (result === 2) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDAR_POKER2;
          } else if (result === 3) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDAR_POKER3;
          } else if (result === 4) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDAR_POKER4;
          } else if (result === 5) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDAR_POKER5;
          } else if (result === 6) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDAR_POKER6;
          }

          return (_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile(fileName).source;
        }
        /**获取每张牌的组型 */


        getCard(cardT) {
          return (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).cardType[cardT];
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ef27c9877f4da41601a5f93ba4c821a8ebf2abaa.js.map