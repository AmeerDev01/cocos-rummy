import ViewModel from "../../../base/ViewModel"
import { TurntablePanel, IEvent, IProps } from "./TurntablePanel"
import { StateType } from "../../store/reducer"
import BaseViewModel from "../../viewModel/BaseViewModel"
import { Turntable, IState as CBState, IProps as CBProps, IEvent as CBEvent } from './Turntable';
import { TurntableHelp, IState as HBState, IProps as HBProps, IEvent as HBEvent } from './TurntableHelp';
import { EffectType } from "../../../utils/NodeIOEffect";
import { PrefabPathDefine } from "../../sourceDefine/prefabDefine";
import {sourceManageSeletor } from '../../index';
class TurntableViewModel extends ViewModel<TurntablePanel, IProps, IEvent> {
    constructor() {
        super('TurntablePanel')
    }

    protected begin() {
        this.setEvent({
            rotaryStarting: (type,data?) => {
                if(type == 1){
                    const givePanel = new BaseViewModel<TurntableHelp, HBState, HBProps, HBEvent>('TurntableHelp').mountView(sourceManageSeletor().getFile(PrefabPathDefine.HELL_ACTIVITY_TURNTABLE_INTRO).source)
                    .appendTo(this.comp.node, { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
                        onClosePanel: () => {
                            givePanel.unMount(EffectType.EFFECT2)
                        }
                    })
                    return
                }
                if(type == 2){
                      const  givePanel = new BaseViewModel<Turntable, CBState, CBProps, CBEvent>('Turntable').mountView(sourceManageSeletor().getFile(PrefabPathDefine.HELL_ACTIVITY_TURNTABLE).source)
                         .appendTo(this.parentNode.parent, { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
                            onClosePanel: () => {
                                givePanel.unMount(EffectType.EFFECT2)
                            },
                            setCount:(num)=>{
                                this.comp.setCount(num)
                            },
                            setReadStatus: (value: string) => {
                                this.comp.events.setReadStatus(value);
                            }
                        }).setProps({TurntableData:data}) 
                }
            }
        })
    }

    public connect() {
        this.inject({}, (state: StateType) => {
            return {
               
            }
        })
        return this
    }
}

export default TurntableViewModel