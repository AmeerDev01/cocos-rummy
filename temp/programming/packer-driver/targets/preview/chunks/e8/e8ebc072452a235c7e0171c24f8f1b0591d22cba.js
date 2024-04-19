System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, EditBox, BaseComponent, SKT_MAG_TYPE, sktMsgListener, showOutCard, genCardItem, roomChooseViewModel, _dec, _class, _crd, ccclass, property, Domino_Test, test;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKT_MAG_TYPE(extras) {
    _reporterNs.report("SKT_MAG_TYPE", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktMsgListener(extras) {
    _reporterNs.report("sktMsgListener", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfshowOutCard(extras) {
    _reporterNs.report("showOutCard", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgenCardItem(extras) {
    _reporterNs.report("genCardItem", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOutCardDataVo(extras) {
    _reporterNs.report("OutCardDataVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfroomChooseViewModel(extras) {
    _reporterNs.report("roomChooseViewModel", "../index", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      EditBox = _cc.EditBox;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      SKT_MAG_TYPE = _unresolved_3.SKT_MAG_TYPE;
      sktMsgListener = _unresolved_3.sktMsgListener;
    }, function (_unresolved_4) {
      showOutCard = _unresolved_4.showOutCard;
    }, function (_unresolved_5) {
      genCardItem = _unresolved_5.genCardItem;
    }, function (_unresolved_6) {
      roomChooseViewModel = _unresolved_6.roomChooseViewModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "30f0fxMRohCbLAwmgIp3nl0", "Domino_Test", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'EditBox', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Domino_Test", Domino_Test = (_dec = ccclass('Domino_Test'), _dec(_class = class Domino_Test extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_btn_room_info: new Button(),
            props_btn_enter_room: new Button(),
            props_btn_ready: new Button(),
            props_btn_myready: new Button(),
            props_btn_beginGame: new Button(),
            props_btn_begin_chupai: new Button(),
            props_btn_otherChuPai: new Button(),
            props_btn_fapai: new Button(),
            props_btn_balance: new Button(),
            props_btn_flyGold: new Button(),
            props_btn_editBox: new EditBox()
          };
          this.props = {};
          this.events = {};
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          var uid = ['000000', '111111', '222222', '33333'];
          var users = uid.map((v, index) => {
            return {
              memberId: v,
              icon: 1,
              nickName: v,
              memberAssetGoldPieces: 1000000,
              chairId: index + 1,
              memberState: 0,
              isDealer: false
            };
          });
          users[0].isDealer = true;
          this.propertyNode.props_btn_room_info.node.on(Button.EventType.CLICK, () => {
            localStorage.setItem("domino", JSON.stringify({
              memberId: '000000'
            }));
            (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
              error: Error()
            }), sktMsgListener) : sktMsgListener).dispath((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
              error: Error()
            }), SKT_MAG_TYPE) : SKT_MAG_TYPE).AUTH, {
              dominoRoomInfoVos: [{
                afee: 500,
                roomId: '123123123',
                roomName: '123123',
                maxNum: 100
              }, {
                afee: 1000,
                roomId: '123123123',
                roomName: '123123',
                maxNum: 100
              }, {
                afee: 1500,
                roomId: '123123123',
                roomName: '123123',
                maxNum: 100
              }, {
                afee: 2000,
                roomId: '123123123',
                roomName: '123123',
                maxNum: 100
              }]
            });
          });
          this.propertyNode.props_btn_enter_room.node.on(Button.EventType.CLICK, () => {
            (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
              error: Error()
            }), sktMsgListener) : sktMsgListener).dispath((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
              error: Error()
            }), SKT_MAG_TYPE) : SKT_MAG_TYPE).JOIN_ROOM, users);
          });
          this.propertyNode.props_btn_ready.node.on(Button.EventType.CLICK, () => {
            users.forEach(v => {
              if (v.chairId > 0) {
                (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
                  error: Error()
                }), sktMsgListener) : sktMsgListener).dispath((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                  error: Error()
                }), SKT_MAG_TYPE) : SKT_MAG_TYPE).READY, {
                  memberId: v.memberId
                });
              }
            });
          });
          this.propertyNode.props_btn_myready.node.on(Button.EventType.CLICK, () => {
            (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
              error: Error()
            }), sktMsgListener) : sktMsgListener).dispath((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
              error: Error()
            }), SKT_MAG_TYPE) : SKT_MAG_TYPE).READY, {
              memberId: users[0].memberId
            });
          });
          this.propertyNode.props_btn_beginGame.node.on(Button.EventType.CLICK, () => {
            (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
              error: Error()
            }), sktMsgListener) : sktMsgListener).dispath((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
              error: Error()
            }), SKT_MAG_TYPE) : SKT_MAG_TYPE).BEGIN_GAME_COUNTDOWN, {
              gameState: 1,
              Seconds: 3
            });
          });
          this.propertyNode.props_btn_begin_chupai.node.on(Button.EventType.CLICK, () => {
            var dd = {
              chairId: 0,
              card: undefined,
              position: 1,
              membersCards: [],
              dominoDeductMoneyVo: {
                winMemberId: 'string',
                lossMemberId: 'string',
                money: 0
              },
              dominoMemBerInfo: null,
              dominoNext: {
                totalTime: 8,
                leftTime: 8,
                memberId: users.find(v => v.isDealer).memberId
              }
            };
            (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
              error: Error()
            }), sktMsgListener) : sktMsgListener).dispath((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
              error: Error()
            }), SKT_MAG_TYPE) : SKT_MAG_TYPE).OUT_CARD, dd);
          });
          this.propertyNode.props_btn_fapai.node.on(Button.EventType.CLICK, () => {
            (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
              error: Error()
            }), sktMsgListener) : sktMsgListener).dispath((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
              error: Error()
            }), SKT_MAG_TYPE) : SKT_MAG_TYPE).PUSH_DEAL, this.randomCard());
          });
          this.propertyNode.props_btn_balance.node.on(Button.EventType.CLICK, () => {
            (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
              error: Error()
            }), sktMsgListener) : sktMsgListener).dispath((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
              error: Error()
            }), SKT_MAG_TYPE) : SKT_MAG_TYPE).BALANCE, {});
          });
          var count = 27;
          this.propertyNode.props_btn_otherChuPai.node.on(Button.EventType.CLICK, () => {
            this.propertyNode.props_btn_editBox.string = count-- + "";
            var value = parseInt(this.propertyNode.props_btn_editBox.string);
            var cardItem = (_crd && genCardItem === void 0 ? (_reportPossibleCrUseOfgenCardItem({
              error: Error()
            }), genCardItem) : genCardItem)(value);
            cardItem.azimuth = 1;
            cardItem.seatIndex = Math.floor(Math.random() * 3) + 1;
            this.dispatch((_crd && showOutCard === void 0 ? (_reportPossibleCrUseOfshowOutCard({
              error: Error()
            }), showOutCard) : showOutCard)(cardItem));
          });
          this.propertyNode.props_btn_editBox.node.on(EditBox.EventType.TEXT_CHANGED, () => {
            count = parseInt(this.propertyNode.props_btn_editBox.string);
          });
          this.propertyNode.props_btn_flyGold.node.on(Button.EventType.CLICK, () => {
            test.start = parseInt(this.propertyNode.props_btn_editBox.string.split(',')[0]);
            test.end = parseInt(this.propertyNode.props_btn_editBox.string.split(',')[1]);
            (_crd && roomChooseViewModel === void 0 ? (_reportPossibleCrUseOfroomChooseViewModel({
              error: Error()
            }), roomChooseViewModel) : roomChooseViewModel).mainBoardViewModel.comp.flyGold(test.start, test.end, () => {});
          });
        }

        randomCard() {
          var indexs = [];

          for (var i = 0; i < 28; i++) {
            indexs.push(i);
          }

          var values = [];

          for (var _i = 0; _i < 7; _i++) {
            var index = Math.floor(Math.random() * indexs.length);
            values.push(indexs[index]);
            indexs.splice(index, 1);
          }

          return values;
        }

        useProps(key, value) {}

        bindUI() {
          this.node.setSiblingIndex(1000);
        }

        update(deltaTime) {}

      }) || _class));

      _export("test", test = {
        start: 0,
        end: 0
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e8ebc072452a235c7e0171c24f8f1b0591d22cba.js.map