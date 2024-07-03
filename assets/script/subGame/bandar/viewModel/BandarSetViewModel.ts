import { _decorator, assetManager,AssetManager, Component, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { Bandar_set, IProps, IEvent } from "../components/Bandar_set"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
import { getStore } from '../store';
const { ccclass, property } = _decorator;

@StoreInject(getStore())
class SetViewModel extends ViewModel<Bandar_set, IProps, IEvent> {


    constructor() {
        super('Bandar_set')     
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
