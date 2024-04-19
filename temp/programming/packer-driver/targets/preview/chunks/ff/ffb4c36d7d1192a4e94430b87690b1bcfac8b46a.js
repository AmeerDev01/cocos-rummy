System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Sprite, BaseComponent, getNodeByNameDeep, global, SpriteFramePathDefine, sourceManageSelector, numToString, config, _dec, _class, _crd, ccclass, property, Bandar_jackpot;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJackpotWin(extras) {
    _reporterNs.report("JackpotWin", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteFramePathDefine(extras) {
    _reporterNs.report("SpriteFramePathDefine", "../sourceDefine/spriteDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSelector(extras) {
    _reporterNs.report("sourceManageSelector", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnumToString(extras) {
    _reporterNs.report("numToString", "./Bandar_pot", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      getNodeByNameDeep = _unresolved_3.getNodeByNameDeep;
    }, function (_unresolved_4) {
      global = _unresolved_4.global;
    }, function (_unresolved_5) {
      SpriteFramePathDefine = _unresolved_5.SpriteFramePathDefine;
    }, function (_unresolved_6) {
      sourceManageSelector = _unresolved_6.sourceManageSelector;
    }, function (_unresolved_7) {
      numToString = _unresolved_7.numToString;
    }, function (_unresolved_8) {
      config = _unresolved_8.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2e740CcoCRFaJlKPP+18vsD", "Bandar_jackpot", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'UITransform', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bandar_jackpot", Bandar_jackpot = (_dec = ccclass('Bandar_jackpot'), _dec(_class = class Bandar_jackpot extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_label_jackpot_num: new Label(),
            props_jackpot_off: new Node(),
            props_label_last_gold: new Label(),
            props_label_last_time: new Label(),
            props_content: new Node(),
            props_spr_winer1: new Node(),
            props_all_card: new Node(),
            props_card: new Node()
          };
          this.props = {
            jackpot: 12345678900,
            trigJackpot: 234567,
            jackpotWin: [],
            jackpotCard: [13, 5, 9, 16]
          };
          this.events = {
            onClosePanel: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_jackpot_off.on(Node.EventType.TOUCH_END, () => {
            this.events.onClosePanel();
          });
        }

        useProps(key, value) {// if(key==="trigJackpot"){
          //     this.propertyNode.props_label_last_gold.string=value.cur.formatAmountWithCommas()
          // }
        }
        /**创建winer */


        createWiner() {
          this.propertyNode.props_content.removeAllChildren();
          this.props.jackpotWin.forEach((item, index) => {
            var winer = instantiate(this.propertyNode.props_spr_winer1); //    let uiTransform=winer.getComponent(UITransform)

            winer.setPosition(0, -38 - index * 80); // winer.setWorldPosition(uiTransform.convertToWorldSpaceAR(new Vec3(0,0-index*80)));

            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("label_first_num", winer).getComponent(Label).string = index + 1 + ""; // this.getHead(item.icon, getNodeByNameDeep("spr_avatar",winer).getComponent(Sprite));

            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("label_name", winer).getComponent(Label).string = item.name;
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("label_win", winer).getComponent(Label).string = item.winGold.formatAmountWithLetter();
            this.propertyNode.props_content.addChild(winer);
          });
        }
        /**获取头像 */


        getHead(icon, sp) {
          return (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
            error: Error()
          }), global) : global).loadHeadSprite(icon, sp);
        }
        /** 更新牌资源 */


        createJackpotCard() {
          this.propertyNode.props_all_card.removeAllChildren();
          var index = 0;
          this.props.jackpotCard.forEach((item, index) => {
            var itemCard = this.getCard(item);
            var card = instantiate(this.propertyNode.props_card);
            card.setPosition(-60 + index * 40, 0);
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("spr_card_up", card).getComponent(Sprite).spriteFrame = this.getSpriteFrame(itemCard.up);
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("spr_card_down", card).getComponent(Sprite).spriteFrame = this.getSpriteFrame(itemCard.down);
            this.propertyNode.props_all_card.addChild(card);
          });
        }

        toggleCallback(event, customEventData) {}
        /**获取每张牌的组型 */


        getCard(cardT) {
          return (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).cardType[cardT];
        }

        bindUI() {
          var num = 234567;
          this.propertyNode.props_label_jackpot_num.string = (_crd && numToString === void 0 ? (_reportPossibleCrUseOfnumToString({
            error: Error()
          }), numToString) : numToString)(this.props.jackpot, 14);
          this.createJackpotCard();
          this.propertyNode.props_label_last_time.string = this.format(new Date());
          this.propertyNode.props_label_last_gold.string = num.formatAmountWithCommas(); //测试

          this.createWiner();
        }

        getSpriteFrame(result) {
          var fileName = '';

          if (result === 0) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDAR_POKER0;
          } else if (result === 1) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDAR_POKER1;
          } else if (result === 2) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDAR_POKER2;
          } else if (result === 3) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDAR_POKER3;
          } else if (result === 4) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDAR_POKER4;
          } else if (result === 5) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDAR_POKER5;
          } else if (result === 6) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDAR_POKER6;
          }

          return (_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile(fileName).source;
        }
        /**获取时间 */


        format(t) {
          var y = t.getFullYear();
          var m = t.getMonth() + 1;
          m = m < 10 ? '0' + m : m;
          var d = t.getDate();
          d = d < 10 ? '0' + d : d;
          var h = t.getHours();
          var minute = t.getMinutes();
          minute = minute < 10 ? '0' + minute : minute;
          var second = t.getSeconds();
          second = second < 10 ? '0' + second : second;
          var time = d + '/' + m + '/' + y + ' ' + h + ':' + minute + ':' + second;
          return time;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ffb4c36d7d1192a4e94430b87690b1bcfac8b46a.js.map