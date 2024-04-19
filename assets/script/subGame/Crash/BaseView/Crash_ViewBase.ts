import {_decorator, Component, Node} from 'cc';

const {ccclass, property} = _decorator;

export enum ViewType {
    Frame = 1,
    Dialog,
    Tips,
    Top,
}

@ccclass('ViewBase')
export class Crash_ViewBase extends Component {
    protected _viewType: ViewType = ViewType.Frame;
    protected _name: string = "";
    protected _config: any = null;
    protected _nodes: {} = {};
    getViewType() { return this._viewType; }

    protected _init(): void {
        console.log("ViewBase init");
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

    pushTo() {

    }

    addTo() {

    }

    protected pop() {

    }

    setName(name: string) {
        this._name = name;
    }

    getName(): string {
        return this._name;
    }

    setConfig(config: {}) {
        this._config = config;
    }

    protected onLoad() {
        this._init()
    }

    protected onDestroy() {

    }

    protected start() {

    }

    protected update(ft: number) {

    }
}
