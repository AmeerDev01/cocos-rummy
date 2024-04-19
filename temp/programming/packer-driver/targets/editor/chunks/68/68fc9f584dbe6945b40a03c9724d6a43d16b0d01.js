System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, BaseComponent, DialogType, GameType, isAuto, getNodeByNameDeep, config, StepNumberV2, cacheData, Dragonv2_Audio, SoundPathDefine, _dec, _class, _crd, ccclass, property, DragonV2_DialogWin;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherInfo(extras) {
    _reporterNs.report("AutoLauncherInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDialogInfo(extras) {
    _reporterNs.report("DialogInfo", "../type", _context.meta, extras);
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

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStepNumberV(extras) {
    _reporterNs.report("StepNumberV2", "../../../utils/StepNumberV2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcacheData(extras) {
    _reporterNs.report("cacheData", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDragonv2_Audio(extras) {
    _reporterNs.report("Dragonv2_Audio", "../index", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      DialogType = _unresolved_3.DialogType;
      GameType = _unresolved_3.GameType;
      isAuto = _unresolved_3.isAuto;
    }, function (_unresolved_4) {
      getNodeByNameDeep = _unresolved_4.getNodeByNameDeep;
    }, function (_unresolved_5) {
      config = _unresolved_5.default;
    }, function (_unresolved_6) {
      StepNumberV2 = _unresolved_6.default;
    }, function (_unresolved_7) {
      cacheData = _unresolved_7.cacheData;
    }, function (_unresolved_8) {
      Dragonv2_Audio = _unresolved_8.Dragonv2_Audio;
    }, function (_unresolved_9) {
      SoundPathDefine = _unresolved_9.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "397c0OX7eVHhLB49+kCQ27g", "DragonV2_DialogWin", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DragonV2_DialogWin", DragonV2_DialogWin = (_dec = ccclass('DragonV2_DialogWin'), _dec(_class = class DragonV2_DialogWin extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.stepNumberV2 = new (_crd && StepNumberV2 === void 0 ? (_reportPossibleCrUseOfStepNumberV({
            error: Error()
          }), StepNumberV2) : StepNumberV2)(this);
          this.jackpotWin = false;
          this.propertyNode = {
            props_bigWin: new Node(),
            props_jackpot: new Node(),
            props_megaWin: new Node(),
            props_superWin: new Node(),
            props_freeEntry: new Node(),
            props_freeSettlement: new Node(),
            props_jackpotpopUps: new Node(),
            props_baoHeGameEntry: new Node()
          };
          this.props = {
            dialogInfo: null,
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
            autoLauncherInfo: null
          };
          this.events = {
            onWindowCloseHandler: dialogType => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.node.on(Node.EventType.TOUCH_END, () => {
            (_crd && Dragonv2_Audio === void 0 ? (_reportPossibleCrUseOfDragonv2_Audio({
              error: Error()
            }), Dragonv2_Audio) : Dragonv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).btn_click);

            if (this.isFreeGameEntry() || this.isBaoHeGameEntry() || this.isFreeGameSettlement() || this.jackpotWin) {
              this.jackpotWin = false;
              this.node.destroy();
              this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
            } else {
              if (this.isBaoHeGameSettlement()) {
                // jackpot
                this.propertyNode.props_jackpotpopUps.active = false;
                this.jackpotWin = true;
                this.showFreeSettlement(2);
              }
            }
          });
          this.node.getChildByName('SpriteSplash').on(Node.EventType.TOUCH_END, () => {
            (_crd && Dragonv2_Audio === void 0 ? (_reportPossibleCrUseOfDragonv2_Audio({
              error: Error()
            }), Dragonv2_Audio) : Dragonv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).btn_click);

            if (this.isFreeGameEntry() || this.isBaoHeGameEntry() || this.isFreeGameSettlement() || this.jackpotWin) {
              this.node.destroy();
              this.jackpotWin = false;
              this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
            } else {
              if (this.isBaoHeGameSettlement()) {
                // jackpot
                this.jackpotWin = true;
                this.propertyNode.props_jackpotpopUps.active = false;
                this.showFreeSettlement(2);
              }
            }
          });
        }

        isFreeGameEntry() {
          return this.props.dialogInfo && this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
            error: Error()
          }), DialogType) : DialogType).FREE_GAME_ENTRY;
        }

        isBaoHeGameEntry() {
          return this.props.dialogInfo && this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
            error: Error()
          }), DialogType) : DialogType).BAO_HE_GAME_ENTRY;
        }

        isFreeGameSettlement() {
          return this.props.dialogInfo && this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
            error: Error()
          }), DialogType) : DialogType).FREE_GAME_SETTLEMENT;
        }

        isBaoHeGameSettlement() {
          return this.props.dialogInfo && this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
            error: Error()
          }), DialogType) : DialogType).BAO_HE_GAME_SETTLEMENT;
        }

        useProps(key, value) {
          if (this.node && this.node.isValid) {
            if (key === 'dialogInfo') {
              this.hideAll();

              if (value.cur) {
                this.node.active = true;

                if (this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                  error: Error()
                }), DialogType) : DialogType).BIG_WIN) {
                  this.showBigWin();
                } else if (this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                  error: Error()
                }), DialogType) : DialogType).JACKPOT) {
                  this.showJackpot();
                } else if (this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                  error: Error()
                }), DialogType) : DialogType).MEGA_WIN) {
                  this.showMegaWin();
                } else if (this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                  error: Error()
                }), DialogType) : DialogType).SUPER_WIN) {
                  this.showSuperWin();
                } else if (this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                  error: Error()
                }), DialogType) : DialogType).FREE_GAME_SETTLEMENT) {
                  this.showFreeSettlement(1);
                } else if (this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                  error: Error()
                }), DialogType) : DialogType).BAO_HE_GAME_SETTLEMENT) {
                  if (this.getLw()) {
                    this.showBaoHeSettlement(() => {
                      this.jackpotWin = true;
                      this.showFreeSettlement(2);
                    });
                  } else {
                    this.jackpotWin = true;
                    this.showFreeSettlement(2);
                  }
                } else if (this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                  error: Error()
                }), DialogType) : DialogType).FREE_GAME_ENTRY) {
                  this.showFreeEntry();
                } else if (this.props.dialogInfo.dialogType === (_crd && DialogType === void 0 ? (_reportPossibleCrUseOfDialogType({
                  error: Error()
                }), DialogType) : DialogType).BAO_HE_GAME_ENTRY) {
                  this.showBaoHeEntry();
                }
              } else {
                this.node.active = false;
              }
            }
          }
        }

        hideAll() {
          for (const key in this.propertyNode) {
            this.propertyNode[key].active = false;
          }
        }
        /* 进免费小游戏 */


        showFreeEntry() {
          this.propertyNode.props_freeEntry.active = true;
          const labelNode = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("Label_Number", this.propertyNode.props_freeEntry);
          labelNode.getComponent(Label).string = this.props.dialogInfo.params[0]; // 如果是自动模式，就等待关闭窗口

          if ((_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
            error: Error()
          }), isAuto) : isAuto)(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
            this.detryCloseWindow();
          }
        }
        /* 进龙珠小游戏 */


        showBaoHeEntry() {
          this.propertyNode.props_baoHeGameEntry.active = true; // 如果是自动模式，就等待关闭窗口

          if ((_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
            error: Error()
          }), isAuto) : isAuto)(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
            this.detryCloseWindow();
          }
        }
        /* 小游戏结算 */


        showFreeSettlement(type) {
          this.propertyNode.props_freeSettlement.active = true;
          this.propertyNode.props_freeSettlement.getChildByName('Img_infree').active = type == 1;
          this.propertyNode.props_freeSettlement.getChildByName('Img_inspecial').active = type == 2;
          const numberLabel = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("Label_Number", this.propertyNode.props_freeSettlement);
          this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
            // 如果是自动模式，就等待关闭窗口
            if (this.node && this.node.isValid && (_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
              error: Error()
            }), isAuto) : isAuto)(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
              this.detryCloseWindow();
            }
          });
        }

        getLw() {
          // 获取后端报奖信息
          return (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).rollerLaunchResult.dl.si[0] && (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).rollerLaunchResult.dl.si[0].lw;
        }
        /* 龙珠游戏结算 */


        showBaoHeSettlement(done) {
          (_crd && Dragonv2_Audio === void 0 ? (_reportPossibleCrUseOfDragonv2_Audio({
            error: Error()
          }), Dragonv2_Audio) : Dragonv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).get_coin);
          this.propertyNode.props_jackpotpopUps.active = true;
          const numberLabel = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("Label_Number", this.propertyNode.props_jackpotpopUps); // mini

          let length = (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).rollerLaunchResult.dl.si[0].fixedChessboardIcon.length;
          let count = 0;

          if (length >= 15) {
            this.propertyNode.props_jackpotpopUps.getChildByName('Title_Youwon').active = false;
            this.propertyNode.props_jackpotpopUps.getChildByName('Title_Youwon1').active = false;
            this.propertyNode.props_jackpotpopUps.getChildByName('Title_Youwon2').active = true;
            count = this.getLw().grand;
          } else if (length >= 10) {
            this.propertyNode.props_jackpotpopUps.getChildByName('Title_Youwon').active = false;
            this.propertyNode.props_jackpotpopUps.getChildByName('Title_Youwon1').active = true;
            count = this.getLw().major;
          } else if (length >= 5) {
            count = this.getLw().mini;
            this.propertyNode.props_jackpotpopUps.getChildByName('Title_Youwon').active = true;
          }

          this.startStepNumber(numberLabel.getComponent(Label), 0, count, () => {
            // 如果是自动模式，就等待关闭窗口
            if (this.node && this.node.isValid && (_crd && isAuto === void 0 ? (_reportPossibleCrUseOfisAuto({
              error: Error()
            }), isAuto) : isAuto)(this.props.autoLauncherInfo, this.props.gameTypeInfo)) {
              this.propertyNode.props_jackpotpopUps.active = false;
              done();
            }
          });
        }

        showBigWin() {
          (_crd && Dragonv2_Audio === void 0 ? (_reportPossibleCrUseOfDragonv2_Audio({
            error: Error()
          }), Dragonv2_Audio) : Dragonv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).get_coin);
          this.propertyNode.props_bigWin.active = true;
          const numberLabel = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("Label_Number", this.propertyNode.props_bigWin);
          this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
            this.detryCloseWindow();
          });
        }

        showJackpot() {
          (_crd && Dragonv2_Audio === void 0 ? (_reportPossibleCrUseOfDragonv2_Audio({
            error: Error()
          }), Dragonv2_Audio) : Dragonv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).get_coin);
          this.propertyNode.props_jackpot.active = true;
          const numberLabel = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("Label_Number", this.propertyNode.props_jackpot);
          this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
            this.detryCloseWindow();
          });
        }

        showMegaWin() {
          (_crd && Dragonv2_Audio === void 0 ? (_reportPossibleCrUseOfDragonv2_Audio({
            error: Error()
          }), Dragonv2_Audio) : Dragonv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).get_coin);
          this.propertyNode.props_megaWin.active = true;
          const numberLabel = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("Label_Number", this.propertyNode.props_megaWin);
          this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
            this.detryCloseWindow();
          });
        }

        showSuperWin() {
          (_crd && Dragonv2_Audio === void 0 ? (_reportPossibleCrUseOfDragonv2_Audio({
            error: Error()
          }), Dragonv2_Audio) : Dragonv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).get_coin);
          this.propertyNode.props_superWin.active = true;
          const numberLabel = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("Label_Number", this.propertyNode.props_superWin);
          this.startStepNumber(numberLabel.getComponent(Label), 0, this.props.dialogInfo.params[0], () => {
            this.detryCloseWindow();
          });
        }

        startStepNumber(label, start, end, done) {
          this.stepNumberV2.start(start, end, num => {
            if (this.node && this.node.isValid) {
              label.string = Number(num.toFixed(0)).formatAmountWithCommas();
            }
          }, () => this.node && this.node.isValid && done(), (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.numberRollerTime);
        }

        detryCloseWindow() {
          this.scheduleOnce(() => {
            if (this.node && this.node.isValid) {
              this.node.destroy();
              this.events.onWindowCloseHandler(this.props.dialogInfo.dialogType);
            }
          }, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.dialogWinShowTime);
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=68fc9f584dbe6945b40a03c9724d6a43d16b0d01.js.map