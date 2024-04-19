System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Layout, Node, sp, tween, UITransform, Vec3, BaseComponent, IconPool, config, PhoenixV2RollerViewModel, DialogType, GameType, IconId, isAuto, isSubGameToSubGame, RollerStatus, updateRollerStatus, cacheData, changeGame, updateGold, updateSubGameAnimationPlayInfo, updateWinloss, mainViewModel, phoenixV2_Audio, SoundPathDefine, _dec, _class, _crd, ccclass, property, PhoenixV2_RollerPanel;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconPool(extras) {
    _reporterNs.report("IconPool", "../IconPool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPhoenixV2RollerViewModel(extras) {
    _reporterNs.report("PhoenixV2RollerViewModel", "../viewModel/PhoenixV2RollerViewModel", _context.meta, extras);
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

  function _reportPossibleCrUseOfRollerLaunchResult(extras) {
    _reporterNs.report("RollerLaunchResult", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerStatus(extras) {
    _reporterNs.report("RollerStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSmallGame(extras) {
    _reporterNs.report("SmallGame", "../type", _context.meta, extras);
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

  function _reportPossibleCrUseOfmainViewModel(extras) {
    _reporterNs.report("mainViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphoenixV2_Audio(extras) {
    _reporterNs.report("phoenixV2_Audio", "../index", _context.meta, extras);
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
      Label = _cc.Label;
      Layout = _cc.Layout;
      Node = _cc.Node;
      sp = _cc.sp;
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
      PhoenixV2RollerViewModel = _unresolved_5.default;
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
      mainViewModel = _unresolved_10.mainViewModel;
      phoenixV2_Audio = _unresolved_10.phoenixV2_Audio;
    }, function (_unresolved_11) {
      SoundPathDefine = _unresolved_11.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "54ce6X5oqpMQLz4MPYD0VJC", "PhoenixV2_RollerPanel", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Label', 'Layout', 'Node', 'sp', 'tween', 'UITransform', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PhoenixV2_RollerPanel", PhoenixV2_RollerPanel = (_dec = ccclass('PhoenixV2_RollerPanel'), _dec(_class = class PhoenixV2_RollerPanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
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
          this.sendBetTime = 0;

          /** 当前滚轴 */
          this.rollIndex = 0;
          this.chooseSmallGame = void 0;
          this.isShowMultip = false;
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
            winloss: 0,
            chooseSmallGame: null
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
            var roller = new (_crd && PhoenixV2RollerViewModel === void 0 ? (_reportPossibleCrUseOfPhoenixV2RollerViewModel({
              error: Error()
            }), PhoenixV2RollerViewModel) : PhoenixV2RollerViewModel)().mountViewNode(column).appendTo(this.propertyNode.props_column_list).connect();
            this.rollerViewModelArr.push(roller);
            roller.comp.setColumnEffectNode(this.propertyNode.props_column_effect);
          }
        }

        initSlot(smallGameInfo) {
          this.rollerViewModelArr.forEach((v, index) => {
            if (this.props.gameTypeInfo.viewGameType !== (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).MAIN && smallGameInfo) {
              (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).icon[(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).icon.length - 2].fileName = smallGameInfo.wildSprite;
              (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).icon[(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).icon.length - 2].skeletonName = smallGameInfo.wildSkeleton; // this.iconPool=new IconPool(config.icon,this.props.gameTypeInfo.viewGameType,smallGameInfo.id)
            }

            v.comp.initSlot(index, this.iconPool);
          });
        }

        startRoll() {
          var sendBetTime = (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).sendBetTime;
          this.sendBetTime = sendBetTime;
          this.isManualStop = false;
          this.isShowMultip = false; // console.log("start roll time " + sendBetTime)

          var isMainGame = this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN;

          if (isMainGame) {
            this.dispatch((_crd && updateWinloss === void 0 ? (_reportPossibleCrUseOfupdateWinloss({
              error: Error()
            }), updateWinloss) : updateWinloss)(0));
          }

          (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
            error: Error()
          }), mainViewModel) : mainViewModel).comp.getSmallMultipleNode().active = false;
          (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
            error: Error()
          }), mainViewModel) : mainViewModel).comp.getSmallMultipleNode().getComponent(Label).string = '';
          this.unscheduleAllCallbacks();
          this.rollerViewModelArr.forEach((v, index) => {
            v.comp.startRoll();
          });
          this.endRoll(sendBetTime);
        }

        endRoll(sendBetTime) {
          // 前期滚动的事件
          var rollTime = this.getIsSpeed() ? 0.1 : 1;
          this.scheduleOnce(() => {
            // console.log("endRoll scheduleOnce " + sendBetTime + " currentTime " + new Date().getTime());
            if (!(_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
              error: Error()
            }), cacheData) : cacheData).rollerLaunchResult) {
              this.isWaitEnding = true;
            } else {
              this.node.isValid && this.stopRollAll(false, sendBetTime, (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
                error: Error()
              }), cacheData) : cacheData).rollerLaunchResult);
            }
          }, rollTime);
        }

        stopRollAll(isManualStop, sendBetTime, rollerLaunchResult) {
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
          } // console.log("rollerpanel stop roll time " + sendBetTime);


          this.stopRoll(0, this.rollEndHandle.bind(this, rollerLaunchResult), rollerLaunchResult);
        }
        /**
         * 动画滚动结束处理
         */


        rollEndHandle(rollerLaunchResult) {
          var magnification = rollerLaunchResult.dl.si[0].magnification;
          var bigWinConfig = this.getBigWinConfig(magnification); // 是否小游戏最后一局

          var isSubGameLastPoint = !this.isMain() && this.props.gameTypeInfo.leftCount <= 1;
          this.inStop = false;
          var auto = (_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
            error: Error()
          }), isAuto) : isAuto)(this.props.autoLauncherInfo, this.props.gameTypeInfo);
          var winLine = 0;
          var yuanBaoLine = this.showYuanBaoIcon((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.winIconFlickerTime, () => {
            winLine = this.startPlayWinIcon((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).normalRollOption.winIconFlickerTime, () => {}, rollerLaunchResult);
          }, rollerLaunchResult); // const winLine = this.startPlayWinIcon(config.normalRollOption.winIconFlickerTime, () => {
          // }, rollerLaunchResult);

          if (yuanBaoLine === 0) {
            this.playBigWinHandle(bigWinConfig, auto, isSubGameLastPoint, rollerLaunchResult);
          } else {
            // 中奖之后延迟一点结束
            this.scheduleOnce(() => {
              this.playBigWinHandle(bigWinConfig, auto, isSubGameLastPoint, rollerLaunchResult);
            }, 1);
          } // if (!auto || winLine === 0 || yuanBaoLine === 0) {
          // 	this.updateRollerStatusEnd(bigWinConfig, auto, isSubGameLastPoint, rollerLaunchResult);
          // } else {
          // 	// 中奖之后延迟一点结束
          // 	this.scheduleOnce(() => {
          // 		this.updateRollerStatusEnd(bigWinConfig, auto, isSubGameLastPoint, rollerLaunchResult);
          // 	}, 1)
          // }


          if (!bigWinConfig) {
            this.updateWinloss(rollerLaunchResult);
          }
        }

        playWinAudio() {// if (this.isWinWild()) {
          // 	phoenixV2_Audio.playOneShot(SoundPathDefine.wild)
          // } else {
          // 	phoenixV2_Audio.playOneShot(SoundPathDefine.haveCoin)
          // }
        }

        updateWinloss(rollerLaunchResult, amount) {
          var si = rollerLaunchResult && rollerLaunchResult.dl.si[0]; // 本局输赢

          var roundTw = si.totalRewards;

          if (this.isMain()) {
            if (roundTw <= 0) {
              return;
            } // 在切到小游戏2时，输赢金额不更新，因为中奖的金额在加到小游戏里


            if (!this.isChangeGame() || this.props.gameTypeInfo.currGameType !== (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME2) {
              this.dispatch((_crd && updateWinloss === void 0 ? (_reportPossibleCrUseOfupdateWinloss({
                error: Error()
              }), updateWinloss) : updateWinloss)(roundTw)); // 小游戏要在结算时更新余额

              this.dispatch((_crd && updateGold === void 0 ? (_reportPossibleCrUseOfupdateGold({
                error: Error()
              }), updateGold) : updateGold)(si.balanceAfterSettlement));
            }
          } else {
            // 小游戏1在游戏中余额之后在切换到主游戏时才加上去
            // console.log("amount",amount,si.freeGameAmount );
            if (amount && si.totalRewards > amount) {
              if (this.isSubGame1()) {
                this.dispatch((_crd && updateWinloss === void 0 ? (_reportPossibleCrUseOfupdateWinloss({
                  error: Error()
                }), updateWinloss) : updateWinloss)(si.freeGameAmount - amount));
              }
            } else {
              this.dispatch((_crd && updateWinloss === void 0 ? (_reportPossibleCrUseOfupdateWinloss({
                error: Error()
              }), updateWinloss) : updateWinloss)(si.freeGameAmount));
            }

            if (this.isChangeGame()) {
              this.dispatch((_crd && updateGold === void 0 ? (_reportPossibleCrUseOfupdateGold({
                error: Error()
              }), updateGold) : updateGold)(si.balanceAfterSettlement));
              this.dispatch((_crd && updateWinloss === void 0 ? (_reportPossibleCrUseOfupdateWinloss({
                error: Error()
              }), updateWinloss) : updateWinloss)(si.freeGameAmount));
            }
          }
        }
        /**播放元宝中奖处理 */


        playBigWinHandle(bigWinConfig, auto, isSubGameLastPoint, rollerLaunchResult) {
          var showYuanBao = rollerLaunchResult && rollerLaunchResult.dl.si[0].otherGameAttributesVo.yuanBaoSpecialEffect; //是否有特殊位置（1 、5列）元宝中奖
          // 进入小游戏2时不播放大奖

          if (showYuanBao) {
            var yuanBaoDialogCallBack = () => {
              // 延迟一点点播放大奖
              this.startPlayWinIcon((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).normalRollOption.winIconFlickerTime, () => {}, rollerLaunchResult); // this.scheduleOnce(() => {

              this.updateRollerStatusEnd(bigWinConfig, auto, isSubGameLastPoint, rollerLaunchResult); // }, 1)
            };

            this.flyYinBi(() => {
              var yuanBaoAmount = rollerLaunchResult && rollerLaunchResult.dl.si[0].otherGameAttributesVo.yuanBaoAmount;
              var yuanBaoMagnification = rollerLaunchResult && rollerLaunchResult.dl.si[0].otherGameAttributesVo.yuanBaoMagnification;
              this.updateWinloss(rollerLaunchResult, yuanBaoAmount); // 元宝中奖框

              (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
                error: Error()
              }), mainViewModel) : mainViewModel).showDialogWin({
                dialogType: (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                  error: Error()
                }), DialogType) : DialogType).YUAN_BAO_WIN,
                params: [yuanBaoAmount, yuanBaoMagnification]
              }, () => yuanBaoDialogCallBack());
            });
          } else {
            this.updateRollerStatusEnd(bigWinConfig, auto, isSubGameLastPoint, rollerLaunchResult);
          }
        }
        /**
         * 更新结束滚动状态
         * @param bigWinConfig 大奖配置
         * @param auto 
         * @param isSubGameLastPoint 是否小游戏最后一局
         */


        updateRollerStatusEnd(bigWinConfig, auto, isSubGameLastPoint, rollerLaunchResult) {
          // 是否小游戏2，包含下一次游戏
          var isSubGame2 = this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2 || this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2;
          var isChangeGame = this.isChangeGame();

          if (bigWinConfig) {
            // 大奖提示框消失后的回调
            var dialogCallback = () => {
              if (isChangeGame) {
                if (this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                  error: Error()
                }), GameType) : GameType).SUBGAME1) {
                  (_crd && phoenixV2_Audio === void 0 ? (_reportPossibleCrUseOfphoenixV2_Audio({
                    error: Error()
                  }), phoenixV2_Audio) : phoenixV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                    error: Error()
                  }), SoundPathDefine) : SoundPathDefine).LING, 1, false);
                } // 如果是免费游戏，要接着弹出的免费次数框


                this.changeGameHandle(isSubGameLastPoint, rollerLaunchResult);
              } else {
                //处理wild加次数飞动画
                if (this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                  error: Error()
                }), GameType) : GameType).SUBGAME1) {
                  this.playWildAnimation(() => {
                    this.dispatch((_crd && changeGame === void 0 ? (_reportPossibleCrUseOfchangeGame({
                      error: Error()
                    }), changeGame) : changeGame)({
                      lastGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                        error: Error()
                      }), GameType) : GameType).NONE,
                      viewGameType: this.props.gameTypeInfo.viewGameType,
                      currGameType: rollerLaunchResult && rollerLaunchResult.dl.si[0].nextGameType,
                      leftCount: rollerLaunchResult && rollerLaunchResult.dl.si[0].freeCount,
                      freeGameAmount: rollerLaunchResult && rollerLaunchResult.dl.si[0].freeGameAmount,
                      nextLeftCount: undefined
                    }));
                    this.scheduleOnce(() => {
                      this.dispatch((_crd && updateRollerStatus === void 0 ? (_reportPossibleCrUseOfupdateRollerStatus({
                        error: Error()
                      }), updateRollerStatus) : updateRollerStatus)((_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
                        error: Error()
                      }), RollerStatus) : RollerStatus).END));
                    }, 1);
                  });
                } else {
                  this.dispatch((_crd && updateRollerStatus === void 0 ? (_reportPossibleCrUseOfupdateRollerStatus({
                    error: Error()
                  }), updateRollerStatus) : updateRollerStatus)((_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
                    error: Error()
                  }), RollerStatus) : RollerStatus).END));
                }
              }
            }; // 延迟一点点播放大奖


            this.scheduleOnce(() => {
              this.updateWinloss(rollerLaunchResult); // 中大奖提示框

              this.node.isValid && (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
                error: Error()
              }), mainViewModel) : mainViewModel).showDialogWin({
                dialogType: bigWinConfig.name,
                params: [rollerLaunchResult && rollerLaunchResult.dl.si[0].totalRewards]
              }, () => dialogCallback());
            }, 0.8);
          } else {
            if (isChangeGame) {
              if (this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).SUBGAME2) {// this.playBeetleAnimation(isSubGameLastPoint, rollerLaunchResult);
              } else {
                if (this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                  error: Error()
                }), GameType) : GameType).SUBGAME1) {
                  (_crd && phoenixV2_Audio === void 0 ? (_reportPossibleCrUseOfphoenixV2_Audio({
                    error: Error()
                  }), phoenixV2_Audio) : phoenixV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                    error: Error()
                  }), SoundPathDefine) : SoundPathDefine).LING, 1, false);
                }

                this.scheduleOnce(() => {
                  this.changeGameHandle(isSubGameLastPoint, rollerLaunchResult);
                }, 1);
              }
            } else {
              if (this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).SUBGAME1) {
                this.playWildAnimation(() => {
                  this.dispatch((_crd && changeGame === void 0 ? (_reportPossibleCrUseOfchangeGame({
                    error: Error()
                  }), changeGame) : changeGame)({
                    lastGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                      error: Error()
                    }), GameType) : GameType).NONE,
                    viewGameType: this.props.gameTypeInfo.viewGameType,
                    currGameType: rollerLaunchResult && rollerLaunchResult.dl.si[0].nextGameType,
                    leftCount: rollerLaunchResult && rollerLaunchResult.dl.si[0].freeCount,
                    freeGameAmount: rollerLaunchResult && rollerLaunchResult.dl.si[0].freeGameAmount,
                    nextLeftCount: undefined
                  }));

                  if ((_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
                    error: Error()
                  }), isAuto) : isAuto)(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
                    this.scheduleOnce(() => {
                      this.dispatch((_crd && updateRollerStatus === void 0 ? (_reportPossibleCrUseOfupdateRollerStatus({
                        error: Error()
                      }), updateRollerStatus) : updateRollerStatus)((_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
                        error: Error()
                      }), RollerStatus) : RollerStatus).END));
                    }, 1);
                  } else {
                    this.dispatch((_crd && updateRollerStatus === void 0 ? (_reportPossibleCrUseOfupdateRollerStatus({
                      error: Error()
                    }), updateRollerStatus) : updateRollerStatus)((_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
                      error: Error()
                    }), RollerStatus) : RollerStatus).END));
                  }
                });
              } else {
                if ((_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
                  error: Error()
                }), isAuto) : isAuto)(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
                  this.scheduleOnce(() => {
                    this.dispatch((_crd && updateRollerStatus === void 0 ? (_reportPossibleCrUseOfupdateRollerStatus({
                      error: Error()
                    }), updateRollerStatus) : updateRollerStatus)((_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
                      error: Error()
                    }), RollerStatus) : RollerStatus).END));
                  }, 1);
                } else {
                  this.dispatch((_crd && updateRollerStatus === void 0 ? (_reportPossibleCrUseOfupdateRollerStatus({
                    error: Error()
                  }), updateRollerStatus) : updateRollerStatus)((_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
                    error: Error()
                  }), RollerStatus) : RollerStatus).END));
                }
              }
            }
          }
        }
        /** 播放元宝上的银币动画 */


        flyYinBi(done) {
          /**第1 、5列中奖的银币才飞银币 */

          /**飞完后打开元宝中奖弹框 */
          var nodes = [];
          this.rollerViewModelArr.forEach(v => {
            nodes = nodes.concat(v.comp.getYuanBaoYinBiNode());
          });
          var endPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR((_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
            error: Error()
          }), mainViewModel) : mainViewModel).getGoodLuckPos());
          var count = 0;
          nodes.forEach(v => {
            var startPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(v.getWorldPosition());
            var cloneNode = instantiate(v);
            this.node.parent.addChild(cloneNode);
            cloneNode.setPosition(startPos);
            v.active = false;
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
        } // /**播放甲壳虫动画，播放完成之后进去切换游戏 */
        // private playBeetleAnimation(isSubGameLastPoint: boolean, rollerLaunchResult: RollerLaunchResult) {
        // 	let count = 0;
        // 	this.rollerViewModelArr.forEach(v => {
        // 		v.comp.playBeetleAnimation(() => {
        // 			count++;
        // 			if (count >= this.rollerViewModelArr.length) {
        // 				this.changeGameHandle(isSubGameLastPoint, rollerLaunchResult);
        // 			}
        // 		})
        // 	})
        // }

        /**播放甲壳虫的飞数字动画 */


        playBeeteFlyAmount(done) {
          var nodes = [];
          this.rollerViewModelArr.forEach(v => {
            nodes = nodes.concat(v.comp.getBeetleAmountNode());
          });
          var endPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR((_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
            error: Error()
          }), mainViewModel) : mainViewModel).getGoodLuckPos());
          var count = 0;
          nodes.forEach(v => {
            var startPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(v.getWorldPosition());
            var cloneNode = instantiate(v);
            this.node.parent.addChild(cloneNode);
            cloneNode.setPosition(startPos);
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
        }
        /**显示wild的动画 */


        playWildAnimation(done) {
          var amountNodes = [];
          var nodes = [];
          this.rollerViewModelArr.forEach(v => {
            nodes = nodes.concat(v.comp.getWildLiZiNode().nodes);
            amountNodes = amountNodes.concat(v.comp.getWildLiZiNode().amountNodes);
          }); // console.log("amountNodes---------",amountNodes);

          if (amountNodes.length > 0) {
            amountNodes.forEach((n, i) => {
              amountNodes[i].active = true;
              nodes[i].active = false;
              amountNodes[i].setSiblingIndex(amountNodes[i].parent.children.length);
              amountNodes[i].setWorldPosition(amountNodes[i].parent.worldPosition);
              var skeleton = n.getComponent(sp.Skeleton);
              var count = 0; // const skeletonPlayer = new SkeletonAnimationPlayer(skeleton, "animation", true, () => { 
              // 	count++
              // 	if (count >= 2) {
              // 		skeletonPlayer.stopAnimation()
              // 	}
              // })
              // skeletonPlayer.playAnimation();

              if (i === amountNodes.length - 1) {
                this.scheduleOnce(() => {
                  this.playWild2DFlyNum(done);
                }, 1);
              }
            });
          } else {
            done && done();
          } // return amountNodes

        }
        /**播放wild的加次数动画 */


        playWild2DFlyNum(done) {
          var nodes = [];
          this.rollerViewModelArr.forEach(v => {
            nodes = nodes.concat(v.comp.getWildLiZiNode().nodes);
          }); // const amountNodes = this.playWildAnimation()

          if (nodes.length > 0) {
            var endPos = this.node.getComponent(UITransform).convertToNodeSpaceAR((_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
              error: Error()
            }), mainViewModel) : mainViewModel).getFreeNumPos());
            var count1 = 0;
            (_crd && phoenixV2_Audio === void 0 ? (_reportPossibleCrUseOfphoenixV2_Audio({
              error: Error()
            }), phoenixV2_Audio) : phoenixV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).PHOENIX_ADD_NUM);
            nodes.forEach((v, i) => {
              v.active = true;
              var startPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(v.getWorldPosition());
              var cloneNode = instantiate(v);
              cloneNode.active = true;
              this.node.addChild(cloneNode);
              cloneNode.setPosition(startPos);
              v.active = false;
              tween(cloneNode).delay(0.5).to((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).subGameRollOption.beetleFlyTime, {
                position: endPos
              }).call(() => {
                cloneNode.destroy();
                count1++;

                if (count1 >= nodes.length) {
                  done && done();
                }
              }).start();
            });
          } else {
            done && done();
          }
        }

        changeGameHandle(isSubGameLastPoint, rollerLaunchResult) {
          // console.log("this.props.gameTypeInfo.currGameType",this.props.gameTypeInfo.currGameType);
          if (this.isSubGame(this.props.gameTypeInfo.currGameType)) {
            this.changeToSubGame(this.props.gameTypeInfo.currGameType, isSubGameLastPoint, rollerLaunchResult);
          } else if (this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN) {
            this.changeToMainGame(this.props.gameTypeInfo.viewGameType, rollerLaunchResult);
          }
        }
        /**
         * 切换到小游戏处理
         * @param currGameType 当前游戏
         * @param viewGameCountOver 当前小游戏次数是否结束
         * @param nextGameType 下一个游戏
         */


        changeToSubGame(currGameType, viewGameCountOver, rollerLaunchResult) {
          if (viewGameCountOver) {
            this.changeSubGameToSubGame(currGameType, rollerLaunchResult);
          } else {
            this.rollerViewModelArr.forEach((v, index) => {
              v.comp.playScatterAnimation();
            });
            this.scheduleOnce(() => {
              (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
                error: Error()
              }), mainViewModel) : mainViewModel).comp.getSlotNode().active = false;
              (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
                error: Error()
              }), mainViewModel) : mainViewModel).rollerPanelViewModel.viewNode.active = false;
              (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
                error: Error()
              }), mainViewModel) : mainViewModel).comp.getFreeNumNode().active = false;
              (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
                error: Error()
              }), mainViewModel) : mainViewModel).showSmallGame(() => {
                // this.dispatch(updateRollerStatus(RollerStatus.END))
                // 播放切换游戏动画
                this.dispatch((_crd && updateSubGameAnimationPlayInfo === void 0 ? (_reportPossibleCrUseOfupdateSubGameAnimationPlayInfo({
                  error: Error()
                }), updateSubGameAnimationPlayInfo) : updateSubGameAnimationPlayInfo)({
                  gameType: currGameType,
                  param: 0 //开门类型

                }));
              });
            }, 2); // // 如果是免费游戏，要接着弹出的免费次数框
            // mainViewModel.showDialogWin({
            // 	dialogType: DialogType.FREE_GAME_ENTRY,
            // 	params: [rollerLaunchResult.dl.si[0].freeCount],
            // }, () => {
            // 	// this.dispatch(updateRollerStatus(RollerStatus.END))
            // 	// 播放切换游戏动画
            // 	this.dispatch(updateSubGameAnimationPlayInfo({
            // 		gameType: currGameType,
            // 		param: 0 //开门类型
            // 	}))
            // })
          }
        }
        /**切换到主游戏的处理 */


        changeToMainGame(gameType, rollerLaunchResult) {
          if (this.isSubGame(gameType)) {
            // 弹出结算面板
            (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
              error: Error()
            }), mainViewModel) : mainViewModel).showDialogWin({
              dialogType: (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                error: Error()
              }), DialogType) : DialogType).FREE_GAME_SETTLEMENT,
              params: [rollerLaunchResult && rollerLaunchResult.dl.si[0].freeGameAmount]
            }, () => {
              // 播放切换游戏动画
              this.dispatch((_crd && updateSubGameAnimationPlayInfo === void 0 ? (_reportPossibleCrUseOfupdateSubGameAnimationPlayInfo({
                error: Error()
              }), updateSubGameAnimationPlayInfo) : updateSubGameAnimationPlayInfo)({
                gameType: gameType,
                param: 1 // 关门动画

              })); // 在切换回主游戏时，改变滚轴的高度

              this.changeRollerHeight((_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).MAIN); // 在开始切回主游戏时，就要把插槽的位置重置，等到gameTypeInfo数据变化时已经晚了，会看到坐标不正确

              this.changeGame((_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).MAIN);
            });
          }
        }
        /**切换小游戏到小游戏，弹出结算面板 */


        changeSubGameToSubGame(gameType, rollerLaunchResult) {
          // 弹出结算面板
          (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
            error: Error()
          }), mainViewModel) : mainViewModel).showDialogWin({
            dialogType: (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
              error: Error()
            }), DialogType) : DialogType).FREE_GAME_SETTLEMENT,
            params: [rollerLaunchResult.dl.si[0].freeGameAmount]
          }, () => {
            // 播放切换游戏动画
            this.dispatch((_crd && updateSubGameAnimationPlayInfo === void 0 ? (_reportPossibleCrUseOfupdateSubGameAnimationPlayInfo({
              error: Error()
            }), updateSubGameAnimationPlayInfo) : updateSubGameAnimationPlayInfo)({
              gameType: gameType,
              param: 1 // 关门动画

            })); // 只有在切回到小游戏1时，才改变滚轴的高度

            gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME1 && this.changeRollerHeight(gameType); // 在开始切回主游戏时，就要把插槽的位置重置，等到gameTypeInfo数据变化时已经晚了，会看到坐标不正确

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

        getIsSpeed() {
          if (this.isSubGame2()) {
            return false;
          }

          if (this.isManualStop) {
            return true;
          }

          return this.props.isSpeed;
        }

        stopRoll(i, callBack, rollerLaunchResult) {
          // 这里调停止滚动的速度
          var time = this.getIsSpeed() ? 0 : 0.2;
          var isEnd = i >= this.rollerViewModelArr.length - 1;
          var rollerComp = this.rollerViewModelArr[i];
          this.rollIndex = i; // const stopIconIndex = Math.floor(Math.random() * config.iconRollerQueue[i].length);
          // 获得停下来的数据

          var stopIconIndex = rollerLaunchResult && rollerLaunchResult.dl.si[0].rollerId[i];
          var scatterCount = this.getScatterCount(i, rollerLaunchResult); // 下一个列是否有边框

          var nextColmunIsBorder = this.getScatterCount(i + 1, rollerLaunchResult) >= 2; // console.log("scatterCount", scatterCount, i, stopIconIndex);
          // 是否快速边框，前面出现2个以上的scatter，这个参数才为true

          var isSpeedBorder = scatterCount >= 2;
          rollerComp.comp.stopRoll(stopIconIndex, () => {
            if (this.node.isValid) {
              if (isEnd) {
                callBack(rollerLaunchResult);
              } else {
                nextColmunIsBorder && this.stopRoll(i + 1, callBack, rollerLaunchResult);
              }
            }
          }, isSpeedBorder, rollerLaunchResult); // 小游戏2滚轴一起停

          if (this.isSubGame2()) {
            if (!isEnd) {
              this.stopRoll(i + 1, callBack, rollerLaunchResult);
            }
          } else {
            // console.log("stoproll time ", i, time)
            !nextColmunIsBorder && this.scheduleOnce(() => {
              if (this.node.isValid) {
                if (!isEnd) {
                  this.stopRoll(i + 1, callBack, rollerLaunchResult);
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


        getScatterCount(endColumnIndex, rollerLaunchResult) {
          // 前两列不计算数量或者小游戏2也不计算
          if (endColumnIndex < 2 || this.isSubGame2()) {
            return 0;
          }

          endColumnIndex = endColumnIndex >= this.rollerViewModelArr.length ? this.rollerViewModelArr.length : endColumnIndex;
          var rollerId = rollerLaunchResult && rollerLaunchResult.dl.si[0].rollerId;
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


        startPlayWinIcon(linePlayTime, done, rollerLaunchResult) {
          var winLine = 0;

          if (rollerLaunchResult) {
            var wp = rollerLaunchResult.dl.si[0].winningPosition;
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
            if (this.isSubGame1()) {
              linePlayTime = 4;
            } else {
              linePlayTime = 2;
            }

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
          var magnification = (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).rollerLaunchResult && (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).rollerLaunchResult.dl.si[0].otherGameAttributesVo.phoenixMagnification;
          var labelNode = (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
            error: Error()
          }), mainViewModel) : mainViewModel).comp.getSmallMultipleNode();
          labelNode.active = magnification > 0 && this.isSubGame1(); // console.log("!this.isShowMultip",!this.isShowMultip,magnification > 0,this.isSubGame1());

          labelNode.getComponent(Label).string = "X" + magnification;

          if (!this.isShowMultip && this.isSubGame1() && magnification > 0) {
            tween(labelNode).to(0.5, {
              scale: new Vec3(1.5, 1.5)
            }).to(0.5, {
              scale: new Vec3(1, 1)
            }).call(() => {
              this.isShowMultip = true;
            }).start();
          }

          if (this.isMain()) {
            this.scheduleOnce(() => {
              this.executeWinIcon(++index, lines, wp, linePlayTime, done);
            }, linePlayTime);
          } else {
            this.scheduleOnce(() => {
              this.executeWinIcon(-1, lines, wp, linePlayTime, done);
            }, linePlayTime);
          }
        }
        /**播放元宝出现 及特殊（1 、5列）中奖动画 */


        showYuanBaoIcon(linePlayTime, done, rollerLaunchResult) {
          var winLine = 0;
          var showYuanBao = rollerLaunchResult.dl.si[0].otherGameAttributesVo.yuanBaoSpecialEffect; //是否有特殊位置（1 、5列）元宝中奖

          var yuanBaoWp = rollerLaunchResult.dl.si[0].otherGameAttributesVo.yuanBaoPosition;
          var lines = [];

          if (showYuanBao) {
            for (var key in yuanBaoWp) {
              lines.push(key);
            }

            winLine = lines.length;
            this.executeYuanBaoWinIcon(0, lines, yuanBaoWp, linePlayTime, done);
          } else {
            done();
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


        executeYuanBaoWinIcon(index, lines, wp, linePlayTime, done) {
          if (!(_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).rollerLaunchResult) {
            return;
          }

          if (index >= lines.length) {
            index = -1;
            done && done();
          }

          var winIconArr = [];

          if (index === -1) {
            linePlayTime = 2;
            winIconArr = wp;
          } else {
            winIconArr = wp; // 一条线中了几个图标就播放多少秒

            linePlayTime = wp.length;
          } // this.rollerViewModelArr.forEach(v => v.comp.pauseWinIcon())


          winIconArr.forEach(v => {
            var columnIndex = v[0];
            var iconIndex = v[1];
            this.rollerViewModelArr[columnIndex].comp.playYuanBaoWinIcon(iconIndex);
          }); // this.scheduleOnce(() => {
          // 	this.executeYuanBaoWinIcon(++index, lines, wp, linePlayTime, done);
          // }, linePlayTime);
        }

        bindEvent() {}

        useProps(key, value) {
          if (this.node && this.node.isValid) {
            if (key === 'rollerStatus') {
              if ((_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
                error: Error()
              }), RollerStatus) : RollerStatus).RUNNING === value.cur) {
                this.startRoll();
              } else if ((_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
                error: Error()
              }), RollerStatus) : RollerStatus).ENDING === value.cur) {
                this.stopRollAll(true, this.sendBetTime, (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
                  error: Error()
                }), cacheData) : cacheData).rollerLaunchResult);
              }
            } else if (key === 'gameTypeInfo') {
              this.changeGame(this.props.gameTypeInfo.viewGameType);
            }
          }
        }

        changeGame(gameType) {
          var columnListLayout = this.propertyNode.props_column_list.getComponent(Layout);
          var isSubGame2 = gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2;
          var isSubGame1 = gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1;
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
            this.changeRollerHeight(gameType);
          }

          if (isMain || isSubGame1) {
            this.rollerViewModelArr.forEach(v => v.comp.replaceMultiRollerIcon());
          }
        }
        /**改变滚轴的高度 */


        changeRollerHeight(gameType) {
          var rollerHeight = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.rollerHeight;

          if (gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2) {
            rollerHeight = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).subGameRollOption.rollerHeight2;
          } else if (gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1) {
            rollerHeight = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).subGameRollOption.rollerHeight1;
          }

          this.node.getComponent(UITransform).height = rollerHeight;
          this.rollerViewModelArr.forEach(v => v.comp.resetIconPos(gameType));
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
            this.node.isValid && this.stopRollAll(false, this.sendBetTime, (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
              error: Error()
            }), cacheData) : cacheData).rollerLaunchResult);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3c25cf42b0b2031cf6f3d084fd5778d111f285c8.js.map