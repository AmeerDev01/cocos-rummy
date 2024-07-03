import { _decorator, assetManager,AssetManager, Component, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { DragonTiger_historyWin, IProps, IEvent } from "../components/DragonTiger_historyWin"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
import { getStore } from '../store'
import { SKT_MAG_TYPE } from '../socketConnect';
import {setHistoryListAction} from '../store/actions/history';
const { ccclass, property } = _decorator;


@StoreInject(getStore())
class HistoryWinViewModel extends ViewModel<DragonTiger_historyWin, IProps, IEvent> {


    constructor() {
        super('DragonTiger_historyWin')     
      }
    
      protected begin() { 

      }
    
      
      public connect() {
        this.inject({}, (state: StateType) => {
          
          return {
           historyList:state.history.historyList
          }
        })
        return this
      }

}

export default HistoryWinViewModel

