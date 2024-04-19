import { default as redux } from "redux";
import Singleton from "./Singleton";
import { ToastType, addToastAction, setLoadingAction } from "../hall/store/actions/baseBoard";
import { Prefab, sys } from "cc";
import { baseBoardView, global, hallAudio, lang, sourceManageSeletor } from "../hall";
import { SoundPathDefine } from "../hall/sourceDefine/soundDefine";
import { getStore } from "../hall/store";
import Throttler from "./Throttler";
import { sendNativeVibrate } from "../common/bridge";
import { Hall_ProhibitPanel, IState as HPState, IProps as HPProps, IEvent as HPEvent } from '../hall/components/login_v2/Hall_ProhibitPanel';
import BaseViewModel from "../common/viewModel/BaseViewModel";
import { PrefabPathDefine } from "../hall/sourceDefine/prefabDefine";
import { EffectType } from "./NodeIOEffect";

export default class Fetcher<T> {
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
    this.dispatch = getStore().dispatch
  }
  private dispatch: redux.Dispatch
  private baseUrl: string

  send(url: T, sendData: object = {}, method: 'post' | 'get' | 'delete' = 'post', headers?: {}, option?: {}): Promise<any> {
    return new Promise((reslove, reject) => {
      const param = {
        method,
        headers: Object.assign({ 'Content-Type': 'application/json', Token: sys.localStorage.getItem("token") || "" }, headers)
      }
      const _option = Object.assign({}, {
        isLoading: true
      }, option)
      if (method !== "get") {
        param["body"] = JSON.stringify(sendData)
      }
      // console.log('u', this.baseUrl + url)
      Throttler.isDebouncerAsync(this.baseUrl + url, 500, true, () => {
        global.hallDispatch(addToastAction({ content: lang.write(k => k.PersonCenterModule.PersonCenterSumbit, {}, { placeStr: "操作过于频繁，请稍等~" }) }))
      }).then((isPass) => {
        _option.isLoading && this.dispatch(setLoadingAction({ isShow: true }))
        fetch(this.baseUrl + url, param).then((response) => {
          this.dispatch(setLoadingAction({ isShow: false }))
          if (response.status === 200) {
            response.json().then(({ data, code, status, message }) => {
              if (status === "SUCCESS") {
                reslove(data)
              } else if (code === 'BIZ-5101') {
                //跳转至登录页
                this.dispatch(setLoadingAction({ isShow: false }))
                if (baseBoardView.mainPanelViewModel) {
                  baseBoardView.mainPanelViewModel.logOut()
                } else {
                  baseBoardView.loginPageV2ViewModel.comp.events.onOpenLoginDialog()
                }
              } else if (code === 'BIZ-5102') {
                //IP被限制
                sourceManageSeletor().getFileAsync(PrefabPathDefine._PROHIBIT_PANEL, Prefab).then((fileSource) => {
                  const prohibitViewModel = new BaseViewModel<Hall_ProhibitPanel, HPState, HPProps, HPEvent>('Hall_ProhibitPanel').mountView(fileSource.source)
                    .setEvent({ onCloseHandle: () => prohibitViewModel.unMount(EffectType.EFFECT1) }).appendTo(baseBoardView.viewNode, { effectType: EffectType.EFFECT2, isModal: true })
                })
              } else {
                this.dispatch(addToastAction({ content: message, type: ToastType.ERROR }))
                this.dispatch(setLoadingAction({ isShow: false }))
                reject(message)
              }
            }).catch(() => {
              this.dispatch(addToastAction({ content: lang.write(k => k.InitGameModule.FetcherFaild, {}, { placeStr: "json数据解析失败" }), type: ToastType.ERROR }))
              this.dispatch(setLoadingAction({ isShow: false }))
              // console.log("json数据解析失败", response)
              hallAudio.play(SoundPathDefine.ERROR)
              reject("json数据解析失败")
            })
          } else {
            this.dispatch(addToastAction({ content: response.status.toString(), type: ToastType.ERROR }))
            this.dispatch(setLoadingAction({ isShow: false }))
            hallAudio.play(SoundPathDefine.ERROR)
            reject(response)
          }
        }).catch((e) => {
          sendNativeVibrate(100)
          this.dispatch(addToastAction({ content: e.toString(), type: ToastType.ERROR }))
          this.dispatch(setLoadingAction({ isShow: false }))
          hallAudio.play(SoundPathDefine.ERROR)
          reject(e)
        })
      })
    })
  }
}