import { _decorator, Component, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('phoenix_totalBet')
export class phoenix_totalBet extends Component {
    start() {

    }
    setTotalText(data){
       this.node.getChildByName('Label_total_multiple').getComponent(Label).string=data.yuanBaoMagnification
       this.node.getChildByName('Label_total_winNum').getComponent(Label).string=data.yuanBaoAmount
    }
    destroyed(){
        this.node.destroy()
    }
    update(deltaTime: number) {

    }
}


