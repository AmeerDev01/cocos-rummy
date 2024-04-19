import { _decorator, assetManager,AssetManager, Component, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { Bandar_rule, IProps, IEvent } from "../components/Bandar_rule"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
import { getStore } from '../store';
const { ccclass, property } = _decorator;

@StoreInject(getStore())
class RuleViewModel extends ViewModel<Bandar_rule, IProps, IEvent> {


    constructor() {
        super('Bandar_rule')     
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
