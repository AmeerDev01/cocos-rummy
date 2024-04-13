import { _decorator, assetManager,AssetManager, Component, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { BandarQiuQiu_lose, IProps, IEvent } from "../components/BandarQiuQiu_lose"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
import { getStore } from '../store';
const { ccclass, property } = _decorator;

@StoreInject(getStore())
class LoseViewModel extends ViewModel<BandarQiuQiu_lose, IProps, IEvent> {


    constructor() {
        super('BandarQiuQiu_lose')     
      }
    
      protected begin() { 

      
      }
    
      
      public connect() {
        const storeState = this.store.getState() as StateType;
        this.inject({
        }, (state: StateType) => {
          // console.log("roomWinInfo lose",state.history.roomWinInfo)
          return {
            myInfo:state.game.myInfo,
            // roomWinInfo:state.history.roomWinInfo,
          }
        })
        return this
      }

}

export default LoseViewModel

