System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Color, Label, Node, Toggle, BaseComponent, setAutoLauncherInfo, updateDialogInfo, updatePositionId, updateSubGameAnimationPlayInfo, updateManualSpeedStatus, updateRollerStatus, updateSpeedStatus, AutoLauncherType, calBetAmount, DialogType, GameType, isAuto, RollerStatus, config, StepNumber, cacheData, thorv2_Audio, mainViewModel, SoundPathDefine, global, getNodeByNameDeep, _dec, _class, _crd, ccclass, property, ThorV2_Footer;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetAutoLauncherInfo(extras) {
    _reporterNs.report("setAutoLauncherInfo", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateDialogInfo(extras) {
    _reporterNs.report("updateDialogInfo", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdatePositionId(extras) {
    _reporterNs.report("updatePositionId", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateSubGameAnimationPlayInfo(extras) {
    _reporterNs.report("updateSubGameAnimationPlayInfo", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateManualSpeedStatus(extras) {
    _reporterNs.report("updateManualSpeedStatus", "../store/actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateRollerStatus(extras) {
    _reporterNs.report("updateRollerStatus", "../store/actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateSpeedStatus(extras) {
    _reporterNs.report("updateSpeedStatus", "../store/actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherInfo(extras) {
    _reporterNs.report("AutoLauncherInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherType(extras) {
    _reporterNs.report("AutoLauncherType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcalBetAmount(extras) {
    _reporterNs.report("calBetAmount", "../type", _context.meta, extras);
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

  function _reportPossibleCrUseOfisAuto(extras) {
    _reporterNs.report("isAuto", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerStatus(extras) {
    _reporterNs.report("RollerStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStepNumber(extras) {
    _reporterNs.report("StepNumber", "../../../utils/StepNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcacheData(extras) {
    _reporterNs.report("cacheData", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfthorv2_Audio(extras) {
    _reporterNs.report("thorv2_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmainViewModel(extras) {
    _reporterNs.report("mainViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
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
      Color = _cc.Color;
      Label = _cc.Label;
      Node = _cc.Node;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      setAutoLauncherInfo = _unresolved_3.setAutoLauncherInfo;
      updateDialogInfo = _unresolved_3.updateDialogInfo;
      updatePositionId = _unresolved_3.updatePositionId;
      updateSubGameAnimationPlayInfo = _unresolved_3.updateSubGameAnimationPlayInfo;
    }, function (_unresolved_4) {
      updateManualSpeedStatus = _unresolved_4.updateManualSpeedStatus;
      updateRollerStatus = _unresolved_4.updateRollerStatus;
      updateSpeedStatus = _unresolved_4.updateSpeedStatus;
    }, function (_unresolved_5) {
      AutoLauncherType = _unresolved_5.AutoLauncherType;
      calBetAmount = _unresolved_5.calBetAmount;
      DialogType = _unresolved_5.DialogType;
      GameType = _unresolved_5.GameType;
      isAuto = _unresolved_5.isAuto;
      RollerStatus = _unresolved_5.RollerStatus;
    }, function (_unresolved_6) {
      config = _unresolved_6.default;
    }, function (_unresolved_7) {
      StepNumber = _unresolved_7.default;
    }, function (_unresolved_8) {
      cacheData = _unresolved_8.cacheData;
    }, function (_unresolved_9) {
      thorv2_Audio = _unresolved_9.thorv2_Audio;
      mainViewModel = _unresolved_9.mainViewModel;
    }, function (_unresolved_10) {
      SoundPathDefine = _unresolved_10.SoundPathDefine;
    }, function (_unresolved_11) {
      global = _unresolved_11.global;
    }, function (_unresolved_12) {
      getNodeByNameDeep = _unresolved_12.getNodeByNameDeep;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "82faca2fxBEPaN1Wg7MokDk", "ThorV2_Footer", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'AnimationState', 'Button', 'Color', 'Game', 'Label', 'Node', 'Sprite', 'Toggle', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ThorV2_Footer", ThorV2_Footer = (_dec = ccclass('ThorV2_Footer'), _dec(_class = class ThorV2_Footer extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          /**是否长按 */
          this.isLongPress = false;
          this.stepNumber = void 0;
          this.executeEnding = false;
          this.propertyNode = {
            props_startButton: new Node(),
            props_toggle_fast: new Node(),
            props_min_btn: new Node(),
            props_max_btn: new Node(),
            props_btn_down_auto: new Node(),
            // props_maxBet_btn: new Node(),
            // props_btn_down_help: new Node(),
            props_word_down_goodluck: new Node(),
            props_word_down_winNum: new Label(),
            props_betAmount: new Label(),
            props_autoLaunch_label: new Label(),
            // props_lineCount: new Label(),
            // props_bet_dropdownlist: new Node(),
            // props_autoLauncher: new Node(),
            props_spr_nomoney: new Node()
          };
          this.props = {
            /**滚动状态 */
            rollerStatus: (_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
              error: Error()
            }), RollerStatus) : RollerStatus).END,
            autoLauncherInfo: null,
            betDropDownlist: false,
            positionId: 0,
            winloss: -1,
            subGameWinloss: -1,
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
            gold: 0,
            betAmount: 0
          };
          this.events = {
            onSendBet: () => {},
            onOpenRule: () => {},
            onOpenAuto: () => {}
          };
          this.longPressHandleCallback = void 0;
        }

        start() {}

        initState() {
          return {};
        }

        longPressHandle() {
          if (this.node.isValid) {
            this.unscheduleLong();
            this.isLongPress = true; // this.dispatch(setBetDropDownList(true))

            this.showOrHideBetDropDownlist(true);
          }
        }

        unscheduleLong() {
          this.longPressHandleCallback && this.unschedule(this.longPressHandleCallback);
          this.longPressHandleCallback = undefined;
        }

        bindEvent() {
          // this.propertyNode.props_autoLauncher.getComponent(Animation).on(Animation.EventType.FINISHED, (e, state: AnimationState) => {
          // 	if (state.name === 'animation_autoLauncher_down') {
          // 		this.propertyNode.props_bet_dropdownlist.active = false;
          // 	}
          // });
          // this.propertyNode.props_bet_dropdownlist.on(Node.EventType.TOUCH_END, () => {
          // 	// this.dispatch(setBetDropDownList(false));
          // 	this.showOrHideBetDropDownlist(false)
          // })
          // this.propertyNode.props_startButton.on(Node.EventType.TOUCH_START, () => {
          // 	// 自动状态下，长按无效
          // 	if (isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo) //自动状态长按无效
          // 		|| this.isLongPress
          // 		|| !this.isMain() //非主游戏中长按无效
          // 		|| this.props.rollerStatus !== RollerStatus.END //未结束滚动长按无效
          // 		|| this.longPressHandleCallback) { //正在长按中长按无效
          // 		return;
          // 	}
          // 	this.longPressHandleCallback = this.longPressHandle.bind(this);
          // 	this.schedule(this.longPressHandleCallback, config.normalRollOption.startButtonLangTime / 1000);
          // })
          // this.propertyNode.props_startButton.on(Node.EventType.TOUCH_CANCEL, () => {
          // 	this.isLongPress = false;
          // 	this.unscheduleLong();
          // })
          this.propertyNode.props_startButton.on(Button.EventType.CLICK, () => {
            // this.stepNumberV2.stop();
            // this.unscheduleLong();
            // if (this.isLongPress) {
            // 	this.isLongPress = false;
            // 	return;
            // };
            // 在结束的时候才判断余额是否不足
            if (this.isMain() && this.isEnd() && this.props.gold < (_crd && calBetAmount === void 0 ? (_reportPossibleCrUseOfcalBetAmount({
              error: Error()
            }), calBetAmount) : calBetAmount)(this.props.betAmount, this.props.positionId)) {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).openShop();
              return;
            } // if (this.props.betDropDownlist) {
            // 	// 每次单击都要隐藏自动下注下拉列表
            // 	// this.dispatch(setBetDropDownList(false))
            // 	this.showOrHideBetDropDownlist(false)
            // }
            // 小游戏中自动，所以这里不做任何处理


            if (this.isSubGame()) {
              return;
            } // 只有在主游戏中，点击就是取消自动状态
            // if (isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
            // 	this.dispatch(setAutoLauncherInfo({
            // 		autoLauncherType: AutoLauncherType.NONE,
            // 		totalCount: 0,
            // 		leftCount: 0
            // 	}))
            // } else {
            // 游戏状态不为结束状态并且不切换游戏时，才能下注


            if (this.isEnd() && !this.isChangeGame()) {
              this.events.onSendBet();
            } else if (this.props.rollerStatus === (_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
              error: Error()
            }), RollerStatus) : RollerStatus).RUNNING && !this.executeEnding) {
              this.dispatch((_crd && updateManualSpeedStatus === void 0 ? (_reportPossibleCrUseOfupdateManualSpeedStatus({
                error: Error()
              }), updateManualSpeedStatus) : updateManualSpeedStatus)(true));

              if ((_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
                error: Error()
              }), cacheData) : cacheData).rollerLaunchResult) {
                this.dispatch((_crd && updateRollerStatus === void 0 ? (_reportPossibleCrUseOfupdateRollerStatus({
                  error: Error()
                }), updateRollerStatus) : updateRollerStatus)((_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
                  error: Error()
                }), RollerStatus) : RollerStatus).ENDING));
              } else {
                this.executeEnding = true;
              }
            } // }

          });
          this.propertyNode.props_toggle_fast.on(Toggle.EventType.TOGGLE, e => {
            (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
              error: Error()
            }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).BUTTONCLICK);
            this.dispatch((_crd && updateSpeedStatus === void 0 ? (_reportPossibleCrUseOfupdateSpeedStatus({
              error: Error()
            }), updateSpeedStatus) : updateSpeedStatus)(e.isChecked));
          });
          const amount = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).betSwitcher[0].amount;
          this.propertyNode.props_min_btn.on(Button.EventType.CLICK, () => {
            if (this.isBtnDisable() || !this.propertyNode.props_min_btn.getComponent(Button).enabled) {
              return;
            }

            (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
              error: Error()
            }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).MIN_COIN);

            if (this.props.positionId <= amount[0].positionId) {
              return;
            }

            this.dispatch((_crd && updatePositionId === void 0 ? (_reportPossibleCrUseOfupdatePositionId({
              error: Error()
            }), updatePositionId) : updatePositionId)(this.props.positionId - 1));
            this.updateSprMoney();
          });
          this.propertyNode.props_max_btn.on(Button.EventType.CLICK, () => {
            if (this.isBtnDisable() || !this.propertyNode.props_max_btn.getComponent(Button).enabled) {
              return;
            }

            if (this.props.positionId >= amount[amount.length - 1].positionId) {
              return;
            }

            (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
              error: Error()
            }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).MAX_COIN);
            this.dispatch((_crd && updatePositionId === void 0 ? (_reportPossibleCrUseOfupdatePositionId({
              error: Error()
            }), updatePositionId) : updatePositionId)(this.props.positionId + 1));
            this.updateSprMoney();
          });
          this.propertyNode.props_btn_down_auto.on(Button.EventType.CLICK, () => {
            // if (this.isBtnDisable() || !this.propertyNode.props_max_btn.getComponent(Button).enabled) {
            // 	return;
            // }
            (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
              error: Error()
            }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).MAX_COIN);

            if ((_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
              error: Error()
            }), isAuto) : isAuto)(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
              this.dispatch((_crd && setAutoLauncherInfo === void 0 ? (_reportPossibleCrUseOfsetAutoLauncherInfo({
                error: Error()
              }), setAutoLauncherInfo) : setAutoLauncherInfo)({
                autoLauncherType: (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
                  error: Error()
                }), AutoLauncherType) : AutoLauncherType).NONE,
                totalCount: 0,
                leftCount: 0
              }));
              return;
            }

            this.events.onOpenAuto(); // if (this.props.positionId >= amount[amount.length - 1].positionId) {
            // 	return;
            // }
            // this.dispatch(updatePositionId(this.props.positionId + 1));
            // this.updateSprMoney();
          }); // 最大下注
          // this.propertyNode.props_maxBet_btn.on(Node.EventType.TOUCH_END, () => {
          // 	// thorv2_Audio.playOneShot(SoundPathDefine.MAX_COIN)
          // 	if (this.isBtnDisable() || !this.propertyNode.props_maxBet_btn.getComponent(Button).enabled) {
          // 		return;
          // 	}
          // 	this.dispatch(updatePositionId(this.getMaxBetPositionId()));
          // })
          // 帮助按钮
          // this.propertyNode.props_btn_down_help.on(Node.EventType.TOUCH_END, () => {
          // 	// thorv2_Audio.playOneShot(SoundPathDefine.BUTTONCLICK)
          // 	// this.events.onOpenRule();
          // })

          this.propertyNode.props_spr_nomoney.on(Node.EventType.TOUCH_END, () => {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop();
          });
          this.listenerBetDropDownListEvent();
        }

        isEnd() {
          return this.props.rollerStatus === (_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
            error: Error()
          }), RollerStatus) : RollerStatus).END;
        }

        updateStartButtonAutoType() {
          const startBgNode = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("props_word_down_pular", this.propertyNode.props_startButton);
          const stopBgNode = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("props_scrollingThePicture", this.propertyNode.props_startButton); // const autoNode = getNodeByNameDeep("props_times", this.propertyNode.props_startButton);
          // const limitNode = getNodeByNameDeep("props_autoLaunch_label", this.propertyNode.props_startButton);
          // const auto = isAuto(this.props.autoLauncherInfo, this.props.gameTypeInfo);
          // 开始按钮背景，

          startBgNode.active = this.props.rollerStatus === (_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
            error: Error()
          }), RollerStatus) : RollerStatus).END; // 停止滚动按钮背景

          stopBgNode.active = this.props.rollerStatus !== (_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
            error: Error()
          }), RollerStatus) : RollerStatus).END; // if (!this.isMain()) {
          // 	// autoNode.active = false;
          // 	// limitNode.active = false;
          // 	// 开始按钮背景，
          // 	startBgNode.active = this.props.rollerStatus === RollerStatus.END;
          // 	// 停止滚动按钮背景
          // 	stopBgNode.active = this.props.rollerStatus !== RollerStatus.END;
          // } else {
          // 	// 开始按钮背景，
          // 	startBgNode.active = this.props.rollerStatus === RollerStatus.END;
          // 	// 停止滚动按钮背景
          // 	stopBgNode.active = this.props.rollerStatus !== RollerStatus.END;
          // 	if (auto) {
          // 		// 	autoNode.active = !this.isLimit();
          // 		// 	limitNode.active = this.isLimit();
          // 		// 	if (!this.isLimit()) {
          // 		// 		autoNode.getComponent(Label).string = this.props.autoLauncherInfo.leftCount + "/" + this.props.autoLauncherInfo.totalCount;
          // 		// 	} else {
          // 		// 		limitNode.getComponent(Label).string = this.props.autoLauncherInfo.leftCount + "";
          // 		// 	}
          // 		// } else {
          // 		// 	autoNode.active = false;
          // 		// 	limitNode.active = false;
          // 	}
          // }

          this.updateAutoBtn();
        }

        updateAutoBtn() {
          const props_autoLaunch_not_auto = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("props_autoLaunch_not_auto", this.propertyNode.props_btn_down_auto);
          const props_autoLaunch_auto = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("props_autoLaunch_auto", this.propertyNode.props_btn_down_auto);
          const auto = (_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
            error: Error()
          }), isAuto) : isAuto)(this.props.autoLauncherInfo, this.props.gameTypeInfo);

          if (!this.isMain()) {
            props_autoLaunch_not_auto.active = true;
            props_autoLaunch_auto.active = false;
          } else {
            props_autoLaunch_not_auto.active = !auto;
            props_autoLaunch_auto.active = auto;
            const props_autoLaunch_label = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("props_autoLaunch_label", props_autoLaunch_auto);
            const props_autoLaunch_limit = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("props_autoLaunch_limit", props_autoLaunch_auto);

            if (auto) {
              props_autoLaunch_label.active = !this.isLimit();
              props_autoLaunch_limit.active = this.isLimit();

              if (!this.isLimit()) {
                props_autoLaunch_label.getComponent(Label).string = this.props.autoLauncherInfo.leftCount + "/" + this.props.autoLauncherInfo.totalCount;
              } else {
                const props_autoLaunch_limit_count = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                  error: Error()
                }), getNodeByNameDeep) : getNodeByNameDeep)("props_autoLaunch_limit_count", props_autoLaunch_limit);
                props_autoLaunch_limit_count.getComponent(Label).string = this.props.autoLauncherInfo.leftCount + "";
              }
            }
          }
        }

        getAutoLauncherType() {
          return this.props.autoLauncherInfo ? this.props.autoLauncherInfo.autoLauncherType : (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
            error: Error()
          }), AutoLauncherType) : AutoLauncherType).NONE;
        }
        /**是否滚动中 */


        isRoll() {
          return this.props.rollerStatus !== (_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
            error: Error()
          }), RollerStatus) : RollerStatus).END;
        }
        /**
         * 更新开始按钮是否禁用
         */


        updateStartButtonDisable() {
          const auto = (_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
            error: Error()
          }), isAuto) : isAuto)(this.props.autoLauncherInfo, this.props.gameTypeInfo); // 结束过程中和不是自动游戏时，开始按钮禁用

          if (this.props.rollerStatus === (_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
            error: Error()
          }), RollerStatus) : RollerStatus).ENDING) {
            this.updateBtnStatus(this.propertyNode.props_startButton, true);
          } else {
            this.updateBtnStatus(this.propertyNode.props_startButton, false);
          }
        }
        /**是否准备切换游戏 */


        isChangeGame() {
          return this.props.gameTypeInfo && this.props.gameTypeInfo.viewGameType !== this.props.gameTypeInfo.currGameType;
        }

        isSubGame() {
          return this.props.gameTypeInfo.viewGameType !== (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN;
        }

        isNextSubGame() {
          return this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2 || this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1;
        }
        /**
         * 是否无限运行
         * @returns 
         */


        isLimit() {
          if (!this.props.autoLauncherInfo) {
            return false;
          }

          if (this.props.autoLauncherInfo.autoLauncherType === (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
            error: Error()
          }), AutoLauncherType) : AutoLauncherType).LIMIT || this.props.autoLauncherInfo.autoLauncherType === (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
            error: Error()
          }), AutoLauncherType) : AutoLauncherType).LAMIT_FAST) {
            return true;
          }

          return false;
        }

        isBtnDisable() {
          // 非主游戏和切换游戏时禁用按钮
          if (!this.isMain() || this.isChangeGame()) {
            return true;
          }

          return this.props.rollerStatus !== (_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
            error: Error()
          }), RollerStatus) : RollerStatus).END || (_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
            error: Error()
          }), isAuto) : isAuto)(this.props.autoLauncherInfo, this.props.gameTypeInfo);
        }
        /**更新按钮禁用状态 */


        updateBtnDisableStatus() {
          const isDisable = this.isBtnDisable();
          this.updateBtnStatus(this.propertyNode.props_max_btn, isDisable);
          this.updateBtnStatus(this.propertyNode.props_min_btn, isDisable); // this.updateBtnStatus(this.propertyNode.props_maxBet_btn, isDisable);

          this.propertyNode.props_max_btn.getComponent(Button).enabled = !isDisable;
          this.propertyNode.props_min_btn.getComponent(Button).enabled = !isDisable; // this.propertyNode.props_maxBet_btn.getComponent(Button).enabled = !isDisable;
        }

        updateBtnStatus(btnNode, isDisable) {
          btnNode.getChildByName("disable").active = isDisable;
          btnNode.getComponent(Button).enabled = !isDisable;
        }
        /**更新最大最小状态 */


        updateMaxMinBetDisableStatus() {
          const amount = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).betSwitcher[0].amount;
          const isMaxBet = this.props.positionId >= amount[amount.length - 1].positionId;
          const isDisable = this.isBtnDisable();

          if (isDisable || amount[amount.length - 1].positionId === this.props.positionId) {
            this.updateBtnStatus(this.propertyNode.props_max_btn, true);
            this.propertyNode.props_max_btn.getComponent(Button).enabled = false;
          } else {
            this.updateBtnStatus(this.propertyNode.props_max_btn, false);
            this.propertyNode.props_max_btn.getComponent(Button).enabled = true;
          }

          if (isDisable || this.props.positionId === amount[0].positionId) {
            this.updateBtnStatus(this.propertyNode.props_min_btn, true);
            this.propertyNode.props_min_btn.getComponent(Button).enabled = false;
          } else {
            this.updateBtnStatus(this.propertyNode.props_min_btn, false);
            this.propertyNode.props_min_btn.getComponent(Button).enabled = true;
          }

          const auto = (_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
            error: Error()
          }), isAuto) : isAuto)(this.props.autoLauncherInfo, this.props.gameTypeInfo);

          if (isDisable && !auto || this.isSubGame()) {
            this.updateBtnStatus(this.propertyNode.props_btn_down_auto, true);
            this.propertyNode.props_btn_down_auto.getComponent(Button).enabled = false;
          } else {
            this.updateBtnStatus(this.propertyNode.props_btn_down_auto, false);
            this.propertyNode.props_btn_down_auto.getComponent(Button).enabled = true;
          }

          this.updateMaxBetStatus();
        }

        getMaxBetPositionId() {
          const amount = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).betSwitcher[0].amount;
          let maxBetPositionId = 1;

          for (let i = amount.length - 1; i >= 0; i--) {
            const positionId = amount[i].positionId;
            const betAmount = (_crd && calBetAmount === void 0 ? (_reportPossibleCrUseOfcalBetAmount({
              error: Error()
            }), calBetAmount) : calBetAmount)(this.props.betAmount, positionId);

            if (this.props.gold >= betAmount) {
              maxBetPositionId = positionId;
              break;
            }
          }

          return maxBetPositionId;
        }

        updateMaxBetStatus() {// const isMaxBet = this.props.positionId >= this.getMaxBetPositionId();
          // if (this.isBtnDisable()) {
          // 	this.updateBtnStatus(this.propertyNode.props_maxBet_btn, true);
          // 	this.propertyNode.props_maxBet_btn.getComponent(Button).enabled = false;
          // } else {
          // 	this.updateBtnStatus(this.propertyNode.props_maxBet_btn, false);
          // 	this.propertyNode.props_maxBet_btn.getComponent(Button).enabled = true;
          // }
        }

        updateBetInfo() {
          // const amountInfo = config.betSwitcher[0].amount.find(v => v.positionId === this.props.positionId);
          this.propertyNode.props_betAmount.string = (_crd && calBetAmount === void 0 ? (_reportPossibleCrUseOfcalBetAmount({
            error: Error()
          }), calBetAmount) : calBetAmount)(this.props.betAmount, this.props.positionId).formatAmountWithCommas(); // this.propertyNode.props_lineCount.string = config.betAmount + "x" + amountInfo.value;
        }

        updateScore(value) {
          // console.log(`updateScore: ${JSON.stringify(value)}`);
          this.propertyNode.props_word_down_goodluck.active = value.cur === 0;
          this.propertyNode.props_word_down_winNum.node.active = value.cur > 0;
          this.stepNumber && this.stepNumber.stop();
          this.stepNumber = new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
            error: Error()
          }), StepNumber) : StepNumber)(value.pre, value.cur, num => {
            if (this.node && this.node.isValid) {
              const value = Number(num.toFixed(0));
              this.propertyNode.props_word_down_winNum.string = value.formatAmountWithCommas();
            }
          });
          this.stepNumber.set((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.numberRollerTime).start();
        }

        isWinWild() {}

        getRollerIcon() {
          const si = (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).rollerLaunchResult.dl.si[0];
          si.rollerId;
        }

        useProps(key, value) {
          // console.log(`useProps: ${key} ${JSON.stringify(value)}`);
          if (this.node && this.node.isValid) {
            if (key === 'rollerStatus') {
              this.updateStartButtonDisable();
              this.updateStartButtonAutoType();
              this.updateBtnDisableStatus();
              this.roundEndAutoHandle();
            } else if (key === 'autoLauncherInfo') {
              this.updateStartButtonAutoType();
              this.updateStartButtonDisable();
              this.updateBtnDisableStatus();
            } else if (key === 'gameTypeInfo') {
              this.updateStartButtonAutoType();
              this.updateStartButtonDisable();
              this.updateBtnDisableStatus();
            } else if (key === 'positionId' || key === 'betAmount') {
              this.updateBetInfo();
            } else if (key === 'winloss' && !this.isSubGame()) {
              this.updateScore(value);
            } else if (key === 'subGameWinloss' && this.isSubGame()) {
              this.updateScore(value);
            } else if (key === '_setDone') {
              this.updateMaxMinBetDisableStatus();
            }
          }
        }

        isMain() {
          return this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN;
        }

        roundEndAutoHandle() {
          if ((_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
            error: Error()
          }), RollerStatus) : RollerStatus).END === this.props.rollerStatus) {
            // if (this.isChangeGame()) {
            // 	this.changeGameHandle();
            // 	return;
            // }
            if ((_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
              error: Error()
            }), isAuto) : isAuto)(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
              if (this.isMain()) {
                const leftCount = this.isLimit() ? this.props.autoLauncherInfo.leftCount + 1 : this.props.autoLauncherInfo.leftCount - 1;
                this.dispatch((_crd && setAutoLauncherInfo === void 0 ? (_reportPossibleCrUseOfsetAutoLauncherInfo({
                  error: Error()
                }), setAutoLauncherInfo) : setAutoLauncherInfo)({
                  autoLauncherType: this.props.autoLauncherInfo.autoLauncherType,
                  totalCount: this.props.autoLauncherInfo.totalCount,
                  leftCount
                }));
              }

              this.scheduleOnce(() => {
                this.node.isValid && this.events.onSendBet();
              }, 0.1);
            }
          }
        }

        changeGameHandle() {
          if (this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN) {
            // 从小游戏切换到主游戏，关门动画
            this.dispatch((_crd && updateSubGameAnimationPlayInfo === void 0 ? (_reportPossibleCrUseOfupdateSubGameAnimationPlayInfo({
              error: Error()
            }), updateSubGameAnimationPlayInfo) : updateSubGameAnimationPlayInfo)({
              gameType: this.props.gameTypeInfo.viewGameType,
              param: 1
            }));
          } else if (this.props.gameTypeInfo.currGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1) {
            this.dispatch((_crd && updateDialogInfo === void 0 ? (_reportPossibleCrUseOfupdateDialogInfo({
              error: Error()
            }), updateDialogInfo) : updateDialogInfo)({
              dialogType: (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                error: Error()
              }), DialogType) : DialogType).FREE_GAME_ENTRY,
              params: [this.props.gameTypeInfo.leftCount]
            }));
          }
        }

        bindUI() {
          // this.propertyNode.props_bet_dropdownlist.active = false;
          (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
            error: Error()
          }), mainViewModel) : mainViewModel).setGoodLuckPos(this.propertyNode.props_word_down_winNum.node.worldPosition);
        }

        listenerBetDropDownListEvent() {// this.propertyNode.props_autoLauncher.children.forEach(v => {
          // 	v.on(Node.EventType.TOUCH_END, () => {
          // 		const autoLauncherType = v.name as AutoLauncherType;
          // 		const count = getAutoCount(autoLauncherType);
          // 		this.dispatch(setAutoLauncherInfo({
          // 			autoLauncherType: autoLauncherType,
          // 			totalCount: count,
          // 			leftCount: isLimit(autoLauncherType) ? 1 : count - 1,
          // 		}))
          // 		// thorv2_Audio.playOneShot(SoundPathDefine.biu)
          // 		// this.dispatch(setBetDropDownList(false));
          // 		this.showOrHideBetDropDownlist(false)
          // 		this.events.onSendBet();
          // 	})
          // })
        }

        showOrHideBetDropDownlist(status) {// const pos = this.propertyNode.props_autoLauncher.position;
          // if (status) {
          // 	this.propertyNode.props_bet_dropdownlist.active = true;
          // 	this.propertyNode.props_autoLauncher.getComponent(Animation).play("animation_autoLauncher_up");
          // } else {
          // 	this.propertyNode.props_autoLauncher.getComponent(Animation).play("animation_autoLauncher_down");
          // }
        }

        updateSprMoney() {
          if (this.props.gold < (_crd && calBetAmount === void 0 ? (_reportPossibleCrUseOfcalBetAmount({
            error: Error()
          }), calBetAmount) : calBetAmount)(this.props.betAmount, this.props.positionId)) {
            if (!this.propertyNode.props_spr_nomoney.active) {
              this.propertyNode.props_spr_nomoney.active = true;
              this.propertyNode.props_betAmount.getComponent(Label).color = new Color(144, 144, 134);
              this.scheduleOnce(() => {
                this.propertyNode.props_spr_nomoney.active = false;
              }, 4);
            }
          } else {
            this.propertyNode.props_spr_nomoney.active = false;
            this.propertyNode.props_betAmount.getComponent(Label).color = new Color(255, 255, 255);
          }
        }

        update(deltaTime) {
          if (this.executeEnding && (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).rollerLaunchResult) {
            this.executeEnding = false;
            this.dispatch((_crd && updateRollerStatus === void 0 ? (_reportPossibleCrUseOfupdateRollerStatus({
              error: Error()
            }), updateRollerStatus) : updateRollerStatus)((_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
              error: Error()
            }), RollerStatus) : RollerStatus).ENDING));
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=018957465e4c77792b66d42cf6a1a8d701051af1.js.map