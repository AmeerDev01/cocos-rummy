System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Game, game, Node, BaseComponent, gameCacheData, GameStatus, setMyWinLose, playBtnClick, playMyLose, playMyWin, mainGameViewModel, SKT_MAG_TYPE, sktInstance, bankerCardViewModel, betAreaViewModel, loseViewModel, userCardViewModel, winViewModel, TaskScheduler, Task, setNewBetDataAction, setWinAreaAction, _dec, _class, _crd, ccclass, property, Bandar_gameBoard;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
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

  function _reportPossibleCrUseOfMemberInfoVo(extras) {
    _reporterNs.report("MemberInfoVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetMyWinLose(extras) {
    _reporterNs.report("setMyWinLose", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayBtnClick(extras) {
    _reporterNs.report("playBtnClick", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayMyLose(extras) {
    _reporterNs.report("playMyLose", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayMyWin(extras) {
    _reporterNs.report("playMyWin", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmainGameViewModel(extras) {
    _reporterNs.report("mainGameViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKT_MAG_TYPE(extras) {
    _reporterNs.report("SKT_MAG_TYPE", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktInstance(extras) {
    _reporterNs.report("sktInstance", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbankerCardViewModel(extras) {
    _reporterNs.report("bankerCardViewModel", "../viewModel/BandarGameBoardViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbetAreaViewModel(extras) {
    _reporterNs.report("betAreaViewModel", "../viewModel/BandarGameBoardViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfloseViewModel(extras) {
    _reporterNs.report("loseViewModel", "../viewModel/BandarGameBoardViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfuserCardViewModel(extras) {
    _reporterNs.report("userCardViewModel", "../viewModel/BandarGameBoardViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfwinViewModel(extras) {
    _reporterNs.report("winViewModel", "../viewModel/BandarGameBoardViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskScheduler(extras) {
    _reporterNs.report("TaskScheduler", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetNewBetDataAction(extras) {
    _reporterNs.report("setNewBetDataAction", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetWinAreaAction(extras) {
    _reporterNs.report("setWinAreaAction", "../store/actions/pokerDetail", _context.meta, extras);
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
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      gameCacheData = _unresolved_3.gameCacheData;
      GameStatus = _unresolved_3.GameStatus;
    }, function (_unresolved_4) {
      setMyWinLose = _unresolved_4.setMyWinLose;
    }, function (_unresolved_5) {
      playBtnClick = _unresolved_5.playBtnClick;
      playMyLose = _unresolved_5.playMyLose;
      playMyWin = _unresolved_5.playMyWin;
      mainGameViewModel = _unresolved_5.mainGameViewModel;
    }, function (_unresolved_6) {
      SKT_MAG_TYPE = _unresolved_6.SKT_MAG_TYPE;
      sktInstance = _unresolved_6.sktInstance;
    }, function (_unresolved_7) {
      bankerCardViewModel = _unresolved_7.bankerCardViewModel;
      betAreaViewModel = _unresolved_7.betAreaViewModel;
      loseViewModel = _unresolved_7.loseViewModel;
      userCardViewModel = _unresolved_7.userCardViewModel;
      winViewModel = _unresolved_7.winViewModel;
    }, function (_unresolved_8) {
      TaskScheduler = _unresolved_8.default;
      Task = _unresolved_8.Task;
    }, function (_unresolved_9) {
      setNewBetDataAction = _unresolved_9.setNewBetDataAction;
    }, function (_unresolved_10) {
      setWinAreaAction = _unresolved_10.setWinAreaAction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "77c2cBhTFtGfbIDvP4EnnLi", "Bandar_gameBoard", undefined);

      __checkObsolete__(['_decorator', 'Game', 'game', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bandar_gameBoard", Bandar_gameBoard = (_dec = ccclass('Bandar_gameBoard'), _dec(_class = class Bandar_gameBoard extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          // private usersInfo:MemberInfoVo[]=gameCacheData.leftUsers.concat(gameCacheData.rightUsers)
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
          this.isShowGame = true;
          this.propertyNode = {
            /** 打开历史记录 */
            props_bandar_ternd: new Node()
          };
          this.props = {
            countDown: 0,
            usersInfo: [],
            myInfo: null,
            myWinLose: 0,
            gameStatus: null,
            initGameStatus: null
          };
          this.events = {
            openHistoryPanel: () => {},
            openWinPanel: () => {},
            openLosePanel: () => {},
            sendGameShowEvent: () => {}
          };
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

            if (!(_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
              error: Error()
            }), mainGameViewModel) : mainGameViewModel).isUnMount) {
              if (this.node) {
                this.events.sendGameShowEvent();
              }
            }
          });
          this.propertyNode.props_bandar_ternd.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
              error: Error()
            }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
              error: Error()
            }), SKT_MAG_TYPE) : SKT_MAG_TYPE).HISTORY, (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).roomId);
            this.events.openHistoryPanel();
          });
        }

        useProps(key, value) {
          if (key === "usersInfo") {}

          if (key === "myWinLose") {
            if (value.cur === 0) {
              return;
            }

            this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
              error: Error()
            }), Task) : Task)(done => {
              window.setTimeout(() => {
                if (value.cur === 1) {
                  (_crd && playMyWin === void 0 ? (_reportPossibleCrUseOfplayMyWin({
                    error: Error()
                  }), playMyWin) : playMyWin)();
                  this.events.openWinPanel();
                  let myInfo = this.props.myInfo;
                  (_crd && winViewModel === void 0 ? (_reportPossibleCrUseOfwinViewModel({
                    error: Error()
                  }), winViewModel) : winViewModel).comp.updateWinsAndLosses(myInfo); // console.log("this.props.myInfo",this.props.myInfo);

                  this.closePopup();
                } else if (value.cur === 2) {
                  (_crd && playMyLose === void 0 ? (_reportPossibleCrUseOfplayMyLose({
                    error: Error()
                  }), playMyLose) : playMyLose)();
                  this.events.openLosePanel();
                  let myInfo = this.props.myInfo;
                  (_crd && loseViewModel === void 0 ? (_reportPossibleCrUseOfloseViewModel({
                    error: Error()
                  }), loseViewModel) : loseViewModel).comp.updateWinsAndLosses(myInfo); // console.log("this.props.myInfo",this.props.myInfo);

                  this.closePopup();
                }
              }, 2000);
              window.setTimeout(() => done(), 1000);
            }), false).joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
              error: Error()
            }), Task) : Task)(done => {
              this.dispatch((_crd && setMyWinLose === void 0 ? (_reportPossibleCrUseOfsetMyWinLose({
                error: Error()
              }), setMyWinLose) : setMyWinLose)(0));
              window.setTimeout(() => done(), 1000);
            }), false);
          }

          if (key === "initGameStatus") {
            // console.log("initGameStatus",value.cur);
            this.dispatch((_crd && setNewBetDataAction === void 0 ? (_reportPossibleCrUseOfsetNewBetDataAction({
              error: Error()
            }), setNewBetDataAction) : setNewBetDataAction)(null));
            this.dispatch((_crd && setWinAreaAction === void 0 ? (_reportPossibleCrUseOfsetWinAreaAction({
              error: Error()
            }), setWinAreaAction) : setWinAreaAction)(null));
            (_crd && betAreaViewModel === void 0 ? (_reportPossibleCrUseOfbetAreaViewModel({
              error: Error()
            }), betAreaViewModel) : betAreaViewModel).comp.clearAllBetAreaGold();
            (_crd && betAreaViewModel === void 0 ? (_reportPossibleCrUseOfbetAreaViewModel({
              error: Error()
            }), betAreaViewModel) : betAreaViewModel).comp.betAreaInfo.clear();

            if (value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).STOP_BET) {
              (_crd && userCardViewModel === void 0 ? (_reportPossibleCrUseOfuserCardViewModel({
                error: Error()
              }), userCardViewModel) : userCardViewModel).comp.createUserCard();
              (_crd && bankerCardViewModel === void 0 ? (_reportPossibleCrUseOfbankerCardViewModel({
                error: Error()
              }), bankerCardViewModel) : bankerCardViewModel).comp.createBankerCard();
            }
          }
        }
        /**自动关闭输赢结算弹窗*/


        closePopup() {
          if (!(_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
            error: Error()
          }), mainGameViewModel) : mainGameViewModel).isUnMount) {
            //五秒后自动关闭结算弹框
            //   let time:number=this.initSeconds*1000
            let time = 3 * 1000;
            window.setTimeout(() => {
              // this.init()
              if ((_crd && winViewModel === void 0 ? (_reportPossibleCrUseOfwinViewModel({
                error: Error()
              }), winViewModel) : winViewModel) != undefined) {
                if (!(_crd && winViewModel === void 0 ? (_reportPossibleCrUseOfwinViewModel({
                  error: Error()
                }), winViewModel) : winViewModel).isUnMount) {
                  (_crd && winViewModel === void 0 ? (_reportPossibleCrUseOfwinViewModel({
                    error: Error()
                  }), winViewModel) : winViewModel).unMount();
                }
              }

              if ((_crd && loseViewModel === void 0 ? (_reportPossibleCrUseOfloseViewModel({
                error: Error()
              }), loseViewModel) : loseViewModel) != undefined) {
                if (!(_crd && loseViewModel === void 0 ? (_reportPossibleCrUseOfloseViewModel({
                  error: Error()
                }), loseViewModel) : loseViewModel).isUnMount) {
                  (_crd && loseViewModel === void 0 ? (_reportPossibleCrUseOfloseViewModel({
                    error: Error()
                  }), loseViewModel) : loseViewModel).unMount();
                }
              }
            }, time);
            (_crd && betAreaViewModel === void 0 ? (_reportPossibleCrUseOfbetAreaViewModel({
              error: Error()
            }), betAreaViewModel) : betAreaViewModel).comp.clearAllBetAreaGold();
          }
        }
        /**
        * 初始化上榜用户的数据
        */


        initUsers(usersInfo) {
          usersInfo.forEach((item, i) => {
            item.index = i;
          });
        }

        destroyCallBack() {
          this.taskScheduler.destoryQueue();
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5dfed0d613d83d8c3e02ada3786458acf85dcb32.js.map