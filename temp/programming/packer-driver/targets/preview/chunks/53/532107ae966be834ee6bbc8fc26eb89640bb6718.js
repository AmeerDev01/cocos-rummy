System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "cc/env", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, ProgressBar, sp, Sprite, SpriteFrame, sys, BaseComponent, subGameList, SubGameRunState, baseBoardView, global, hallAudio, sourceManageSeletor, BundleSplit, addToastAction, SoundPathDefine, lang, DEV, getPackageName, _dec, _class, _crd, ccclass, property, Hall_SubGameGate;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallGameGateType(extras) {
    _reporterNs.report("HallGameGateType", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsubGameList(extras) {
    _reporterNs.report("subGameList", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubGameRunState(extras) {
    _reporterNs.report("SubGameRunState", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbaseBoardView(extras) {
    _reporterNs.report("baseBoardView", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhallAudio(extras) {
    _reporterNs.report("hallAudio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBundleSplit(extras) {
    _reporterNs.report("BundleSplit", "../../utils/BundleSplit", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetPackageName(extras) {
    _reporterNs.report("getPackageName", "../../common/bridge", _context.meta, extras);
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
      ProgressBar = _cc.ProgressBar;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      subGameList = _unresolved_3.subGameList;
      SubGameRunState = _unresolved_3.SubGameRunState;
    }, function (_unresolved_4) {
      baseBoardView = _unresolved_4.baseBoardView;
      global = _unresolved_4.global;
      hallAudio = _unresolved_4.hallAudio;
      sourceManageSeletor = _unresolved_4.sourceManageSeletor;
    }, function (_unresolved_5) {
      BundleSplit = _unresolved_5.default;
    }, function (_unresolved_6) {
      addToastAction = _unresolved_6.addToastAction;
    }, function (_unresolved_7) {
      SoundPathDefine = _unresolved_7.SoundPathDefine;
    }, function (_unresolved_8) {
      lang = _unresolved_8.lang;
    }, function (_ccEnv) {
      DEV = _ccEnv.DEV;
    }, function (_unresolved_9) {
      getPackageName = _unresolved_9.getPackageName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f7a55CBKHZOeKe6hfw0UeHh", "Hall_SubGameGate", undefined);

      __checkObsolete__(['_decorator', 'assert', 'Button', 'Component', 'instantiate', 'Label', 'Layout', 'Node', 'Prefab', 'ProgressBar', 'sp', 'Sprite', 'SpriteFrame', 'sys', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_SubGameGate", Hall_SubGameGate = (_dec = ccclass('Hall_SubGameGate'), _dec(_class = class Hall_SubGameGate extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.gameGateItemNodeList = [];

          /**进度条的初始值（用于支持多阶段加载的情况） */
          this.loadingStart = 0.02;
          this.propertyNode = {
            props_gameItem_template: new Node()
          };
          this.props = {
            useVip: 0,
            gamesIds: [],
            activeSubGameInfo: null
          };
          this.events = {
            onTouchInto: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {
          var _this = this;

          if (key === "gamesIds") {
            // 实例化界面
            this.props.gamesIds.forEach( /*#__PURE__*/_asyncToGenerator(function* (gameId) {
              if (gameId) {
                var hallGameGate = (_crd && subGameList === void 0 ? (_reportPossibleCrUseOfsubGameList({
                  error: Error()
                }), subGameList) : subGameList).find(i => i.gameId === gameId);

                if (!hallGameGate) {
                  return;
                } // 根据


                var gameGateItemNode = instantiate(_this.propertyNode.props_gameItem_template);

                _this.node.addChild(gameGateItemNode);

                gameGateItemNode.active = true;
                gameGateItemNode.on(Node.EventType.TOUCH_END, () => {
                  _this.openGateGame(gameId);
                });
                hallGameGate.hotMark && (gameGateItemNode.getChildByName("hot_jiaobiao").active = true);
                gameGateItemNode.getChildByName("gameSkeleton").active = true;
                gameGateItemNode.getChildByName("spr_word").active = true;
                gameGateItemNode.getChildByName("download_icon").active = !_this.downLoadState(gameId);
                gameGateItemNode.getChildByName("gameSkeleton").getComponent(sp.Skeleton).skeletonData = (yield (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync(_this.props.gamesIds.length === 1 ? hallGameGate.fileNameLarge : hallGameGate.fileNameSmall, sp.SkeletonData)).source;
                gameGateItemNode.getChildByName("gameSkeleton").getComponent(sp.Skeleton).animation = "animation";
                gameGateItemNode.getChildByName("spr_word").getComponent(Sprite).spriteFrame = (yield (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync(hallGameGate.nameSprite[_this.props.gamesIds.length - 1], SpriteFrame)).source;

                _this.gameGateItemNodeList.push({
                  key: gameId,
                  node: gameGateItemNode
                });

                if (hallGameGate.vipMark > _this.props.useVip) {
                  gameGateItemNode.getChildByName("vipWrap").active = true;
                  var node = gameGateItemNode.getChildByName("vipWrap").getChildByName("vip_jiaobiao").getChildByName("label_vipLevel");
                  node && (node.getComponent(Label).string = "VIP" + hallGameGate.vipMark);
                  gameGateItemNode.getChildByName("download_icon").active = false;
                }
              } else {
                //做个占位
                var _gameGateItemNode = instantiate(_this.propertyNode.props_gameItem_template);

                _gameGateItemNode.active = true;

                _this.node.addChild(_gameGateItemNode);
              }
            }));
          }

          if (key === "activeSubGameInfo") {
            // console.log('activeSubGameInfo', this.props.activeSubGameInfo.runState)
            var isChoose = false;
            this.props.gamesIds.forEach(gameId => {
              if (gameId && !isChoose) {
                //this.progressBar必须有值，才正确选中了对象，因为gameId是有重复的
                var target = this.gameGateItemNodeList.find(item => item.key === gameId);

                if (target) {
                  var progressBarWrap = target.node.getChildByName("loadWrap");

                  if (this.props.activeSubGameInfo && this.props.activeSubGameInfo.gameId === gameId && progressBarWrap) {
                    isChoose = true;
                    this.setLoadingState(gameId, 0, false);

                    if (this.props.activeSubGameInfo.runState === (_crd && SubGameRunState === void 0 ? (_reportPossibleCrUseOfSubGameRunState({
                      error: Error()
                    }), SubGameRunState) : SubGameRunState).RUN) {
                      this.downLoadState(gameId, true);
                      target.node.getChildByName("download_icon").active = false;
                    }
                  }
                }
              }
            });
          }
        }

        openGateGame(gameId) {
          var isH5 = !DEV && (_crd && getPackageName === void 0 ? (_reportPossibleCrUseOfgetPackageName({
            error: Error()
          }), getPackageName) : getPackageName)() === 'web' && window['installBundle'];

          if (window['onLoadingBundleName']) {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
              error: Error()
            }), addToastAction) : addToastAction)({
              content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.PersonCenterModule.PersonCenterSumbit, {}, {
                placeStr: "请稍后"
              })
            }));
            return;
          }

          window['onLoadingBundleName'] = gameId;
          var hallGameGate = (_crd && subGameList === void 0 ? (_reportPossibleCrUseOfsubGameList({
            error: Error()
          }), subGameList) : subGameList).find(i => i.gameId === gameId);
          (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
            error: Error()
          }), hallAudio) : hallAudio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).GAME_CLICK);

          if (hallGameGate.runState === (_crd && SubGameRunState === void 0 ? (_reportPossibleCrUseOfSubGameRunState({
            error: Error()
          }), SubGameRunState) : SubGameRunState).CLOSE) {
            hallGameGate.runState = (_crd && SubGameRunState === void 0 ? (_reportPossibleCrUseOfSubGameRunState({
              error: Error()
            }), SubGameRunState) : SubGameRunState).INIT;
          } else {
            return;
          }

          this.setLoadingState(gameId, 0);

          var loadGame = () => {
            (_crd && BundleSplit === void 0 ? (_reportPossibleCrUseOfBundleSplit({
              error: Error()
            }), BundleSplit) : BundleSplit).getRemoteBundle(hallGameGate, (curr, total) => {// this.setLoadingState(gameId, 0.2 * curr / total)
            }).then(bundle => {
              window['onLoadingBundleName'] = undefined;
              this.setLoadingState(gameId, this.loadingStart, true, isH5 ? 0.5 : 1);
              (_crd && baseBoardView === void 0 ? (_reportPossibleCrUseOfbaseBoardView({
                error: Error()
              }), baseBoardView) : baseBoardView).comp.beginInitSubGame(hallGameGate);
            }).catch(e => {
              window['onLoadingBundleName'] = undefined;
              this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: e
              }));
              (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
                error: Error()
              }), hallAudio) : hallAudio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).ERROR);
              this.setLoadingState(gameId, 0, false, isH5 ? 0.5 : 1);
            });
          };

          if (isH5) {
            window['installBundle'](hallGameGate.bundleName);

            window['onBundleInstallProgress'] = (bundleName, progress) => {
              if (progress === 1) {
                loadGame();
                this.setLoadingState(gameId, 1, true, 0.5);
                this.loadingStart = 0.5;
              } else {
                this.setLoadingState(gameId, progress, true, 0.5);
              }
            };
          } else {
            loadGame();
          }
        }
        /**
         * 设置加载的进度状态，也可同时控制进度框的显示隐藏
         * @param gameId 子游戏id
         * @param progress 进度
         * @param isShow 是否显示进度框
         * @param progressRatio 传入进度值的打折量
         * @returns 
         */


        setLoadingState(gameId, progress, isShow, progressRatio) {
          if (isShow === void 0) {
            isShow = true;
          }

          if (progressRatio === void 0) {
            progressRatio = 1;
          }

          // console.log(gameId, progress)
          var gameGateItemNode = this.gameGateItemNodeList.find(item => item.key === gameId).node;
          var progressBarWrap = gameGateItemNode.getChildByName("loadWrap");
          var progressBar = progressBarWrap.getChildByName("DownloadPb").getChildByName("progressBar").getComponent(ProgressBar);
          progressBarWrap.active = isShow;
          progressBar.progress = this.loadingStart + progress * progressRatio;
          !isShow && ((_crd && subGameList === void 0 ? (_reportPossibleCrUseOfsubGameList({
            error: Error()
          }), subGameList) : subGameList).find(i => i.gameId === gameId).runState = (_crd && SubGameRunState === void 0 ? (_reportPossibleCrUseOfSubGameRunState({
            error: Error()
          }), SubGameRunState) : SubGameRunState).CLOSE);
          return progressBarWrap;
        }
        /**
         * 获取是否已经下载
         * @param gameId 子游戏ID
         * @param set 获取到没有下载结果时是否要重设
         * @returns 
         */


        downLoadState(gameId, set) {
          if (set === void 0) {
            set = false;
          }

          !sys.localStorage.getItem('download') && sys.localStorage.setItem('download', '[]');
          var loadList = JSON.parse(sys.localStorage.getItem('download'));
          var hallGameGate = (_crd && subGameList === void 0 ? (_reportPossibleCrUseOfsubGameList({
            error: Error()
          }), subGameList) : subGameList).find(i => i.gameId === gameId);
          var result = loadList.some(item => item.gameId === gameId && item.md5 === hallGameGate.md5);

          if (!result && set) {
            var target = loadList.find(item => item.gameId === gameId);
            target ? target.md5 = hallGameGate.md5 : loadList.push({
              gameId,
              md5: hallGameGate.md5
            });
            sys.localStorage.setItem('download', JSON.stringify(loadList));
          }

          return result;
        }

        bindUI() {
          this.propertyNode.props_gameItem_template.active = false;
          this.useState((key, value) => {
            if (value.pre === true) {}
          }, ["isdownLoaded"]);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=532107ae966be834ee6bbc8fc26eb89640bb6718.js.map