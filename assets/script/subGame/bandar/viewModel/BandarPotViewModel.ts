import { _decorator, assetManager,AssetManager, Component, find, instantiate, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { Bandar_pot, IProps, IEvent } from "../components/Bandar_pot"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
import { getStore } from '../store';
import JackpotViewModel from './BandarJackpotViewModel';
import { sourceManageSelector } from '../index';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { EffectType } from '../../../utils/NodeIOEffect';
const { ccclass, property } = _decorator;

@StoreInject(getStore())
class PotViewModel extends ViewModel<Bandar_pot, IProps, IEvent> {


    constructor() {
        super('Bandar_pot')     
      }
    
      protected begin() { 
        this.setEvent({
            openJackpotPanel:()=>{
                this.openJackpot()
            }
        })
      }
    
      public openJackpot(nodeWrap?: Node) {
        const baseViewModel = new JackpotViewModel().mountView(sourceManageSelector().getFile(PrefabPathDefine.MAIN_JACKPOT).source)
          .appendTo(find("Canvas"), { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
            onClosePanel: () => {
                baseViewModel.unMount(EffectType.EFFECT2)  
            }
          }).connect()
      }


      public connect() {
        this.inject({}, (state: StateType) => {
          return {
            jackpot:state.game.jackpot
          }
        })
        return this
      }

}

export default PotViewModel
