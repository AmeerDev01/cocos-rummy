import { _decorator, assetManager,AssetManager, Component, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { DragonTiger_users, IProps, IEvent } from "../components/DragonTiger_users"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import mainGameViewModel from './DragonTigerMainViewModel';
import {sourceManageSeletor} from '../index';
import { StateType } from "../store/reducer"
import { getStore } from '../store';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { EffectType } from '../../../utils/NodeIOEffect';
import { dragonTigerWebSocketDriver, SKT_MAG_TYPE } from '../socketConnect';
import { gameCacheData, ReqGiftSo } from '../type';

const { ccclass, property } = _decorator;

@StoreInject(getStore())
class UsersViewModel extends ViewModel<DragonTiger_users, IProps, IEvent> {


    constructor() {
        super('DragonTiger_users')     
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
            dragonTigerWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.GIVE_GIFT, data)
          }
        })

      }
    
      
      public connect() {
        this.inject({}, (state: StateType) => {
          return {
            roomLeftInfoVos:state.history.roomLeftInfoVos,
            roomRightInfoVos:state.history.roomRightInfoVos,
            memberId:state.userInfo.memberId,
            memberName:state.userInfo.memberName,
            usersInfo: state.game.usersInfo,
            newBetData:state.game.newBetData,
          }
        })
        return this
      }

}

export default UsersViewModel

