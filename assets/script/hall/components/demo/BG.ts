import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BG')
export class BG extends Component {
    @property(Node)
	isLaunch: Node = null

	start() {
		this.isLaunch.getComponent(Label).string = "子游戏的脚本开始执行"
		console.log("子游戏的脚本开始执行")
		// App.startUp(this.node)
	}

    update(deltaTime: number) {	
        
    }
}

