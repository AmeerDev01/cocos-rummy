System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, bezier, instantiate, Label, misc, Node, Toggle, tween, UIOpacity, UITransform, Vec3, BaseComponent, config, playBtnClick, playCoin, playFapai, playGameBegin, sourceManageSeletor, PrefabPathDefine, CardPosition, DeskStatus, genCardItem, getComposeCardValue, PlayerSatus, CardViewModel, _dec, _class, _crd, ccclass, property, Domino_MainBoard;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayBtnClick(extras) {
    _reporterNs.report("playBtnClick", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayCoin(extras) {
    _reporterNs.report("playCoin", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayFapai(extras) {
    _reporterNs.report("playFapai", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayGameBegin(extras) {
    _reporterNs.report("playGameBegin", "../index", _context.meta, extras);
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

  function _reportPossibleCrUseOfCardPosition(extras) {
    _reporterNs.report("CardPosition", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCountdown(extras) {
    _reporterNs.report("Countdown", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeskStatus(extras) {
    _reporterNs.report("DeskStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgenCardItem(extras) {
    _reporterNs.report("genCardItem", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetComposeCardValue(extras) {
    _reporterNs.report("getComposeCardValue", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerSatus(extras) {
    _reporterNs.report("PlayerSatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardViewModel(extras) {
    _reporterNs.report("CardViewModel", "../viewModel/CardViewModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      bezier = _cc.bezier;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      misc = _cc.misc;
      Node = _cc.Node;
      Toggle = _cc.Toggle;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      config = _unresolved_3.default;
    }, function (_unresolved_4) {
      playBtnClick = _unresolved_4.playBtnClick;
      playCoin = _unresolved_4.playCoin;
      playFapai = _unresolved_4.playFapai;
      playGameBegin = _unresolved_4.playGameBegin;
      sourceManageSeletor = _unresolved_4.sourceManageSeletor;
    }, function (_unresolved_5) {
      PrefabPathDefine = _unresolved_5.PrefabPathDefine;
    }, function (_unresolved_6) {
      CardPosition = _unresolved_6.CardPosition;
      DeskStatus = _unresolved_6.DeskStatus;
      genCardItem = _unresolved_6.genCardItem;
      getComposeCardValue = _unresolved_6.getComposeCardValue;
      PlayerSatus = _unresolved_6.PlayerSatus;
    }, function (_unresolved_7) {
      CardViewModel = _unresolved_7.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "618ddsp5SJIyIovZWo5DjCp", "Domino_MainBoard", undefined);

      __checkObsolete__(['_decorator', 'bezier', 'instantiate', 'Label', 'misc', 'Node', 'Toggle', 'tween', 'UIOpacity', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Domino_MainBoard", Domino_MainBoard = (_dec = ccclass('Domino_MainBoard'), _dec(_class = class Domino_MainBoard extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.middleCardView = void 0;
          this.leftLastCardView = void 0;
          this.rightLastCardView = void 0;
          this.lastCardView = void 0;
          this.leftViews = [];
          this.rightViews = [];
          this.leftOutlineNode = void 0;
          this.rightOutlineNode = void 0;
          this.beginGameCountdownT = 0;
          this.beginGameCountdownCount = 0;
          this.outCardAreaInitX = 0;
          this.outCardAreaInitY = 0;
          this.propertyNode = {
            props_btn_title_menu: new Node(),
            props_player_wrap: new Node(),

            /**放置出牌的队列 */
            props_center_cards_wrap: new Node(),
            props_spr_turn_up: new Node(),
            props_out_cards: new Node(),
            props_btn_title_shop: new Node(),

            /**金币 */
            props_spr_gold: new Node(),

            /**开始游戏倒计时 */
            props_domino_begin_cutdown: new Node(),

            /**开始游戏倒计时 */
            props_label_cutdown_num: new Label()
          };
          this.props = {
            statue: (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).WAITING,
            noShowCardNumber: [],
            outCardItem: [],
            leftOutCardItem: [],
            rightOutCardItem: [],
            playerMap: [null, null, null, null],
            lastActiveSeatIndex: -1,
            currActiveSeatIndex: -1,
            newCardItem: null,
            intendOutCard: null,
            quitRoomAction: 0,
            readyCountdown: null,
            gold: 0,
            balanceOdds: 0
          };
          this.events = {
            openSetPanel: toggle => {},
            openShopPanel: () => {},
            flyCard: (cardPanelNode, cardNode, seatIndex) => {},
            getSeatPosition: seatIndex => {
              return new Vec3(0, 0);
            },
            onQuitRoom: () => {},
            dealerBeginOut: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_title_menu.on(Toggle.EventType.TOGGLE, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.events.openSetPanel(this.propertyNode.props_btn_title_menu.getComponent(Toggle).isChecked);
          });
          this.propertyNode.props_btn_title_shop.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.events.openShopPanel();
          });
        }

        useProps(key, value) {
          if (key === "statue") {
            console.log('usrpro ============ ', key, value);

            if (this.props.statue === (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).DISTRIBUTE) {
              // 开始发牌
              this.beginDistributeCards();
              this.resetOutCardArea();
            } else if (this.props.statue === (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).WAITING) {
              this.clearData();
              this.playCardTip(false, true);
              this.resetOutCardArea();
            } else if (this.props.statue === (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).COUNTDOWNING) {
              this.clearData();
              this.playCardTip(false, true);
              this.resetOutCardArea(); // this.beginGameCountdown(this.props.readyCountdown.time);
            }
          } else if (key === 'readyCountdown') {
            console.log('usrpro ============ ', key, value);
            var time = this.props.readyCountdown ? this.props.readyCountdown.time : 0;
            this.beginGameCountdown(time);
          } else if (key === 'currActiveSeatIndex' && value.cur >= 0) {
            this.playCardTip(true, true);
          } else if (key === 'newCardItem' && value.cur) {
            this.removeOutlineNode();
            this.addCardItem(value.cur);
          } else if (key === 'intendOutCard' && value.cur) {
            this.addOutlineNode(value.cur);
          } else if (key === 'quitRoomAction' && value.cur) {
            this.events.onQuitRoom();
          } else if (key === 'balanceOdds') {
            this.updateBalanceOdds();
          }
        }

        bindUI() {
          this.propertyNode.props_spr_turn_up.active = false;
          this.propertyNode.props_domino_begin_cutdown.active = false;
          this.outCardAreaInitX = this.propertyNode.props_out_cards.position.x;
          this.outCardAreaInitY = this.propertyNode.props_out_cards.position.y;
        }
        /**还原出牌区域 */


        resetOutCardArea() {
          this.propertyNode.props_out_cards.setPosition(new Vec3(this.outCardAreaInitX, this.outCardAreaInitY));
        }
        /**获得发牌张数 */


        getDealNumber() {
          return this.getGameCount() * 7;
        }

        getGameCount() {
          return this.props.playerMap.filter(v => v && v.gameData.state !== (_crd && PlayerSatus === void 0 ? (_reportPossibleCrUseOfPlayerSatus({
            error: Error()
          }), PlayerSatus) : PlayerSatus).WAITING).length;
        }

        addCardUIOpacity(cardPanelNode) {
          cardPanelNode.children.forEach(v => {
            v.addComponent(UIOpacity).opacity = 255;
          });
        }
        /**开始发牌 */


        beginDistributeCards() {
          (_crd && playGameBegin === void 0 ? (_reportPossibleCrUseOfplayGameBegin({
            error: Error()
          }), playGameBegin) : playGameBegin)();
          var cardPanelNode = instantiate((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).SEND_CARD).source);
          this.addCardUIOpacity(cardPanelNode);
          this.propertyNode.props_center_cards_wrap.addChild(cardPanelNode);
          this.beginDeal(cardPanelNode, 1, this.getDealNumber(), this.getDealderSeatIndex());
        }
        /**开始发牌 */


        beginDeal(cardPanelNode, index, total, seatIndex) {
          if (!this.node.isValid || !cardPanelNode.isValid || this.props.statue === (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
            error: Error()
          }), DeskStatus) : DeskStatus).WAITING) return;

          if (index > total) {
            this.scheduleOnce(() => {
              if (this.isValid && cardPanelNode.isValid) {
                cardPanelNode.destroy();
                this.events.dealerBeginOut();
              }
            }, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).dealAnimeSpeed);
            return;
          } // const dealSpeed = 0.5 - 0.1 * this.getGameCount();


          var cardNode = cardPanelNode.getChildByName("props_spr_card_bg" + index);
          this.scheduleOnce(() => {
            if (this.isValid && cardPanelNode.isValid) {
              this.events.flyCard(cardPanelNode, cardNode, seatIndex);
              seatIndex = this.getNextSeatIndex(seatIndex);
              this.beginDeal(cardPanelNode, ++index, total, seatIndex);
            }
          }, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).dealAnimeSpeed);
        }

        getDealderSeatIndex() {
          var dealer = this.props.playerMap.find(v => v && v.gameData.isMaster);
          return dealer ? dealer.seatIndex : 0;
        }

        getNextSeatIndex(lastIndex, count) {
          if (count === void 0) {
            count = 0;
          }

          if (count > (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).seatNumber || !this.props || !this.node.isValid) return -1;
          var nextIndex = lastIndex + 1 >= (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).seatNumber ? 0 : lastIndex + 1;
          var player = this.props.playerMap[nextIndex];

          if (player && player.gameData.state === (_crd && PlayerSatus === void 0 ? (_reportPossibleCrUseOfPlayerSatus({
            error: Error()
          }), PlayerSatus) : PlayerSatus).READY) {
            return player.seatIndex;
          }

          return this.getNextSeatIndex(nextIndex, ++count);
        }
        /**飞牌 */


        flyCard(cardPanelNode, cardNode, endPostiton, seatIndex) {
          if (!cardPanelNode.isValid || !endPostiton) return;
          (_crd && playFapai === void 0 ? (_reportPossibleCrUseOfplayFapai({
            error: Error()
          }), playFapai) : playFapai)();
          cardNode.setSiblingIndex(100);
          var endPos = cardPanelNode.getComponent(UITransform).convertToWorldSpaceAR(endPostiton);
          var duration = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).dealAnimeSpeed;
          seatIndex > 0 && tween(cardNode.getComponent(UIOpacity)).to(duration, {
            opacity: 0
          }).start();
          tween(cardNode).to(duration, {
            worldPosition: endPos
          }).call(() => {
            cardNode.isValid && cardNode.destroy();
          }).start();
        }
        /**获取中央的出牌队列的节点 */


        getOutCardWrapNode() {
          return this.propertyNode.props_out_cards;
        }

        getPlayerWrapNode() {
          return this.propertyNode.props_player_wrap;
        }
        /**出牌提示 */


        playCardTip(active, isAnima) {
          this.propertyNode.props_spr_turn_up.active = active;

          if (!active) {
            return;
          }

          var seatIndex = this.props.currActiveSeatIndex;
          var angle = 0;

          switch (seatIndex) {
            case 0:
              angle = 180;
              break;

            case 1:
              angle = 90;
              break;

            case 2:
              angle = 0;
              break;

            case 3:
              angle = 270;
              break;
          }

          if (isAnima) {
            tween(this.propertyNode.props_spr_turn_up).to(0.3, {
              angle
            }).start();
          } else {
            this.propertyNode.props_spr_turn_up.angle = angle;
          }
        }

        addCardItem(cardItem) {
          this.addCard(cardItem, cardItem.azimuth === 0 ? 1 : -1, false, !cardItem.isReconnect);
        }
        /**
         * 添加牌
         * @param cardItem 
         * @param symbol 符号，-1表示右边，1表示左边 
         * @param isHide 是否隐藏
         * @param isOutline 是否轮廓
         */


        addCard(cardItem, symbol, isOutline, isHide) {
          if (isHide === void 0) {
            isHide = true;
          }

          var lastViews = symbol < 0 ? this.rightViews : this.leftViews;
          var lastView = symbol < 0 ? this.rightLastCardView : this.leftLastCardView;
          var x = 0;
          var y = 0;
          var cardPosition = cardItem.upFace === cardItem.downFace ? (_crd && CardPosition === void 0 ? (_reportPossibleCrUseOfCardPosition({
            error: Error()
          }), CardPosition) : CardPosition).VERTICAL : (_crd && CardPosition === void 0 ? (_reportPossibleCrUseOfCardPosition({
            error: Error()
          }), CardPosition) : CardPosition).HORIZONTAL;
          var cellCount = 0; // 纵向结束格子数

          var vericalEndCellCount = 0; // 第二行格子数

          var secondLineCellCount = 0; // 是否拐弯处

          var isBend = false;

          if (this.middleCardView) {
            // 加上中间的一个格子
            cellCount = this.calCellCount(lastViews, 0); // 这里开始拐弯了，拐弯就必须是纵向的

            if (cellCount >= 8 && cellCount <= 11) {
              cardPosition = (_crd && CardPosition === void 0 ? (_reportPossibleCrUseOfCardPosition({
                error: Error()
              }), CardPosition) : CardPosition).VERTICAL;
              isBend = true; // 第8个格子的时候减去前一个格子的一半才能对齐

              if (cellCount === 8) {
                y += lastView.getOriginalWidth() / 2 * symbol;
              } else if (cellCount >= 9) {
                // 最后两个连续是纵向，那么下一个就强制横向
                if (this.isVericalEnd(lastViews)) {
                  cardPosition = (_crd && CardPosition === void 0 ? (_reportPossibleCrUseOfCardPosition({
                    error: Error()
                  }), CardPosition) : CardPosition).HORIZONTAL;
                } // 计算出纵向结束的时到之前的格子数


                vericalEndCellCount = this.getVericalEndCellCount(lastViews);
              } // 第二行横向格子超过19个了，就开始又拐弯了

            } else if (cellCount > 11) {
              // 从第一个拐弯开始时的格子数，到了19个以上又开始拐弯了
              secondLineCellCount = this.calCellCount(lastViews, this.getVericalEndIndex(lastViews));

              if (secondLineCellCount === 18) {
                vericalEndCellCount = this.getVericalEndCellCount(lastViews);
              } // 第二行19个格子减去前一个格子的一半，同时前一个格子是横向的


              if (lastView.isHorizontal() && secondLineCellCount === 19) {
                y += lastView.getOriginalWidth() / 2 * symbol;
              } // 拐弯必须是纵向的


              if (secondLineCellCount >= 19) {
                isBend = true;
                cardPosition = (_crd && CardPosition === void 0 ? (_reportPossibleCrUseOfCardPosition({
                  error: Error()
                }), CardPosition) : CardPosition).VERTICAL;
              } else if (cellCount >= 29 && secondLineCellCount >= 1) {
                // 第二个拐弯已经完成了，因此 secondLineCellCount 从1开始了
                // 第二行拐弯的第一个必须横向
                if (secondLineCellCount === 1) {
                  isBend = true;
                  cardPosition = (_crd && CardPosition === void 0 ? (_reportPossibleCrUseOfCardPosition({
                    error: Error()
                  }), CardPosition) : CardPosition).HORIZONTAL;
                  vericalEndCellCount = this.getVericalEndCellCount(lastViews);
                }
              }
            } // 7个格子的位置，同时是横向的，就强制纵向


            if (cardPosition === (_crd && CardPosition === void 0 ? (_reportPossibleCrUseOfCardPosition({
              error: Error()
            }), CardPosition) : CardPosition).VERTICAL && (cellCount === 7 || secondLineCellCount === 17)) {
              cardPosition = (_crd && CardPosition === void 0 ? (_reportPossibleCrUseOfCardPosition({
                error: Error()
              }), CardPosition) : CardPosition).HORIZONTAL;
            }
          }

          var poseAzimuth = cardItem.azimuth;
          var prefabPath = (_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).CARD;
          var cardViewModel = new (_crd && CardViewModel === void 0 ? (_reportPossibleCrUseOfCardViewModel({
            error: Error()
          }), CardViewModel) : CardViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile(prefabPath).source).setInitHide(false).appendTo(this.propertyNode.props_out_cards).setProps({
            isOutline: isOutline,
            poseAzimuth: poseAzimuth,
            upFace: cardItem.upFace,
            downFace: cardItem.downFace,
            alignValue: cardItem.alignValue,
            value: cardItem.value,
            type: 1,
            position: cardPosition,
            isShow: true,
            isBright: true
          }).connect();

          if (this.middleCardView) {
            var cardWidth = cardViewModel.getWidth();

            if (lastView) {
              var laseWidth = lastView.getWidth();
              var xOffset = -(laseWidth / 2 + cardWidth / 2) * symbol; // 拐弯之后的y与纵向对齐

              if (vericalEndCellCount > 0 && cellCount >= vericalEndCellCount) {
                // 纵向的一半的一半
                y += lastView.getOriginalHeight() / 2 / 2 * symbol;
              } // console.log(`cellcount ${cellCount} , vericalEndCellCount ${vericalEndCellCount} secondLineCellCount : ${secondLineCellCount}`)
              // 右边10格子之后，从右往左走


              if (cellCount >= 10 && (cellCount <= 29 || secondLineCellCount >= 18)) {
                xOffset = -xOffset;

                if (cardViewModel.isHorizontal()) {
                  // 方位取反，用于摆放位置
                  poseAzimuth = poseAzimuth === 0 ? 1 : 0;
                }
              }

              x = lastView.comp.node.position.x + xOffset;
              y += lastView.comp.node.position.y;

              if (lastView.isHorizontal()) {
                if (cellCount === 9) {
                  // 右边是往下走，因此设置为负数
                  y += (laseWidth / 2 + cardWidth / 2) * symbol; // 第一行纵向是靠左

                  x += cardWidth * symbol;
                } else if (secondLineCellCount === 20) {
                  // 右边是往下走，因此设置为负数
                  y += (laseWidth / 2 + cardWidth / 2) * symbol; // 第二行纵向是靠右了

                  x += -cardWidth * symbol;
                }
              }

              var outCardAreaY = 0;

              if (cardViewModel.isVertical()) {
                // 第一个纵向时，出牌区域要移动
                outCardAreaY = 15;

                if (lastView.isVertical()) {
                  y += lastView.getOriginalHeight() * symbol;
                  x = lastView.comp.node.position.x; // 第二个纵向时，出牌区域要移动得多点

                  outCardAreaY = 25;
                }
              } else if (lastView.isVertical()) {
                // 纵向之后的横向也要移动一点点
                outCardAreaY = 15;
              }

              if (!isOutline && isBend && outCardAreaY > 0 && cellCount >= 8) {
                // 左边是往下移动，因此是负数，右边是往上移动，因此是正数
                this.moveOutCardArea(-outCardAreaY * symbol);
              }
            } else {
              x = -(cardWidth / 2 + this.middleCardView.getWidth() / 2) * symbol;
            }
          }

          cardViewModel.setProps({
            poseAzimuth: poseAzimuth
          });
          cardViewModel.comp.horizontal();
          isHide && cardViewModel.setOpacity(false);
          cardViewModel.comp.node.setPosition(new Vec3(x, y));

          if (!isOutline) {
            cardViewModel.symbol = symbol;
            this.lastCardView = cardViewModel;

            if (!this.middleCardView) {
              this.middleCardView = cardViewModel;
            } else if (symbol === 1) {
              this.leftLastCardView = cardViewModel;
              this.leftViews.push(cardViewModel);
            } else if (symbol === -1) {
              this.rightLastCardView = cardViewModel;
              this.rightViews.push(cardViewModel);
            }
          } else {
            if (symbol === 1) {
              this.leftOutlineNode = cardViewModel.comp.node;
            } else {
              this.rightOutlineNode = cardViewModel.comp.node;
            }
          }
        }
        /**
         * 添加轮廓
         * @param intendOutCard 准备要出的牌
         */


        addOutlineNode(intendOutCard) {
          this.removeOutlineNode();

          if (intendOutCard) {
            intendOutCard.azimuth = 0;

            if (this.isAddOutline(this.props.leftOutCardItem, intendOutCard)) {
              // 轮廓节点把值搞成负数
              var cardItem = (_crd && genCardItem === void 0 ? (_reportPossibleCrUseOfgenCardItem({
                error: Error()
              }), genCardItem) : genCardItem)(intendOutCard.value);
              cardItem.upFace -= 10;
              cardItem.downFace -= 10;
              this.addCard(cardItem, 1, true, false);
            }

            intendOutCard.azimuth = 1;

            if (this.isAddOutline(this.props.rightOutCardItem, intendOutCard)) {
              // 轮廓节点把值搞成负数
              var _cardItem = (_crd && genCardItem === void 0 ? (_reportPossibleCrUseOfgenCardItem({
                error: Error()
              }), genCardItem) : genCardItem)(intendOutCard.value);

              _cardItem.upFace -= 10;
              _cardItem.downFace -= 10;
              this.addCard(_cardItem, -1, true, false);
            }
          }
        }

        isAddOutline(cardItems, intendOutCard) {
          if (this.props.outCardItem.length === 0) {
            return false;
          }

          var composeCardValue;

          if (cardItems.length === 0) {
            composeCardValue = intendOutCard.azimuth === 0 ? this.props.outCardItem[0].upFace : this.props.outCardItem[0].downFace;
          } else {
            var composeCardItem = cardItems[cardItems.length - 1];
            composeCardValue = (_crd && getComposeCardValue === void 0 ? (_reportPossibleCrUseOfgetComposeCardValue({
              error: Error()
            }), getComposeCardValue) : getComposeCardValue)(composeCardItem);
          } // 最后一张牌与准备出的牌作比较，如果能够街上


          return composeCardValue === intendOutCard.upFace || composeCardValue === intendOutCard.downFace;
        }
        /**删除轮廓节点 */


        removeOutlineNode() {
          this.leftOutlineNode && this.leftOutlineNode.destroy();
          this.rightOutlineNode && this.rightOutlineNode.destroy();
          this.leftOutlineNode = undefined;
          this.rightOutlineNode = undefined;
        }
        /**移动出牌区域 */


        moveOutCardArea(y, isAnima) {
          if (isAnima === void 0) {
            isAnima = true;
          }

          var position = this.propertyNode.props_out_cards.position;
          var endPostiton = new Vec3(position.x, position.y + y);

          if (isAnima) {
            tween(this.propertyNode.props_out_cards).to(0.3, {
              position: endPostiton
            }).start();
          } else {
            this.propertyNode.props_out_cards.setPosition(endPostiton);
          }
        }
        /**
         * 计算格子数
         * @param views 
         * @param startIndex 起始位置
         * @param endIndex 结束位置
         * @returns 
         */


        calCellCount(views, startIndex, endIndex) {
          if (endIndex === void 0) {
            endIndex = 0;
          }

          if (startIndex < 0) return 0;
          endIndex = endIndex <= 0 ? views.length - 1 : endIndex;
          endIndex = endIndex >= views.length ? views.length - 1 : endIndex;
          var count = 0;

          for (var i = startIndex; i <= endIndex; i++) {
            count += views[i].getCellCount();
          }

          return count;
        }
        /**纵向结束时的格子数 */


        getVericalEndCellCount(views) {
          var endIndex = this.getVericalEndIndex(views);
          if (endIndex < 0) return 0;
          return this.calCellCount(views, 0, endIndex);
        }
        /**纵向结束索引位置 */


        getVericalEndIndex(views) {
          for (var i = views.length - 1; i >= 0; i--) {
            var element = views[i];

            if (element.isVertical() && i > 0 && views[i - 1].isVertical()) {
              return i;
            }
          }

          return -1;
        }
        /**是否纵向结束点 */


        isVericalEnd(views) {
          return views[views.length - 1].isVertical() && views[views.length - 2].isVertical();
        }
        /**
         * 飞金币
         * @param startIndex 开始位置
         * @param endIndex 结束位置
         */


        flyGold(startIndex, endIndex, done) {
          var count = 0;
          var length = 6;
          (_crd && playCoin === void 0 ? (_reportPossibleCrUseOfplayCoin({
            error: Error()
          }), playCoin) : playCoin)();

          for (var i = 1; i <= length; i++) {
            this.scheduleOnce(() => {
              if (this.node && this.node.isValid) {
                var transform = this.node.getComponent(UITransform);
                var tweenNode = instantiate(this.propertyNode.props_spr_gold);
                this.node.addChild(tweenNode);
                tweenNode.active = true;
                this.playGoldTween;
                var startPos = transform.convertToWorldSpaceAR(this.events.getSeatPosition(startIndex));
                var endPos = transform.convertToNodeSpaceAR(transform.convertToWorldSpaceAR(this.events.getSeatPosition(endIndex)));
                tweenNode.setWorldPosition(startPos);
                this.playGoldTween(tweenNode, endPos, 1, () => {
                  count++;

                  if (count >= length) {
                    done();
                  }
                });
              }
            }, 0.1 * i);
          }
        }

        getMidPoint(fromPos, toPos) {
          var centerX = fromPos.x + (toPos.x - fromPos.x) / 2;
          var centerY = fromPos.y + (toPos.y - fromPos.y) / 2; //取离中点指定距离点

          return new Vec3(centerX, centerY);
        }

        getMidVerticalPoint(fromPos, toPos, offsetAngin) {
          if (offsetAngin === void 0) {
            offsetAngin = 0;
          }

          //得到中点C的坐标值
          var midPoint = this.getMidPoint(fromPos, toPos); // 计算∠BAF的两个点的角度

          var bafAngle = this.calAngle(fromPos, toPos); // ∠BAF=∠ECA的角度，那么90-∠BAF就是∠DCE的角度

          var angle = 90 - this.calAngle(fromPos, toPos); // 把偏移的角度换算成弧度

          var radian = misc.degreesToRadians(offsetAngin); // 计算出AB的中点AC的距离

          var zhongdian = toPos.clone().subtract(fromPos).length() / 2; // 三角函数公式计算出CD的距离，tan = 对边/邻边，那么邻边知道了，tanx角度也知道了，就可以计算出CD的值

          var cd = zhongdian * Math.tan(radian); // 把∠DCE的角度换算为弧度

          radian = misc.degreesToRadians(angle); // 根据三角函数公式 sin = 对边/斜边，那么斜边知道了，sinx角度值也知道就是angle，就可以计算出DG的值

          var dg = cd * Math.sin(radian);
          var y = midPoint.y + dg; // 根据三角函数公式 cos = 邻边/斜边，那么斜边知道了，cosx角度值也知道就是angle，就可以计算出GC的值

          var gc = cd * Math.cos(radian);
          var x = midPoint.x - gc;
          var midDisPoint = new Vec3(x, y);
          return midDisPoint;
        }

        calAngle(fromPos, toPos) {
          return Math.atan2(toPos.y - fromPos.y, toPos.x - fromPos.x) * 180 / Math.PI;
        }
        /**飞星星抛物线动画 */


        playGoldTween(tweenNode, endPos, playTime, callBack) {
          var startPos = tweenNode.position;
          var startAngle = tweenNode.eulerAngles;
          var fruitTween = tween(startPos);
          var mid = this.getMidVerticalPoint(startPos, endPos, 40);
          var mixY = mid.y;
          var maxY = mid.y;
          var mixX = mid.x;
          var maxX = mid.x;

          var progressX = function progressX(start, end, current, t) {
            //@ts-ignore
            current = bezier(start, mixX, maxX, end, t);
            return current;
          };

          var progressY = function progressY(start, end, current, t) {
            //@ts-ignore
            current = bezier(start, mixY, maxY, end, t);
            return current;
          };

          fruitTween.parallel(tween().to(playTime, {
            x: endPos.x
          }, {
            easing: 'quadOutIn',
            progress: progressX,
            onUpdate: () => {
              tweenNode.isValid && tweenNode.setPosition(startPos);
            }
          }), tween().to(playTime, {
            y: endPos.y
          }, {
            easing: 'quadOutIn',
            progress: progressY,
            onUpdate: () => {
              tweenNode.isValid && tweenNode.setPosition(startPos);
            }
          })).call(() => {
            tweenNode.destroy();
            callBack();
          }).start(); // tween(startAngle).to(playTime, { z: 360 }, {
          // 	onUpdate: () => {
          // 		if (tweenNode.isValid) {
          // 			tweenNode.eulerAngles = startAngle;
          // 		}
          // 	}
          // }).call(() => callBack()).start();
        }
        /**出牌飞牌 */


        outFlyCard(startPos) {
          startPos = this.propertyNode.props_out_cards.getComponent(UITransform).convertToNodeSpaceAR(startPos);
          var cardItem = this.props.newCardItem;
          var cardViewModel = new (_crd && CardViewModel === void 0 ? (_reportPossibleCrUseOfCardViewModel({
            error: Error()
          }), CardViewModel) : CardViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).CARD).source).setInitHide(false).appendTo(this.propertyNode.props_out_cards).setProps({
            upFace: cardItem.upFace,
            downFace: cardItem.downFace,
            alignValue: cardItem.alignValue,
            value: cardItem.value,
            position: (_crd && CardPosition === void 0 ? (_reportPossibleCrUseOfCardPosition({
              error: Error()
            }), CardPosition) : CardPosition).VERTICAL,
            isShow: true,
            isBright: true,
            isDisable: true
          }).connect();
          cardViewModel.comp.node.setPosition(startPos);
          var lastCard = this.lastCardView;
          var endNode = lastCard.comp.node;
          var speed = 0.5;
          tween(cardViewModel.comp.node).to(speed, {
            position: endNode.position,
            scale: endNode.scale,
            angle: endNode.angle
          }).call(() => {
            lastCard.comp && lastCard.comp.isValid && lastCard.setOpacity(true);
            cardViewModel.comp && cardViewModel.comp.isValid && cardViewModel.unMount();
          }).start();
        }
        /**清理数据 */


        clearData() {
          this.middleCardView && this.middleCardView.unMount();
          this.middleCardView = undefined;
          this.leftLastCardView = undefined;
          this.rightLastCardView = undefined;
          this.lastCardView = undefined;
          this.leftViews.forEach(v => v.unMount());
          this.leftViews = [];
          this.rightViews.forEach(v => v.unMount());
          this.rightViews = [];
          this.leftOutlineNode = undefined;
          this.rightOutlineNode = undefined;
          this.propertyNode.props_center_cards_wrap.removeAllChildren();
          this.propertyNode.props_out_cards.removeAllChildren();
        }

        getBeginGameCountdownCount() {
          return this.beginGameCountdownCount;
        }

        setBeginGameCountdownCount(value) {// this.beginGameCountdownCount = value;
          // console.log('setBeginGameCountdownCount =============== ', this.beginGameCountdownCount)
        }

        destroyCallBack() {
          this.beginGameCountdownT && window.clearInterval(this.beginGameCountdownT);
        }

        beginGameCountdown(value) {
          this.beginGameCountdownCount = value;
          this.beginGameCountdownT && window.clearInterval(this.beginGameCountdownT);
          this.propertyNode.props_domino_begin_cutdown.active = false;
          console.log('beginGameCountdown =============== ', this.beginGameCountdownCount, value);

          if (this.beginGameCountdownCount > 0) {
            this.propertyNode.props_domino_begin_cutdown.active = true;
            this.updateGeginGameCountdownLabel(this.beginGameCountdownCount);
            this.beginGameCountdownT = window.setInterval(() => {
              if (this.node && this.node.isValid) {
                this.updateGeginGameCountdownLabel(--this.beginGameCountdownCount);

                if (this.beginGameCountdownCount <= 0) {
                  this.propertyNode.props_domino_begin_cutdown.active = false;
                  window.clearInterval(this.beginGameCountdownT);
                }
              } else {
                window.clearInterval(this.beginGameCountdownT);
              }
            }, 1000);
          }
        }

        updateGeginGameCountdownLabel(count) {
          this.propertyNode.props_label_cutdown_num.string = count < 10 ? '0' + count : count + '';
        }

        updateBalanceOdds() {
          if (this.props.balanceOdds < 1) return;
          this.middleCardView && this.middleCardView.comp.setProps({
            isBright: false
          });
          this.leftViews.forEach(v => v.comp.setProps({
            isBright: false
          }));
          this.rightViews.forEach(v => v.comp.setProps({
            isBright: false
          }));

          if (this.props.balanceOdds > 1) {
            this.lastCardView.comp.setProps({
              isBright: true
            });
            var recentCardView;

            if (this.lastCardView.symbol === 1) {
              var length = this.leftViews.length - 2;
              recentCardView = length < 0 ? this.middleCardView : this.leftViews[length];
            } else {
              var _length = this.rightViews.length - 2;

              recentCardView = _length < 0 ? this.middleCardView : this.rightViews[_length];
            }

            recentCardView.comp.setProps({
              isBright: true
            });
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8de4e4d97b6478f5c88ed09f63e09928df8bb6fe.js.map