System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, assetManager, Button, instantiate, Label, Node, Sprite, SpriteFrame, tween, Vec3, BaseComponent, global, lang, addToastAction, ToastType, SKT_MAG_TYPE, sktInstance, sktMsgListener, initToggle, _dec, _class, _crd, ccclass, property, TypeOperation, TurntablePanel;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToastType(extras) {
    _reporterNs.report("ToastType", "../../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKT_MAG_TYPE(extras) {
    _reporterNs.report("SKT_MAG_TYPE", "../../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktInstance(extras) {
    _reporterNs.report("sktInstance", "../../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktMsgListener(extras) {
    _reporterNs.report("sktMsgListener", "../../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitToggle(extras) {
    _reporterNs.report("initToggle", "../../../utils/tool", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      assetManager = _cc.assetManager;
      Button = _cc.Button;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      global = _unresolved_3.global;
      lang = _unresolved_3.lang;
    }, function (_unresolved_4) {
      addToastAction = _unresolved_4.addToastAction;
      ToastType = _unresolved_4.ToastType;
    }, function (_unresolved_5) {
      SKT_MAG_TYPE = _unresolved_5.SKT_MAG_TYPE;
      sktInstance = _unresolved_5.sktInstance;
      sktMsgListener = _unresolved_5.sktMsgListener;
    }, function (_unresolved_6) {
      initToggle = _unresolved_6.initToggle;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8979e1JDpFA3JIKOiQGA3hx", "TurntablePanel", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'Button', 'Component', 'find', 'ImageAsset', 'instantiate', 'Label', 'log', 'native', 'Node', 'ScrollView', 'Sprite', 'SpriteFrame', 'sys', 'systemEvent', 'Texture2D', 'Toggle', 'ToggleContainer', 'tween', 'UIOpacity', 'UITransform', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TypeOperation", TypeOperation = /*#__PURE__*/function (TypeOperation) {
        TypeOperation[TypeOperation["HELP"] = 1] = "HELP";
        TypeOperation[TypeOperation["TURNTABLE"] = 2] = "TURNTABLE";
        return TypeOperation;
      }({}));

      _export("TurntablePanel", TurntablePanel = (_dec = ccclass('TurntablePanel'), _dec(_class = class TurntablePanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.turntableData = void 0;
          this.CarouselData = [{
            "createTime": "2023-12-23 21:13:44",
            "horseRaceLamp": 1,
            "id": "568",
            "memberId": 800611130,
            "memberName": "guest-SOzYWR",
            "picture": "https://img.nuih.top/qy-picture-1703311584863.jpeg",
            "prizeId": 133,
            "prizeName": "1",
            "prizeType": 0,
            "prizeValue": 50,
            "state": 1,
            "turntableId": 19,
            "updateBy": ""
          }];
          this.interval = 3;
          // 每条信息显示的时间（秒）
          this.timer = 0;
          this.currentIndex = 0;
          this.moveDistance = void 0;
          // 文本向上移动的距离
          this.moveDuration = void 0;
          // 文本移动完成所需的时间（秒）
          this.winningRecordData = [];
          this.meRecordData = [];
          this.count = 0;
          this.propertyNode = {
            props_btn_turntable_arow: new Button(),
            props_btn_turntable_arow_disable: new Node(),
            props_spr_truntable: new Node(),
            props_btn_detail: new Button(),
            props_tum_gift: new Node(),
            props_label_times: new Node(),
            props_label_remind: new Node(),
            props_ScrollView_my: new Node(),
            props_ScrollView_all: new Node(),
            props_label_title: new Node(),
            props_label_time: new Node()
          };
          this.props = {
            TurntableData: {}
          };
          this.events = {
            rotaryStarting: () => {},
            setReadStatus: value => {}
          };
        }

        start() {
          this.currentIndex = 0; // 当前显示的数据索引

          this.timer = 0; // 计时器

          this.updateLabel();
        }

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_turntable_arow.node.on(Button.EventType.CLICK, () => {
            if (this.count > 0) {
              this.events.rotaryStarting(TypeOperation.TURNTABLE, this.turntableData);
            }
          });
          this.propertyNode.props_btn_detail.node.on(Button.EventType.CLICK, () => {
            this.events.rotaryStarting(TypeOperation.HELP);
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).TURNTABLETNOTIFICATION, "main", data => {
            this.winningRecordData = data;
            this.initAll();
            this.CarouselData = data.filter(item => item.horseRaceLamp === 1);
            this.currentIndex = 0;
            this.initProps_label_remind();
          });
          (_crd && initToggle === void 0 ? (_reportPossibleCrUseOfinitToggle({
            error: Error()
          }), initToggle) : initToggle)(this.node.getChildByName('note_toggleGroup'), this.node, new TurntablePanel.EventHandler(), "TurntablePanel", "toggleCallback");
        }

        onDestroy() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).remove((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).TURNTABLETNOTIFICATION, "main");
        }

        useProps(key, value) {
          if (key == 'TurntableData') {
            let {
              turntable,
              turntablePrizeEntities,
              count
            } = value.cur;
            this.turntableData = value.cur;
            this.winningRecordData = value.cur.turntableClaimRecordEntities;
            this.meRecordData = value.cur.memberTurntableClaimRecordEntities;
            this.initAll();

            if (count === 0) {
              // this.propertyNode.props_btn_turntable_arow.getComponent(Sprite).grayscale = true
              this.turntableDisable(true);
            } else {
              this.turntableDisable(false);
            }

            this.count = count;
            this.propertyNode.props_label_title.getComponent(Label).string = turntable.effectStart + ' - ' + turntable.effectEnd;
            this.propertyNode.props_label_times.getComponent(Label).string = count + ' kali';
            turntablePrizeEntities.forEach((j, I) => {
              let node = instantiate(this.propertyNode.props_tum_gift);
              this.loadTurntableImg(j, node);
              node.setPosition(0, 0);
              this.propertyNode.props_spr_truntable.children.forEach((k, i) => {
                if (I === i) {
                  k.addChild(node);
                }
              });
            });
          }
        }

        setCount(data) {
          this.turntableData.count = data.count;

          if (data.count === 0) {
            this.count = data.count; // this.propertyNode.props_btn_turntable_arow.getComponent(Sprite).grayscale = true

            this.turntableDisable(true);
          } else {
            this.turntableDisable(false);
          }

          this.meRecordData = data.memberTurntableClaimRecordEntities;
          this.propertyNode.props_label_times.getComponent(Label).string = data.count + ' kali';
          this.initMy();
        }

        bindUI() {}

        loadTurntableImg(item, node) {
          item.picture && assetManager.loadRemote(item.picture, (err, asset) => {
            if (this.propertyNode && !err && item.picture === asset.nativeUrl) {
              node.getComponent(Sprite).spriteFrame = SpriteFrame.createWithImage(asset);
              node.getChildByName('props_gift_name').getComponent(Label).string = item.prizeValue + '';
              node.active = true;
            }

            if (err) {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.HallModule.LoadFaild, {}, {
                  placeStr: "加载资源失败"
                }),
                type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                  error: Error()
                }), ToastType) : ToastType).ERROR
              }));
            }
          });
        }

        update(deltaTime) {
          this.timer += deltaTime;

          if (this.timer >= this.interval) {
            this.timer = 0; // 重置计时器

            this.currentIndex = (this.currentIndex + 1) % this.CarouselData.length; // 更新索引

            this.updateLabel(); // 更新 Label 显示的文本
          }
        }

        updateLabel() {
          if (this.CarouselData.length > 0) {
            this.propertyNode.props_label_remind.getComponent(Label).string = `Selamat kepada ${this.CarouselData[this.currentIndex].memberName} yang telah memenangkan ${this.CarouselData[this.currentIndex].prizeName}.`; // 获取当前位置的 x 和 z 坐标，只改变 y 坐标

            let currentPos = this.propertyNode.props_label_remind.getPosition();
            this.propertyNode.props_label_remind.setPosition(new Vec3(currentPos.x, -20, currentPos.z)); // 使用 tween 实现移动动画

            tween(this.propertyNode.props_label_remind).to(this.interval, {
              position: new Vec3(currentPos.x, 25, currentPos.z)
            }, {
              easing: 'cubicOut'
            }).call(() => {
              this.initProps_label_remind();
            }).start();
          }
        }

        initProps_label_remind() {
          this.propertyNode.props_label_remind.setPosition(new Vec3(0, -20, 0));
        }

        toggleCallback(event, customEventData) {
          let node = event.target;

          if (node.name == 'props_Toggle1_all') {
            this.initAll();
          } else if (node.name == 'props_Toggle2_my') {
            this.initMy();
          }
        }

        initAll() {
          let view = this.propertyNode.props_ScrollView_all.getChildByName('view');
          let content = view.getChildByName('content');
          let item = view.getChildByName('item');
          content.destroyAllChildren();
          this.winningRecordData.length > 0 && this.winningRecordData.forEach(i => {
            let node = instantiate(item);
            node.active = true;
            node.getChildByName('label_name_all').getComponent(Label).string = i.memberName.length >= 4 ? i.memberName.substring(0, 4) + '***' : i.memberName;
            node.getChildByName('label_gift_all').getComponent(Label).string = i.prizeName;
            content.addChild(node);
          });
        }

        initMy() {
          let view = this.propertyNode.props_ScrollView_my.getChildByName('view');
          let content = view.getChildByName('content');
          let item = view.getChildByName('item');
          content.destroyAllChildren();
          this.meRecordData.length > 0 && this.meRecordData.forEach(i => {
            let node = instantiate(item);
            node.getChildByName('props_label_name_my').getComponent(Label).string = i.memberName;
            node.getChildByName('props_label_gift_my').getComponent(Label).string = i.prizeName;
            node.active = true;
            content.addChild(node);
          });
        }
        /**是否禁用倒计时 */


        turntableDisable(value) {
          this.propertyNode.props_btn_turntable_arow_disable.active = value;

          if (value) {
            this.startCountdown(this.propertyNode.props_btn_turntable_arow_disable.getChildByName("label_time").getComponent(Label));
          } else {
            this.unscheduleAllCallbacks();
          }
        }

        startCountdown(timeLabel) {
          const targetDate = new Date();
          targetDate.setDate(targetDate.getDate() + 1);
          targetDate.setHours(0);
          targetDate.setMinutes(0);
          targetDate.setSeconds(0);
          targetDate.setMilliseconds(0);
          this.updateCountdownLabel(timeLabel, targetDate);
          this.schedule(() => {
            this.updateCountdownLabel(timeLabel, targetDate);
          }, 1);
        }

        updateCountdownLabel(timeLabel, targetDate) {
          const currentDate = new Date();
          let times = (targetDate.getTime() - currentDate.getTime()) / 1000; // times是剩余时间总的秒数

          let h = parseInt(times / 60 / 60 + ''); //时

          const remainHours = h < 10 ? '0' + h : h;
          let m = parseInt(times / 60 % 60 + ''); //分

          const remainMinutes = m < 10 ? '0' + m : m;
          let s = parseInt(times % 60 + ''); // 秒

          const remainSeconds = s < 10 ? '0' + s : s;
          const remainTimeStr = `${remainHours}:${remainMinutes}:${remainSeconds}`;
          timeLabel.string = remainTimeStr;

          if (h === 13 && m === 9 && s === 0) {
            (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
              error: Error()
            }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
              error: Error()
            }), SKT_MAG_TYPE) : SKT_MAG_TYPE).TURNTABLEDATA);
            this.turntableDisable(false);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=45f6f4c07e7080a0775b2bae55f4de2865f3430b.js.map