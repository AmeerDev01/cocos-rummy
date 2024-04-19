import { _decorator, assetManager,AssetManager, Component, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { DragonTiger_onlines, IProps, IEvent } from "../components/DragonTiger_onlines"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
import { getStore } from '../store';
const { ccclass, property } = _decorator;

@StoreInject(getStore())
class OnlineViewModel extends ViewModel<DragonTiger_onlines, IProps, IEvent> {


    constructor() {
        super('DragonTiger_onlines')     
      }
    
      protected begin() { 
         
      }
    
      
      public connect() {
        this.inject({}, (state: StateType) => {
          
          return {
            roomInfoSize:state.history.roomInfoSize,
            memberData:state.history.memberData,
            memberId:state.userInfo.memberId,
            memberName:state.userInfo.memberName,
            roomLeftInfoVos:state.history.roomLeftInfoVos,
            roomRightInfoVos:state.history.roomRightInfoVos,
            memberBet:state.userInfo.memberBet,
            winType:state.userInfo.winType,
            winGold:state.userInfo.winGold,
          }
        })
        return this
      }

}

export default OnlineViewModel

