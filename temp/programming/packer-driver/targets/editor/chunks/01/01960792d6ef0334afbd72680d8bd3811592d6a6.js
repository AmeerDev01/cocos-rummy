System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Node, Sprite, _decorator, instantiate, BaseComponent, CardPosition, genCardItem, CardViewModel, sourceManageSeletor, PrefabPathDefine, _dec, _class, _crd, ccclass, property, Domino_BalancePanel;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBalancePlayer(extras) {
    _reporterNs.report("BalancePlayer", "../type", _context.meta, extras);
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

  function _reportPossibleCrUseOfCardViewModel(extras) {
    _reporterNs.report("CardViewModel", "../viewModel/CardViewModel", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      CardPosition = _unresolved_3.CardPosition;
      genCardItem = _unresolved_3.genCardItem;
    }, function (_unresolved_4) {
      CardViewModel = _unresolved_4.default;
    }, function (_unresolved_5) {
      sourceManageSeletor = _unresolved_5.sourceManageSeletor;
    }, function (_unresolved_6) {
      PrefabPathDefine = _unresolved_6.PrefabPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8548cc5bl9EMKlO1jryMGzt", "Domino_BalancePanel", undefined);

      __checkObsolete__(['Label', 'Node', 'Sprite', '_decorator', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Domino_BalancePanel", Domino_BalancePanel = (_dec = ccclass('Domino_BalancePanel'), _dec(_class = class Domino_BalancePanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.count = 0;
          this.propertyNode = {
            props_btn_quit: new Node(),
            props_btn_continue: new Node(),
            props_label_times: new Label(),
            props_players: new Node(),
            props_player_item: new Node()
          };
          this.views = [];
          this.props = {
            balancePlayers: null
          };
          this.events = {
            close: () => {},
            onQuitRoom: () => {},
            onReady: () => {}
          };
          this.t = 0;
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_quit.on(Node.EventType.TOUCH_END, () => {
            this.clearCountdown();
            this.events.onQuitRoom();
          });
          this.propertyNode.props_btn_continue.on(Node.EventType.TOUCH_END, () => {
            this.clearCountdown();
            this.events.close();
            this.events.onReady(false);
          });
        }

        startCountdown(count) {
          this.count = count;
          this.node && this.node.isValid && (this.propertyNode.props_label_times.string = this.count + "s");
          this.t = window.setInterval(() => {
            this.node && this.node.isValid && (this.propertyNode.props_label_times.string = --this.count + "s");

            if (this.count <= 0) {
              window.clearInterval(this.t);
              this.events.close();
              this.events.onReady(true);
            }
          }, 1000);
        }

        clearCountdown() {
          this.t && window.clearInterval(this.t);
        }

        destroyCallBack() {
          this.clearCountdown();
          this.views.forEach(v => v.unMount());
        }

        initPlayer() {
          this.propertyNode.props_players.removeAllChildren();
          this.props.balancePlayers.forEach(v => this.genPlayerItem(v));
          this.startCountdown(5);
        }

        getOddsStr(odds) {
          switch (odds) {
            case 1:
              return 'SINGLE';

            case 2:
              return 'DOUBLE';

            case 3:
              return 'TRIPLE';

            case 4:
              return 'QUARTET';

            case 5:
              return 'QUINTET';
          }

          return '';
        }

        genPlayerItem(balancePlayer) {
          const playerItem = instantiate(this.propertyNode.props_player_item);
          this.propertyNode.props_players.addChild(playerItem);
          playerItem.getChildByName('props_label_name').getComponent(Label).string = balancePlayer.nickName;
          playerItem.getChildByName('props_label_id').getComponent(Label).string = "ID:" + balancePlayer.memberId;
          playerItem.getChildByName('props_label_odds').getComponent(Label).string = this.getOddsStr(balancePlayer.odds);
          playerItem.getChildByName('props_label_bet').getComponent(Label).string = balancePlayer.bet.formatAmountWithLetter();
          playerItem.getChildByName('props_label_count').getComponent(Label).string = (balancePlayer.count > 0 ? '+' : '') + balancePlayer.count.formatAmountWithLetter();
          const headSprite = playerItem.getChildByName('props_btn_mine_head').getComponent(Sprite); // global.loadHeadSprite(balancePlayer.icon, headSprite);

          const cards = playerItem.getChildByName('props_layout_cards');
          balancePlayer.cards.forEach(v => {
            this.genCardItemViewModel((_crd && genCardItem === void 0 ? (_reportPossibleCrUseOfgenCardItem({
              error: Error()
            }), genCardItem) : genCardItem)(v), cards);
          });
        }

        genCardItemViewModel(cardItem, parentNode) {
          const cardViewModel = new (_crd && CardViewModel === void 0 ? (_reportPossibleCrUseOfCardViewModel({
            error: Error()
          }), CardViewModel) : CardViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).CARD).source).appendTo(parentNode).setProps({
            upFace: cardItem.upFace,
            downFace: cardItem.downFace,
            alignValue: cardItem.alignValue,
            value: cardItem.value,
            position: (_crd && CardPosition === void 0 ? (_reportPossibleCrUseOfCardPosition({
              error: Error()
            }), CardPosition) : CardPosition).VERTICAL,
            type: 1,
            isShow: true,
            isBright: true
          }).connect();
          this.views.push(cardViewModel);
        }

        useProps(key, value) {
          key === 'balancePlayers' && this.initPlayer();
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=01960792d6ef0334afbd72680d8bd3811592d6a6.js.map