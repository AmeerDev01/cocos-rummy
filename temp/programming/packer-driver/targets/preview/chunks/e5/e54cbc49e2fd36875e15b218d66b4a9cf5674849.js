System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Mediator, instantiate, BaseMediator, _crd;

  function _reportPossibleCrUseOfINotification(extras) {
    _reporterNs.report("INotification", "../../Framework/interfaces/INotification", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMediator(extras) {
    _reporterNs.report("Mediator", "../../Framework/patterns/mediator/Mediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIlistTypeHander(extras) {
    _reporterNs.report("IlistTypeHander", "../types/IlistTypeHander", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISourceFile(extras) {
    _reporterNs.report("ISourceFile", "../types/ISourceFile", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      Mediator = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1c26bU5YpVK9bajZU1SQRGB", "BaseMediator", undefined);

      __checkObsolete__(['Asset', 'Prefab', 'SpriteFrame', '__private', 'assetManager', 'instantiate', 'resources', 'Node']);

      // export interface IlistNotificationer<O> {
      // 	name: string
      // 	isListen?: boolean
      // 	/**返回是否继续执行 */
      // 	handler(this: O, notification: INotification): void
      // }
      // export type SourceFileType = {
      // 	key: string,
      // 	path: string,
      // 	sourceType: __private._types_globals__Constructor<Asset>,
      // 	source: any
      // }
      _export("default", BaseMediator = class BaseMediator extends (_crd && Mediator === void 0 ? (_reportPossibleCrUseOfMediator({
        error: Error()
      }), Mediator) : Mediator) {
        // public isLoadAfterShowPrefavSource: boolean = true

        /**预制组件资源，需要子类实现 */
        // protected mainPrefabSource: SourceFileType
        constructor(mediatorName, viewComponent) {
          if (mediatorName === void 0) {
            mediatorName = null;
          }

          if (viewComponent === void 0) {
            viewComponent = null;
          }

          super(mediatorName, viewComponent);

          /**最外层的预制组件节点 */
          this.wrapView = void 0;
        }
        /**
         * 需要预先加载的文件
         */

        /**这是Mediator需要监听的通知 */


        // public loadSource() {
        //     return new Promise((reslove, reject) => {
        //         this.inAdvanceLoadFiles.forEach(async ({ path, sourceType }) => {
        //             resources.load(path, sourceType)
        //         })
        //         if (!this.mainPrefabSource) {
        //             reject("mainPrefabSource为空")
        //         } else {
        //             resources.load(this.mainPrefabSource.path, this.mainPrefabSource.sourceType, (err, prefab) => {
        //                 this.mainPrefabSource.source = prefab
        //                 reslove(prefab)
        //             })
        //         }
        //     })
        //     // 需要提前加载的预制组件，之后就可以通过resources.get获取
        //     // this.inAdvanceLoadFiles.forEach(({ path, sourceType }) => resources.load(path, sourceType))
        //     // resources.load(this.prefabSource.path, Prefab, (err, prefab) => {
        //     //     this.prefabSource.source = prefab
        //     //     this.viewComponent.addChild(instantiate(prefab))
        //     // })
        //     // if (this.isLoadAfterShowPrefavSource) {
        //     // } else {
        //     //     resources.preload(this.prefabSource.path, Prefab, (err, prefab) => {
        //     //         this.prefabSource.source = prefab
        //     //     })
        //     // }
        // }

        /**
         * 获取实例化的资源
         * @param path 资源路径
         * @param isInst 是否要实例化(不填写就要实例化,返回node)
         * @returns isInst = true,返回ISourceFile
         */
        getSource(path, isInst) {
          if (isInst === void 0) {
            isInst = true;
          }

          if (isInst) {
            return instantiate(this.sourceMap.find(i => i.path === path).source);
          } else {
            return this.sourceMap.find(i => i.path === path);
          }
        }

        init() {
          this.wrapView = this.getSource(this.sourceMap[0].path);
          this.viewComponent.addChild(this.wrapView);
          this.listenerEvent();
        }
        /**绑定时间的数据处理逻辑 */


        listNotificationInterests() {
          return this.listNotificationConst.map(i => i.name);
        }

        handleNotification(notification) {
          var interest = this.listNotificationConst.find(i => i.name === notification.getName());
          interest.handler.bind(this)(notification);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e54cbc49e2fd36875e15b218d66b4a9cf5674849.js.map