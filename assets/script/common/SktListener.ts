export default class SktListener<SKT_MAG_TYPE> {
  constructor() { }
  private dataMap: Array<{
    key: SKT_MAG_TYPE,
    isAutoRemove: boolean
    handlerList: Array<{
      id: string,
      sortId: number,
      handler: (data: any, error?: string) => void
    }>
  }> = []
  addOnce(key: SKT_MAG_TYPE, id: string, handler: (data: any, error?: string) => void, sortId: number = 0) {
    const listenerItem = this.add(key, id, handler, sortId)
    listenerItem.isAutoRemove = true
  }
  add(key: SKT_MAG_TYPE, id: string, handler: (data: any, error?: string) => void, sortId: number = 0) {
    let item = this.dataMap.find(i => i.key === key)
    if (!item) {
      item = {
        key,
        isAutoRemove: false,
        handlerList: [{ id, sortId, handler }]
      }
      this.dataMap.push(item)
    } else {
      item.handlerList.push({ id, sortId, handler })
    }
    return item
  }
  dispath(key: SKT_MAG_TYPE, data: any, error?: string) {
    const item = this.dataMap.find(i => i.key === key)
    if (item) {
      item.handlerList.sort((a, b) => a.sortId - b.sortId).forEach(item => item.handler(data, error))
      item.isAutoRemove && (this.dataMap = this.dataMap.filter(i => i.key !== key))
    }
  }
  clearLinster() {
    this.dataMap = []
  }
  // remove(key: SKT_MAG_TYPE, id?: string) {
  //   if (id) {
  //     let item = this.dataMap.find(item => item.key === key)
  //     item.handlerList = item.handlerList.filter(item => item.id !== id)
  //   } else {
  //     this.dataMap = this.dataMap.filter(item => item.key !== key)
  //   }
  // }
  remove(key: SKT_MAG_TYPE, id?: string) {
    if (id) {
      let item = this.dataMap.find(item => item.key === key)
      item && (item.handlerList = item.handlerList.filter(item => item.id !== id))
    } else {
      this.dataMap = this.dataMap.filter(item => item.key !== key)
    }
  }
  removeById(id: string) {
    this.dataMap.forEach(item => {
      item.handlerList = item.handlerList.filter(item => item.id !== id)
    })
  }
}