import { default as redux } from "redux";
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
import { defaultLanguageType } from "../language/languagePkg";
import { config } from "../hall/config";


export enum DataVerify {
  ANY,
  ARRAY,
  OBJECT,
  STRING,
  CUSTOME
}

export const SampleData = {
  NUMBER: 0,
  STRING: '',
  ARRAY: [],
  BOOLEAN: true,
  OBJECT: {}
}

export default class Fetcher<T> {
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
    this.dispatch = getStore().dispatch
  }
  private dispatch: redux.Dispatch
  private baseUrl: string

  send(url: T, sendData: object = {}, method: 'post' | 'get' | 'delete' = 'post', headers?: {}, option?: {
    isLoading?: boolean,
    dataVerify?: DataVerify,
    verifySampleData?: { [key: string]: any },
    /**是否防抖，默认值为true */
    isThrottler?: boolean,
  }): Promise<any> {
    return new Promise((reslove, reject) => {
      const param = {
        method,
        headers: Object.assign({
          'Content-Type': 'application/json',
          'Token': sys.localStorage.getItem("token") || "",
          'Content-Language': defaultLanguageType[config.country].langName
        }, headers)
      }
      const _option = Object.assign({}, {
        isLoading: true,
        /**如果dataVerify = DataVerify.CUSTOME，verifySampleData(样本数据)必须赋值 */
        dataVerify: DataVerify.ANY,
        verifySampleData: null,
        isThrottler: true,
      }, option)
      if (method !== "get") {
        param["body"] = JSON.stringify(sendData)
      }

      const _fetch = () => {
        _option.isLoading && this.dispatch(setLoadingAction({ isShow: true, flagId: url.toString() }))
        fetch(this.baseUrl + url, param).then((response) => {
          this.dispatch(setLoadingAction({ isShow: false, flagId: url.toString() }))
          if (response.status === 200) {
            response.json().then(({ data, code, status, message }) => {
              if (status === "SUCCESS") {
                let isDataPass = true
                if (_option.dataVerify === DataVerify.ARRAY) {
                  !Array.isArray(data) && (isDataPass = false)
                } else if (_option.dataVerify === DataVerify.OBJECT) {
                  (typeof data !== 'object' || data === null) && (isDataPass = false)
                } else if (_option.dataVerify === DataVerify.STRING) {
                  (typeof data !== 'string') && (isDataPass = false)
                } else if (_option.dataVerify === DataVerify.CUSTOME) {
                  if (!_option.verifySampleData) {
                    console.warn('您设置了自定义验证数据，但是未传入样本数据')
                  } else {
                    !this.validateJson(_option.verifySampleData, data) && (isDataPass = false)
                  }
                }
                if (!isDataPass) {
                  this.dispatch(setLoadingAction({ isShow: false, flagId: url.toString() }))
                  this.dispatch(addToastAction({ content: lang.write(k => k.InitGameModule.FetcherFaild, {}, { placeStr: "json数据解析失败" }), type: ToastType.ERROR, forceLandscape: false }))
                  reject("数据格式异常:" + url)
                } else {
                  reslove(data)
                }
              } else if (code === 'BIZ-5101') {
                //跳转至登录页
                this.dispatch(setLoadingAction({ isShow: false, flagId: url.toString() }))
                if (baseBoardView.mainPanelViewModel) {
                  baseBoardView.mainPanelViewModel.logOut(false)
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
                this.dispatch(addToastAction({ content: message, type: ToastType.ERROR, forceLandscape: false }))
                this.dispatch(setLoadingAction({ isShow: false, flagId: url.toString() }))
                reject(message)
              }
            }).catch(() => {
              this.dispatch(addToastAction({ content: lang.write(k => k.InitGameModule.FetcherFaild, {}, { placeStr: "json数据解析失败" }), type: ToastType.ERROR, forceLandscape: false }))
              this.dispatch(setLoadingAction({ isShow: false, flagId: url.toString() }))
              // console.log("json数据解析失败", response)
              hallAudio.play(SoundPathDefine.ERROR)
              reject("json数据解析失败")
            })
          } else {
            this.dispatch(addToastAction({ content: response.status.toString(), type: ToastType.ERROR, forceLandscape: false }))
            this.dispatch(setLoadingAction({ isShow: false, flagId: url.toString() }))
            hallAudio.play(SoundPathDefine.ERROR)
            reject(response)
          }
        }).catch((e) => {
          sendNativeVibrate(100)
          this.dispatch(addToastAction({ content: e.toString(), type: ToastType.ERROR, forceLandscape: false }))
          this.dispatch(setLoadingAction({ isShow: false, flagId: url.toString() }))
          hallAudio.play(SoundPathDefine.ERROR)
          reject(e)
        })
      }

      if (_option.isThrottler) {
        Throttler.isDebouncerAsync(this.baseUrl + url, 500, true, () => {
          console.log('Debouncer stop', this.baseUrl + url)
          global.hallDispatch(addToastAction({ content: lang.write(k => k.PersonCenterModule.PersonCenterSumbit, {}, { placeStr: "操作过于频繁，请稍等~" }) }))
        }).then((isPass) => {
          _fetch();
        })
      } else {
        _fetch();
      }

    })
  }
  /**
   * 用于验证数据是否非法
   * @param sampleData 样本数据
   * @param data 被验证的数据
   * @returns 
   */
  validateJson(sampleData: Object, data: Object) {
    // 检查是否为对象
    if (typeof data !== 'object' || data === null) {
      return false
    }
    // 遍历样本数据的字段
    for (const key in sampleData) {
      if (sampleData.hasOwnProperty(key)) {
        // 检查字段是否存在
        if (!(key in data)) {
          console.error(`Missing field: ${key}`)
          return false
        }
        // 检查字段的数据格式，这里假设样本数据中定义了数据格式
        let expectedType = typeof sampleData[key];
        let actualType = typeof data[key];
        if (actualType !== expectedType && (Array.isArray(sampleData[key]) && !Array.isArray(data[key]))) {
          console.error(`Invalid data type for field ${key}. Expected ${expectedType}, got ${actualType}`)
          return false
        }
      }
    }
    // 遍历传入数据的字段，检查是否多余
    for (const key in data) {
      if (data.hasOwnProperty(key) && !(key in sampleData)) {
        console.warn(`Unexpected field: ${key}`)
        // 如果需要禁止多余的字段，可以返回false
      }
    }
    return true
  }
}