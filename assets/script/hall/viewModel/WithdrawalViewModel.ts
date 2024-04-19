import { Node, Prefab, Sprite } from "cc"
import ViewModel from "../../base/ViewModel"
import { Hall_WithdrawalPanel, IProps, IEvent } from "../components/Hall_Withdraw/Hall_WithdrawalPanel"
import { Hall_WithdrawBankBind, IState as BBIState, IProps as BBIProps, IEvent as BBIEvent } from "../components/Hall_Withdraw/Hall_WithdrawBankBind"
import { StateType } from "../store/reducer"
import { SKT_MAG_TYPE, sktInstance, sktMsgListener } from "../socketConnect"
import { baseBoardView, fetcher, sourceManageSeletor } from "../index"
import { PrefabPathDefine } from "../sourceDefine/prefabDefine"
import { EffectType } from "../../utils/NodeIOEffect"
import WithdrawBankViewModel from "./WithdrawBankViewModel"
import { setWithdrawChannelList, sizeChangeAction, WithdrawBankChannelType } from "../store/actions/withdraw"
import Fetcher from "../../utils/Fetcher"
import { ApiUrl } from "../apiUrl"
import { addToastAction } from "../store/actions/baseBoard"
import BaseViewModel from "../../common/viewModel/BaseViewModel"
import { lang } from "../index"
import ModalBox from "../../common/ModalBox"
import Guide from "../../utils/Guide"


class WithdrawalViewModel extends ViewModel<Hall_WithdrawalPanel, IProps, IEvent> {
  constructor() {
    super('Hall_WithdrawalPanel')
  }
  private validFlowingWater: number = 0
  protected begin() {
    this.setEvent({
      openWithdrawBank: async () => {
        const withdrawBankViewModel = new WithdrawBankViewModel().mountView((await sourceManageSeletor().getFileAsync(PrefabPathDefine._HELL_WITHDRAWAL_BANK_LIST, Prefab)).source)
          .appendTo(this.parentNode, { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
            onCloseHandler: () => {
              withdrawBankViewModel.unMount(EffectType.EFFECT1)
            },
            onClickBankChannl: async (bankItem: WithdrawBankChannelType) => {
              const bankBindViewModel = new BaseViewModel<Hall_WithdrawBankBind, BBIState, BBIProps, BBIEvent>("Hall_WithdrawBankBind").mountView((await sourceManageSeletor()
                .getFileAsync(bankItem.onlineBanking === 0 ? PrefabPathDefine._HELL_WITHDRAW_WALLET_BIND : PrefabPathDefine._HELL_WITHDRAW_BANK_BIND, Prefab)).source)
              bankBindViewModel.appendTo(this.parentNode, { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
                onClosehandler: () => {
                  bankBindViewModel.unMount(EffectType.EFFECT1)
                },
                onBindDone: (hadChooseBankChannl: WithdrawBankChannelType, accountNumber: string, realName: string) => {
                  if (!baseBoardView.mainPanelViewModel.isTouristPass()) return
                  fetcher.send(ApiUrl.WITHDRAW_BIND_CARD, {
                    rechargeChannelId: hadChooseBankChannl.id, accountNumber, realName
                  }).then((data) => {
                    if (data !== -1) {
                      ModalBox.Instance().show({ content: lang.write(k => k.withdrawal.withdrawalSuccess, { gold: data }, { placeStr: "绑定提款信息成功获取金币" }), type: "Prompt" }, () => {
                        //重新拉取数据
                        this.refreshList()
                        bankBindViewModel.unMount(EffectType.EFFECT1)
                        return true
                      })
                    } else {
                      this.refreshList()
                      bankBindViewModel.unMount(EffectType.EFFECT1)
                    }
                  }).catch((e) => {
                    console.log(e)
                  })
                }
              }).setProps({
                hadChooseBankChannl: bankItem
              })
              if (bankItem.bind) {
                //已绑定

              }
            },
            onBankChannlDone: (bankItem: WithdrawBankChannelType) => {
              if (bankItem.bind) {
                this.dispatch(sizeChangeAction(bankItem))
                withdrawBankViewModel.unMount(EffectType.EFFECT1)
              } else {
                withdrawBankViewModel.comp.events.onClickBankChannl(bankItem)
                // this.dispatch(addToastAction({ content: "请选择已经绑定的渠道" }))
              }
            }
          }).connect()
      },
      trueToWithdraw: async (amount: number) => {
        // 确认提现，先弹出信息展示框
        const storeState = this.store.getState() as StateType;
        const withDrawTip = new BaseViewModel("Hall_WithdrawTip").mountView((await sourceManageSeletor().getFileAsync(PrefabPathDefine._HELL_WITHDRAW_TIPS, Prefab)).source)
          .appendTo(this.parentNode, { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
            onClosehandler: () => {
              withDrawTip.unMount()
            },
            doneHandler: () => {
              fetcher.send(ApiUrl.WITHDRAW_ORDER, {
                bankId: storeState.withdraw.withdrawBankChannelChoose.bankId,
                money: amount
              }).then((rsp) => {
                withDrawTip.unMount()
                this.dispatch(addToastAction({ content: lang.write(k => k.HallModule.WithdrawalApply, {}, { placeStr: "请求提交成功" }) }))
              })
            }
          }).setProps({
            iconName: storeState.withdraw.withdrawBankChannelChoose.name,
            accountNumber: storeState.withdraw.withdrawBankChannelChoose.accountNumber,
            withdrawAmount: amount,
            accountName: storeState.withdraw.withdrawBankChannelChoose.realName,
            withdrawalPremium: storeState.withdraw.withdrawBankChannelChoose.withdrawalPremium,
            logUrl: storeState.withdraw.withdrawBankChannelChoose.iconMax,
          })
      },
      openWithdrawBill: async () => {
        const withDrawTip = new BaseViewModel("Hall_WithdrawBill").mountView((await sourceManageSeletor().getFileAsync(PrefabPathDefine._HELL_WITHDRAW_BILL, Prefab)).source)
          .appendTo(this.parentNode, { effectType: EffectType.EFFECT1, isModal: true }).setEvent({
            onClosehandler: () => {
              withDrawTip.unMount(EffectType.EFFECT2)
            }
          })
        //提现列表
        fetcher.send(ApiUrl.USER_ORDER_LIST, { data: 2 }).then(async (rsp) => {
          withDrawTip.setProps({ orderList: rsp })
        }).catch((e) => {
          console.log(e)
        })
      }
    })
    
    sktMsgListener.add(SKT_MAG_TYPE.WITH_DRAW_LIST, "withdraw", (data) => {
      this.comp.addWithdrawBill(data)
    })
    sktInstance.sendSktMessage(SKT_MAG_TYPE.WITH_DRAW_LIST)
  }
  private refreshList() {
    //重新拉取数据
    fetcher.send(ApiUrl.WITHDRAW_BANK_CHANNEL_LIST, {}, "get").then((rsp) => {
      this.dispatch(setWithdrawChannelList(rsp))
    }).catch((e) => {
      console.log(e)
    })
  }

  protected unMountCallBack(): void {
    sktMsgListener.removeById('withdraw')
  }

  public connect() {
    const storeState = this.store.getState() as StateType;
    this.inject({
      memberAssetGoldPieces: storeState.memberInfo.memberAssetGoldPieces,
      withdrawBankChannelChoose: storeState.withdraw.withdrawBankChannelChoose,
    }, (state: StateType) => {
      // this.validFlowingWater = state.memberInfo.flowingWater
      return {
        memberAssetGoldPieces: state.memberInfo.memberAssetGoldPieces,
        withdrawBankChannelChoose: state.withdraw.withdrawBankChannelChoose,
        validFlowingWater: state.memberInfo.flowingWater
      }
    })
    return this
  }
}

export default WithdrawalViewModel