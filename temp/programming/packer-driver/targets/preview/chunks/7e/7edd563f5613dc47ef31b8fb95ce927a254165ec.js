System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Layout, Node, tween, UITransform, Vec3, BaseComponent, IconPool, config, DragonV2RollerViewModel, DialogType, GameType, IconId, isAuto, isSubGameToSubGame, RollerStatus, updateRollerStatus, cacheData, changeGame, updateGold, updateSubGameAnimationPlayInfo, updateWinloss, Dragonv2_Audio, mainViewModel, SoundPathDefine, _dec, _class, _crd, ccclass, property, DragonV2_RollerPanel;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconPool(extras) {
    _reporterNs.report("IconPool", "../IconPool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDragonV2RollerViewModel(extras) {
    _reporterNs.report("DragonV2RollerViewModel", "../viewModel/DragonV2RollerViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherInfo(extras) {
    _reporterNs.report("AutoLauncherInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDialogType(extras) {
    _reporterNs.report("DialogType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTypeInfo(extras) {
    _reporterNs.report("GameTypeInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconId(extras) {
    _reporterNs.report("IconId", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisAuto(extras) {
    _reporterNs.report("isAuto", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisSubGameToSubGame(extras) {
    _reporterNs.report("isSubGameToSubGame", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerStatus(extras) {
    _reporterNs.report("RollerStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateRollerStatus(extras) {
    _reporterNs.report("updateRollerStatus", "../store/actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcacheData(extras) {
    _reporterNs.report("cacheData", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeGame(extras) {
    _reporterNs.report("changeGame", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateGold(extras) {
    _reporterNs.report("updateGold", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateSubGameAnimationPlayInfo(extras) {
    _reporterNs.report("updateSubGameAnimationPlayInfo", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateWinloss(extras) {
    _reporterNs.report("updateWinloss", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDragonv2_Audio(extras) {
    _reporterNs.report("Dragonv2_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmainViewModel(extras) {
    _reporterNs.report("mainViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
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
      Layout = _cc.Layout;
      Node = _cc.Node;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      IconPool = _unresolved_3.IconPool;
    }, function (_unresolved_4) {
      config = _unresolved_4.default;
    }, function (_unresolved_5) {
      DragonV2RollerViewModel = _unresolved_5.default;
    }, function (_unresolved_6) {
      DialogType = _unresolved_6.DialogType;
      GameType = _unresolved_6.GameType;
      IconId = _unresolved_6.IconId;
      isAuto = _unresolved_6.isAuto;
      isSubGameToSubGame = _unresolved_6.isSubGameToSubGame;
      RollerStatus = _unresolved_6.RollerStatus;
    }, function (_unresolved_7) {
      updateRollerStatus = _unresolved_7.updateRollerStatus;
    }, function (_unresolved_8) {
      cacheData = _unresolved_8.cacheData;
    }, function (_unresolved_9) {
      changeGame = _unresolved_9.changeGame;
      updateGold = _unresolved_9.updateGold;
      updateSubGameAnimationPlayInfo = _unresolved_9.updateSubGameAnimationPlayInfo;
      updateWinloss = _unresolved_9.updateWinloss;
    }, function (_unresolved_10) {
      Dragonv2_Audio = _unresolved_10.Dragonv2_Audio;
      mainViewModel = _unresolved_10.mainViewModel;
    }, function (_unresolved_11) {
      SoundPathDefine = _unresolved_11.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e7babENOYJC1aw/3mg0NXbJ", "DragonV2_RollerPanel", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Layout', 'log', 'Node', 'tween', 'UITransform', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DragonV2_RollerPanel", DragonV2_RollerPanel = (_dec = ccclass('DragonV2_RollerPanel'), _dec(_class = class DragonV2_RollerPanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.rollerViewModelArr = [];
          this.iconPool = new (_crd && IconPool === void 0 ? (_reportPossibleCrUseOfIconPool({
            error: Error()
          }), IconPool) : IconPool)((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).icon);
          this.isManualStop = false;
          this.inStop = false;
          this.isWaitEnding = false;
          this.propertyNode = {
            props_column_list: new Node(),
            props_roller_column: new Node(),
            props_column_effect: new Node()
          };
          this.props = {
            /**滚动状态 */
            rollerStatus: (_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
              error: Error()
            }), RollerStatus) : RollerStatus).END,
            isSpeed: false,
            autoLauncherInfo: null,
            gameTypeInfo: {
              lastGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).NONE,
              currGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).NONE,
              viewGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).NONE,
              leftCount: 0
            },
            winloss: 0
          };
          this.events = {};
        }

        start() {}

        initState() {
          return {};
        }

        initRoller() {
          for (var i = 0; i < (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).columnCount; i++) {
            var column = instantiate(this.propertyNode.props_roller_column);
            var roller = new (_crd && DragonV2RollerViewModel === void 0 ? (_reportPossibleCrUseOfDragonV2RollerViewModel({
              error: Error()
            }), DragonV2RollerViewModel) : DragonV2RollerViewModel)().mountViewNode(column).appendTo(this.propertyNode.props_column_list).connect();
            this.rollerViewModelArr.push(roller);
            roller.comp.setColumnEffectNode(this.propertyNode.props_column_effect);
            roller.setEvent({
              onCheckNextLeftCount: () => {
                this.checkNextLeftCount();
              }
            });
          }
        }

        initSlot() {
          this.rollerViewModelArr.forEach((v, index) => {
            v.comp.initSlot(index, this.iconPool);
          });
        }

        checkNextLeftCount() {
          var nextLeftCount = this.props.gameTypeInfo.nextLeftCount; // 在转动结束之后如果发现下一局的剩余局数有值，就变更一次

          if (this.isSubGame2() && nextLeftCount >= 0) {
            this.dispatch((_crd && changeGame === void 0 ? (_reportPossibleCrUseOfchangeGame({
              error: Error()
            }), changeGame) : changeGame)(_extends({}, this.props.gameTypeInfo, {
              leftCount: nextLeftCount,
              nextLeftCount: undefined
            })));
          }
        }

        startRoll() {
          var isMainGame = this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN;

          if (isMainGame) {
            this.dispatch((_crd && updateWinloss === void 0 ? (_reportPossibleCrUseOfupdateWinloss({
              error: Error()
            }), updateWinloss) : updateWinloss)(0));
          }

          this.unscheduleAllCallbacks();
          this.rollerViewModelArr.forEach((v, index) => {
            v.comp.startRoll();
          });
          this.endRoll();
        }

        endRoll() {
          // 前期滚动的事件
          var rollTime = this.props.isSpeed ? 0.1 : 1;
          this.scheduleOnce(() => {
            if (!(_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
              error: Error()
            }), cacheData) : cacheData).rollerLaunchResult) {
              this.isWaitEnding = true;
            } else {
              this.node && this.node.isValid && this.stopRollAll();
            }
          }, rollTime);
        }

        stopRollAll(isManualStop) {
          if (isManualStop === void 0) {
            isManualStop = false;
          }

          if (this.inStop) {
            return;
          }

          this.unscheduleAllCallbacks();
          this.inStop = true;
          this.isManualStop = isManualStop;

          if ((_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
            error: Error()
          }), RollerStatus) : RollerStatus).RUNNING === this.props.rollerStatus) {
            this.dispatch((_crd && updateRollerStatus === void 0 ? (_reportPossibleCrUseOfupdateRollerStatus({
              error: Error()
            }), updateRollerStatus) : updateRollerStatus)((_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
              error: Error()
            }), RollerStatus) : RollerStatus).ENDING));
          }

          this.stopRoll(0, this.rollEndHandle.bind(this));
        }
        /* 移除隐藏火圈 */


        hidePyrosphere(state) {
          this.rollerViewModelArr.forEach((v, index) => {
            v.comp.hidePyrosphere(state);
          });
        }
        /* 加入火圈 */


        joinTheRingOfFire(key, callback) {
          var _this = this;

          var _loop = function _loop(i) {
            _this.rollerViewModelArr.forEach((v, index) => {
              if (index == key[i][0]) {
                v.comp.thePresenceOrAbsenceOfARingOfFire(key[i], res => {
                  if (!res) {
                    v.comp.joinringOfFireIcon(key[i]);
                  }
                });
              }
            });
          };

          for (var i in key) {
            _loop(i);
          }

          callback && callback();
        }
        /* 先移动老火圈 */


        oldFireCircle() {
          this.rollerViewModelArr.forEach((v, index) => {
            v.comp.renderTheRingOfFire(() => {});
          });
        }

        getDragonBalls() {
          return (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).rollerLaunchResult.dl.si[0].fixedChessboardIcon;
        }
        /**
         * 动画滚动结束处理
         */


        rollEndHandle() {
          var magnification = (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).rollerLaunchResult.dl.si[0].magnification;

          if (this.isSubGame2()) {
            //如果小游戏2刷新龙珠状态
            (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
              error: Error()
            }), mainViewModel) : mainViewModel).showTheNumberOfDragonBalls(this.getDragonBalls().length);
          }

          var bigWinConfig = this.getBigWinConfig(magnification); // 是否小游戏最后一局

          var isSubGameLastPoint = this.props.gameTypeInfo.leftCount <= 1;
          this.inStop = false;
          var auto = (_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
            error: Error()
          }), isAuto) : isAuto)(this.props.autoLauncherInfo, this.props.gameTypeInfo);
          this.scheduleOnce(() => {
            var winLine = this.startPlayWinIcon((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).normalRollOption.winIconFlickerTime, () => {});

            if (!auto || winLine === 0) {
              this.updateRollerStatusEnd(bigWinConfig, auto, isSubGameLastPoint);
            } else {
              // 中奖之后延迟一点结束
              this.scheduleOnce(() => {
                this.updateRollerStatusEnd(bigWinConfig, auto, isSubGameLastPoint);
              }, 1);
            }
          }, 0.8);

          if (!bigWinConfig) {
            this.updateWinloss();
          }
        }

        updateWinloss() {
          var si = (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).rollerLaunchResult.dl.si[0]; // 本局输赢

          var roundTw = si.tw;

          if (this.isMain()) {
            if (roundTw <= 0) {
              return;
            } // 在切到小游戏2时，输赢金额不更新，因为中奖的金额在加到小游戏里


            if (!this.isChangeGame() || this.props.gameTypeInfo.currGameType !== (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME2) {
              this.scheduleOnce(() => {
                this.dispatch((_crd && updateWinloss === void 0 ? (_reportPossibleCrUseOfupdateWinloss({
                  error: Error()
                }), updateWinloss) : updateWinloss)(roundTw)); // 小游戏要在结算时更新余额

                this.dispatch((_crd && updateGold === void 0 ? (_reportPossibleCrUseOfupdateGold({
                  error: Error()
                }), updateGold) : updateGold)(si.bl));
              }, 0.8);
            } else {
              if (this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).SUBGAME2) {
                if (roundTw > 0) {
                  this.dispatch((_crd && updateWinloss === void 0 ? (_reportPossibleCrUseOfupdateWinloss({
                    error: Error()
                  }), updateWinloss) : updateWinloss)(roundTw));
                  this.dispatch((_crd && updateGold === void 0 ? (_reportPossibleCrUseOfupdateGold({
                    error: Error()
                  }), updateGold) : updateGold)(si.bl));
                }
              }
            }
          } else {
            // 小游戏1在游戏中余额之后在切换到主游戏时才加上去
            if (this.isSubGame1()) {
              this.scheduleOnce(() => {
                this.dispatch((_crd && updateWinloss === void 0 ? (_reportPossibleCrUseOfupdateWinloss({
                  error: Error()
                }), updateWinloss) : updateWinloss)(si.freeGameAmount));
              }, 1);
            }

            if (this.isChangeGame()) {
              if (this.isSubGame2()) {
                this.dispatch((_crd && updateWinloss === void 0 ? (_reportPossibleCrUseOfupdateWinloss({
                  error: Error()
                }), updateWinloss) : updateWinloss)(roundTw));
              }

              this.dispatch((_crd && updateGold === void 0 ? (_reportPossibleCrUseOfupdateGold({
                error: Error()
              }), updateGold) : updateGold)(si.bl));
              this.dispatch((_crd && updateWinloss === void 0 ? (_reportPossibleCrUseOfupdateWinloss({
                error: Error()
              }), updateWinloss) : updateWinloss)(si.freeGameAmount));
            }
          }
        }
        /**
         * 更新结束滚动状态
         * @param bigWinConfig 大奖配置
         * @param auto 
         * @param isSubGameLastPoint 是否小游戏最后一局
         */


        updateRollerStatusEnd(bigWinConfig, auto, isSubGameLastPoint) {
          /// 是否进入小游戏2
          // let isEnterSubGame2 = this.props.gameTypeInfo.viewGameType !== GameType.SUBGAME2 && this.props.gameTypeInfo.currGameType === GameType.SUBGAME2;
          var isEnterSubGame2 = false; // 是否小游戏2，包含下一次游戏

          var isSubGame2 = this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2 || this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2; // 是否下一次小游戏2

          var isNextSubGame2 = this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2;
          var isChangeGame = this.isChangeGame();

          if (!isEnterSubGame2 && bigWinConfig) {
            // let time = this.props.gameTypeInfo.viewGameType === GameType.SUBGAME2 && isSubGameLastPoint  ? config.subGameRollOption.beetleFlyTime * cacheData.fixedChessboardIcon.length : 1;
            if (this.props.gameTypeInfo.viewGameType !== (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME1 && this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME1) {
              (_crd && Dragonv2_Audio === void 0 ? (_reportPossibleCrUseOfDragonv2_Audio({
                error: Error()
              }), Dragonv2_Audio) : Dragonv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).ling);
            } // 大奖提示框消失后的回调


            var dialogCallback = () => {
              if (isChangeGame) {
                this.dispatch((_crd && updateWinloss === void 0 ? (_reportPossibleCrUseOfupdateWinloss({
                  error: Error()
                }), updateWinloss) : updateWinloss)((_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
                  error: Error()
                }), cacheData) : cacheData).rollerLaunchResult.dl.si[0].tw));

                if (this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                  error: Error()
                }), GameType) : GameType).SUBGAME2 && this.props.gameTypeInfo.currGameType !== (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                  error: Error()
                }), GameType) : GameType).SUBGAME2) {
                  this.playBeeteFlyAmount(() => {
                    // this.rollerViewModelArr.forEach((v, i) => {
                    // 	v.comp.removeLockIcon()
                    // })
                    this.dispatch((_crd && updateWinloss === void 0 ? (_reportPossibleCrUseOfupdateWinloss({
                      error: Error()
                    }), updateWinloss) : updateWinloss)((_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
                      error: Error()
                    }), cacheData) : cacheData).rollerLaunchResult.dl.si[0].freeGameAmount)); // this.changeGameHandle(isSubGameLastPoint);

                    this.dispatch((_crd && updateGold === void 0 ? (_reportPossibleCrUseOfupdateGold({
                      error: Error()
                    }), updateGold) : updateGold)((_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
                      error: Error()
                    }), cacheData) : cacheData).rollerLaunchResult.dl.si[0].bl)); // 如果是免费游戏，要接着弹出的免费次数框

                    this.changeGameHandle(isSubGameLastPoint);
                  });
                } else {
                  if (this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                    error: Error()
                  }), GameType) : GameType).SUBGAME1) {// godWealthV2_Audio.playOneShot(SoundPathDefine.LING)
                  } // 如果是免费游戏，要接着弹出的免费次数框


                  this.changeGameHandle(isSubGameLastPoint);
                }
              } else {
                this.dispatch((_crd && updateRollerStatus === void 0 ? (_reportPossibleCrUseOfupdateRollerStatus({
                  error: Error()
                }), updateRollerStatus) : updateRollerStatus)((_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
                  error: Error()
                }), RollerStatus) : RollerStatus).END));
              }
            }; // 延迟一点点播放大奖


            this.scheduleOnce(() => {
              var si = (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
                error: Error()
              }), cacheData) : cacheData).rollerLaunchResult.dl.si[0];
              var winloss = this.isSubGame2() && isSubGameLastPoint ? si.freeGameAmount : si.tw; // 中大奖提示框

              this.node && this.node.isValid && (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
                error: Error()
              }), mainViewModel) : mainViewModel).showDialogWin({
                dialogType: bigWinConfig.name,
                params: [winloss]
              }, () => dialogCallback());
              this.updateWinloss();
            }, 1);
          } else {
            if (isChangeGame) {
              if (this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).SUBGAME2) {
                (_crd && Dragonv2_Audio === void 0 ? (_reportPossibleCrUseOfDragonv2_Audio({
                  error: Error()
                }), Dragonv2_Audio) : Dragonv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                  error: Error()
                }), SoundPathDefine) : SoundPathDefine).ling);
                this.playBaoHeAnimation(isSubGameLastPoint);
              } else {
                if (this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                  error: Error()
                }), GameType) : GameType).SUBGAME2) {
                  this.playBeeteFlyAmount(() => {
                    // this.rollerViewModelArr.forEach((v, i) => {
                    // 	v.comp.removeLockIcon()
                    // })
                    this.dispatch((_crd && updateWinloss === void 0 ? (_reportPossibleCrUseOfupdateWinloss({
                      error: Error()
                    }), updateWinloss) : updateWinloss)((_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
                      error: Error()
                    }), cacheData) : cacheData).rollerLaunchResult.dl.si[0].freeGameAmount));
                    this.changeGameHandle(isSubGameLastPoint);
                    this.dispatch((_crd && updateGold === void 0 ? (_reportPossibleCrUseOfupdateGold({
                      error: Error()
                    }), updateGold) : updateGold)((_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
                      error: Error()
                    }), cacheData) : cacheData).rollerLaunchResult.dl.si[0].bl));
                  });
                } else {
                  this.changeGameHandle(isSubGameLastPoint);
                }
              }
            } else {
              this.dispatch((_crd && updateRollerStatus === void 0 ? (_reportPossibleCrUseOfupdateRollerStatus({
                error: Error()
              }), updateRollerStatus) : updateRollerStatus)((_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
                error: Error()
              }), RollerStatus) : RollerStatus).END));
            }
          }
        }
        /**播放宝盒动画，播放完成之后进去切换游戏 */


        playBaoHeAnimation(isSubGameLastPoint) {
          var count = 0;
          this.rollerViewModelArr.forEach(v => {
            v.comp.playBaoHeAnimation(() => {
              count++;

              if (count >= this.rollerViewModelArr.length) {
                this.changeGameHandle(isSubGameLastPoint);
              }
            });
          });
        }
        /**播放宝盒的飞数字动画 */


        playBeeteFlyAmount(done) {
          var nodes = [];
          var ParticleNodes = [];
          this.rollerViewModelArr.forEach(v => {
            nodes = nodes.concat(v.comp.getBeetleAmountNode());
            ParticleNodes = ParticleNodes.concat(v.comp.getBaoHeParticleNode());
          });
          var endPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR((_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
            error: Error()
          }), mainViewModel) : mainViewModel).getGoodLuckPos());
          var count = 0;

          if (ParticleNodes.length > 0 && (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).fixedChessboardIcon.length > 0) {
            ParticleNodes.forEach((p, i) => {
              var startPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(p.getWorldPosition());
              var cloneNode = instantiate(p);
              cloneNode.active = true;
              this.node.parent.addChild(cloneNode);
              cloneNode.setPosition(startPos);
              nodes[i].active = false;
              tween(cloneNode).to((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).subGameRollOption.beetleFlyTime, {
                position: endPos
              }).call(() => {
                cloneNode.destroy();
                count++;

                if (count >= nodes.length) {
                  done && done();
                }
              }).start();
            });
          } else {
            done && done();
          } // })

        }

        changeGameHandle(isSubGameLastPoint) {
          if (this.isSubGame(this.props.gameTypeInfo.currGameType)) {
            this.dispatch((_crd && updateWinloss === void 0 ? (_reportPossibleCrUseOfupdateWinloss({
              error: Error()
            }), updateWinloss) : updateWinloss)(0));
            this.changeToSubGame(this.props.gameTypeInfo.currGameType, isSubGameLastPoint);
          } else if (this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN) {
            this.scheduleOnce(() => {
              this.changeToMainGame(this.props.gameTypeInfo.viewGameType);
            }, 1.5);
          }
        }
        /**
         * 切换到小游戏处理
         * @param currGameType 当前游戏
         * @param viewGameCountOver 当前小游戏次数是否结束
         * @param nextGameType 下一个游戏
         */


        changeToSubGame(currGameType, viewGameCountOver) {
          if (viewGameCountOver) {
            this.changeSubGameToSubGame(currGameType);
          } else {
            console.log("changeToSubGame````` gameTypeInfo", this.props.gameTypeInfo); // 如果是免费游戏，要接着弹出的免费次数框

            (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
              error: Error()
            }), mainViewModel) : mainViewModel).showDialogWin({
              dialogType: this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).SUBGAME1 ? (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                error: Error()
              }), DialogType) : DialogType).FREE_GAME_ENTRY : (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                error: Error()
              }), DialogType) : DialogType).BAO_HE_GAME_ENTRY,
              params: [(_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
                error: Error()
              }), cacheData) : cacheData).rollerLaunchResult.dl.si[0].freeCount]
            }, () => {
              console.log("dispatch updateSubGameAnimationPlayInfo", currGameType);
              this.dispatch((_crd && updateSubGameAnimationPlayInfo === void 0 ? (_reportPossibleCrUseOfupdateSubGameAnimationPlayInfo({
                error: Error()
              }), updateSubGameAnimationPlayInfo) : updateSubGameAnimationPlayInfo)({
                gameType: currGameType,
                param: 0 //开门类型

              }));
            });
          }
        }
        /**切换到主游戏的处理 */


        changeToMainGame(gameType) {
          console.log("changeToMainGame  this.props.gameTypeInfo``````````", this.props.gameTypeInfo);
          console.log("this.isSubGame(gameType)", this.isSubGame(gameType));

          if (this.isSubGame(gameType)) {
            // 弹出结算面板
            (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
              error: Error()
            }), mainViewModel) : mainViewModel).showDialogWin({
              dialogType: this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).SUBGAME1 ? (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                error: Error()
              }), DialogType) : DialogType).FREE_GAME_SETTLEMENT : (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                error: Error()
              }), DialogType) : DialogType).BAO_HE_GAME_SETTLEMENT,
              params: [(_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
                error: Error()
              }), cacheData) : cacheData).rollerLaunchResult.dl.si[0].freeGameAmount]
            }, () => {
              console.log("dispatch updateSubGameAnimationPlayInfo222", gameType); // 播放切换游戏动画

              this.dispatch((_crd && updateSubGameAnimationPlayInfo === void 0 ? (_reportPossibleCrUseOfupdateSubGameAnimationPlayInfo({
                error: Error()
              }), updateSubGameAnimationPlayInfo) : updateSubGameAnimationPlayInfo)({
                gameType: gameType,
                param: 1 // 关门动画

              })); // 在开始切回主游戏时，就要把插槽的位置重置，等到gameTypeInfo数据变化时已经晚了，会看到坐标不正确

              this.changeGame((_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).MAIN);
              (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
                error: Error()
              }), mainViewModel) : mainViewModel).initOfDragonBalls();
            });
          } else {
            this.changeGame((_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).MAIN);
            this.dispatch((_crd && updateRollerStatus === void 0 ? (_reportPossibleCrUseOfupdateRollerStatus({
              error: Error()
            }), updateRollerStatus) : updateRollerStatus)((_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
              error: Error()
            }), RollerStatus) : RollerStatus).END));
          }
        }
        /**切换小游戏到小游戏 */


        changeSubGameToSubGame(gameType) {
          // 弹出结算面板
          (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
            error: Error()
          }), mainViewModel) : mainViewModel).showDialogWin({
            dialogType: (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
              error: Error()
            }), DialogType) : DialogType).FREE_GAME_SETTLEMENT,
            params: [(_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
              error: Error()
            }), cacheData) : cacheData).rollerLaunchResult.dl.si[0].freeGameAmount]
          }, () => {
            // 播放切换游戏动画
            this.dispatch((_crd && updateSubGameAnimationPlayInfo === void 0 ? (_reportPossibleCrUseOfupdateSubGameAnimationPlayInfo({
              error: Error()
            }), updateSubGameAnimationPlayInfo) : updateSubGameAnimationPlayInfo)({
              gameType: gameType,
              param: 1 // 关门动画

            })); // 在开始切回主游戏时，就要把插槽的位置重置，等到gameTypeInfo数据变化时已经晚了，会看到坐标不正确

            this.changeGame(gameType);
          });
        }
        /**是否准备切换游戏 */


        isChangeGame() {
          if (!this.props.gameTypeInfo) {
            return false;
          }

          if ((_crd && isSubGameToSubGame === void 0 ? (_reportPossibleCrUseOfisSubGameToSubGame({
            error: Error()
          }), isSubGameToSubGame) : isSubGameToSubGame)(this.props.gameTypeInfo.viewGameType, this.props.gameTypeInfo.currGameType)) {
            return true;
          }

          return this.props.gameTypeInfo.viewGameType !== this.props.gameTypeInfo.currGameType;
        }

        isMain() {
          return this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN;
        }

        isSubGame(gameType) {
          return gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1 || gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2;
        }

        getBigWinConfig(magnification) {
          return (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).winning.find(v => v.minRate <= magnification && magnification <= v.maxRate);
        }

        stopRoll(i, callBack) {
          var isSpeed = this.isManualStop ? true : this.props.isSpeed; // 这里调停止滚动的速度

          var time = isSpeed ? 0 : 0.2;
          var isEnd = i >= this.rollerViewModelArr.length - 1;
          var rollerComp = this.rollerViewModelArr[i]; // const stopIconIndex = Math.floor(Math.random() * config.iconRollerQueue[i].length);
          // 获得停下来的数据

          var stopIconIndex = (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).rollerLaunchResult.dl.si[0].rollerId[i];
          var scatterCount = this.getScatterCount(i); // 下一个列是否有边框

          var nextColmunIsBorder = this.getScatterCount(i + 1) >= 2; // console.log("scatterCount", scatterCount, i, stopIconIndex);
          // 是否快速边框，前面出现2个以上的scatter，这个参数才为true

          var isSpeedBorder = scatterCount >= 2;
          rollerComp.comp.stopRoll(stopIconIndex, () => {
            if (this.node && this.node.isValid) {
              if (isEnd) {
                callBack();
              } else {
                nextColmunIsBorder && this.stopRoll(i + 1, callBack);
              }
            }
          }, isSpeedBorder); // 小游戏2滚轴一起停

          if (this.isSubGame2()) {
            if (!isEnd) {
              this.stopRoll(i + 1, callBack);
            }
          } else {
            !nextColmunIsBorder && this.scheduleOnce(() => {
              if (this.node && this.node.isValid) {
                if (!isEnd) {
                  this.stopRoll(i + 1, callBack);
                }
              }
            }, time);
          }
        }

        isSubGame2() {
          return this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2;
        }

        isSubGame1() {
          return this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1;
        }
        /**获得前面几列的scatter个数 */


        getScatterCount(endColumnIndex) {
          // 前两列不计算数量或者小游戏2也不计算
          if (endColumnIndex < 2 || this.isSubGame2()) {
            return 0;
          }

          endColumnIndex = endColumnIndex >= this.rollerViewModelArr.length ? this.rollerViewModelArr.length : endColumnIndex;
          var rollerId = (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).rollerLaunchResult.dl.si[0].rollerId;
          var scatter = 0;

          for (var i = 0; i < endColumnIndex; i++) {
            var iconIndex = rollerId[i];
            var queue = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).iconRollerQueue[i];

            for (var _i = 0; _i < (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).normalRollOption.showIconCount; _i++) {
              if (queue[iconIndex] === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
                error: Error()
              }), IconId) : IconId).SCATTER) {
                scatter++;
                break;
              }

              if (++iconIndex >= queue.length) {
                iconIndex = 0;
              }
            }
          }

          return scatter;
        }
        /**
         * 显示中奖图标
         * @param linePlayTime 
         * @param done 所有线路播放完之后执行
         */


        startPlayWinIcon(linePlayTime, done) {
          var winLine = 0;

          if ((_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).rollerLaunchResult) {
            var wp = (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
              error: Error()
            }), cacheData) : cacheData).rollerLaunchResult.dl.si[0].wp;
            var lines = [];

            for (var key in wp) {
              lines.push(key);
            }

            winLine = lines.length;

            if (lines.length > 0) {
              this.executeWinIcon(-1, lines, wp, linePlayTime, done);
            } else {
              done();
            }
          }

          return winLine;
        }
        /**
         * 播放赢的图标
         * @param index 线的索引
         * @param lines 中奖线的数组
         * @param wp 中间对象
         * @param linePlayTime 播放一条线的时间
         * @param done
         * @returns 
         */


        executeWinIcon(index, lines, wp, linePlayTime, done) {
          if (!(_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).rollerLaunchResult) {
            return;
          }

          if (index >= lines.length) {
            index = -1;
            done && done();
          }

          var lineNumber = lines[index];
          var winIconArr = [];

          if (index === -1) {
            linePlayTime = 2;

            for (var key in wp) {
              winIconArr = winIconArr.concat(wp[key]);
            }
          } else {
            winIconArr = winIconArr.concat(wp[lineNumber]); // 一条线中了几个图标就播放多少秒

            linePlayTime = winIconArr.length;
          }

          this.rollerViewModelArr.forEach(v => v.comp.pauseWinIcon());
          winIconArr.forEach(v => {
            var columnIndex = v[0];
            var iconIndex = v[1];
            this.rollerViewModelArr[columnIndex].comp.playWinIcon(iconIndex);
          });
          this.scheduleOnce(() => {
            this.executeWinIcon(++index, lines, wp, linePlayTime, done);
          }, linePlayTime);
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === 'rollerStatus') {
            if ((_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
              error: Error()
            }), RollerStatus) : RollerStatus).RUNNING === value.cur) {
              this.startRoll();
            } else if ((_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
              error: Error()
            }), RollerStatus) : RollerStatus).ENDING === value.cur) {
              this.stopRollAll(true);
              (_crd && Dragonv2_Audio === void 0 ? (_reportPossibleCrUseOfDragonv2_Audio({
                error: Error()
              }), Dragonv2_Audio) : Dragonv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).shell_end);
            }
          } else if (key === 'gameTypeInfo') {
            this.changeGame(this.props.gameTypeInfo.viewGameType);
          }
        }

        changeGame(gameType) {
          var columnListLayout = this.propertyNode.props_column_list.getComponent(Layout);
          var isSubGame2 = gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2;
          var isMain = gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN;

          if (isMain || isSubGame2) {
            this.node.position = new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).normalRollOption.rollerWindowX, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).normalRollOption.rollerWindowY);
            columnListLayout.spacingX = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).normalRollOption.columnInterval;
          } else {
            this.node.position = new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).subGameRollOption.rollerWindowX, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).subGameRollOption.rollerWindowY);
            columnListLayout.spacingX = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).subGameRollOption.columnInterval;
          }

          if (isMain) {
            this.rollerViewModelArr.forEach(v => v.comp.replaceMultiRollerIcon());
          }
        }

        bindUI() {
          this.propertyNode.props_column_list.removeAllChildren();
          this.initRoller();
        }

        update(deltaTime) {
          if (this.isWaitEnding && (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).rollerLaunchResult) {
            this.isWaitEnding = false;
            this.node && this.node.isValid && this.stopRollAll();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7edd563f5613dc47ef31b8fb95ce927a254165ec.js.map