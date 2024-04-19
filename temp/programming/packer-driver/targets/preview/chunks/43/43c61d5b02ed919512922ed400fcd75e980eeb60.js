System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, sp, tween, UIOpacity, Vec3, BaseComponent, TaskScheduler, Task, footerViewModel, fruit777_Audio, gameBoardViewModel, sourceManageSeletor, getNodePositionInCanvas, dataTransfer, DataKeyType, GameType, JactpotType, SoundPathDefine, _dec, _class, _crd, ccclass, property, OpenStatus, Fruit777_AwardBox;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskScheduler(extras) {
    _reporterNs.report("TaskScheduler", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOffooterViewModel(extras) {
    _reporterNs.report("footerViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOffruit777_Audio(extras) {
    _reporterNs.report("fruit777_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameBoardViewModel(extras) {
    _reporterNs.report("gameBoardViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodePositionInCanvas(extras) {
    _reporterNs.report("getNodePositionInCanvas", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdataTransfer(extras) {
    _reporterNs.report("dataTransfer", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataKeyType(extras) {
    _reporterNs.report("DataKeyType", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJactpotType(extras) {
    _reporterNs.report("JactpotType", "../type", _context.meta, extras);
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
      Node = _cc.Node;
      sp = _cc.sp;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      TaskScheduler = _unresolved_3.default;
      Task = _unresolved_3.Task;
    }, function (_unresolved_4) {
      footerViewModel = _unresolved_4.footerViewModel;
      fruit777_Audio = _unresolved_4.fruit777_Audio;
      gameBoardViewModel = _unresolved_4.gameBoardViewModel;
      sourceManageSeletor = _unresolved_4.sourceManageSeletor;
    }, function (_unresolved_5) {
      getNodePositionInCanvas = _unresolved_5.getNodePositionInCanvas;
    }, function (_unresolved_6) {
      dataTransfer = _unresolved_6.default;
      DataKeyType = _unresolved_6.DataKeyType;
    }, function (_unresolved_7) {
      GameType = _unresolved_7.GameType;
      JactpotType = _unresolved_7.JactpotType;
    }, function (_unresolved_8) {
      SoundPathDefine = _unresolved_8.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "85d53xBWjBHI4m6c9SvAj2r", "Fruit777_AwardBox", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'sp', 'Sprite', 'tween', 'UIOpacity', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("OpenStatus", OpenStatus = /*#__PURE__*/function (OpenStatus) {
        OpenStatus[OpenStatus["CLOSE"] = 0] = "CLOSE";
        OpenStatus[OpenStatus["OPENING"] = 1] = "OPENING";
        OpenStatus[OpenStatus["OPEN"] = 2] = "OPEN";
        OpenStatus[OpenStatus["DONE"] = 3] = "DONE";
        return OpenStatus;
      }({}));

      _export("Fruit777_AwardBox", Fruit777_AwardBox = (_dec = ccclass('Fruit777_AwardBox'), _dec(_class = class Fruit777_AwardBox extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_btn_sg_box: new Node(),
            props_spr_result_item: new Node(),
            props_particle2D: new Node(),
            props_score: new Node()
          };
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
          this.props = {
            boxId: 0,
            dataId: -1,
            times: 0,
            levelUp: 0,
            fruitFileName: "",
            score: 0,
            BONUS: 0,
            distance: [0, 0],
            name: ''
          };
          this.events = {
            onOpenHandler: id => {},
            updateTimesHandler: (times, jactpotType) => {},
            checkFlyEndHandler: () => {},
            onFreeGameAmoundChange: amount => {}
          };
          this.jackPotTypeName = {
            "BxApple": (_crd && JactpotType === void 0 ? (_reportPossibleCrUseOfJactpotType({
              error: Error()
            }), JactpotType) : JactpotType).APPLE,
            "BxStrawberry": (_crd && JactpotType === void 0 ? (_reportPossibleCrUseOfJactpotType({
              error: Error()
            }), JactpotType) : JactpotType).STRAWBERRY,
            "BxGrape": (_crd && JactpotType === void 0 ? (_reportPossibleCrUseOfJactpotType({
              error: Error()
            }), JactpotType) : JactpotType).GRAPE,
            "BxWatermelon": (_crd && JactpotType === void 0 ? (_reportPossibleCrUseOfJactpotType({
              error: Error()
            }), JactpotType) : JactpotType).WATERMELON,
            "BxBanana": (_crd && JactpotType === void 0 ? (_reportPossibleCrUseOfJactpotType({
              error: Error()
            }), JactpotType) : JactpotType).BANANA,
            "up": (_crd && JactpotType === void 0 ? (_reportPossibleCrUseOfJactpotType({
              error: Error()
            }), JactpotType) : JactpotType).LEVEL
          };
        }

        start() {}

        initState() {
          return {
            openStatus: OpenStatus.CLOSE
          };
        }

        bindEvent() {
          this.node.on(Node.EventType.TOUCH_END, () => {
            // console.log('GAME_TYPE', dataTransfer(DataKeyType.GAME_TYPE))
            if ((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
              error: Error()
            }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
              error: Error()
            }), DataKeyType) : DataKeyType).GAME_TYPE) !== (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME1) {
              return;
            }

            if (this.state.openStatus === OpenStatus.CLOSE || this.state.openStatus === OpenStatus.OPENING) {
              this.openAwardBox();
            }
          });
        }

        useProps(key, value) {
          var thenTimes = 0;

          if (key !== "boxId") {
            try {
              thenTimes = (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).SUBGAME_TIMES);

              if (this.state.openStatus === OpenStatus.OPENING) {
                //执行贝壳动作
                // this.setState({ hasOpen: true })
                this.setState({
                  openStatus: OpenStatus.OPEN
                });
                this.taskScheduler && this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                  error: Error()
                }), Task) : Task)(done => {
                  this.propertyNode.props_btn_sg_box.getComponent(sp.Skeleton).animation = 'diankaibaoxiang';
                  this.scheduleOnce(() => {
                    this.propertyNode.props_btn_sg_box.active = false;
                  }, 2);
                  this.scheduleOnce(() => {
                    done();
                  }, 1);
                }));
                this.taskScheduler && this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                  error: Error()
                }), Task) : Task)(done => {
                  this.events.checkFlyEndHandler();
                  done();
                }));
              }
            } catch (e) {
              console.log(e);
            }
          }

          if (key === "fruitFileName") {
            this.scheduleOnce(() => {
              //加定时器是确保distance肯定有数据
              this.taskScheduler && this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                if (!this.propertyNode) {
                  done();
                  return;
                }

                this.propertyNode.props_spr_result_item.active = true;
                var skeleton = this.propertyNode.props_spr_result_item.getComponent(sp.Skeleton);
                skeleton.skeletonData = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFile(value.cur).source;
                skeleton.animation = "animation";
                var {
                  x,
                  y,
                  z
                } = this.propertyNode.props_spr_result_item.position;
                this.propertyNode.props_spr_result_item.setPosition(new Vec3(x + this.props.distance[0], y + this.props.distance[1], z));
                this.scheduleOnce(() => done(), 1);
              }));
            }, 0.1);
          }

          if (key === "score") {
            this.scheduleOnce(() => {
              var thenAmound = 0;
              var scoreTask = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                if (!this.propertyNode) {
                  done();
                  return;
                }

                this.propertyNode.props_score.getComponent(Label).string = value.cur.formatAmountWithCommas();
                this.propertyNode.props_score.active = true;
                var ui = this.propertyNode.props_score.getComponent(UIOpacity);
                this.propertyNode.props_score.setScale(1.3, 1.3);
                ui.opacity = 0;
                tween().target(ui).to(0.2, {
                  opacity: 255
                }).start();
                tween().target(this.propertyNode.props_score).to(0.7, {
                  scale: new Vec3(1, 1)
                }, {
                  easing: "backOut"
                }).call(() => done()).start();
              }); //飞粒子

              var particleTask = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                if (!this.propertyNode || !this.node) {
                  done();
                  return;
                }

                (_crd && fruit777_Audio === void 0 ? (_reportPossibleCrUseOffruit777_Audio({
                  error: Error()
                }), fruit777_Audio) : fruit777_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                  error: Error()
                }), SoundPathDefine) : SoundPathDefine).FRUIT_UP);
                thenAmound = (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                  error: Error()
                }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                  error: Error()
                }), DataKeyType) : DataKeyType).FREE_GAME_AMOUNT);

                var fly = targetNode => {
                  if (!targetNode) {
                    done();
                  } else {
                    var beginPosition = (_crd && getNodePositionInCanvas === void 0 ? (_reportPossibleCrUseOfgetNodePositionInCanvas({
                      error: Error()
                    }), getNodePositionInCanvas) : getNodePositionInCanvas)(this.node);
                    var targetPosition = (_crd && getNodePositionInCanvas === void 0 ? (_reportPossibleCrUseOfgetNodePositionInCanvas({
                      error: Error()
                    }), getNodePositionInCanvas) : getNodePositionInCanvas)(targetNode);
                    this.flying(this.propertyNode.props_particle2D, beginPosition, targetPosition, () => {
                      !particleTask.isExecute && done();
                    }, 0.6);
                  }
                };

                fly((_crd && footerViewModel === void 0 ? (_reportPossibleCrUseOffooterViewModel({
                  error: Error()
                }), footerViewModel) : footerViewModel).comp.getProfitBar());
                fly((_crd && gameBoardViewModel === void 0 ? (_reportPossibleCrUseOfgameBoardViewModel({
                  error: Error()
                }), gameBoardViewModel) : gameBoardViewModel).currentGameViewModel['jackpot'].comp.getHeaderNode().children[this.props.dataId - 1]);
              }).subscribeDone('1', () => {
                /**这里取的是开宝箱后当时的数据 */
                // if (dataTransfer(DataKeyType.GAME_TYPE) === GameType.SUBGAME1) {
                // 	//如果已经要换游戏了，就不更新次数了，不然更新的是下一个游戏的剩余次数
                // 	this.events.updateTimesHandler(thenTimes)
                // }
                if (!this.propertyNode) return;
                this.events.updateTimesHandler(thenTimes, this.jackPotTypeName[this.props.name]);
                this.events.onFreeGameAmoundChange(thenAmound);
              });
              this.taskScheduler && this.taskScheduler.joinqQueue(scoreTask).joinqQueue(particleTask);
            }, 1);
          }

          if (key === "levelUp") {
            this.scheduleOnce(() => {
              (_crd && fruit777_Audio === void 0 ? (_reportPossibleCrUseOffruit777_Audio({
                error: Error()
              }), fruit777_Audio) : fruit777_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).LEVEV_UP);
              this.taskScheduler && this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                if (!this.propertyNode || !this.node) {
                  done();
                  return;
                }

                var fly = targetNode => {
                  if (!targetNode) {
                    done();
                    return;
                  }

                  var beginPosition = (_crd && getNodePositionInCanvas === void 0 ? (_reportPossibleCrUseOfgetNodePositionInCanvas({
                    error: Error()
                  }), getNodePositionInCanvas) : getNodePositionInCanvas)(this.node);
                  var targetPosition = (_crd && getNodePositionInCanvas === void 0 ? (_reportPossibleCrUseOfgetNodePositionInCanvas({
                    error: Error()
                  }), getNodePositionInCanvas) : getNodePositionInCanvas)(targetNode);
                  this.flying(this.propertyNode.props_spr_result_item, beginPosition, targetPosition, done, 0.1);
                };

                fly((_crd && gameBoardViewModel === void 0 ? (_reportPossibleCrUseOfgameBoardViewModel({
                  error: Error()
                }), gameBoardViewModel) : gameBoardViewModel).currentGameViewModel['jackpot'].comp.getLevelBodyNode());
              }).subscribeDone('1', () => {
                this.events && this.events.updateTimesHandler(thenTimes, this.jackPotTypeName[this.props.name]);
                /**这里取的是开宝箱后当时的数据 */
                // this.events.updateTimesHandler(thenTimes)
              }));
            }, 2);
          }

          if (key === "times") {
            this.scheduleOnce(() => {
              (_crd && fruit777_Audio === void 0 ? (_reportPossibleCrUseOffruit777_Audio({
                error: Error()
              }), fruit777_Audio) : fruit777_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).GET_COIN); //确保资源被替换之后

              this.taskScheduler && this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                if (!this.propertyNode || !this.node) {
                  done();
                  return;
                }

                var fly = targetNode => {
                  if (!targetNode) {
                    done();
                    return;
                  }

                  var beginPosition = (_crd && getNodePositionInCanvas === void 0 ? (_reportPossibleCrUseOfgetNodePositionInCanvas({
                    error: Error()
                  }), getNodePositionInCanvas) : getNodePositionInCanvas)(this.node);
                  var targetPosition = (_crd && getNodePositionInCanvas === void 0 ? (_reportPossibleCrUseOfgetNodePositionInCanvas({
                    error: Error()
                  }), getNodePositionInCanvas) : getNodePositionInCanvas)(targetNode);
                  this.flying(this.propertyNode.props_spr_result_item, beginPosition, targetPosition, done, 0.1);
                };

                fly((_crd && gameBoardViewModel === void 0 ? (_reportPossibleCrUseOfgameBoardViewModel({
                  error: Error()
                }), gameBoardViewModel) : gameBoardViewModel).currentGameViewModel.comp.getTimesNode());
              }).subscribeDone('1', () => {
                /**这里取的是开宝箱后当时的数据 */
                this.events.updateTimesHandler(thenTimes);
              }));
            }, 2);
          }

          if (key === "BONUS") {
            this.scheduleOnce(() => {
              this.taskScheduler && this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                if (!this.propertyNode || !(_crd && gameBoardViewModel === void 0 ? (_reportPossibleCrUseOfgameBoardViewModel({
                  error: Error()
                }), gameBoardViewModel) : gameBoardViewModel).currentGameViewModel['jackpot'].comp.getHeaderNode()) {
                  done();
                  return;
                }

                var beginPosition = (_crd && getNodePositionInCanvas === void 0 ? (_reportPossibleCrUseOfgetNodePositionInCanvas({
                  error: Error()
                }), getNodePositionInCanvas) : getNodePositionInCanvas)((_crd && gameBoardViewModel === void 0 ? (_reportPossibleCrUseOfgameBoardViewModel({
                  error: Error()
                }), gameBoardViewModel) : gameBoardViewModel).currentGameViewModel['jackpot'].comp.getHeaderNode());
                var targetPosition = (_crd && getNodePositionInCanvas === void 0 ? (_reportPossibleCrUseOfgetNodePositionInCanvas({
                  error: Error()
                }), getNodePositionInCanvas) : getNodePositionInCanvas)((_crd && footerViewModel === void 0 ? (_reportPossibleCrUseOffooterViewModel({
                  error: Error()
                }), footerViewModel) : footerViewModel).comp.getProfitBar());
                this.flying(this.propertyNode.props_particle2D, beginPosition, targetPosition, done, 0.2);
              }));
            }, 2);
          }
        }

        flying(node, beginPosition, targetPosition, done, delayTime) {
          if (delayTime === void 0) {
            delayTime = 0;
          }

          var targetNode = instantiate(node);
          targetNode.active = true;
          (_crd && gameBoardViewModel === void 0 ? (_reportPossibleCrUseOfgameBoardViewModel({
            error: Error()
          }), gameBoardViewModel) : gameBoardViewModel).viewNode.addChild(targetNode);
          targetNode.setPosition(beginPosition);
          var middlePosition = new Vec3((beginPosition.x + targetPosition.x) / 2, (beginPosition.y + targetPosition.y) / 2 + 300, 0);
          tween().target(targetNode).to(0.7, {
            position: targetPosition,
            scale: new Vec3(0.5, 0.5, 1)
          }, {
            onUpdate: (target, t) => {
              if (targetNode) {
                targetNode.position = this.bezier(t, beginPosition, middlePosition, targetPosition);
              }
            }
          }).call(() => {
            if (delayTime === 0) {
              targetNode.destroy();
              done();
            } else {
              if (targetNode) {
                // 透明度暂不支持粒子
                targetNode.getComponent(UIOpacity) && targetNode.addComponent(UIOpacity);
                tween(targetNode.getComponent(UIOpacity)).to(delayTime, {
                  opacity: 0
                }).call(() => {
                  targetNode.destroy();
                }).start();
              }

              done();
            } // tween(targetNode).to(0.2, { scale: new Vec3(0.5, 0.5, 1) }).start()

          }).start();
        }

        bezier(t, startPos, middlePos, endPos) {
          var x = (1 - t) * (1 - t) * startPos.x + 2 * t * (1 - t) * middlePos.x + t * t * endPos.x;
          var y = (1 - t) * (1 - t) * startPos.y + 2 * t * (1 - t) * middlePos.y + t * t * endPos.y;
          return new Vec3(x, y, 0);
        }
        /**为什么要提出来，因为便于自定执行器调用 */


        openAwardBox() {
          this.setState({
            openStatus: OpenStatus.OPENING
          });
          this.events.onOpenHandler(this.props.boxId);
        }

        bindUI() {
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)(() => {
            this && this.setState && this.setState({
              openStatus: OpenStatus.DONE
            });
          });
          this.useState((key, value) => {//执行开箱子的动作
          }, ["openStatus"]);
        }

        getOpenStatus() {
          return this.state.openStatus;
        }

        destroyCallBack() {
          this.taskScheduler.stopQueue(false);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=43c61d5b02ed919512922ed400fcd75e980eeb60.js.map