import { _decorator, assetManager,AssetManager, Component, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { Bandar_users, IProps, IEvent } from "../components/Bandar_users"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
import { getStore } from '../store';
import { gameCacheData, ReqGiftSo } from '../type';
import { SKT_MAG_TYPE, sktInstance } from '../socketConnect';
const { ccclass, property } = _decorator;

@StoreInject(getStore())
class UsersViewModel extends ViewModel<Bandar_users, IProps, IEvent> {


    constructor() {
        super('Bandar_users')     
      }
    
      protected begin() { 
        this.setEvent({
          giveGift: (value: number, memberId: string, num: number) => {
            const data: ReqGiftSo = {
              roomId: gameCacheData.roomId,
              /**道具Id */
              interactionId: value,
              /**获赠玩家 */
              toSitId: memberId,
              /** 总共需要花费的金币 */
              num: num
            }
            sktInstance.sendSktMessage(SKT_MAG_TYPE.GIVE_GIFT, data)
          }
        })
      }
    
      
      public connect() {
        this.inject({}, (state: StateType) => {
          return {
            newBetData:state.bet.newBetData,
            usersInfo:state.game.usersInfo,
            allWinUsers:state.bet.allWinUsers
          }
        })
        return this
      }

}

export default UsersViewModel
