import { getStore } from "../hall/store"
import { ToastPosition, addToastAction } from "../hall/store/actions/baseBoard"
import { lang } from "../hall"
import { Country, LanguageItemType } from "../language/languagePkg"
import { config } from "../hall/config"

export default class InputValidator {
  constructor() { }
  public isPass: boolean = false
  public errorinfo: string[] = []
  private defaultchar = ""
  begin(defaultchar: string = "") {
    this.isPass = true
    this.errorinfo = []
    this.defaultchar = typeof defaultchar === 'string' ? defaultchar.trim() : defaultchar
    return this
  }
  isNotEmpty(char?: string, customErrStr?: string) {
    if (!this.isPass) return this;
    if (!(char || this.defaultchar).length) {
      this.isPass = false
      this.errorinfo.push(customErrStr || lang.write(k => k.InputModule.isNotEmpty))
    }
    return this
  }
  isAllNumber(char?: string, customErrStr?: string) {
    if (!this.isPass) return this;
    const isPass = /^\d+$/.test((typeof char === 'string' ? char.trim() : char) || this.defaultchar)
    if (!isPass) {
      this.isPass = false
      this.errorinfo.push(customErrStr || lang.write(k => k.InputModule.isAllNumber))
    }
    return this
  }
  isDecimal(char?: string, isAllowFloat: boolean = true, customErrStr?: string) {
    if (!this.isPass) return this;
    let isPass = /^\d+(\.\d{1,2})?$/.test((typeof char === 'string' ? char.trim() : char) || this.defaultchar)
    if (!isAllowFloat) {
      isPass = /^[1-9]\d{0,15}$/.test((typeof char === 'string' ? char.trim() : char) || this.defaultchar)
    }
    if (!isPass) {
      this.isPass = false
      this.errorinfo.push(customErrStr || lang.write(k => k.InputModule.isDecimal))
    }
    return this
  }
  isPhoneNumber(char?: string, customErrStr?: string) {
    if (!this.isPass) return this;
    const isPass = /^\d{11,13}$/.test((typeof char === 'string' ? char.trim() : char) || this.defaultchar)
    if (!isPass) {
      this.isPass = false
      this.errorinfo.push(customErrStr || lang.write(k => k.InputModule.isPhoneNumber))
    }
    return this
  }
  /**自动根据地区匹配手机号码 */
  isLocalPhoneNumber(char?: string, customErrStr?: string) {
    if (config.country === Country.INDIA) {
      return this.isIDPhoneNumber(char, customErrStr)
    } else if (config.country === Country.INDONESIA) {
      return this.isIDAPhoneNumber(char, customErrStr)
    } else {
      return this.isIDAPhoneNumber(char, customErrStr)
    }
  }
  /**印尼的手机号码要 8开头的手机号码 */
  isIDAPhoneNumber(char?: string, customErrStr?: string) {
    if (!this.isPass) return this;
    const isPass = /^8\d{9,11}$/.test((typeof char === 'string' ? char.trim() : char) || this.defaultchar)
    if (!isPass) {
      this.isPass = false
      this.errorinfo.push(customErrStr || lang.write(k => k.InputModule.isIDAPhoneNumber))
    }
    return this
  }
  /**印度的手机号码要 6、7、8、9开头的10位手机号码 */
  isIDPhoneNumber(char?: string, customErrStr?: string) {
    if (!this.isPass) return this;
    // const isPass = /^[6-9]\d{9}$/.test((typeof char === 'string' ? char.trim() : char) || this.defaultchar) //6/7/8/9+9位数字
    const isPass = /^\d{10}$/.test((typeof char === 'string' ? char.trim() : char) || this.defaultchar)
    if (!isPass) {
      this.isPass = false
      this.errorinfo.push(customErrStr || lang.write(k => k.InputModule.isIDPhoneNumber))
    }
    return this
  }
  /**自动根据地区匹配银行卡号 */
  isLocalBankCard(char?: string) {
    const customErrStr = lang.write(k => k.InputModule.isBankCardNumber)
    if (config.country === Country.INDIA) {
      return this.isCharLength([2, 30], char, customErrStr)
    } else if (config.country === Country.INDONESIA) {
      return this.isCharLength([9, 15], char, customErrStr)
    } else {
      return this.isCharLength([9, 15], char, customErrStr)
    }
  }
  isSmsCode(char?: string, customErrStr?: string) {
    if (!this.isPass) return this;
    const isPass = /^\d{6}$/.test((typeof char === 'string' ? char.trim() : char) || this.defaultchar)
    if (!isPass) {
      this.isPass = false
      this.errorinfo.push(customErrStr || lang.write(k => k.InputModule.isSmsCode))
    }
    return this
  }
  isCharLength(length: [number, number], char?: string, customErrStr?: string) {
    if (!this.isPass) return this;
    const _char = (typeof char === 'string' ? char.trim() : char)
    const isPass = _char.length >= length[0] && _char.length <= length[1]
    if (!isPass) {
      this.isPass = false
      // `masukkan${length[0]}~${length[1]}aksara`
      this.errorinfo.push(customErrStr || lang.write(k => k.InputModule.isCharLength, { num1: length[0], num2: length[1] }))
    }
    return this
  }
  isEmtry(char: string, customErrStr: string) {
    if (!this.isPass) return this;
    const _char = (typeof char === 'string' ? char.trim() : char)
    const isPass = _char.length !== 0;
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