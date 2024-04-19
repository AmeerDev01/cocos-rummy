System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, ScrollView, BaseComponent, _dec, _class, _crd, ccclass, property, statusType, Hall_WithdrawBill;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8f4caQNGL9GVYpt/KAwJj8k", "Hall_WithdrawBill", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'ScrollView']);

      ({
        ccclass,
        property
      } = _decorator); //UNPAID(1,"待支付"),PAID(2,"已支付"),FINISHED(3,"已完成"),CANCEL(4,"已取消"),ERROR(5,"异常"),WAIT_AUDIT(6,"等待审核"),AUDIT_PASS(7,"审核通过"),AUDIT_REFUSE(8,"审核驳回")

      statusType = [// '', 'UNPAID', 'PAID', 'FINISHED', 'CANCEL', 'ERROR', 'WAIT_AUDIT', 'AUDIT_PASS', 'AUDIT_REFUSE'
      '', 'Proses', 'Berhasil', 'Gagal'];

      _export("Hall_WithdrawBill", Hall_WithdrawBill = (_dec = ccclass('Hall_WithdrawBill'), _dec(_class = class Hall_WithdrawBill extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            /**关闭 */
            props_btn_tips_close: new Node(),

            /**滚动域 */
            props_ScrollView_order_list: new Node(),

            /**模板 */
            props_order_item_template: new Node(),

            /**无信息提示 */
            props_label_catatan_none: new Node()
          };
          this.props = {
            orderList: []
          };
          this.events = {
            onClosehandler: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_tips_close.on(Node.EventType.TOUCH_END, () => {
            this.events.onClosehandler();
          });
        }

        useProps(key, value) {
          if (key === "orderList") {
            value.cur.length && (this.propertyNode.props_label_catatan_none.active = false);
            value.cur.forEach(item => {
              var orderItem = instantiate(this.propertyNode.props_order_item_template);
              orderItem.getChildByName("label_catatan_nomor").getComponent(Label).string = item.orderNo;
              orderItem.getChildByName("label_catatan_tannggal").getComponent(Label).string = item.orderTime;
              orderItem.getChildByName("label_catatan_jumlah").getComponent(Label).string = item.orderMoney;
              orderItem.getChildByName("label_catatan_keadaan").getComponent(Label).string = statusType[+item.status];
              orderItem.active = true;
              this.propertyNode.props_ScrollView_order_list.getComponent(ScrollView).content.addChild(orderItem);
            });
          }
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5493ed5c1bf66da080f2d07035023add567a54f2.js.map