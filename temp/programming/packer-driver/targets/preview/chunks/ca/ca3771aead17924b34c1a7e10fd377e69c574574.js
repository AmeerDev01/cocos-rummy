System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, getStore, addToastAction, lang, InputValidator, _crd;

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../hall/store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../hall", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      getStore = _unresolved_2.getStore;
    }, function (_unresolved_3) {
      addToastAction = _unresolved_3.addToastAction;
    }, function (_unresolved_4) {
      lang = _unresolved_4.lang;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a5ecbsKSudA3YT1FTHsoV8F", "InputValidator", undefined);

      _export("default", InputValidator = class InputValidator {
        constructor() {
          this.isPass = false;
          this.errorinfo = [];
          this.defaultChart = "";
        }

        begin(defaultChart) {
          if (defaultChart === void 0) {
            defaultChart = "";
          }

          this.isPass = true;
          this.errorinfo = [];
          this.defaultChart = typeof defaultChart === 'string' ? defaultChart.trim() : defaultChart;
          return this;
        }

        isNotEmpty(chart, customErrStr) {
          if (!this.isPass) return this;

          if (!(chart || this.defaultChart).length) {
            this.isPass = false;
            this.errorinfo.push(customErrStr || (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
              error: Error()
            }), lang) : lang).write(k => k.InputModule.isNotEmpty));
          }

          return this;
        }

        isAllNumber(chart, customErrStr) {
          if (!this.isPass) return this;
          var isPass = /^\d+$/.test((typeof chart === 'string' ? chart.trim() : chart) || this.defaultChart);

          if (!isPass) {
            this.isPass = false;
            this.errorinfo.push(customErrStr || (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
              error: Error()
            }), lang) : lang).write(k => k.InputModule.isAllNumber));
          }

          return this;
        }

        isDecimal(chart, isAllowFloat, customErrStr) {
          if (isAllowFloat === void 0) {
            isAllowFloat = true;
          }

          if (!this.isPass) return this;
          var isPass = /^\d+(\.\d{1,2})?$/.test((typeof chart === 'string' ? chart.trim() : chart) || this.defaultChart);

          if (!isAllowFloat) {
            isPass = /^[1-9]\d{0,15}$/.test((typeof chart === 'string' ? chart.trim() : chart) || this.defaultChart);
          }

          if (!isPass) {
            this.isPass = false;
            this.errorinfo.push(customErrStr || (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
              error: Error()
            }), lang) : lang).write(k => k.InputModule.isDecimal));
          }

          return this;
        }

        isPhoneNumber(chart, customErrStr) {
          if (!this.isPass) return this;
          var isPass = /^\d{11,13}$/.test((typeof chart === 'string' ? chart.trim() : chart) || this.defaultChart);

          if (!isPass) {
            this.isPass = false;
            this.errorinfo.push(customErrStr || (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
              error: Error()
            }), lang) : lang).write(k => k.InputModule.isPhoneNumber));
          }

          return this;
        }
        /**印尼的手机号码要 8开头的手机号码 */


        isIDAPhoneNumber(chart, customErrStr) {
          if (!this.isPass) return this;
          var isPass = /^8\d{9,11}$/.test((typeof chart === 'string' ? chart.trim() : chart) || this.defaultChart);

          if (!isPass) {
            this.isPass = false;
            this.errorinfo.push(customErrStr || (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
              error: Error()
            }), lang) : lang).write(k => k.InputModule.isIDAPhoneNumber));
          }

          return this;
        }

        isSmsCode(chart, customErrStr) {
          if (!this.isPass) return this;
          var isPass = /^\d{6}$/.test((typeof chart === 'string' ? chart.trim() : chart) || this.defaultChart);

          if (!isPass) {
            this.isPass = false;
            this.errorinfo.push(customErrStr || (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
              error: Error()
            }), lang) : lang).write(k => k.InputModule.isSmsCode));
          }

          return this;
        }

        isChartLength(length, chart, customErrStr) {
          if (!this.isPass) return this;

          var _chart = typeof chart === 'string' ? chart.trim() : chart;

          var isPass = _chart.length >= length[0] && _chart.length <= length[1];

          if (!isPass) {
            this.isPass = false; // `masukkan${length[0]}~${length[1]}aksara`

            this.errorinfo.push(customErrStr || (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
              error: Error()
            }), lang) : lang).write(k => k.InputModule.isChartLength, {
              num1: length[0],
              num2: length[1]
            }));
          }

          return this;
        }

        isEmtry(chart, customErrStr) {
          if (!this.isPass) return this;

          var _chart = typeof chart === 'string' ? chart.trim() : chart;

          var isPass = _chart.length !== 0;

          if (!isPass) {
            this.isPass = false; // `masukkan${length[0]}~${length[1]}aksara`

            this.errorinfo.push(customErrStr);
          }

          return this;
        }
        /**展示错误信息 */


        done(passHandler, showErrToast) {
          if (showErrToast === void 0) {
            showErrToast = true;
          }

          if (this.isPass) {
            passHandler(this);
          } else if (!this.isPass && showErrToast) {
            (_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
              error: Error()
            }), getStore) : getStore)().dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
              error: Error()
            }), addToastAction) : addToastAction)({
              content: this.errorinfo.join(',')
            }));
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ca3771aead17924b34c1a7e10fd377e69c574574.js.map