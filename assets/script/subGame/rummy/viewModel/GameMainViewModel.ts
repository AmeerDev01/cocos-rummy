import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { EffectType } from "../../../utils/NodeIOEffect"
import { IEvent, IProps, Rummy_GameMain } from "../components/Rummy_GameMain"
import config from "../config"
import { sourceManageSeletor } from "../index"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { getStore } from "../store"
import { quitRoom } from "../store/action/game"
import { StateType } from "../store/reducer"
import { PromptType } from "../type"
import FooterViewModel from "./FooterViewModel"
import HeadViewModel from "./HeadViewModel"
import HeaderViewModel from "./HeaderViewModel"
import HelpViewModel from "./HelpViewModel"
import MineViewModel from "./MineViewModel"
import PromptViewModel from "./PromptViewModel"
import ResultViewModel from "./ResultViewModel"
import RuleViewModel from "./RuleViewModel"

@StoreInject(getStore())
class GameMainViewModel extends ViewModel<Rummy_GameMain, IProps, IEvent> {
  constructor() {
    super('Rummy_GameMain')
  }

  private headerViewModel: HeaderViewModel;
  private footerViewModel: FooterViewModel;
  private mineViewModel: MineViewModel;
  private headViewModels: HeadViewModel[] = [];

  protected begin() {
    this.headerViewModel = new HeaderViewModel().mountView(sourceManageSeletor()
      .getFile(PrefabPathDefine.HEADER).source).appendTo(this.viewNode).connect();
    this.footerViewModel = new FooterViewModel().mountView(sourceManageSeletor()
      .getFile(PrefabPathDefine.FOOTER).source).appendTo(this.viewNode).connect();

    this.initHeadView();

    this.headerViewModel.setEvent({
      exitRoom: () => {
        this.onExitRoom();
      },
      onOpenDeskInfoPanel: () => {
        this.showDeskInfoPanel();
      },
      onOpenRulePanel: () => {
        this.showRulePanel();
      }
    })

    this.setEvent({
      getHeadPos: (index: number) => {
        return this.getHeadPos(index);
      }
    })
  }

  /**初始化头像 */
  private initHeadView() {
    config.seatInfo.forEach((v, i) => {
      if (v.index === config.gameConfig.mySeatIndex) {
        this.mineViewModel = new MineViewModel(v.index).mountView(sourceManageSeletor().getFile(PrefabPathDefine.MINE).source)
          .appendTo(this.comp.getHeadNode()).connect();
        this.mineViewModel.setPos(v.pos);
        this.headViewModels.push(null);
      } else {
        const headViewModel = new HeadViewModel(v.index).mountView(sourceManageSeletor().getFile(PrefabPathDefine.HEAD).source)
          .appendTo(this.comp.getHeadNode()).connect();
        headViewModel.setPos(v.pos);
        headViewModel.setScale(v.scale);
        this.headViewModels.push(headViewModel);
      }
    })
  }

  private getHeadPos(index: number) {
    if (index === 0) {
      return this.mineViewModel.viewNode.worldPosition;
    } else {
      return this.headViewModels[index].viewNode.worldPosition;
    }
  }

  protected unMountCallBack(): void {
    this.headViewModels = [];
    this.mineViewModel = undefined;
    this.headerViewModel = undefined;
  }

  private onExitRoom() {
    this.unMount();
    this.dispatch(quitRoom(0))
  }

  public showPromptPanel(promptType: PromptType, params: any[], done = undefined) {
    new PromptViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.PROMPT_PANEL).source).appendTo(this.viewNode, {
      isModal: true,
      effectType: EffectType.EFFECT1,
    })
      .setEvent({
        callback: () => {
          done && done();
        }
      })
      .setProps({
        promptType: promptType,
        params: params,
      });
  }
  public showDeskInfoPanel() {
    new HelpViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.HELP_PANEL).source).appendTo(this.viewNode, {
      isModal: true,
      effectType: EffectType.EFFECT1,
    })
      .setEvent({
        // callback: () => {
        //   done && done();
        // }
      })
      .setProps({
        // promptType: promptType,
        // params: params,
      });
  }
  public showRulePanel() {
    new RuleViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.RULE_PANEL).source).appendTo(this.viewNode, {
      isModal: true,
      effectType: EffectType.EFFECT1,
    })
  }

  public showResultPanel() {
    new ResultViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.RESULT_PANEL).source).appendTo(this.viewNode, {
      isModal: true,
      effectType: EffectType.EFFECT1,
    })
      .setEvent({
        // callback: () => {
        //   done && done();
        // }
      })
      .setProps({
        // promptType: promptType,
        // params: params,
      });
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        flowInfo: state.deskData.flowInfo,
        cardHeapInfo: state.deskData.cardHeapInfo,
        action: state.deskData.action,
      }
    })
    return this
  }
}

export default GameMainViewModel