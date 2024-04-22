import { _decorator,instantiate,Label,Node, Sprite, SpriteFrame, UITransform, Vec2, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { getNodeByNameDeep, getNodePositionInCanvas, initToggle } from '../../../utils/tool';
import { JackpotWin } from '../store/actions/history';
import { global } from '../../../hall';
import { Poker } from '../store/actions/pokerDetail';
import { SpriteFramePathDefine } from '../sourceDefine/spriteDefine';
import { sourceManageSelector } from '../index';
import { numToString } from './Bandar_pot';
import config from '../config';
const { ccclass, property } = _decorator;



export interface IState {

}

export interface IProps {
    jackpot:number,
    trigJackpot:number,
	jackpotWin:JackpotWin[],
    jackpotCard:number[]
}
export interface IEvent {
	onClosePanel:()=>void,
}


@ccclass('Bandar_jackpot')
export class Bandar_jackpot extends BaseComponent<IState, IProps, IEvent> {
	start() {

	 }

	protected propertyNode = {
        props_label_jackpot_num:new Label(),
        props_jackpot_off:new Node(),
        props_label_last_gold:new Label(),
        props_label_last_time:new Label(),
        props_content:new Node(),
        props_spr_winer1:new Node(),
        props_all_card:new Node(),
        props_card:new Node(),
	}

	public props: IProps = {
        jackpot:12345678900,
        trigJackpot:234567,
		jackpotWin:[],
        jackpotCard:[13,5,9,16],

	}

	public events: IEvent = {
		onClosePanel:()=>{}
	}

	protected initState() {
		return {
			
		}
	}

	protected bindEvent(): void {
	  this.propertyNode.props_jackpot_off.on(Node.EventType.TOUCH_END,()=>{

        this.events.onClosePanel()
      })

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
        // if(key==="trigJackpot"){
        //     this.propertyNode.props_label_last_gold.string=value.cur.formatAmountWithCommas()
        // }
	}
    /**创建winer */
    private createWiner(){
        this.propertyNode.props_content.removeAllChildren();
        this.props.jackpotWin.forEach((item,index)=>{
            let winer=instantiate(this.propertyNode.props_spr_winer1);
        //    let uiTransform=winer.getComponent(UITransform)
            winer.setPosition(0,-38-index*80)
            // winer.setWorldPosition(uiTransform.convertToWorldSpaceAR(new Vec3(0,0-index*80)));
            getNodeByNameDeep("label_first_num",winer).getComponent(Label).string=index+1+"";
            // this.getHead(item.icon, getNodeByNameDeep("spr_avatar",winer).getComponent(Sprite));
            getNodeByNameDeep("label_name",winer).getComponent(Label).string=item.name;
            getNodeByNameDeep("label_win",winer).getComponent(Label).string=item.winGold.formatAmountWithLetter();
            this.propertyNode.props_content.addChild(winer)
        })
    }

    /**获取头像 */
    private getHead(icon:number,sp){
       return global.loadHeadSprite(icon,sp)
    }

    /** 更新牌资源 */
    private createJackpotCard(){
        this.propertyNode.props_all_card.removeAllChildren();
        let index=0
        this.props.jackpotCard.forEach((item,index)=>{
            let itemCard=this.getCard(item)
            let card=instantiate(this.propertyNode.props_card);
            card.setPosition(-60+index*40,0)
            getNodeByNameDeep("spr_card_up",card).getComponent(Sprite).spriteFrame=this.getSpriteFrame(itemCard.up);
            getNodeByNameDeep("spr_card_down",card).getComponent(Sprite).spriteFrame=this.getSpriteFrame(itemCard.down);
            this.propertyNode.props_all_card.addChild(card)
        })
    }

	toggleCallback(event: Event, customEventData: string) {

	}

    /**获取每张牌的组型 */
    private getCard(cardT:number){
        return config.cardType[cardT]
    }

	protected bindUI(): void {
        let num=234567
        
        this.propertyNode.props_label_jackpot_num.string=numToString(this.props.jackpot,14);
        this.createJackpotCard();
        this.propertyNode.props_label_last_time.string=this.format(new Date());
        this.propertyNode.props_label_last_gold.string=num.formatAmountWithCommas();//测试
        this.createWiner();
				 
	}
    private getSpriteFrame(result:number): SpriteFrame {
		let fileName = '';
		if (result === 0) {
			fileName = SpriteFramePathDefine.BANDAR_POKER0;
		}else if (result === 1) {
			fileName = SpriteFramePathDefine.BANDAR_POKER1;
		} else if (result === 2) {
			fileName = SpriteFramePathDefine.BANDAR_POKER2;
		} else if (result === 3) {
			fileName = SpriteFramePathDefine.BANDAR_POKER3;
		} else if (result === 4) {
			fileName = SpriteFramePathDefine.BANDAR_POKER4;
		} else if (result === 5) {
			fileName = SpriteFramePathDefine.BANDAR_POKER5;
		} else if (result === 6) {
			fileName = SpriteFramePathDefine.BANDAR_POKER6;
		} 
		return sourceManageSelector().getFile(fileName).source;
	}


    /**获取时间 */
    private format(t){ 
        let y = t.getFullYear();
        let m = t.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = t.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = t.getHours();
        let minute = t.getMinutes();
        minute = minute < 10 ? ('0' + minute) : minute;
        let second = t.getSeconds();
        second = second < 10 ? ('0' + second) : second;
        let time = d +'/'+ m + '/'+y + ' ' +h+':'+minute+':'+second;
        return time
    }

    

	update(deltaTime: number) {

	}
}

