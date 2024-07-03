import { _decorator, assetManager,AssetManager, Component, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { DragonTiger_lose, IProps, IEvent } from "../components/DragonTiger_lose"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
import { getStore } from '../store';
const { ccclass, property } = _decorator;

@StoreInject(getStore())
class LoseViewModel extends ViewModel<DragonTiger_lose, IProps, IEvent> {


    constructor() {
        super('DragonTiger_lose')     
      }
    
      protected begin() { 

      
      }
    
      
      public connect() {
        const storeState = this.store.getState() as StateType;
        this.inject({
          winGold: storeState.userInfo.winGold,
          roomWinInfo:storeState.history.roomWinInfo,
        }, (state: StateType) => {
          // console.log("roomWinInfo lose",state.history.roomWinInfo)
          return {
            winGold:state.userInfo.winGold,
            roomWinInfo:state.history.roomWinInfo,
            memberBet:state.userInfo.memberBet,
            winType:state.userInfo.winType
          }
        })
        return this
      }

}

export default LoseViewModel

