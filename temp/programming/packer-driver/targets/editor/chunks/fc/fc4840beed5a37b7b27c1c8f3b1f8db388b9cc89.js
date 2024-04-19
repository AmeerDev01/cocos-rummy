System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, _decorator, instantiate, tween, BaseComponent, DeskStatus, OperationType, config, playFapai, _dec, _class, _crd, ccclass, property, Qiuqiu_SendCard;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeskStatus(extras) {
    _reporterNs.report("DeskStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOperationType(extras) {
    _reporterNs.report("OperationType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayFapai(extras) {
    _reporterNs.report("playFapai", "../index", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      DeskStatus = _unresolved_3.DeskStatus;
      OperationType = _unresolved_3.OperationType;
    }, function (_unresolved_4) {
      config = _unresolved_4.default;
    }, function (_unresolved_5) {
      playFapai = _unresolved_5.playFapai;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fcbe0VoBTpPhqayukioqMJW", "Qiuqiu_SendCard", undefined);

      __checkObsolete__(['Node', 'Vec3', '_decorator', 'instantiate', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Qiuqiu_SendCard", Qiuqiu_SendCard = (_dec = ccclass('Qiuqiu_SendCard'), _dec(_class = class Qiuqiu_SendCard extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.dealCount = 0;

          /**排队索引 */
          this.dealIndex = 1;

          /**已经发牌的总张数 */
          this.dealTotalCount = 0;
          this.propertyNode = {
            props_icon_qiuqiu_paibei: new Node()
          };
          this.props = {
            deskStatus: null,
            playerMap: [],
            currActiveSeatIndex: -1,
            dealCount: 0
          };
          this.events = {
            getNextSeatIndex: lastIndex => {
              return 0;
            },
            getSeatCardPoint: (seatIndex, index) => {
              return null;
            },
            flyCardOverHanler: (seatIndex, index) => {},
            dealOver: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === 'deskStatus') {
            if (value.cur === (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).FIRST_DISTRIBUTE) {
              this.dealTotalCount = 0;
              this.dealCount = 0;
              this.dealIndex = 1;
              this.showAllCard(true);
              this.beginDeal(3);
            } else if (value.cur === (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).SECOND_DISTRIBUTE) {
              this.beginDeal(4);
            } else if (value.cur === (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).COUNTDOWNING) {
              this.showAllCard(false);
            } else if (value.cur === (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).PLAYING && (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).isReconnect) {
              this.reconnectShowCard();
            }
          } else if (key === 'dealCount' && value.cur === (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
            error: Error()
          }), DeskStatus) : DeskStatus).PLAYING && (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).isReconnect) {
            this.reconnectShowCard();
          }
        }

        getGameNumber() {
          let count = 0;
          this.props.playerMap.forEach(v => {
            if (v && v.gameData.isGame && v.gameData.opType !== (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
              error: Error()
            }), OperationType) : OperationType).GIVE_UP) {
              count++;
            }
          });
          return count;
        }
        /**
         * 开始发牌
         * @param dealNumber 发牌到第几张牌，比如 3，发3张牌，如果再次设置4，表示从前面的基础，发到第4张牌
         */


        beginDeal(dealNumber) {
          const gameNumber = this.getGameNumber();
          this.roundDeal(gameNumber, dealNumber, this.props.currActiveSeatIndex);
        }
        /**
         * 圈数发牌
         * @param gameNumber 游戏人数
         * @param dealNumber 发牌数量
         * @param flySeatIndex 发牌开始位置
         */


        roundDeal(gameNumber, dealNumber, flySeatIndex) {
          if (this.dealCount >= dealNumber) {
            this.events.dealOver();
            return;
          }

          this.dealCount++;
          const startNode = this.node.getChildByName("prpos_spr_card" + this.dealIndex);
          this.flyCard(startNode, this.dealCount, gameNumber, 0, flySeatIndex, () => {
            if (this.dealCount < dealNumber) {
              this.node.isValid && this.roundDeal(gameNumber, dealNumber, flySeatIndex);
            } else {
              this.events.dealOver();
            }
          });
        }
        /**
         * 飞牌，使用递归发牌，游戏人数发牌完成之后调用回调方法
         * @param startNode 飞牌开始位置的节点
         * @param rountNumber 当前发牌的圈数
         * @param gameNumber 游戏人数
         * @param count 发牌次数
         * @param flySeatIndex 发牌位置
         * @param done 发牌完成之后的回调方法
         * @returns 
         */


        flyCard(startNode, rountNumber, gameNumber, count, flySeatIndex, done) {
          if (count >= gameNumber) {
            done && done();
            return;
          }

          this.dealTotalCount++;

          if (this.dealTotalCount % 4 === 0) {
            // 一圈最后一个人开始发牌时隐藏开发飞牌位置的节点
            startNode.active = false;
            this.dealIndex++;
          }

          const startPos = startNode.getPosition();
          const seatIndex = flySeatIndex;
          const endPos = this.events.getSeatCardPoint(seatIndex, rountNumber);
          this.createFlyCard(startPos, endPos, () => {
            this.events.flyCardOverHanler(seatIndex, rountNumber);
            startNode = this.node.getChildByName("prpos_spr_card" + this.dealIndex);

            if (count < gameNumber) {
              this.node.isValid && this.flyCard(startNode, rountNumber, gameNumber, ++count, this.events.getNextSeatIndex(seatIndex), done);
            }
          });
        }
        /**
         * 创建飞牌阶段
         * @param startPos 开始位置
         * @param endPos 结束位置
         * @param done 飞牌过程结束之后回调方法
         */


        createFlyCard(startPos, endPos, done) {
          const flyNode = instantiate(this.propertyNode.props_icon_qiuqiu_paibei);
          flyNode.active = true;
          flyNode.setPosition(startPos);
          this.node.addChild(flyNode);

          if ((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).isReconnect) {
            flyNode.setWorldPosition(endPos);
            this.node && this.node.isValid && done && done();
            flyNode.destroy();
          } else {
            (_crd && playFapai === void 0 ? (_reportPossibleCrUseOfplayFapai({
              error: Error()
            }), playFapai) : playFapai)();
            const dealAnimeSpeed = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).isReconnect ? 0 : (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).dealAnimeSpeed;
            tween(flyNode).to(dealAnimeSpeed, {
              worldPosition: endPos
            }).call(() => {
              this.node && this.node.isValid && done && done();
              flyNode.destroy();
            }).start();
          }
        }

        bindUI() {
          this.propertyNode.props_icon_qiuqiu_paibei.active = false;
          this.showAllCard(false);
        }

        showAllCard(show) {
          this.node.children.filter(v => v.name.startsWith("prpos_spr_card")).forEach(v => v.active = show);
        }

        reconnectShowCard() {
          let dealCardCount = 0;
          this.dealTotalCount = this.props.dealCount; // 累计已发的牌数量

          this.props.playerMap.filter(v => v && v.gameData.isGame).forEach(v => {
            if (v.gameData.dealCardCount > dealCardCount) {
              dealCardCount = v.gameData.dealCardCount;
            }
          });
          this.dealCount = dealCardCount; // 发牌索引本身是从1开始，这里要加上1

          this.dealIndex = Math.floor(this.dealTotalCount / 4) + 1;
          this.showAllCard(true);

          for (let i = 1; i < this.dealIndex; i++) {
            this.node.getChildByName("prpos_spr_card" + i).active = false;
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fc4840beed5a37b7b27c1c8f3b1f8db388b9cc89.js.map