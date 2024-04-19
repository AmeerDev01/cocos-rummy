System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Label, Node, ProgressBar, ScrollView, Sprite, SpriteFrame, Toggle, UITransform, Vec3, _decorator, instantiate, tween, BaseComponent, vipMap, getNodeByNameDeep, global, sourceManageSeletor, SpriteFramePathDefine, _dec, _class, _crd, ccclass, property, Hall_VipMain;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfvipMap(extras) {
    _reporterNs.report("vipMap", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteFramePathDefine(extras) {
    _reporterNs.report("SpriteFramePathDefine", "../sourceDefine/spriteDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInitStateType(extras) {
    _reporterNs.report("InitStateType", "../store/actions/memberInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Label = _cc.Label;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
      ScrollView = _cc.ScrollView;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Toggle = _cc.Toggle;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      vipMap = _unresolved_3.vipMap;
    }, function (_unresolved_4) {
      getNodeByNameDeep = _unresolved_4.getNodeByNameDeep;
    }, function (_unresolved_5) {
      global = _unresolved_5.global;
      sourceManageSeletor = _unresolved_5.sourceManageSeletor;
    }, function (_unresolved_6) {
      SpriteFramePathDefine = _unresolved_6.SpriteFramePathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68d6f4l2wBOQ45zhnIBiYFS", "Hall_VipMain", undefined);

      __checkObsolete__(['Button', 'Label', 'Node', 'ProgressBar', 'ScrollView', 'Sprite', 'SpriteFrame', 'Toggle', 'UITransform', 'Vec3', '_decorator', 'instantiate', 'log', 'sp', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_VipMain", Hall_VipMain = (_dec = ccclass('Hall_VipMain'), _dec(_class = class Hall_VipMain extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.locateInitPosition = void 0;
          this.propertyNode = {
            props_btn_vip_close: new Button(),
            props_diamond_icon: new Node(),
            props_me_vip_level_label: new Node(),
            props_btn_topup: new Button(),
            props_remind_next_level_gold: new Node(),
            props_remind_vip: new Node(),
            props_pro_levelbar: new Node(),
            props_node_locate: new Node(),
            props_togglegroup_vip: new Node(),
            props_vip_toggle_item: new Node(),
            props_remindtext_next_label_gold: new Node(),
            props_remindtext_vip: new Node(),
            props_ScrollView_vip: new Node(),
            props_btn_aktifkan: new Button()
          };
          this.props = {
            memberInfo: null
          };
          this.events = {
            close: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_vip_close.node.on(Node.EventType.TOUCH_END, () => {
            this.events.close();
          });
          this.propertyNode.props_btn_topup.node.on(Node.EventType.TOUCH_END, () => {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop(); // test代码
            // const info = instantiate(this.props);
            // info.memberInfo.vipLevel = 4;
            // info.memberInfo.vipLevelExperience = 1000;
            // this.setProps(info);
          });
          this.propertyNode.props_btn_aktifkan.node.on(Node.EventType.TOUCH_END, () => {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop();
          });
        }

        bindUI() {
          this.locateInitPosition = new Vec3(this.propertyNode.props_node_locate.position.x, this.propertyNode.props_node_locate.position.y);
        }

        useProps(key, value) {
          if (key === 'memberInfo') {
            // test代码
            // this.props.memberInfo.vipLevelExperience = 2500000;
            // this.props.memberInfo.vipLevel = 13;
            this.initVipToggle();
            this.updateDiamondIcon(this.props.memberInfo.vipLevel);
            this.updateRemindInfo();
            this.updateLevelBar();
            this.updateBarLevelLabel(this.props.memberInfo.vipLevel);
          }
        }

        initVipToggle() {
          const maxVipLevel = (_crd && vipMap === void 0 ? (_reportPossibleCrUseOfvipMap({
            error: Error()
          }), vipMap) : vipMap).length;
          let userVipLevel = this.props.memberInfo.vipLevel;

          if (this.props.memberInfo.vipLevel >= maxVipLevel) {
            userVipLevel = 0;
          }

          this.propertyNode.props_togglegroup_vip.removeAllChildren();
          (_crd && vipMap === void 0 ? (_reportPossibleCrUseOfvipMap({
            error: Error()
          }), vipMap) : vipMap).forEach(v => {
            const vipLevel = v[0];
            const vipToggleItem = instantiate(this.propertyNode.props_vip_toggle_item);
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("label_vip_unchecked", vipToggleItem).getComponent(Label).string = "VIP" + vipLevel;
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("label_vip_checked", vipToggleItem).getComponent(Label).string = "VIP" + vipLevel;
            this.propertyNode.props_togglegroup_vip.addChild(vipToggleItem);
            const isChecked = vipLevel === userVipLevel + 1; // 默认显示为下一个等级

            vipToggleItem.getComponent(Toggle).isChecked = isChecked; // isChecked && this.updateRemindtextInfo(v);

            if (isChecked) {
              this.updateRemindtextInfo(v);

              if (userVipLevel > 10) {
                this.propertyNode.props_ScrollView_vip.getComponent(ScrollView).scrollToRight();
              }
            }

            vipToggleItem.on(Node.EventType.TOUCH_END, () => {
              this.updateRemindtextInfo(v);
            });
          });
        }
        /**更新等级进度条 */


        updateLevelBar() {
          const maxVipLevel = (_crd && vipMap === void 0 ? (_reportPossibleCrUseOfvipMap({
            error: Error()
          }), vipMap) : vipMap).length;
          const userTotalRechange = this.getUserTotalRechange();
          const vipLevel = this.props.memberInfo.vipLevel;
          const vipLevelExperience = this.props.memberInfo.vipLevelExperience; // 当前经验值 / 下一个等级需要的经验值 得到当前等级到下一个等级的一个百分比
          // const percent = vipLevel < maxVipLevel ? this.props.memberInfo.vipLevelExperience / vipMap.find(v => v[0] === vipLevel + 1)[1] / 10 : 0;
          // const barValue = vipLevel / maxVipLevel + percent;

          const percent = vipLevel < maxVipLevel ? vipLevelExperience / (_crd && vipMap === void 0 ? (_reportPossibleCrUseOfvipMap({
            error: Error()
          }), vipMap) : vipMap).find(v => v[0] === vipLevel + 1)[1] * 0.5 : 0;
          const barValue = vipLevel < maxVipLevel ? (vipLevel === 0 ? 0 : 0.5) + percent : 1;
          const locateNode = this.propertyNode.props_node_locate;
          const locateInitPosition = this.locateInitPosition;
          const bar = this.propertyNode.props_pro_levelbar.getComponent(ProgressBar);
          locateNode.getChildByName("label_suffer").getComponent(Label).string = userTotalRechange.formatAmountWithCommas();
          tween(bar).to(0.5, {
            progress: barValue > 1 ? 1 : barValue
          }, {
            onUpdate: () => {
              const barWidth = bar.barSprite.getComponent(UITransform).width;
              locateNode.setPosition(new Vec3(locateInitPosition.x + barWidth, locateInitPosition.y));
            }
          }).start();
        }

        updateBarLevelLabel(vipLevel) {
          let levels = [];

          if (vipLevel === 0) {
            levels = [0, 1, 2];
          } else if (vipLevel >= (_crd && vipMap === void 0 ? (_reportPossibleCrUseOfvipMap({
            error: Error()
          }), vipMap) : vipMap).length) {
            levels = [vipLevel - 2, vipLevel - 1, vipLevel];
          } else {
            levels = [vipLevel - 1, vipLevel, vipLevel + 1];
          }

          this.propertyNode.props_pro_levelbar.children.filter(v => v.name.startsWith("spr_level_")).forEach((v, i) => {
            v.getChildByName("Label_level_vip").getComponent(Label).string = levels[i] + "";
          });
        }
        /**更新钻石图标 */


        async updateDiamondIcon(vipLevel) {
          let iconFile = "";

          if (vipLevel >= 12) {
            iconFile = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine)._DIAMOND_ICON_5;
          } else if (vipLevel >= 9) {
            iconFile = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine)._DIAMOND_ICON_4;
          } else if (vipLevel >= 6) {
            iconFile = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine)._DIAMOND_ICON_3;
          } else if (vipLevel >= 3) {
            iconFile = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine)._DIAMOND_ICON_2;
          } else {
            iconFile = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine)._DIAMOND_ICON_1;
          }

          this.propertyNode.props_diamond_icon.getComponent(Sprite).spriteFrame = (await (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync(iconFile, SpriteFrame)).source;
          this.propertyNode.props_me_vip_level_label.getComponent(Label).string = vipLevel + "";
        }
        /**更新top的等级文字描述 */


        updateRemindInfo() {
          const maxVipLevel = (_crd && vipMap === void 0 ? (_reportPossibleCrUseOfvipMap({
            error: Error()
          }), vipMap) : vipMap).length;
          let nextLevel = this.props.memberInfo.vipLevel + 1;

          if (nextLevel >= maxVipLevel) {
            this.propertyNode.props_remind_next_level_gold.getComponent(Label).string = '0';
            this.propertyNode.props_remind_vip.getComponent(Label).string = "VIP" + maxVipLevel;
            return;
          }

          const vipInfo = (_crd && vipMap === void 0 ? (_reportPossibleCrUseOfvipMap({
            error: Error()
          }), vipMap) : vipMap).find(v => v[0] === nextLevel);
          const experience = vipInfo[1] - this.props.memberInfo.vipLevelExperience;
          this.propertyNode.props_remind_next_level_gold.getComponent(Label).string = experience.formatAmountWithCommas();
          this.propertyNode.props_remind_vip.getComponent(Label).string = "VIP" + nextLevel;
        }
        /**更新bottom的等级文字描述 */


        updateRemindtextInfo(vipInfo) {
          const vipLevel = vipInfo[0];

          if (vipLevel <= this.props.memberInfo.vipLevel) {
            this.propertyNode.props_remindtext_next_label_gold.getComponent(Label).string = "0";
          } else {
            this.propertyNode.props_remindtext_next_label_gold.getComponent(Label).string = (this.getTotalRechange(vipLevel) - this.getUserTotalRechange()).formatAmountWithCommas();
          }

          this.propertyNode.props_remindtext_vip.getComponent(Label).string = "VIP" + vipLevel;
        }
        /**获得用户累计充值 */


        getUserTotalRechange() {
          return this.getTotalRechange(this.props.memberInfo.vipLevel) + this.props.memberInfo.vipLevelExperience;
        }
        /**获得充值到vip10时需要总的充值金币 */


        getTotalRechange(vipLevel = 99) {
          let sum = 0;
          (_crd && vipMap === void 0 ? (_reportPossibleCrUseOfvipMap({
            error: Error()
          }), vipMap) : vipMap).filter(v => v[0] <= vipLevel).forEach(v => sum += v[1]);
          return sum;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ee9af75e9e789a616d8894cca792733fe3cc3369.js.map