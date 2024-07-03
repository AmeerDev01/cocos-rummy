import { _decorator, Button, Component, instantiate, Label, Node, Sprite } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { playBtnClick, playTurn } from '../index';
import { JackPotUserType } from '../type';
import { getNodeByNameDeep, omitStr } from '../../../utils/tool';
import { global } from '../../../hall';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
    jackPotUserArr:Array<JackPotUserType>
}
export interface IEvent {
}

@ccclass('BlessedWealthy_jackPot')
export class BlessedWealthy_jackPot extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

    protected propertyNode = {
        props_content:new Node(),
        props_item: new Node(),
        // props_gold_label:new Node(),
        // props_head: new Node(),
        // props_user_name:new Node(),
        

        
		
	}

	public props: IProps = {
        jackPotUserArr:[],
	}

	public events: IEvent = {
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {

	}

    protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
        if (key === "jackPotUserArr") {
            console.log("jackPotUserArr",value.cur);
            
            if (value.cur) {
                this.propertyNode.props_content.removeAllChildren()
                value.cur.forEach((item, index) => {
                    let userItem = instantiate(this.propertyNode.props_item);
                    global.loadHeadSprite(item.avatarIndex, getNodeByNameDeep("head", userItem).getComponent(Sprite));//加载头像
                    getNodeByNameDeep("gold_label", userItem).getComponent(Label).string = item.winningAmount.formatAmountWithCommas();
                    getNodeByNameDeep("user_name", userItem).getComponent(Label).string = omitStr(item.nickName + "", 20);
                    this.propertyNode.props_content.addChild(userItem)
                })
            }
        }
        
	}

	protected bindUI(): void {
	
	}

	update(deltaTime: number) {

	}
}

