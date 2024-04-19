System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, instantiate, cos, sin, pia, atan, pi, frule, CURVE_TYPE, abs, dt, ActionCurve, _crd;

  // 按照顺时针旋转坐标

  /**
   * 获得当前位置
   * @param t 时间
   * @param prePos 上一个线段的结束位置
   * @param item 参数
   * @returns 
   */

  /**
   * 根据时间获得位置
   * @param t 时间
   * @param lst 线段数组
   * @param rot 整个路径的旋转角度
   * @param spos 起始位置
   * @param startIndex 开始线段索引
   * @returns 
   */
  function rotatinPoint(x, y, degree) {
    let radian = degree / (_crd && pia === void 0 ? (_reportPossibleCrUseOfpia({
      error: Error()
    }), pia) : pia) * (_crd && pi === void 0 ? (_reportPossibleCrUseOfpi({
      error: Error()
    }), pi) : pi);
    return [x * (_crd && cos === void 0 ? (_reportPossibleCrUseOfcos({
      error: Error()
    }), cos) : cos)(radian) + y * (_crd && sin === void 0 ? (_reportPossibleCrUseOfsin({
      error: Error()
    }), sin) : sin)(radian), y * (_crd && cos === void 0 ? (_reportPossibleCrUseOfcos({
      error: Error()
    }), cos) : cos)(radian) - x * (_crd && sin === void 0 ? (_reportPossibleCrUseOfsin({
      error: Error()
    }), sin) : sin)(radian)];
  }

  function getCurPoint(t, prePos, item) {
    // 计算走了多长的记录 距离 = 速度 * 时间
    if (t >= item.t1 && t < item.t2) {
      item.fparam.x = item.v * (t - item.t1);
    } else {
      item.fparam.x = item.v * item.time;
    }

    let pos = (_crd && frule === void 0 ? (_reportPossibleCrUseOffrule({
      error: Error()
    }), frule) : frule).getpos(item.ftype, item.fparam); // console.log(`t: ${t} , t1: ${item.t1}, t2: ${item.t2}, v: ${item.v}, x : ${item.fparam.x}, ftype: ${item.ftype}, fparam : `, item.fparam);

    let x = pos[0];
    let y = pos[1]; // 旋转位置

    if (item.rot && item.rot !== 0) {
      pos = rotatinPoint(x, y, item.rot);
      x = pos[0];
      y = pos[1];
    }

    if (prePos) {
      return [prePos.x + x, prePos.y + y];
    }

    return [x, y];
  }

  function getPostionByTime(t, lst, rot, spos, startIndex) {
    // 当前位置
    let curPos = new Vec3(0, 0); // 线类型

    let ftype = -1; // 第几条线段

    let line = -1;
    let len = lst.length - 1;

    if (t < 0 || t >= lst[len].t2) {
      return [lst[len].ep, lst[len].ftype, line];
    }

    startIndex = startIndex >= 0 ? startIndex : 0;

    for (let i = startIndex; i <= len; i++) {
      let v = lst[i];

      if (t >= v.t1 && t < v.t2) {
        let ep = i > 0 ? lst[i - 1].ep : undefined;
        let pos = getCurPoint(t, ep, v);
        curPos.x = pos[0];
        curPos.y = pos[1];

        if (rot && rot !== 0) {
          pos = rotatinPoint(curPos.x, curPos.y, rot);
          curPos.x = pos[0];
          curPos.y = pos[1];
        }

        curPos.x = curPos.x + spos.x;
        curPos.y = curPos.y + spos.y;
        ftype = v.ftype;
        line = i;
        break;
      }
    }

    return [curPos, ftype, line];
  }

  function _reportPossibleCrUseOfcos(extras) {
    _reporterNs.report("cos", "./CalculteRule", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsin(extras) {
    _reporterNs.report("sin", "./CalculteRule", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpia(extras) {
    _reporterNs.report("pia", "./CalculteRule", _context.meta, extras);
  }

  function _reportPossibleCrUseOfatan(extras) {
    _reporterNs.report("atan", "./CalculteRule", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpi(extras) {
    _reporterNs.report("pi", "./CalculteRule", _context.meta, extras);
  }

  function _reportPossibleCrUseOffrule(extras) {
    _reporterNs.report("frule", "./CalculteRule", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCURVE_TYPE(extras) {
    _reporterNs.report("CURVE_TYPE", "./CalculteRule", _context.meta, extras);
  }

  function _reportPossibleCrUseOfabs(extras) {
    _reporterNs.report("abs", "./CalculteRule", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdt(extras) {
    _reporterNs.report("dt", "./CalculteRule", _context.meta, extras);
  }

  _export({
    rotatinPoint: rotatinPoint,
    getCurPoint: getCurPoint,
    getPostionByTime: getPostionByTime,
    ActionCurve: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      cos = _unresolved_2.cos;
      sin = _unresolved_2.sin;
      pia = _unresolved_2.pia;
      atan = _unresolved_2.atan;
      pi = _unresolved_2.pi;
      frule = _unresolved_2.frule;
      CURVE_TYPE = _unresolved_2.CURVE_TYPE;
      abs = _unresolved_2.abs;
      dt = _unresolved_2.dt;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "96649xkUVBH5pnkXT30t/bk", "ActionCurve", undefined);

      __checkObsolete__(['Vec3', 'instantiate']);

      _export("ActionCurve", ActionCurve = class ActionCurve {
        constructor(startPos, ratio) {
          this.funcLst = [];
          this.startPos = new Vec3(0, 0);
          this.ratio = 1;

          /**当前运动方向，右为正方向，左为负方向 */
          this.curDefineWay = 1;

          /**当前运行时间 */
          this.curActionSeconds = 0;
          this.isReserve = false;
          this.rotationAngle = 0;
          this.curAngle = 0;
          this.curIndex = -1;

          /**开始运动方向 */
          this.startDefineWay = 0;
          this.init(startPos, ratio);
        }

        init(startPos, ratio) {
          this.funcLst = [];
          this.startPos = startPos;
          this.ratio = ratio;
          this.curDefineWay = 1; //运动方向，右为正方向，左为负方向

          this.curActionSeconds = 0; //当前运行时间

          this.isReserve = false; //是否反向

          this.rotationAngle = 0; //正为顺时针方向 0 ~ 360 负为逆时针方向 -360 ~ 0

          this.curAngle = 0; //当前斜率角度

          this.curIndex = -1; //当前运行函数
        } // 添加线段


        addCurve(cveinfo) {
          let fitem = {}; // 运动时间

          fitem.time = cveinfo.t; // 两点之间的距离

          fitem.s = cveinfo.x2 - cveinfo.x1;
          fitem.ag = cveinfo.ag; // 旋转角度

          fitem.rot = cveinfo.rot; // 速度 = 距离 / 时间

          fitem.v = fitem.s / fitem.time;

          if (cveinfo.ftype === (_crd && CURVE_TYPE === void 0 ? (_reportPossibleCrUseOfCURVE_TYPE({
            error: Error()
          }), CURVE_TYPE) : CURVE_TYPE).cicle) {
            fitem.v = fitem.ag / fitem.time;
          } // 画线类型


          fitem.ftype = cveinfo.ftype;
          fitem.fparam = instantiate(cveinfo.fparam);
          fitem.fparam.x = 0;
          fitem.x1 = cveinfo.x1;
          fitem.x2 = cveinfo.x2; // 线段的结束坐标

          fitem.ep = new Vec3(0, 0);

          if (this.isReserve) {
            fitem.s = cveinfo.x1 - cveinfo.x2;
            fitem.v = fitem.s / fitem.time;

            if (cveinfo.ftype === (_crd && CURVE_TYPE === void 0 ? (_reportPossibleCrUseOfCURVE_TYPE({
              error: Error()
            }), CURVE_TYPE) : CURVE_TYPE).cicle) {
              fitem.ag = -fitem.ag;
              fitem.v = fitem.ag / fitem.time;
            }

            fitem.x1 = cveinfo.x2;
            fitem.x2 = cveinfo.x1;
          }

          let len = this.funcLst.length - 1;

          if (len < 0) {
            fitem.t1 = 0;
            fitem.t2 = fitem.t1 + fitem.time;
            let pos = getCurPoint(fitem.t2, undefined, fitem);
            fitem.ep.x = pos[0];
            fitem.ep.y = pos[1];
            this.funcLst.push(fitem);
          } else {
            fitem.t1 = this.funcLst[len].t2;
            fitem.t2 = fitem.t1 + fitem.time;
            let pos = getCurPoint(fitem.t2, this.funcLst[len].ep, fitem);
            fitem.ep.x = pos[0];
            fitem.ep.y = pos[1];
            this.funcLst.push(fitem);
          }
        }

        getAllTime() {
          let time = 0;

          for (const key in this.funcLst) {
            const v = this.funcLst[key];
            time = time + v.time;
          }

          return time;
        }

        setStartPo(pos) {
          this.startPos = pos;
        }

        setRatio(ratio) {
          this.ratio = ratio !== undefined ? ratio : 1;
        }

        // 返回下一个画线坐标
        getPosAndSlopeByTime(t) {
          this.curActionSeconds = t;
          let pos0, ftype, line, pos1;
          const res = getPostionByTime(t, this.funcLst, this.rotationAngle, this.startPos, this.curIndex);
          pos0 = res[0];
          ftype = res[1];
          line = res[2];

          if (ftype !== (_crd && CURVE_TYPE === void 0 ? (_reportPossibleCrUseOfCURVE_TYPE({
            error: Error()
          }), CURVE_TYPE) : CURVE_TYPE).line || ftype === (_crd && CURVE_TYPE === void 0 ? (_reportPossibleCrUseOfCURVE_TYPE({
            error: Error()
          }), CURVE_TYPE) : CURVE_TYPE).line && line !== this.curIndex) {
            pos1 = getPostionByTime(t + (_crd && dt === void 0 ? (_reportPossibleCrUseOfdt({
              error: Error()
            }), dt) : dt), this.funcLst, this.rotationAngle, this.startPos, line)[0];
          }

          this.curIndex = line;

          if (pos1 && line >= 0) {
            this.curDefineWay = 1;

            if (pos0.x > pos1.x) {
              this.curDefineWay = -1;
            }

            let dx = pos1.x - pos0.x;
            let dy = pos1.y - pos0.y;

            if ((_crd && abs === void 0 ? (_reportPossibleCrUseOfabs({
              error: Error()
            }), abs) : abs)(dx) <= 0.000000001) {
              if (pos0.y >= pos1.y) {
                this.curDefineWay = -1;
              } else {
                this.curDefineWay = 1;
              }

              return [pos0, undefined, true];
            }

            return [pos0, dy / dx, true];
          }

          return [pos0, undefined, false];
        }

        getPosAndAngleByTime(t) {
          this.curActionSeconds = t;
          let pos, k, bcal;
          const res = this.getPosAndSlopeByTime(t); // 保存该路线的开始方向

          this.curIndex === 0 && this.startDefineWay === 0 && (this.startDefineWay = this.curDefineWay);
          pos = res[0];
          k = res[1];
          bcal = res[2];

          if (bcal) {
            if (k === undefined) {
              if (this.curDefineWay === -1) {
                this.curAngle = 270;
              } else {
                this.curAngle = 90;
              }
            } else {
              if (this.curDefineWay === 1) {
                this.curAngle = 360 + (_crd && atan === void 0 ? (_reportPossibleCrUseOfatan({
                  error: Error()
                }), atan) : atan)(k) * (_crd && pia === void 0 ? (_reportPossibleCrUseOfpia({
                  error: Error()
                }), pia) : pia) / (_crd && pi === void 0 ? (_reportPossibleCrUseOfpi({
                  error: Error()
                }), pi) : pi);
              } else {
                this.curAngle = 180 + (_crd && atan === void 0 ? (_reportPossibleCrUseOfatan({
                  error: Error()
                }), atan) : atan)(k) * (_crd && pia === void 0 ? (_reportPossibleCrUseOfpia({
                  error: Error()
                }), pia) : pia) / (_crd && pi === void 0 ? (_reportPossibleCrUseOfpi({
                  error: Error()
                }), pi) : pi);
              }
            }
          }

          return [pos, this.curAngle];
        }

        isCurveEnd() {
          let it = this.funcLst[this.funcLst.length - 1];

          if (it) {
            if (it.t2 > this.curActionSeconds) {
              return false;
            }
          }

          return true;
        }

        resetInfo() {
          this.curActionSeconds = 0;
        }

        getActionWay() {
          return this.curDefineWay;
        }

        setActionReserve(bres) {
          this.isReserve = bres;

          if (this.isReserve) {
            let i = 0;

            for (const key in this.funcLst) {
              const n = this.funcLst[key];
              n.x1 = n.x2;
              n.x2 = n.x1;
              n.s = n.x2 - n.x1;
              n.v = n.s / n.time;

              if (n.ftype === (_crd && CURVE_TYPE === void 0 ? (_reportPossibleCrUseOfCURVE_TYPE({
                error: Error()
              }), CURVE_TYPE) : CURVE_TYPE).cicle) {
                n.ag = -n.ag;
                n.v = n.ag / n.time;
              }

              let ep = i > 0 ? this.funcLst[i - 1].ep : undefined;
              let pos = getCurPoint(n.t2, ep, n);
              n.ep.x = pos[0];
              n.ep.y = pos[1];
              i++;
            }
          }
        }

        setActionRotation(angle) {
          if (angle >= 0 && angle <= 360) {
            this.rotationAngle = angle;
          }
        }

        clearAllCurve() {
          this.funcLst = [];
        }

        setCurveRatio(ratio) {
          this.ratio = ratio !== undefined ? ratio : 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aa034278c6097fcee701c678858ff62afd7f969f.js.map