import { Node, instantiate, sys } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { Fruit777_BoxPanel, IProps, IEvent } from "../components/Fruit777_BoxPanel"
import { Fruit777_JackPot, IState as JPIState, IProps as JPIprops, IEvent as JPIEvent } from "../components/Fruit777_JackPot"
import { StateType } from "../store/reducer"
import { getStore } from "../store"
import { getStore as GetHallStore } from "../../../hall/store"
import { footerViewModel, fruit777_Audio, sourceManageSeletor } from "../index"
import { SKT_MAG_TYPE, sktInstance, sktMsgListener } from '../socketConnect';
import { addToastAction } from "../../../hall/store/actions/baseBoard"
import dataTransfer, { DataKeyType, refreshData } from "../dataTransfer"
import config from "../config"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { setRollRoundEnd } from "../store/actions/roller"
import { changeProfit, setSubGameTimes, setWaiting, updateBalance, updateSubGameTimes } from "../store/actions/game"
import { GameType, JactpotType } from "../type"
import BaseViewModel from "../../../common/viewModel/BaseViewModel"
import { OpenStatus } from "../components/Fruit777_AwardBox"
import { SoundPathDefine } from "../sourceDefine/soundDefine"
import { lang } from "../../../hall"

@StoreInject(getStore())
class BoxPanelViewModel extends ViewModel<Fruit777_BoxPanel, IProps, IEvent> {
  constructor() {
    super('Fruit777_BoxPanel')
  }
  public openWaitingBoxId: number = -1
  private jackpot: BaseViewModel<Fruit777_JackPot, JPIState, JPIprops, JPIEvent>
  protected begin() {
    fruit777_Audio.stop()
    fruit777_Audio.play(SoundPathDefine.BG_MUSIC_1, true)
    this.dispatch(setRollRoundEnd(false))
    // console.log('SUBGAME_TIMES')
    this.dispatch(changeProfit(dataTransfer(DataKeyType.FREE_GAME_AMOUNT)))
    this.dispatch(updateSubGameTimes(dataTransfer(DataKeyType.SUBGAME_TIMES)))
    this.jackpot = new BaseViewModel<Fruit777_JackPot, JPIState, JPIprops, JPIEvent>('Fruit777_JackPot').mountView(sourceManageSeletor().getFile(PrefabPathDefine.JACK_POT).source).appendTo(this.viewNode)
    sktMsgListener.add(SKT_MAG_TYPE.LAUNCHER_BET, "box", (data, error) => {
      if (!error) {
        // console.log('box', data)
        refreshData(data)
        //这里尤其注意，gameType变了，这里的数据一定要阻止
        // if (dataTransfer(DataKeyType.GAME_TYPE) !== GameType.SUBGAME1) return
        const awardInfo = dataTransfer(DataKeyType.AWARD_INFO)
        for (let key in awardInfo) {
          if (key === "BONUS") {
            this.setProps({
              BONUS: awardInfo[key]
            })
          } else {
            const awardBoxItem = config.awardBoxItem.find(item => item.id === +key)
            // console.log(key, awardBoxItem)
            awardBoxItem && this.setProps({
              openDoBoxData: {
                boxId: this.openWaitingBoxId,
                dataId: awardBoxItem.id,
                times: awardBoxItem.addTimes,
                levelUp: awardBoxItem.up,
                fruitFileName: awardBoxItem.fileName,
                score: awardInfo[key],
                distance: awardBoxItem.distance,
                BONUS: 0,
                name: awardBoxItem.name
              }
            })
          }
        }
        this.openWaitingBoxId = -1
      } else {
        this.openWaitingBoxId = -1
      }
    }, 10)

    this.setEvent({
      onOpenHandler: (boxId) => {
        console.log('open', this.openWaitingBoxId)
        fruit777_Audio.playOneShot(SoundPathDefine.OPEN_AWARDBOX)
        if (this.openWaitingBoxId === -1 && dataTransfer(DataKeyType.SUBGAME_TIMES) !== 0) {
          this.openWaitingBoxId = boxId
          sktInstance.sendSktMessage(SKT_MAG_TYPE.LAUNCHER_BET, {
            positionId: footerViewModel.comp.getPositionData().positionId,
            tableId: JSON.parse(sys.localStorage.getItem('fruit777')).tableId,
            gameId: config.gameId
          })
          this.dispatch(setWaiting(false))
        } else {
          GetHallStore().dispatch(addToastAction({ content: lang.write(k => k.InitGameModule.HoldOn, {}, { placeStr: "Hold on please..." }) }))
        }
      },
      onFreeGameAmoundChange: () => {
        this.dispatch(changeProfit(dataTransfer(DataKeyType.FREE_GAME_AMOUNT)))
      },
      allDoneHandler: () => {
        this.dispatch(setSubGameTimes(dataTransfer(DataKeyType.SUBGAME_TIMES)))
      },
      updateTimesHandler: (times, jackPotTypeName) => {
        if (dataTransfer(DataKeyType.GAME_TYPE) === GameType.SUBGAME1) {
          this.dispatch(updateSubGameTimes(times))
          this.dispatch(setWaiting(true))
        } else {
          this.dispatch(updateSubGameTimes(0))
        }
        this.dispatch(updateBalance(dataTransfer(DataKeyType.BALANCE)))
        if (jackPotTypeName !== undefined) {
          const props = instantiate(this.jackpot.comp.props)
          jackPotTypeName === JactpotType.BANANA && (props.fruitHeader['banana'] = true)
          jackPotTypeName === JactpotType.APPLE && (props.fruitHeader['apple'] = true)
          jackPotTypeName === JactpotType.GRAPE && (props.fruitHeader['grape'] = true)
          jackPotTypeName === JactpotType.STRAWBERRY && (props.fruitHeader['strawberry'] = true)
          jackPotTypeName === JactpotType.WATERMELON && (props.fruitHeader['watermelon'] = true)
          jackPotTypeName === JactpotType.LEVEL && (props['level'] = props.level + 1)
          this.jackpot.setProps(props)
        }
      }
    })
    this.comp.scheduleOnce(() => {
      this.dispatch(setWaiting(true))
    }, 1.5)

    footerViewModel.autoLauncherPanel.setLaunchEvent(() => {
      this.manualBetHandler()
    })
  }

  //用于自动触发
  public manualBetHandler() {
    if (dataTransfer(DataKeyType.GAME_TYPE) === GameType.SUBGAME1 && this.comp.awardBoxMap) {
      for (let i = 0, l = this.comp.awardBoxMap.length; i < l; i++) {
        const awardBox = this.comp.awardBoxMap[i]
        if (awardBox.comp.getOpenStatus() === OpenStatus.CLOSE) {
          awardBox.comp.openAwardBox()
          break
        }
      }
    }
  }
  protected unMountCallBack(): void {
    // this.comp.awardBoxMap.forEach(vm => vm.unMount())
    // this.jackpot.unMount()
    sktMsgListener.removeById("box")
  }
  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        remainGameTimes: state.game.remainSubGameTimes
      }
    })
    return this
  }
}

export default BoxPanelViewModel