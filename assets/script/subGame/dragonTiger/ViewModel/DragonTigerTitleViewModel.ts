import { _decorator, assetManager,AssetManager, Component, instantiate, Node, Animation, Tween, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { DragonTiger_title, IProps, IEvent } from "../components/DragonTiger_title"
import ViewModel ,{ StoreInject }from "../../../base/ViewModel"
import { StateType } from "../store/reducer";
import { getStore } from '../store';
import {sourceManageSeletor} from '../index';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { EffectType } from '../../../utils/NodeIOEffect';
import SetViewModel from './DragonTigerSetViewModel';
import RuleViewModel from './DragonTigerRuleViewModel';
import { global } from '../../../hall';
import { gameTime, hisTime, timer } from '../components/DragonTiger_MainPanel';
import { setPokerLeftAction, setPokerRightAction, setReadyPAction, setSendedPAction, setTipsAction } from '../store/actions/pokerDetail';
import { changeGameTypeAction, setMemberBetAction } from '../store/actions/history';
import { changeAllWinUsersAction, changeCancelBetDataAction, changeGoldDataAction, setNewBetDataAction, setUsersInfoAction } from '../store/actions/game';
import { usersViewModel } from './DragonTigerMainViewModel';


const { ccclass, property } = _decorator;

export let setViewModel:SetViewModel
export let ruleViewModel:RuleViewModel
@StoreInject(getStore())
class TitleViewModel extends ViewModel<DragonTiger_title, IProps, IEvent> {

    private isClick:boolean=false
    constructor() {
        super('DragonTiger_title')     
      }
    
    protected begin() { 
        this.setEvent({
          returnHall: () => {
            window.clearInterval(timer);
            window.clearTimeout(hisTime);
            window.clearTimeout(gameTime);
            this.clearCacheData()
            global.closeSubGame();
          },
          openMenuPanel:()=>{
            this.openMenu()
            
          },
          openHelpPenel:()=>{
            this.openRule()
          },
    
          openSetPanel:()=>{
            this.openSet();
          },
        })
  }
  public clearCacheData() {
    this.dispatch(changeGoldDataAction({}));
    this.dispatch(setTipsAction(null));
    this.dispatch(setSendedPAction(0));
    this.dispatch(setReadyPAction(0));
    this.dispatch(changeGameTypeAction(null));
    this.dispatch(setMemberBetAction(null));
    this.dispatch(setPokerLeftAction(null));
    this.dispatch(setPokerRightAction(null));
    this.dispatch(setNewBetDataAction(null));
    this.dispatch(changeCancelBetDataAction(null));
    this.dispatch(setUsersInfoAction(null));
    this.dispatch(changeAllWinUsersAction(null));

  }
    
    public  openMenu(){
      const titleNode:Node= this.viewNode.getChildByName("props_mask_titrle")
      const titleAnimation=this.viewNode.getChildByName("props_mask_titrle").getComponent(Animation)
      if(!this.isClick){
        titleAnimation.play()   
        titleAnimation.on(Animation.EventType.FINISHED,()=>{
          this.isClick=true
        },this)
  
      }else{
        const tw=new Tween(titleNode).to(0.2,{scale:new Vec3(1,0,0)}).start()
        this.isClick=false
      }
  
      
    }
    public openSet(nodeWrap?: Node) {
      setViewModel = new SetViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.MAIN_SET).source)
        .appendTo(nodeWrap || this.parentNode, { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
          onClosePanel: () => {
            setViewModel.unMount(EffectType.EFFECT2)
            
          }
        }).connect()
    }
    public openRule(nodeWrap?: Node) {
      ruleViewModel = new RuleViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.MAIN_RULE).source)
        .appendTo(nodeWrap || this.parentNode, { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
          onClosePanel: () => {
            ruleViewModel.unMount(EffectType.EFFECT2)
            
          }
        }).connect()
    }
    public connect() {
      this.inject({}, (state: StateType) => {
        return {
          memberBet:state.history.memberBet,
          winType:state.userInfo.winType,
        }
      })
      return this
    }

}

export default TitleViewModel

