System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, BaseComponent, DeskStatus, _dec, _class, _crd, ccclass, property, Domino_Record;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardItem(extras) {
    _reporterNs.report("CardItem", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeskStatus(extras) {
    _reporterNs.report("DeskStatus", "../type", _context.meta, extras);
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
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      DeskStatus = _unresolved_3.DeskStatus;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2a67c3hqhdJIpRe0HygWGJK", "Domino_Record", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Domino_Record", Domino_Record = (_dec = ccclass('Domino_Record'), _dec(_class = class Domino_Record extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_spr_record_bg: new Node()
          };
          this.props = {
            deskStatus: null,
            outCardItem: [],
            cardIList: []
          };
          this.events = {};
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === 'outCardItem') {
            this.calNumber();
          } else if (key === 'cardIList') {
            this.calNumber();
          } else if (key === 'deskStatus') {
            this.propertyNode.props_spr_record_bg.active = (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).PLAYING === value.cur;
          }
        }

        bindUI() {
          this.propertyNode.props_spr_record_bg.active = false;
        }

        addNumber(arr, cardItem) {
          cardItem.forEach(v => {
            // 相同的只算一张牌
            if (v.upFace === v.downFace) {
              arr[v.upFace]++;
            } else {
              arr[v.upFace]++;
              arr[v.downFace]++;
            }
          });
        }

        calNumber() {
          let arr = [0, 0, 0, 0, 0, 0, 0];
          this.addNumber(arr, this.props.outCardItem);
          this.addNumber(arr, this.props.cardIList);
          this.propertyNode.props_spr_record_bg.children.forEach((v, i) => {
            v.getComponent(Label).string = 7 - arr[i] + '';
          });
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=25af57160d5740fb2e1b77dbfd0aa72f4bc54691.js.map