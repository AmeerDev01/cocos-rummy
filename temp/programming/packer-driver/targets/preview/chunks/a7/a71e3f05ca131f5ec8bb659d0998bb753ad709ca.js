System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, ScrollView, Toggle, _crd, initDropDownBox;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      ScrollView = _cc.ScrollView;
      Toggle = _cc.Toggle;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d5a1cyDtLVGBq6+uizZSXk7", "DropDownBox", undefined);

      __checkObsolete__(['Node', 'ScrollView', 'Toggle']);

      /**前提条件
       * 1：具有一个带toggle组件的节点
       * 2：具有一个带有scrollView的节点，且content的第一个节点作为选项模板，为一个按钮(按钮Label子节点name=Label)
       * 3：传入一个bgNode的父节点，作为点击自动收起下拉框，要确认冒泡能收到事件
       * 4：数据checkIndex为默认选中节点，为-1则无默认选中值
       * 5：返回值为重渲染函数，传入更新的数据
       */
      initDropDownBox = (data, node, event) => {
        var dataList = [];

        var initView = (list, _chooseInded) => {
          node.scrollView.getComponent(ScrollView).content.children.forEach((item, index) => {
            index >= 1 ? item.destroy() : item.active = false;
          });
          list.forEach((item, index) => {
            var itemNode = event.renderItem(item);
            itemNode.active = true;
            var result = {
              item,
              index,
              itemNode
            };
            dataList.push(result); //这里是一个闭包，注意

            itemNode.on(Node.EventType.TOUCH_END, () => {
              event.chooseItem(result);
              dataList.forEach((item2, index2) => event.updateItemNode(item2.itemNode, index2 === index ? true : false));
              node.toggleNode.getComponent(Toggle).isChecked = false;
            });
            node.scrollView.active = false;
            node.scrollView.getComponent(ScrollView).content.addChild(itemNode);
          });
          dataList.forEach((item, index) => event.updateItemNode(item.itemNode, index === _chooseInded ? true : false));
          _chooseInded >= 0 && event.chooseItem(dataList[_chooseInded]);
        };

        initView(data.list, data.checkIndex);
        node.bgNode.on(Node.EventType.TOUCH_END, () => {
          node.toggleNode.getComponent(Toggle).isChecked = false;
        });
        node.toggleNode.on('toggle', () => node.scrollView.active = node.toggleNode.getComponent(Toggle).isChecked, void 0);
        return list => {
          initView(list, -1);
        };
      };

      _export("default", initDropDownBox);
      /*
      使用示例
      
      const reRender = initDropDownBox({
          list: ['+12', '+13', '+14', '+15', '+86'],
          checkIndex: 1
        }, {
          toggleNode: this.propertyNode.props_togglePhoneAreaNum_pwd,
          scrollView: this.propertyNode.props_ScrollView_areaNum_pwd,
          bgNode: this.node.parent
        }, {
          renderItem: (record) => {
            const templateBtu: Node = instantiate(this.propertyNode.props_ScrollView_areaNum_pwd.getComponent(ScrollView).content.children[0])
            templateBtu.getChildByName("Label").getComponent(Label).string = record
            return templateBtu
          },
          chooseItem: ({ item }) => { 
            this.propertyNode.props_intput_phone_areaNum_pwd.getComponent(EditBox).string = item 
          },
          updateItemNode: (node, isChoose) => {
            node.getChildByName("Label").getComponent(Label).color = isChoose ? Color.RED : Color.BLACK
          }
        })
      
        ....
        //重新赋值渲染
        reRender([],-1)
      
      */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a71e3f05ca131f5ec8bb659d0998bb753ad709ca.js.map