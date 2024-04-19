System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Layout, Node, tween, UITransform, Vec3, BaseComponent, IconPool, config, GxfcV2RollerViewModel, DialogType, GameType, getBigWinConfig, IconId, isAuto, isSubGameToSubGame, RollerStatus, updateRollerStatus, cacheData, changeGame, updateGold, updateSubGameAnimationPlayInfo, updateWinloss, GxfcV2_Audio, mainViewModel, sourceManageSeletor, PrefabPathDefine, SoundPathDefine, _dec, _class, _crd, ccclass, property, GxfcV2_RollerPanel;

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

  function _reportPossibleCrUseOfGxfcV2RollerViewModel(extras) {
    _reporterNs.report("GxfcV2RollerViewModel", "../viewModel/GxfcV2RollerViewModel", _context.meta, extras);
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

  function _reportPossibleCrUseOfgetBigWinConfig(extras) {
    _reporterNs.report("getBigWinConfig", "../type", _context.meta, extras);
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

  function _reportPossibleCrUseOfGxfcV2_Audio(extras) {
    _reporterNs.report("GxfcV2_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmainViewModel(extras) {
    _reporterNs.report("mainViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
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
      GxfcV2RollerViewModel = _unresolved_5.default;
    }, function (_unresolved_6) {
      DialogType = _unresolved_6.DialogType;
      GameType = _unresolved_6.GameType;
      getBigWinConfig = _unresolved_6.getBigWinConfig;
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
      GxfcV2_Audio = _unresolved_10.GxfcV2_Audio;
      mainViewModel = _unresolved_10.mainViewModel;
      sourceManageSeletor = _unresolved_10.sourceManageSeletor;
    }, function (_unresolved_11) {
      PrefabPathDefine = _unresolved_11.PrefabPathDefine;
    }, function (_unresolved_12) {
      SoundPathDefine = _unresolved_12.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3f3b9mCCQdI3alAayrdWjAv", "GxfcV2_RollerPanel", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Layout', 'Node', 'tween', 'UITransform', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GxfcV2_RollerPanel", GxfcV2_RollerPanel = (_dec = ccclass('GxfcV2_RollerPanel'), _dec(_class = class GxfcV2_RollerPanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
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

          /**小游戏里定格的金wild图标 */
          this.winWildIcon = [];
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
              }), GameType) : GameType).MAIN,
              currGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).MAIN,
              viewGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).MAIN,
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
            var roller = new (_crd && GxfcV2RollerViewModel === void 0 ? (_reportPossibleCrUseOfGxfcV2RollerViewModel({
              error: Error()
            }), GxfcV2RollerViewModel) : GxfcV2RollerViewModel)().mountViewNode(column).appendTo(this.propertyNode.props_column_list).connect();
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

        startRoll() {
          var sendBetTime = (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).sendBetTime;
          this.sendBetTime = sendBetTime;
          this.isManualStop = false;
          console.log("start roll time " + sendBetTime);
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
          (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
            error: Error()
          }), mainViewModel) : mainViewModel).comp.isChangeSmall = false;
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
              var ColumnIndex = (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
                error: Error()
              }), cacheData) : cacheData).rollerLaunchResult.dl.si[0].freeWildRollerId;

              if (ColumnIndex && ColumnIndex.length > 0) {
                for (var i = 0; i < ColumnIndex.length; i++) {
                  this.stopWildRoll(ColumnIndex[i], this.rollEndHandle.bind(this, (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
                    error: Error()
                  }), cacheData) : cacheData).rollerLaunchResult), (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
                    error: Error()
                  }), cacheData) : cacheData).rollerLaunchResult);
                  this.rollerViewModelArr[ColumnIndex[i]].comp.joinJinWildIcon(ColumnIndex[i], (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
                    error: Error()
                  }), cacheData) : cacheData).rollerLaunchResult);
                }
              }

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
          }

          console.log("rollerpanel stop roll time " + sendBetTime);
          this.stopRoll(0, this.rollEndHandle.bind(this, rollerLaunchResult), rollerLaunchResult);
        }
        /**
         * 动画滚动结束处理
         */


        rollEndHandle(rollerLaunchResult) {
          var magnification = rollerLaunchResult.dl.si[0].magnification;
          var bigWinConfig = (_crd && getBigWinConfig === void 0 ? (_reportPossibleCrUseOfgetBigWinConfig({
            error: Error()
          }), getBigWinConfig) : getBigWinConfig)(magnification); // 是否小游戏最后一局

          var isSubGameLastPoint = !this.isMain() && this.props.gameTypeInfo.leftCount <= 1;
          this.inStop = false;
          var auto = (_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
            error: Error()
          }), isAuto) : isAuto)(this.props.autoLauncherInfo, this.props.gameTypeInfo);
          var winLine; // 最开始就看是否需要延展金wild同列图标，播放动画

          this.playJinFaAnimation(rollerLaunchResult, () => {
            //然后再播放中奖线路
            if (this.isSubGame1()) {
              this.scheduleOnce(() => {
                winLine = this.startPlayWinIcon((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).normalRollOption.winIconFlickerTime, () => {}, rollerLaunchResult);
              }, 1);
            } else {
              winLine = this.startPlayWinIcon((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).normalRollOption.winIconFlickerTime, () => {}, rollerLaunchResult);
            }

            if (winLine === 0) {
              this.playBigWinHandle(bigWinConfig, auto, isSubGameLastPoint, rollerLaunchResult);
            } else {
              this.playWinAudio(); // 中奖之后延迟一点结束

              this.scheduleOnce(() => {
                this.playBigWinHandle(bigWinConfig, auto, isSubGameLastPoint, rollerLaunchResult);
              }, 1);
            }
          });

          if (!bigWinConfig) {
            this.updateWinloss(rollerLaunchResult);
          }
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
        /**数组中的值是否全部相等[10,10,10] */


        isAllEqual(arr) {
          if (arr.length > 0) {
            return !arr.some(function (value, index) {
              return value !== arr[0];
            });
          } else {
            return true;
          }
        }

        playWinAudio() {// if (this.isWinWild()) {
          // 	GxfcV2_Audio.playOneShot(SoundPathDefine.wild)
          // } else {
          // 	GxfcV2_Audio.playOneShot(SoundPathDefine.haveCoin)
          // }
        }

        updateWinloss(rollerLaunchResult) {
          var si = rollerLaunchResult.dl.si[0];
          var magnification = rollerLaunchResult.dl.si[0].magnification;
          var bigWinConfig = (_crd && getBigWinConfig === void 0 ? (_reportPossibleCrUseOfgetBigWinConfig({
            error: Error()
          }), getBigWinConfig) : getBigWinConfig)(magnification); // 本局输赢

          var roundTw = si.tw;

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
              }), updateGold) : updateGold)(si.bl));
            }
          } else {
            // 小游戏1在游戏中余额之后在切换到主游戏时才加上去
            if (this.isSubGame1()) {
              if (bigWinConfig) {
                this.dispatch((_crd && updateWinloss === void 0 ? (_reportPossibleCrUseOfupdateWinloss({
                  error: Error()
                }), updateWinloss) : updateWinloss)(si.freeGameAmount));
              } else {
                this.scheduleOnce(() => {
                  this.dispatch((_crd && updateWinloss === void 0 ? (_reportPossibleCrUseOfupdateWinloss({
                    error: Error()
                  }), updateWinloss) : updateWinloss)(si.freeGameAmount));
                }, 1);
              }
            }

            if (this.isChangeGame()) {
              this.dispatch((_crd && updateGold === void 0 ? (_reportPossibleCrUseOfupdateGold({
                error: Error()
              }), updateGold) : updateGold)(si.bl));
              this.dispatch((_crd && updateWinloss === void 0 ? (_reportPossibleCrUseOfupdateWinloss({
                error: Error()
              }), updateWinloss) : updateWinloss)(si.freeGameAmount));
            }
          }
        }
        /**播放大奖处理 */


        playBigWinHandle(bigWinConfig, auto, isSubGameLastPoint, rollerLaunchResult) {
          // 是否进入小游戏2
          // let isEnterSubGame2 = this.props.gameTypeInfo.viewGameType !== GameType.SUBGAME2 && this.props.gameTypeInfo.currGameType === GameType.SUBGAME2;
          var isEnterSubGame2 = false; // 进入小游戏2时不播放大奖

          if (!isEnterSubGame2 && bigWinConfig) {
            // 延迟一点点播放大奖
            this.scheduleOnce(() => {
              !this.isSubGame2() && this.updateWinloss(rollerLaunchResult);
              var si = rollerLaunchResult.dl.si[0];
              var winloss = si.tw;
              winloss = winloss === 0 ? si.freeGameAmount : winloss;
              var isChangeGame = this.isChangeGame();

              if (isChangeGame && si.freeGameAmount > 0) {
                winloss = si.freeGameAmount;
              } // 中大奖提示框


              this.node.isValid && (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
                error: Error()
              }), mainViewModel) : mainViewModel).showDialogWin({
                dialogType: bigWinConfig.name,
                params: [winloss]
              }, () => {
                this.updateRollerStatusEnd(bigWinConfig, auto, isSubGameLastPoint, rollerLaunchResult);
              });
            }, 0.8);
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
          var isChangeGame = this.isChangeGame();

          if (isChangeGame) {
            if (this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME1) {
              (_crd && GxfcV2_Audio === void 0 ? (_reportPossibleCrUseOfGxfcV2_Audio({
                error: Error()
              }), GxfcV2_Audio) : GxfcV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).ling, 1, false);
            }

            this.scheduleOnce(() => {
              this.changeGameHandle(isSubGameLastPoint, rollerLaunchResult);
            }, 1);
          } else {
            if (auto) {
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
        /**播放金发动画，把与金发同一列的所有图标替换为金发 */


        playJinFaAnimation(rollerLaunchResult, done) {
          var wildRollerId = rollerLaunchResult.dl.si[0].wildRollerId;
          var freeWildRollerId = rollerLaunchResult.dl.si[0].freeWildRollerId;
          var count = 0;

          if (wildRollerId && wildRollerId.length > 0) {
            for (var i = 0; i < wildRollerId.length; i++) {
              count++;

              if (!freeWildRollerId) {
                this.rollerViewModelArr[wildRollerId[i]].comp.playJinFaWild(rollerLaunchResult, wildRollerId[i], done);
              } else {
                if (!freeWildRollerId.includes(wildRollerId[i])) {
                  this.rollerViewModelArr[wildRollerId[i]].comp.playJinFaWild(rollerLaunchResult, wildRollerId[i], done);
                } else {
                  if (count === wildRollerId.length) {
                    done && done();
                  }
                }
              }
            }
          } else {
            done && done();
          }
        }

        playParticle2D(startPos, endPos, parentNode) {
          var particleNode = instantiate((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).Particle2D).source);
          particleNode.setPosition(startPos);
          parentNode.addChild(particleNode);
          tween(particleNode).to((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).subGameRollOption.beetleFlyTime, {
            position: endPos
          }).removeSelf().start();
        }

        changeGameHandle(isSubGameLastPoint, rollerLaunchResult) {
          this.updateWinloss(rollerLaunchResult);

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
            }); // 如果是免费游戏，要接着弹出的免费次数框

            this.scheduleOnce(() => {
              (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
                error: Error()
              }), mainViewModel) : mainViewModel).showDialogWin({
                dialogType: (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                  error: Error()
                }), DialogType) : DialogType).FREE_GAME_ENTRY,
                params: [rollerLaunchResult.dl.si[0].freeCount]
              }, () => {
                // this.dispatch(updateRollerStatus(RollerStatus.END))
                // 播放切换游戏动画
                this.dispatch((_crd && updateSubGameAnimationPlayInfo === void 0 ? (_reportPossibleCrUseOfupdateSubGameAnimationPlayInfo({
                  error: Error()
                }), updateSubGameAnimationPlayInfo) : updateSubGameAnimationPlayInfo)({
                  gameType: currGameType,
                  param: 0 //开门类型

                }));
              });
            }, 2);
          }
        }
        /**切换到主游戏的处理 */


        changeToMainGame(gameType, rollerLaunchResult) {
          if (this.isSubGame(gameType)) {
            // 弹出结算面板
            (_crd && GxfcV2_Audio === void 0 ? (_reportPossibleCrUseOfGxfcV2_Audio({
              error: Error()
            }), GxfcV2_Audio) : GxfcV2_Audio).play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).Small_end, true);
            (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
              error: Error()
            }), mainViewModel) : mainViewModel).showDialogWin({
              dialogType: (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                error: Error()
              }), DialogType) : DialogType).FREE_GAME_SETTLEMENT,
              params: [rollerLaunchResult.dl.si[0].freeGameAmount]
            }, () => {
              // 在切换回主游戏时，改变滚轴的高度
              // 这里要注意：小游戏退回到大厅有一个放大缩小的过程，如果把 changeRollerHeight 放到放大后执行，获取的坐标是不准确的
              this.changeRollerHeight((_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).MAIN); // 播放切换游戏动画

              this.dispatch((_crd && updateSubGameAnimationPlayInfo === void 0 ? (_reportPossibleCrUseOfupdateSubGameAnimationPlayInfo({
                error: Error()
              }), updateSubGameAnimationPlayInfo) : updateSubGameAnimationPlayInfo)({
                gameType: gameType,
                param: 1 // 关门动画

              })); // this.changeRollerHeight(GameType.MAIN);
              // 在开始切回主游戏时，就要把插槽的位置重置，等到gameTypeInfo数据变化时已经晚了，会看到坐标不正确

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
          var rollerComp = this.rollerViewModelArr[i]; // const stopIconIndex = Math.floor(Math.random() * config.iconRollerQueue[i].length);
          // 获得停下来的数据

          var stopIconIndex = rollerLaunchResult.dl.si[0].rollerId[i];
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

        stopWildRoll(i, callBack, rollerLaunchResult) {
          // // 这里调停止滚动的速度
          // const time = this.getIsSpeed() ? 0 : 0.2;
          // // const isEnd = i >= this.rollerViewModelArr.length - 1;
          var rollerComp = this.rollerViewModelArr[i]; // // 获得停下来的数据

          var stopIconIndex = rollerLaunchResult.dl.si[0].rollerId[i]; // const scatterCount = this.getScatterCount(i, rollerLaunchResult);
          // // 下一个列是否有边框
          // const nextColmunIsBorder = this.getScatterCount(i + 1, rollerLaunchResult) >= 2;
          // console.log("scatterCount", scatterCount, i, stopIconIndex);
          // 是否快速边框，前面出现2个以上的scatter，这个参数才为true
          // const isSpeedBorder = scatterCount >= 2;

          rollerComp.comp.stopRoll(stopIconIndex, () => {
            if (this.node.isValid) {
              // if (!isEnd) {
              callBack(rollerLaunchResult); // }
            }
          }, false, rollerLaunchResult);
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
          var rollerId = rollerLaunchResult.dl.si[0].rollerId;
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
            var wp = rollerLaunchResult.dl.si[0].wp;
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
          } //小游戏切换到主游戏后不再播放中奖线路


          if ((_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
            error: Error()
          }), mainViewModel) : mainViewModel).comp.isChangeSmall && this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN) {
            this.unscheduleAllCallbacks();
            this.rollerViewModelArr.forEach(v => v.comp.stopWinIcon());
            return;
          }

          if (index >= lines.length) {
            index = -1;
            done && done();
          }

          var lineNumber = lines[index];
          var winIconArr = []; // console.log("index",index);

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
            var wildList = this.rollerViewModelArr[columnIndex].comp.getWildListNode().active;
            var wildRollerId = (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
              error: Error()
            }), cacheData) : cacheData).rollerLaunchResult.dl.si[0].freeWildRollerId;

            if (wildRollerId && wildRollerId.includes(columnIndex)) {
              this.rollerViewModelArr[columnIndex].comp.stopWinIcon();
            } else {
              if (this.isSubGame1() && wildRollerId) {
                this.rollerViewModelArr[columnIndex].comp.isRoll = false;
              }

              this.rollerViewModelArr[columnIndex].comp.playWinIcon(iconIndex);
            } // if (this.isSubGame1() && wildList) {
            // 	this.rollerViewModelArr[columnIndex].comp.stopWinIcon();
            // } else {
            // 	 this.rollerViewModelArr[columnIndex].comp.playWinIcon(iconIndex);
            // }

          });

          if (this.isSubGame1()) {
            var wildRollerId = (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
              error: Error()
            }), cacheData) : cacheData).rollerLaunchResult.dl.si[0].freeWildRollerId;

            if (wildRollerId && wildRollerId.length > 0) {
              for (var i = 0; i < wildRollerId.length; i++) {
                var columnIndex = wildRollerId[i];
                var winWildIcon = this.rollerViewModelArr[columnIndex].comp.winWildIcon;

                for (var w = 0; w < winWildIcon.length; w++) {
                  // winWildIcon[w].wildIcon.getChildByName("face-animation").active = true;
                  // winWildIcon[w].wildIcon.getChildByName("focusBorder").active = true;
                  winWildIcon[w].getChildByName("face-animation").active = true;
                  winWildIcon[w].getChildByName("focusBorder").active = true;
                }
              }
            }
          }

          if (this.isSubGame1()) {
            this.scheduleOnce(() => {
              this.executeWinIcon(-1, lines, wp, linePlayTime, done);
            }, linePlayTime);
          } else {
            this.scheduleOnce(() => {
              this.executeWinIcon(++index, lines, wp, linePlayTime, done);
            }, linePlayTime);
          }
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

        isWinWild() {
          for (var i = 0; i < this.rollerViewModelArr.length; i++) {
            var element = this.rollerViewModelArr[i];

            if (element.comp.isWinWild()) {
              return true;
            }
          }

          return false;
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
//# sourceMappingURL=0079cd362e8f95bd311dc5d066fdde37a3a5d50a.js.map