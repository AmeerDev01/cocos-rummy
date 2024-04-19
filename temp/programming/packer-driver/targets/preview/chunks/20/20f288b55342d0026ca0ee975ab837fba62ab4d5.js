System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Layout, Node, ProgressBar, Sprite, UITransform, BaseComponent, sourceManageSeletor, SpriteFramePathDefine, _dec, _class, _crd, ccclass, property, DragonTiger_historyWin;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteFramePathDefine(extras) {
    _reporterNs.report("SpriteFramePathDefine", "../sourceDefine/spriteDefine", _context.meta, extras);
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
      Label = _cc.Label;
      Layout = _cc.Layout;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      sourceManageSeletor = _unresolved_3.sourceManageSeletor;
    }, function (_unresolved_4) {
      SpriteFramePathDefine = _unresolved_4.SpriteFramePathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "961d7dP1sZJ+pnVi207V5Sm", "DragonTiger_historyWin", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Label', 'Layout', 'Node', 'ProgressBar', 'Sprite', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DragonTiger_historyWin", DragonTiger_historyWin = (_dec = ccclass("DragonTiger_historyWin"), _dec(_class = class DragonTiger_historyWin extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.gameHistoryIcon = void 0;
          this.propertyNode = {
            props_btn_history_close: new Node(),
            props_BarBlue: new Node(),
            props_BarYellow: new Node(),
            props_spr_history_girdBg: new Node(),
            props_label_dragon_p: new Node(),
            props_label_tiger_p: new Node(),
            props_ProgressBar: new ProgressBar(),
            props_label_history_naga: new Label(),
            props_label_history_harimau: new Label(),
            props_label_history_seri: new Label(),
            props_label_history_putaran: new Label(),
            props_spr_icon_1: new Node()
          };
          this.props = {
            historyList: {
              data: [],
              dragonNum: 0,
              tigerNum: 0,
              dragon: 0,
              tiger: 0,
              drawNum: 0
            }
          };
          this.events = {
            onClosePanel: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_history_close.on(Node.EventType.TOUCH_END, () => {
            this.events.onClosePanel();
          });
        }

        useProps(key, value) {
          if (key === "historyList") {
            this.propertyNode.props_label_tiger_p.getComponent(Label).string = value.cur.tiger + "%";
            this.propertyNode.props_label_dragon_p.getComponent(Label).string = value.cur.dragon + "%";
            this.propertyNode.props_BarBlue.getComponent(UITransform).width = this.propertyNode.props_ProgressBar.getComponent(UITransform).width * value.cur.dragon / 100;
            this.propertyNode.props_label_history_naga.getComponent(Label).string = "naga:" + value.cur.dragonNum;
            this.propertyNode.props_label_history_harimau.getComponent(Label).string = "harimau:" + value.cur.tigerNum;
            this.propertyNode.props_label_history_seri.getComponent(Label).string = "seri:" + value.cur.drawNum;
            this.propertyNode.props_label_history_putaran.getComponent(Label).string = "Putaran:" + value.cur.data.length;
            var gridParent = this.propertyNode.props_spr_history_girdBg;
            var numbersArray = value.cur.data;
            this.gameHistoryIcon = instantiate(this.propertyNode.props_spr_icon_1);
            gridParent.removeAllChildren(); // gridParent.getComponent(Layout).destroy()

            var rows = 21;
            var cols = 5;
            var cellWidth = 45;
            var cellHeight = 44; // 设置网格布局

            var gridLayout = gridParent.addComponent(Layout);
            gridLayout.type = Layout.Type.GRID;
            gridLayout.paddingLeft = 2;
            gridLayout.spacingX = 2;
            gridLayout.spacingY = 3;
            gridLayout.startAxis = Layout.AxisDirection.HORIZONTAL; // 从左到右排列
            // 循环遍历数字数组，创建并添加子节点

            for (var i = 0; i < numbersArray.length; i++) {
              var gameWinIcon = instantiate(this.gameHistoryIcon);

              if (numbersArray[i] === 1) {
                gameWinIcon.getComponent(Sprite).spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                  error: Error()
                }), SpriteFramePathDefine) : SpriteFramePathDefine).DRAGONTIGER_HISTORY_DRAGON).source;
              } else if (numbersArray[i] === 2) {
                gameWinIcon.getComponent(Sprite).spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                  error: Error()
                }), SpriteFramePathDefine) : SpriteFramePathDefine).DRAGONTIGER_HISTORY_TIGER).source;
              } else {
                gameWinIcon.getComponent(Sprite).spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                  error: Error()
                }), SpriteFramePathDefine) : SpriteFramePathDefine).DRAGONTIGER_HISTORY_SERI).source;
              }

              gameWinIcon.active = true;
              gridParent.addChild(gameWinIcon);
            }
          }
        }

        init() {
          this.gameHistoryIcon = instantiate(this.propertyNode.props_spr_history_girdBg.getChildByName("props_spr_icon_1"));
        }

        toggleCallback(event, customEventData) {}

        changeProgressBar() {}

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=20f288b55342d0026ca0ee975ab837fba62ab4d5.js.map