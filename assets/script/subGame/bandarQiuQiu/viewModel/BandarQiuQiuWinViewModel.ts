import { _decorator, assetManager,AssetManager, Component, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { BandarQiuQiu_win, IProps, IEvent } from "../components/BandarQiuQiu_win"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
import { getStore } from '../store';
import { SKT_MAG_TYPE, sktMsgListener } from '../socketConnect';
// import { setUserInfoAction } from '../store/actions/userInfo';
const { ccclass, property } = _decorator;

@StoreInject(getStore())
class WinViewModel extends ViewModel<BandarQiuQiu_win, IProps, IEvent> {


    constructor() {
        super('BandarQiuQiu_win')     
      }
    
      protected begin() { 
         
      }
    
      
      public connect() {
        const storeState = this.store.getState() as StateType;

        this.inject({
        }, (state: StateType) => {
          // console.log("roomWinInfo win",state.history.roomWinInfo)
          return {
            myInfo:state.game.myInfo,
            // roomWinInfo:state.history.roomWinInfo
          }
        })
        return this
      }

}

export default WinViewModel

