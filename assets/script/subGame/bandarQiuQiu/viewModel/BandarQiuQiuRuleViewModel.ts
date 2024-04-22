import { _decorator, assetManager,AssetManager, Component, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { BandarQiuQiu_rule, IProps, IEvent } from "../components/BandarQiuQiu_rule"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
import { getStore } from '../store';
const { ccclass, property } = _decorator;

@StoreInject(getStore())
class RuleViewModel extends ViewModel<BandarQiuQiu_rule, IProps, IEvent> {


    constructor() {
        super('BandarQiuQiu_rule')     
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
