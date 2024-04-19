System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, Sprite, tween, UITransform, Vec3, BaseComponent, playChooseCard, playGuoPai, playTimeout, sourceManageSeletor, PrefabPathDefine, DeskStatus, PlayerSatus, CardViewModel, setDeskCardOutline, global, _dec, _class, _crd, ccclass, property, Domino_Mine;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayChooseCard(extras) {
    _reporterNs.report("playChooseCard", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayGuoPai(extras) {
    _reporterNs.report("playGuoPai", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayTimeout(extras) {
    _reporterNs.report("playTimeout", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
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

  function _reportPossibleCrUseOfCardViewModel(extras) {
    _reporterNs.report("CardViewModel", "../viewModel/CardViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetDeskCardOutline(extras) {
    _reporterNs.report("setDeskCardOutline", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
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
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      playChooseCard = _unresolved_3.playChooseCard;
      playGuoPai = _unresolved_3.playGuoPai;
      playTimeout = _unresolved_3.playTimeout;
      sourceManageSeletor = _unresolved_3.sourceManageSeletor;
    }, function (_unresolved_4) {
      PrefabPathDefine = _unresolved_4.PrefabPathDefine;
    }, function (_unresolved_5) {
      DeskStatus = _unresolved_5.DeskStatus;
      PlayerSatus = _unresolved_5.PlayerSatus;
    }, function (_unresolved_6) {
      CardViewModel = _unresolved_6.default;
    }, function (_unresolved_7) {
      setDeskCardOutline = _unresolved_7.setDeskCardOutline;
    }, function (_unresolved_8) {
      global = _unresolved_8.global;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "024a8XI/TxHmYRnn7bEpkWG", "Domino_Mine", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Node', 'Sprite', 'tween', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Domino_Mine", Domino_Mine = (_dec = ccclass('Domino_Mine'), _dec(_class = class Domino_Mine extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.handCardViewModelList = [];
          this.dealIndex = 0;
          this.notOutCarTime = 0;
          this.propertyNode = {
            /**头像图片 */
            props_btn_head: new Sprite(),

            /**玩家昵称 */
            props_label_mine_name: new Label(),

            /**玩家金币 */
            props_label_mine_gold: new Label(),

            /**庄家标识 */
            props_spr_banker: new Node(),

            /**头像外圈 */
            props_btn_head_circle: new Node(),

            /**pass标识 */
            props_spr_cek: new Node(),

            /**倒计时 */
            props_label_countDown_time: new Label(),

            /**手牌节点 */
            props_Layout_cards_handCards: new Node(),

            /**准备 */
            props_spr_ready: new Node(),
            props_Layout_cards_misNum: new Node(),
            props_win_label: new Label(),
            props_loss_label: new Label()
          };
          this.props = {
            deskStatus: null,
            outCardItem: [],
            leftOutCardItem: [],
            rightOutCardItem: [],
            newCardItem: null,
            currActiveSeatIndex: -1,
            outCountdown: null,
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
            winloss: 0
          };
          this.events = {
            onReady: () => {},
            onOutCard: (value, azimuth) => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_spr_ready.on(Node.EventType.TOUCH_END, () => {
            this.events.onReady();
          });
        }

        useProps(key, value) {
          key === "nickName" && (this.propertyNode.props_label_mine_name.string = this.props.nickName);
          key === "glodAmount" && (this.propertyNode.props_label_mine_gold.string = this.props.glodAmount.formatAmountWithLetter());
          key === "isMaster" && (this.propertyNode.props_spr_banker.active = this.props.isMaster);
          key === "head" && (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
            error: Error()
          }), global) : global).loadHeadSprite(this.props.head, this.propertyNode.props_btn_head);

          if (key === "state") {
            this.propertyNode.props_spr_ready.active = this.props.state === (_crd && PlayerSatus === void 0 ? (_reportPossibleCrUseOfPlayerSatus({
              error: Error()
            }), PlayerSatus) : PlayerSatus).WAITING; // if (this.props.state === PlayerSatus.WAITING) {
            // 	this.clearData();
            // } else if (this.props.state === PlayerSatus.READY) {
            // 	this.clearData();
            // }
          }

          if (key === 'newCardItem' && value.cur && value.cur.seatIndex === 0 && !value.cur.isReconnect) {
            this.handCardViewModelList && (this.handCardViewModelList = this.handCardViewModelList.filter(v => v.comp && v.getValue() !== value.cur.value));
            this.updateCardState(false);
          } else if (key === 'currActiveSeatIndex') {
            console.log('当前操作的用户 ====================', value.cur);
            this.notOutCarTime && window.clearTimeout(this.notOutCarTime);
            this.updateCardState(value.cur === 0);
          } else if (key === 'outCountdown' && value.cur && value.cur.seatIndex === 0) {
            this.countdown(value.cur);
          } else if (key === 'deskStatus') {
            if (this.props.deskStatus === (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).WAITING) {
              this.clearData();
            }
          } else if (key === 'winloss') {
            this.updateWinloss(value.cur);
          } else if (key === 'noWayCardNumber') {
            this.updateMissNumber(value.cur);
          }
        }

        countdown(outCountdown) {
          if (!this.node || !this.node.isValid) return;
          outCountdown.time === 3 && (_crd && playTimeout === void 0 ? (_reportPossibleCrUseOfplayTimeout({
            error: Error()
          }), playTimeout) : playTimeout)();
          this.propertyNode.props_label_countDown_time.node.active = outCountdown.time > 0;
          this.propertyNode.props_label_countDown_time.string = outCountdown.time + "";
        }

        bindUI() {
          this.propertyNode.props_label_countDown_time.node.active = false;
          this.propertyNode.props_spr_banker.active = false;
          this.propertyNode.props_win_label.node.active = false;
          this.propertyNode.props_loss_label.node.active = false;
          this.updateMissNumber();
        }

        clearData() {
          this.dealIndex = 0;
          this.propertyNode.props_Layout_cards_handCards.removeAllChildren();
          this.handCardViewModelList.forEach(v => v.unMount());
          this.handCardViewModelList = [];
        }

        getSiblingIndex(cardItem) {
          for (let i = this.handCardViewModelList.length - 1; i >= 0; i--) {
            const element = this.handCardViewModelList[i];

            if (cardItem.downFace > element.comp.props.downFace) {
              return element.viewNode.getSiblingIndex() + 1;
            } else if (cardItem.downFace === element.comp.props.downFace) {
              for (let j = i; j >= 0; j--) {
                const elementJ = this.handCardViewModelList[j];

                if (cardItem.upFace > element.comp.props.upFace) {
                  return elementJ.viewNode.getSiblingIndex() + 1;
                }
              }

              return element.viewNode.getSiblingIndex();
            }
          }

          return 0;
        }

        reconnectDeal() {
          this.props.cardIList.forEach(v => {
            this.deal(() => {}, false);
          });
          this.dealIndex = 0;
        }
        /**发牌 */


        deal(done, isAnime = true) {
          this.dealIndex === 0 && this.clearData();
          const cardItem = this.props.cardIList[this.dealIndex++];
          this.dealIndex >= 7 && (this.dealIndex = 0);
          this.genCardView(cardItem, done, isAnime);
        }
        /**构建牌 */


        genCardView(cardItem, done, isAnime = true) {
          if (!cardItem) return;
          const siblingIndex = this.getSiblingIndex(cardItem);
          const cardViewModel = new (_crd && CardViewModel === void 0 ? (_reportPossibleCrUseOfCardViewModel({
            error: Error()
          }), CardViewModel) : CardViewModel)().setSiblingIndex(siblingIndex); // 添加牌成功之后回调方法，目的是拿到最新的坐标

          cardViewModel.setComplateCallback(() => {
            const position = this.propertyNode.props_Layout_cards_handCards.getComponent(UITransform).convertToWorldSpaceAR(cardViewModel.comp.node.getPosition());
            position.y += cardViewModel.getOriginalHeight();
            done(this.node.getComponent(UITransform).convertToNodeSpaceAR(position));
          });
          cardViewModel.mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).CARD).source).setInitHide(isAnime).appendTo(this.propertyNode.props_Layout_cards_handCards).setProps({
            index: siblingIndex,
            upFace: cardItem.upFace,
            downFace: cardItem.downFace,
            position: cardItem.position,
            isAnime: isAnime,
            isHand: true,
            isShow: true,
            value: cardItem.value
          }).connect();
          this.handCardViewModelList.push(cardViewModel);
          this.handCardViewModelList.sort((s1, s2) => {
            const r = s1.comp.props.downFace - s2.comp.props.downFace;
            return r === 0 ? s1.comp.props.upFace - s2.comp.props.upFace : r;
          });
          cardViewModel.comp.node.on(Node.EventType.TOUCH_END, () => {
            cardViewModel.comp.clearLangPressStatus(); // 没有高亮不能选择

            if (!cardViewModel.isBright() || cardViewModel.comp.props.isDisable) {
              return;
            }

            this.dispatch((_crd && setDeskCardOutline === void 0 ? (_reportPossibleCrUseOfsetDeskCardOutline({
              error: Error()
            }), setDeskCardOutline) : setDeskCardOutline)(undefined));
            this.handCardViewModelList.filter(v => v !== cardViewModel).forEach(v => v.setProps({
              isChecked: false
            }));
            cardViewModel.comp.setCheckedAnime(true); // 出牌了

            if (cardViewModel.isChecked()) {
              // 拖动之后可以出牌了，这里就调用出牌方法了
              if (!cardViewModel.comp.isCanOutCard()) {
                this.events.onOutCard(cardViewModel.getValue(), 1);
              }
            } else {
              (_crd && playChooseCard === void 0 ? (_reportPossibleCrUseOfplayChooseCard({
                error: Error()
              }), playChooseCard) : playChooseCard)();
              cardViewModel.setProps({
                isChecked: !cardViewModel.isChecked()
              });
            }

            cardViewModel.comp.dragEnd();
          });
        }
        /**更新可操作的牌 */


        updateCardState(out) {
          const outLength = this.props.outCardItem.length;

          if (out && outLength === 0) {
            this.handCardViewModelList.forEach(v => v.comp.setProps({
              isBright: true
            }));
          } else {
            let newCardItem;

            if (out) {
              newCardItem = this.props.leftOutCardItem.length === 0 ? this.props.outCardItem[0] : this.props.leftOutCardItem[this.props.leftOutCardItem.length - 1];
              this.handCardViewModelList.forEach(v => v.setBright(newCardItem, 0));
              newCardItem = this.props.rightOutCardItem.length === 0 ? this.props.outCardItem[0] : this.props.rightOutCardItem[this.props.rightOutCardItem.length - 1];
              this.handCardViewModelList.forEach(v => v.setBright(newCardItem, 1));
              const isCanOut = this.handCardViewModelList.find(v => v.isBright());

              if (!isCanOut) {
                (_crd && playGuoPai === void 0 ? (_reportPossibleCrUseOfplayGuoPai({
                  error: Error()
                }), playGuoPai) : playGuoPai)(); // 不能出牌时，延迟2秒发送出牌消息
                // console.log("不能出牌时，延迟2秒发送出牌消息");

                this.notOutCarTime = window.setTimeout(() => {
                  this.events.onOutCard(-1, undefined);
                }, 2000);
              }
            } else {
              this.handCardViewModelList.forEach(v => v.setBright(undefined, 0));
            }
          }
        }
        /**更新缺点 */


        updateMissNumber(values = []) {
          this.propertyNode.props_Layout_cards_misNum.active = false;
          this.propertyNode.props_Layout_cards_misNum.children.forEach(node => {
            const value = values.find(value => node.name === 'props_spr_cards_misNum-00' + value);

            if (value >= 0) {
              node.active = true;
              this.propertyNode.props_Layout_cards_misNum.active = true;
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

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9ba3cdf42a9e9b203fe57652f4ab5fd47f5c2891.js.map