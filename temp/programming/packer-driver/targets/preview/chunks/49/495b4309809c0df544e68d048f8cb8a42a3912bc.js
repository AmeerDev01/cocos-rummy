System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, tween, Vec3, BaseComponent, IconPool, config, ThorV2RollerViewModel, DialogType, GameType, getBigWinConfig, RollerStatus, updateRollerStatus, cacheData, playWinOddsAnimation, updateFreeGameOdds, updateGold, updateSubGameAnimationPlayInfo, updateSubGameWinloss, updateWinIconDataItem, updateWinloss, thorv2_Audio, mainViewModel, sourceManageSeletor, PrefabPathDefine, SoundPathDefine, global, setLoadingAction, _dec, _class, _crd, ccclass, property, ThorV2_RollerPanel;

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

  function _reportPossibleCrUseOfThorV2RollerViewModel(extras) {
    _reporterNs.report("ThorV2RollerViewModel", "../viewModel/ThorV2RollerViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherInfo(extras) {
    _reporterNs.report("AutoLauncherInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClearIconData(extras) {
    _reporterNs.report("ClearIconData", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClearRoundData(extras) {
    _reporterNs.report("ClearRoundData", "../type", _context.meta, extras);
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

  function _reportPossibleCrUseOfRollerLaunchResult(extras) {
    _reporterNs.report("RollerLaunchResult", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerStatus(extras) {
    _reporterNs.report("RollerStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinIconData(extras) {
    _reporterNs.report("WinIconData", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateRollerStatus(extras) {
    _reporterNs.report("updateRollerStatus", "../store/actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcacheData(extras) {
    _reporterNs.report("cacheData", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayWinOddsAnimation(extras) {
    _reporterNs.report("playWinOddsAnimation", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateFreeGameOdds(extras) {
    _reporterNs.report("updateFreeGameOdds", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateGold(extras) {
    _reporterNs.report("updateGold", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateSubGameAnimationPlayInfo(extras) {
    _reporterNs.report("updateSubGameAnimationPlayInfo", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateSubGameWinloss(extras) {
    _reporterNs.report("updateSubGameWinloss", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateWinIconDataItem(extras) {
    _reporterNs.report("updateWinIconDataItem", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateWinloss(extras) {
    _reporterNs.report("updateWinloss", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfthorv2_Audio(extras) {
    _reporterNs.report("thorv2_Audio", "../index", _context.meta, extras);
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

  function _reportPossibleCrUseOfThorV2Icon(extras) {
    _reporterNs.report("ThorV2Icon", "./ThorV2_Icon", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetLoadingAction(extras) {
    _reporterNs.report("setLoadingAction", "../../../hall/store/actions/baseBoard", _context.meta, extras);
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
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      IconPool = _unresolved_3.IconPool;
    }, function (_unresolved_4) {
      config = _unresolved_4.default;
    }, function (_unresolved_5) {
      ThorV2RollerViewModel = _unresolved_5.default;
    }, function (_unresolved_6) {
      DialogType = _unresolved_6.DialogType;
      GameType = _unresolved_6.GameType;
      getBigWinConfig = _unresolved_6.getBigWinConfig;
      RollerStatus = _unresolved_6.RollerStatus;
    }, function (_unresolved_7) {
      updateRollerStatus = _unresolved_7.updateRollerStatus;
    }, function (_unresolved_8) {
      cacheData = _unresolved_8.cacheData;
    }, function (_unresolved_9) {
      playWinOddsAnimation = _unresolved_9.playWinOddsAnimation;
      updateFreeGameOdds = _unresolved_9.updateFreeGameOdds;
      updateGold = _unresolved_9.updateGold;
      updateSubGameAnimationPlayInfo = _unresolved_9.updateSubGameAnimationPlayInfo;
      updateSubGameWinloss = _unresolved_9.updateSubGameWinloss;
      updateWinIconDataItem = _unresolved_9.updateWinIconDataItem;
      updateWinloss = _unresolved_9.updateWinloss;
    }, function (_unresolved_10) {
      thorv2_Audio = _unresolved_10.thorv2_Audio;
      mainViewModel = _unresolved_10.mainViewModel;
      sourceManageSeletor = _unresolved_10.sourceManageSeletor;
    }, function (_unresolved_11) {
      PrefabPathDefine = _unresolved_11.PrefabPathDefine;
    }, function (_unresolved_12) {
      SoundPathDefine = _unresolved_12.SoundPathDefine;
    }, function (_unresolved_13) {
      global = _unresolved_13.global;
    }, function (_unresolved_14) {
      setLoadingAction = _unresolved_14.setLoadingAction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b11b43CUwxEErk1s5wIHJwv", "ThorV2_RollerPanel", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Label', 'Layout', 'Node', 'tween', 'UITransform', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ThorV2_RollerPanel", ThorV2_RollerPanel = (_dec = ccclass('ThorV2_RollerPanel'), _dec(_class = class ThorV2_RollerPanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
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
          this.inStop = false;
          this.isWaitEnding = false;
          this.sendBetTime = 0;
          this.propertyNode = {};
          this.props = {
            /**滚动状态 */
            rollerStatus: (_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
              error: Error()
            }), RollerStatus) : RollerStatus).END,
            isSpeed: false,
            isManualSpeed: false,
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
            winloss: 0,
            subGameWinloss: 0,
            freeGameOdds: 0
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
            var column = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine).ROLLER).source;
            var roller = new (_crd && ThorV2RollerViewModel === void 0 ? (_reportPossibleCrUseOfThorV2RollerViewModel({
              error: Error()
            }), ThorV2RollerViewModel) : ThorV2RollerViewModel)().mountView(column).appendTo(this.node).connect();
            this.rollerViewModelArr.push(roller); // roller.comp.setColumnEffectNode(this.propertyNode.props_column_effect);

            roller.setEvent({
              onCheckNextLeftCount: () => {}
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
          console.log("start roll time " + sendBetTime);
          (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
            error: Error()
          }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).ROLLER_BEGIN);
          this.dispatch((_crd && updateWinloss === void 0 ? (_reportPossibleCrUseOfupdateWinloss({
            error: Error()
          }), updateWinloss) : updateWinloss)(0));
          this.unscheduleAllCallbacks();
          var count = 0;
          this.rollerViewModelArr.forEach((v, index) => {
            v.comp.startRoll(this.props.isSpeed, () => {
              count++;

              if (count >= this.rollerViewModelArr.length) {
                this.isWaitEnding = true;
                this.setWaitReturnSchedule();
              }
            });
          });
        }
        /**等待数据返回定时器 */


        setWaitReturnSchedule() {
          this.scheduleOnce(() => {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).hallDispatch((_crd && setLoadingAction === void 0 ? (_reportPossibleCrUseOfsetLoadingAction({
              error: Error()
            }), setLoadingAction) : setLoadingAction)({
              isShow: true
            }));
          }, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).waitDataReturnTime);
        }

        speedRoller() {
          this.rollerViewModelArr.forEach((v, index) => {
            v.comp.speed();
          });
        }

        stopRollAll(sendBetTime, rollerLaunchResult) {
          if (this.inStop) {
            return;
          }

          this.unscheduleAllCallbacks();
          (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
            error: Error()
          }), global) : global).hallDispatch((_crd && setLoadingAction === void 0 ? (_reportPossibleCrUseOfsetLoadingAction({
            error: Error()
          }), setLoadingAction) : setLoadingAction)({
            isShow: false
          }));
          this.inStop = true;

          if ((_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
            error: Error()
          }), RollerStatus) : RollerStatus).RUNNING === this.props.rollerStatus) {
            this.dispatch((_crd && updateRollerStatus === void 0 ? (_reportPossibleCrUseOfupdateRollerStatus({
              error: Error()
            }), updateRollerStatus) : updateRollerStatus)((_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
              error: Error()
            }), RollerStatus) : RollerStatus).ENDING));
          }

          this.playStopRollSound();
          console.log("rollerpanel stop roll time " + sendBetTime);
          var count = 0;
          this.rollerViewModelArr.forEach((v, i) => {
            // 获得停下来的数据
            var stopIconIndex = rollerLaunchResult.dl.si[0].rollerId[i];
            v.comp.stopRoll(stopIconIndex, () => {
              count++;

              if (this.node.isValid && count >= this.rollerViewModelArr.length) {
                this.rollEndHandle(rollerLaunchResult);
              }
            }, false, rollerLaunchResult);
          });
        }

        playStopRollSound() {
          this.scheduleOnce(() => {
            if (!this.props.isManualSpeed && !this.props.isSpeed) {
              (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
                error: Error()
              }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).DROP_BOTTOM);
            } else {
              (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
                error: Error()
              }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).QUICK_STOP);
            }
          }, 0.3);
        }
        /**
         * 动画滚动结束处理
         */


        rollEndHandle(rollerLaunchResult) {
          this.inStop = false;
          var clearIconPositions = this.getClearIconPos(rollerLaunchResult);
          this.clearFlowHandle(rollerLaunchResult, clearIconPositions);
        }

        playScatterAnimation(rollerLaunchResult, done) {
          var count = 0;
          this.rollerViewModelArr.forEach(v => {
            v.comp.playScatterAnimation(() => {
              count++;

              if (count >= this.rollerViewModelArr.length) {
                done && done();
              }
            });
          });
        }
        /**消除流程处理 */


        clearFlowHandle(rollerLaunchResult, clearRoundDatas) {
          if (clearRoundDatas.length === 0) {
            this.updateEndStatus(rollerLaunchResult);
            return;
          }

          var si = rollerLaunchResult.dl.si[0];
          this.clearIconHandle(0, clearRoundDatas, () => {
            if (clearRoundDatas.length > 1 && si.otherGameAttributesVo.itemTotalMultiplier > 0) {
              (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
                error: Error()
              }), mainViewModel) : mainViewModel).comp.flyFreeGameTotalOdds(isFly => {
                this.playOddsAnimation(rollerLaunchResult);
                this.playLabelAnimation(rollerLaunchResult, isFly, () => {
                  this.updateEndStatus(rollerLaunchResult);
                });
              });
            } else {
              this.updateEndStatus(rollerLaunchResult);
            }
          });
        }

        updateEndStatus(rollerLaunchResult) {
          var _this = this;

          var si = rollerLaunchResult.dl.si[0];
          var isChangeGame = this.isChangeGame();

          var overHandle = function overHandle(isUpdateGold) {
            if (isUpdateGold === void 0) {
              isUpdateGold = true;
            }

            if (!isChangeGame) {
              (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
                error: Error()
              }), mainViewModel) : mainViewModel).comp.updateEndStatus(isUpdateGold);
            } else {
              _this.changeGameHandle(rollerLaunchResult);
            }
          };

          this.dispatch((_crd && updateWinloss === void 0 ? (_reportPossibleCrUseOfupdateWinloss({
            error: Error()
          }), updateWinloss) : updateWinloss)(si.totalRewards));

          var overHandleBeforeHandle = () => {
            if (this.isSubGame1()) {
              this.subGameOverHandle(rollerLaunchResult, () => {
                overHandle(false);
              });
            } else {
              overHandle();
            }
          }; // 有大奖播放大奖


          var bigWinConfig = (_crd && getBigWinConfig === void 0 ? (_reportPossibleCrUseOfgetBigWinConfig({
            error: Error()
          }), getBigWinConfig) : getBigWinConfig)(si.magnification);

          if (bigWinConfig) {
            this.playBigWinHandle(bigWinConfig, rollerLaunchResult, () => {
              overHandleBeforeHandle();
            });
          } else {
            overHandleBeforeHandle();
          }
        }
        /**子游戏的结束处理 */


        subGameOverHandle(rollerLaunchResult, done) {
          var si = rollerLaunchResult.dl.si[0];
          var firstDelayTime = 0;

          if (si.freeGameAmount > this.props.subGameWinloss) {
            this.dispatch((_crd && updateSubGameWinloss === void 0 ? (_reportPossibleCrUseOfupdateSubGameWinloss({
              error: Error()
            }), updateSubGameWinloss) : updateSubGameWinloss)(si.freeGameAmount));
            firstDelayTime = 0.5;
          }

          if (si.otherGameAttributesVo.gameFreeGametotalMultiplier > this.props.freeGameOdds) {
            tween(this.node).delay(0.5).call(() => {
              this.dispatch((_crd && updateFreeGameOdds === void 0 ? (_reportPossibleCrUseOfupdateFreeGameOdds({
                error: Error()
              }), updateFreeGameOdds) : updateFreeGameOdds)(si.otherGameAttributesVo.gameFreeGametotalMultiplier));
            }).delay(0.5).call(() => {
              done && done();
            }).start();
          } else {
            done && done();
          }
        }
        /**播放倍率动画 */


        playOddsAnimation(rollerLaunchResult) {
          this.rollerViewModelArr.forEach(v => {
            v.comp.playOddsAnimation(() => {});
          });
        }
        /**获得总的倍率 */


        getTotalOdds(rollerLaunchResult) {
          var odds = 0;
          rollerLaunchResult.dl.si[0].otherGameAttributesVo.rates.forEach(v => {
            if (v && v.length >= 4) {
              odds += v[3];
            } else {
              odds -= 999;
            }
          });
          return odds;
        }
        /**播放倍率label动画 */


        playLabelAnimation(rollerLaunchResult, isFlyTotalOdds, done) {
          var odds = this.getTotalOdds(rollerLaunchResult);
          var parentNode = (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
            error: Error()
          }), mainViewModel) : mainViewModel).viewNode;
          var endPos = (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
            error: Error()
          }), mainViewModel) : mainViewModel).comp.getWinOddsPosition();
          var count = 0;
          var oddsIcons = [];
          this.rollerViewModelArr.forEach(v => {
            oddsIcons = oddsIcons.concat(v.comp.getOddsLabelNodes());
          });

          if (oddsIcons.length === 0) {
            done && done();
            return;
          }

          var isMoreOddsLabel = oddsIcons.length > 1 || isFlyTotalOdds;
          var intervalTime = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.oddsLabelAnimationParam.moreIntervalTime;
          oddsIcons.forEach((v, i) => {
            this.scheduleOnce(() => {
              this.playSingleLabelAnimation(parentNode, v.getOddsLabelNode(), endPos, () => {
                count++;
                var isEnd = count >= oddsIcons.length;

                if (isMoreOddsLabel) {
                  (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
                    error: Error()
                  }), mainViewModel) : mainViewModel).comp.playWinlossAnimation(this.getOddsLabelValue(v.getOddsLabelNode()), isEnd);
                }

                if (isEnd) {
                  // 在结束的时候如果有倍率增加，就播放倍率的动画，否则直接结束
                  if (odds <= 0) {
                    done && done();
                  } else {
                    this.dispatch((_crd && playWinOddsAnimation === void 0 ? (_reportPossibleCrUseOfplayWinOddsAnimation({
                      error: Error()
                    }), playWinOddsAnimation) : playWinOddsAnimation)({
                      time: Date.now(),
                      timeScale: 1,
                      params: [odds, isMoreOddsLabel ? 1 : 0, done]
                    }));
                  }
                }
              });
            }, i * intervalTime);
          });
        }

        getOddsLabelValue(labelNode) {
          var oddsLabel = labelNode.getComponent(Label).string;
          var odds = parseInt(oddsLabel.toUpperCase().replace("X", ""));
          return odds;
        }

        playSingleLabelAnimation(parentNode, labelNode, endPos, done) {
          var count = 0;
          var labelTemp = instantiate(labelNode);
          labelNode.active = false;
          parentNode.addChild(labelTemp);
          labelTemp.setWorldPosition(labelNode.worldPosition);
          (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
            error: Error()
          }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).WILD_FLASH);
          var delayTime = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.oddsLabelAnimationParam.delayTime;
          var magnifyTime = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.oddsLabelAnimationParam.magnifyTime;
          var magnifyScale = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.oddsLabelAnimationParam.magnifyScale;
          var lessenTime = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.oddsLabelAnimationParam.lessenTime;
          var lessenScale = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.oddsLabelAnimationParam.lessenScale;
          tween(labelTemp).delay(delayTime).to(magnifyTime, {
            scale: new Vec3(magnifyScale, magnifyScale)
          }).to(lessenTime, {
            worldPosition: endPos,
            scale: new Vec3(lessenScale, lessenScale)
          }).call(() => {
            count++;
            labelTemp.destroy();
            done && done();
          }).start();
        }
        /**消除图标处理 */


        clearIconHandle(index, clearRoundDatas, done) {
          var clearRoundData = clearRoundDatas[index];
          /**动画完成之后执行 */

          var doneHandle = () => {
            index++;

            if (index >= clearRoundDatas.length) {
              // console.log("clearIconHandle over ====================")
              done && done();
            } else {
              this.clearIconHandle(index, clearRoundDatas, done);
            }
          };

          if (clearRoundData.clearIconDatas.length === 0) {
            done && done(); // console.log("clearIconHandle over  111====================")

            return;
          }

          if (index < clearRoundDatas.length - 1) {
            if (clearRoundDatas[index + 1].clearIconDatas.length === 0) {
              (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
                error: Error()
              }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).SP_WIN);
            } else {
              (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
                error: Error()
              }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).SP_WIN_SHOW);
            }
          } // 播放金额


          this.showPlayWinAmount(clearRoundData);
          var count = 0;
          clearRoundData.clearIconDatas.forEach(v => {
            this.rollerViewModelArr[v.columnIndex].comp.clearIcon(v.iconIndex, index, () => {
              count++;

              if (count >= clearRoundData.clearIconDatas.length) {
                this.addIconHandle(clearRoundData.clearIconDatas, doneHandle);
              }
            });
          });
        }
        /**添加图标处理 */


        addIconHandle(clearIconDatas, done) {
          var count = 0;
          clearIconDatas.forEach(v => {
            this.rollerViewModelArr[v.columnIndex].comp.clearAfterFillIconHandle(() => {
              count++;

              if (count >= clearIconDatas.length) {
                done && done();
              }
            });
          });
        }
        /**显示中奖金额 */


        showPlayWinAmount(clearRoundData) {
          var rounds = this.splitClearRoundData(clearRoundData); // let winloss = this.props.winloss;

          rounds.forEach(round => {
            round.clearIconDatas.sort((v1, v2) => this.rollerViewModelArr[v1.columnIndex].comp.getMiddleOrder(v1.iconIndex) - this.rollerViewModelArr[v2.columnIndex].comp.getMiddleOrder(v2.iconIndex));
            var winIconData = round.winIconDatas[0];
            var iconData = round.clearIconDatas[0];
            this.rollerViewModelArr[iconData.columnIndex].comp.playAmount(iconData.iconIndex, winIconData.amount);
            this.dispatch((_crd && updateWinIconDataItem === void 0 ? (_reportPossibleCrUseOfupdateWinIconDataItem({
              error: Error()
            }), updateWinIconDataItem) : updateWinIconDataItem)(_extends({}, winIconData, {
              time: Date.now()
            })));
            var winloss = this.props.winloss + winIconData.amount;
            this.dispatch((_crd && updateWinloss === void 0 ? (_reportPossibleCrUseOfupdateWinloss({
              error: Error()
            }), updateWinloss) : updateWinloss)(winloss));

            if (this.isSubGame1()) {
              var subGameWinloss = this.props.subGameWinloss + winIconData.amount;
              this.dispatch((_crd && updateSubGameWinloss === void 0 ? (_reportPossibleCrUseOfupdateSubGameWinloss({
                error: Error()
              }), updateSubGameWinloss) : updateSubGameWinloss)(subGameWinloss));
            }
          });
        }

        splitClearRoundData(clearRoundData) {
          if (clearRoundData.winIconDatas.length <= 1) {
            return [clearRoundData];
          }

          var rounds = [];
          clearRoundData.winIconDatas.forEach(roundData => {
            var data = {
              clearIconDatas: [],
              winIconDatas: []
            };
            data.winIconDatas.push(roundData);
            clearRoundData.clearIconDatas.forEach(iconData => {
              var iconDataTemp = {
                columnIndex: iconData.columnIndex,
                iconIndex: []
              };
              iconData.iconIndex.forEach(iconIndex => {
                if (this.rollerViewModelArr[iconData.columnIndex].comp.isIconType(iconIndex, roundData.itemId)) {
                  iconDataTemp.iconIndex.push(iconIndex);
                }
              });
              data.clearIconDatas.push(iconDataTemp);
            });
            rounds.push(data);
          });
          return rounds;
        }

        playWinAudio() {// if (this.isWinWild()) {
          // 	egyptv2_Audio.playOneShot(SoundPathDefine.wild)
          // } else {
          // 	egyptv2_Audio.playOneShot(SoundPathDefine.haveCoin)
          // }
        }
        /**播放大奖处理 */


        playBigWinHandle(bigWinConfig, rollerLaunchResult, done) {
          if (!bigWinConfig) {
            done && done();
            return;
          } // 延迟一点点播放大奖


          this.scheduleOnce(() => {
            var si = rollerLaunchResult.dl.si[0];
            var winloss = si.totalRewards; // winloss = winloss === 0 ? si.freeGameAmount : winloss;
            // const isChangeGame = this.isChangeGame();
            // if (isChangeGame && si.freeGameAmount > 0) {
            // 	winloss = si.freeGameAmount;
            // }
            // 中大奖提示框

            this.node.isValid && (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
              error: Error()
            }), mainViewModel) : mainViewModel).showDialogWin(bigWinConfig, winloss, () => {
              done && done();
            });
          }, 0.1);
        }

        changeGameHandle(rollerLaunchResult) {
          if (this.isSubGame(this.props.gameTypeInfo.currGameType)) {
            this.changeToSubGame(this.props.gameTypeInfo.currGameType, rollerLaunchResult);
          } else if (this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN) {
            this.changeToMainGame(this.props.gameTypeInfo.currGameType, rollerLaunchResult);
          }
        }
        /**
         * 切换到小游戏处理
         * @param currGameType 当前游戏
         * @param viewGameCountOver 当前小游戏次数是否结束
         * @param nextGameType 下一个游戏
         */


        changeToSubGame(currGameType, rollerLaunchResult) {
          var si = rollerLaunchResult.dl.si[0];
          this.scheduleOnce(() => {
            this.playScatterAnimation(rollerLaunchResult, () => {
              // 如果是免费游戏，要接着弹出的免费次数框
              (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
                error: Error()
              }), mainViewModel) : mainViewModel).enterExitSubGame({
                dialogType: (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                  error: Error()
                }), DialogType) : DialogType).FREE_GAME_ENTRY,
                params: [si.freeCount]
              }, () => {
                // 播放切换游戏动画
                this.dispatch((_crd && updateSubGameAnimationPlayInfo === void 0 ? (_reportPossibleCrUseOfupdateSubGameAnimationPlayInfo({
                  error: Error()
                }), updateSubGameAnimationPlayInfo) : updateSubGameAnimationPlayInfo)({
                  gameType: currGameType,
                  param: 0 //开门类型

                }));
              });
            });
            this.dispatch((_crd && updateWinloss === void 0 ? (_reportPossibleCrUseOfupdateWinloss({
              error: Error()
            }), updateWinloss) : updateWinloss)(si.totalRewards));
            this.dispatch((_crd && updateGold === void 0 ? (_reportPossibleCrUseOfupdateGold({
              error: Error()
            }), updateGold) : updateGold)(si.balanceAfterSettlement));
          }, 0.5);
        }
        /**切换到主游戏的处理 */


        changeToMainGame(gameType, rollerLaunchResult) {
          // 如果是免费游戏，要接着弹出的免费次数框
          (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
            error: Error()
          }), mainViewModel) : mainViewModel).enterExitSubGame({
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
              param: 1
            }));
          }); // 弹出结算面板
          // mainViewModel.showDialogWin({
          // 	dialogType: DialogType.FREE_GAME_SETTLEMENT,
          // 	params: [rollerLaunchResult.dl.si[0].freeGameAmount],
          // }, () => {
          // 	// 播放切换游戏动画
          // 	this.dispatch(updateSubGameAnimationPlayInfo({
          // 		gameType: gameType,
          // 		param: 1 // 关门动画
          // 	}))
          // 	// this.changeRollerHeight(GameType.MAIN);
          // 	// 在开始切回主游戏时，就要把插槽的位置重置，等到gameTypeInfo数据变化时已经晚了，会看到坐标不正确
          // 	this.changeGame(GameType.MAIN);
          // })
        }
        /**是否准备切换游戏 */


        isChangeGame() {
          if (!this.props.gameTypeInfo) {
            return false;
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
          return this.props.isSpeed;
        }

        isSubGame1() {
          return this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1;
        }
        /**获得要消除的图标位置 */


        getClearIconPos(rollerLaunchResult) {
          var clearRoundDatas = [];

          if (rollerLaunchResult) {
            var singleResults = rollerLaunchResult.dl.si[0].otherGameAttributesVo.singleResults;

            var _loop = function _loop() {
              var results = singleResults[i];
              var wp = results.winningPosition;
              var clearRoundData = {
                clearIconDatas: [],
                winIconDatas: []
              };
              clearRoundData.winIconDatas = results.gameWinningVos.map(v => {
                var winIconData = {
                  amount: v.amount,
                  itemId: v.itemId,
                  count: v.count
                };
                return winIconData;
              });

              for (var key in wp) {
                var iconPositions = wp[key];
                iconPositions.forEach(iconPosition => {
                  var columnIndex = iconPosition[0];
                  var clearIconData = clearRoundData.clearIconDatas.find(v => v.columnIndex === columnIndex);

                  if (!clearIconData) {
                    clearIconData = {
                      columnIndex: columnIndex,
                      iconIndex: []
                    };
                    clearRoundData.clearIconDatas.push(clearIconData);
                  }

                  clearIconData.iconIndex.push(iconPosition[1]);
                }); // 按照列排序
                // clearRoundData.clearIconDatas.sort((v1, v2) => v1.columnIndex - v2.columnIndex)
              }

              clearRoundDatas.push(clearRoundData);
            };

            for (var i = 0; i < singleResults.length; i++) {
              _loop();
            }
          }

          return clearRoundDatas;
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
              }), RollerStatus) : RollerStatus).ENDING === value.cur) {// this.stopRollAll(true, this.sendBetTime, cacheData.rollerLaunchResult);
              }
            } else if (key === 'gameTypeInfo') {
              this.changeGame(this.props.gameTypeInfo.viewGameType);
            } else if (key === 'isManualSpeed' && value.cur) {
              this.speedRoller();
            }
          }
        }

        changeGame(gameType) {
          // const columnListLayout = this.propertyNode.props_column_list.getComponent(Layout);
          var isSubGame1 = gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1;
          var isMain = gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN;

          if (isMain) {
            this.node.position = new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).normalRollOption.rollerWindowX, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).normalRollOption.rollerWindowY); // columnListLayout.spacingX = config.normalRollOption.columnInterval;
          } else {
            this.node.position = new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).subGameRollOption.rollerWindowX, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).subGameRollOption.rollerWindowY); // columnListLayout.spacingX = config.subGameRollOption.columnInterval;
          }
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
          // this.propertyNode.props_column_list.removeAllChildren();
          this.initRoller();
        }

        update(deltaTime) {
          if (this.isWaitEnding && (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).rollerLaunchResult) {
            this.isWaitEnding = false;
            this.node.isValid && this.stopRollAll(this.sendBetTime, (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
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
//# sourceMappingURL=495b4309809c0df544e68d048f8cb8a42a3912bc.js.map