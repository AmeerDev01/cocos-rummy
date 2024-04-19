System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bf951UcPvFL0aTjbjvuKlOh", "extend", undefined);

      Number.prototype.formatAmountWithCommas = function () {
        var amount = this;
        var parts = amount.toFixed(2).split(".");
        var integerPart = parts[0];
        var decimalPart = parts[1];
        var formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        var formattedAmount = +decimalPart === 0 ? formattedIntegerPart : formattedIntegerPart + "." + decimalPart;
        return formattedAmount;
      };

      Number.prototype.formatAmountWithLetter = function (FixedCount) {
        if (FixedCount === void 0) {
          FixedCount = 2;
        }

        var num = this;
        if (!num) return "0";
        var units = ['', 'K', 'M'];
        var unitIndex = 0; // 将数字按照1000为基数迭代缩小

        while (num >= 1000 && unitIndex < units.length - 1) {
          num /= 1000;
          unitIndex++;
        }

        if (Number.isInteger(num)) {
          return num + units[unitIndex];
        } else {
          // 使用toFixed保留两位小数，并转换成字符串格式
          return Number(num.toFixed(FixedCount)) + units[unitIndex];
        }
      };

      Number.prototype.formatAmountWithLetter2 = function (isInteger) {
        var amount = this;
        var parts = amount.toFixed(0).split(".");
        var inputString = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",").replace(/,(?=[^,]*$)/g, 'K').replace(/,(?=[^,]*$)/, "M").replace(/,(?=[^,]*$)/, 'B');
        var sp = inputString.split('K');

        if (!isInteger && inputString.indexOf('K') !== -1) {
          return sp[0] + "K";
        }

        if (inputString.indexOf('K') !== -1) {
          return sp[0] + "K" + (+sp[1] ? sp[1] : '');
        }

        return inputString;
      };

      String.prototype.format = function () {
        if (arguments.length == 0) return this;
        var str = this;

        for (var i = 0; i < arguments.length; i++) {
          var re = new RegExp('\\{' + i + '\\}', 'gm');
          str = this.replace(re, i < 0 || arguments.length <= i ? undefined : arguments[i]);
        }

        return str;
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cbf0b905864a950ee281cec32455f7c0e0787838.js.map