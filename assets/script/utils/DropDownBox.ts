import { Node, ScrollView, Toggle } from "cc"

export type DropDownItemType<T> = {
  item: T, index: number, itemNode: Node
}
/**前提条件
 * 1：具有一个带toggle组件的节点
 * 2：具有一个带有scrollView的节点，且content的第一个节点作为选项模板，为一个按钮(按钮Label子节点name=Label)
 * 3：传入一个bgNode的父节点，作为点击自动收起下拉框，要确认冒泡能收到事件
 * 4：数据checkIndex为默认选中节点，为-1则无默认选中值
 * 5：返回值为重渲染函数，传入更新的数据
 */
const initDropDownBox = <T>(
  data: { list: Array<T>, checkIndex: number },
  node: {
    /**触发展开/收起下拉的Toggle节点 */
    toggleNode: Node, 
    /**下拉面板 */
    scrollView: Node, 
    /**背景节点(事件一定能穿透到的容器节点)用于点击其他区域自动关闭下拉框 */
    bgNode: Node },
  event: {
    /**根据数据渲染选项节点 */
    renderItem: (record: T) => Node,
    /**选中值的回调 */
    chooseItem: (item: DropDownItemType<T>) => void
    /**渲染每个节点的回调处理，有多少个数据，就会执行多少次 */
    updateItemNode: (itemNode: Node, isChoose: boolean) => void
  }) => {
  const dataList: DropDownItemType<T>[] = []
  const initView = (list: Array<T>, _chooseInded: number) => {
    node.scrollView.getComponent(ScrollView).content.children.forEach((item, index) => {
      index >= 1 ? item.destroy() : (item.active = false)
    })
    list.forEach((item, index) => {
      const itemNode = event.renderItem(item)
      itemNode.active = true
      const result = { item, index, itemNode }
      dataList.push(result)
      //这里是一个闭包，注意
      itemNode.on(Node.EventType.TOUCH_END, () => {
        event.chooseItem(result)
        dataList.forEach((item2, index2) => event.updateItemNode(item2.itemNode, index2 === index ? true : false))
        node.toggleNode.getComponent(Toggle).isChecked = false
      })
      node.scrollView.active = false
      node.scrollView.getComponent(ScrollView).content.addChild(itemNode)
    })
    dataList.forEach((item, index) => event.updateItemNode(item.itemNode, index === _chooseInded ? true : false))
    _chooseInded >= 0 && event.chooseItem(dataList[_chooseInded])
  }
  initView(data.list, data.checkIndex)
  node.bgNode.on(Node.EventType.TOUCH_END, () => {
    node.toggleNode.getComponent(Toggle).isChecked = false
  })
  node.toggleNode.on('toggle', () => node.scrollView.active = node.toggleNode.getComponent(Toggle).isChecked, this)
  return (list: Array<T>) => {
    initView(list, -1)
  }
}
export default initDropDownBox


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