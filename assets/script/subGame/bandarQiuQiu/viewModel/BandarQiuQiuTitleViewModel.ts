import { _decorator, assetManager,AssetManager, Component, instantiate, Node, Animation, Tween, Vec3, find } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { BandarQiuQiu_title, IProps, IEvent } from "../components/BandarQiuQiu_title"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { StateType } from "../store/reducer"
import { getStore } from '../store';
import { global } from '../../../hall';
import { sourceManageSelector } from '../index';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { EffectType } from '../../../utils/NodeIOEffect';
import SetViewModel from './BandarQiuQiuSetViewModel';
import RuleViewModel from './BandarQiuQiuRuleViewModel';
import { changeAllWinUsersAction, changeCancelBetDataAction, changeCardTypeAction, changeGoldDataAction, changeWinAreaRateAction, setMemberBetAction, setNewBetDataAction } from '../store/actions/bet';
// import { betAreaViewModel } from './BandarGameBoardViewModel';
import { setCountDownAction, setGameStatusAction, setGoldAction, setInitGameStatusAction, setTipsAction, setUsersInfoAction } from '../store/actions/game';
import { GameStatus } from '../type';
import { changeBlueCardAction, changeRedCardAction, changeTwinNumAction, changeWinAreaAction } from '../store/actions/pokerDetail';
const { ccclass, property } = _decorator;


export let setViewModel:SetViewModel
export let ruleViewModel:RuleViewModel
@StoreInject(getStore())
class TitleViewModel extends ViewModel<BandarQiuQiu_title, IProps, IEvent> {
  private isShowMenu:boolean=false

    constructor() {
        super('BandarQiuQiu_title')     
      }
    
      protected begin() { 
        this.setEvent({
          returnHall:()=>{
            global.closeSubGame();
            this.dispatch(setNewBetDataAction(null));
            // betAreaViewModel.comp.clearAllBetAreaGold();
            this.dispatch(setGameStatusAction(null));
            this.dispatch(changeAllWinUsersAction(null));
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
  public clearCacheData() {
    this.dispatch(setNewBetDataAction(null)); 
    this.dispatch(setGameStatusAction(null));
    this.dispatch(setInitGameStatusAction(null))
    this.dispatch(changeAllWinUsersAction(null));
    this.dispatch(setTipsAction(null))
    this.dispatch(setCountDownAction(0));
    this.dispatch(changeGoldDataAction(null));
    this.dispatch(setMemberBetAction(null))
    this.dispatch(setUsersInfoAction(null));
    this.dispatch(changeCancelBetDataAction(null));
    this.dispatch(changeBlueCardAction(null));
    this.dispatch(changeRedCardAction(null));
    this.dispatch(changeTwinNumAction(null));
    this.dispatch(changeWinAreaRateAction(null));
    this.dispatch(changeCardTypeAction(null));
  }
    
  public openMenu() {
      const titleNode: Node = this.comp.getPropertyNode().props_mask_titrle as Node
      const titleAnimation=titleNode.getComponent(Animation)
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
