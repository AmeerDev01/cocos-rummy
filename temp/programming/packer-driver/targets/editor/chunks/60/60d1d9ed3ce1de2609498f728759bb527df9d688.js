System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, tween, UIOpacity, UITransform, Vec3, BaseComponent, AutoLauncherType, GameType, IconEffectType, RollerViewModel, thor_Audio, sourceManageSeletor, winShowViewModel, PrefabPathDefine, dataTransfer, DataKeyType, SoundPathDefine, TaskScheduler, changeAutoLauncherType, Thor_Roller, _dec, _class, _crd, ccclass, property, Thor_RollerPanel;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoLauncherType(extras) {
    _reporterNs.report("AutoLauncherType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconEffectType(extras) {
    _reporterNs.report("IconEffectType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerType(extras) {
    _reporterNs.report("RollerType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerViewModel(extras) {
    _reporterNs.report("RollerViewModel", "../viewModel/RollerViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfthor_Audio(extras) {
    _reporterNs.report("thor_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfwinShowViewModel(extras) {
    _reporterNs.report("winShowViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdataTransfer(extras) {
    _reporterNs.report("dataTransfer", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataKeyType(extras) {
    _reporterNs.report("DataKeyType", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskScheduler(extras) {
    _reporterNs.report("TaskScheduler", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStepNumber(extras) {
    _reporterNs.report("StepNumber", "../../../utils/StepNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeAutoLauncherType(extras) {
    _reporterNs.report("changeAutoLauncherType", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThor_Roller(extras) {
    _reporterNs.report("Thor_Roller", "./Thor_Roller", _context.meta, extras);
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
      Node = _cc.Node;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      AutoLauncherType = _unresolved_3.AutoLauncherType;
      GameType = _unresolved_3.GameType;
      IconEffectType = _unresolved_3.IconEffectType;
    }, function (_unresolved_4) {
      RollerViewModel = _unresolved_4.default;
    }, function (_unresolved_5) {
      thor_Audio = _unresolved_5.thor_Audio;
      sourceManageSeletor = _unresolved_5.sourceManageSeletor;
      winShowViewModel = _unresolved_5.winShowViewModel;
    }, function (_unresolved_6) {
      PrefabPathDefine = _unresolved_6.PrefabPathDefine;
    }, function (_unresolved_7) {
      dataTransfer = _unresolved_7.default;
      DataKeyType = _unresolved_7.DataKeyType;
    }, function (_unresolved_8) {
      SoundPathDefine = _unresolved_8.SoundPathDefine;
    }, function (_unresolved_9) {
      TaskScheduler = _unresolved_9.default;
    }, function (_unresolved_10) {
      changeAutoLauncherType = _unresolved_10.changeAutoLauncherType;
    }, function (_unresolved_11) {
      Thor_Roller = _unresolved_11.Thor_Roller;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d5e6bserpZOQqfqK0aGOyW3", "Thor_RollerPanel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Layout', 'log', 'Node', 'tween', 'UIOpacity', 'UITransform', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Thor_RollerPanel", Thor_RollerPanel = (_dec = ccclass('Thor_RollerPanel'), _dec(_class = class Thor_RollerPanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.rollerViewModelMap = [];
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
          this.stepNumber = void 0;
          this.betAmount = void 0;
          this.fadeDuration = 0.2;
          // 闪动总的列数
          this.effectColumnLength = 0;
          this.effectCount = 0;
          this.propertyNode = {
            /**滑槽主板 */
            props_spr_MainRoller_list: new Node(),
            props_spr_smallGameRoller_list: new Node(),
            props_label_beil: new Label(),
            props_label_rateNum: new Label(),
            props_spr_tools_rate: new Node(),
            props_btn_rate: new Node(),
            props_spr_tools_beli: new Node(),
            props_label_sg_num: new Node(),
            props_add_freebox: new Node(),
            props_label_rate: new Node()
            /**jackpot的额度 */
            // props_Label_jackpot_num: new Label()

          };
          this.props = {
            rollerMap: [],
            iconEffectData: {
              iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                error: Error()
              }), IconEffectType) : IconEffectType).NONE,
              coord: []
            },
            betAmount: {},
            gameMode: 1,
            currGameType: 0,
            remainSubGameTimes: 0,
            isRollEnd: false,
            isHasten: false,
            minigameCount: 0,
            gameFreeGametotalMultiplier: 0
          };
          this.events = {
            allRollStop: () => {},
            probabilityDoublingSwitch: bl => {},
            isAccelerate: bl => {},
            buyMiniGames: str => {},
            setRoleAttacks: isState => {},
            effectEnd: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_rate.on(Node.EventType.TOUCH_END, e => {
            // if(this.props.gameMode!==3){
            let bl = e.target.getChildByName('btn_olpn_kaiguan').position.x > 0;
            this.props.isRollEnd && this.events.probabilityDoublingSwitch(!bl); // }
          });
          this.propertyNode.props_spr_tools_beli.on(Node.EventType.TOUCH_END, e => {
            if (this.props.gameMode !== 2 && this.props.isRollEnd) {
              this.dispatch((_crd && changeAutoLauncherType === void 0 ? (_reportPossibleCrUseOfchangeAutoLauncherType({
                error: Error()
              }), changeAutoLauncherType) : changeAutoLauncherType)((_crd && AutoLauncherType === void 0 ? (_reportPossibleCrUseOfAutoLauncherType({
                error: Error()
              }), AutoLauncherType) : AutoLauncherType).NONE));
              this.events.buyMiniGames(this.betAmount);
            }
          });
        }

        useProps(key, value) {
          if (key === "rollerMap") {
            if (!this.rollerViewModelMap.length) {
              this.initRollerList();
            } else {// roller组件自己去订阅store的数据，就不从这里更新了
              // this.rollerViewModelMap.forEach((roller, index) => {
              // 	roller.setProps({ rollerType: this.props.rollerMap[index] })
              // })
            }
          }

          if (key === 'isHasten') {
            this.events.isAccelerate(this.props.isHasten);
          }

          if (key === "isRollEnd") {
            tween(this.propertyNode.props_spr_tools_beli.getComponent(UIOpacity)).to(this.fadeDuration, {
              opacity: !this.props.isRollEnd ? 128 : 256
            }).start();
            tween(this.propertyNode.props_spr_tools_rate.getComponent(UIOpacity)).to(this.fadeDuration, {
              opacity: !this.props.isRollEnd ? 128 : 256
            }).start();

            if (this.props.isRollEnd) {
              this.setInterfaceStatus(this.props.gameMode);
              this.setProbabilityPanel(this.props.gameMode);
            }
          }

          if (key === "iconEffectData") {
            this.effectColumnLength = 0;
            this.effectCount = 0;
            this.rollerViewModelMap.forEach((roller, index) => {
              //index=0情况下=>[0,0][0,2],...=> 获取到一个这种数组:[0,2],描述第几条数组要闪动的图标序号
              const iconEffectArr = this.props.iconEffectData.coord.filter(i => i[0] === index).map(i => i[1]);

              if (iconEffectArr.length) {
                this.effectColumnLength++; //分配到各个滑槽

                roller.setProps({
                  iconEffectData: {
                    iconEffectArr,
                    iconEffect: this.props.iconEffectData.iconEffect,
                    time: Date.now() + Math.random()
                  }
                });
                let timer = setInterval(() => {
                  if (roller.comp.getDestroyed()) {
                    clearInterval(timer);
                  }
                }, 100);
              } else {
                roller.setProps({
                  iconEffectData: {
                    iconEffectArr: [],
                    iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                      error: Error()
                    }), IconEffectType) : IconEffectType).NONE,
                    time: Date.now() + Math.random()
                  }
                });
              }
            });
          }

          if (key === "currGameType") {
            if (value.cur === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).MAIN) {
              this.node.getChildByName('main').active = true;
              this.node.getChildByName('smallGame').active = false;
            } else if (value.cur === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME1) {
              this.node.getChildByName('main').active = false;
              this.node.getChildByName('smallGame').active = true;
            }
          }

          if (key === "minigameCount") {
            if (value.cur > 2) {
              this.propertyNode.props_add_freebox.getComponent(UIOpacity).opacity = 0; // 激活节点并进行渐显动画

              let props_label_num = this.propertyNode.props_add_freebox.getChildByName('props_label_add_num');
              let targetPosition = new Vec3(-580, -20, 1);
              let originalPosition = props_label_num.position.clone(); // 保存原始位置

              this.propertyNode.props_add_freebox.active = true;
              props_label_num.getComponent(Label).string = '+' + value.cur + '';
              tween(this.propertyNode.props_add_freebox.getComponent(UIOpacity)).to(0.3, {
                opacity: 255
              }, {
                easing: 'smooth'
              }) // 渐显动画，持续时间0.3秒
              .call(() => {
                tween(props_label_num).to(0.2, {
                  position: targetPosition
                }, {
                  easing: 'sineInOut'
                }) // 移动到目标位置，持续时间0.2秒
                // 可以添加其他动画效果，如缩放或旋转
                .to(0.5, {
                  scale: new Vec3(0, 0, 1.2)
                }, {
                  easing: 'sineInOut'
                }) // 举例：同时缩放
                .call(() => {
                  props_label_num.position = originalPosition;
                  props_label_num.setScale(1, 1, 1);
                  this.propertyNode.props_add_freebox.active = false;
                }).start();
              }).start();
            }
          }

          if (key === "betAmount") {
            let {
              betAmount,
              bet
            } = value.cur;
            this.betAmount = (betAmount * 100).formatAmountWithCommas();
            this.propertyNode.props_label_beil.string = (betAmount * 100).formatAmountWithCommas();
            this.propertyNode.props_label_rateNum.string = (bet * 25).formatAmountWithCommas();
          }

          if (key === "gameMode") {
            this.setInterfaceStatus(this.props.gameMode);
            this.setProbabilityPanel(this.props.gameMode);
          }

          if (key === "remainSubGameTimes") {
            this.propertyNode.props_label_sg_num.getComponent(Label).string = this.props.remainSubGameTimes + "";
          }

          if (key === "gameFreeGametotalMultiplier") {
            let labelNode = this.propertyNode.props_label_rate; // 获取 Label 节点

            if (value.cur > 0) {
              labelNode.active = true;
              let labelComponent = labelNode.getComponent(Label); // 获取 Label 组件

              labelComponent.string = value.cur + 'X'; // 设置 Label 文本
              // 创建一个缩放动画

              tween(labelNode).to(0.1, {
                scale: new Vec3(1.2, 1.2, 1.2)
              }, {
                easing: 'sineOut'
              }) // 放大到 1.2 倍
              .to(0.1, {
                scale: new Vec3(1, 1, 1)
              }, {
                easing: 'sineIn'
              }) // 恢复原始大小
              .start();
            } else {// labelNode.active = false
            }
          }
        }

        setInterfaceStatus(gameMode) {
          // 小游戏面板
          if (this.props.isRollEnd) {
            // 滚动无法点击
            return;
          }

          tween(this.propertyNode.props_spr_tools_rate.getComponent(UIOpacity)).to(this.fadeDuration, {
            opacity: gameMode === 3 ? 128 : 256
          }).start();
        }

        setProbabilityPanel(gameMode, state) {
          // 增加概率面板
          let bl = gameMode !== 2;
          let targetPosition = bl ? new Vec3(-21, 0, 0) : new Vec3(21, 0, 0);
          tween(this.propertyNode.props_btn_rate.getChildByName('btn_olpn_kaiguan')).call(() => {
            if (!bl) {
              this.propertyNode.props_btn_rate.getChildByName('btn_olpn_kaiguan').getChildByName('icon_kaiguan_duihao').active = true;
              this.propertyNode.props_btn_rate.getChildByName('btn_olpn_kaiguan').getChildByName('icon_kaiguan_jiantou').active = false;
            } else {
              this.propertyNode.props_btn_rate.getChildByName('btn_olpn_kaiguan').getChildByName('icon_kaiguan_duihao').active = false;
              this.propertyNode.props_btn_rate.getChildByName('btn_olpn_kaiguan').getChildByName('icon_kaiguan_jiantou').active = true;
            }
          }).to(this.fadeDuration, {
            position: targetPosition
          }).start();
          tween(this.propertyNode.props_spr_tools_beli.getComponent(UIOpacity)).to(this.fadeDuration, {
            opacity: !bl ? 128 : 256
          }).start();
        }

        setokkk(done) {
          //万能图标
          let count = 0; // thor_Audio.playOneShot(SoundPathDefine.SCATTER_SHOW)

          this.propertyNode.props_spr_MainRoller_list.children.forEach(item => {
            item.getComponent(_crd && Thor_Roller === void 0 ? (_reportPossibleCrUseOfThor_Roller({
              error: Error()
            }), Thor_Roller) : Thor_Roller).sparkling(() => {
              count++;

              if (count >= this.propertyNode.props_spr_MainRoller_list.children.length) {
                done();
              }
            });
          });
        } // 倍数图标执行


        multiplier(done) {
          let count = 0;
          this.propertyNode.props_spr_MainRoller_list.children.forEach(item => {
            item.getComponent(_crd && Thor_Roller === void 0 ? (_reportPossibleCrUseOfThor_Roller({
              error: Error()
            }), Thor_Roller) : Thor_Roller).multiplier(() => {
              count++;

              if (count >= this.propertyNode.props_spr_MainRoller_list.children.length) {
                done();
              }
            });
          });
        } // 小游戏总倍数飞行


        samllMultiplier(done) {
          // 获取起始和目标的世界坐标
          let startWorldPos = this.propertyNode.props_label_rate.worldPosition;
          let targetWorldPos = (_crd && winShowViewModel === void 0 ? (_reportPossibleCrUseOfwinShowViewModel({
            error: Error()
          }), winShowViewModel) : winShowViewModel).comp.node.getChildByName('props_spr_win_box').worldPosition; // 创建节点的实例

          let node = instantiate(this.propertyNode.props_label_rate); // 将节点添加到目标节点所在的父节点

          (_crd && winShowViewModel === void 0 ? (_reportPossibleCrUseOfwinShowViewModel({
            error: Error()
          }), winShowViewModel) : winShowViewModel).comp.node.addChild(node); // 获取父节点的 UITransform 组件

          let uiTransform = (_crd && winShowViewModel === void 0 ? (_reportPossibleCrUseOfwinShowViewModel({
            error: Error()
          }), winShowViewModel) : winShowViewModel).comp.node.getComponent(UITransform); // 将世界坐标转换为新父节点的局部坐标

          let startLocalPos = uiTransform.convertToNodeSpaceAR(startWorldPos);
          let targetLocalPos = uiTransform.convertToNodeSpaceAR(targetWorldPos);
          targetLocalPos.y = targetLocalPos.y - 25; // 设置节点的初始位置

          node.setPosition(startLocalPos); // 执行缓动动画

          tween(node).to(0.5, {
            position: targetLocalPos
          }, {
            easing: 'sineInOut'
          }).call(() => {
            this.scheduleOnce(() => {
              node.destroy();
              done();
            }, 0.5);
          }).start();
        }

        initRollerList() {
          (_crd && thor_Audio === void 0 ? (_reportPossibleCrUseOfthor_Audio({
            error: Error()
          }), thor_Audio) : thor_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).DROP_DOWN); //let node=this.props.currGameType==GameType.MAIN?this.propertyNode.props_spr_MainRoller_list:this.propertyNode.props_spr_smallGameRoller_list

          this.props.rollerMap.forEach(dataItem => {
            const rollerViewModel = new (_crd && RollerViewModel === void 0 ? (_reportPossibleCrUseOfRollerViewModel({
              error: Error()
            }), RollerViewModel) : RollerViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine).ROLLER).source).appendTo(this.propertyNode.props_spr_MainRoller_list).setProps({
              rollerType: dataItem,
              isHasten: this.props.isHasten
            }).setEvent({
              rollEnd: rollerIndex => {
                let isAllStop = !this.rollerViewModelMap.some(item => !item.comp.getRoundEnd());
                isAllStop && this.events.allRollStop();
              },
              setRoleAttack: bl => {
                this.events.setRoleAttacks(bl);
              },
              effectEnd: () => {
                if (this.effectColumnLength === 0) {
                  return;
                }

                this.effectCount++;

                if (this.effectCount >= this.effectColumnLength) {
                  this.effectColumnLength = 0;
                  this.events.effectEnd();
                }
              },
              isplayIcon: () => {
                if (this.props.currGameType == (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                  error: Error()
                }), GameType) : GameType).MAIN) {} else if (this.props.currGameType == (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                  error: Error()
                }), GameType) : GameType).SUBGAME1) {}
              }
            }).connect();
            this.rollerViewModelMap.push(rollerViewModel);
          });
          const gameType = (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
            error: Error()
          }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
            error: Error()
          }), DataKeyType) : DataKeyType).GAME_TYPE);
          (_crd && thor_Audio === void 0 ? (_reportPossibleCrUseOfthor_Audio({
            error: Error()
          }), thor_Audio) : thor_Audio).stop();
          (_crd && thor_Audio === void 0 ? (_reportPossibleCrUseOfthor_Audio({
            error: Error()
          }), thor_Audio) : thor_Audio).play(gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN ? (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).BG_MUSIC_MAIN : (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).BG_MUSIC_1, true);
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
//# sourceMappingURL=60d1d9ed3ce1de2609498f728759bb527df9d688.js.map