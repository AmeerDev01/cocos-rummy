import { _decorator, assetManager,AssetManager, Component, instantiate, Node, Animation, Tween, Vec3, find } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { Bandar_title, IProps, IEvent } from "../components/Bandar_title"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
import { getStore } from '../store';
import { global } from '../../../hall';
import { sourceManageSelector } from '../index';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { EffectType } from '../../../utils/NodeIOEffect';
import SetViewModel from './BandarSetViewModel';
import RuleViewModel from './BandarRuleViewModel';
import { changeAllWinUsersAction, changeCancelBetDataAction, changeGoldDataAction, setNewBetDataAction } from '../store/actions/bet';
import { betAreaViewModel } from './BandarGameBoardViewModel';
import { setCountDownAction, setGameStatusAction, setInitGameStatusAction, setTipsAction } from '../store/actions/game';
import { GameStatus } from '../type';
import { setAllCardTypeAction, setBankerPokerAction, setBlackPokerAction, setBlockNumAction, setDiamondPokerAction, setFarmhouseNumAction, setHeartNumAction, setPlumPokerAction, setRedPokerAction, setSakuraNumAction, setSpadeNumAction, setWinAreaAction } from '../store/actions/pokerDetail';
import { changeResult1Action, changeResult2Action, changeResult3Action, changeResult4Action } from '../store/actions/history';
const { ccclass, property } = _decorator;


export function confirmDoneAfterFn(){

}

export let setViewModel:SetViewModel
export let ruleViewModel:RuleViewModel
@StoreInject(getStore())
class TitleViewModel extends ViewModel<Bandar_title, IProps, IEvent> {
  private isShowMenu:boolean=false

    constructor() {
        super('Bandar_title')     
      }
    
      protected begin() { 
        this.setEvent({
          returnHall:()=>{
            this.clearCacheData()
            betAreaViewModel.comp.clearAllBetAreaGold();
            betAreaViewModel.comp.betAreaInfo.clear();
            global.closeSubGame();
          },
          openMenuPanel:()=>{
            this.openMenu()
          },
          openHelpPanel:()=>{
            this.openRule()
          },
    
          openSetPanel:()=>{
            this.openSet();
          },
        })
    }
    
    public  openMenu(){
      const titleNode:Node= this.viewNode.getChildByName("props_mask_titrle")
      const titleAnimation=this.viewNode.getChildByName("props_mask_titrle").getComponent(Animation)
      if(!this.isShowMenu){
        titleAnimation.play()    
      }else{
        const tw=new Tween(titleNode).to(0.2,{scale:new Vec3(1,0,0)}).start()
      }
      this.isShowMenu=!this.isShowMenu
      
    }
    public openSet(nodeWrap?: Node) {
      setViewModel = new SetViewModel().mountView(sourceManageSelector().getFile(PrefabPathDefine.MAIN_SET).source)
        .appendTo(find("Canvas"), { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
          onClosePanel: () => {
            setViewModel.unMount(EffectType.EFFECT2)
          }
        }).connect()
    }
    public openRule(nodeWrap?: Node) {
      ruleViewModel = new RuleViewModel().mountView(sourceManageSelector().getFile(PrefabPathDefine.MAIN_RULE).source)
        .appendTo(find("Canvas"), { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
          onClosePanel: () => {
            ruleViewModel.unMount(EffectType.EFFECT2)  
          }
        }).connect()
    }
  
  public clearCacheData() {
      this.dispatch(changeGoldDataAction({}));
      this.dispatch(setNewBetDataAction(null)); 
      this.dispatch(setGameStatusAction(null));
      this.dispatch(setInitGameStatusAction(null))
      this.dispatch(changeAllWinUsersAction(null));
      this.dispatch(setWinAreaAction([]));
      this.dispatch(setBankerPokerAction(null));
      this.dispatch(setBlackPokerAction(null));
      this.dispatch(setRedPokerAction(null));
      this.dispatch(setPlumPokerAction(null));
      this.dispatch(setDiamondPokerAction(null));
      this.dispatch(setSpadeNumAction(null));
      this.dispatch(setHeartNumAction(null));
      this.dispatch(setSakuraNumAction(null));
      this.dispatch(setBlockNumAction(null));
      this.dispatch(setFarmhouseNumAction(null));
      this.dispatch(setTipsAction(null))
      this.dispatch(setCountDownAction(0));
      this.dispatch(setAllCardTypeAction(null));
      this.dispatch(setSpadeNumAction(null));
      this.dispatch(setHeartNumAction(null));
      this.dispatch(setSakuraNumAction(null));
      this.dispatch(setBlockNumAction(null));
      this.dispatch(setFarmhouseNumAction(null));
      this.dispatch(changeCancelBetDataAction(null));
      this.dispatch(changeResult1Action([]));
      this.dispatch(changeResult2Action([]));
      this.dispatch(changeResult3Action([]));
      this.dispatch(changeResult4Action([]));

      
    }
      
      public connect() {
        const storeState = this.store.getState() as StateType;

        this.inject({}, (state: StateType) => {
          return {
            betData: state.bet.betData,
            memberBet: state.bet.memberBet,
            
          }
        })
        return this
      }

}

export default TitleViewModel
