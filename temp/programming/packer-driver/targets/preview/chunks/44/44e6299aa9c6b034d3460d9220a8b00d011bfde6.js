System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, assetManager, instantiate, Label, Node, Sprite, SpriteFrame, sys, BaseComponent, initToggle, baseBoardView, global, sourceManageSeletor, subGameList, addToastAction, setLoadingAction, ToastType, lang, BuyType, TurntableViewModel, PrefabPathDefine, SKT_MAG_TYPE, sktInstance, sktMsgListener, _dec, _class, _crd, ccclass, property, ActivityType, Hall_ActivityPanel;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitToggle(extras) {
    _reporterNs.report("initToggle", "../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbaseBoardView(extras) {
    _reporterNs.report("baseBoardView", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallGameGateType(extras) {
    _reporterNs.report("HallGameGateType", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsubGameList(extras) {
    _reporterNs.report("subGameList", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetLoadingAction(extras) {
    _reporterNs.report("setLoadingAction", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToastType(extras) {
    _reporterNs.report("ToastType", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuyType(extras) {
    _reporterNs.report("BuyType", "./Hall_ShopPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTurntableViewModel(extras) {
    _reporterNs.report("TurntableViewModel", "./Hall_Turntable/TurntableViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKT_MAG_TYPE(extras) {
    _reporterNs.report("SKT_MAG_TYPE", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktInstance(extras) {
    _reporterNs.report("sktInstance", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktMsgListener(extras) {
    _reporterNs.report("sktMsgListener", "../socketConnect", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      initToggle = _unresolved_3.initToggle;
    }, function (_unresolved_4) {
      baseBoardView = _unresolved_4.baseBoardView;
      global = _unresolved_4.global;
      sourceManageSeletor = _unresolved_4.sourceManageSeletor;
    }, function (_unresolved_5) {
      subGameList = _unresolved_5.subGameList;
    }, function (_unresolved_6) {
      addToastAction = _unresolved_6.addToastAction;
      setLoadingAction = _unresolved_6.setLoadingAction;
      ToastType = _unresolved_6.ToastType;
    }, function (_unresolved_7) {
      lang = _unresolved_7.lang;
    }, function (_unresolved_8) {
      BuyType = _unresolved_8.BuyType;
    }, function (_unresolved_9) {
      TurntableViewModel = _unresolved_9.default;
    }, function (_unresolved_10) {
      PrefabPathDefine = _unresolved_10.PrefabPathDefine;
    }, function (_unresolved_11) {
      SKT_MAG_TYPE = _unresolved_11.SKT_MAG_TYPE;
      sktInstance = _unresolved_11.sktInstance;
      sktMsgListener = _unresolved_11.sktMsgListener;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2ddc89n0eBCoJELbBprGNgx", "Hall_ActivityPanel", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'Component', 'ImageAsset', 'instantiate', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      /**活动类型 */
      _export("ActivityType", ActivityType = /*#__PURE__*/function (ActivityType) {
        ActivityType[ActivityType["TURNPLATE"] = 998] = "TURNPLATE";
        return ActivityType;
      }({}));

      _export("Hall_ActivityPanel", Hall_ActivityPanel = (_dec = ccclass('Hall_ActivityPanel'), _dec(_class = class Hall_ActivityPanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.turntableViewModel = void 0;
          this.propertyNode = {
            props_btn_tips_close: new Node(),
            props_ToggleGroup: new Node(),

            /**主图 */
            props_img_content: new Node(),
            props_loading_img: new Node(),
            props_content: new Node(),
            props_Label_content: new Label(),
            props_empty: new Label(),
            props_empty_content: new Label(),
            props_Toggle_template: new Node()
          };
          this.props = {
            activityList: []
          };
          this.events = {
            onClosePanel: () => {},
            setReadStatus: value => {},
            deleteReadStatus: value => {},
            getItemUnreadStatus: value => {
              return false;
            }
          };
        }

        start() {}

        initState() {
          return {
            chooseActivityIndex: -1
          };
        }

        bindEvent() {
          this.propertyNode.props_btn_tips_close.on(Node.EventType.TOUCH_END, () => {
            this.events.onClosePanel();
          });
          var lastQeqPicUrl = "";
          this.useState((key, value) => {
            var item = this.props.activityList[value.cur];

            if (item.gameId === ActivityType.TURNPLATE) {
              // 转盘逻辑
              this.propertyNode.props_img_content.active = false;

              if (this.turntableViewModel) {
                this.turntableViewModel.comp.node.active = true;
              } else {
                (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
                  error: Error()
                }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                  error: Error()
                }), SKT_MAG_TYPE) : SKT_MAG_TYPE).TURNTABLEDATA, "main", data => {
                  if (data[0]) {
                    if (this.node) {
                      if (!this.turntableViewModel) {
                        this.turntableViewModel = new (_crd && TurntableViewModel === void 0 ? (_reportPossibleCrUseOfTurntableViewModel({
                          error: Error()
                        }), TurntableViewModel) : TurntableViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                          error: Error()
                        }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                          error: Error()
                        }), PrefabPathDefine) : PrefabPathDefine).HELL_ACTIVITY_TURNTABLEPANL).source).appendTo(this.node).setEvent({
                          setReadStatus: value => {
                            this.events.setReadStatus(item.id);
                            this.setToggleItemReadStatus(item);
                          }
                        });
                      }

                      this.turntableViewModel.setProps({
                        TurntableData: data[0]
                      });
                    }

                    if (data[0].count > 0) {
                      this.setToggleItemReadStatus(item, false);
                    }
                  } else {
                    this.setToggleItemReadStatus(item);
                    (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                      error: Error()
                    }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                      error: Error()
                    }), addToastAction) : addToastAction)({
                      content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                        error: Error()
                      }), lang) : lang).write(k => k.HallModule.TurntableCue, {}, {
                        placeStr: "对不起,该活动已结束!"
                      }),
                      type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                        error: Error()
                      }), ToastType) : ToastType).ERROR
                    }));
                  }
                });
                (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
                  error: Error()
                }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                  error: Error()
                }), SKT_MAG_TYPE) : SKT_MAG_TYPE).TURNTABLEDATA);
              }
            } else {
              this.turntableViewModel && (this.turntableViewModel.comp.node.active = false);
              this.propertyNode.props_loading_img.active = true;

              if (item.content) {
                this.propertyNode.props_content.active = true;
                this.propertyNode.props_Label_content.string = item.content;
              } else {
                this.propertyNode.props_content.active = false;
              }

              this.propertyNode.props_img_content.active = false;
              lastQeqPicUrl = item.pictureUrl;
              item.pictureUrl && assetManager.loadRemote(item.pictureUrl, (err, asset) => {
                this.propertyNode && (this.propertyNode.props_loading_img.active = false);

                if (this.propertyNode && !err && lastQeqPicUrl === asset.nativeUrl) {
                  this.propertyNode.props_img_content.active = true;
                  this.propertyNode.props_img_content.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(asset);
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
              this.setToggleItemReadStatus(item);
            }
          }, ["chooseActivityIndex"]); //点击图片跳转

          this.propertyNode.props_img_content.on(Node.EventType.TOUCH_END, () => {
            if (!this.props.activityList.length) return;
            var detailUrl = this.props.activityList[this.state.chooseActivityIndex].detailUrl;
            var gameId = this.props.activityList[this.state.chooseActivityIndex].gameId;
            detailUrl && sys.openURL(detailUrl); // detailUrl && ModalBox.Instance().show({ url: detailUrl })

            if (!(_crd && baseBoardView === void 0 ? (_reportPossibleCrUseOfbaseBoardView({
              error: Error()
            }), baseBoardView) : baseBoardView).mainPanelViewModel.comp.gateViewModelList) {
              //可能在登录页打开活动页触发
              return;
            }

            if (gameId !== null && gameId !== -1) {
              if (gameId === 0) {
                //打开商城
                (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                  error: Error()
                }), global) : global).openShop();
              } else if (gameId === 990) {
                //商城礼包
                (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                  error: Error()
                }), global) : global).openShop((_crd && BuyType === void 0 ? (_reportPossibleCrUseOfBuyType({
                  error: Error()
                }), BuyType) : BuyType).TAS);
              } else if (gameId === 991) {
                //首冲礼包
                (_crd && baseBoardView === void 0 ? (_reportPossibleCrUseOfbaseBoardView({
                  error: Error()
                }), baseBoardView) : baseBoardView).mainPanelViewModel.openGiftBoxanel(false);
              } else if (gameId === 992) {
                //绑定手机
                (_crd && baseBoardView === void 0 ? (_reportPossibleCrUseOfbaseBoardView({
                  error: Error()
                }), baseBoardView) : baseBoardView).mainPanelViewModel.openUpgradePanel();
              } else if (gameId === 993) {
                // 每日签到
                (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                  error: Error()
                }), global) : global).openSign();
              } else if (gameId === 994) {
                // vip主界面
                (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                  error: Error()
                }), global) : global).openVipMain();
              } else if (gameId === 995) {
                // 个人中心
                (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                  error: Error()
                }), global) : global).openPersonCenter(1);
              } else if (gameId === 996) {
                // 分佣
                (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                  error: Error()
                }), global) : global).openPersonCenter(4);
              } else if (gameId === 997) {
                // 返佣
                (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                  error: Error()
                }), global) : global).openPersonCenter(6);
              } else if (gameId === ActivityType.TURNPLATE) {// 返佣
              } else {
                var hallGameGate = (_crd && subGameList === void 0 ? (_reportPossibleCrUseOfsubGameList({
                  error: Error()
                }), subGameList) : subGameList).find(i => i.gameId === this.props.activityList[this.state.chooseActivityIndex].gameId);

                if (hallGameGate) {
                  var gateViewModel = (_crd && baseBoardView === void 0 ? (_reportPossibleCrUseOfbaseBoardView({
                    error: Error()
                  }), baseBoardView) : baseBoardView).mainPanelViewModel.comp.gateViewModelList.find(vm => vm.comp.props.gamesIds.indexOf(hallGameGate.gameId) !== -1);
                  (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                    error: Error()
                  }), global) : global).hallDispatch((_crd && setLoadingAction === void 0 ? (_reportPossibleCrUseOfsetLoadingAction({
                    error: Error()
                  }), setLoadingAction) : setLoadingAction)({
                    isShow: true
                  }));
                  gateViewModel.comp.openGateGame(hallGameGate.gameId);
                } else {
                  (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                    error: Error()
                  }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                    error: Error()
                  }), addToastAction) : addToastAction)({
                    content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                      error: Error()
                    }), lang) : lang).write(k => k.HallModule.HallGameLoading, {
                      id: this.props.activityList[this.state.chooseActivityIndex].gameId
                    }, {
                      placeStr: "无效的gameId:${this.props.activityList[this.state.chooseActivityIndex}"
                    }),
                    type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                      error: Error()
                    }), ToastType) : ToastType).ERROR
                  }));
                }
              }
            } // this.props.activityList[this.state.chooseActivityIndex].detailUrl && sys.openURL(this.props.activityList[this.state.chooseActivityIndex].detailUrl)
            // if (this.props.activityList[this.state.chooseActivityIndex].gameId !== -1) {
            // 	if (this.state.chooseActivityIndex !== -1 && this.props.activityList[this.state.chooseActivityIndex].gameId !== 0) {
            // 		const hallGameGate: HallGameGateType = subGameList.find(i => i.gameId === this.props.activityList[this.state.chooseActivityIndex].gameId)
            // 		if (hallGameGate) {
            // 			if (!baseBoardView.mainPanelViewModel.comp.gateViewModelList) {
            // 				//可能在登录页打开活动页触发
            // 				return
            // 			}
            // 			const gateViewModel = baseBoardView.mainPanelViewModel.comp.gateViewModelList.find(vm => vm.comp.props.gamesIds.indexOf(hallGameGate.gameId) !== -1)
            // 			global.hallDispatch(setLoadingAction(true))
            // 			gateViewModel.comp.openGateGame(hallGameGate.gameId)
            // 		} else {
            // 			global.hallDispatch(addToastAction({ content: lang.write(k => k.HallModule.HallGameLoading, { id: this.props.activityList[this.state.chooseActivityIndex].gameId }, { placeStr: "无效的gameId:${this.props.activityList[this.state.chooseActivityIndex}" }) }))
            // 		}
            // 	} else if (this.props.activityList[this.state.chooseActivityIndex].gameId === 0 && sys.localStorage.getItem('token')) {
            // 		// 打开商城
            // 		global.openShop()
            // 	}
            // }

          });
          (_crd && initToggle === void 0 ? (_reportPossibleCrUseOfinitToggle({
            error: Error()
          }), initToggle) : initToggle)(this.propertyNode.props_ToggleGroup, this.node, new Hall_ActivityPanel.EventHandler(), "Hall_ActivityPanel", "toggleCallback");
        }

        useProps(key, value) {
          var template = instantiate(this.propertyNode.props_Toggle_template); // this.propertyNode.props_ToggleGroup.removeAllChildren()

          if (key === "activityList") {
            this.props.activityList.length && (this.propertyNode.props_empty.node.active = false);
            this.propertyNode.props_ToggleGroup.removeAllChildren();
            this.props.activityList.forEach(item => {
              var itemNode = instantiate(template);
              itemNode.name = "act_" + item.id;
              itemNode.getChildByName("Label_off").getComponent(Label).string = item.name;
              itemNode.getChildByName("Checkmark").getChildByName("Label_in").getComponent(Label).string = item.name;
              itemNode.getChildByName("unread").active = this.events.getItemUnreadStatus(item.id);
              this.propertyNode.props_ToggleGroup.addChild(itemNode);
              itemNode.active = true;
            });

            if (this.props.activityList.length) {
              this.setState({
                chooseActivityIndex: 0
              });
              this.propertyNode.props_empty_content.node.active = false; // this.propertyNode.props_content.active = true
            }
          }
        }

        toggleCallback(event, customEventData) {
          var chooseIndex = event.target['parent'].children.indexOf(event.target);
          this.setState({
            chooseActivityIndex: chooseIndex
          });
        }

        setToggleItemReadStatus(item, isRead) {
          if (isRead === void 0) {
            isRead = true;
          }

          if (isRead) {
            this.events.setReadStatus(item.id + '');
          } else {
            this.events.deleteReadStatus(item.id + '');
          }

          var itemNode = this.propertyNode.props_ToggleGroup.children.find(v => v.name === "act_" + item.id);
          itemNode && (itemNode.getChildByName("unread").active = !isRead);
        }

        bindUI() {}

        onDestroy() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).remove((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).TURNTABLEDATA, "main");
          this.turntableViewModel = undefined;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=44e6299aa9c6b034d3460d9220a8b00d011bfde6.js.map