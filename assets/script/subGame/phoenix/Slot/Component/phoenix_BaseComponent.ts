import {_decorator, Component, Node} from 'cc';
import Facade from "../../Framework/care/Facade";
import {SlotProxy} from '../Proxy/SlotProxy';
import {ProxyDefine} from '../Const/ProxyDefine';

const {ccclass, property} = _decorator;

@ccclass('phoenix_BaseComponent')
export default abstract class phoenix_BaseComponent extends Component {
    public root: Node;
    protected facade = Facade.Instance

    /**只做页面的初始化 */
    protected abstract bindUI(): void

    /**完成效果级别的事件绑定，只完成效果，不处理数据 */
    protected _nodes: {} = {};

    protected abstract bindEvent(): void

    protected _init(): void {
        let dealChilds = (node: Node) => {
            let children = node.children;
            for (let i = 0; i < children.length; ++i) {
                let child = children[i];
                this._nodes[child.name] = child;
                dealChilds(child);
            }
        }
        dealChilds(this.node);
    }

    onLoad() {
        this.root = this.node;
        this._init()
        this.bindUI()
        this.bindEvent()
    }

    start() {

    }

    update(deltaTime: number) {

    }

    public getRollProxy() {
        return <SlotProxy>this.facade.retrieveProxy(ProxyDefine.SLOT);
    }
}

