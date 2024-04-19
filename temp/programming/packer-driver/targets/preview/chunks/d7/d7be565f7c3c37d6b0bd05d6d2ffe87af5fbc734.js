System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, Label, Node, Sprite, Vec3, _decorator, instantiate, tween, BaseComponent, config, DeskStatus, OperationType, genCardItem, CardType, global, getOptimalCardGroup, CardViewModel, playAllin, playFangqi, playGuoPai, sourceManageSeletor, PrefabPathDefine, _dec, _class, _crd, ccclass, property, Qiuqiu_Opponent;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeskStatus(extras) {
    _reporterNs.report("DeskStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCountdown(extras) {
    _reporterNs.report("Countdown", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOperationType(extras) {
    _reporterNs.report("OperationType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBalanceInfo(extras) {
    _reporterNs.report("BalanceInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgenCardItem(extras) {
    _reporterNs.report("genCardItem", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardItem(extras) {
    _reporterNs.report("CardItem", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardGroup(extras) {
    _reporterNs.report("CardGroup", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardType(extras) {
    _reporterNs.report("CardType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetOptimalCardGroup(extras) {
    _reporterNs.report("getOptimalCardGroup", "../qiuqiu_tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardViewModel(extras) {
    _reporterNs.report("CardViewModel", "../viewModel/CardViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayAllin(extras) {
    _reporterNs.report("playAllin", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayFangqi(extras) {
    _reporterNs.report("playFangqi", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayGuoPai(extras) {
    _reporterNs.report("playGuoPai", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Animation = _cc.Animation;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      config = _unresolved_3.default;
    }, function (_unresolved_4) {
      DeskStatus = _unresolved_4.DeskStatus;
      OperationType = _unresolved_4.OperationType;
      genCardItem = _unresolved_4.genCardItem;
      CardType = _unresolved_4.CardType;
    }, function (_unresolved_5) {
      global = _unresolved_5.global;
    }, function (_unresolved_6) {
      getOptimalCardGroup = _unresolved_6.getOptimalCardGroup;
    }, function (_unresolved_7) {
      CardViewModel = _unresolved_7.default;
    }, function (_unresolved_8) {
      playAllin = _unresolved_8.playAllin;
      playFangqi = _unresolved_8.playFangqi;
      playGuoPai = _unresolved_8.playGuoPai;
      sourceManageSeletor = _unresolved_8.sourceManageSeletor;
    }, function (_unresolved_9) {
      PrefabPathDefine = _unresolved_9.PrefabPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1235exvIgpE8oKpWI6aRN8c", "Qiuqiu_Opponent", undefined);

      __checkObsolete__(['Animation', 'Label', 'Node', 'Sprite', 'UITransform', 'Vec2', 'Vec3', '_decorator', 'instantiate', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Qiuqiu_Opponent", Qiuqiu_Opponent = (_dec = ccclass('Qiuqiu_Opponent'), _dec(_class = class Qiuqiu_Opponent extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_spr_head: new Sprite(),
            props_label_name: new Label(),
            props_label_gold: new Label(),
            props_label_gold_add: new Label(),
            props_label_left_num: new Label(),
            props_label_right_num: new Label(),
            props_label_countDown_time: new Label(),
            props_spr_banker: new Node(),
            props_spr_cek: new Node(),
            props_spr_allin: new Node(),
            props_spr_naik: new Node(),
            props_spr_balik: new Node(),
            props_spr_ikut: new Node(),
            props_btn_gift: new Node(),
            props_quiqui_ending: new Node(),
            props_layout_result_card: new Node(),
            props_Layout_cards_handCards: new Node(),
            props_layout_cardnum: new Node(),
            props_card_results: new Node(),
            props_cards: new Node()
          };
          this.props = {
            deskStatus: null,
            uid: null,
            nickName: null,
            gold: 0,
            icon: -1,
            isDealer: null,
            isReady: null,
            results: [],
            winloss: 0,
            opType: null,
            operationCountdown: null,

            /**当前正激活等待的用户 */
            currActiveSeatIndex: -1,
            seatIndex: -1,
            dealCardCount: 0,
            balanceInfo: null,
            cardType: (_crd && CardType === void 0 ? (_reportPossibleCrUseOfCardType({
              error: Error()
            }), CardType) : CardType).DISERSE
          };
          this.events = {
            getHealerPosition: () => {
              return null;
            }
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {
          switch (key) {
            case 'uid':
              this.node.active = this.props.uid !== '';
              break;

            case 'deskStatus':
              this.updateDeskStatus();
              break;

            case 'nickName':
              this.propertyNode.props_label_name.string = this.props.nickName;
              break;

            case 'icon':
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).loadHeadSprite(this.props.icon, this.propertyNode.props_spr_head);
              break;

            case 'gold':
              this.propertyNode.props_label_gold.string = this.props.gold.formatAmountWithLetter(true);
              break;

            case 'isDealer':
              this.propertyNode.props_spr_banker.active = this.props.isDealer;
              break;

            case 'operationCountdown':
              this.updateCountdown();
              break;

            case 'dealCardCount':
              this.updateDealCard();
              break;

            case 'opType':
              this.updateOperationType();
              break;

            case 'balanceInfo':
              this.playAddGoldAnime();
              break;

            case 'results':
              this.updateCards();
              break;

            case 'cardType':
              this.updateCardType();
              break;
          }
        }

        bindUI() {
          this.propertyNode.props_spr_cek.active = false;
          this.propertyNode.props_spr_allin.active = false;
          this.propertyNode.props_spr_naik.active = false;
          this.propertyNode.props_spr_balik.active = false;
          this.propertyNode.props_spr_ikut.active = false;
          this.propertyNode.props_label_countDown_time.node.active = false;
          this.propertyNode.props_label_gold_add.node.active = false;
          this.propertyNode.props_layout_cardnum.active = false;
          this.propertyNode.props_quiqui_ending.active = false;
          this.propertyNode.props_btn_gift.active = false;
          this.propertyNode.props_card_results.active = false;
          this.propertyNode.props_card_results.removeAllChildren();
          this.propertyNode.props_label_gold_add.node.getComponent(Animation).destroy();
          this.updateDealCard();
        }

        updateOperationType() {
          this.propertyNode.props_spr_cek.active = this.props.opType === (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
            error: Error()
          }), OperationType) : OperationType).PASS;
          this.propertyNode.props_spr_allin.active = this.props.opType === (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
            error: Error()
          }), OperationType) : OperationType).SHOW_HAND;
          this.propertyNode.props_spr_naik.active = this.props.opType === (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
            error: Error()
          }), OperationType) : OperationType).FILL;
          this.propertyNode.props_spr_balik.active = this.props.opType === (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
            error: Error()
          }), OperationType) : OperationType).GIVE_UP;
          this.propertyNode.props_spr_ikut.active = this.props.opType === (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
            error: Error()
          }), OperationType) : OperationType).CALL; // 弃牌了头像灰色

          this.propertyNode.props_spr_head.grayscale = this.props.opType === (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
            error: Error()
          }), OperationType) : OperationType).GIVE_UP;

          if (this.props.opType === (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
            error: Error()
          }), OperationType) : OperationType).GIVE_UP) {
            !(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).isReconnect && this.cardFlyHealer();
            !(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).isReconnect && (_crd && playFangqi === void 0 ? (_reportPossibleCrUseOfplayFangqi({
              error: Error()
            }), playFangqi) : playFangqi)();
          } else if (this.props.opType === (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
            error: Error()
          }), OperationType) : OperationType).SHOW_HAND) {
            !(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).isReconnect && (_crd && playAllin === void 0 ? (_reportPossibleCrUseOfplayAllin({
              error: Error()
            }), playAllin) : playAllin)();
          } else if (this.props.opType === (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
            error: Error()
          }), OperationType) : OperationType).PASS) {
            !(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).isReconnect && (_crd && playGuoPai === void 0 ? (_reportPossibleCrUseOfplayGuoPai({
              error: Error()
            }), playGuoPai) : playGuoPai)();
          }
        }

        updateCountdown() {
          var operationCountdown = this.props.operationCountdown;

          if (operationCountdown && operationCountdown.seatIndex === this.props.seatIndex && operationCountdown.countdown > 0) {
            this.propertyNode.props_label_countDown_time.node.active = true;
            this.propertyNode.props_label_countDown_time.string = operationCountdown.countdown < 10 ? '0' + operationCountdown.countdown : operationCountdown.countdown + '';
          } else {
            this.propertyNode.props_label_countDown_time.node.active = false;
          }
        }

        updateDealCard() {
          var dealCardCount = this.props.opType !== (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
            error: Error()
          }), OperationType) : OperationType).GIVE_UP ? this.props.dealCardCount : 0;
          this.propertyNode.props_Layout_cards_handCards.children.forEach((v, i) => {
            if (dealCardCount > 0) {
              v.active = i + 1 <= dealCardCount;
            } else {
              v.active = false;
            }
          });
        }
        /**牌飞向荷官 */


        cardFlyHealer() {
          var endPos = this.events.getHealerPosition();
          this.propertyNode.props_Layout_cards_handCards.children.concat().filter(v => v.active).forEach(v => {
            var flyNode = instantiate(v);
            this.propertyNode.props_Layout_cards_handCards.addChild(flyNode);
            v.active = false;
            tween(flyNode).to(0.2, {
              worldPosition: endPos
            }).removeSelf().start();
          });
        }
        /**
         * 获得手牌位置
         * @param index 第几张牌， 从1开始 
         * @returns 
         */


        getHandCardPosition(index) {
          return this.propertyNode.props_Layout_cards_handCards.getChildByName('spr_handCards_Bg' + index).getWorldPosition();
        }
        /**获得飞筹码开始位置 */


        getFlyChipStartPosition() {
          return this.propertyNode.props_spr_head.node.getWorldPosition();
        }

        updateDeskStatus() {
          if ((_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
            error: Error()
          }), DeskStatus) : DeskStatus).WAITING === this.props.deskStatus) {
            this.clearData();
          }
        }
        /**播放添加金币的动画 */


        playAddGoldAnime() {
          var balanceInfo = this.props.balanceInfo;

          if (balanceInfo && balanceInfo.seatIndex === this.props.seatIndex) {
            var winloss = balanceInfo.winloss;
            this.propertyNode.props_label_gold_add.node.active = winloss != 0;
            this.propertyNode.props_label_gold_add.string = winloss > 0 ? '+' + winloss.formatAmountWithLetter(true) : winloss.formatAmountWithLetter(true);
            this.playAddGold(this.propertyNode.props_label_gold_add.node);
          } else {
            this.propertyNode.props_label_gold_add.node.active = false;
          }
        }

        playAddGold(goldNode) {
          goldNode.setPosition(this.propertyNode.props_label_gold.node.getPosition());
          var endPos = new Vec3(goldNode.position.x, goldNode.position.y + 50);
          tween(goldNode).show().to(1, {
            position: endPos
          }).delay(0.5).hide().start();
        }

        updateCards() {
          this.propertyNode.props_card_results.removeAllChildren();

          if (this.props.results.length === 0) {
            this.propertyNode.props_layout_cardnum.active = false;
            this.propertyNode.props_card_results.active = false;
          } else {
            this.propertyNode.props_card_results.active = true;
            this.showCardNum();
            var cardItems = this.props.results.map(v => (_crd && genCardItem === void 0 ? (_reportPossibleCrUseOfgenCardItem({
              error: Error()
            }), genCardItem) : genCardItem)(v));
            var groups = (_crd && getOptimalCardGroup === void 0 ? (_reportPossibleCrUseOfgetOptimalCardGroup({
              error: Error()
            }), getOptimalCardGroup) : getOptimalCardGroup)(cardItems);
            groups.forEach((v, i) => {
              this.addCards(v);
              i === 0 && (this.propertyNode.props_label_left_num.string = v.sum + '');
              var rightNum = v.cardItems.length === 1 ? '?' : v.sum + '';
              i === 1 && (this.propertyNode.props_label_right_num.string = rightNum);
            });
          }
        }
        /**显示数字面板 */


        showCardNum() {
          var cardnumNode = this.propertyNode.props_layout_cardnum;
          cardnumNode.setScale(new Vec3(0, 0));
          cardnumNode.active = true;
          tween(cardnumNode).to(0.2, {
            scale: new Vec3(1, 1)
          }).start();
        }

        addCards(cardGroup) {
          var cardsNode = instantiate(this.propertyNode.props_cards);
          cardsNode.active = true;
          cardsNode.removeAllChildren();
          this.propertyNode.props_card_results.addChild(cardsNode);
          cardGroup.cardItems.forEach(v => this.createCardView(v, cardsNode));
        }

        createCardView(cardItem, parentNode) {
          var view = new (_crd && CardViewModel === void 0 ? (_reportPossibleCrUseOfCardViewModel({
            error: Error()
          }), CardViewModel) : CardViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).prefabs_quiqui_bigCard).source).appendTo(parentNode).setProps({
            upFace: cardItem.upFace,
            downFace: cardItem.downFace
          }).connect();
          view.comp.setScale(0.6);
          view.comp.openCard(true);
        }

        updateCardType() {
          var value = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).cardTypes.find(v => v.cardType === this.props.cardType);

          if (value) {
            this.propertyNode.props_layout_cardnum.active = false;
            this.propertyNode.props_quiqui_ending.active = true;
            this.propertyNode.props_quiqui_ending.getComponent(Sprite).spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile(value.spriteFrame).source;
          } else {
            this.propertyNode.props_quiqui_ending.active = false;
          }
        }

        clearData() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d7be565f7c3c37d6b0bd05d6d2ffe87af5fbc734.js.map