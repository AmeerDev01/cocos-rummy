import { getStore } from "../hall/store"
import { ToastPosition, addToastAction } from "../hall/store/actions/baseBoard"
import { lang } from "../hall"

export default class InputValidator {
  constructor() { }
  public isPass: boolean = false
  public errorinfo: string[] = []
  private defaultChart = ""
  begin(defaultChart: string = "") {
    this.isPass = true
    this.errorinfo = []
    this.defaultChart = typeof defaultChart === 'string' ? defaultChart.trim() : defaultChart
    return this
  }
  isNotEmpty(chart?: string, customErrStr?: string) {
    if(!this.isPass) return this;
    if (!(chart || this.defaultChart).length) {
      this.isPass = false
      this.errorinfo.push(customErrStr || lang.write(k => k.InputModule.isNotEmpty))
    }
    return this
  }
  isAllNumber(chart?: string, customErrStr?: string) {
    if(!this.isPass) return this;
    const isPass = /^\d+$/.test((typeof chart === 'string' ? chart.trim() : chart) || this.defaultChart)
    if (!isPass) {
      this.isPass = false
      this.errorinfo.push(customErrStr || lang.write(k => k.InputModule.isAllNumber))
    }
    return this
  }
  isDecimal(chart?: string, isAllowFloat: boolean = true, customErrStr?: string) {
    if(!this.isPass) return this;
    let isPass = /^\d+(\.\d{1,2})?$/.test((typeof chart === 'string' ? chart.trim() : chart) || this.defaultChart)
    if (!isAllowFloat) {
      isPass = /^[1-9]\d{0,15}$/.test((typeof chart === 'string' ? chart.trim() : chart) || this.defaultChart)
    }
    if (!isPass) {
      this.isPass = false
      this.errorinfo.push(customErrStr || lang.write(k => k.InputModule.isDecimal))
    }
    return this
  }
  isPhoneNumber(chart?: string, customErrStr?: string) {
    if(!this.isPass) return this;
    const isPass = /^\d{11,13}$/.test((typeof chart === 'string' ? chart.trim() : chart) || this.defaultChart)
    if (!isPass) {
      this.isPass = false
      this.errorinfo.push(customErrStr || lang.write(k => k.InputModule.isPhoneNumber))
    }
    return this
  }
  /**印尼的手机号码要 8开头的手机号码 */
  isIDAPhoneNumber(chart?: string, customErrStr?: string) {
    if(!this.isPass) return this;
    const isPass = /^8\d{9,11}$/.test((typeof chart === 'string' ? chart.trim() : chart) || this.defaultChart)
    if (!isPass) {
      this.isPass = false
      this.errorinfo.push(customErrStr || lang.write(k => k.InputModule.isIDAPhoneNumber))
    }
    return this
  }
  isSmsCode(chart?: string, customErrStr?: string) {
    if(!this.isPass) return this;
    const isPass = /^\d{6}$/.test((typeof chart === 'string' ? chart.trim() : chart) || this.defaultChart)
    if (!isPass) {
      this.isPass = false
      this.errorinfo.push(customErrStr || lang.write(k => k.InputModule.isSmsCode))
    }
    return this
  }
  isChartLength(length: [number, number], chart?: string, customErrStr?: string) {
    if(!this.isPass) return this;
    const _chart = (typeof chart === 'string' ? chart.trim() : chart)
    const isPass = _chart.length >= length[0] && _chart.length <= length[1]
    if (!isPass) {
      this.isPass = false
      // `masukkan${length[0]}~${length[1]}aksara`
      this.errorinfo.push(customErrStr || lang.write(k => k.InputModule.isChartLength, { num1: length[0], num2: length[1] }))
    }
    return this
  }
  isEmtry(chart: string, customErrStr: string) {
    if(!this.isPass) return this;
    const _chart = (typeof chart === 'string' ? chart.trim() : chart)
    const isPass = _chart.length !== 0;
    if (!isPass) {
      this.isPass = false
      // `masukkan${length[0]}~${length[1]}aksara`
      this.errorinfo.push(customErrStr)
    }
    return this
  }
  /**展示错误信息 */
  done(passHandler: (validator: InputValidator) => void, showErrToast: boolean = true) {
    if (this.isPass) {
      passHandler(this)
    } else if (!this.isPass && showErrToast) {
      getStore().dispatch(addToastAction({ content: this.errorinfo.join(',') }))
    }
  }
}