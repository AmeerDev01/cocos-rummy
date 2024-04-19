System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Node, _decorator, BaseComponent, _dec, _class, _crd, ccclass, property, Fish_RoomChoose;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ee213hsrM9K9qsXcmXvo4hj", "Fish_RoomChoose", undefined);

      __checkObsolete__(['Label', 'Node', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Fish_RoomChoose", Fish_RoomChoose = (_dec = ccclass('Fish_RoomChoose'), _dec(_class = class Fish_RoomChoose extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_exit_game: new Node(),
            props_room_1: new Node(),
            props_room_2: new Node(),
            props_room_3: new Node()
          };
          this.props = {
            roomInfos: []
          };
          this.events = {
            enterRoom: roomInfo => {},
            exitGame: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_exit_game.on(Node.EventType.TOUCH_END, () => {
            this.events.exitGame();
          });
        }

        useProps(key, value) {
          if (key === 'roomInfos') {
            this.initRoomInfo();
          }
        }

        initRoomInfo() {
          for (let i = 0; i < this.props.roomInfos.length; i++) {
            const roomInfo = this.props.roomInfos[i];
            const roomNode = this.node.getChildByName("props_room_" + (i + 1));
            roomNode && this.updateRoomInfo(roomNode, roomInfo);
          }
        }

        updateRoomInfo(roomNode, roomInfo) {
          roomNode.getChildByName("Label_goin").getComponent(Label).string = roomInfo.minOne + '';
          roomNode.getChildByName("Label_pao").getComponent(Label).string = roomInfo.proportionGold + '';
          roomNode.on(Node.EventType.TOUCH_END, () => {
            this.events.enterRoom(roomInfo);
          });
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f93263900fca942e429e0bd3bdd1a185da637903.js.map