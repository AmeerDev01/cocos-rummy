System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EditBox, Label, Node, Toggle, Sprite, Button, Crash_ViewBase, Crash_DataManager, PlayerWagering, Crash_NetMsgDispatcher, global, AudioManager, SoundList, ProtocolCode, lang, addToastAction, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, COINPARAMETERS, Crash_BottomActionbarLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCrash_ViewBase(extras) {
    _reporterNs.report("Crash_ViewBase", "../BaseView/Crash_ViewBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_DataManager(extras) {
    _reporterNs.report("Crash_DataManager", "../manager/Crash_DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerWagering(extras) {
    _reporterNs.report("PlayerWagering", "../net/protocol/WsProtocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_NetMsgDispatcher(extras) {
    _reporterNs.report("Crash_NetMsgDispatcher", "../net/Crash_NetMsgDispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../manager/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../manager/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocolCode(extras) {
    _reporterNs.report("ProtocolCode", "../net/protocol/ProtocolDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      EditBox = _cc.EditBox;
      Label = _cc.Label;
      Node = _cc.Node;
      Toggle = _cc.Toggle;
      Sprite = _cc.Sprite;
      Button = _cc.Button;
    }, function (_unresolved_2) {
      Crash_ViewBase = _unresolved_2.Crash_ViewBase;
    }, function (_unresolved_3) {
      Crash_DataManager = _unresolved_3.Crash_DataManager;
    }, function (_unresolved_4) {
      PlayerWagering = _unresolved_4.PlayerWagering;
    }, function (_unresolved_5) {
      Crash_NetMsgDispatcher = _unresolved_5.default;
    }, function (_unresolved_6) {
      global = _unresolved_6.global;
    }, function (_unresolved_7) {
      AudioManager = _unresolved_7.AudioManager;
      SoundList = _unresolved_7.SoundList;
    }, function (_unresolved_8) {
      ProtocolCode = _unresolved_8.ProtocolCode;
    }, function (_unresolved_9) {
      lang = _unresolved_9.lang;
    }, function (_unresolved_10) {
      addToastAction = _unresolved_10.addToastAction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8b6b1oDCs1Af4OE/xI2j3SU", "Crash_BottomActionbarLayer", undefined);

      __checkObsolete__(['_decorator', 'EditBox', 'Label', 'log', 'Node', 'Toggle', 'Sprite', 'Button']);

      ({
        ccclass,
        property
      } = _decorator); // 金币

      COINPARAMETERS = {
        one: 1000,
        two: 5000,
        three: 10000,
        four: 300000,
        five: 1000000
      };

      _export("Crash_BottomActionbarLayer", Crash_BottomActionbarLayer = (_dec = ccclass('CrashBottomActionbarLayer'), _dec2 = property(EditBox), _dec(_class = (_class2 = class Crash_BottomActionbarLayer extends (_crd && Crash_ViewBase === void 0 ? (_reportPossibleCrUseOfCrash_ViewBase({
        error: Error()
      }), Crash_ViewBase) : Crash_ViewBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "betting_label", _descriptor, this);

          this.data = {
            Gold: 1000,
            multiple: 1.01
          };
          this.userinfo = null;
          this.maxGold = 0;
          this.timeAccumulator = 0;
          this.isGameType1Executed = true;
          this.bettingSituation = false;
          this.crashStageVo = void 0;
          this.lastValidInput = '1.01';
          this.bettingStatus = true;
        }

        start() {
          this.setBtn_disable(true);
          this.init_Label_Gold();

          this._nodes['avatar_buy'].on(Node.EventType.TOUCH_END, () => {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).buttonClick);
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop();
          }); //  点击max


          this._nodes['pledge_max'].on(Button.EventType.CLICK, () => {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).buttonClick);
            this.setGold(this.maxGold);
          }); //  点击下划线重置金币


          this._nodes['atur_uiang'].on(Button.EventType.CLICK, () => {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).buttonClick);
            this.setGold(1000);
          }); //  点击减注


          this._nodes['betting_down'].on(Node.EventType.TOUCH_END, () => {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).buttonClick);
            this.subtractMultiple();
          }); //  点击加注


          this._nodes['betting_up'].on(Node.EventType.TOUCH_END, () => {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).buttonClick);
            this.addMultiple();
          }); //  点击按钮重置倍数


          this._nodes['btn_aturUiang'].on(Node.EventType.TOUCH_END, () => {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).buttonClick);
            this.initMultiple();
          }); // 


          this._nodes['props_btn_shop'].on(Node.EventType.TOUCH_END, () => {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).buttonClick);
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop();
          });

          (_crd && Crash_NetMsgDispatcher === void 0 ? (_reportPossibleCrUseOfCrash_NetMsgDispatcher({
            error: Error()
          }), Crash_NetMsgDispatcher) : Crash_NetMsgDispatcher).getInstance().regCallBack((_crd && ProtocolCode === void 0 ? (_reportPossibleCrUseOfProtocolCode({
            error: Error()
          }), ProtocolCode) : ProtocolCode).VIPLEVEL, this, this.vipShow);
          (_crd && Crash_NetMsgDispatcher === void 0 ? (_reportPossibleCrUseOfCrash_NetMsgDispatcher({
            error: Error()
          }), Crash_NetMsgDispatcher) : Crash_NetMsgDispatcher).getInstance().regCallBack((_crd && ProtocolCode === void 0 ? (_reportPossibleCrUseOfProtocolCode({
            error: Error()
          }), ProtocolCode) : ProtocolCode).RES_PLAYER_WAGERING, this, this.sendChatRsp); //  点击玩家下注

          this._nodes['Switch_Bonus'].on(Node.EventType.TOUCH_END, event => {
            var _this$crashStageVo, _this$crashStageVo2;

            console.log(!this.bettingSituation, ((_this$crashStageVo = this.crashStageVo) == null ? void 0 : _this$crashStageVo.gameType) == 1, this.data.Gold > 0, this.bettingStatus);

            if (!this.bettingSituation && ((_this$crashStageVo2 = this.crashStageVo) == null ? void 0 : _this$crashStageVo2.gameType) == 1 && this.data.Gold > 0 && this.bettingStatus) {
              if (this.data.Gold > this.maxGold) {
                (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                  error: Error()
                }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                  error: Error()
                }), addToastAction) : addToastAction)({
                  content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                    error: Error()
                  }), lang) : lang).write(k => k.palyingModule.RechangeGlod, {}, {
                    placeStr: "金币不足"
                  })
                }));
              } else {
                this.bettingSituation = true;
                (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                  error: Error()
                }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                  error: Error()
                }), SoundList) : SoundList).buttonClick);
                let myInfo = (_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
                  error: Error()
                }), Crash_DataManager) : Crash_DataManager).getInstance().getUserInfo(); // 发送

                let data = {
                  tableId: (_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
                    error: Error()
                  }), Crash_DataManager) : Crash_DataManager).getInstance().getUserInfo().getTableId(),
                  // 通过暴露拿到私有变量下的玩家名称
                  memberName: myInfo.getUserInfo().memberName,
                  // 玩家id
                  memberId: myInfo.getUserInfo().memberId,
                  // 下注金币
                  gold: this.data.Gold,
                  // 玩家下注倍数
                  odds: this.data.multiple.toFixed(2)
                };
                (_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
                  error: Error()
                }), Crash_DataManager) : Crash_DataManager).getInstance().setBettingCondition(true);
                new (_crd && PlayerWagering === void 0 ? (_reportPossibleCrUseOfPlayerWagering({
                  error: Error()
                }), PlayerWagering) : PlayerWagering)().setParams(data).send(data);
              }
            } else {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.palyingModule.CrashBottomFailed, {}, {
                  placeStr: "下注失败"
                })
              }));
              this.bettingStatus = true;
            }
          }); // 获取倍数


          this._nodes['btn_one'].on(Node.EventType.TOUCH_END, this.subtract.bind(this));

          this._nodes['btn_two'].on(Node.EventType.TOUCH_END, this.subtract.bind(this));

          this._nodes['btn_three'].on(Node.EventType.TOUCH_END, this.subtract.bind(this));

          this._nodes['btn_four'].on(Node.EventType.TOUCH_END, this.subtract.bind(this));

          this._nodes['btn_five'].on(Node.EventType.TOUCH_END, this.subtract.bind(this));

          this.betting_label.node.on('editing-did-ended', this.callback, this);

          this._nodes['max_gold'].getComponent(EditBox).node.on('editing-did-ended', this.goldCallback, this);

          this.initHead();
        }

        vipShow(bl, data, args) {
          if (bl) {
            let node = this._nodes['props_layout_lock'];

            if (data.data.length > 0) {
              node.active = true;

              if (data.data[0].name == "vip") {
                node.getChildByName('props_tips_vip').active = true;
                node.getChildByName('props_tips_gold').active = false;
                node.getChildByName('props_tips_vip').getChildByName('Label_lock_num').getComponent(Label).string = data.data[0].num;
              }

              if (data.data[0].name == "gold") {
                node.getChildByName('props_tips_gold').active = true;
                node.getChildByName('props_tips_vip').active = false;
                node.getChildByName('props_tips_gold').getChildByName('Label_lock_num').getComponent(Label).string = Number(data.data[0].num).formatAmountWithCommas();
              }
            } else {
              node.active = false;
            }
          }
        }

        onDestroy() {
          super.onDestroy();
          (_crd && Crash_NetMsgDispatcher === void 0 ? (_reportPossibleCrUseOfCrash_NetMsgDispatcher({
            error: Error()
          }), Crash_NetMsgDispatcher) : Crash_NetMsgDispatcher).getInstance().removeAllProtocolByObj(this);
        } // 下注返回


        sendChatRsp(bl, data, args) {
          if (bl) {
            this.setBtn_disable(true);
            let node = this._nodes['Switch_Bonus'];
            node.getChildByName('icon').active = true;
            node.getChildByName('label').active = true;
            node.getChildByName('label').getComponent(Label).string = this.data.Gold >= 1000 ? this.data.Gold.formatAmountWithCommas() : String(this.data.Gold);
            this.userinfo.gold -= this.data.Gold;
            (_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
              error: Error()
            }), Crash_DataManager) : Crash_DataManager).getInstance().getUserInfo().setGold(this.userinfo.gold);
            this.initHead();
          }
        }

        goldCallback(e) {
          const regex = /^(\d*[1-9]\d00|[1-9]00)$/;

          if (regex.test(e.string)) {
            console.log(this.maxGold);

            if (Number(e.string) >= this.maxGold) {
              this.data.Gold = this.maxGold;
              e.string = this.data.Gold;
            } else {
              this.data.Gold = e.string;
            }
          } else {
            e.string = this.data.Gold;
          }
        }

        callback(e) {
          const regex = /^(\d{1,3}(\.\d{1,2})?|999(\.00)?)$/;

          if (regex.test(e.string) && Number(e.string) >= 1.01) {
            this.data.multiple = Number(e.string);
            this.lastValidInput = e.string; // 更新最后一个有效输入

            this.bettingStatus = true;
          } else {
            if (Number(e.string) > 999.99) {
              this.betting_label.string = '999.99';
            } else {
              this.bettingStatus = false;
              this.betting_label.string = this.lastValidInput; // 重置为最后一个有效输入
            }
          }
        }
        /*渲染头像*/


        initHead() {
          this.userinfo = (_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
            error: Error()
          }), Crash_DataManager) : Crash_DataManager).getInstance().getUserInfo() && (_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
            error: Error()
          }), Crash_DataManager) : Crash_DataManager).getInstance().getUserInfo().getUserInfo();
          if (!this.userinfo) return;
          this._nodes['avatar_name'].getComponent(Label).string = this.userinfo.memberName;
          this._nodes['avatar_number'].getComponent(Label).string = this.userinfo.gold.formatAmountWithCommas();
          this.maxGold = this.userinfo.gold;
          let sprList = (_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
            error: Error()
          }), Crash_DataManager) : Crash_DataManager).getInstance().getHeadSpriteFrame();
          let headImgUrl = `head_circle_${this.userinfo.avatarIndex}`;
          let spr = sprList.find(item => {
            return item.name == headImgUrl;
          });
          this._nodes['img_avatar'].getComponent(Sprite).spriteFrame = spr;
        } // 点击获取相应倍数值


        subtract(val) {
          switch (val.target._name) {
            case 'btn_one':
              this.addGold(COINPARAMETERS.one);
              break;

            case 'btn_two':
              this.addGold(COINPARAMETERS.two);
              break;

            case 'btn_three':
              this.addGold(COINPARAMETERS.three);
              break;

            case 'btn_four':
              this.addGold(COINPARAMETERS.four);
              break;

            case 'btn_five':
              this.addGold(COINPARAMETERS.five);
              break;
          }
        } // 重置金币


        setGold(i) {
          this.data.Gold = parseInt(String(i));
          this.init_Label_Gold();
        } //  金币累加


        addGold(i) {
          if (this.data.Gold + i > this.maxGold) {
            this.data.Gold = parseInt(String(this.maxGold));
          } else {
            this.data.Gold = parseInt(String(this.data.Gold + i));
          }

          this.init_Label_Gold();
        } // 获取倍数框组件


        init_Label_Gold() {
          this._nodes['max_gold'].getComponent(EditBox).string = this.data.Gold;
        } // 渲染加减倍数框


        subtract_Label_Gold() {
          this.betting_label.string = this.data.multiple.toFixed(2);
        } // getEditBox(e) {
        //     debugger
        //     const decimalRegex = /^\d+(\.\d{1,2})?$/;
        //     if (decimalRegex.test(e)) {
        //         if (Number(e) >= 999.99) {
        //             this.data.multiple = 999.99
        //             this.subtract_Label_Gold()
        //         }
        //         if (Number(e) <= 1.01) {
        //             this.initMultiple()
        //         }
        //         this.data.multiple = Number(e)
        //     }
        //     else {
        //         this.initMultiple()
        //     }
        // }
        //减 倍速


        subtractMultiple() {
          if (this.data.multiple <= 1.01) {
            this.initMultiple();
          } else {
            if (this.data.multiple > 5) {
              this.data.multiple = Number((this.data.multiple - 1).toFixed(2));
            } else if (this.data.multiple > 2) {
              this.data.multiple = Number((this.data.multiple - 0.5).toFixed(2));
            } else {
              this.data.multiple = Number((this.data.multiple - 0.2).toFixed(2));
            }

            if (this.data.multiple < 1.01) {
              this.data.multiple = 1.01;
            }
          }

          this.subtract_Label_Gold();
        } //加倍速


        addMultiple() {
          if (this.data.multiple >= 999.99) {
            this.data.multiple = 999.99;
          } else {
            if (Math.ceil(this.data.multiple * 1000) / 1000 < 2) {
              this.data.multiple += 0.2;
            } else if (Math.ceil(this.data.multiple * 1000) / 1000 > 5) {
              this.data.multiple += 1;
            } else {
              this.data.multiple += 0.5;
            }

            if (this.data.multiple > 999.99) {
              this.data.multiple = 999.99;
            }
          }

          this.subtract_Label_Gold();
        }

        initMultiple() {
          this.data.multiple = 1.01;
          this.subtract_Label_Gold();
          this.bettingStatus = true;
        }

        setBtn_disable(flag) {
          this._nodes['btn_one'].getComponent(Toggle).isChecked = flag;
          this._nodes['btn_two'].getComponent(Toggle).isChecked = flag;
          this._nodes['btn_three'].getComponent(Toggle).isChecked = flag;
          this._nodes['btn_four'].getComponent(Toggle).isChecked = flag;
          this._nodes['btn_five'].getComponent(Toggle).isChecked = flag;
          this._nodes['betting_up'].getComponent(Toggle).isChecked = flag;
          this._nodes['betting_down'].getComponent(Toggle).isChecked = flag;
          this._nodes['btn_aturUiang'].getComponent(Toggle).isChecked = flag;
          this._nodes['atur_uiang'].getComponent(Button).interactable = !flag;
          this._nodes['pledge_max'].getComponent(Button).interactable = !flag;
          this._nodes['Switch_Bonus'].getComponent(Toggle).isChecked = flag;

          if (!flag) {
            let switch_Bonus = this._nodes['Switch_Bonus'];
            switch_Bonus.getChildByName('icon').active = false;
            switch_Bonus.getChildByName('label').active = false;
          }
        }

        update(deltaTime) {
          this.crashStageVo = (_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
            error: Error()
          }), Crash_DataManager) : Crash_DataManager).getInstance().getCrashStageVo();
          if (!this.crashStageVo) return;

          if (this.crashStageVo.gameType !== 1) {
            this.isGameType1Executed = true;
            this.bettingSituation = false;
            this.setBtn_disable(true);
          } else if (this.crashStageVo.gameType === 1 && this.isGameType1Executed) {
            this.isGameType1Executed = false;
            this.setBtn_disable(false);
          } else if (this.crashStageVo.gameType !== 3) {}

          this.timeAccumulator += deltaTime;

          if (this.timeAccumulator >= 1) {
            this.timeAccumulator = 0;
            this.initHead();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "betting_label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bba4b15b3e497b710bdeb765423f5c116a9ca759.js.map