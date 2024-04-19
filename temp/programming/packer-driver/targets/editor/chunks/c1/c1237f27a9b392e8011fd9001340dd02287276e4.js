System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, BaseComponent, global, playBtnClick, _dec, _class, _crd, ccclass, property, Domino_RoomChoose;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayBtnClick(extras) {
    _reporterNs.report("playBtnClick", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomInfo(extras) {
    _reporterNs.report("RoomInfo", "../type", _context.meta, extras);
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
      global = _unresolved_3.global;
    }, function (_unresolved_4) {
      playBtnClick = _unresolved_4.playBtnClick;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bab78HundlMzbd1Q+2gC0Nh", "Domino_RoomChoose", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Domino_RoomChoose", Domino_RoomChoose = (_dec = ccclass('Domino_RoomChoose'), _dec(_class = class Domino_RoomChoose extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_btn_return: new Node(),
            props_btn_begin: new Node(),
            props_btn_help: new Node(),
            props_label_gold: new Label(),
            props_btn_gold_add: new Node(),
            props_btn_room_1: new Node(),
            props_btn_room_2: new Node(),
            props_btn_room_3: new Node(),
            props_btn_room_4: new Node()
          };
          this.props = {
            roomMap: [],
            gold: -1
          };
          this.events = {
            beginHandler: () => {},
            clickRoomHandler: roomInfo => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_return.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).closeSubGame();
          });
          this.propertyNode.props_btn_begin.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.events.beginHandler();
          });
          this.propertyNode.props_btn_help.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
          });
          this.propertyNode.props_btn_gold_add.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
          });
          this.propertyNode.props_btn_room_1.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.events.clickRoomHandler(this.props.roomMap[0]);
          });
          this.propertyNode.props_btn_room_2.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.events.clickRoomHandler(this.props.roomMap[1]);
          });
          this.propertyNode.props_btn_room_3.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.events.clickRoomHandler(this.props.roomMap[2]);
          });
          this.propertyNode.props_btn_room_4.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.events.clickRoomHandler(this.props.roomMap[3]);
          });
        }

        useProps(key, value) {
          if (key === "roomMap") {
            this.props.roomMap.forEach((item, index) => this.initRoomUI(index));
          } else if (key === 'gold') {
            this.propertyNode.props_label_gold.string = this.props.gold.formatAmountWithCommas();
          }
        }

        initRoomUI(dataIndex) {
          const roomNode = this.propertyNode[`props_btn_room_${dataIndex + 1}`];
          const roomInfo = this.props.roomMap[dataIndex];
          roomNode.getChildByName("label_gold").getComponent(Label).string = roomInfo.afee.formatAmountWithCommas();
          roomNode.getChildByName("label_players").getComponent(Label).string = roomInfo.maxNum.toString();
          roomNode.getChildByName("label_gold").getComponent(Label).string = roomInfo.afee.formatAmountWithCommas();
          const range = `${roomInfo.lower.formatAmountWithCommas()}~${roomInfo.upper.formatAmountWithCommas()}`;
          roomNode.getChildByName("label_range").getComponent(Label).string = range;
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c1237f27a9b392e8011fd9001340dd02287276e4.js.map