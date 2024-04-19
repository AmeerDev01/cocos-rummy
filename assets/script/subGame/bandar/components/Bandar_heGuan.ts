import { _decorator,Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { getNodePositionInCanvas, initToggle } from '../../../utils/tool';
import { global } from '../../../hall';
import { BANKER_ID, GameType } from '../../../common/viewModel/GiftUserViewModel';
import { gameCacheData, ReqGiftSo } from '../type';
import { SKT_MAG_TYPE, sktInstance } from '../socketConnect';
const { ccclass, property } = _decorator;



export interface IState {

}

export interface IProps {
	
}
export interface IEvent {
	
}


@ccclass('Bandar_heGuan')
export class Bandar_heGuan extends BaseComponent<IState, IProps, IEvent> {
	start() {

	 }

	protected propertyNode = {
		props_croupier:new Node(),
	}

	public props: IProps = {
		
	}

	public events: IEvent = {
		
	}

	protected initState() {
		return {
			
		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_croupier.on(Node.EventType.TOUCH_END, () => {
			global.showGiftWindow(GameType.BANDAR, undefined, (value: number) => {
				const data: ReqGiftSo = {
					roomId: gameCacheData.roomId,
					/**道具Id */
					interactionId: value,
					/**获赠玩家 */
					toSitId: BANKER_ID,
					/** 总共需要花费的金币 */
					num: 0
				}
				sktInstance.sendSktMessage(SKT_MAG_TYPE.GIVE_GIFT, data)

			})
		});

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {

	}

	toggleCallback(event: Event, customEventData: string) {

	}

	protected bindUI(): void {

				
	}

	update(deltaTime: number) {

	}
}

