System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

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
  function listenerFactoy() {
    var dataMap = [];
    var sktMsgListener = {
      /**添加一次性的监听函数，执行一次就自动失效 */
      addOnce: function addOnce(key, id, handler, sortId) {
        if (sortId === void 0) {
          sortId = 0;
        }

        var listenerItem = sktMsgListener.add(key, id, handler, sortId);
        listenerItem.isAutoRemove = true;
      },
      add: function add(key, id, handler, sortId) {
        if (sortId === void 0) {
          sortId = 0;
        }

        var item = dataMap.find(i => i.key === key);

        if (!item) {
          item = {
            key,
            isAutoRemove: false,
            handlerList: [{
              id,
              sortId,
              handler
            }]
          };
          dataMap.push(item);
        } else {
          item.handlerList.push({
            id,
            sortId,
            handler
          });
        }

        return item;
      },
      dispath: (key, data, error) => {
        var item = dataMap.find(i => i.key === key);

        if (item) {
          item.handlerList.sort((a, b) => a.sortId - b.sortId).forEach(item => item.handler(data, error));
          item.isAutoRemove && (dataMap = dataMap.filter(i => i.key !== key));
        }
      },
      removeAll: () => {
        dataMap = [];
      },
      remove: (key, id) => {
        if (id) {
          var item = dataMap.find(item => item.key === key);
          item && (item.handlerList = item.handlerList.filter(item => item.id !== id));
        } else {
          dataMap = dataMap.filter(item => item.key !== key);
        }
      },
      removeById: id => {
        dataMap.forEach(item => {
          item.handlerList = item.handlerList.filter(item => item.id !== id);
        });
      }
    };
    return sktMsgListener;
  }

  _export("listenerFactoy", listenerFactoy);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "776ccQgVV5I3ZsoJ5zuKS0R", "listenerFactoy", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a86739e9c1c44e513d179cd482fbc40bc6785ee2.js.map