System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, BaseComponent, convertPoker, genCardItem, OperationType, SKT_MAG_TYPE, sktMsgListener, addGoldAnime, playerBet, playerChangeOpType, saveBalanceInfo, roomChooseViewModel, config, _dec, _class, _crd, ccclass, property, Qiuqiu_Test;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconvertPoker(extras) {
    _reporterNs.report("convertPoker", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnterGameVo(extras) {
    _reporterNs.report("EnterGameVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgenCardItem(extras) {
    _reporterNs.report("genCardItem", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMemberInfoVo(extras) {
    _reporterNs.report("MemberInfoVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOperationType(extras) {
    _reporterNs.report("OperationType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPushDealerVo(extras) {
    _reporterNs.report("PushDealerVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQiuQiuCardVo(extras) {
    _reporterNs.report("QiuQiuCardVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomInfo(extras) {
    _reporterNs.report("RoomInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKT_MAG_TYPE(extras) {
    _reporterNs.report("SKT_MAG_TYPE", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktMsgListener(extras) {
    _reporterNs.report("sktMsgListener", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddGoldAnime(extras) {
    _reporterNs.report("addGoldAnime", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerBet(extras) {
    _reporterNs.report("playerBet", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerChangeOpType(extras) {
    _reporterNs.report("playerChangeOpType", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsaveBalanceInfo(extras) {
    _reporterNs.report("saveBalanceInfo", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfroomChooseViewModel(extras) {
    _reporterNs.report("roomChooseViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      convertPoker = _unresolved_3.convertPoker;
      genCardItem = _unresolved_3.genCardItem;
      OperationType = _unresolved_3.OperationType;
    }, function (_unresolved_4) {
      SKT_MAG_TYPE = _unresolved_4.SKT_MAG_TYPE;
      sktMsgListener = _unresolved_4.sktMsgListener;
    }, function (_unresolved_5) {
      addGoldAnime = _unresolved_5.addGoldAnime;
      playerBet = _unresolved_5.playerBet;
      playerChangeOpType = _unresolved_5.playerChangeOpType;
      saveBalanceInfo = _unresolved_5.saveBalanceInfo;
    }, function (_unresolved_6) {
      roomChooseViewModel = _unresolved_6.roomChooseViewModel;
    }, function (_unresolved_7) {
      config = _unresolved_7.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6d970wrkntClJ6SVqLA7dde", "Qiuqiu_Test", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Qiuqiu_Test", Qiuqiu_Test = (_dec = ccclass('Qiuqiu_Test'), _dec(_class = class Qiuqiu_Test extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.rooms = void 0;
          this.propertyNode = {
            props_btn_joinRoom: new Node(),
            props_btn_quitRoom: new Node(),
            props_btn_deal: new Node(),
            props_btn_bet: new Node(),
            props_btn_balance: new Node(),
            props_btn_add_gold: new Node(),
            props_btn_countdown: new Node(),
            props_btn_seond_deal: new Node(),
            props_btn_give_up: new Node(),
            props_btn_show_result: new Node(),
            props_btn_begin_game_countdown: new Node()
          };
          this.props = {};
          this.events = {};

          /**初始化房间 */
          this.myId = '000000';
          this.players = [];
          this.cards = [];
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_joinRoom.on(Node.EventType.TOUCH_END, () => {
            this.joinRoom();
          });
          this.propertyNode.props_btn_quitRoom.on(Node.EventType.TOUCH_END, () => {});
          this.propertyNode.props_btn_deal.on(Node.EventType.TOUCH_END, () => {
            this.deal();
          });
          this.propertyNode.props_btn_bet.on(Node.EventType.TOUCH_END, () => {
            var index = Math.floor(Math.random() * this.players.length);
            this.dispatch((_crd && playerBet === void 0 ? (_reportPossibleCrUseOfplayerBet({
              error: Error()
            }), playerBet) : playerBet)(this.players[index].memberId, 8000, (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
              error: Error()
            }), OperationType) : OperationType).CALL, 0));
          });
          this.propertyNode.props_btn_balance.on(Node.EventType.TOUCH_END, () => {
            (_crd && roomChooseViewModel === void 0 ? (_reportPossibleCrUseOfroomChooseViewModel({
              error: Error()
            }), roomChooseViewModel) : roomChooseViewModel).mainBoardViewModel.comp.recycleChip();
          });
          this.propertyNode.props_btn_add_gold.on(Node.EventType.TOUCH_END, () => {
            this.dispatch((_crd && addGoldAnime === void 0 ? (_reportPossibleCrUseOfaddGoldAnime({
              error: Error()
            }), addGoldAnime) : addGoldAnime)(this.randomIndex(), 1000));
          });
          this.propertyNode.props_btn_countdown.on(Node.EventType.TOUCH_END, () => {
            (_crd && roomChooseViewModel === void 0 ? (_reportPossibleCrUseOfroomChooseViewModel({
              error: Error()
            }), roomChooseViewModel) : roomChooseViewModel).mainBoardViewModel.startCountdown(15);
          });
          this.propertyNode.props_btn_seond_deal.on(Node.EventType.TOUCH_END, () => {
            (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
              error: Error()
            }), sktMsgListener) : sktMsgListener).dispath((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
              error: Error()
            }), SKT_MAG_TYPE) : SKT_MAG_TYPE).SECOND_PUSH_DEAL, this.randomCard(1)[0]);
          });
          this.propertyNode.props_btn_give_up.on(Node.EventType.TOUCH_END, () => {
            this.dispatch((_crd && playerChangeOpType === void 0 ? (_reportPossibleCrUseOfplayerChangeOpType({
              error: Error()
            }), playerChangeOpType) : playerChangeOpType)(this.players[0].memberId, (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
              error: Error()
            }), OperationType) : OperationType).GIVE_UP, 0));
          });
          this.propertyNode.props_btn_show_result.on(Node.EventType.TOUCH_END, () => {
            var index = Math.floor(Math.random() * this.players.length);
            this.dispatch((_crd && saveBalanceInfo === void 0 ? (_reportPossibleCrUseOfsaveBalanceInfo({
              error: Error()
            }), saveBalanceInfo) : saveBalanceInfo)(this.players[index].memberId, 1000, 1000, this.randomCard(4)));
          });
          this.propertyNode.props_btn_begin_game_countdown.on(Node.EventType.TOUCH_END, () => {
            (_crd && roomChooseViewModel === void 0 ? (_reportPossibleCrUseOfroomChooseViewModel({
              error: Error()
            }), roomChooseViewModel) : roomChooseViewModel).mainBoardViewModel.beginGameCountdownHandle(15);
          });
        }

        useProps(key, value) {}

        bindUI() {
          window.setTimeout(() => {
            this.initRoom();
          }, 100);
        }

        initRoom() {
          this.rooms = new Array(4).fill(null).map((v, i) => {
            var roomInfo = {
              roomId: Date.now().toString(),
              roomName: '1231',
              afee: 20,
              maxNum: 20,
              lower: 1000 * (i + 2),
              upper: 5000 * (i + 2)
            };
            return roomInfo;
          });
          (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).afee = 20;
          (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).testConfig.uid = this.myId;
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).dispath((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).AUTH, {
            memberId: this.myId,
            gold: 5000,
            dominoRoomInfoVos: this.rooms
          });
        }

        joinRoom() {
          this.players = new Array(7).fill(null).map((v, i) => {
            var vv = {
              memberId: i === 0 ? this.myId : Date.now().toString() + i,
              nickName: 'test是用户' + i,
              gold: 100000,
              icon: 1,
              isBanker: 0,
              cacheChairId: i + 1,
              tableId: Date.now().toString(),
              status: 3,
              betAmount: 0,
              memberStatus: 0,
              pokers: []
            };
            return vv;
          }); // this.players[0].chairId = 6;
          // this.players[0].status = 1;

          var enterGameVo = {
            tableId: '123123',
            list: this.players
          }; // this.players[1].chairId = 1;
          // this.players[2].chairId = 2;
          // this.players[3].chairId = 4;

          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).dispath((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).JOIN_ROOM, enterGameVo);
        }

        deal() {
          this.players.forEach(v => {
            (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
              error: Error()
            }), sktMsgListener) : sktMsgListener).dispath((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
              error: Error()
            }), SKT_MAG_TYPE) : SKT_MAG_TYPE).READY, {
              memberId: v.memberId
            });
          });
          var dealer = {
            bankerId: this.players[0].memberId,
            chairId: 1,
            countdown: 10
          };
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).dispath((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).PUSH_DEALER, dealer);
          var pokers = this.randomCard(3).map(v => (_crd && genCardItem === void 0 ? (_reportPossibleCrUseOfgenCardItem({
            error: Error()
          }), genCardItem) : genCardItem)(v)).map(v => (_crd && convertPoker === void 0 ? (_reportPossibleCrUseOfconvertPoker({
            error: Error()
          }), convertPoker) : convertPoker)(v));
          var dealData = {
            stage: 1,
            pokers: pokers
          };
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).dispath((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).PUSH_DEAL, dealData);
          window.setTimeout(() => {
            (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).isReconnect = false;
          }, 100);
        }

        randomCard(num) {
          var values = [];
          this.cards = new Array(28).fill(null).map((v, i) => i);

          for (var i = 0; i < num; i++) {
            var index = Math.floor(Math.random() * this.cards.length);
            values.push(this.cards[index]);
            this.cards.splice(index, 1);
          }

          return values;
        }

        randomIndex() {
          var indexs = (_crd && roomChooseViewModel === void 0 ? (_reportPossibleCrUseOfroomChooseViewModel({
            error: Error()
          }), roomChooseViewModel) : roomChooseViewModel).mainBoardViewModel.comp.props.playerMap.filter(v => v).map(v => v.seatIndex);
          return indexs[Math.floor(Math.random() * indexs.length)];
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=18658953fa656c95cfd5642d82c051e808f93a3b.js.map