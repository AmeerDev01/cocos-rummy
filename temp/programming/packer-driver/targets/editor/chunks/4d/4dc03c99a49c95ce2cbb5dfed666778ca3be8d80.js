System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Game, game, instantiate, Node, Sprite, BaseComponent, gameCacheData, SpriteFramePathDefine, mainGameViewModel, playBtnClick, playMyLose, playMyWin, sourceManageSelector, TaskScheduler, Task, betAreaViewModel, historyViewModel, loseViewModel, winViewModel, setMyWinLose, SKT_MAG_TYPE, sktInstance, _dec, _class, _crd, ccclass, property, BandarQiuQiu_gameBoard;

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

  function _reportPossibleCrUseOfSpriteFramePathDefine(extras) {
    _reporterNs.report("SpriteFramePathDefine", "../sourceDefine/spriteDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmainGameViewModel(extras) {
    _reporterNs.report("mainGameViewModel", "../index", _context.meta, extras);
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

  function _reportPossibleCrUseOfsourceManageSelector(extras) {
    _reporterNs.report("sourceManageSelector", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskScheduler(extras) {
    _reporterNs.report("TaskScheduler", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbetAreaViewModel(extras) {
    _reporterNs.report("betAreaViewModel", "../viewModel/BandarQiuQiuGameBoardViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhistoryViewModel(extras) {
    _reporterNs.report("historyViewModel", "../viewModel/BandarQiuQiuGameBoardViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfloseViewModel(extras) {
    _reporterNs.report("loseViewModel", "../viewModel/BandarQiuQiuGameBoardViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfwinViewModel(extras) {
    _reporterNs.report("winViewModel", "../viewModel/BandarQiuQiuGameBoardViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetMyWinLose(extras) {
    _reporterNs.report("setMyWinLose", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKT_MAG_TYPE(extras) {
    _reporterNs.report("SKT_MAG_TYPE", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktInstance(extras) {
    _reporterNs.report("sktInstance", "../socketConnect", _context.meta, extras);
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
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      gameCacheData = _unresolved_3.gameCacheData;
    }, function (_unresolved_4) {
      SpriteFramePathDefine = _unresolved_4.SpriteFramePathDefine;
    }, function (_unresolved_5) {
      mainGameViewModel = _unresolved_5.mainGameViewModel;
      playBtnClick = _unresolved_5.playBtnClick;
      playMyLose = _unresolved_5.playMyLose;
      playMyWin = _unresolved_5.playMyWin;
      sourceManageSelector = _unresolved_5.sourceManageSelector;
    }, function (_unresolved_6) {
      TaskScheduler = _unresolved_6.default;
      Task = _unresolved_6.Task;
    }, function (_unresolved_7) {
      betAreaViewModel = _unresolved_7.betAreaViewModel;
      historyViewModel = _unresolved_7.historyViewModel;
      loseViewModel = _unresolved_7.loseViewModel;
      winViewModel = _unresolved_7.winViewModel;
    }, function (_unresolved_8) {
      setMyWinLose = _unresolved_8.setMyWinLose;
    }, function (_unresolved_9) {
      SKT_MAG_TYPE = _unresolved_9.SKT_MAG_TYPE;
      sktInstance = _unresolved_9.sktInstance;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "deeb1lTTYBC0I0hbKTFUOS4", "BandarQiuQiu_gameBoard", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Game', 'game', 'instantiate', 'Node', 'Sprite', 'SpriteFrame', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BandarQiuQiu_gameBoard", BandarQiuQiu_gameBoard = (_dec = ccclass('BandarQiuQiu_gameBoard'), _dec(_class = class BandarQiuQiu_gameBoard extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
          this.isShowGame = true;
          this.propertyNode = {
            props_btn_history: new Node(),
            props_mim_history: new Node(),
            props_history_icon: new Node(),
            props_history_icon_new: new Node()
          };
          this.props = {
            countDown: 0,
            usersInfo: null,
            // initGameType: null,
            gameStatus: null,
            myInfo: null,
            myWinLose: null,
            minHistory: null
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
          this.propertyNode.props_btn_history.on(Node.EventType.TOUCH_END, () => {
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
              }, 4000);
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

          if (key === "minHistory") {
            window.setTimeout(() => {
              if ((_crd && historyViewModel === void 0 ? (_reportPossibleCrUseOfhistoryViewModel({
                error: Error()
              }), historyViewModel) : historyViewModel) && !(_crd && historyViewModel === void 0 ? (_reportPossibleCrUseOfhistoryViewModel({
                error: Error()
              }), historyViewModel) : historyViewModel).isUnMount) {
                (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
                  error: Error()
                }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                  error: Error()
                }), SKT_MAG_TYPE) : SKT_MAG_TYPE).HISTORY, (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                  error: Error()
                }), gameCacheData) : gameCacheData).roomId);
              }

              this.createMinHistory(value.cur);
            }, 4000);
          }
        }
        /**更新小面板历史记录 */


        createMinHistory(minHistory) {
          if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
            error: Error()
          }), mainGameViewModel) : mainGameViewModel).isUnMount) {
            return;
          }

          ;

          if (!this.propertyNode) {
            return;
          }

          this.propertyNode.props_mim_history.removeAllChildren();
          minHistory.forEach((m, i) => {
            let minHItem = instantiate(this.propertyNode.props_history_icon);
            minHItem.getComponent(Sprite).spriteFrame = this.getSpriteFrame(m);
            this.propertyNode.props_mim_history.addChild(minHItem);

            if (i === minHistory.length - 1) {
              let newX = -237.5 + minHistory.length * 24.5;
              this.propertyNode.props_history_icon_new.setPosition(newX, this.propertyNode.props_history_icon_new.position.y);
            }
          });
        }
        /**清除缓存数据 */


        clearTheCacheData() {}
        /**自动关闭输赢结算弹窗*/


        closePopup() {
          if (!(_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
            error: Error()
          }), mainGameViewModel) : mainGameViewModel).isUnMount) {
            //五秒后自动关闭结算弹框
            // let time:number=this.initSeconds*1000
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

        getSpriteFrame(result) {
          let fileName = '';

          if (result === 1) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDARQIUQIU_MIN_HISTORY_BLUE_WIN;
          } else if (result === 2) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDARQIUQIU_MIN_HISTORY_RED_WIN;
          } else if (result === 3) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDARQIUQIU_MIN_HISTORY_LV_WIN;
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
//# sourceMappingURL=4dc03c99a49c95ce2cbb5dfed666778ca3be8d80.js.map