import {INotification} from "../../Framework/interfaces/INotification"
import Mediator from "../../Framework/patterns/mediator/Mediator"
import {instantiate, Node} from "cc"
import {IlistTypeHander} from "../types/IlistTypeHander"
import {ISourceFile} from "../types/ISourceFile"

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

export default abstract class BaseMediator extends Mediator {
    /**最外层的预制组件节点 */
    public wrapView: Node

    // public isLoadAfterShowPrefavSource: boolean = true

    /**预制组件资源，需要子类实现 */
    // protected mainPrefabSource: SourceFileType

    public constructor(mediatorName: string = null, viewComponent: Node = null) {
        super(mediatorName, viewComponent)
    }

    /**
     * 需要预先加载的文件
     */
    public abstract sourceMap: Array<ISourceFile>
    /**这是Mediator需要监听的通知 */
    protected abstract listNotificationConst: Array<IlistTypeHander<any>>
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
    getSource(path: string, isInst: boolean = true) {
        if (isInst) {
            return instantiate(this.sourceMap.find(i => i.path === path).source)
        } else {
            return this.sourceMap.find(i => i.path === path)
        }
    }

    protected init() {
        this.wrapView = this.getSource(this.sourceMap[0].path)
        this.viewComponent.addChild(this.wrapView)
        this.listenerEvent()
    }

    /**绑定时间的数据处理逻辑 */
    protected abstract listenerEvent(): void

    public listNotificationInterests(): string[] {
        return this.listNotificationConst.map(i => i.name)
    }

    public handleNotification(notification: INotification) {
        const interest = this.listNotificationConst.find(i => i.name === notification.getName())
        interest.handler.bind(this)(notification)
    }
}
