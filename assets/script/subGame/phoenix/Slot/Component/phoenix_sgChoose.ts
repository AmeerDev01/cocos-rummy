import { _decorator, Component, tween, Vec3} from 'cc';
import phoenix_BaseComponent from './phoenix_BaseComponent';
const { ccclass, property } = _decorator;

@ccclass('phoenix_sgChoose')
export class phoenix_sgChoose extends  Component{

    start() {
        this.sgChooseShow()
    }
    sgChooseShow(){
        tween(this.node.getChildByName('props_btn_sgChoose_25'))
            .to(0.2, { position:new Vec3(-392,-4, 0) })
            .start()
        tween(this.node.getChildByName('props_props_btn_sgChoose_20'))
            .to(0.4, { position:new Vec3(-194,-4, 0) })
            .start()
        tween(this.node.getChildByName('props_btn_sgChoose_15'))
            .to(0.6, { position:new Vec3(-4,-4, 0) })
            .start()
        tween(this.node.getChildByName('props_btn_sgChoose_13'))
            .to(0.8, { position:new Vec3(202,-4, 0) })
            .start()
        tween(this.node.getChildByName('props_btn_sgChoose_10'))
            .to(1, { position:new Vec3(400,-4, 0) })
            .start()
    }
    sgChooseHide(){
        this.node.destroy()
    }
    protected bindUI(): void {}
    protected bindEvent(): void {}
    update(deltaTime: number) {

    }
}


