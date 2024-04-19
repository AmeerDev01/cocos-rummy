System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Prefab, Crash_ViewBase, Crash_DataManager, Crash_PlayerItem, Crash_NetMsgDispatcher, ProtocolCode, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Crash_PlayerListLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCrash_ViewBase(extras) {
    _reporterNs.report("Crash_ViewBase", "../BaseView/Crash_ViewBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_DataManager(extras) {
    _reporterNs.report("Crash_DataManager", "../manager/Crash_DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_PlayerItem(extras) {
    _reporterNs.report("Crash_PlayerItem", "./Crash_PlayerItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_NetMsgDispatcher(extras) {
    _reporterNs.report("Crash_NetMsgDispatcher", "db://assets/script/subGame/Crash/net/Crash_NetMsgDispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocolCode(extras) {
    _reporterNs.report("ProtocolCode", "db://assets/script/subGame/Crash/net/protocol/ProtocolDef", _context.meta, extras);
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
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      Crash_ViewBase = _unresolved_2.Crash_ViewBase;
    }, function (_unresolved_3) {
      Crash_DataManager = _unresolved_3.Crash_DataManager;
    }, function (_unresolved_4) {
      Crash_PlayerItem = _unresolved_4.Crash_PlayerItem;
    }, function (_unresolved_5) {
      Crash_NetMsgDispatcher = _unresolved_5.default;
    }, function (_unresolved_6) {
      ProtocolCode = _unresolved_6.ProtocolCode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "402e20zLv9KyYVwrg6pRzxK", "Crash_PlayerListLayer", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'instantiate', 'Prefab', 'log']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Crash_PlayerListLayer", Crash_PlayerListLayer = (_dec = ccclass('PlayerListLayer'), _dec2 = property(Prefab), _dec(_class = (_class2 = class Crash_PlayerListLayer extends (_crd && Crash_ViewBase === void 0 ? (_reportPossibleCrUseOfCrash_ViewBase({
        error: Error()
      }), Crash_ViewBase) : Crash_ViewBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "playerItem", _descriptor, this);

          this.timeAccumulator = 0;
          this.crashStageVo = void 0;
          this.sate = true;
          this.type1 = true;
          this.isMe = false;
          this.totalNumberOfRoomOccupants = [];
        }

        start() {
          super.start();
          this.totalNumberOfRoomOccupants = [];
          (_crd && Crash_NetMsgDispatcher === void 0 ? (_reportPossibleCrUseOfCrash_NetMsgDispatcher({
            error: Error()
          }), Crash_NetMsgDispatcher) : Crash_NetMsgDispatcher).getInstance().regCallBack((_crd && ProtocolCode === void 0 ? (_reportPossibleCrUseOfProtocolCode({
            error: Error()
          }), ProtocolCode) : ProtocolCode).LIST_OF_BETS, this, this.sendChatRsp); // 创建一个代理对象并将其应用到 this.crashStageVo 上
          // this.crashStageVo = Crash_DataManager.getInstance().getCrashStageVo();
          // // 使用 Object.defineProperty 定义属性 gameType 的 getter 和 setter
          // Object.defineProperty(this.crashStageVo, 'gameType', {
          //     get: function() {
          //         return this._gameType; // 返回属性的值
          //     },
          //     set: function(newValue) {
          //         this._gameType = newValue; // 设置属性的值
          //         console.log('gameType 被设置为:', newValue);
          //     }
          // });
        }

        syncOncePerSecond() {
          let val = (_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
            error: Error()
          }), Crash_DataManager) : Crash_DataManager).getInstance().getCurrentParameters();

          this._nodes['content'].children.forEach(item => {
            if (Number(item.getComponent(_crd && Crash_PlayerItem === void 0 ? (_reportPossibleCrUseOfCrash_PlayerItem({
              error: Error()
            }), Crash_PlayerItem) : Crash_PlayerItem).getItemInfo().odds) <= Number(val) && item.getComponent(_crd && Crash_PlayerItem === void 0 ? (_reportPossibleCrUseOfCrash_PlayerItem({
              error: Error()
            }), Crash_PlayerItem) : Crash_PlayerItem).getoperated()) {
              item.getComponent(_crd && Crash_PlayerItem === void 0 ? (_reportPossibleCrUseOfCrash_PlayerItem({
                error: Error()
              }), Crash_PlayerItem) : Crash_PlayerItem).isShowWin();
              item.getComponent(_crd && Crash_PlayerItem === void 0 ? (_reportPossibleCrUseOfCrash_PlayerItem({
                error: Error()
              }), Crash_PlayerItem) : Crash_PlayerItem).operated();

              if (!item.getComponent(_crd && Crash_PlayerItem === void 0 ? (_reportPossibleCrUseOfCrash_PlayerItem({
                error: Error()
              }), Crash_PlayerItem) : Crash_PlayerItem).getisMe()) {
                this._nodes['content'].removeChild(item);

                this._nodes['content'].insertChild(item, this.isMe ? 1 : 0);
              }
            }
          });
        }

        initList() {// this.totalNumberOfRoomOccupants = []
          // this._nodes['content'].destroyAllChildren()
          // let RoomInfoVos = Crash_DataManager.getInstance().getUserInfo().getRoomInfoVos()
          // RoomInfoVos.length > 0 && RoomInfoVos.forEach((res: any, index) => {
          //     let node: Node = instantiate(this.playerItem)
          //     node.active = true
          //     if (Crash_DataManager.getInstance().getUserInfo().getUserInfo().memberId === res.data.memberId) {
          //         node.getComponent(Crash_PlayerItem).init(res, true)
          //         this._nodes['content'].insertChild(node)
          //     } else {
          //         node.getComponent(Crash_PlayerItem).init(res)
          //         this._nodes['content'].addChild(node)
          //     }
          // })
        }

        sendChatRsp(bl, data, args) {
          var _this$totalNumberOfRo;

          if (this.type1) {
            this.type1 = false;

            this._nodes['content'].destroyAllChildren();

            this.totalNumberOfRoomOccupants = [];
          }

          (_this$totalNumberOfRo = this.totalNumberOfRoomOccupants) == null ? void 0 : _this$totalNumberOfRo.push(data.data);
          (_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
            error: Error()
          }), Crash_DataManager) : Crash_DataManager).getInstance().getUserInfo().setRoomInfoVos(this.totalNumberOfRoomOccupants);
          let node = instantiate(this.playerItem);

          if (node) {
            if ((_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
              error: Error()
            }), Crash_DataManager) : Crash_DataManager).getInstance().getUserInfo().getUserInfo().memberId != data.data.memberId) {
              node.getComponent(_crd && Crash_PlayerItem === void 0 ? (_reportPossibleCrUseOfCrash_PlayerItem({
                error: Error()
              }), Crash_PlayerItem) : Crash_PlayerItem).init(data.data);
              node.active = true;
              console.log(this.isMe);

              if (this.isMe) {
                this._nodes['content'].insertChild(node, 1);
              } else {
                this._nodes['content'].insertChild(node, 0);
              }
            } else {
              this.isMe = true;
              node.getComponent(_crd && Crash_PlayerItem === void 0 ? (_reportPossibleCrUseOfCrash_PlayerItem({
                error: Error()
              }), Crash_PlayerItem) : Crash_PlayerItem).init(data.data, true);
              node.active = true;

              this._nodes['content'].insertChild(node, 0);
            }
          }
        }

        onDestroy() {}

        update(deltaTime) {
          this.timeAccumulator += deltaTime;

          if (this.timeAccumulator > 1) {
            let crashStageVo = (_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
              error: Error()
            }), Crash_DataManager) : Crash_DataManager).getInstance().getCrashStageVo();
            if (!crashStageVo) return;

            if (crashStageVo.gameType === 2) {
              if (this.sate) {
                this.timeAccumulator = 0;
                this.sate = false;
                this.type1 = true;
                this.initList();
              }

              this.syncOncePerSecond();
            } else if (crashStageVo.gameType === 1) {
              this.sate = true;
            } else {
              this.isMe = false;
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playerItem", [_dec2], {
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
//# sourceMappingURL=9002b44fd33e7b7563a65abdebc8339e839e11c4.js.map