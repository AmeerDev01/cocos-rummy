import { Node } from "cc"
import ViewModel from "../../base/ViewModel"
import { Hall_BankPanel, IProps, IEvent } from "../components/Hall_BankPanel"
import { StateType } from "../store/reducer"
import { SKT_MAG_TYPE, sktInstance, sktMsgListener } from "../socketConnect"
import Fetcher from "../../utils/Fetcher"
import { ApiUrl } from "../apiUrl"
import { addToastAction } from "../store/actions/baseBoard"
import { fetcher,lang } from "../index"

class BankViewModel extends ViewModel<Hall_BankPanel, IProps, IEvent> {
  constructor() {
    super('Hall_BankPanel')
  }

  protected begin() {
    this.setEvent({
      verifyPwd: (pwd: string) => {
        return new Promise((resolve, reject) => {
          fetcher.send(ApiUrl.VERIFY_BANK_PWD, { data: pwd }).then((rsp) => {
            resolve(true)
          }).catch((e) => {
            reject(e)
          })
        })
      },
      setBankPassword: (loginPassword, safePassword) => {
        return new Promise((resolve, reject) => {
          fetcher.send(ApiUrl.SET_BANK_PWD, { loginPassword, safePassword }).then((rsp) => {
            this.dispatch(addToastAction({ content: lang.write(k => k.BankModule.BankPassword,{},{ placeStr:"设置银行保险箱密码完成~" }) }))
            resolve(true)
          }).catch((e) => {
            reject(e)
          })
        })
      },
      transferCapital: (amount, direction) => {
        return new Promise((resolve, reject) => {
          fetcher.send(ApiUrl.TRASFER_BANK_GLOD, { assetGold: amount, type: direction }).then((rsp) => {
            this.dispatch(addToastAction({ content: lang.write(k => k.BankModule.BankTransfer,{},{ placeStr:"保险箱金币转移完成~" }) }))
            sktInstance.sendSktMessage(SKT_MAG_TYPE.MEMBER_INFO, {}, { isLoading: true })
            resolve(true)
          }).catch((e) => {
            reject(e)
          })
        })
      }
    })
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        memberAssetGoldPieces: state.memberInfo.memberAssetGoldPieces,
        memberAssetSafeGoldPieces: state.memberInfo.memberAssetSafeGoldPieces,
      }
    })
    return this
  }
}

export default BankViewModel