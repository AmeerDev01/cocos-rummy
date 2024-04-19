System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, ViewModel, StoreInject, global, lang, config, sourceManageSeletor, SKT_MAG_TYPE, sktInstance, sktMsgListener, PrefabPathDefine, getStore, changeDeskStatus, changeOperationPlayer, clearRoomData, reconnectGameData, reconnectRecoverBet, updateGold, DeskStatus, convertCardValue, convertOpType, genPlayer, MainBoardViewModel, ModalBox, getRoomUpper, EffectType, GameRuleViewModel, _dec, _class, _crd, RoomChooseViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Qiuqiu_RoomChoose", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Qiuqiu_RoomChoose", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQiuqiu_RoomChoose(extras) {
    _reporterNs.report("Qiuqiu_RoomChoose", "../components/Qiuqiu_RoomChoose", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
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

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeDeskStatus(extras) {
    _reporterNs.report("changeDeskStatus", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeOperationPlayer(extras) {
    _reporterNs.report("changeOperationPlayer", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclearRoomData(extras) {
    _reporterNs.report("clearRoomData", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfreconnectGameData(extras) {
    _reporterNs.report("reconnectGameData", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfreconnectRecoverBet(extras) {
    _reporterNs.report("reconnectRecoverBet", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateGold(extras) {
    _reporterNs.report("updateGold", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeskStatus(extras) {
    _reporterNs.report("DeskStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnterGameVo(extras) {
    _reporterNs.report("EnterGameVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReconnectVo(extras) {
    _reporterNs.report("ReconnectVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomInfo(extras) {
    _reporterNs.report("RoomInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconvertCardValue(extras) {
    _reporterNs.report("convertCardValue", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconvertOpType(extras) {
    _reporterNs.report("convertOpType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgenPlayer(extras) {
    _reporterNs.report("genPlayer", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainBoardViewModel(extras) {
    _reporterNs.report("MainBoardViewModel", "./MainBoardViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModalBox(extras) {
    _reporterNs.report("ModalBox", "../../../common/ModalBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetRoomUpper(extras) {
    _reporterNs.report("getRoomUpper", "../qiuqiu_tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameRuleViewModel(extras) {
    _reporterNs.report("GameRuleViewModel", "./GameRuleViewModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
      StoreInject = _unresolved_2.StoreInject;
    }, function (_unresolved_3) {
      global = _unresolved_3.global;
      lang = _unresolved_3.lang;
    }, function (_unresolved_4) {
      config = _unresolved_4.default;
    }, function (_unresolved_5) {
      sourceManageSeletor = _unresolved_5.sourceManageSeletor;
    }, function (_unresolved_6) {
      SKT_MAG_TYPE = _unresolved_6.SKT_MAG_TYPE;
      sktInstance = _unresolved_6.sktInstance;
      sktMsgListener = _unresolved_6.sktMsgListener;
    }, function (_unresolved_7) {
      PrefabPathDefine = _unresolved_7.PrefabPathDefine;
    }, function (_unresolved_8) {
      getStore = _unresolved_8.getStore;
    }, function (_unresolved_9) {
      changeDeskStatus = _unresolved_9.changeDeskStatus;
      changeOperationPlayer = _unresolved_9.changeOperationPlayer;
      clearRoomData = _unresolved_9.clearRoomData;
      reconnectGameData = _unresolved_9.reconnectGameData;
      reconnectRecoverBet = _unresolved_9.reconnectRecoverBet;
      updateGold = _unresolved_9.updateGold;
    }, function (_unresolved_10) {
      DeskStatus = _unresolved_10.DeskStatus;
      convertCardValue = _unresolved_10.convertCardValue;
      convertOpType = _unresolved_10.convertOpType;
      genPlayer = _unresolved_10.genPlayer;
    }, function (_unresolved_11) {
      MainBoardViewModel = _unresolved_11.default;
    }, function (_unresolved_12) {
      ModalBox = _unresolved_12.default;
    }, function (_unresolved_13) {
      getRoomUpper = _unresolved_13.getRoomUpper;
    }, function (_unresolved_14) {
      EffectType = _unresolved_14.EffectType;
    }, function (_unresolved_15) {
      GameRuleViewModel = _unresolved_15.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2b143s5h+5FVpuhsGHRPIKK", "RoomChooseViewModel", undefined);

      __checkObsolete__(['sys']);

      RoomChooseViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class RoomChooseViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Qiuqiu_RoomChoose');
          this.mainBoardViewModel = void 0;
          this.memberId = void 0;
          this.roomInfo = void 0;
        }

        begin() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).AUTH, "room", data => {
            this.dispatch((_crd && clearRoomData === void 0 ? (_reportPossibleCrUseOfclearRoomData({
              error: Error()
            }), clearRoomData) : clearRoomData)(0));
            this.memberId = data.memberId;
            var gold = data ? data.gold : 0;
            this.setProps({
              roomMap: data.dominoRoomInfoVos
            });
            this.dispatch((_crd && updateGold === void 0 ? (_reportPossibleCrUseOfupdateGold({
              error: Error()
            }), updateGold) : updateGold)(gold));
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).JOIN_ROOM, "room", data => {
            this.enterGame(data);
          });

          if ((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).testConfig.wsUrl) {
            var token = sys.localStorage.getItem("tokentest");
            (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
              error: Error()
            }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
              error: Error()
            }), SKT_MAG_TYPE) : SKT_MAG_TYPE).AUTH, {
              token
            });
          } else {
            (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
              error: Error()
            }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
              error: Error()
            }), SKT_MAG_TYPE) : SKT_MAG_TYPE).AUTH, {
              token: sys.localStorage.getItem("token"),
              gameId: (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).gameId
            });
          }

          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).RECONNECT, "room", data => {
            this.reconnectHandle(data);
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GOLD_CHANGE, "room", data => {
            this.dispatch((_crd && updateGold === void 0 ? (_reportPossibleCrUseOfupdateGold({
              error: Error()
            }), updateGold) : updateGold)(data));
          });
          this.setEvent({
            beginHandler: () => {
              //快速加入
              this.fastEnterGame();
            },
            clickRoomHandler: roomInfo => {
              this.clickEnterGame(roomInfo);
            },
            openGameRule: () => {
              new (_crd && GameRuleViewModel === void 0 ? (_reportPossibleCrUseOfGameRuleViewModel({
                error: Error()
              }), GameRuleViewModel) : GameRuleViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                error: Error()
              }), PrefabPathDefine) : PrefabPathDefine).prefabs_quiqui_modal).source).appendTo(this.viewNode, {
                effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                  error: Error()
                }), EffectType) : EffectType).EFFECT1,
                isModal: true
              });
            }
          });
        }

        clickEnterGame(roomInfo) {
          var gold = this.comp.props.gold;

          if (roomInfo.lower <= gold && gold <= (_crd && getRoomUpper === void 0 ? (_reportPossibleCrUseOfgetRoomUpper({
            error: Error()
          }), getRoomUpper) : getRoomUpper)(roomInfo)) {
            this.joinGame(roomInfo);
          } else {
            roomInfo = this.getCanEnterRoom();

            if (!roomInfo) {
              var content = (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.palyingModule.RechangeGlod, {}, {
                placeStr: "对不起，您的金币不足，请充值!"
              });
              (_crd && ModalBox === void 0 ? (_reportPossibleCrUseOfModalBox({
                error: Error()
              }), ModalBox) : ModalBox).Instance().show({
                content: content,
                type: 'Prompt'
              }, () => {
                (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                  error: Error()
                }), global) : global).openShop();
                return true;
              });
            } else {
              var _content = (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.palyingModule.ExceedUpper1, {}, {
                placeStr: "对不起，您不符合进入条件，是否进入系统匹配房间!"
              });

              _content = _content.format(roomInfo.roomName);
              (_crd && ModalBox === void 0 ? (_reportPossibleCrUseOfModalBox({
                error: Error()
              }), ModalBox) : ModalBox).Instance().show({
                content: _content,
                type: 'Confirm'
              }, () => {
                this.joinGame(roomInfo);
                return true;
              }, () => {
                return true;
              });
            }
          }
        }

        getCanEnterRoom() {
          var gold = this.comp.props.gold;
          return this.comp.props.roomMap.find(v => v.lower <= gold && gold <= (_crd && getRoomUpper === void 0 ? (_reportPossibleCrUseOfgetRoomUpper({
            error: Error()
          }), getRoomUpper) : getRoomUpper)(v));
        }

        fastEnterGame() {
          var gold = this.comp.props.gold;
          var maxRoomInfo = this.comp.props.roomMap[this.comp.props.roomMap.length - 1];
          var roomInfo = this.getCanEnterRoom();

          if (!roomInfo) {
            // 如果余额超过了最大金额房间，直接进入到最后一个房间
            if (gold > maxRoomInfo.upper || maxRoomInfo.upper === -1) {
              roomInfo = maxRoomInfo;
            }
          }

          this.joinGame(roomInfo);
        }

        joinGame(roomInfo) {
          if (!roomInfo) {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop();
            return;
          }

          (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).afee = roomInfo.afee;
          this.roomInfo = roomInfo;
          (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).JOIN_ROOM, {
            memberId: this.memberId,
            gameId: (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameId,
            roomId: this.roomInfo.roomId
          });
        }

        enterGame(data) {
          // const myMemberId = config.isTest ? JSON.parse(localStorage.getItem("domino")).memberId : this.memberId;
          var myMemberId = this.memberId;
          var selfPlayer = data.list.find(item => item.memberId === myMemberId);
          selfPlayer.tableId = data.tableId;

          var onComplate = () => {
            data.list.forEach(item => {
              // const isSelf = item.memberId === JSON.parse(localStorage.getItem("domino")).memberId
              var isSelf = item.memberId === myMemberId;
              var player = (_crd && genPlayer === void 0 ? (_reportPossibleCrUseOfgenPlayer({
                error: Error()
              }), genPlayer) : genPlayer)(item);
              player.isSelf = isSelf;
              player.tableId = data.tableId;
              this.mainBoardViewModel.enterGame(player);
            });
          };

          if (!this.mainBoardViewModel || !this.mainBoardViewModel.comp || !this.mainBoardViewModel.comp.isValid) {
            this.mainBoardViewModel = new (_crd && MainBoardViewModel === void 0 ? (_reportPossibleCrUseOfMainBoardViewModel({
              error: Error()
            }), MainBoardViewModel) : MainBoardViewModel)(this.roomInfo, selfPlayer.tableId, onComplate, selfPlayer.cacheChairId, selfPlayer.memberId);
            this.mainBoardViewModel.mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine).MAIN_BOARD).source).appendTo(this.viewNode).connect();
          } else {
            onComplate();
          }
        }

        convertDeskStatus(state) {
          if (state === 1) {
            return (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).COUNTDOWNING;
          } else if (state === 2) {
            return (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).PLAYING;
          }
        }

        reconnectHandle(data) {
          (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).isReconnect = true;
          this.roomInfo = this.comp.props.roomMap.find(v => v.roomId === data.roomId);
          (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).afee = this.roomInfo.afee;
          var selfPlayer = data.qiuqiuMemBerInfoVo.find(item => item.memberId === this.memberId);
          selfPlayer.tableId = data.tableId;
          var deskStatus = this.convertDeskStatus(data.gameStage); // 发牌数量

          var dealCount = 0;

          if (data.gameStage === 3) {
            dealCount = 3;
            deskStatus = (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).PLAYING;
          } else if (data.gameStage === 4) {
            dealCount = 4;
            deskStatus = (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).PLAYING;
          }

          var onComplate = () => {
            data.qiuqiuMemBerInfoVo.forEach(v => {
              var isSelf = v.memberId === this.memberId;
              var player = (_crd && genPlayer === void 0 ? (_reportPossibleCrUseOfgenPlayer({
                error: Error()
              }), genPlayer) : genPlayer)(v);
              player.tableId = data.tableId;
              player.isSelf = isSelf;
              player.gameData.opType = (_crd && convertOpType === void 0 ? (_reportPossibleCrUseOfconvertOpType({
                error: Error()
              }), convertOpType) : convertOpType)(v.memberStatus, data.newBet);

              if (isSelf) {
                player.gameData.cards = v.pokers.map(v => (_crd && convertCardValue === void 0 ? (_reportPossibleCrUseOfconvertCardValue({
                  error: Error()
                }), convertCardValue) : convertCardValue)(v.smallNum, v.bigNum));
                player.gameData.callAmount = data.currentPlayerAction.completion;
              } else {
                player.gameData.dealCardCount = dealCount;
              }

              player.gameData.isReady && (player.gameData.isGame = true);
              this.mainBoardViewModel.enterGame(player);
              this.dispatch((_crd && reconnectRecoverBet === void 0 ? (_reportPossibleCrUseOfreconnectRecoverBet({
                error: Error()
              }), reconnectRecoverBet) : reconnectRecoverBet)(player.uid, player.gameData.betAmount));
            });
            this.dispatch((_crd && reconnectGameData === void 0 ? (_reportPossibleCrUseOfreconnectGameData({
              error: Error()
            }), reconnectGameData) : reconnectGameData)(data.newBet, data.pokerNum)); // 这里设置开始游戏倒计时需要在切换状态之前

            if (deskStatus === (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).COUNTDOWNING) {
              this.mainBoardViewModel.beginGameCountdownHandle(data.seconds);
            } // 1.切换游戏状态


            this.dispatch((_crd && changeDeskStatus === void 0 ? (_reportPossibleCrUseOfchangeDeskStatus({
              error: Error()
            }), changeDeskStatus) : changeDeskStatus)(deskStatus));

            if (deskStatus === (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).PLAYING) {
              this.dispatch((_crd && changeOperationPlayer === void 0 ? (_reportPossibleCrUseOfchangeOperationPlayer({
                error: Error()
              }), changeOperationPlayer) : changeOperationPlayer)(data.currentPlayerAction.memberId)); // 这里设置出牌倒计时需要在切换状态之后

              this.mainBoardViewModel.startCountdown(data.currentPlayerAction.leftTime);
            }

            window.setTimeout(() => (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).isReconnect = false, 200);
          };

          if (!this.mainBoardViewModel || !this.mainBoardViewModel.comp || !this.mainBoardViewModel.comp.isValid) {
            this.mainBoardViewModel = new (_crd && MainBoardViewModel === void 0 ? (_reportPossibleCrUseOfMainBoardViewModel({
              error: Error()
            }), MainBoardViewModel) : MainBoardViewModel)(this.roomInfo, selfPlayer.tableId, onComplate, selfPlayer.cacheChairId, selfPlayer.memberId);
            this.mainBoardViewModel.mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine).MAIN_BOARD).source).appendTo(this.viewNode).connect();
          } else {
            onComplate();
          }
        }

        unMountCallBack() {
          this.mainBoardViewModel = undefined;
        }

        connect() {
          this.inject({}, state => {
            return {
              gold: state.deskData.gold
            };
          });
          return this;
        }

      }) || _class);

      _export("default", RoomChooseViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7b742d193299115d2cd679a253c67cddd3cc244d.js.map