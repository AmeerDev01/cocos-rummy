import { _decorator, assetManager,AssetManager, Component, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { DragonTiger_rule, IProps, IEvent } from "../components/DragonTiger_rule"
import ViewModel from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
const { ccclass, property } = _decorator;

class RuleViewModel extends ViewModel<DragonTiger_rule, IProps, IEvent> {


    constructor() {
        super('DragonTiger_rule')     
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

export default RuleViewModel

