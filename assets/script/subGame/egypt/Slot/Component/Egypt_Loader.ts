import { _decorator, Component, Label, ProgressBar, Node } from 'cc';
import { global, lang } from "../../../../hall";
const { ccclass, property } = _decorator;

@ccclass('Egypt_Loader')
export class Egypt_Loader extends Component {
    @property(Label)
    loaderTxt: Label = null
    public loaderState = true;
    protected onLoad(): void {
        this.getCloseBtn().active = false;
    }
    private getCloseBtn() {
        return this.node.getChildByName('props_btn_return');
    }
    start() {
        this.getCloseBtn().on(Node.EventType.TOUCH_END, () => {
            this.loaderState = false
            global.closeSubGame()
        })
    }
    getLoaderState() {
        return this.loaderState
    }
    /**
     *
     * @param fileName 资源名称
     * @param total 全部文件数量
     * @param remain 剩余的数量
     */
    setLoadingProgress(fileName: string, total: number, remain: number) {
        if (!this.node || !this.node.isValid) return;
        let progressBar = this.node.getChildByName('props_progressBar').getComponent(ProgressBar)
        let str = remain / total
        progressBar.progress = str;
        this.loaderTxt.string = `${((1 - (remain / total)) * 100).toFixed(0)}%`
        if (str <= 0) {
            this.loaderTxt.string = lang.write(k => k.WebSocketModule.GameInit, {}, { placeStr: "Game init..." })
        }
        //this.node.getChildByName('props_btn_return').active = remain !== 0;
    }

    update(deltaTime: number) {

    }
}

