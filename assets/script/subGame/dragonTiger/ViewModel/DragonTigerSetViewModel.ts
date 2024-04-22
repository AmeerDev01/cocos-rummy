import { _decorator, assetManager,AssetManager, Component, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { DragonTiger_set, IProps, IEvent } from "../components/DragonTiger_set"
import ViewModel from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
const { ccclass, property } = _decorator;

class SetViewModel extends ViewModel<DragonTiger_set, IProps, IEvent> {


    constructor() {
        super('DragonTiger_set')     
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

export default SetViewModel

