System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, ScrollView, BaseComponent, fetcher, ApiUrl, _dec, _class, _crd, ccclass, property, Hall_PC_Share_member;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOffetcher(extras) {
    _reporterNs.report("fetcher", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApiUrl(extras) {
    _reporterNs.report("ApiUrl", "../../apiUrl", _context.meta, extras);
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
      Node = _cc.Node;
      ScrollView = _cc.ScrollView;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      fetcher = _unresolved_3.fetcher;
    }, function (_unresolved_4) {
      ApiUrl = _unresolved_4.ApiUrl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f9314Lfl/dGbaiCv4vmcajJ", "Hall_PC_Share_member", undefined);

      __checkObsolete__(['_decorator', 'Component', 'ImageAsset', 'instantiate', 'Label', 'log', 'native', 'Node', 'ScrollView', 'Sprite', 'SpriteFrame', 'sys', 'systemEvent', 'Texture2D', 'tween', 'UIOpacity', 'UITransform', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_PC_Share_member", Hall_PC_Share_member = (_dec = ccclass('Hall_PC_Share_member'), _dec(_class = class Hall_PC_Share_member extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.memberList = [];
          this.isLoading = false;
          this.pageNum = 1;
          this.pageSize = 20;
          this.total = 0;
          this.propertyNode = {
            props_btn_help: new Node(),
            props_img_validitas_hlep: new Node(),
            props_content: new Node(),
            props_layout_item: new Node(),
            props_ScrollView: new ScrollView()
          };
          this.props = {
            isShow: true
          };
          this.events = {};
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_help.on(Node.EventType.TOUCH_END, () => {
            this.propertyNode.props_img_validitas_hlep.active = true;
            this.node.once(Node.EventType.TOUCH_END, () => {
              this.propertyNode.props_img_validitas_hlep.active = false;
            });
          });
          this.propertyNode.props_img_validitas_hlep.on(Node.EventType.TOUCH_END, () => {
            this.propertyNode.props_img_validitas_hlep.active = false;
          });
          this.renderData();
          this.propertyNode.props_ScrollView.node.on('scrolling', this.onScrolling, this);
        }

        useProps(key, value) {
          if (key === 'isShow') {
            this.node.active = value.cur;
          }
        }

        onScrolling() {
          var scrollOffset = this.propertyNode.props_ScrollView.getScrollOffset();
          var maxScrollOffset = this.propertyNode.props_ScrollView.getMaxScrollOffset(); // 检查是否滚动到底部

          if (scrollOffset.y >= maxScrollOffset.y) {
            if (this.isLoading || this.total / this.pageSize <= this.pageNum) {
              return;
            } else {
              this.isLoading = true;
              this.pageNum++;
              this.renderData();
              console.log(this.pageNum);
            }
          }
        }

        renderData() {
          var obj = {
            pageNum: this.pageNum,
            pageSize: this.pageSize
          };
          (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
            error: Error()
          }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
            error: Error()
          }), ApiUrl) : ApiUrl).MYRECOMMENDINFO, obj, "post").then(rsp => {
            this.total = rsp.total;

            for (var i = 0; i <= rsp.list.length; i++) {
              var node = instantiate(this.propertyNode.props_layout_item);
              node.active = true;

              if (rsp.list[i]) {
                node.getChildByName('label_name').getComponent(Label).string = rsp.list[i].nickName;
                node.getChildByName('label_date').getComponent(Label).string = rsp.list[i].registerTime;
                node.getChildByName('label_total').getComponent(Label).string = rsp.list[i].totalBet.formatAmountWithCommas();
                node.getChildByName('label_validitas').getComponent(Label).string = rsp.list[i].effective ? 'Yes' : 'No';
                this.propertyNode.props_content.addChild(node);
              }
            }
          });
          this.scheduleOnce(() => {
            this.isLoading = false;
          }, 3);
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=543f480ce2adb6a3d1a6e9fc17982e7a7d63d8b6.js.map