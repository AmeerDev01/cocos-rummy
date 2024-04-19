System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Button, instantiate, Label, Node, Sprite, Toggle, tween, Vec3, BaseComponent, formatNumber, loadRemoteImage, omitStr, config, sourceManageSeletor, playBtnClick, AnimationStatus, GameStatus, FontPathDefine, global, setTipType, _dec, _class, _crd, ccclass, property, Yxx_Footer;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfformatNumber(extras) {
    _reporterNs.report("formatNumber", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfloadRemoteImage(extras) {
    _reporterNs.report("loadRemoteImage", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfomitStr(extras) {
    _reporterNs.report("omitStr", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayBtnClick(extras) {
    _reporterNs.report("playBtnClick", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationStatus(extras) {
    _reporterNs.report("AnimationStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetData(extras) {
    _reporterNs.report("BetData", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeadType(extras) {
    _reporterNs.report("HeadType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPowerVo(extras) {
    _reporterNs.report("PowerVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFontPathDefine(extras) {
    _reporterNs.report("FontPathDefine", "../sourceDefine/fontDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetTipType(extras) {
    _reporterNs.report("setTipType", "../store/actions/gameFlow", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      Button = _cc.Button;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      Toggle = _cc.Toggle;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      formatNumber = _unresolved_3.formatNumber;
      loadRemoteImage = _unresolved_3.loadRemoteImage;
      omitStr = _unresolved_3.omitStr;
    }, function (_unresolved_4) {
      config = _unresolved_4.default;
    }, function (_unresolved_5) {
      sourceManageSeletor = _unresolved_5.sourceManageSeletor;
    }, function (_unresolved_6) {
      playBtnClick = _unresolved_6.playBtnClick;
    }, function (_unresolved_7) {
      AnimationStatus = _unresolved_7.AnimationStatus;
      GameStatus = _unresolved_7.GameStatus;
    }, function (_unresolved_8) {
      FontPathDefine = _unresolved_8.FontPathDefine;
    }, function (_unresolved_9) {
      global = _unresolved_9.global;
    }, function (_unresolved_10) {
      setTipType = _unresolved_10.setTipType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "27933VqfyFB5qrXrcRHRXD1", "Yxx_Footer", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Button', 'Game', 'instantiate', 'Label', 'log', 'math', 'Node', 'Sprite', 'SpriteFrame', 'Toggle', 'tween', 'UIRenderer', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Yxx_Footer", Yxx_Footer = (_dec = ccclass('Yxx_Footer'), _dec(_class = class Yxx_Footer extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_bet_chip_group: new Node(),
            props_bet_chip: new Node(),
            props_user_name_label: new Label(),
            props_user_glod_label: new Label(),
            props_user_head: new Sprite(),
            props_online_label: new Label(),
            props_online_bg: new Node(),
            props_gold_up: new Node(),
            props_btn_ulang: new Button(),
            props_btn_addGold: new Button(),
            props_layout_lock: new Node(),
            props_btn_shop: new Button(),
            props_tips_gold: new Node(),
            props_tips_vip: new Node(),
            props_remind_noBet: new Node(),
            props_remind_repeat: new Node()
          };
          this.props = {
            myHead: null,
            lastBet: [],
            newBetData: null,
            onlineNumber: 0,
            animationStatus: null,
            gameStatus: null,
            selectChip: (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).chipTypes[0].value,
            powers: []
          };
          this.events = {
            selectChip: value => {},
            repeatLastBet: lastBet => {},
            openShop: () => {}
          };
          this.chipNodeNamePrefix = "props_chip_toggle_";
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_ulang.node.on(Node.EventType.TOUCH_END, () => {
            if (this.isBet()) {
              this.events.repeatLastBet(this.props.lastBet);
              (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
                error: Error()
              }), playBtnClick) : playBtnClick)();
            } else {
              // if (!this.propertyNode && !this.propertyNode.props_remind_noBet) { return };
              // this.propertyNode.props_remind_noBet.active = true;
              // tween(this.propertyNode.props_remind_noBet)
              // .delay(2)
              // .call(() => { 
              // 	this.propertyNode.props_remind_noBet.active  = false;
              // })
              // 	.start()
              // return
              this.dispatch((_crd && setTipType === void 0 ? (_reportPossibleCrUseOfsetTipType({
                error: Error()
              }), setTipType) : setTipType)({
                time: Date.now() + Math.random(),
                type: 0
              }));
            }
          });
          this.propertyNode.props_btn_addGold.node.on(Node.EventType.TOUCH_END, () => {
            this.events.openShop();
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
          });
          this.propertyNode.props_btn_shop.node.on(Node.EventType.TOUCH_END, () => {
            this.events.openShop();
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
          });
        }

        useProps(key, value) {
          // console.log("footer useProps == ", key, value);
          if (key === 'myHead' && value.cur) {
            // 第一次初始化调用
            // this.loadHead(value.cur.headUrl);
            // this.props.myHead && console.log("footer == ", key, this.props.myHead.gold);
            if (!value.pre) {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).loadHeadSprite(value.cur.icon, this.propertyNode.props_user_head);
              this.propertyNode.props_user_name_label.string = (_crd && omitStr === void 0 ? (_reportPossibleCrUseOfomitStr({
                error: Error()
              }), omitStr) : omitStr)(value.cur.name, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).gameOption.nicknameOmitLength);
            }

            this.updateGoldLabel();
            this.chipShowHandle();
          } else if (key === 'onlineNumber') {
            this.propertyNode.props_online_label.string = this.props.onlineNumber + "";
          } else if (key === 'animationStatus' && this.props.myHead) {
            if (value.cur === (_crd && AnimationStatus === void 0 ? (_reportPossibleCrUseOfAnimationStatus({
              error: Error()
            }), AnimationStatus) : AnimationStatus).HEAD_ADD_GOLD) {
              // log("HEAD_ADD_GOLD: ", this.props.myHead.winloss, this.props.myHead.gold);
              this.playAddGlodAnimation(this.props.myHead.winloss);
              this.updateGoldLabel(); // this.chipShowHandle();
            } else if (value.cur === (_crd && AnimationStatus === void 0 ? (_reportPossibleCrUseOfAnimationStatus({
              error: Error()
            }), AnimationStatus) : AnimationStatus).RECHANGE_ADD_GOLD) {
              // this.playAddGlodAnimation(this.props.myHead.rechange);
              this.updateGoldLabel();

              if (this.props.gameStatus === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
                error: Error()
              }), GameStatus) : GameStatus).BET) {
                this.chipShowHandle();
              }
            }
          } else if (key === 'newBetData' && value.cur) {
            if (!value.cur.isMyBet && value.cur.index >= (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.seatNumber && value.cur.isFly) {
              this.playOnlineAnimation();
            }

            if (value.cur.isMyBet) {
              this.updateGoldLabel(); // this.chipShowHandle();
            }
          } else if (key === 'gameStatus') {
            if (value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).BET) {
              this.updateGoldLabel();
              this.chipShowHandle();
            }
          } else if (key === 'powers') {
            this.updatePowerShow();
            this.chipShowHandle();
          }
        }

        isBet() {
          return this.props.gameStatus === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).BET;
        }

        getRemindRepeatNode() {
          return this.propertyNode.props_remind_repeat;
        }

        updateGoldLabel() {
          this.propertyNode.props_user_glod_label.string = (_crd && formatNumber === void 0 ? (_reportPossibleCrUseOfformatNumber({
            error: Error()
          }), formatNumber) : formatNumber)(this.props.myHead.gold); // this.propertyNode.props_user_glod_label.string = getGoldShorten(this.props.myHead.gold);
        }
        /**
         * 加载玩家头像
         * @param headUrl 
         */


        loadHead(headUrl) {
          headUrl && (_crd && loadRemoteImage === void 0 ? (_reportPossibleCrUseOfloadRemoteImage({
            error: Error()
          }), loadRemoteImage) : loadRemoteImage)(headUrl).then(spriteFrame => {
            this.propertyNode.props_user_head.spriteFrame = spriteFrame;
          });
        }

        bindUI() {
          this.initChip();
          this.propertyNode.props_layout_lock.active = false;
        }

        initChip() {
          this.propertyNode.props_bet_chip_group.removeAllChildren();
          const startX = -306;
          const offset = 110;
          (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).chipTypes.forEach((chip, index) => {
            const node = this.createChip(chip, new Vec3(startX + index * offset, 20));
            this.propertyNode.props_bet_chip_group.addChild(node); // index === 0 && (node.getChildByName("spr_chips").active = false);
          });
        }

        createChip(chip, position) {
          const node = instantiate(this.propertyNode.props_bet_chip);
          node.setPosition(position);
          node.name = this.chipNodeNamePrefix + chip.value;
          this.bindChipEvent(node);
          const chips = node.getChildByName("spr_chips");
          const checkMark = node.getChildByName("Checkmark");
          const sf = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile(chip.fileUrl).source;
          checkMark.getComponent(Sprite).spriteFrame = sf;
          chips.getComponent(Sprite).spriteFrame = sf;
          const chipLabel = chips.getChildByName("Label_chips").getComponent(Label);
          chipLabel.string = chip.valueStr;
          chipLabel.font = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile(chip.fontUrl).source;
          const checkMarkChipLabel = checkMark.getChildByName("Label_chips").getComponent(Label);
          checkMarkChipLabel.string = chip.valueStr;
          checkMarkChipLabel.font = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile(chip.fontUrl).source;
          return node;
        }
        /**获得是否锁定下注 */


        getLockBet(gold) {
          let isLockBet = gold < (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).gameOption.unlockBetMinGold;

          if (!isLockBet && this.props.powers && this.props.powers.length > 0) {
            isLockBet = true;
          }

          return isLockBet;
        }
        /**筹码显示处理 */


        chipShowHandle() {
          if (!this.props.myHead) {
            return;
          }

          const chipNodes = this.propertyNode.props_bet_chip_group.children.filter(v => v.name.startsWith(this.chipNodeNamePrefix));
          const myGold = this.props.myHead.gold; // 是否锁定下注

          let isLockBet = myGold < (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).gameOption.unlockBetMinGold;

          if (this.props.powers && this.props.powers.length > 0) {
            isLockBet = true;
          } else if (isLockBet) {
            this.updatePowerShow();
            this.updateTipsValue(this.propertyNode.props_tips_gold, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.unlockBetMinGold + '');
          }

          chipNodes.forEach(v => {
            this.updateChipStatus(v, myGold < this.getChipConfig(v.name).value || isLockBet);
          });
          this.propertyNode.props_layout_lock.active = isLockBet; // 重新选择最大可下注的筹码

          for (let i = chipNodes.length - 1; i >= 0; i--) {
            const node = chipNodes[i];
            const value = this.getChipConfig(node.name).value;
            let isChecked = false; // 如果当前金币大于等于选择的筹码，就去找到选择的筹码，让其选中

            if (myGold >= this.props.selectChip) {
              if (value === this.props.selectChip) {
                isChecked = true;
              } // 如果当前金币小于之前选择的筹码，就去找最大的可选择的筹码

            } else if (myGold >= value) {
              isChecked = true;
            }

            if (!isLockBet && isChecked) {
              node.getComponent(Toggle).isChecked = true;
              node.getChildByName("spr_chips").active = false;
              this.events.selectChip(value);
              break;
            }
          } // 自己的金币小于最小筹码了，一个都不能选择


          if (isLockBet) {
            chipNodes[0].getChildByName("spr_chips").active = true;
          }
        }
        /**更新筹码状态 */


        updateChipStatus(node, disable) {
          // 首先把所有子节点置灰
          node.children.forEach(v => v.getComponent(Sprite).grayscale = disable);
          const chips = node.getChildByName("spr_chips");
          chips.active = true;
          const chipLabel = chips.getChildByName("Label_chips").getComponent(Label);
          const fileUrl = disable ? (_crd && FontPathDefine === void 0 ? (_reportPossibleCrUseOfFontPathDefine({
            error: Error()
          }), FontPathDefine) : FontPathDefine).BLACK_BET : this.getChipConfig(node.name).fontUrl;
          chipLabel.font = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile(fileUrl).source;
          node.getComponent(Toggle).enabled = !disable;
          node.getComponent(Toggle).isChecked = false;
        }

        bindChipEvent(node) {
          node.on(Node.EventType.TOUCH_END, e => {
            if (!node.getComponent(Toggle).enabled) return;
            this.propertyNode.props_bet_chip_group.children.forEach(v => {
              v.getChildByName("spr_chips").active = true;
            });
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            node.getChildByName("spr_chips").active = false;
            this.events.selectChip(this.getChipConfig(node.name).value);
          });
        }

        getChipConfig(name) {
          return (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).chipTypes.find(v => this.chipNodeNamePrefix + v.value === name);
        }
        /**播放在线人数动画 */


        playOnlineAnimation() {
          this.propertyNode.props_online_bg.getComponent(Animation).play();
        }
        /**
         * 播放添加金币的动画
         * @param winloss 
         * @returns 
         */


        playAddGlodAnimation(winloss) {
          if (winloss <= 0) return;
          const startPosition = new Vec3(this.propertyNode.props_gold_up.position.x, this.propertyNode.props_gold_up.position.y);
          this.propertyNode.props_gold_up.getComponent(Label).string = "+" + (_crd && formatNumber === void 0 ? (_reportPossibleCrUseOfformatNumber({
            error: Error()
          }), formatNumber) : formatNumber)(winloss);
          this.propertyNode.props_gold_up.active = true;
          tween(this.propertyNode.props_gold_up).by(1, {
            position: new Vec3(0, 30)
          }).call(() => {
            this.scheduleOnce(() => {
              this.propertyNode.props_gold_up.active = false;
              this.propertyNode.props_gold_up.setPosition(startPosition);
            }, 0.5);
          }).start();
        }

        updatePowerShow() {
          this.propertyNode.props_tips_vip.active = false;
          this.propertyNode.props_tips_gold.active = false;

          if (this.props.powers && this.props.powers.length > 0) {
            const power = this.props.powers[0];
            let node;

            if ('vip' === power.name.toLowerCase()) {
              node = this.propertyNode.props_tips_vip;
            } else if ('gold' === power.name.toLowerCase()) {
              node = this.propertyNode.props_tips_gold;
            }

            node && this.updateTipsValue(node, power.num);
          }
        }

        updateTipsValue(node, num) {
          node.active = true;
          node.getChildByName('Label_lock_num').getComponent(Label).string = Number(num).formatAmountWithCommas();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=548e1c43b049c000ec80a1e95437e8b1923b6591.js.map