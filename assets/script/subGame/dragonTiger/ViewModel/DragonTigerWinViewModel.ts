import { _decorator, assetManager,AssetManager, Component, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { DragonTiger_win, IProps, IEvent } from "../components/DragonTiger_win"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
import { getStore } from '../store';
import { SKT_MAG_TYPE} from '../socketConnect';
import { setUserInfoAction } from '../store/actions/userInfo';
const { ccclass, property } = _decorator;

@StoreInject(getStore())
class WinViewModel extends ViewModel<DragonTiger_win, IProps, IEvent> {


    constructor() {
        super('DragonTiger_win')     
      }
    
      protected begin() { 
         
      }
    
      
      public connect() {
        const storeState = this.store.getState() as StateType;

        this.inject({
          winGold:storeState.userInfo.winGold,
          roomWinInfo:storeState.history.roomWinInfo
        }, (state: StateType) => {
          // console.log("roomWinInfo win",state.history.roomWinInfo)
          return {
            winGold:state.userInfo.winGold,
            roomWinInfo:state.history.roomWinInfo
          }
        })
        return this
      }

}

export default WinViewModel

