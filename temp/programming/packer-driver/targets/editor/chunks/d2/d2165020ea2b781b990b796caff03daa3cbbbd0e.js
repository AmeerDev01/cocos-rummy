System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, ScrollView, BaseComponent, initToggle, ModalBox, lang, _dec, _class, _crd, ccclass, property, Hall_MailBox;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitToggle(extras) {
    _reporterNs.report("initToggle", "../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModalBox(extras) {
    _reporterNs.report("ModalBox", "../../common/ModalBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../index", _context.meta, extras);
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
      initToggle = _unresolved_3.initToggle;
    }, function (_unresolved_4) {
      ModalBox = _unresolved_4.default;
    }, function (_unresolved_5) {
      lang = _unresolved_5.lang;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3f2arwgStL1YPQdkdvGp+c", "Hall_MailBox", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'ScrollBar', 'ScrollView']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_MailBox", Hall_MailBox = (_dec = ccclass('Hall_MailBox'), _dec(_class = class Hall_MailBox extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_props_btn_close: new Node(),
            props_ToggleGroup_mail_left: new Node(),
            props_spr_mail_null: new Node(),

            /**内容 */
            props_Layout_mail_content: new Node(),

            /**删除 */
            props_btn_mail_delete: new Node(),
            props_Toggle_mail_item: new Node(),
            props_mail_sum: new Label()
          };
          this.props = {
            mailList: []
          };
          this.events = {
            onCloseHandler: () => {},
            onDeleteHandler: item => new Promise(resolve => resolve(false)),
            onCheckMail: item => new Promise(resolve => resolve(false))
          };
        }

        start() {}

        initState() {
          return {
            chooseMailItemIndex: -1
          };
        }

        bindEvent() {
          this.propertyNode.props_props_btn_close.on(Node.EventType.TOUCH_END, () => {
            this.events.onCloseHandler();
          });
          this.propertyNode.props_btn_mail_delete.on(Node.EventType.TOUCH_END, () => {
            (_crd && ModalBox === void 0 ? (_reportPossibleCrUseOfModalBox({
              error: Error()
            }), ModalBox) : ModalBox).Instance().show({
              content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.HallModule.SureDeleteMail, {}, {
                placeStr: "您确定要删除此消息吗？"
              }),
              type: "Confirm"
            }, () => {
              this.events.onDeleteHandler(this.props.mailList[this.state.chooseMailItemIndex]).then(() => {
                this.propertyNode.props_ToggleGroup_mail_left.children[this.state.chooseMailItemIndex].destroy();
                this.setState({
                  chooseMailItemIndex: this.state.chooseMailItemIndex - 1
                });
                this.propertyNode.props_mail_sum.string = +this.propertyNode.props_mail_sum.string - 1 + '';
              });
              return true;
            });
          });
          (_crd && initToggle === void 0 ? (_reportPossibleCrUseOfinitToggle({
            error: Error()
          }), initToggle) : initToggle)(this.propertyNode.props_ToggleGroup_mail_left, this.node, new Hall_MailBox.EventHandler(), "Hall_MailBox", "toggleCallback");
        }

        useProps(key, value) {
          // const template = instantiate(this.propertyNode.props_Toggle_mail_item)
          // this.propertyNode.props_ToggleGroup_mail_left.removeAllChildren()
          if (key === "mailList") {
            this.props.mailList.forEach(item => {
              const itemNode = instantiate(this.propertyNode.props_Toggle_mail_item);
              itemNode.getChildByName("label_mail_sender").getComponent(Label).string = item.title;
              itemNode.getChildByName("label_mail_time").getComponent(Label).string = item.createTime;
              itemNode.getChildByName("spr_mail_new").active = !item.status;
              this.propertyNode.props_ToggleGroup_mail_left.addChild(itemNode);
              itemNode.active = true;
            });

            if (this.props.mailList.length) {
              this.setState({
                chooseMailItemIndex: 0
              });
            } // if (this.props.mailList.length) {
            // 	this.propertyNode.props_ToggleGroup_mail_left.children[0].isChecked = true
            // }


            this.propertyNode.props_mail_sum.string = this.props.mailList.length + '';
          }
        }

        toggleCallback(event, customEventData) {
          const chooseIndex = event.target['parent'].children.indexOf(event.target);
          this.setState({
            chooseMailItemIndex: chooseIndex
          });
        }

        bindUI() {
          // this.propertyNode.props_Toggle_mail_item.active = false
          this.useState((key, value) => {
            this.propertyNode.props_spr_mail_null.active = false;
            this.propertyNode.props_Layout_mail_content.active = false;
            value.cur === -1 && (this.propertyNode.props_spr_mail_null.active = true);
            value.cur !== -1 && (this.propertyNode.props_Layout_mail_content.active = true);
            const mailItem = this.props.mailList[value.cur];
            if (!mailItem) return;
            this.propertyNode.props_Layout_mail_content.getChildByName("label_mail_sender").getComponent(Label).string = mailItem.sendName;
            this.propertyNode.props_Layout_mail_content.getChildByName("label_mail_time").getComponent(Label).string = mailItem.createTime;
            this.propertyNode.props_Layout_mail_content.getChildByName("label_mail_title").getComponent(Label).string = mailItem.title;
            this.propertyNode.props_Layout_mail_content.getChildByName("ScrollView_content").getComponent(ScrollView).content.getChildByName("item").getComponent(Label).string = mailItem.content;
            const newflag = this.propertyNode.props_ToggleGroup_mail_left.children[value.cur].getChildByName("spr_mail_new");

            if (newflag.active) {
              newflag.active = false;
              this.events.onCheckMail(mailItem).then(() => {});
            }
          }, ["chooseMailItemIndex"]);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d2165020ea2b781b990b796caff03daa3cbbbd0e.js.map