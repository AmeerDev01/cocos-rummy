System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Color, Label, Node, Toggle, BaseComponent, setAutoLauncherInfo, setBetDropDownList, updateDialogInfo, updatePositionId, updateSubGameAnimationPlayInfo, updateRollerStatus, updateSpeedStatus, AutoLauncherType, calBetAmount, DialogType, GameType, isAuto, RollerStatus, config, StepNumber, cacheData, egyptv2_Audio, mainViewModel, SoundPathDefine, StepNumberV2, global, _dec, _class, _crd, ccclass, property, EgyptV2_Footer;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetAutoLauncherInfo(extras) {
    _reporterNs.report("setAutoLauncherInfo", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetBetDropDownList(extras) {
    _reporterNs.report("setBetDropDownList", "../store/actions/game", _context.meta, extras);
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

  function _reportPossibleCrUseOfegyptv2_Audio(extras) {
    _reporterNs.report("egyptv2_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmainViewModel(extras) {
    _reporterNs.report("mainViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStepNumberV(extras) {
    _reporterNs.report("StepNumberV2", "../../../utils/StepNumberV2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
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
      setBetDropDownList = _unresolved_3.setBetDropDownList;
      updateDialogInfo = _unresolved_3.updateDialogInfo;
      updatePositionId = _unresolved_3.updatePositionId;
      updateSubGameAnimationPlayInfo = _unresolved_3.updateSubGameAnimationPlayInfo;
    }, function (_unresolved_4) {
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
      egyptv2_Audio = _unresolved_9.egyptv2_Audio;
      mainViewModel = _unresolved_9.mainViewModel;
    }, function (_unresolved_10) {
      SoundPathDefine = _unresolved_10.SoundPathDefine;
    }, function (_unresolved_11) {
      StepNumberV2 = _unresolved_11.default;
    }, function (_unresolved_12) {
      global = _unresolved_12.global;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2aa3dqMXUVDvbBTJZ9KaGWB", "EgyptV2_Footer", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Color', 'Game', 'Label', 'Node', 'Sprite', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EgyptV2_Footer", EgyptV2_Footer = (_dec = ccclass('EgyptV2_Footer'), _dec(_class = class EgyptV2_Footer extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          /**是否长按 */
          this.isLongPress = false;
          this.executeEnding = false;
          this.stepNumberV2 = new (_crd && StepNumberV2 === void 0 ? (_reportPossibleCrUseOfStepNumberV({
            error: Error()
          }), StepNumberV2) : StepNumberV2)(this);
          this.propertyNode = {
            props_startButton: new Node(),
            props_toggle_fast: new Node(),
            props_min_btn: new Node(),
            props_max_btn: new Node(),
            props_maxBet_btn: new Node(),
            props_SZX_bz_btn: new Node(),
            props_goodluck: new Node(),
            props_jackpot02: new Node(),
            props_spr_nomoney: new Node(),
            props_btn_down_auto: new Node(),
            props_bottom_score: new Label(),
            props_betAmount: new Label(),
            props_lineCount: new Label(),
            props_autoLaunch_label: new Node()
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
            gold: 0
          };
          this.events = {
            onSendBet: () => {},
            onOpenRule: () => {}
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
            this.isLongPress = true;
            this.dispatch((_crd && setBetDropDownList === void 0 ? (_reportPossibleCrUseOfsetBetDropDownList({
              error: Error()
            }), setBetDropDownList) : setBetDropDownList)(true));
          }
        }

        unscheduleLong() {
          this.longPressHandleCallback && this.unschedule(this.longPressHandleCallback);
          this.longPressHandleCallback = undefined;
        }

        bindEvent() {
          this.propertyNode.props_startButton.on(Node.EventType.TOUCH_START, () => {
            // 自动状态下，长按无效
            if ((_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
              error: Error()
            }), isAuto) : isAuto)(this.props.autoLauncherInfo, this.props.gameTypeInfo) //自动状态长按无效
            || this.isLongPress || !this.isMain() //非主游戏中长按无效
            || this.props.rollerStatus !== (_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
              error: Error()
            }), RollerStatus) : RollerStatus).END //未结束滚动长按无效
            || this.longPressHandleCallback) {
              //正在长按中长按无效
              return;
            }

            this.longPressHandleCallback = this.longPressHandle.bind(this);
            this.schedule(this.longPressHandleCallback, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).normalRollOption.startButtonLangTime / 1000);
          });
          this.propertyNode.props_startButton.on(Node.EventType.TOUCH_CANCEL, () => {
            this.isLongPress = false;
            this.unscheduleLong();
          });
          this.propertyNode.props_btn_down_auto.getComponent(Button).node.on(Node.EventType.TOUCH_END, () => {
            //打开自动弹框
            if (this.getAutoLauncherType() !== (_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
              error: Error()
            }), AutoLauncherType) : AutoLauncherType).NONE) {
              (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
                error: Error()
              }), mainViewModel) : mainViewModel).comp.clearAuto();
            } else {
              if (this.isBtnDisable() || !this.propertyNode.props_maxBet_btn.getComponent(Button).enabled) {
                return;
              } else if (this.isMain()) {
                (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
                  error: Error()
                }), mainViewModel) : mainViewModel).comp.openAoutoPanl();
              }
            }
          });
          this.propertyNode.props_startButton.on(Node.EventType.TOUCH_END, () => {
            // this.stepNumberV2.stop();
            this.unscheduleLong();

            if (this.isLongPress) {
              this.isLongPress = false;
              return;
            }

            ; // 在结束的时候才判断余额是否不足

            if (this.isMain() && this.isEnd() && this.props.gold < (_crd && calBetAmount === void 0 ? (_reportPossibleCrUseOfcalBetAmount({
              error: Error()
            }), calBetAmount) : calBetAmount)(this.props.positionId)) {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).openShop();
              return;
            }

            if (this.props.betDropDownlist) {
              // 每次单击都要隐藏自动下注下拉列表
              this.dispatch((_crd && setBetDropDownList === void 0 ? (_reportPossibleCrUseOfsetBetDropDownList({
                error: Error()
              }), setBetDropDownList) : setBetDropDownList)(false));
            } // 小游戏中自动，所以这里不做任何处理


            if (this.isSubGame()) {
              return;
            } // 只有在主游戏中，点击就是取消自动状态


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
            } else {
              // 游戏状态不为结束状态并且不切换游戏时，才能下注
              if (this.isEnd() && !this.isChangeGame()) {
                this.events.onSendBet();
              } else if (!this.isSubGame2() && this.props.rollerStatus === (_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
                error: Error()
              }), RollerStatus) : RollerStatus).RUNNING && !this.executeEnding) {
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
              }
            }
          });
          this.propertyNode.props_toggle_fast.on(Toggle.EventType.TOGGLE, e => {
            (_crd && egyptv2_Audio === void 0 ? (_reportPossibleCrUseOfegyptv2_Audio({
              error: Error()
            }), egyptv2_Audio) : egyptv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).btn_click);
            this.dispatch((_crd && updateSpeedStatus === void 0 ? (_reportPossibleCrUseOfupdateSpeedStatus({
              error: Error()
            }), updateSpeedStatus) : updateSpeedStatus)(e.isChecked));
          });
          var amount = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).betSwitcher[0].amount;
          this.propertyNode.props_min_btn.on(Node.EventType.TOUCH_END, () => {
            (_crd && egyptv2_Audio === void 0 ? (_reportPossibleCrUseOfegyptv2_Audio({
              error: Error()
            }), egyptv2_Audio) : egyptv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).minCoin);

            if (this.isBtnDisable() || !this.propertyNode.props_min_btn.getComponent(Button).enabled) {
              return;
            }

            if (this.props.positionId <= amount[0].positionId) {
              return;
            }

            this.dispatch((_crd && updatePositionId === void 0 ? (_reportPossibleCrUseOfupdatePositionId({
              error: Error()
            }), updatePositionId) : updatePositionId)(this.props.positionId - 1));
            this.updateSprMoney();
          });
          this.propertyNode.props_max_btn.on(Node.EventType.TOUCH_END, () => {
            (_crd && egyptv2_Audio === void 0 ? (_reportPossibleCrUseOfegyptv2_Audio({
              error: Error()
            }), egyptv2_Audio) : egyptv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).maxCoin);

            if (this.isBtnDisable() || !this.propertyNode.props_max_btn.getComponent(Button).enabled) {
              return;
            }

            if (this.props.positionId >= amount[amount.length - 1].positionId) {
              return;
            }

            this.dispatch((_crd && updatePositionId === void 0 ? (_reportPossibleCrUseOfupdatePositionId({
              error: Error()
            }), updatePositionId) : updatePositionId)(this.props.positionId + 1));
            this.updateSprMoney();
          }); // 最大下注

          this.propertyNode.props_maxBet_btn.on(Node.EventType.TOUCH_END, () => {
            (_crd && egyptv2_Audio === void 0 ? (_reportPossibleCrUseOfegyptv2_Audio({
              error: Error()
            }), egyptv2_Audio) : egyptv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).maxCoin);

            if (this.isBtnDisable() || !this.propertyNode.props_maxBet_btn.getComponent(Button).enabled) {
              return;
            }

            this.dispatch((_crd && updatePositionId === void 0 ? (_reportPossibleCrUseOfupdatePositionId({
              error: Error()
            }), updatePositionId) : updatePositionId)(this.getMaxBetPositionId()));
          }); // 帮助按钮

          this.propertyNode.props_SZX_bz_btn.on(Node.EventType.TOUCH_END, () => {
            (_crd && egyptv2_Audio === void 0 ? (_reportPossibleCrUseOfegyptv2_Audio({
              error: Error()
            }), egyptv2_Audio) : egyptv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).btn_click);
            this.events.onOpenRule();
          });
          this.propertyNode.props_spr_nomoney.on(Node.EventType.TOUCH_END, () => {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop();
          });
        }

        isEnd() {
          return this.props.rollerStatus === (_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
            error: Error()
          }), RollerStatus) : RollerStatus).END;
        }

        updateStartButtonAutoType() {
          var startBgNode = this.propertyNode.props_startButton.getChildByName("STARTBG");
          var stopBgNode = this.propertyNode.props_startButton.getChildByName("scrollingThePicture");
          var autoNode = this.propertyNode.props_autoLaunch_label;
          var zi_AUTO = this.propertyNode.props_btn_down_auto.getChildByName("zi_AUTO");
          var limitNode = this.propertyNode.props_btn_down_auto.getChildByName('Limit');
          var props_sg_free = this.node.parent.getChildByName('props_sg_free');
          var auto = (_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
            error: Error()
          }), isAuto) : isAuto)(this.props.autoLauncherInfo, this.props.gameTypeInfo);

          if (!this.isMain()) {
            autoNode.active = false;
            limitNode.active = false;
            startBgNode.active = false;
            stopBgNode.active = false;
            props_sg_free.active = true;
            props_sg_free.getChildByName('props_label_sg_num').getComponent(Label).string = this.props.gameTypeInfo.leftCount + "";
          } else {
            props_sg_free.active = false; // 开始按钮背景，

            startBgNode.active = !auto && this.props.rollerStatus === (_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
              error: Error()
            }), RollerStatus) : RollerStatus).END; // 停止滚动按钮背景

            stopBgNode.active = !auto && this.props.rollerStatus !== (_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
              error: Error()
            }), RollerStatus) : RollerStatus).END;

            if (auto) {
              autoNode.active = !this.isLimit();
              zi_AUTO.active = false;
              limitNode.active = this.isLimit();

              if (!this.isLimit()) {
                autoNode.getComponent(Label).string = this.props.autoLauncherInfo.leftCount + "/" + this.props.autoLauncherInfo.totalCount;
              } else {
                limitNode.getChildByName('layout_limit').getChildByName('Number').getComponent(Label).string = this.props.autoLauncherInfo.leftCount + "";
              }
            } else {
              autoNode.active = false;
              zi_AUTO.active = true;
              limitNode.active = false;
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
          var auto = (_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
            error: Error()
          }), isAuto) : isAuto)(this.props.autoLauncherInfo, this.props.gameTypeInfo); // 结束过程中和不是自动游戏时，开始按钮禁用

          if (auto) {
            this.updateBtnStatus(this.propertyNode.props_startButton, true);
            return;
          }

          if (this.isMain() && this.props.rollerStatus === (_crd && RollerStatus === void 0 ? (_reportPossibleCrUseOfRollerStatus({
            error: Error()
          }), RollerStatus) : RollerStatus).ENDING || this.isChangeGame() && this.isNextSubGame()) {
            this.updateBtnStatus(this.propertyNode.props_startButton, true); // this.propertyNode.props_startButton.getComponent(Sprite).grayscale = true;
          } else {
            if (!this.isChangeGame()) {
              this.updateBtnStatus(this.propertyNode.props_startButton, false);
            } // this.propertyNode.props_startButton.getComponent(Sprite).grayscale = false;

          }
        }
        /**是否准备切换游戏 */


        isChangeGame() {
          return this.props.gameTypeInfo && this.props.gameTypeInfo.viewGameType !== this.props.gameTypeInfo.currGameType;
        }

        isSubGame2() {
          return this.props.gameTypeInfo && this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2;
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
          var isDisable = this.isBtnDisable();
          this.updateBtnStatus(this.propertyNode.props_max_btn, isDisable);
          this.updateBtnStatus(this.propertyNode.props_min_btn, isDisable);
          this.updateBtnStatus(this.propertyNode.props_maxBet_btn, isDisable);

          if (!(_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
            error: Error()
          }), isAuto) : isAuto)(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
            this.updateBtnStatus(this.propertyNode.props_btn_down_auto, isDisable);
          } else {
            if (!this.isMain()) {
              this.updateBtnStatus(this.propertyNode.props_btn_down_auto, true);
            } else {
              this.updateBtnStatus(this.propertyNode.props_btn_down_auto, false);
            }
          } // this.propertyNode.props_max_btn.getComponent(Sprite).grayscale = isDisable;
          // this.propertyNode.props_min_btn.getComponent(Sprite).grayscale = isDisable;
          // this.propertyNode.props_maxBet_btn.getComponent(Sprite).grayscale = isDisable;
          // this.propertyNode.props_SZX_bz_btn.getComponent(Sprite).grayscale = isDisable;


          this.propertyNode.props_max_btn.getComponent(Button).enabled = !isDisable;
          this.propertyNode.props_min_btn.getComponent(Button).enabled = !isDisable;
          this.propertyNode.props_maxBet_btn.getComponent(Button).enabled = !isDisable;
          this.propertyNode.props_btn_down_auto.getComponent(Button).enabled = !isDisable; // this.propertyNode.props_SZX_bz_btn.getComponent(Button).enabled = !isDisable;
        }

        updateBtnStatus(btnNode, isDisable) {
          btnNode.getChildByName("disable").active = isDisable;
        }
        /**更新最大最小状态 */


        updateMaxMinBetDisableStatus() {
          var amount = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).betSwitcher[0].amount;
          var isMaxBet = this.props.positionId >= amount[amount.length - 1].positionId;
          var isDisable = this.isBtnDisable();

          if (isDisable || amount[amount.length - 1].positionId === this.props.positionId) {
            this.updateBtnStatus(this.propertyNode.props_max_btn, true); // this.propertyNode.props_max_btn.getComponent(Sprite).grayscale = true;

            this.propertyNode.props_max_btn.getComponent(Button).enabled = false;
          } else {
            this.updateBtnStatus(this.propertyNode.props_max_btn, false); // this.propertyNode.props_max_btn.getComponent(Sprite).grayscale = false;

            this.propertyNode.props_max_btn.getComponent(Button).enabled = true;
          }

          if (isDisable || this.props.positionId === amount[0].positionId) {
            this.updateBtnStatus(this.propertyNode.props_min_btn, true); // this.propertyNode.props_min_btn.getComponent(Sprite).grayscale = true;

            this.propertyNode.props_min_btn.getComponent(Button).enabled = false;
          } else {
            this.updateBtnStatus(this.propertyNode.props_min_btn, false); // this.propertyNode.props_min_btn.getComponent(Sprite).grayscale = false;

            this.propertyNode.props_min_btn.getComponent(Button).enabled = true;
          }

          this.updateMaxBetStatus();
        }

        getMaxBetPositionId() {
          var amount = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).betSwitcher[0].amount;
          var maxBetPositionId = 1;

          for (var i = amount.length - 1; i >= 0; i--) {
            var positionId = amount[i].positionId;
            var betAmount = (_crd && calBetAmount === void 0 ? (_reportPossibleCrUseOfcalBetAmount({
              error: Error()
            }), calBetAmount) : calBetAmount)(positionId);

            if (this.props.gold >= betAmount) {
              maxBetPositionId = positionId;
              break;
            }
          }

          return maxBetPositionId;
        }

        updateMaxBetStatus() {
          // const isMaxBet = this.props.positionId >= this.getMaxBetPositionId();
          if (this.isBtnDisable()) {
            this.updateBtnStatus(this.propertyNode.props_maxBet_btn, true); // this.propertyNode.props_maxBet_btn.getComponent(Sprite).grayscale = true;

            this.propertyNode.props_maxBet_btn.getComponent(Button).enabled = false;
          } else {
            this.updateBtnStatus(this.propertyNode.props_maxBet_btn, false); // this.propertyNode.props_maxBet_btn.getComponent(Sprite).grayscale = false;

            this.propertyNode.props_maxBet_btn.getComponent(Button).enabled = true;
          }
        }

        updateBetInfo() {
          var amountInfo = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).betSwitcher[0].amount.find(v => v.positionId === this.props.positionId);
          this.propertyNode.props_betAmount.string = (_crd && calBetAmount === void 0 ? (_reportPossibleCrUseOfcalBetAmount({
            error: Error()
          }), calBetAmount) : calBetAmount)(this.props.positionId).formatAmountWithCommas();
          this.propertyNode.props_lineCount.string = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).betAmount + "x" + amountInfo.value;
        }

        updateScore(value) {
          console.log("updateScore: " + JSON.stringify(value));
          this.propertyNode.props_goodluck.active = value.cur === 0;
          this.propertyNode.props_bottom_score.node.active = value.cur > 0;
          new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
            error: Error()
          }), StepNumber) : StepNumber)(value.pre, value.cur, num => {
            if (this.node && this.node.isValid) {
              var _value = Number(num.toFixed(0));

              this.propertyNode.props_bottom_score.string = _value.formatAmountWithCommas();
            }
          }).set((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.numberRollerTime).start(); // this.stepNumberV2.start(value.pre, value.cur, (num) => {
          // 	if (this.node && this.node.isValid) {
          // 		const value = Number(num.toFixed(0));
          // 		this.propertyNode.props_bottom_score.string = value.formatAmountWithCommas();
          // 	}
          // }, undefined, config.normalRollOption.numberRollerTime)
        }

        isWinWild() {}

        getRollerIcon() {
          var si = (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).rollerLaunchResult.dl.si[0];
          si.rollerId;
        }

        useProps(key, value) {
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
            } else if (key === 'positionId') {
              this.updateBetInfo();
            } else if (key === 'gold') {
              this.updateSprMoney();
            } else if (key === 'winloss') {
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
                var leftCount = this.isLimit() ? this.props.autoLauncherInfo.leftCount + 1 : this.props.autoLauncherInfo.leftCount - 1;
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
          (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
            error: Error()
          }), mainViewModel) : mainViewModel).setGoodLuckPos(this.propertyNode.props_bottom_score.node.worldPosition);
        }

        updateSprMoney() {
          if (this.props.gold < (_crd && calBetAmount === void 0 ? (_reportPossibleCrUseOfcalBetAmount({
            error: Error()
          }), calBetAmount) : calBetAmount)(this.props.positionId)) {
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
//# sourceMappingURL=5308415648a15e894134b87c21dbdb19da8ccc27.js.map