System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, dt, pi, pia, abs, sin, cos, pow, atan, log, CURVE_TYPE, funcLst, frule;

  /**抛物线 */
  function parabola(param) {
    return param.a * pow(param.x, 2) + param.b * param.x + param.c;
  }
  /**三次曲线 */


  function acubiccve(param) {
    return param.a * pow(param.x, 3);
  }
  /**指数函数 */


  function aexponential(param) {
    return pow(param.a, param.x);
  }
  /**对数函数 */


  function alogarithm(param) {
    return param.a * log(param.x);
  }
  /**正弦函数 */


  function asin(param) {
    return param.a * sin(param.b * param.x);
  }
  /**余弦函数 */


  function acos(param) {
    return param.a * cos(param.b * param.x);
  }
  /**画圆 */


  function circle(param) {
    return [param.r * cos(param.x / pia * pi) * param.way + param.a, param.r * sin(param.x / pia * pi) + param.b];
  }
  /**画直线 */


  function kline(param) {
    return param.k * param.x;
  }

  _export({
    parabola: parabola,
    acubiccve: acubiccve,
    aexponential: aexponential,
    alogarithm: alogarithm,
    asin: asin,
    acos: acos,
    circle: circle,
    kline: kline
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ccac5dTPnBMB7ev/pzwvgT7", "CalculteRule", undefined);

      /*
        路径曲线配置,
        id,曲线id
        angle,路径旋转度数，正为顺时针方向 0 ~ 360 负为逆时针方向 -360 ~ 0
        ratio,比例尺，分子为屏幕宽度，分母为曲线x轴上最大取值范围
        data = {--曲线构成
          [1] = {--一条曲线描述
            t,这段曲线运动的时间
            x1,x2,曲线的取值范围
            ftype,曲线类型，1：抛物线[y = ax2 + bx + c]，     2：三次曲线[y = ax3]，
                    3：指数函数[y = a(x)]，       4：对数函数[y = alog(x)]，
                    5：正弦曲线[y = asin(b*x)]，     6：余弦曲线[y = acos(x)]
                    7：圆[(x + a)2 + (y + b)2 = r2]，   8：直线[y = kx]
            param = {
              a,b,c,r,k：为各曲线对应的参数
            }
          },
      
          [...] = {...},
        }
      */
      _export("dt", dt = 0.001);

      _export("pi", pi = Math.PI);

      _export("pia", pia = 180);

      _export("abs", abs = Math.abs);

      _export("sin", sin = Math.sin);

      _export("cos", cos = Math.cos);

      _export("pow", pow = Math.pow);

      _export("atan", atan = Math.atan);

      _export("log", log = Math.log);

      _export("CURVE_TYPE", CURVE_TYPE = {
        pbl: 1,
        ccve: 2,
        expt: 3,
        logh: 4,
        sin: 5,
        cos: 6,
        cicle: 7,
        line: 8
      });

      funcLst = [undefined, parabola, acubiccve, aexponential, alogarithm, asin, acos, circle, kline];

      _export("frule", frule = {
        getpos: function getpos(ftype, param) {
          if (ftype === CURVE_TYPE.cicle) {
            return funcLst[ftype](param);
          } else {
            return [param.x, funcLst[ftype](param)];
          }
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c74fda7d9a5fe2555b8f12a955aa8aaeddae0a77.js.map