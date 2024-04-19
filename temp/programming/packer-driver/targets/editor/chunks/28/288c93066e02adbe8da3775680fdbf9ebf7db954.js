System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, Label, Node, Sprite, Vec3, _decorator, tween, BaseComponent, config, DeskStatus, OperationType, genCardItem, CardType, CardViewModel, playAllin, playGuoPai, sourceManageSeletor, PrefabPathDefine, global, getOptimalCardGroup, _dec, _class, _crd, ccclass, property, Qiuqiu_Mine;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardItem(extras) {
    _reporterNs.report("CardItem", "../type", _context.meta, extras);
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

  function _reportPossibleCrUseOfgenCardItem(extras) {
    _reporterNs.report("genCardItem", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBalanceInfo(extras) {
    _reporterNs.report("BalanceInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardType(extras) {
    _reporterNs.report("CardType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardViewModel(extras) {
    _reporterNs.report("CardViewModel", "../viewModel/CardViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayAllin(extras) {
    _reporterNs.report("playAllin", "../index", _context.meta, extras);
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

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetOptimalCardGroup(extras) {
    _reporterNs.report("getOptimalCardGroup", "../qiuqiu_tool", _context.meta, extras);
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
      CardViewModel = _unresolved_5.default;
    }, function (_unresolved_6) {
      playAllin = _unresolved_6.playAllin;
      playGuoPai = _unresolved_6.playGuoPai;
      sourceManageSeletor = _unresolved_6.sourceManageSeletor;
    }, function (_unresolved_7) {
      PrefabPathDefine = _unresolved_7.PrefabPathDefine;
    }, function (_unresolved_8) {
      global = _unresolved_8.global;
    }, function (_unresolved_9) {
      getOptimalCardGroup = _unresolved_9.getOptimalCardGroup;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "58e0d8CSVVK4Y+taPHqA33V", "Qiuqiu_Mine", undefined);

      __checkObsolete__(['Animation', 'Label', 'Node', 'Sprite', 'Vec3', '_decorator', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Qiuqiu_Mine", Qiuqiu_Mine = (_dec = ccclass('Qiuqiu_Mine'), _dec(_class = class Qiuqiu_Mine extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.cardViewModels = [];
          this.rightCardItems = [];
          this.propertyNode = {
            props_spr_mine_head: new Sprite(),
            props_label_mine_name: new Label(),
            props_label_mine_gold: new Label(),
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
            props_quiqui_ending: new Node(),
            props_layout_cardnum: new Node(),
            props_left_hand_card: new Node(),
            props_right_hand_card: new Node()
          };
          this.props = {
            deskStatus: null,
            uid: '',
            nickName: '',
            gold: 0,
            icon: -1,
            isDealer: null,
            isReady: null,
            winloss: 0,
            opType: null,
            operationCountdown: null,

            /**当前正激活等待的用户 */
            currActiveSeatIndex: -1,
            seatIndex: -1,
            dealCardCount: 0,
            cards: [],
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
          // console.log("mine usrpro", key, value);
          switch (key) {
            case 'uid':
              this.node.active = this.props.uid ? true : false;
              break;

            case 'deskStatus':
              this.updateDeskStatus();
              break;

            case 'nickName':
              this.propertyNode.props_label_mine_name.string = this.props.nickName;
              break;

            case 'icon':
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).loadHeadSprite(this.props.icon, this.propertyNode.props_spr_mine_head);
              break;

            case 'gold':
              this.propertyNode.props_label_mine_gold.string = this.props.gold.formatAmountWithLetter();
              break;

            case 'isDealer':
              this.propertyNode.props_spr_banker.active = this.props.isDealer;

            case 'winloss':
              // this.updateWinloss();
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

            case 'cards':
              this.genCardItem();
              break;

            case 'balanceInfo':
              this.playAddGoldAnime();
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

          this.propertyNode.props_spr_mine_head.grayscale = this.props.opType === (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
            error: Error()
          }), OperationType) : OperationType).GIVE_UP;

          if (this.props.opType === (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
            error: Error()
          }), OperationType) : OperationType).GIVE_UP) {
            this.propertyNode.props_layout_cardnum.active = false;
            !(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).isReconnect && this.cardFlyHealer();
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
          const operationCountdown = this.props.operationCountdown;

          if (operationCountdown && operationCountdown.seatIndex === this.props.seatIndex && operationCountdown.countdown > 0) {
            this.propertyNode.props_label_countDown_time.node.active = true;
            this.propertyNode.props_label_countDown_time.string = operationCountdown.countdown < 10 ? '0' + operationCountdown.countdown : operationCountdown.countdown + '';
          } else {
            this.propertyNode.props_label_countDown_time.node.active = false;
          }
        }

        updateWinloss() {
          const winloss = this.props.winloss;
          this.propertyNode.props_label_gold_add.node.active = winloss != 0;
          this.propertyNode.props_label_gold_add.string = winloss > 0 ? '+' + winloss.formatAmountWithLetter() : winloss.formatAmountWithLetter();
        }

        genCardItem() {
          const cardLength = this.props.cards.length;

          if (cardLength === 0) {
            this.clearData();
            return;
          }

          if (cardLength === 3) {
            this.genHandCardItem((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).isReconnect ? true : false);
            (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).isReconnect && this.showCardNum(false);
          } else if (cardLength === 4) {
            // 右边只有一张牌的处理
            if (this.rightCardItems.length === 1) {
              const cardItem = (_crd && genCardItem === void 0 ? (_reportPossibleCrUseOfgenCardItem({
                error: Error()
              }), genCardItem) : genCardItem)(this.props.cards[cardLength - 1]);
              this.createCardView(cardItem, this.propertyNode.props_right_hand_card);
              this.rightCardItems.push(cardItem);
            } else {
              this.genHandCardItem(true);
              this.showCardNum(false);
            }
          }
        }
        /**构建手牌 */


        genHandCardItem(isShow = false) {
          this.cardViewModels = [];
          this.rightCardItems = [];
          this.propertyNode.props_left_hand_card.removeAllChildren();
          this.propertyNode.props_right_hand_card.removeAllChildren();
          const cardItems = this.props.cards.map(v => (_crd && genCardItem === void 0 ? (_reportPossibleCrUseOfgenCardItem({
            error: Error()
          }), genCardItem) : genCardItem)(v));
          const groups = (_crd && getOptimalCardGroup === void 0 ? (_reportPossibleCrUseOfgetOptimalCardGroup({
            error: Error()
          }), getOptimalCardGroup) : getOptimalCardGroup)(cardItems); // 初始化左边的牌

          groups[0].cardItems.forEach(v => {
            this.createCardView(v, this.propertyNode.props_left_hand_card, isShow);
          }); // 初始化右边的牌

          groups[1].cardItems.forEach(v => {
            this.createCardView(v, this.propertyNode.props_right_hand_card, isShow);
          });
          this.rightCardItems = groups[1].cardItems;
          this.propertyNode.props_label_left_num.string = groups[0].sum + '';
          this.propertyNode.props_label_right_num.string = this.rightCardItems.length === 1 ? '?' : groups[1].sum + '';
        }

        createCardView(cardItem, parentNode, isShow = false) {
          const view = new (_crd && CardViewModel === void 0 ? (_reportPossibleCrUseOfCardViewModel({
            error: Error()
          }), CardViewModel) : CardViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).prefabs_quiqui_bigCard).source).appendTo(parentNode).setProps({
            upFace: cardItem.upFace,
            downFace: cardItem.downFace
          }).connect();
          isShow && view.comp.openCard(true);
          this.cardViewModels.push(view);
        }

        calNum(cardItems) {
          let sum = 0;
          cardItems.forEach(v => sum += v.downFace + v.upFace);
          return sum % 10;
        }

        updateDealCard() {
          const dealCardCount = this.props.dealCardCount;

          if (dealCardCount === 0) {
            this.cardViewModels.forEach(v => v.unMount());
            this.cardViewModels = [];
            return;
          }

          const viewModel = this.cardViewModels[dealCardCount - 1];
          if (!viewModel) return;
          viewModel.comp.openCard(!(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).isReconnect);

          if (dealCardCount === 3) {
            this.showCardNum();
          } else if (dealCardCount === 4) {
            this.showRightNum();
          }
        }
        /**
         * 显示数字面板
         * @param isDelay 是否延迟一点
         */


        showCardNum(isDelay = true) {
          const cardnumNode = this.propertyNode.props_layout_cardnum;
          cardnumNode.setScale(new Vec3(0, 0));
          cardnumNode.active = true;
          const t = tween(cardnumNode);
          isDelay && t.delay(0.4);
          t.to(0.2, {
            scale: new Vec3(1, 1)
          }).start();
        }
        /**显示右边数字 */


        showRightNum() {
          const sum = this.calNum(this.rightCardItems);
          this.scheduleOnce(() => {
            this.propertyNode.props_label_right_num.node.isValid && (this.propertyNode.props_label_right_num.string = sum + '');
          }, 0.4);
        }
        /**
         * 获得手牌位置
         * @param index 第几张牌， 从1开始 
         * @returns 
         */


        getHandCardPosition(index) {
          const viewModel = this.cardViewModels[index - 1];
          if (!viewModel) return null;
          return viewModel.comp.node.getWorldPosition();
        }
        /**获得飞筹码开始位置 */


        getFlyChipStartPosition() {
          return this.propertyNode.props_spr_mine_head.node.getWorldPosition();
        }
        /**播放添加金币的动画 */


        playAddGoldAnime() {
          const balanceInfo = this.props.balanceInfo;

          if (balanceInfo && balanceInfo.seatIndex === this.props.seatIndex) {
            const winloss = balanceInfo.winloss;
            this.propertyNode.props_label_gold_add.node.active = winloss != 0;
            this.propertyNode.props_label_gold_add.string = winloss > 0 ? '+' + winloss.formatAmountWithLetter() : winloss.formatAmountWithLetter();
            this.playAddGold(this.propertyNode.props_label_gold_add.node);
          } else {
            this.propertyNode.props_label_gold_add.node.active = false;
          }
        }

        playAddGold(goldNode) {
          goldNode.setPosition(this.propertyNode.props_label_mine_gold.node.getPosition());
          const endPos = new Vec3(goldNode.position.x, goldNode.position.y + 50);
          tween(goldNode).show().to(1, {
            position: endPos
          }).delay(0.5).hide().start();
        }

        updateDeskStatus() {
          if ((_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
            error: Error()
          }), DeskStatus) : DeskStatus).WAITING === this.props.deskStatus) {
            this.clearData();
          }
        }
        /**牌飞向荷官 */


        cardFlyHealer() {
          const endPos = this.events.getHealerPosition();
          this.cardViewModels.forEach(v => {
            tween(v.viewNode).to(0.2, {
              worldPosition: endPos,
              scale: new Vec3(0.5, 0.5)
            }).removeSelf().start();
          });
          this.cardViewModels = [];
        }

        clearData() {
          this.propertyNode.props_layout_cardnum.active = false;
          this.cardViewModels.forEach(v => v.unMount());
          this.cardViewModels = [];
          this.rightCardItems = [];
          this.propertyNode.props_left_hand_card.removeAllChildren();
          this.propertyNode.props_right_hand_card.removeAllChildren();
        }

        updateCardType() {
          const value = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
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

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=288c93066e02adbe8da3775680fdbf9ebf7db954.js.map