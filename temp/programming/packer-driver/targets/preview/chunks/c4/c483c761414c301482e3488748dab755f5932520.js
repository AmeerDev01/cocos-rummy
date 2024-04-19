System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, assetManager, Button, instantiate, Label, Node, Sprite, SpriteFrame, tween, BaseComponent, EffectType, global, hallAudio, lang, sourceManageSeletor, SKT_MAG_TYPE, sktInstance, sktMsgListener, PrefabPathDefine, SoundPathDefine, addToastAction, ToastType, BaseViewModel, ActivityType, _dec, _class, _crd, ccclass, property, Turntable;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhallAudio(extras) {
    _reporterNs.report("hallAudio", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKT_MAG_TYPE(extras) {
    _reporterNs.report("SKT_MAG_TYPE", "../../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktInstance(extras) {
    _reporterNs.report("sktInstance", "../../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktMsgListener(extras) {
    _reporterNs.report("sktMsgListener", "../../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../../sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToastType(extras) {
    _reporterNs.report("ToastType", "../../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseViewModel(extras) {
    _reporterNs.report("BaseViewModel", "../../viewModel/BaseViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityType(extras) {
    _reporterNs.report("ActivityType", "../Hall_ActivityPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCBEvent(extras) {
    _reporterNs.report("CBEvent", "./TurntableWin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCBProps(extras) {
    _reporterNs.report("CBProps", "./TurntableWin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCBState(extras) {
    _reporterNs.report("CBState", "./TurntableWin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTurntableWin(extras) {
    _reporterNs.report("TurntableWin", "./TurntableWin", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      assetManager = _cc.assetManager;
      Button = _cc.Button;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      EffectType = _unresolved_3.EffectType;
    }, function (_unresolved_4) {
      global = _unresolved_4.global;
      hallAudio = _unresolved_4.hallAudio;
      lang = _unresolved_4.lang;
      sourceManageSeletor = _unresolved_4.sourceManageSeletor;
    }, function (_unresolved_5) {
      SKT_MAG_TYPE = _unresolved_5.SKT_MAG_TYPE;
      sktInstance = _unresolved_5.sktInstance;
      sktMsgListener = _unresolved_5.sktMsgListener;
    }, function (_unresolved_6) {
      PrefabPathDefine = _unresolved_6.PrefabPathDefine;
    }, function (_unresolved_7) {
      SoundPathDefine = _unresolved_7.SoundPathDefine;
    }, function (_unresolved_8) {
      addToastAction = _unresolved_8.addToastAction;
      ToastType = _unresolved_8.ToastType;
    }, function (_unresolved_9) {
      BaseViewModel = _unresolved_9.default;
    }, function (_unresolved_10) {
      ActivityType = _unresolved_10.ActivityType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3ce41TK4upIxod5qSqOObKb", "Turntable", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'Button', 'ImageAsset', 'instantiate', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Turntable", Turntable = (_dec = ccclass('Turntable'), _dec(_class = class Turntable extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.speed = 100;
          // 每秒移动的像素
          this.resetPosition = -200;
          // 当节点移动到此位置时重置
          this.startPosition = 0;
          // 节点的起始位置
          this.CarouselData = [{
            str: 1
          }, {
            str: 2
          }, {
            str: 3
          }];
          this.interval = 5;
          // 每条信息显示的时间（秒）
          this.timer = 0;
          this.currentIndex = 0;
          this.moveDistance = 50;
          // 文本向上移动的距离
          this.count = 0;
          // 文本移动完成所需的时间（秒）
          this.startSpinning = true;
          this.isSpinning = false;
          // 转盘是否正在旋转
          this.quickStop = false;
          // 是否快速停止
          this.slowingDown = false;
          // 是否正在减速
          this.spinTime = 0;
          // 当前旋转的时间
          this.totalSpinTime = 4;
          // 总旋转时间
          this.maxAngle = 3600;
          // 最大旋转角度（10圈）
          this.slowdownTime = 5;
          // 减速时间
          this.totalSlowdownTime = 3;
          // 总减速时间
          this.turntableData = void 0;
          this.winData = void 0;
          this.winState = false;
          this.propertyNode = {
            props_btn_off: new Button(),
            props_btn_turntable_arow: new Button(),
            props_spr_truntable: new Node(),
            props_label_times: new Node(),
            props_tum_gift: new Node()
          };
          this.stopRaAge = 0;
          this.rotationData = {
            gift_1: [46, 80],
            gift_2: [-14, 28],
            gift_3: [290, 336],
            gift_4: [234, 280],
            gift_5: [180, 226],
            gift_6: [126, 170],
            gift_7: [95, 115]
          };
          this.props = {
            TurntableData: {}
          };
          this.events = {
            onClosePanel: () => {},
            setCount: num => {},
            setReadStatus: value => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_off.node.on(Button.EventType.CLICK, () => {
            if (this.isSpinning) {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.palyingModule.GameExit, {}, {
                  placeStr: "正在游戏中"
                }),
                type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                  error: Error()
                }), ToastType) : ToastType).ERROR
              }));
            } else {
              (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
                error: Error()
              }), sktMsgListener) : sktMsgListener).remove((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                error: Error()
              }), SKT_MAG_TYPE) : SKT_MAG_TYPE).TURNTABLESEND, "main");
              this.events.onClosePanel();
            }
          });
          this.propertyNode.props_btn_turntable_arow.node.on(Button.EventType.CLICK, this.onMouseDown, this);
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).TURNTABLESEND, "main", data => {
            if (this.count > 0) {
              this.count--;
              this.winData = data;

              if (data.count == 0) {
                this.events.setReadStatus((_crd && ActivityType === void 0 ? (_reportPossibleCrUseOfActivityType({
                  error: Error()
                }), ActivityType) : ActivityType).TURNPLATE + '');
                this.propertyNode.props_btn_turntable_arow.getComponent(Sprite).grayscale = true;
              }

              this.events.setCount(data);
              (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
                error: Error()
              }), hallAudio) : hallAudio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).WHIRL);
              this.propertyNode.props_label_times.getComponent(Label).string = this.count + ' kali';
              this.propertyNode.props_spr_truntable.children.forEach(item => {
                if (item.turntableId == data.turntablePrizeEntity.id) {
                  var values = this.rotationData[item.name];
                  this.stopRaAge = Number(this.getRandomBetween(values[0], values[1]));
                  this.startSpinning = true;
                  this.isSpinning = true;
                  this.quickStop = false;
                  this.slowingDown = false;
                  this.spinTime = 0;
                }
              });
            } else {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: data.reasonlang.write(k => k.WebSocketModule.ConfigGameFaild, {}, {
                  placeStr: data.reason
                }),
                type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                  error: Error()
                }), ToastType) : ToastType).ERROR
              }));
            }
          });
        } // 处理鼠标点击事件


        onMouseDown(event) {
          if (this.count <= 0) {
            this.events.setReadStatus((_crd && ActivityType === void 0 ? (_reportPossibleCrUseOfActivityType({
              error: Error()
            }), ActivityType) : ActivityType).TURNPLATE + '');
            this.propertyNode.props_btn_turntable_arow.getComponent(Sprite).grayscale = true;
          } else if (this.startSpinning) {
            if (!this.winState) {
              this.startSpinning = false;

              if (this.isSpinning) {
                // 如果已经在旋转，启动快速停止
                this.quickStop = true;
                this.slowingDown = true;
                this.slowdownTime = 0;
                this.startSpinning = true;
              } else {
                (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
                  error: Error()
                }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                  error: Error()
                }), SKT_MAG_TYPE) : SKT_MAG_TYPE).TURNTABLESEND, {
                  turntableId: this.turntableData.turntable.id
                });
              }
            }
          }
        }

        useProps(key, value) {
          if (key == 'TurntableData') {
            var {
              turntable,
              turntablePrizeEntities,
              count
            } = value.cur;
            this.count = count;

            if (this.count <= 0) {
              this.propertyNode.props_btn_turntable_arow.getComponent(Sprite).grayscale = true;
            }

            this.turntableData = value.cur;
            this.propertyNode.props_label_times.getComponent(Label).string = count + ' kali';
            turntablePrizeEntities.forEach((j, I) => {
              var node = instantiate(this.propertyNode.props_tum_gift);
              this.loadTurntableImg(j, node);
              node.setPosition(0, 0);
              this.propertyNode.props_spr_truntable.children.forEach((k, i) => {
                if (I === i) {
                  k.turntableId = j.id;
                  k.addChild(node);
                }
              });
            });
          }
        }

        bindUI() {}

        getRandomBetween(min, max) {
          return (Math.random() * (max - min) + min).toFixed(0);
        }

        loadTurntableImg(item, node) {
          item.picture && assetManager.loadRemote(item.picture, (err, asset) => {
            if (this.propertyNode && !err && item.picture === asset.nativeUrl) {
              node.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(asset);
              node.getChildByName('props_gift_name').getComponent(Label).string = item.prizeValue + '';
              node.active = true;
            }

            if (err) {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.HallModule.LoadFaild, {}, {
                  placeStr: "加载资源失败"
                }),
                type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                  error: Error()
                }), ToastType) : ToastType).ERROR
              }));
            }
          });
        }

        update(dt) {
          if (this.isSpinning) {
            if (this.slowingDown) {
              this.isSpinning = false;
              this.slowingDown = false;
              this.propertyNode.props_spr_truntable.angle = 720;
              this.winState = true;
              tween(this.propertyNode.props_spr_truntable).to(5, {
                angle: this.stopRaAge
              }, {
                easing: 'quartOut'
              }).call(() => {
                this.loadWin();
              }).start();
            } else {
              this.spinTime += dt;
              var t = this.spinTime / this.totalSpinTime;

              if (t >= 1) {
                // 时间到达，停止旋转
                this.spinTime = 0;
                this.isSpinning = false;
                this.propertyNode.props_spr_truntable.angle = 720;
                this.winState = true;
                tween(this.propertyNode.props_spr_truntable).to(5, {
                  angle: this.stopRaAge
                }, {
                  easing: 'quartOut'
                }).call(() => {
                  this.loadWin();
                }).start();
                return;
              }

              var speed = this.easeInOut(t);
              this.propertyNode.props_spr_truntable.angle -= speed * dt * this.maxAngle / this.totalSpinTime;
            }
          }
        }

        loadWin() {
          if (this.winData) {
            (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
              error: Error()
            }), hallAudio) : hallAudio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).WINLOTTERY);
            var win = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
              error: Error()
            }), BaseViewModel) : BaseViewModel)('TurntableWin').mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine).HELL_ACTIVITY_TURNTABLEWIN).source).appendTo(this.node, {
              effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT1,
              isModal: true
            }).setEvent({
              onClosePanel: () => {
                win.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                  error: Error()
                }), EffectType) : EffectType).EFFECT2);
              }
            }).setProps({
              TurntableData: this.winData
            });
            this.winState = false;
          }
        } // 自定义缓动函数，启动时更快


        easeInOut(t) {
          if (t < 0.5) {
            return 10 * t * t * t * t; // 初期更加迅速
          } else {
            return 1 - Math.pow(-2 * t + 2, 4) / 2; // 中期加速
          }
        } // 减速时使用的缓动函数


        easeOut(t) {
          return Math.sin(t * Math.PI / 2);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c483c761414c301482e3488748dab755f5932520.js.map