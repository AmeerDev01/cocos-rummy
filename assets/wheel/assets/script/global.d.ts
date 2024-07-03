declare global {
  interface Number {
    /**
     * 转换数字为带逗号的国际通用的金额计数法
     */
    formatAmountWithCommas(): string;
    /**
     * 转换数字为K\M\B的计数形式
     */
    formatAmountWithLetter(): string;
    /**
     * 转换数字为K\M\B的计数形式(2)
     * @param isInteger 是否保留K之后的数字
     */
    formatAmountWithLetter2(isInteger: boolean): string;
  }

  interface String {
    /**
     * 格式化字符串，比如：字符串有{0}占位符，第一参数的值替换这个占位符
     * @param value 
     */
    format(...value): string;
  }
}

export { }