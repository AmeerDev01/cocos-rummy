System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, Sprite, tween, Vec3, BaseComponent, DeskStatus, PlayerSatus, global, roomChooseViewModel, _dec, _class, _crd, ccclass, property, Domino_Opponent;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardItem(extras) {
    _reporterNs.report("CardItem", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCountdown(extras) {
    _reporterNs.report("Countdown", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeskStatus(extras) {
    _reporterNs.report("DeskStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerSatus(extras) {
    _reporterNs.report("PlayerSatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      DeskStatus = _unresolved_3.DeskStatus;
      PlayerSatus = _unresolved_3.PlayerSatus;
    }, function (_unresolved_4) {
      global = _unresolved_4.global;
    }, function (_unresolved_5) {
      roomChooseViewModel = _unresolved_5.roomChooseViewModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fb999QApqFHAI8qNBsHug+B", "Domino_Opponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'log', 'Node', 'Sprite', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Domino_Opponent", Domino_Opponent = (_dec = ccclass('Domino_Opponent'), _dec(_class = class Domino_Opponent extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            /**头像图片 */
            props_btn_head: new Sprite(),

            /**头像外圈 */
            props_btn_head_circle: new Node(),
            props_label_name: new Label(),
            props_label_gold: new Label(),
            props_label_handCards_num: new Label(),
            props_btn_gift: new Node(),
            props_spr_cek: new Node(),
            props_Layout_cards_handCards: new Node(),

            /**庄家标识 */
            props_spr_banker: new Node(),

            /**准备 */
            props_spr_ready: new Node(),

            /**倒计时 */
            props_label_countDown_time: new Label(),
            props_Layout_cards_misNum: new Node(),
            props_win_label: new Label(),
            props_loss_label: new Label()
          };
          this.props = {
            currActiveSeatIndex: -1,
            outCountdown: null,
            newCardItem: null,
            uid: '',
            head: -1,
            nickName: '',
            glodAmount: -1,
            state: (_crd && PlayerSatus === void 0 ? (_reportPossibleCrUseOfPlayerSatus({
              error: Error()
            }), PlayerSatus) : PlayerSatus).WAITING,
            isMaster: false,
            remainCardCount: -1,
            cardIList: [],
            noWayCardNumber: [],
            isActive: false,
            deskStatus: (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).WAITING,
            seatIndex: -1,
            winloss: 0
          };
          this.events = {};
        }

        start() {}

        initState() {
          return {
            remainCardCount: 0
          };
        }

        bindEvent() {}

        useProps(key, value) {
          // console.log('opponent usrprops ', key, value)
          if (key === "uid") {
            this.node.active = this.props.uid !== '';
          }

          key === "nickName" && (this.propertyNode.props_label_name.string = this.props.nickName);
          key === "glodAmount" && (this.propertyNode.props_label_gold.string = this.props.glodAmount.formatAmountWithLetter());
          key === 'isMaster' && (this.propertyNode.props_spr_banker.active = this.props.isMaster);
          key === "head" && (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
            error: Error()
          }), global) : global).loadHeadSprite(this.props.head, this.propertyNode.props_btn_head);

          if (key === "state") {
            this.propertyNode.props_spr_ready.active = this.props.state === (_crd && PlayerSatus === void 0 ? (_reportPossibleCrUseOfPlayerSatus({
              error: Error()
            }), PlayerSatus) : PlayerSatus).WAITING;

            if (this.props.state === (_crd && PlayerSatus === void 0 ? (_reportPossibleCrUseOfPlayerSatus({
              error: Error()
            }), PlayerSatus) : PlayerSatus).WAITING) {
              this.clearData();
            }
          }

          if (key === 'deskStatus') {
            if ((_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).WAITING === value.cur) {
              this.beginGameClear();
            }
          } else if (key === 'currActiveSeatIndex' && value.cur === this.props.seatIndex) {} else if (key === 'outCountdown' && value.cur && value.cur.seatIndex === this.props.seatIndex) {
            this.countdown(value.cur);
          } else if (key === 'newCardItem' && value.cur && !value.cur.isReconnect && value.cur.seatIndex === this.props.seatIndex) {
            this.playCard();
          } else if (key === 'winloss') {
            this.updateWinloss(value.cur);
          } else if (key === 'remainCardCount') {
            this.setState({
              remainCardCount: value.cur
            });
          } else if (key === 'noWayCardNumber') {
            this.updateMissNumber(value.cur);
          }
        }

        countdown(outCountdown) {
          this.propertyNode.props_label_countDown_time.node.active = outCountdown.time > 0;
          this.propertyNode.props_label_countDown_time.string = outCountdown.time + "";
        }
        /**发牌 */


        deal() {
          // this.propertyNode.props_Layout_cards_handCards.active = true;
          // this.propertyNode.props_label_handCards_num.string = ++this.state.remainCardCount + '';
          this.setState({
            remainCardCount: this.state.remainCardCount + 1
          });
        }
        /**出牌 */


        playCard() {
          // this.propertyNode.props_Layout_cards_handCards.active = true;
          // this.propertyNode.props_label_handCards_num.string = --this.state.remainCardCount + '';
          this.setState({
            remainCardCount: this.state.remainCardCount - 1
          });
          (_crd && roomChooseViewModel === void 0 ? (_reportPossibleCrUseOfroomChooseViewModel({
            error: Error()
          }), roomChooseViewModel) : roomChooseViewModel).mainBoardViewModel.comp.outFlyCard(this.propertyNode.props_label_handCards_num.node.getWorldPosition());
        }
        /**更新缺点 */


        updateMissNumber(values = []) {
          this.propertyNode.props_Layout_cards_misNum.active = false;
          this.propertyNode.props_Layout_cards_misNum.children.forEach(node => {
            const value = values.find(value => node.name === 'props_spr_cards_misNum-00' + value);

            if (value >= 0) {
              this.propertyNode.props_Layout_cards_misNum.active = true;
              node.active = true;
            } else {
              node.active = false;
            }
          });
        }

        updateWinloss(value) {
          if (value === 0) return;
          this.propertyNode.props_win_label.node.active = value > 0;
          this.propertyNode.props_loss_label.node.active = !this.propertyNode.props_win_label.node.active;
          let labelNode;

          if (value > 0) {
            this.propertyNode.props_win_label.string = '+' + value.formatAmountWithLetter();
            labelNode = this.propertyNode.props_win_label.node;
          } else {
            this.propertyNode.props_loss_label.string = value.formatAmountWithLetter();
            labelNode = this.propertyNode.props_loss_label.node;
          }

          const initPos = new Vec3(labelNode.position.x, labelNode.position.y);
          tween(labelNode).to(1, {
            position: new Vec3(initPos.x, initPos.y + 50)
          }).call(() => {
            if (labelNode.isValid) {
              labelNode.setPosition(initPos);
              labelNode.active = false;
            }
          }).start();
        }

        bindUI() {
          this.propertyNode.props_btn_gift.active = false;
          this.node.active = false;
          this.propertyNode.props_label_countDown_time.node.active = false;
          this.propertyNode.props_Layout_cards_handCards.active = false;
          this.propertyNode.props_spr_banker.active = false;
          this.propertyNode.props_spr_cek.active = false;
          this.propertyNode.props_win_label.node.active = false;
          this.propertyNode.props_loss_label.node.active = false;
          this.updateMissNumber();
          this.useState((key, value) => {
            this.propertyNode.props_Layout_cards_handCards.active = value.cur > 0;
            this.propertyNode.props_label_handCards_num.string = value.cur + '';
          }, ['remainCardCount']);
        }

        beginGameClear() {
          this.propertyNode.props_spr_ready.active = false;
          this.setState({
            remainCardCount: 0
          });
        }

        clearData() {
          this.countdown({
            time: 0,
            seatIndex: 0
          });
        }

        fillReconnectData(remainCardCount) {
          this.setState({
            remainCardCount: remainCardCount
          });
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=91438dc7cc5813a07bdafabd7deae7aeff2bbd66.js.map