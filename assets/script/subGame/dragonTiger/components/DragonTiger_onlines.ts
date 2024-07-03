import { _decorator,Label,Node,Animation, instantiate, Sprite,SpriteFrame, tween, Vec3, randomRange, UIOpacity } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { getNodePositionInCanvas, initToggle } from '../../../utils/tool';
import {MyInfo} from '../store/actions/userInfo';
import { bundleDragonTiger, mainGameViewModel, sourceManageSeletor } from '../index';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { formatNumber } from './DragonTiger_win';
import {divideNumber} from './DragonTiger_users';
import { MemberData, setRoomLeftInfosAction, setRoomRightInfosAction } from '../store/actions/history';
import { SKT_MAG_TYPE } from '../socketConnect';
import { bundlePkgName } from '../sourceDefine';
import { playChip, playGetCoin } from '../index';
import {DragonTiger_users} from './DragonTiger_users';
import { global } from '../../../hall';
import { addToastAction } from '../../../hall/store/actions/baseBoard';
const { ccclass, property } = _decorator;


export interface IState {
	goldData:object
	goldNum:number[];
}

export interface IProps {
	roomInfoSize:number
	memberId:string,
	memberName:string,
	roomLeftInfoVos:MyInfo[],
    roomRightInfoVos:MyInfo[],
	memberBet:object,
	winType:number,
	winGold:number,
}
export interface IEvent {
	onClosePanel:()=>void
}


@ccclass('DragonTiger_onlines')
export class DragonTiger_onlines extends BaseComponent<IState, IProps, IEvent> {
	private goldNum:number[]=[];
	start() { 

    }

	protected propertyNode = {
        props_label_onlines_num:new Label(),
		props_spr_onlines_bg:new Node(),

	}

	public props: IProps = {
		roomLeftInfoVos:[],
        roomRightInfoVos:[],
        roomInfoSize:0,
		memberId:"",
		memberName:"",
		memberBet:{},
		winType:0,
		winGold:0,
	}

	public events: IEvent = {
		onClosePanel: () => { }
	}

	protected initState() {
		return {
			goldData:{},
			goldNum:[],
		}
	}

	protected bindEvent(): void {
      
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
        if(key==="roomInfoSize"){
			this.propertyNode.props_label_onlines_num.string=value.cur+''
        }
		if(key==="winGold"){		
			if(this.props.winType===2){
				this.goldNum=divideNumber(Math.abs(value.cur))
				
			}
		}

		if(key==="winType"){
            if(value.cur===2){
				// this.loseCoin()	
			}
		}
	}


	public playWinAni() {
		this.propertyNode.props_spr_onlines_bg.getComponent(Animation).play()
	}



	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}