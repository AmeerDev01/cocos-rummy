/**视图基类 slot内存占用小 释放资源暂未实现 */

import { Node, Button, Component, _decorator, __private, find } from "cc";
// import EventManager from "../manager/EventManager";
// import { Tools } from "../tools/Tools";

const { ccclass, property } = _decorator;

@ccclass
export default class BaseViewLayer extends Component {
    public layerName = "";

    protected msgList = {};

    public getViewNode(): Node {
        return this.node;
    }

    protected start(): void {
        // Log.w("BaseViewLayer ===============>  start ")
        this.registerEvents();
    }

    /**查找子节点  */
    protected searchNode(name: string, root: Node): Node {
        if (name == root.name) return root;

        let child: any = root.getChildByName(name);
        if (child) return child;
        // let childList: Array<any> = root.children;
        let childList: ReadonlyArray<Node> = root.children;
        for (let k = 0; k < childList.length; ++k) {
            let node: any = childList[k];
            child = this.searchNode(name, node);
            if (child) {
                return child;
            }
        }
        return child;
    }

    /**查找子节点上特定组件 */
    protected searchCompontent<T extends Component>(name: string, root: Node, type: __private._types_globals__Constructor<T> | __private._types_globals__AbstractedConstructor<T>): T {
        let tempNode = this.searchNode(name, root);
        if (tempNode) {
            return tempNode.getComponent(type);
        }
        console.error("当前node没有该组件", name);
        return null;
    }

    /**统一按钮回调*/
    protected addTouchEndEventListener(btn: Button, customData: string = ""): void {
        if (btn.clickEvents.length > 0) return;

        var clickEventHandler = new Component.EventHandler();
        clickEventHandler.target = this.node;
        // let scriptName = Tools.getScriptName(this.node.getComponent(BaseViewLayer).name);
        // clickEventHandler.component = scriptName;
        clickEventHandler.handler = "onButtonTouchEnd";
        clickEventHandler.customEventData = customData;

        btn.clickEvents.push(clickEventHandler);
    }

    protected autoAddButtonListener(): void {
        let btns = this.node.getComponentsInChildren(Button);
        btns.forEach(btn => {
            this.addTouchEndEventListener(btn);
        })
    }

    protected registerEvents(): void {
        // EventManager.getInstance().addEvents(this.msgList, this);
    }

    protected unRegisterEvents(): void {
        // EventManager.getInstance().removeEvents(this.msgList, this);
    }

    protected onDestroy(): void {
        this.unRegisterEvents();
    }

    protected onButtonTouchEnd(event, customData): void {

    }

    onLoad(){
        BaseViewLayer.bindNode(this)
    }

    //定时器
    protected _onFlush: any = null

    protected startInterval(dt: number = 1000 / 60) {
        //定时器
        this._onFlush = setInterval(() => {
            this.onFlush(dt)
        }, dt)
    }

    protected onFlush(dt?: number) { }

    /* 异步函数，一旦事件触发 */
    forOnce(target: any, evtName: string, timeout?: number) {
        return new Promise((callback) => {
            if (timeout) {
                this.scheduleOnce(callback, timeout)
            }
            target.off(evtName, callback, this)
            target.once(evtName, callback, this)
        })
    }

    /* 异步函数，延迟调用 */
    delay(interval: number) {
        return new Promise((callback) => {
            this.scheduleOnce(callback, interval)
        })
    }

    static bindNode(obj: any) {
        const data: bindInfo = obj._bindNode
        for (const key in data) {
            const item = data[key]
            const res: Node =
                item.path == "/" ? obj.node : find(item.path, obj.node)!

            if (!res) {
                // Log.e("res>>>>>>", item.path, obj.node)
            }
            if (item.type) {
                obj[key] =
                    res.getComponent(item.type) || res.addComponent(item.type)
            } else {
                obj[key] = res
            }
        }
    }
}

/**
 * 绑定节点或组件到变量
 * @param path 节点路径，如果为/指根节点
 * @param type 组件类型，为空代表绑定节点。如果有值且节点没有对应组件，会创建组件绑定到节点
 * @returns
 */
export function bindNode<T extends Component>(
    path: string = "",
    type?: new () => T
) {
    return (obj: any, name: string) => {
        if (!("_bindNode" in obj)) {
            obj._bindNode = {}
        }
        obj._bindNode[name] = {
            path: path || name,
            type,
        }
    }
}

export type bindInfo = {
    [key: string]: { path: string; type?: new () => Component }
}