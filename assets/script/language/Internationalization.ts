import languagePkg, { LanguageItemType } from "./languagePkg"

export type LanguageItem = {
  [LanguageItemType.ZH]: string,
  [LanguageItemType.EN]: string,
  [LanguageItemType.IDA]: string,
}

export default class Internationalization<T> {
  constructor(languagePkg: T) {
    this.languagePkg = languagePkg
  }
  private languagePkg: T
  public languageItemType: LanguageItemType
  /**配置语言类型 */
  use(languageItemType: LanguageItemType) {
    this.languageItemType = languageItemType
  }
  /**
   * 
   * @param target 语言包里面的字段层级
   * @param formatData 格式化的填充数据
   * @param option 包含几个可选字段，1:本次强制执行的语言包类型；2:本次强制显示的文字，优先级很高，3:若出现可预知的异常，要进行占位的文字；4:没有发现指定的语言，是否显示警告(显示占位文字)
   * @returns 
   */
  write(target: (pkg: T) => LanguageItem, formatData?: object, option?: {
    /**本次强制执行的语言包类型 */
    langItemType?: LanguageItemType,
    /**本次强制显示的文字，优先级很高 */
    langStr?: string,
    /**若出现可预知的异常，要进行占位的文字 */
    placeStr?: string,
    /**没有发现指定的语言，是否显示警告(显示占位文字) */
    noWarn?: boolean
  }) {

    const _option = Object.assign({
      langItemType: this.languageItemType,
      langStr: target(this.languagePkg) ? target(this.languagePkg)[this.languageItemType || (option && option.langItemType)] : '--',
      /**缺省字段 */
      placeStr: '--',
      noWarn: true
    }, option || {})

    if (!target(this.languagePkg)) {
      //可能没有配置这个语句项，若有占位字符，就显示占位字符
      if (option && option.placeStr) {
        _option.langStr = option.placeStr
      } else {
        return _option.langStr
      }
    }

    if (!_option.langItemType) {
      /**没有设置语言，也没有临时语言设置，或者被临时置空了 */
      _option.noWarn && console.warn('language config error')
      return _option.placeStr
    }
    // if (!_option.langStr) return '-error-'
    return !formatData ? _option.langStr : _option.langStr.replace(/\{(\w+)\}/g, function (match, key) {
      if (formatData.hasOwnProperty(key)) {
        return formatData[key];
      } else {
        return match;
      }
    })
  }
}

/**使用示例 */
/*
  const lang = new Internationalization(languagePkg)
  lang.use(LanguageItemType.EN)
  console.log(lang.write(k => k.moduleName2.demoTitle, { name: 'weishere', age: 22 }, {
    langStr: 'daxi-{name}-daxi', //可缺省
    langItemType: LanguageItemType.EN, //可缺省
    placeStr: 'daxi-{name}-daxi', //可缺省
  })) 
*/