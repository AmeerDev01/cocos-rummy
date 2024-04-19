System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, tween, UITransform, Vec3, bezier, game, Game, BaseComponent, formatNumber, getNodeByNameDeep, getNodePositionInCanvas, BetType, gameCacheData, GameStatus, global, lang, ToastPosition, addToastAction, ChipViewModel, mainGameViewModel, playChip, playGetCoin, sourceManageSelector, PrefabPathDefine, config, initBetData, SKT_MAG_TYPE, sktInstance, TaskScheduler, Task, changeGoldDataAction, footerViewModel, onlineViewModel, usersViewModel, _dec, _class, _crd, ccclass, property, Bandar_betArea;

  function removeComma(str) {
    const newStr = str.replace(/,/g, "");
    return newStr;
  }

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

  function _reportPossibleCrUseOfBetData(extras) {
    _reporterNs.report("BetData", "../type", _context.meta, extras);
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

  function _reportPossibleCrUseOfHeadType(extras) {
    _reporterNs.report("HeadType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSendBet(extras) {
    _reporterNs.report("SendBet", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTipsVo(extras) {
    _reporterNs.report("TipsVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToastPosition(extras) {
    _reporterNs.report("ToastPosition", "../../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChipViewModel(extras) {
    _reporterNs.report("ChipViewModel", "../viewModel/BandarChipViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmainGameViewModel(extras) {
    _reporterNs.report("mainGameViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayChip(extras) {
    _reporterNs.report("playChip", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayGetCoin(extras) {
    _reporterNs.report("playGetCoin", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSelector(extras) {
    _reporterNs.report("sourceManageSelector", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitBetData(extras) {
    _reporterNs.report("initBetData", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKT_MAG_TYPE(extras) {
    _reporterNs.report("SKT_MAG_TYPE", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktInstance(extras) {
    _reporterNs.report("sktInstance", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskScheduler(extras) {
    _reporterNs.report("TaskScheduler", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinUser(extras) {
    _reporterNs.report("WinUser", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeGoldDataAction(extras) {
    _reporterNs.report("changeGoldDataAction", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOffooterViewModel(extras) {
    _reporterNs.report("footerViewModel", "../viewModel/BandarGameBoardViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfonlineViewModel(extras) {
    _reporterNs.report("onlineViewModel", "../viewModel/BandarGameBoardViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfusersViewModel(extras) {
    _reporterNs.report("usersViewModel", "../viewModel/BandarGameBoardViewModel", _context.meta, extras);
  }

  _export("removeComma", removeComma);

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
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      bezier = _cc.bezier;
      game = _cc.game;
      Game = _cc.Game;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      formatNumber = _unresolved_3.formatNumber;
      getNodeByNameDeep = _unresolved_3.getNodeByNameDeep;
      getNodePositionInCanvas = _unresolved_3.getNodePositionInCanvas;
    }, function (_unresolved_4) {
      BetType = _unresolved_4.BetType;
      gameCacheData = _unresolved_4.gameCacheData;
      GameStatus = _unresolved_4.GameStatus;
    }, function (_unresolved_5) {
      global = _unresolved_5.global;
      lang = _unresolved_5.lang;
    }, function (_unresolved_6) {
      ToastPosition = _unresolved_6.ToastPosition;
      addToastAction = _unresolved_6.addToastAction;
    }, function (_unresolved_7) {
      ChipViewModel = _unresolved_7.default;
    }, function (_unresolved_8) {
      mainGameViewModel = _unresolved_8.mainGameViewModel;
      playChip = _unresolved_8.playChip;
      playGetCoin = _unresolved_8.playGetCoin;
      sourceManageSelector = _unresolved_8.sourceManageSelector;
    }, function (_unresolved_9) {
      PrefabPathDefine = _unresolved_9.PrefabPathDefine;
    }, function (_unresolved_10) {
      config = _unresolved_10.default;
      initBetData = _unresolved_10.initBetData;
    }, function (_unresolved_11) {
      SKT_MAG_TYPE = _unresolved_11.SKT_MAG_TYPE;
      sktInstance = _unresolved_11.sktInstance;
    }, function (_unresolved_12) {
      TaskScheduler = _unresolved_12.default;
      Task = _unresolved_12.Task;
    }, function (_unresolved_13) {
      changeGoldDataAction = _unresolved_13.changeGoldDataAction;
    }, function (_unresolved_14) {
      footerViewModel = _unresolved_14.footerViewModel;
      onlineViewModel = _unresolved_14.onlineViewModel;
      usersViewModel = _unresolved_14.usersViewModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "170f7J1ewlOPKk36EHBG6jR", "Bandar_betArea", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Label', 'Node', 'tween', 'UITransform', 'Vec3', 'bezier', 'Quat', 'Skeleton', 'sp', 'game', 'Game', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bandar_betArea", Bandar_betArea = (_dec = ccclass('Bandar_betArea'), _dec(_class = class Bandar_betArea extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.betLoading = false;
          this.betAreaInfo = new Map();
          // 是否锁定下注
          this.isLockBet = false;
          this.isShowGame = true;
          this.isFlyStar = false;
          this.areaInfo = [1, 2, 3, 4];
          this.lastArr = [];
          this.amountArr = [];
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
          this.sendBet = null;
          this.betId = 0;
          this.propertyNode = {
            props_btn_black: new Node(),
            props_btn_red: new Node(),
            props_btn_plum: new Node(),
            props_btn_diamond: new Node()
          };
          this.props = {
            gameStatus: null,
            gold: 0,
            selectChip: 1000,
            myInfo: null,
            newBetData: null,
            winArea: null,
            goldData: null,
            cardRate: null,
            allWinUsers: null,
            lastBet: [],
            tips: null,
            memberBet: null,
            cancelBetData: null
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
          this.propertyNode.props_btn_black.on(Node.EventType.TOUCH_END, () => {
            this.myBet((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
              error: Error()
            }), BetType) : BetType).BLACK);
          });
          this.propertyNode.props_btn_red.on(Node.EventType.TOUCH_END, () => {
            this.myBet((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
              error: Error()
            }), BetType) : BetType).RED);
          });
          this.propertyNode.props_btn_plum.on(Node.EventType.TOUCH_END, () => {
            this.myBet((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
              error: Error()
            }), BetType) : BetType).PLUM);
          });
          this.propertyNode.props_btn_diamond.on(Node.EventType.TOUCH_END, () => {
            this.myBet((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
              error: Error()
            }), BetType) : BetType).DIAMOND);
          });
        }

        useProps(key, value) {
          if (key === "selectChip") {}

          if (key === "newBetData" && value.cur) {
            if (!value.cur) {
              return;
            }

            if (value.cur.memberId === (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).memberId) {
              // this.amountArr.push(this.sendBet);	
              return;
            }

            ;
            this.flyChip(value.cur);
          }

          if (key === 'cancelBetData') {
            this.cancelBet(value.cur);
          }

          if (key === "goldData") {
            if (!value.cur || value.cur === undefined) {
              return;
            }

            ;

            if (value.cur && Object.keys(value.cur).length != 0) {
              for (let key in value.cur) {
                let areaNode = this.getNodeByBetType(this.getNodeToBetType(Number(key)));

                if (value.cur[key] === 0) {
                  (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                    error: Error()
                  }), getNodeByNameDeep) : getNodeByNameDeep)("Label_bet_all", areaNode).getComponent(Label).string = "";
                } else {
                  (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                    error: Error()
                  }), getNodeByNameDeep) : getNodeByNameDeep)("Label_bet_all", areaNode).getComponent(Label).string = (_crd && formatNumber === void 0 ? (_reportPossibleCrUseOfformatNumber({
                    error: Error()
                  }), formatNumber) : formatNumber)(value.cur[key]);
                }
              }
            }
          }

          if (key === "memberBet") {
            if (!value.cur || value.cur === undefined) {
              return;
            }

            ;

            if (Object.keys(value.cur).length != 0) {
              for (let key in value.cur) {
                let areaNode = this.getNodeByBetType(this.getNodeToBetType(Number(key)));

                if (value.cur[key] === 0) {
                  (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                    error: Error()
                  }), getNodeByNameDeep) : getNodeByNameDeep)("Label_bet_mine", areaNode).getComponent(Label).string = "";
                } else {
                  (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                    error: Error()
                  }), getNodeByNameDeep) : getNodeByNameDeep)("spr_bet_bg", areaNode).active = true;
                  (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                    error: Error()
                  }), getNodeByNameDeep) : getNodeByNameDeep)("Label_bet_mine", areaNode).getComponent(Label).string = (_crd && formatNumber === void 0 ? (_reportPossibleCrUseOfformatNumber({
                    error: Error()
                  }), formatNumber) : formatNumber)(value.cur[key]);
                }
              }
            }
          }

          if (key === "allWinUsers") {
            // console.log("allWinUsers",value.cur);
            if (!value.cur) {
              return;
            }

            this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
              error: Error()
            }), Task) : Task)(done => {
              window.setTimeout(() => {
                if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
                  error: Error()
                }), mainGameViewModel) : mainGameViewModel).isUnMount) {
                  return;
                }

                if (value.cur) {
                  value.cur.forEach(item => {
                    this.flyWinAreaToUser(item);
                  });
                }
              }, 100);
              window.setTimeout(() => done(), 1000);
            }), false).joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
              error: Error()
            }), Task) : Task)(done => {
              window.setTimeout(() => {
                if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
                  error: Error()
                }), mainGameViewModel) : mainGameViewModel).isUnMount) {
                  return;
                }

                if (!value.cur) {
                  return;
                }

                value.cur.forEach(item => {
                  if (item.memberId !== (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                    error: Error()
                  }), gameCacheData) : gameCacheData).memberId) {
                    if (item.index < 6 && item.index >= 0) {
                      (_crd && usersViewModel === void 0 ? (_reportPossibleCrUseOfusersViewModel({
                        error: Error()
                      }), usersViewModel) : usersViewModel).comp.copyWinAnimation(item.index);
                      (_crd && usersViewModel === void 0 ? (_reportPossibleCrUseOfusersViewModel({
                        error: Error()
                      }), usersViewModel) : usersViewModel).comp.playAddGold(item, item.gold);
                    } else if (item.index > 6) {
                      (_crd && onlineViewModel === void 0 ? (_reportPossibleCrUseOfonlineViewModel({
                        error: Error()
                      }), onlineViewModel) : onlineViewModel).comp.playWinAni();
                    }
                  } else {
                    (_crd && footerViewModel === void 0 ? (_reportPossibleCrUseOffooterViewModel({
                      error: Error()
                    }), footerViewModel) : footerViewModel).comp.palyAddUp(item);
                  }
                });
              }, 100);
              window.setTimeout(() => done(), 1000);
            }), false).joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
              error: Error()
            }), Task) : Task)(done => {
              window.setTimeout(() => {
                if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
                  error: Error()
                }), mainGameViewModel) : mainGameViewModel).isUnMount) {
                  return;
                } // 清理下注区域数据


                this.betAreaInfo.clear();
                this.clearBetWinAreaAni([1, 2, 3, 4]);
              }, 3000);
              window.setTimeout(() => done(), 1000);
            }));
          }

          if (key === "winArea") {}

          if (key === "lastBet") {}

          if (key === "gameStatus") {
            // console.log("gameStatus",value.cur);
            if (value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).STOP_BET) {
              if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
                error: Error()
              }), mainGameViewModel) : mainGameViewModel).isUnMount) {
                return;
              }

              this.lastArr = [...this.amountArr];
              this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                window.setTimeout(() => {
                  if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
                    error: Error()
                  }), mainGameViewModel) : mainGameViewModel).isUnMount) {
                    return;
                  }

                  if (value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
                    error: Error()
                  }), GameStatus) : GameStatus).STOP_BET && this.props) {
                    // console.log("this.props.winArea",this.props.winArea);
                    this.playWinAnimation(this.props.winArea);
                    this.flyToHeGuan();
                  }
                }, 4000);
                window.setTimeout(() => done(), 1000);
              }), false).joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                window.setTimeout(() => {
                  if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
                    error: Error()
                  }), mainGameViewModel) : mainGameViewModel).isUnMount) {
                    return;
                  }

                  this.flyChipToWinArea();
                }, 4000);
                window.setTimeout(() => done(), 1000);
              }), false);
            } else if (value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).WAIT) {
              this.betAreaInfo.clear();
              this.clearAllBetAreaGold();
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("Label_bet_all", this.propertyNode.props_btn_black).getComponent(Label).string = "";
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("Label_bet_all", this.propertyNode.props_btn_red).getComponent(Label).string = "";
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("Label_bet_all", this.propertyNode.props_btn_plum).getComponent(Label).string = "";
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("Label_bet_all", this.propertyNode.props_btn_diamond).getComponent(Label).string = "";
            } else if (value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).BET) {
              this.betLoading = false;
              this.areaInfo = [1, 2, 3, 4];
              this.clearBetWinAreaAni(this.areaInfo);
            }
          }
        }

        isBetStatus() {
          return this.props.gameStatus === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).BET;
        }
        /**
         * 自己下注
         * @param betType 
         * @returns 
         */


        myBet(betType) {
          if (!this.isBetStatus()) {
            //下注阶段才能下注
            return;
          } // 等待下注返回后才能进行下一次下注


          if (this.betLoading) {
            return;
          }

          if (this.props.tips && this.props.tips.length > 0) {
            return;
          }

          if (this.isLockBet = this.props.gold < 5000) {
            return;
          }

          if (this.props.gold < this.props.selectChip * 6) {
            // 提示用户余额不足
            let bet_remind = (_crd && footerViewModel === void 0 ? (_reportPossibleCrUseOffooterViewModel({
              error: Error()
            }), footerViewModel) : footerViewModel).comp.getPropertyNode().props_spr_bet_remind;
            bet_remind.active = true;
            window.setTimeout(() => {
              bet_remind.active = false;
            }, 2000); // global.hallDispatch(addToastAction({ content: "余额不足，您只能下注账户余额的1/6!" }));

            return;
          } // this.betId++


          const betData = (_crd && initBetData === void 0 ? (_reportPossibleCrUseOfinitBetData({
            error: Error()
          }), initBetData) : initBetData)(this.props.myInfo.index, this.props.myInfo.memberId, betType, this.props.selectChip);
          betData.isMyBet = true; //当前用户是否下注

          this.betLoading = true;
          this.sendBet = {
            roomId: (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).roomId,
            memberId: this.props.myInfo.memberId,
            memberName: this.props.myInfo.memberName,
            gold: betData.betAmount,
            betType: betData.betType,
            isMe: betData.isMyBet,
            betId: betData.betId
          }; // 下注信息发送给服务器

          (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).BET_ALL, this.sendBet);
          this.flyChip(betData); //    this.amountArr.push(this.sendBet);
        }
        /**
         * 飞筹码
         * @param betData 
         * @param isFly 是否飞筹码的动画，false用于刚进入初始化筹码
         */


        flyChip(betData, isFly = true) {
          if (betData.isMyBet) {
            this.betLoading = false;
          } // 下注筹码不存在，不处理


          if (!(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).chipTypes.find(v => v.value === betData.betAmount)) {
            return;
          }

          isFly = betData.isFly;
          isFly = this.isShowGame;
          const betArea = this.getNodeByBetType(betData.betType).getChildByName("Layout_bet_chips");
          const viewModel = this.createChip(betData.betAmount, betArea);
          let radom = Math.random() * 90 - 90; //旋转角度

          const chipNode = viewModel.comp.node;
          const endPosition = this.randomBetEndPosition(betArea);
          this.addBetInfo(betData, viewModel);
          this.updateAllBet();

          if (isFly) {
            (_crd && playChip === void 0 ? (_reportPossibleCrUseOfplayChip({
              error: Error()
            }), playChip) : playChip)();
            const uiTransform = this.node.getComponent(UITransform);
            const startPosition = this.getBetStartPosition(betData);
            chipNode.setWorldPosition(uiTransform.convertToWorldSpaceAR(startPosition));
            tween(chipNode).to(0.3, {
              position: endPosition,
              angle: -radom
            }, {
              easing: 'quintOut'
            }).start(); // if (!isWinRateBet && betData.index === config.gameOption.winRateMaxIndex) {

            if (betData.index === (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.winRateMaxIndex) {
              //判定是否是未展示星星的区域数组 若未展示，返回区域下标 否（即已展示） 返回-1
              let betTypeIndex = this.areaInfo.indexOf(betData.betType);

              if (betTypeIndex >= 0) {
                this.areaInfo.splice(betTypeIndex, 1); //移除展示了的区域
                // 飞星星

                this.flyStar(this.getNodeByBetType(betData.betType), betData.betType);
              }
            }
          } // this.updateBetAreaGold(betData, betArea.parent);

        }
        /**下注总筹码 */


        updateAllBet() {// for(let key in gameCacheData.goldData){
          // 	let areaNode = this.getNodeByBetType(this.getNodeToBetType(Number(key)))
          // 	if(gameCacheData.goldData[key] === 0){
          // 		getNodeByNameDeep("Label_bet_all", areaNode).getComponent(Label).string = ""
          // 	}else{
          // 		getNodeByNameDeep("Label_bet_all", areaNode).getComponent(Label).string = formatNumber(gameCacheData.goldData[key]);
          // 	}
          // }
        }
        /**清除所有下注区域的金币 */


        clearAllBetAreaGold() {
          this.dispatch((_crd && changeGoldDataAction === void 0 ? (_reportPossibleCrUseOfchangeGoldDataAction({
            error: Error()
          }), changeGoldDataAction) : changeGoldDataAction)({
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0
          }));
          this.clearBetAreaGold(this.propertyNode.props_btn_black);
          this.clearBetAreaGold(this.propertyNode.props_btn_red);
          this.clearBetAreaGold(this.propertyNode.props_btn_plum);
          this.clearBetAreaGold(this.propertyNode.props_btn_diamond);
          this.hideAllWinRate();
          this.areaInfo = [1, 2, 3, 4];
          this.clearBetWinAreaAni(this.areaInfo); // this.lastArr = [...this.amountArr];//

          this.amountArr = []; // this.betId = 0;
        }

        clearBetAreaGold(betArea) {
          betArea.getChildByName("Layout_bet_chips").removeAllChildren();
          this.updateBetAreaGold({
            index: 0,
            memberId: "",
            betAmount: 0,
            betType: null,
            betId: '',
            totalBetAmount: 0,
            meTotalBetAmount: 0
          }, betArea);
        }
        /**清除赢的区域动画 */


        clearBetWinAreaAni(winArea) {
          winArea.forEach(item => {
            let winAreaNode = this.getNodeByBetType(item);
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("animation_win1", winAreaNode).active = false;
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("animation_win2", winAreaNode).active = false;
          });
        }
        /** 播放赢的区域动画效果 */


        playWinAnimation(winArea) {
          if (!winArea || winArea.length === 0) {
            return;
          }

          winArea.forEach((item, index) => {
            let winAreaNode = this.getNodeByBetType(item);
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("animation_win1", winAreaNode).active = true;
            window.setTimeout(() => {
              if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
                error: Error()
              }), mainGameViewModel) : mainGameViewModel).isUnMount) {
                return;
              }

              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("animation_win2", winAreaNode).active = true;
            }, 500);
          });
        }
        /** 播放赢的区域动画效果 */


        playWinArea(type) {
          let winAreaNode = this.getNodeByBetType(type);
          (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("animation_win1", winAreaNode).active = true;
          window.setTimeout(() => {
            if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
              error: Error()
            }), mainGameViewModel) : mainGameViewModel).isUnMount) {
              return;
            }

            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("animation_win2", winAreaNode).active = true;
          }, 500);
        }
        /** 下注总值 用户下注值 */


        updateBetAreaGold(betData, betArea) {
          if (betData.totalBetAmount === 0) {
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("Label_bet_all", betArea).getComponent(Label).string = "";
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("Label_bet_mine", betArea).getComponent(Label).string = "";
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("Label_bet_mine", betArea).parent.active = betData.meTotalBetAmount > 0;
          } else {// getNodeByNameDeep("Label_bet_all", betArea).getComponent(Label).string = formatNumber(this.props.goldData);
          } // if (betData.memberId === gameCacheData.memberId) {
          // 	getNodeByNameDeep("spr_bet_bg", betArea).active = true;
          // 	let mineAmount = getNodeByNameDeep("Label_bet_mine", betArea).getComponent(Label).string;
          // 	let totalMine = Number(removeComma(mineAmount) )+betData.betAmount;
          // 	getNodeByNameDeep("Label_bet_mine", betArea).getComponent(Label).string = formatNumber(totalMine);
          // 	getNodeByNameDeep("Label_bet_mine", betArea).parent.active = totalMine > 0;
          // }

        }
        /** 创造对应选取的金币  */


        createChip(chipValue, parent) {
          return new (_crd && ChipViewModel === void 0 ? (_reportPossibleCrUseOfChipViewModel({
            error: Error()
          }), ChipViewModel) : ChipViewModel)().mountView((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MAIN_CHIP).source).appendTo(parent).connect().setProps({
            value: chipValue
          });
        }
        /** 获得下注筹码飞的开始坐标 */


        getBetStartPosition(betData) {
          if (betData.isMyBet) {
            return new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.myHeadPosition.x, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.myHeadPosition.y);
          }

          if (betData.index >= (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).gameOption.seatNumber) {
            return new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.onlineNumberPosition.x, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.onlineNumberPosition.y);
          }

          return new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).headLocations[betData.index].x, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).headLocations[betData.index].y);
        }
        /**筹码飞向头像的结束坐标 */


        getFlyToHeadEndPosition(betInfo) {
          if (betInfo.isMe) {
            // 播放获得金币的音效
            (_crd && playGetCoin === void 0 ? (_reportPossibleCrUseOfplayGetCoin({
              error: Error()
            }), playGetCoin) : playGetCoin)();
            return new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.myHeadPosition.x, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.myHeadPosition.y);
          }

          if (betInfo.index >= (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).gameOption.seatNumber) {
            return new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.onlineNumberPosition.x, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.onlineNumberPosition.y);
          }

          return new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).headLocations[betInfo.index].x, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).headLocations[betInfo.index].y);
        }
        /** 获得下注筹码飞的结束坐标 */


        randomBetEndPosition(betArea) {
          const uiTransform = betArea.getComponent(UITransform);
          const width = uiTransform.width * 0.8;
          const height = uiTransform.height * 0.6;
          let x = width / 2 - Math.random() * width;
          let y = height / 2 - Math.random() * height;
          return new Vec3(x, y);
        }
        /** 金币飞向荷官 */


        flyToHeGuan() {
          //this.betAreaInfo 的chip存储了金币节点，可遍历它进行位置移动
          // playGetCoin()
          let chips = [];
          this.betAreaInfo.forEach((v, k) => {
            if (!this.props.winArea) {
              //没有中奖区域
              v.forEach(betInfo => {
                chips = chips.concat(betInfo.chips);
              });
            } // 找出未中奖的区域


            if (this.props.winArea) {
              // playGetCoin()
              if (!this.props.winArea.find(betType => betType === k)) {
                v.forEach(betInfo => {
                  chips = chips.concat(betInfo.chips);
                });
              }
            }
          }); //未中奖区域

          this.FlyLossAreaToHe(chips);
        }
        /** 未中奖区域飞金币到荷官位置 */


        FlyLossAreaToHe(chips) {
          if (chips.length != 0) {
            (_crd && playGetCoin === void 0 ? (_reportPossibleCrUseOfplayGetCoin({
              error: Error()
            }), playGetCoin) : playGetCoin)();
          }

          chips.forEach(chip => {
            const chipNode = chip.comp.node;
            const endPositon = new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.dealerPosition.x, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.dealerPosition.y);
            const uiTransform = this.node.getComponent(UITransform);
            tween(chipNode).to(0.8, {
              worldPosition: uiTransform.convertToWorldSpaceAR(endPositon),
              scale: new Vec3(0.1, 0.1)
            }, {
              easing: 'quintOut'
            }).call(() => {
              // this.lossAnimationEnd();
              chip.unMount();
            }).start();
          });
        }
        /** 荷官飞金币到赢的区域 */


        flyChipToWinArea() {
          //需要当前赢的区域 获得赔率，添加对应翻倍金币移动到对应赢的区域
          // console.log("this.props.goldData",this.props.goldData);
          //  console.log("this.props.goldData",!this.props.goldData);
          //  console.log("this.props.winArea",this.props.winArea);
          if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
            error: Error()
          }), mainGameViewModel) : mainGameViewModel).isUnMount) {
            return;
          }

          if (!this.props || !this.props.goldData || !this.props.winArea) {
            //没有任何下注 没有赢的区域
            return;
          } else {
            (_crd && playGetCoin === void 0 ? (_reportPossibleCrUseOfplayGetCoin({
              error: Error()
            }), playGetCoin) : playGetCoin)();
          }

          this.props.winArea.forEach((item, index) => {
            const betData = {
              betType: item,
              betAmount: this.props.goldData[item]
            };
            this.flyWinChip(betData, index);
          });
        }
        /**
         * 获得自己的头像位置
         * @returns 
         */


        getMyHeadPosition() {
          return new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).gameOption.myHeadPosition.x, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).gameOption.myHeadPosition.y);
        }
        /**筹码飞向用户头像 */


        chipFlyToHead(chip, betInfo) {
          const chipNode = chip.comp.node;
          const endPositon = betInfo ? this.getFlyToHeadEndPosition(betInfo) : this.getMyHeadPosition();
          const uiTransform = this.node.getComponent(UITransform);
          tween(chipNode).to(0.3, {
            worldPosition: uiTransform.convertToWorldSpaceAR(endPositon)
          }).call(() => {
            chip.unMount();
          }).start();
        }
        /** 赢的区域飞金币到用户头像 */


        flyWinAreaToUser(betInfo, isFly = true) {
          // console.log("this.props.winArea touser",this.props.winArea);
          // console.log("betInfo",betInfo);
          if (!this.props.winArea) {
            return;
          }

          (_crd && playGetCoin === void 0 ? (_reportPossibleCrUseOfplayGetCoin({
            error: Error()
          }), playGetCoin) : playGetCoin)();
          this.props.winArea.forEach(v => {
            const betInfos = this.betAreaInfo.get(v);

            if (betInfos) {
              betInfos.forEach(betInfo => {
                // console.log("betinfo22",betInfo);
                betInfo.chips.forEach(chip => {
                  const chipNode = chip.comp.node;
                  const endPositon = this.getFlyToHeadEndPosition(betInfo);
                  const uiTransform = this.node.getComponent(UITransform);
                  tween(chipNode).to(0.8, {
                    worldPosition: uiTransform.convertToWorldSpaceAR(endPositon),
                    scale: new Vec3(0.1, 0.1)
                  }, {
                    easing: 'quintOut'
                  }).call(() => {
                    chip.unMount();
                  }).start();
                });
              });
            }
          });
        }
        /** 飞向赢 区域*/


        flyWinChip(winBetData, index, isFly = true) {
          const betInfos = this.betAreaInfo.get(winBetData.betType);

          if (!betInfos) {
            return 0;
          }

          isFly = this.isShowGame;
          let odds = this.props.cardRate[index] - 1;
          const betArea = this.getNodeByBetType(winBetData.betType).getChildByName("Layout_bet_chips"); // console.log("this.props.cardRate",this.props.cardRate);

          const copyBetInfo = this.copyBetInfo(betInfos, betArea, odds);
          let chips = [];
          copyBetInfo.forEach(v => chips = chips.concat(v.chips));
          const uiTransform = this.node.getComponent(UITransform); // log("healerFlyToBetArea === ", chips.length);

          chips.forEach(v => {
            const startPosition = new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.dealerPosition.x, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.dealerPosition.y);
            const endPositon = this.randomBetEndPosition(betArea);
            const chipNode = v.comp.node;
            chipNode.setWorldPosition(uiTransform.convertToWorldSpaceAR(startPosition));
            tween(chipNode).to(0.5, {
              position: endPositon
            }, {
              easing: 'quintOut'
            }) // .call(() => { this.flyHealerToBetAreaEnd() })
            .start();
          }); // 把荷官赔付的筹码加入到用户下注的数组中去

          copyBetInfo.forEach(v => {
            const betInfo = betInfos.find(bb => bb.userId === v.userId);
            betInfo.chips = betInfo.chips.concat(v.chips);
          });
        }

        copyBetInfo(betInfos, parent, odds) {
          const arr = [];
          new Array(odds).fill(0).forEach(v => {
            betInfos.forEach(betInfo => {
              arr.push({
                index: betInfo.index,
                userId: betInfo.userId,
                isMe: betInfo.isMe,
                chips: betInfo.chips.filter(chip => chip.comp.props).map(chip => this.createChip(chip.comp.props.value, parent))
              });
            });
          });
          return arr;
        }
        /**
         * 添加下注信息
         * @param betData 
         * @param viewModel 
         */


        addBetInfo(betData, viewModel) {
          let betInfos = this.betAreaInfo.get(betData.betType);

          if (!betInfos) {
            betInfos = [];
            this.betAreaInfo.set(betData.betType, betInfos);
          }

          let betInfo = betInfos.find(v => v.userId === betData.memberId);

          if (betInfo) {
            betInfo.chips.push(viewModel);
          } else {
            betInfos.push({
              index: betData.index,
              userId: betData.memberId,
              isMe: betData.isMyBet,
              chips: [viewModel]
            });
          }
        }
        /**显示星星在下注区域 */


        showWinRate(betType) {
          if (!this.node || !this.node.isValid) return;
          this.getStar(this.getNodeByBetType(betType), betType).active = true;
        }
        /**获得星星 */


        getStar(parentNode, betType) {
          return parentNode.getChildByName("spr_bet_star");
        }
        /** 隐藏星星 */


        hideAllWinRate() {
          if (!this.node || !this.node.isValid) return;
          this.propertyNode.props_btn_black.getChildByName("spr_bet_star").active = false;
          this.propertyNode.props_btn_red.getChildByName("spr_bet_star").active = false;
          this.propertyNode.props_btn_plum.getChildByName("spr_bet_star").active = false;
          this.propertyNode.props_btn_diamond.getChildByName("spr_bet_star").active = false;
        }
        /**飞星星 */


        flyStar(parentNode, betType) {
          const endPosition = (_crd && getNodePositionInCanvas === void 0 ? (_reportPossibleCrUseOfgetNodePositionInCanvas({
            error: Error()
          }), getNodePositionInCanvas) : getNodePositionInCanvas)(this.getStar(parentNode, betType));
          let starIcon = (_crd && usersViewModel === void 0 ? (_reportPossibleCrUseOfusersViewModel({
            error: Error()
          }), usersViewModel) : usersViewModel).comp.getPropertyNode().props_spr_icon; // let starIcon = getNodeByNameDeep("props_spr_icon",this.node.parent.getChildByName("prefabs_bandar_users"));

          const starNode = instantiate(starIcon);
          const startPosition = (_crd && getNodePositionInCanvas === void 0 ? (_reportPossibleCrUseOfgetNodePositionInCanvas({
            error: Error()
          }), getNodePositionInCanvas) : getNodePositionInCanvas)(starIcon);
          starNode.active = true;
          this.node.addChild(starNode);
          starNode.setPosition(startPosition);
          tween(starNode).to(0.5, {
            scale: new Vec3(0.8, 0.8)
          }).start();
          this.playWinRateTween(starNode, endPosition, 0.5, () => {
            this.scheduleOnce(() => {
              this.showWinRate(betType);
              starNode.destroy();

              if (this.isFlyStar) {
                this.isFlyStar = false;
              }
            }, 0.5);
          });
        }
        /**飞星星抛物线动画 */


        playWinRateTween(tweenNode, endPos, playTime, callBack) {
          const startPos = tweenNode.position;
          const startAngle = tweenNode.eulerAngles;
          const fruitTween = tween(startPos);
          const x = (startPos.x + endPos.x) / 2;
          const y = (startPos.y + endPos.y) / 2;
          const mixY = y + y * 0.6;
          const maxY = y + y * 0.6;
          const mixX = x;
          const maxX = x;

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

          fruitTween.parallel(tween().to(playTime, {
            x: endPos.x
          }, {
            progress: progressX,
            onUpdate: () => {
              tweenNode.isValid && tweenNode.setPosition(startPos);
            }
          }), tween().to(playTime, {
            y: endPos.y
          }, {
            progress: progressY,
            onUpdate: () => {
              tweenNode.isValid && tweenNode.setPosition(startPos);
            }
          })).start();
          tween(startAngle).to(playTime, {
            z: 360
          }, {
            onUpdate: () => {
              if (tweenNode.isValid) {
                tweenNode.eulerAngles = startAngle;
              }
            }
          }).call(() => callBack()).start();
        }
        /** 获取点击区域的节点 */


        getNodeByBetType(betType) {
          if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).BLACK === betType) {
            return this.propertyNode.props_btn_black;
          } else if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).RED === betType) {
            return this.propertyNode.props_btn_red;
          } else if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).PLUM === betType) {
            return this.propertyNode.props_btn_plum;
          } else if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).DIAMOND === betType) {
            return this.propertyNode.props_btn_diamond;
          }
        }

        getNodeToBetType(betType) {
          if (1 === betType) {
            return (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
              error: Error()
            }), BetType) : BetType).BLACK;
          } else if (2 === betType) {
            return (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
              error: Error()
            }), BetType) : BetType).RED;
          } else if (3 === betType) {
            return (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
              error: Error()
            }), BetType) : BetType).PLUM;
          } else if (4 === betType) {
            return (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
              error: Error()
            }), BetType) : BetType).DIAMOND;
          }
        }

        destroyCallBack() {
          this.taskScheduler.destoryQueue();
          this.taskScheduler.stopQueue(false);
        }

        cancelBet(cancelBetData) {
          // console.log("cancelBetData",cancelBetData);
          if (cancelBetData) {
            const betInfos = this.betAreaInfo.get(cancelBetData.betType); // console.log("betInfos",betInfos);

            if (betInfos === undefined) return;

            if (betInfos && betInfos.length > 0) {
              const chips = betInfos.find(v => v.userId === (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                error: Error()
              }), gameCacheData) : gameCacheData).memberId || v.isMe).chips; // console.log("chips",chips);

              for (let i = 0; i < chips.length; i++) {
                const chip = chips[i];

                if (chip.comp.props.value === cancelBetData.betAmount) {
                  chips.splice(i, 1);
                  this.chipFlyToHead(chip, undefined);
                  break;
                }
              }
            }

            const betArea = this.getNodeByBetType(cancelBetData.betType).getChildByName("Layout_bet_chips"); // this.updateBetAreaGold(cancelBetData, betArea.parent);

            const betAmount = cancelBetData.betAmount < 10000 ? cancelBetData.betAmount.formatAmountWithCommas() : cancelBetData.betAmount.formatAmountWithLetter();
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
              error: Error()
            }), addToastAction) : addToastAction)({
              position: (_crd && ToastPosition === void 0 ? (_reportPossibleCrUseOfToastPosition({
                error: Error()
              }), ToastPosition) : ToastPosition).MIDDLE,
              content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.InitGameModule.BetFaild, {}, {
                placeStr: "{0} 筹码下注失败"
              }).format(betAmount)
            }));
          }
        }

        bindUI() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=073a0cb78474d823817a6d4e2854596301863779.js.map