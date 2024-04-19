System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Node, Toggle, UITransform, Vec3, _decorator, instantiate, tween, BaseComponent, config, DeskStatus, StepNumber, ChipViewModel, playBtnClick, playCoin, playXiazhuJinbi, sourceManageSeletor, PrefabPathDefine, splitChip, getNodeByNameDeep, global, _dec, _class, _crd, ccclass, property, Qiuqiu_MainBoard;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBalanceInfo(extras) {
    _reporterNs.report("BalanceInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetInfo(extras) {
    _reporterNs.report("BetInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCountdown(extras) {
    _reporterNs.report("Countdown", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeskStatus(extras) {
    _reporterNs.report("DeskStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStepNumber(extras) {
    _reporterNs.report("StepNumber", "../../../utils/StepNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChipViewModel(extras) {
    _reporterNs.report("ChipViewModel", "../viewModel/ChipViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayBtnClick(extras) {
    _reporterNs.report("playBtnClick", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayCoin(extras) {
    _reporterNs.report("playCoin", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayXiazhuJinbi(extras) {
    _reporterNs.report("playXiazhuJinbi", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsplitChip(extras) {
    _reporterNs.report("splitChip", "../qiuqiu_tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
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
      Toggle = _cc.Toggle;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      config = _unresolved_3.default;
    }, function (_unresolved_4) {
      DeskStatus = _unresolved_4.DeskStatus;
    }, function (_unresolved_5) {
      StepNumber = _unresolved_5.default;
    }, function (_unresolved_6) {
      ChipViewModel = _unresolved_6.default;
    }, function (_unresolved_7) {
      playBtnClick = _unresolved_7.playBtnClick;
      playCoin = _unresolved_7.playCoin;
      playXiazhuJinbi = _unresolved_7.playXiazhuJinbi;
      sourceManageSeletor = _unresolved_7.sourceManageSeletor;
    }, function (_unresolved_8) {
      PrefabPathDefine = _unresolved_8.PrefabPathDefine;
    }, function (_unresolved_9) {
      splitChip = _unresolved_9.splitChip;
    }, function (_unresolved_10) {
      getNodeByNameDeep = _unresolved_10.getNodeByNameDeep;
    }, function (_unresolved_11) {
      global = _unresolved_11.global;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "07d5brwzjxHcYha3WGBokUY", "Qiuqiu_MainBoard", undefined);

      __checkObsolete__(['Label', 'Node', 'Toggle', 'UITransform', 'Vec3', '_decorator', 'instantiate', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Qiuqiu_MainBoard", Qiuqiu_MainBoard = (_dec = ccclass('Qiuqiu_MainBoard'), _dec(_class = class Qiuqiu_MainBoard extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_btn_title_menu: new Node(),
            props_clip_area: new Node(),
            props_player_wrap: new Node(),
            props_label_pot_num: new Label(),
            props_btn_title_shop: new Node(),
            props_btn_title_chat: new Node(),

            /**荷官节点 */
            props_dealer: new Node(),

            /**赔付筹码的放置区域 */
            props_paid_area: new Node(),

            /**单个人赔付筹码的放置区域 */
            props_pilechip: new Node(),

            /**开始游戏倒计时 */
            props_label_cutdown_num: new Label()
          };
          this.props = {
            deskStatus: (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).WAITING,
            playerMap: new Array((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).seatNumber).fill(null),
            lastActiveSeatIndex: -1,
            currActiveSeatIndex: -1,
            gold: 0,
            totalBetAmount: -1,
            newBetInfo: null,
            beginGameCountdown: null,
            balanceInfos: []
          };
          this.events = {
            openSetPanel: toggle => {},
            openShopPanel: () => {},
            onQuitRoom: () => {},
            dealerBeginOut: () => {},
            getSeatFlyClipStartPos: () => {
              return null;
            }
          };
          this.step = void 0;
          this.flyChipSpeed = 0.2;
        }

        start() {}

        getPlayerWrapNode() {
          return this.propertyNode.props_player_wrap;
        }

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_title_menu.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.events.openSetPanel(this.propertyNode.props_btn_title_menu.getComponent(Toggle).isChecked);
          });
          this.propertyNode.props_btn_title_shop.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop();
          });
        }

        useProps(key, value) {
          if (key === 'totalBetAmount') {
            this.updateTotalBetAmount(value);
          } else if (key === 'newBetInfo') {
            this.flyClip();
          } else if (key === 'deskStatus') {
            if ((_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).WAITING === value.cur || (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).COUNTDOWNING === value.cur) {
              this.clearData();
            } else if ((_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).CLSOE === value.cur) {
              this.recycleChip();
            }
          } else if (key === 'beginGameCountdown') {
            this.updateBeginGameCountdown();
          }
        }

        bindUI() {
          this.propertyNode.props_pilechip.active = false;
          this.propertyNode.props_label_cutdown_num.node.parent.active = false;
        }

        /**更新累计下注 */
        updateTotalBetAmount(value) {
          if (value.cur === 0) {
            this.propertyNode.props_label_pot_num.string = this.formatNumber(0);
            return;
          }

          this.step && this.step.stop();
          this.step = new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
            error: Error()
          }), StepNumber) : StepNumber)(value.pre, value.cur, num => {
            num = Math.floor(num);
            this.node.isValid && (this.propertyNode.props_label_pot_num.string = this.formatNumber(num));
          });
          this.step.set(100);
          this.step.start();
        }

        formatNumber(value) {
          var pot = value + '';

          for (var i = 0; i < 12 - value.toString().length; i++) {
            pot = '0' + pot;
          }

          return pot.substring(0, 3) + ' ' + pot.substring(3, 6) + ' ' + pot.substring(6, 9) + ' ' + pot.substring(9, 12);
        }
        /**飞筹码 */


        flyClip() {
          var betInfo = this.props.newBetInfo;
          if (!betInfo) return;
          (_crd && playXiazhuJinbi === void 0 ? (_reportPossibleCrUseOfplayXiazhuJinbi({
            error: Error()
          }), playXiazhuJinbi) : playXiazhuJinbi)();
          var pos = this.events.getSeatFlyClipStartPos(betInfo.seatIndex);
          var startPos = this.propertyNode.props_clip_area.getComponent(UITransform).convertToNodeSpaceAR(pos);
          var chips = (_crd && splitChip === void 0 ? (_reportPossibleCrUseOfsplitChip({
            error: Error()
          }), splitChip) : splitChip)(betInfo.amount);
          chips.forEach(v => {
            var endPos = this.randomEndPos();
            this.createChip(false, startPos, endPos, v, this.propertyNode.props_clip_area, 0.3);
          });
        }
        /**
         * 创建筹码，同时飞筹码
         * @param startPosIsWorlds 开始坐标是否世界坐标
         * @param startPos 开始坐标
         * @param endPos 结束坐标
         * @param value 筹码值
         * @param parentNode 上级节点
         * @param speed 筹码飞翔速度
         * @param done 筹码飞完之后回调函数
         */


        createChip(startPosIsWorlds, startPos, endPos, value, parentNode, speed, done) {
          if (done === void 0) {
            done = null;
          }

          var chip = new (_crd && ChipViewModel === void 0 ? (_reportPossibleCrUseOfChipViewModel({
            error: Error()
          }), ChipViewModel) : ChipViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).prefabs_quiqui_chip).source).appendTo(parentNode).setProps({
            value: value
          }).connect();
          startPosIsWorlds ? chip.viewNode.setWorldPosition(startPos) : chip.viewNode.setPosition(startPos);
          tween(chip.viewNode).to(speed, {
            position: endPos
          }).call(() => {
            this.node.isValid && done && done();
          }).start();
        }

        /**回收筹码 */
        recycleChip() {
          this.propertyNode.props_paid_area.removeAllChildren();
          var endPos = this.propertyNode.props_dealer.getWorldPosition();
          var count = 0;
          var children = this.propertyNode.props_clip_area.children;
          var length = children.length;
          children.forEach(v => {
            tween(v).to(this.flyChipSpeed, {
              worldPosition: endPos
            }).removeSelf().call(() => {
              count++;

              if (count >= length) {
                this.node.isValid && this.pileChip(endPos);
              }
            }).start();
          });
        }
        /**堆筹码 */


        pileChip(startPos) {
          var wins = this.props.balanceInfos; // 通过递归，第一堆往用户头像飞完之后，接到飞第二堆

          var flyToPlayer = arrIndex => {
            var pildChipNode = this.propertyNode.props_paid_area.children[arrIndex];
            if (!pildChipNode) return;
            var startNode = this.getPileChipNode(pildChipNode);
            pildChipNode.getChildByName("spr_chip_bg").setScale(new Vec3(0, 0));
            this.node.isValid && this.chipFlyToPlayer(startNode, wins[arrIndex].seatIndex, () => {
              arrIndex++;
              if (!this.node.isValid) return; // pildChipNode.setScale(new Vec3(0, 0))

              if (arrIndex < wins.length) {
                flyToPlayer(arrIndex);
              } else {
                this.propertyNode.props_paid_area.removeAllChildren();
              }
            });
          }; // 通过递归，从荷官开始飞向桌面，开始堆第一堆，第一堆完了之后开始堆第二堆，所有都堆完了之后，开始飞向用户筹码


          var paid = arrIndex => {
            // 筹码回收完了之后的下一步操作
            this.node.isValid && this.paidChip(startPos, wins[arrIndex].seatIndex, wins[arrIndex].winloss, () => {
              arrIndex++;

              if (arrIndex < wins.length) {
                paid(arrIndex);
              } else {
                flyToPlayer(0);
              }
            });
          };

          paid(0);
        }
        /**
         * 赔付筹码
         * @param dealerPos 荷官位置 
         * @param winSeatIndex 赢的位置
         * @param winAmount 赢的金额
         * @param done 完成的回调函数
         */


        paidChip(dealerPos, winSeatIndex, winAmount, done) {
          var _this = this;

          var pildChipNode = instantiate(this.propertyNode.props_pilechip);
          pildChipNode.active = true;
          this.propertyNode.props_paid_area.addChild(pildChipNode); // 显示赔付

          (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)('props_label_chip', pildChipNode).getComponent(Label).string = winAmount.formatAmountWithLetter();
          var startNode = this.getPileChipNode(pildChipNode);
          var endPos = startNode.getComponent(UITransform).convertToNodeSpaceAR(startNode.getWorldPosition());
          var chips = (_crd && splitChip === void 0 ? (_reportPossibleCrUseOfsplitChip({
            error: Error()
          }), splitChip) : splitChip)(winAmount);
          var length = chips.length;

          var _loop = function _loop(i) {
            _this.scheduleOnce(() => {
              _this.node.isValid && _this.createChip(true, dealerPos, endPos, chips[i], startNode, _this.flyChipSpeed, () => {
                if (i === length - 1) {
                  // 停顿一下再放用户头像飞
                  // this.scheduleOnce(() => {
                  _this.node.isValid && done && done(); // }, 0.5)
                }
              });
              endPos.y += 5;
            }, 0.05 * (i + 1));
          };

          for (var i = 0; i < length; i++) {
            _loop(i);
          }
        }

        getPileChipNode(node) {
          return node && node.getChildByName("props_chips");
        }
        /**
         * 筹码飞向用户
         * @param pildChipNode 
         * @param flyToSeatIndex 
         * @param done 
         */


        chipFlyToPlayer(pildChipNode, flyToSeatIndex, done) {
          var _this2 = this;

          var endPos = this.events.getSeatFlyClipStartPos(flyToSeatIndex); // 飞向自己时播放收金币的音效

          flyToSeatIndex === 0 && (_crd && playCoin === void 0 ? (_reportPossibleCrUseOfplayCoin({
            error: Error()
          }), playCoin) : playCoin)();
          var children = pildChipNode.children;
          var length = children.length;

          var _loop2 = function _loop2(i) {
            var v = children[i];
            tween(v).to(_this2.flyChipSpeed * (i + 1), {
              worldPosition: endPos
            }).removeSelf().call(() => {
              if (i === length - 1) {
                done && done();
              }
            }).start();
          };

          for (var i = 0; i < length; i++) {
            _loop2(i);
          }
        }
        /**随机筹码结束位置 */


        randomEndPos() {
          var tf = this.propertyNode.props_clip_area.getComponent(UITransform);
          var x = Math.random() * tf.width;
          var y = Math.random() * tf.height;
          return new Vec3(x, y);
        }
        /**获得荷官位置 */


        getHealerPosition() {
          return this.propertyNode.props_dealer.getWorldPosition();
        }

        clearData() {
          this.updateTotalBetAmount({
            pre: 0,
            cur: 0
          });
          this.propertyNode.props_paid_area.removeAllChildren();
          this.propertyNode.props_clip_area.removeAllChildren();
        }

        updateBeginGameCountdown() {
          var countdown = this.props.beginGameCountdown;

          if (countdown && countdown.countdown > 0) {
            this.propertyNode.props_label_cutdown_num.node.parent.active = true;
            this.propertyNode.props_label_cutdown_num.string = countdown.countdown < 10 ? '0' + countdown.countdown : countdown.countdown + '';
          } else {
            this.propertyNode.props_label_cutdown_num.node.parent.active = false;
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9e16d6af2472bcd1dc19ee52adf84dcae7514365.js.map