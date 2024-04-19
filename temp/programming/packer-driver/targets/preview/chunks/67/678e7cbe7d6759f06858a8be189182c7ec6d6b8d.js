System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, Sprite, Toggle, tween, Vec3, BaseComponent, getNodeByNameDeep, getUUID, initToggle, gameCacheData, GameStatus, changeSelectChipAction, playBtnClick, playChooseChip, sourceManageSelector, config, initBetData, global, SKT_MAG_TYPE, sktInstance, betAreaViewModel, _dec, _class, _crd, ccclass, property, Bandar_footer;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetUUID(extras) {
    _reporterNs.report("getUUID", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitToggle(extras) {
    _reporterNs.report("initToggle", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameCacheData(extras) {
    _reporterNs.report("gameCacheData", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeadType(extras) {
    _reporterNs.report("HeadType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSendBet(extras) {
    _reporterNs.report("SendBet", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTipsVo(extras) {
    _reporterNs.report("TipsVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeSelectChipAction(extras) {
    _reporterNs.report("changeSelectChipAction", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinUser(extras) {
    _reporterNs.report("WinUser", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayBtnClick(extras) {
    _reporterNs.report("playBtnClick", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayChooseChip(extras) {
    _reporterNs.report("playChooseChip", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSelector(extras) {
    _reporterNs.report("sourceManageSelector", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitBetData(extras) {
    _reporterNs.report("initBetData", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKT_MAG_TYPE(extras) {
    _reporterNs.report("SKT_MAG_TYPE", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktInstance(extras) {
    _reporterNs.report("sktInstance", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbetAreaViewModel(extras) {
    _reporterNs.report("betAreaViewModel", "../viewModel/BandarGameBoardViewModel", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      Toggle = _cc.Toggle;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      getNodeByNameDeep = _unresolved_3.getNodeByNameDeep;
      getUUID = _unresolved_3.getUUID;
      initToggle = _unresolved_3.initToggle;
    }, function (_unresolved_4) {
      gameCacheData = _unresolved_4.gameCacheData;
      GameStatus = _unresolved_4.GameStatus;
    }, function (_unresolved_5) {
      changeSelectChipAction = _unresolved_5.changeSelectChipAction;
    }, function (_unresolved_6) {
      playBtnClick = _unresolved_6.playBtnClick;
      playChooseChip = _unresolved_6.playChooseChip;
      sourceManageSelector = _unresolved_6.sourceManageSelector;
    }, function (_unresolved_7) {
      config = _unresolved_7.default;
      initBetData = _unresolved_7.initBetData;
    }, function (_unresolved_8) {
      global = _unresolved_8.global;
    }, function (_unresolved_9) {
      SKT_MAG_TYPE = _unresolved_9.SKT_MAG_TYPE;
      sktInstance = _unresolved_9.sktInstance;
    }, function (_unresolved_10) {
      betAreaViewModel = _unresolved_10.betAreaViewModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5494bYmPjlDLKvgAaRWmrFa", "Bandar_footer", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'Toggle', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bandar_footer", Bandar_footer = (_dec = ccclass('Bandar_footer'), _dec(_class = class Bandar_footer extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.repeatArr = [];
          this.amountArr = [];
          this.newLastArr = [];
          this.isRepeat = true;
          this.propertyNode = {
            /**金币不足弹框提示 */
            props_layout_lock: new Node(),

            /** 重复下注按钮 */
            props_btn_auto: new Node(),

            /**金币组 */
            props_ToggleGroup: new Node(),

            /**用户头像 */
            props_user_avatar: new Node(),

            /**重复按钮动画 */
            props_animation_auto: new Node(),
            props_label_user_goldNum: new Node(),
            props_spr_bet_remind: new Node(),
            props_label_gold_up: new Node(),
            props_btn_add: new Node(),
            props_btn_shop: new Node(),

            /**金币不满足的提示 */
            props_tips_gold: new Node(),

            /**vip不满足的提示 */
            props_tips_vip: new Node(),

            /**不是下注时间的提示 */
            props_remind_noBet: new Node(),

            /**上一把没有下注的提示 */
            props_remind_repeat: new Node()
          };
          this.props = {
            gold: null,
            lastBet: null,
            gameStatus: null,
            allWinUsers: null,
            myInfo: null,
            tips: null
          };
          this.events = {};
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_auto.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.repeatBet();
          });
          this.propertyNode.props_btn_add.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop();
          });
          this.propertyNode.props_btn_shop.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop();
          });
          (_crd && initToggle === void 0 ? (_reportPossibleCrUseOfinitToggle({
            error: Error()
          }), initToggle) : initToggle)(this.propertyNode.props_ToggleGroup, this.node, new Bandar_footer.EventHandler(), "Bandar_footer", "channelToggleCallback");
        }

        useProps(key, value) {
          if (key === "gold") {
            this.judgeCoin(value.cur);
            this.updateLockBetState(); // this.propertyNode.props_layout_lock.active = value.cur <= 5000 || value.cur === undefined;

            if (value.cur <= 0 || value.cur == undefined) {
              this.propertyNode.props_label_user_goldNum.getComponent(Label).string = "0";
            } else {
              this.propertyNode.props_label_user_goldNum.getComponent(Label).string = parseInt(value.cur).formatAmountWithCommas();
            }

            this.repeatArr = (_crd && betAreaViewModel === void 0 ? (_reportPossibleCrUseOfbetAreaViewModel({
              error: Error()
            }), betAreaViewModel) : betAreaViewModel).comp.lastArr;

            if (this.repeatArr.length != 0) {
              this.resumeRepeatButtonHighlighting(value.cur, this.repeatArr);
            }
          }

          if (key === 'tips') {
            // console.log(value.cur);
            if (value.cur && value.cur.length > 0) {
              // this.updateLockBetState();
              this.updateTipsShow();
            } else {
              this.propertyNode.props_layout_lock.active = false;
            }
          }

          if (key === "myInfo") {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).loadHeadSprite(value.cur.icon, this.propertyNode.props_user_avatar.getComponent(Sprite)); //加载头像
            // window.setTimeout(() => {
            // 	if (mainGameViewModel.isUnMount) { return }
            // 	this.propertyNode.props_label_user_goldNum.getComponent(Label).string=value.cur.gold.formatAmountWithCommas()
            // },3000)
          }

          if (key === "gameStatus") {
            if (value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).STOP_BET) {} else {
              this.isRepeat = false;
              this.newLastArr = [];
              this.judgeCoin(this.props.gold);
              this.updateLockBetState();
            }
          }
        }
        /**Toggle选中金币的回调 效果切换*/


        channelToggleCallback(event, customEventData) {
          (_crd && playChooseChip === void 0 ? (_reportPossibleCrUseOfplayChooseChip({
            error: Error()
          }), playChooseChip) : playChooseChip)();
          var toggleArr = event.target["parent"].children;

          for (var i = 0; i < toggleArr.length; i++) {
            if (toggleArr[i].getComponent(Toggle).isChecked) {
              var num = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).chipTypes[i].value;
              this.dispatch((_crd && changeSelectChipAction === void 0 ? (_reportPossibleCrUseOfchangeSelectChipAction({
                error: Error()
              }), changeSelectChipAction) : changeSelectChipAction)(num)); //更新选中的金币值

              toggleArr[i].children[0].active = false;
              toggleArr[i].children[1].active = true;
            } else {
              toggleArr[i].children[0].active = true;
              toggleArr[i].children[1].active = false;
            }
          }
        }
        /**金币不足*/


        judgeCoin(gold) {
          // 当用户的金币值小于下注的金币值时，下注金币呈现灰度，不可点击
          this.propertyNode.props_ToggleGroup.children.forEach(item => {
            var Label_chips = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("Label_chips", item).getComponent(Label);
            var amountNum = Label_chips.string; //   item.getChildByName("spr_chips").getChildByName("Label_chips").getComponent(Label).string

            if (amountNum.charAt(amountNum.length - 1) == "K") {
              amountNum = String(Number(amountNum.substring(0, amountNum.length - 1)) * 1000);
            } else if (amountNum.charAt(amountNum.length - 1) == "M") {
              amountNum = String(Number(amountNum.substring(0, amountNum.length - 1)) * 1000000);
            }

            if (gold < Number(amountNum)) {
              item.getChildByName("spr_chips").getComponent(Sprite).grayscale = true;
              Label_chips.font = (_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
                error: Error()
              }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).chipTypes[6].fontUrl).source;
              item.getComponent(Toggle).interactable = false; // item.getComponent(Toggle).isChecked=false;

              item.children[0].active = true;
              item.children[1].active = false;
            } else {
              item.getChildByName("spr_chips").getComponent(Sprite).grayscale = false;
              item.getComponent(Toggle).interactable = true;
              var font = this.getFontSpriteFrame(Number(amountNum));
              Label_chips.font = font;
              item.getComponent(Toggle).isChecked = false; // 默认选中上一局最后下注的金币

              if (item.getComponent(Toggle).isChecked) {
                item.children[0].active = false;
                item.children[1].active = true;
              }
            }
          });
        }

        isBetStatus() {
          // console.log("footer  this.props.gameStatus",this.props.gameStatus);
          return this.props.gameStatus === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).BET;
        }
        /**重复下注按钮*/


        repeatBet() {
          var _this = this;

          this.clearRepeatBet();

          if (!this.isBetStatus()) {
            if (!this.propertyNode && !this.propertyNode.props_remind_noBet) {
              return;
            }

            ;
            this.propertyNode.props_remind_noBet.active = true;
            tween(this.propertyNode.props_remind_noBet).delay(2).call(() => {
              this.propertyNode.props_remind_noBet.active = false;
            }).start();
            return;
          }

          if (this.props.tips && this.props.tips.length > 0) {
            return;
          } // console.log("betAreaViewModel.comp.lastArr",betAreaViewModel.comp.lastArr);


          this.repeatArr = (_crd && betAreaViewModel === void 0 ? (_reportPossibleCrUseOfbetAreaViewModel({
            error: Error()
          }), betAreaViewModel) : betAreaViewModel).comp.lastArr; // console.log("this.repeatArr", this.repeatArr)

          if (this.repeatArr.length === 0) {
            if (!this.propertyNode && !this.propertyNode.props_remind_repeat) {
              return;
            }

            ;
            this.propertyNode.props_remind_repeat.active = true;
            tween(this.propertyNode.props_remind_repeat).delay(2).call(() => {
              this.propertyNode.props_remind_repeat.active = false;
            }).start();
            return;
          }

          this.isRepeat = true; // this.newLastArr=[...this.props.lastBet];//重复下注成功，保留数据,如果未点击，清空
          // 恢复上一次下注的情况
          // this.resumeRepeatButtonHighlighting(this.props.gold,this.repeatArr)

          var total = 0;
          var type1Total = 0;
          var type2Total = 0;
          var type3Total = 0;
          var type4Total = 0;

          for (var i = 0; i < this.repeatArr.length; i++) {
            total += this.repeatArr[i].gold;

            if (this.repeatArr[i].betType === 1) {
              type1Total += this.repeatArr[i].gold;
            } else if (this.repeatArr[i].betType === 2) {
              type2Total += this.repeatArr[i].gold;
            } else if (this.repeatArr[i].betType === 3) {
              type3Total += this.repeatArr[i].gold;
            } else if (this.repeatArr[i].betType === 4) {
              type4Total += this.repeatArr[i].gold;
            }
          }

          var betData1 = {
            typeTotal: type1Total,
            type: 1,
            betId: ""
          };
          var betData2 = {
            typeTotal: type2Total,
            type: 2,
            betId: ""
          };
          var betData3 = {
            typeTotal: type3Total,
            type: 3,
            betId: ""
          };
          var betData4 = {
            typeTotal: type4Total,
            type: 4,
            betId: ""
          };
          var lastBetArr = [betData1, betData2, betData3, betData4];

          if (this.props.gold >= total * 6) {
            var _loop = function _loop(_i) {
              lastBetArr[_i].betId = (_crd && getUUID === void 0 ? (_reportPossibleCrUseOfgetUUID({
                error: Error()
              }), getUUID) : getUUID)();
              var chips = [];

              _this.splitChip(lastBetArr[_i].typeTotal, chips);

              chips.forEach(chip => {
                var sendBet = {
                  roomId: (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                    error: Error()
                  }), gameCacheData) : gameCacheData).roomId,
                  memberId: _this.props.myInfo.memberId,
                  memberName: _this.props.myInfo.memberName,
                  gold: chip,
                  betType: lastBetArr[_i].type,
                  isMe: true,
                  betId: lastBetArr[_i].betId
                };
                (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
                  error: Error()
                }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                  error: Error()
                }), SKT_MAG_TYPE) : SKT_MAG_TYPE).BET_ALL, sendBet);
                var betData = (_crd && initBetData === void 0 ? (_reportPossibleCrUseOfinitBetData({
                  error: Error()
                }), initBetData) : initBetData)(_this.props.myInfo.index, _this.props.myInfo.memberId, lastBetArr[_i].type, chip);
                betData.isMyBet = true;
                (_crd && betAreaViewModel === void 0 ? (_reportPossibleCrUseOfbetAreaViewModel({
                  error: Error()
                }), betAreaViewModel) : betAreaViewModel).comp.flyChip(betData);
              });
            };

            //只有用户总金额大于所有重复下注的金币额之和 才可以下注
            // for (var i = 0; i < this.repeatArr.length; i++) {  
            // 	//下注发信息到服务器			
            // 	sktInstance.sendSktMessage(SKT_MAG_TYPE.BET_ALL, this.repeatArr[i])
            // }
            for (var _i = 0; _i < lastBetArr.length; _i++) {
              _loop(_i);
            } // betAreaViewModel.comp.amountArr.push(...betAreaViewModel.comp.lastArr)

          } else {
            //禁止下注
            // 提示用户余额不足
            this.propertyNode.props_spr_bet_remind.active = true;
            window.setTimeout(() => {
              this.propertyNode.props_spr_bet_remind.active = false;
            }, 2000); // global.hallDispatch(addToastAction({ content: lang.write(k => k.InitGameModule.GameBoardInit, {}, { placeStr: "余额不足，您只能下注账户余额的1/6!" }) }))

            return;
          }
        }
        /**
          * 根据下注拆分筹码
          * @param totalBetAmount 
          */


        splitChip(totalBetAmount, chips) {
          if (totalBetAmount < (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).chipTypes[0].value) {
            return;
          }

          for (var i = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).chipTypes.length - 2; i >= 0; i--) {
            var element = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).chipTypes[i];

            if (totalBetAmount >= element.value) {
              chips.push(element.value);
              totalBetAmount -= element.value;
              break;
            }
          }

          this.splitChip(totalBetAmount, chips);
        }

        resumeRepeatButtonHighlighting(gold, repeatArr) {
          // console.log("repeatArr",repeatArr);
          var total = 0;

          for (var i = 0; i < repeatArr.length; i++) {
            total += this.repeatArr[i].gold;
          }

          if (gold >= total * 6) {
            //只有用户总金额大于所有重复下注的金币额之和 才可以下注
            // this.propertyNode.props_btn_auto.getComponent(Sprite).grayscale=false;
            // this.propertyNode.props_animation_auto.active=true;
            this.propertyNode.props_spr_bet_remind.active = false;
          } else {
            //禁止下注
            // 提示用户余额不足
            //   global.hallDispatch(addToastAction({ content: lang.write(k => k.moduleName2.DragonTigerGlod,{},{ placeStr:"对不起，您的金币不足，请充值!" }) }));
            return;
          }
        }
        /**清除重复下注按钮的数据*/


        clearRepeatBet() {
          this.repeatArr = [];
        }

        palyAddUp(betInfo) {
          var node = this.propertyNode.props_label_gold_up;
          node.getComponent(Label).string = "+" + betInfo.gold.formatAmountWithLetter();
          var startPosition = new Vec3(node.position.x, node.position.y);
          node.active = true;
          tween(node).by(1, {
            position: new Vec3(0, 30)
          }).call(() => {
            this.scheduleOnce(() => {
              node.active = false;
              node.setPosition(startPosition);
            }, 0.5);
          }).start();
        }
        /**更新锁定下注区域状态 */


        updateLockBetState() {
          // 是否锁定下注  金币不足5千时出现充值弹框
          var isLockBet = this.props.gold < 5000 || this.props.gold == undefined || this.props.gold == 0;

          if (this.props.tips && this.props.tips.length > 0) {
            isLockBet = true;
          } else {
            isLockBet = false;
          }

          if (isLockBet) {
            this.updateTipsValue(this.propertyNode.props_tips_gold, String(5000));
            this.updateTipsShow();
          }

          this.propertyNode.props_layout_lock.active = isLockBet;
        }

        updateTipsShow() {
          this.propertyNode.props_tips_vip.active = false;
          this.propertyNode.props_tips_gold.active = false;

          if (this.props.tips && this.props.tips.length > 0) {
            var tips = this.props.tips[0];
            var node;

            if ('vip' === tips.name.toLowerCase()) {
              node = this.propertyNode.props_tips_vip;
            } else if ('gold' === tips.name.toLowerCase()) {
              node = this.propertyNode.props_tips_gold;
            } else if ('level' === tips.name.toLowerCase()) {
              node = this.propertyNode.props_tips_vip;
            }

            node && this.updateTipsValue(node, tips.num);
          }
        }

        updateTipsValue(node, num) {
          node.active = true;
          node.getChildByName('Label_lock_num').getComponent(Label).string = Number(num).formatAmountWithCommas();
          this.propertyNode.props_layout_lock.active = true;
        }

        getSpriteFrame(result) {
          var fileName = '';

          if (result === 0) {
            fileName = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).chipTypes[0].fileUrl;
          } else if (result === 1) {
            fileName = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).chipTypes[1].fileUrl;
          } else if (result === 2) {
            fileName = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).chipTypes[2].fileUrl;
          } else if (result === 3) {
            fileName = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).chipTypes[3].fileUrl;
          } else if (result === 4) {
            fileName = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).chipTypes[4].fileUrl;
          } else if (result === 5) {
            fileName = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).chipTypes[5].fileUrl;
          } else if (result === 6) {
            fileName = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).chipTypes[6].fileUrl;
          }

          return (_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile(fileName).source;
        }

        getFontSpriteFrame(result) {
          var fileName = '';

          if (result === 1000) {
            fileName = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).chipTypes[0].fontUrl;
          } else if (result === 5000) {
            fileName = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).chipTypes[1].fontUrl;
          } else if (result === 10000) {
            fileName = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).chipTypes[2].fontUrl;
          } else if (result === 100000) {
            fileName = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).chipTypes[3].fontUrl;
          } else if (result === 500000) {
            fileName = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).chipTypes[4].fontUrl;
          } else if (result === 1000000) {
            fileName = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).chipTypes[5].fontUrl;
          } else if (result === 0) {
            fileName = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).chipTypes[6].fontUrl;
          }

          return (_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile(fileName).source;
        }

        toggleCallback(event, customEventData) {}

        bindUI() {
          this.propertyNode.props_layout_lock.active = false;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=678e7cbe7d6759f06858a8be189182c7ec6d6b8d.js.map