import { _decorator, Button, Component, instantiate, Label, Node, Sprite, tween } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { playBtnClick, playTurn } from '../index';
import { JackPotUserType } from '../type';
import { getNodeByNameDeep, omitStr } from '../../../utils/tool';
import { global } from '../../../hall';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
    spinsNum?: number,
    winNum?:number,
}
export interface IEvent {
    killSelfHandler: () => void,
}

@ccclass('GodWealth_small_win')
export class GodWealth_small_win extends BaseComponent<IState, IProps, IEvent> {
	start() {
       this.killHandler()
	}

    protected propertyNode = {
        props_free_spins:new Node(),
        props_pins_num:new Label(),
        props_baoHeGame_win:new Node(),
        props_freeGame_win: new Node(),
        props_baohe_box:new Node(),

	}

	public props: IProps = {
        spinsNum: -1,
        winNum:-1,
	}

    public events: IEvent = {
        killSelfHandler: () => { },
        
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {

	}

    protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {

        if (key === "spinsNum") {
            this.propertyNode.props_pins_num.string = value.cur + '';
        }

        if (key === "winNum") {
            getNodeByNameDeep("win_num", this.propertyNode.props_baoHeGame_win).getComponent(Label).string = value.cur.formatAmountWithCommas();
            getNodeByNameDeep("win_num", this.propertyNode.props_freeGame_win).getComponent(Label).string = value.cur.formatAmountWithCommas();

        }
        
    }
    
    public killHandler() {
        tween(this.node).delay(2).call(() => {
            this.events.killSelfHandler()
        }).start()
    }

    public getSpinsNode() {
        return this.propertyNode.props_free_spins;
    }
    public getFreeNode() {
        return this.propertyNode.props_freeGame_win;
    }
    public getBaoHeNode() {
        return this.propertyNode.props_baoHeGame_win;
    }
    public getBaoHeBoxNode() {
        return this.propertyNode.props_baohe_box;
    }

	protected bindUI(): void {
	
	}

	update(deltaTime: number) {

	}
}

