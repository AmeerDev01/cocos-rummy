import { _decorator, assetManager,AssetManager, Component, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { Bandar_sendCard, IProps, IEvent } from "../components/Bandar_sendCard"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
import { getStore } from '../store';
import TaskScheduler, { Task } from '../../../utils/TaskScheduler';
const { ccclass, property } = _decorator;

@StoreInject(getStore())
class SendViewModel extends ViewModel<Bandar_sendCard, IProps, IEvent> {
  private taskScheduler:TaskScheduler=new TaskScheduler()

    constructor() {
        super('Bandar_sendCard')     
      }
    
      protected begin() { 
       
      }
    

      public connect() {
        this.inject({}, (state: StateType) => {
          return {
            countDown:state.game.countDown,
            gameStatus: state.game.gameStatus,
            seconds: state.game.seconds,
            
          }
        })
        return this
      }

}

export default SendViewModel
