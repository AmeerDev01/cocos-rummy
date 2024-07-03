import { _decorator, assetManager,AssetManager, Component, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { DragonTiger_down, IProps, IEvent } from "../components/DragonTiger_down"
import ViewModel from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
const { ccclass, property } = _decorator;

class DownViewModel extends ViewModel<DragonTiger_down, IProps, IEvent> {


    constructor() {
        super('DragonTiger_down')     
      }
    
      protected begin() { 
      
      }
       
      
      public connect() {
        this.inject({}, (state: StateType) => {
          return {
           
          }
        })
        return this
      }

}

export default DownViewModel

