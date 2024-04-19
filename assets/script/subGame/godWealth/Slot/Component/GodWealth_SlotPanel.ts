import { _decorator, tween , Label, Node, Toggle } from 'cc';
import config from '../GodWealth_config';
import GodWealth_BaseComponent from "./GodWealth_BaseComponent";
import {NumberRoller} from '../utils/NumberRoller'
import { log } from '../../../../common/fish/CalculteRule';
const { ccclass, property } = _decorator;
@ccclass('GodWealth_SlotPanel')
export class GodWealth_SlotPanel extends GodWealth_BaseComponent {
	@property(Label)
    majorLabel: Label = null
	@property(Label)
    miniLabel: Label = null
    @property(Label)
    jackTotal: Label = null
    @property(Node)
    btn_jackPot: Node = null
    private majorNumberRoller: NumberRoller = new NumberRoller();
    private miniNumberRoller: NumberRoller = new NumberRoller();
    private jackTotalNumberRoller: NumberRoller = new NumberRoller();
	start() {
	}
    protected bindUI(): void {

    }
    protected bindEvent(): void {

    }
    public jackIsShow(){

    }
    public set_jack_total(num){
        let startNumberMajor = parseInt(this.jackTotal.string.replace(/,/g, ""));
        this.jackTotalNumberRoller.startRolling(startNumberMajor, num, 500,this.jackTotal)
    }
    public setGod_MAJOR(mini: number, major: number) {
        let startNumberMini = parseInt(this.miniLabel.string.replace(/,/g, ""));
        let startNumberMajor = parseInt(this.majorLabel.string.replace(/,/g, ""));
        this.majorNumberRoller.startRolling(startNumberMini, mini, 500,this.miniLabel)
        this.miniNumberRoller.startRolling(startNumberMajor, major, 500, this.majorLabel);
    }
	update(deltaTime: number) {
        this.majorNumberRoller.update(deltaTime); // 手动触发滚动逻辑
        this.miniNumberRoller.update(deltaTime); // 手动触发滚动逻辑
        this.jackTotalNumberRoller.update(deltaTime); // 手动触发滚动逻辑
	}
}

