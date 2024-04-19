System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Prefab, Node, instantiate, Label, Crash_ViewBase, RoomDrawingRecords, Crash_NetMsgDispatcher, Crash_DataManager, ProtocolCode, Crash_RecordItem, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Crash_Game_teenLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCrash_ViewBase(extras) {
    _reporterNs.report("Crash_ViewBase", "../BaseView/Crash_ViewBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomDrawingRecords(extras) {
    _reporterNs.report("RoomDrawingRecords", "../net/protocol/WsProtocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_NetMsgDispatcher(extras) {
    _reporterNs.report("Crash_NetMsgDispatcher", "../net/Crash_NetMsgDispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_DataManager(extras) {
    _reporterNs.report("Crash_DataManager", "../manager/Crash_DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocolCode(extras) {
    _reporterNs.report("ProtocolCode", "../net/protocol/ProtocolDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_RecordItem(extras) {
    _reporterNs.report("Crash_RecordItem", "./Crash_RecordItem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Prefab = _cc.Prefab;
      Node = _cc.Node;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      Crash_ViewBase = _unresolved_2.Crash_ViewBase;
    }, function (_unresolved_3) {
      RoomDrawingRecords = _unresolved_3.RoomDrawingRecords;
    }, function (_unresolved_4) {
      Crash_NetMsgDispatcher = _unresolved_4.default;
    }, function (_unresolved_5) {
      Crash_DataManager = _unresolved_5.Crash_DataManager;
    }, function (_unresolved_6) {
      ProtocolCode = _unresolved_6.ProtocolCode;
    }, function (_unresolved_7) {
      Crash_RecordItem = _unresolved_7.Crash_RecordItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "42280c08eRNgI2rYVKAiiPn", "Crash_Game_teenLayer", undefined);

      __checkObsolete__(['_decorator', 'Prefab', 'Node', 'instantiate', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Crash_Game_teenLayer", Crash_Game_teenLayer = (_dec = ccclass('Game_teenLayer'), _dec2 = property(Prefab), _dec(_class = (_class2 = class Crash_Game_teenLayer extends (_crd && Crash_ViewBase === void 0 ? (_reportPossibleCrUseOfCrash_ViewBase({
        error: Error()
      }), Crash_ViewBase) : Crash_ViewBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "recordItem", _descriptor, this);

          this.timeAccumulator = 0;
          this.timer = void 0;
        }

        start() {
          this._nodes['close'].on(Node.EventType.TOUCH_END, () => {
            clearInterval(this.timer);
            this.node.destroy();
          });

          let data = {
            tableId: (_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
              error: Error()
            }), Crash_DataManager) : Crash_DataManager).getInstance().getUserInfo().getTableId()
          };
          (_crd && Crash_NetMsgDispatcher === void 0 ? (_reportPossibleCrUseOfCrash_NetMsgDispatcher({
            error: Error()
          }), Crash_NetMsgDispatcher) : Crash_NetMsgDispatcher).getInstance().regCallBack((_crd && ProtocolCode === void 0 ? (_reportPossibleCrUseOfProtocolCode({
            error: Error()
          }), ProtocolCode) : ProtocolCode).RES_ROOM_DRAWING_RECORDS, this, this.sendChatRsp);
          new (_crd && RoomDrawingRecords === void 0 ? (_reportPossibleCrUseOfRoomDrawingRecords({
            error: Error()
          }), RoomDrawingRecords) : RoomDrawingRecords)().setParams(data).send();
          this.timer = window.setInterval(() => {
            new (_crd && RoomDrawingRecords === void 0 ? (_reportPossibleCrUseOfRoomDrawingRecords({
              error: Error()
            }), RoomDrawingRecords) : RoomDrawingRecords)().setParams(data).send();
          }, 4000);
        }

        remNetCallBacks() {
          (_crd && Crash_NetMsgDispatcher === void 0 ? (_reportPossibleCrUseOfCrash_NetMsgDispatcher({
            error: Error()
          }), Crash_NetMsgDispatcher) : Crash_NetMsgDispatcher).getInstance().removeAllProtocolByObj(this);
        }

        sendChatRsp(bl, data, args) {
          this._nodes['list1'].destroyAllChildren();

          this._nodes['list2'].destroyAllChildren();

          this._nodes['list3'].destroyAllChildren();

          this._nodes['list4'].destroyAllChildren();

          this._nodes['list5'].destroyAllChildren();

          this._nodes['list6'].destroyAllChildren();

          this._nodes['list7'].destroyAllChildren();

          if (bl) {
            let teenList = data.data;
            teenList.data.forEach((item, index) => {
              let node = instantiate(this.recordItem);
              let style = {
                width: 65,
                height: 35,
                color: 1,
                fontSize: 18
              };
              node.getChildByName('record_new').active = false;
              node.getComponent(_crd && Crash_RecordItem === void 0 ? (_reportPossibleCrUseOfCrash_RecordItem({
                error: Error()
              }), Crash_RecordItem) : Crash_RecordItem).init(item, style);

              if (index < 15) {
                this._nodes['list1'].addChild(node);

                return;
              }

              if (index < 30) {
                this._nodes['list2'].addChild(node);

                return;
              }

              if (index < 45) {
                this._nodes['list3'].addChild(node);

                return;
              }

              if (index < 60) {
                this._nodes['list4'].addChild(node);

                return;
              }

              if (index < 75) {
                this._nodes['list5'].addChild(node);

                return;
              }

              if (index < 90) {
                this._nodes['list6'].addChild(node);

                return;
              }

              if (index < 100) {
                if (index === 99) {
                  node.getChildByName('record_new').active = true;
                }

                this._nodes['list7'].addChild(node);
              }
            });
            this._nodes['Label_One'].getComponent(Label).string = teenList.extraSmall;
            this._nodes['Label_Two'].getComponent(Label).string = teenList.small;
            this._nodes['Label_Three'].getComponent(Label).string = teenList.centre;
            this._nodes['Label_Four'].getComponent(Label).string = teenList.big;
            this._nodes['Label_Five'].getComponent(Label).string = teenList.max;
          }
        }

        onDestroy() {
          this.remNetCallBacks();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "recordItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=07b15e7d66fb1ebefdfb59657d710c5f2d2086a7.js.map