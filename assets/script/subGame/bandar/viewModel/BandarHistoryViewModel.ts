import { _decorator, assetManager,AssetManager, Component, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { Bandar_history, IProps, IEvent } from "../components/Bandar_history"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
import { getStore } from '../store';
const { ccclass, property } = _decorator;

@StoreInject(getStore())
class HistoryViewModel extends ViewModel<Bandar_history, IProps, IEvent> {


    constructor() {
        super('Bandar_history')     
      }
    
      protected begin() { 
      
      }
    
      
      public connect() {
        this.inject({}, (state: StateType) => {
          return {
           tren:state.history.tren,
           statistik:state.history.statistik,
           rekor:state.history.rekor,
          }
        })
        return this
      }

}

export default HistoryViewModel
