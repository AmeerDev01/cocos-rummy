System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, ViewModel, StoreInject, MainBoardViewModel, sourceManageSeletor, PrefabPathDefine, getStore, SKT_MAG_TYPE, sktInstance, sktMsgListener, config, DeskStatus, convertAzimuth, genCardItem, genPlayer, getRoomUpper, changeDeskStatus, changeOutCardPlayer, clearRoomData, showOutCard, updateGold, global, lang, ModalBox, _dec, _class, _crd, RoomChooseViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDomino_RoomChoose(extras) {
    _reporterNs.report("Domino_RoomChoose", "../components/Domino_RoomChoose", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Domino_RoomChoose", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Domino_RoomChoose", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainBoardViewModel(extras) {
    _reporterNs.report("MainBoardViewModel", "./MainBoardViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
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

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardRecordsVo(extras) {
    _reporterNs.report("CardRecordsVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCountdown(extras) {
    _reporterNs.report("Countdown", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeskStatus(extras) {
    _reporterNs.report("DeskStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMemberInfoVo(extras) {
    _reporterNs.report("MemberInfoVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReconnectVo(extras) {
    _reporterNs.report("ReconnectVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomInfo(extras) {
    _reporterNs.report("RoomInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconvertAzimuth(extras) {
    _reporterNs.report("convertAzimuth", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgenCardItem(extras) {
    _reporterNs.report("genCardItem", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgenPlayer(extras) {
    _reporterNs.report("genPlayer", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetRoomUpper(extras) {
    _reporterNs.report("getRoomUpper", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeDeskStatus(extras) {
    _reporterNs.report("changeDeskStatus", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeOutCardPlayer(extras) {
    _reporterNs.report("changeOutCardPlayer", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclearRoomData(extras) {
    _reporterNs.report("clearRoomData", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfshowOutCard(extras) {
    _reporterNs.report("showOutCard", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateGold(extras) {
    _reporterNs.report("updateGold", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModalBox(extras) {
    _reporterNs.report("ModalBox", "../../../common/ModalBox", _context.meta, extras);
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
      MainBoardViewModel = _unresolved_3.default;
    }, function (_unresolved_4) {
      sourceManageSeletor = _unresolved_4.sourceManageSeletor;
    }, function (_unresolved_5) {
      PrefabPathDefine = _unresolved_5.PrefabPathDefine;
    }, function (_unresolved_6) {
      getStore = _unresolved_6.getStore;
    }, function (_unresolved_7) {
      SKT_MAG_TYPE = _unresolved_7.SKT_MAG_TYPE;
      sktInstance = _unresolved_7.sktInstance;
      sktMsgListener = _unresolved_7.sktMsgListener;
    }, function (_unresolved_8) {
      config = _unresolved_8.default;
    }, function (_unresolved_9) {
      DeskStatus = _unresolved_9.DeskStatus;
      convertAzimuth = _unresolved_9.convertAzimuth;
      genCardItem = _unresolved_9.genCardItem;
      genPlayer = _unresolved_9.genPlayer;
      getRoomUpper = _unresolved_9.getRoomUpper;
    }, function (_unresolved_10) {
      changeDeskStatus = _unresolved_10.changeDeskStatus;
      changeOutCardPlayer = _unresolved_10.changeOutCardPlayer;
      clearRoomData = _unresolved_10.clearRoomData;
      showOutCard = _unresolved_10.showOutCard;
      updateGold = _unresolved_10.updateGold;
    }, function (_unresolved_11) {
      global = _unresolved_11.global;
      lang = _unresolved_11.lang;
    }, function (_unresolved_12) {
      ModalBox = _unresolved_12.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "44a4bsCO+5Lx7wo2yhzdVb/", "RoomChooseViewModel", undefined);

      __checkObsolete__(['Node', 'sys']);

      RoomChooseViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class RoomChooseViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Domino_RoomChoose');
          this.mainBoardViewModel = void 0;
          this.memberId = void 0;
          this.roomId = void 0;
          this.roomInfo = void 0;
        }

        begin() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).AUTH, "room", data => {
            // sys.localStorage.setItem("domino", JSON.stringify({ memberId: data.memberId }))
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
                placeStr: "对不起，您不符合进入条件，是否进入{0}!"
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
          var selfPlayer = data.find(item => item.memberId === myMemberId);

          var onComplate = () => {
            data.forEach(item => {
              // const isSelf = item.memberId === JSON.parse(localStorage.getItem("domino")).memberId
              var isSelf = item.memberId === myMemberId;
              var player = (_crd && genPlayer === void 0 ? (_reportPossibleCrUseOfgenPlayer({
                error: Error()
              }), genPlayer) : genPlayer)(item);
              player.isSelf = isSelf;
              this.mainBoardViewModel.enterGame(player);
            });
          };

          if (!this.mainBoardViewModel || !this.mainBoardViewModel.comp || !this.mainBoardViewModel.comp.isValid) {
            this.mainBoardViewModel = new (_crd && MainBoardViewModel === void 0 ? (_reportPossibleCrUseOfMainBoardViewModel({
              error: Error()
            }), MainBoardViewModel) : MainBoardViewModel)();
            this.mainBoardViewModel.roomId = this.roomId;
            this.mainBoardViewModel.roomInfo = this.roomInfo;
            this.mainBoardViewModel.memberId = this.memberId;
            this.mainBoardViewModel.myChairId = selfPlayer ? selfPlayer.chairId : 1;
            this.mainBoardViewModel.tableId = selfPlayer ? selfPlayer.tableId : '';
            this.mainBoardViewModel.onComplate = onComplate;
            this.mainBoardViewModel.mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine).MAIN_BOARD).source).appendTo(this.viewNode).connect();
          } else {
            onComplate();
          }
        }

        reconnectHandle(data) {
          this.roomId = data.roomId;
          this.roomInfo = this.comp.props.roomMap.find(v => v.roomId === this.roomId);
          var selfPlayer = data.dominoMemBerInfoVo.find(item => item.memberId === this.memberId);

          var onComplate = () => {
            var deskStatus = this.convertDeskStatus(data.gameType);
            data.dominoMemBerInfoVo.forEach(v => {
              var isSelf = v.memberId === this.memberId;
              var player = (_crd && genPlayer === void 0 ? (_reportPossibleCrUseOfgenPlayer({
                error: Error()
              }), genPlayer) : genPlayer)(v);

              if (data.membersCards && data.membersCards[player.uid]) {
                player.gameData.remainCardCount = data.membersCards[player.uid];
              }

              player.isSelf = isSelf;
              this.mainBoardViewModel.enterGame(player);
            });
            data.cardRecordsVos && data.cardRecordsVos.forEach(v => {
              this.reconnectGenCardItem(v);
            });
            var readyCountdown; // 这里设置开始游戏倒计时需要在切换状态之前

            if (deskStatus === (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).COUNTDOWNING) {
              this.mainBoardViewModel.comp.setBeginGameCountdownCount(data.seconds);
              readyCountdown = {
                time: data.seconds,
                seatIndex: -1,
                timestamp: Date.now()
              };
            } // 1.切换游戏状态


            this.dispatch((_crd && changeDeskStatus === void 0 ? (_reportPossibleCrUseOfchangeDeskStatus({
              error: Error()
            }), changeDeskStatus) : changeDeskStatus)(deskStatus, readyCountdown));

            if (deskStatus === (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).PLAYING) {
              // 2.构建自己手牌
              this.reconnectDeal(data); // 3.切换当前应该操作的用户

              this.dispatch((_crd && changeOutCardPlayer === void 0 ? (_reportPossibleCrUseOfchangeOutCardPlayer({
                error: Error()
              }), changeOutCardPlayer) : changeOutCardPlayer)(this.mainBoardViewModel.getPlayer(data.thisMemberId).seatIndex)); // 这里设置出牌倒计时需要在切换状态之后

              this.mainBoardViewModel.startCountdown(data.seconds);
            }
          };

          if (!this.mainBoardViewModel || !this.mainBoardViewModel.comp || !this.mainBoardViewModel.comp.isValid) {
            this.mainBoardViewModel = new (_crd && MainBoardViewModel === void 0 ? (_reportPossibleCrUseOfMainBoardViewModel({
              error: Error()
            }), MainBoardViewModel) : MainBoardViewModel)();
            this.mainBoardViewModel.roomId = this.roomId;
            this.mainBoardViewModel.roomInfo = this.roomInfo;
            this.mainBoardViewModel.memberId = this.memberId;
            this.mainBoardViewModel.myChairId = selfPlayer.chairId;
            this.mainBoardViewModel.tableId = selfPlayer.tableId;
            this.mainBoardViewModel.onComplate = onComplate;
            this.mainBoardViewModel.mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine).MAIN_BOARD).source).appendTo(this.viewNode).connect();
          } else {
            onComplate();
          }
        }

        convertDeskStatus(gameType) {
          if (gameType === 1) {
            return (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).COUNTDOWNING;
          } else if (gameType === 2) {
            return (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).PLAYING;
          }
        }

        reconnectGenCardItem(cardRecordsVo) {
          if (cardRecordsVo.card < 0 || cardRecordsVo.card === undefined) {
            return;
          }

          var cardItem = (_crd && genCardItem === void 0 ? (_reportPossibleCrUseOfgenCardItem({
            error: Error()
          }), genCardItem) : genCardItem)(cardRecordsVo.card);
          cardItem.azimuth = (_crd && convertAzimuth === void 0 ? (_reportPossibleCrUseOfconvertAzimuth({
            error: Error()
          }), convertAzimuth) : convertAzimuth)(cardRecordsVo.position);
          cardItem.seatIndex = this.mainBoardViewModel.getPlayer(cardRecordsVo.memberId).seatIndex;
          cardItem.isReconnect = true;
          this.dispatch((_crd && showOutCard === void 0 ? (_reportPossibleCrUseOfshowOutCard({
            error: Error()
          }), showOutCard) : showOutCard)(cardItem));
        }

        reconnectDeal(data) {
          this.mainBoardViewModel.seatMine.comp.reconnectDeal();
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
//# sourceMappingURL=422cc5a980ffe0dd9d97f72cf1aaf171f898d5e3.js.map