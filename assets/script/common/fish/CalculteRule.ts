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
export let dt = 0.001;
export let pi = Math.PI;
export let pia = 180;
export let abs = Math.abs;
export let sin = Math.sin;
export let cos = Math.cos;
export let pow = Math.pow
export let atan = Math.atan;
export let log = Math.log;
/**抛物线 */
export function parabola(param) {
    return param.a * pow(param.x, 2) + param.b * param.x + param.c;
}
/**三次曲线 */
export function acubiccve(param) {
    return param.a * pow(param.x, 3);
}
/**指数函数 */
export function aexponential(param) {
    return pow(param.a, param.x);
}
/**对数函数 */
export function alogarithm(param) {
    return param.a * log(param.x);
}
/**正弦函数 */
export function asin(param) {
    return param.a * sin(param.b * param.x);
}
/**余弦函数 */
export function acos(param) {
    return param.a * cos(param.b * param.x);
}
/**画圆 */
export function circle(param) {
    return [param.r * cos(param.x / pia * pi) * param.way + param.a, param.r * sin(param.x / pia * pi) + param.b];
}
/**画直线 */
export function kline(param) {
    return param.k * param.x;
}
export const CURVE_TYPE = { pbl: 1, ccve: 2, expt: 3, logh: 4, sin: 5, cos: 6, cicle: 7, line: 8 };
let funcLst = [
    undefined,
    parabola,
    acubiccve,
    aexponential,
    alogarithm,
    asin,
    acos,
    circle,
    kline
];
export const frule = {
    getpos: function (ftype, param) {
        if (ftype === CURVE_TYPE.cicle) {
            return funcLst[ftype](param);
        } else {
            return [param.x, funcLst[ftype](param)];
        }
    }
};