

/**自定义的监听器 */
// export const sktMsgListener = {
//   addOnce: (key: SKT_MAG_TYPE, id: string, handler: (data: any) => void, sortId: number = 0) => {
//     const listenerItem = sktMsgListener.add(key, id, handler, sortId)
//     listenerItem.isAutoRemove = true
//   },
//   add: (key: SKT_MAG_TYPE, id: string, handler: (data: any) => void, sortId: number = 0) => {
//     let item = dataMap.find(i => i.key === key)
//     if (!item) {
//       item = {
//         key,
//         isAutoRemove: false,
//         handlerList: [{ id, sortId, handler }]
//       }
//       dataMap.push(item)
//     } else {
//       item.handlerList.push({ id, sortId, handler })
//     }
//     return item
//   },
//   dispath: (key: SKT_MAG_TYPE, data: any) => {
//     const item = dataMap.find(i => i.key === key)
//     if (item) {
//       item.handlerList.sort((a, b) => a.sortId - b.sortId).forEach(item => item.handler(data))
//       item.isAutoRemove && (dataMap = dataMap.filter(i => i.key !== key))
//     }
//   },
//   remove: (key: SKT_MAG_TYPE, id?: string) => {
//     if (id) {
//       let item = dataMap.find(item => item.key === key)
//       item.handlerList = item.handlerList.filter(item => item.id !== id)
//     } else {
//       dataMap = dataMap.filter(item => item.key !== key)
//     }
//   },
//   removeById: (id: string) => {
//     dataMap.forEach(item => {
//       item.handlerList = item.handlerList.filter(item => item.id !== id)
//     })
//   }
// }


export function listenerFactoy<MAG_TYPE>() {
  let dataMap: Array<{
    key: MAG_TYPE,
    isAutoRemove: boolean
    handlerList: Array<{
      id: string,
      sortId: number,
      handler: (data: any, error?: string) => void
    }>
  }> = []
  const sktMsgListener = {
    /**添加一次性的监听函数，执行一次就自动失效 */
    addOnce: (key: MAG_TYPE, id: string, handler: (data: any, error?: string) => void, sortId: number = 0) => {
      const listenerItem = sktMsgListener.add(key, id, handler, sortId)
      listenerItem.isAutoRemove = true
    },
    add: (key: MAG_TYPE, id: string, handler: (data: any, error?: string) => void, sortId: number = 0) => {
      let item = dataMap.find(i => i.key === key)
      if (!item) {
        item = {
          key,
          isAutoRemove: false,
          handlerList: [{ id, sortId, handler }]
        }
        dataMap.push(item)
      } else {
        item.handlerList.push({ id, sortId, handler })
      }
      return item
    },
    dispath: (key: MAG_TYPE, data: any, error?: string) => {
      const item = dataMap.find(i => i.key === key)
      if (item) {
        item.handlerList.sort((a, b) => a.sortId - b.sortId).forEach(item => item.handler(data, error))
        item.isAutoRemove && (dataMap = dataMap.filter(i => i.key !== key))
      }
    },
    removeAll: () => { dataMap = [] },
    remove: (key: MAG_TYPE, id?: string) => {
      if (id) {
        let item = dataMap.find(item => item.key === key)
        item && (item.handlerList = item.handlerList.filter(item => item.id !== id))
      } else {
        dataMap = dataMap.filter(item => item.key !== key)
      }
    },
    removeById: (id: string) => {
      dataMap.forEach(item => {
        item.handlerList = item.handlerList.filter(item => item.id !== id)
      })
    }
  }
  return sktMsgListener
}