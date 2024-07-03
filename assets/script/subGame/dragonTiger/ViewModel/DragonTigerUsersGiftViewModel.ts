import { _decorator, assetManager,AssetManager, Component, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { DragonTiger_usersGift, IProps, IEvent } from "../components/DragonTiger_usersGift"
import ViewModel from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
const { ccclass, property } = _decorator;

class UsersGiftViewModel extends ViewModel<DragonTiger_usersGift, IProps, IEvent> {


    constructor() {
        super('DragonTiger_usersGift')     
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

export default UsersGiftViewModel

