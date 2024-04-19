System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, StoreInject, getStore, CardPosition, genCardItem, getComposeCardValue, config, showOutCard, roomChooseViewModel, _dec, _class, _crd, CardViewModel;

  function _reportPossibleCrUseOfDomino_Card(extras) {
    _reporterNs.report("Domino_Card", "../components/Domino_Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Domino_Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Domino_Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnterOption(extras) {
    _reporterNs.report("EnterOption", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardItem(extras) {
    _reporterNs.report("CardItem", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardPosition(extras) {
    _reporterNs.report("CardPosition", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgenCardItem(extras) {
    _reporterNs.report("genCardItem", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetComposeCardValue(extras) {
    _reporterNs.report("getComposeCardValue", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfshowOutCard(extras) {
    _reporterNs.report("showOutCard", "../store/action/game", _context.meta, extras);
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
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
      StoreInject = _unresolved_2.StoreInject;
    }, function (_unresolved_3) {
      getStore = _unresolved_3.getStore;
    }, function (_unresolved_4) {
      CardPosition = _unresolved_4.CardPosition;
      genCardItem = _unresolved_4.genCardItem;
      getComposeCardValue = _unresolved_4.getComposeCardValue;
    }, function (_unresolved_5) {
      config = _unresolved_5.default;
    }, function (_unresolved_6) {
      showOutCard = _unresolved_6.showOutCard;
    }, function (_unresolved_7) {
      roomChooseViewModel = _unresolved_7.roomChooseViewModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0ed02LX4EVFUKMTNbabIa2f", "CardViewModel", undefined);

      __checkObsolete__(['Node', 'UITransform', 'Vec3']);

      CardViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class CardViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Domino_Card');
          this.onComplateCallback = void 0;
          this.siblingIndex = -1;

          /**符号，-1表示右边，1表示左边  */
          this.symbol = void 0;
        }

        setSiblingIndex(siblingIndex) {
          this.siblingIndex = siblingIndex;
          return this;
        }

        setComplateCallback(onComplateCallback) {
          this.onComplateCallback = onComplateCallback;
          return this;
        }

        setInitHide(value) {
          this.comp.setInitHide(value);
          return this;
        }
        /**挂载到视图 */


        appendTo(parentNode, option) {
          var _option = Object.assign({
            effectType: null,
            effectDone: null,
            isModal: false,
            effectOption: {}
          }, option || {});

          this.parentNode = parentNode; // parentNode.insertChild(this.viewNode, this.siblingIndex)

          parentNode.addChild(this.viewNode);
          this.siblingIndex >= 0 && this.viewNode.setSiblingIndex(this.siblingIndex);

          var done = () => window.setTimeout(() => {
            this.begin();
          }, 10);

          done();
          return this;
        }

        begin() {
          this.onComplateCallback && this.onComplateCallback();
          this.setEvent({
            onOutCard: (value, azimuth) => {
              var cardItem = (_crd && genCardItem === void 0 ? (_reportPossibleCrUseOfgenCardItem({
                error: Error()
              }), genCardItem) : genCardItem)(value);
              cardItem.azimuth = azimuth;
              cardItem.seatIndex = 0;

              if ((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).isTest) {
                this.dispatch((_crd && showOutCard === void 0 ? (_reportPossibleCrUseOfshowOutCard({
                  error: Error()
                }), showOutCard) : showOutCard)(cardItem));
              } else {
                (_crd && roomChooseViewModel === void 0 ? (_reportPossibleCrUseOfroomChooseViewModel({
                  error: Error()
                }), roomChooseViewModel) : roomChooseViewModel).mainBoardViewModel.sendOutCard(cardItem);
              }
            },
            onDestroy: () => {
              this.unMount();
            }
          });
        }

        unMountCallBack() {
          this.onComplateCallback = undefined;
          this.siblingIndex = -1;
        }

        getWidth() {
          var value = this.isHorizontal() ? this.comp.getInitHeight() : this.comp.getInitWidth() - 10;
          return this.comp.props.scale * value;
        }

        getOriginalWidth() {
          return this.comp.getScaleWidth();
        }

        getOriginalHeight() {
          return this.comp.getScaleHeight();
        }

        isHorizontal() {
          return this.comp.props.position === (_crd && CardPosition === void 0 ? (_reportPossibleCrUseOfCardPosition({
            error: Error()
          }), CardPosition) : CardPosition).HORIZONTAL;
        }

        isVertical() {
          return !this.isHorizontal();
        }
        /**获得占用各自个数 */


        getCellCount() {
          return this.isHorizontal() ? 2 : 1;
        }

        getValue() {
          if (!this.comp || !this.comp.props) {
            return -1;
          }

          return this.comp.props.value;
        }

        isChecked() {
          return this.comp.props.isChecked;
        }

        isBright() {
          return this.comp.props.isBright;
        }

        setOpacity(value) {
          this.comp.setOpacity(value);
        }
        /**
         * 设置高亮
         * @param newCardItem 最新出的牌，如果为空，设置为灰
         */


        setBright(newCardItem, azimuth) {
          if (newCardItem) {
            if (newCardItem.azimuth === 2) {
              if (newCardItem.upFace === newCardItem.downFace) {
                this.compose(newCardItem.upFace);
                this.compose(newCardItem.downFace);
              } else if (azimuth === 0) {
                this.compose(newCardItem.upFace);
              } else if (azimuth === 1) {
                this.compose(newCardItem.downFace);
              }
            } else {
              var composeValue = (_crd && getComposeCardValue === void 0 ? (_reportPossibleCrUseOfgetComposeCardValue({
                error: Error()
              }), getComposeCardValue) : getComposeCardValue)(newCardItem);
              console.log("\u65B9\u4F4D: " + azimuth + ", \u724C\u65B9\u4F4D: " + newCardItem.azimuth + ", \u6BD4\u8F83\u724C\u503C: " + newCardItem.upFace + "-" + newCardItem.downFace + ", \u6BD4\u8F83\u503C: " + composeValue + ", \u724C\u503C\uFF1A " + this.comp.props.upFace + "-" + this.comp.props.downFace);
              this.compose(composeValue);
            }
          } else {
            this.comp.setProps({
              isBright: false
            });
          }
        }

        compose(composeValue) {
          if (composeValue === this.comp.props.upFace || composeValue === this.comp.props.downFace) {
            this.comp.setProps({
              isBright: true
            });
            console.log("\u6BD4\u8F83\u724C : " + composeValue + " " + this.comp.props.upFace + ",  \u663E\u793A\u7684\u724C: " + this.comp.props.upFace + "-" + this.comp.props.downFace + " ");
          }
        }

        connect() {
          this.inject({}, state => {
            return {
              deskStatus: state.deskData.statue,
              newCardItem: state.deskData.newCardItem
            };
          });
          return this;
        }

      }) || _class);

      _export("default", CardViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=812f3212156d62d38b84f514600b9601caefbfab.js.map