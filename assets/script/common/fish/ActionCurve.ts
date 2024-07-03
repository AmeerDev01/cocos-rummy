import { Vec3, instantiate } from "cc";
import { cos, sin, pia, atan, pi, frule, CURVE_TYPE, abs, dt } from "./CalculteRule";

// 按照顺时针旋转坐标
export function rotatinPoint(x, y, degree) {
    let radian = (degree / pia) * pi;
    return [x * cos(radian) + y * sin(radian), y * cos(radian) - x * sin(radian)];
}
/**
 * 获得当前位置
 * @param t 时间
 * @param prePos 上一个线段的结束位置
 * @param item 参数
 * @returns 
 */
export function getCurPoint(t, prePos, item) {
    // 计算走了多长的记录 距离 = 速度 * 时间
    if (t >= item.t1 && t < item.t2) {
        item.fparam.x = item.v * (t - item.t1);
    }
    else {
        item.fparam.x = item.v * item.time;
    }
    let pos = frule.getpos(item.ftype, item.fparam);
    // console.log(`t: ${t} , t1: ${item.t1}, t2: ${item.t2}, v: ${item.v}, x : ${item.fparam.x}, ftype: ${item.ftype}, fparam : `, item.fparam);
    let x = pos[0];
    let y = pos[1];
    // 旋转位置
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
/**
 * 根据时间获得位置
 * @param t 时间
 * @param lst 线段数组
 * @param rot 整个路径的旋转角度
 * @param spos 起始位置
 * @param startIndex 开始线段索引
 * @returns 
 */
export function getPostionByTime(t, lst, rot, spos: Vec3, startIndex) {
    // 当前位置
    let curPos = new Vec3(0, 0);
    // 线类型
    let ftype = -1;
    // 第几条线段
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
            curPos.x = pos[0]
            curPos.y = pos[1]
            if (rot && rot !== 0) {
                pos = rotatinPoint(curPos.x, curPos.y, rot);
                curPos.x = pos[0]
                curPos.y = pos[1]
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

export class ActionCurve {
    constructor(startPos, ratio) {
        this.init(startPos, ratio);
    }

    funcLst: any[] = [];
    startPos: Vec3 = new Vec3(0, 0);
    ratio: number = 1;
    /**当前运动方向，右为正方向，左为负方向 */
    curDefineWay = 1;
    /**当前运行时间 */
    curActionSeconds = 0;
    isReserve = false;
    rotationAngle = 0;
    curAngle = 0;
    curIndex = -1;
    /**开始运动方向 */
    public startDefineWay = 0;

    public init(startPos: Vec3, ratio) {
        this.funcLst = []
        this.startPos = startPos
        this.ratio = ratio
        this.curDefineWay = 1 //运动方向，右为正方向，左为负方向
        this.curActionSeconds = 0 //当前运行时间
        this.isReserve = false //是否反向
        this.rotationAngle = 0 //正为顺时针方向 0 ~ 360 负为逆时针方向 -360 ~ 0
        this.curAngle = 0 //当前斜率角度
        this.curIndex = -1 //当前运行函数
    }
    // 添加线段
    public addCurve(cveinfo) {
        let fitem: any = {};
        // 运动时间
        fitem.time = cveinfo.t;
        // 两点之间的距离
        fitem.s = cveinfo.x2 - cveinfo.x1;
        fitem.ag = cveinfo.ag;
        // 旋转角度
        fitem.rot = cveinfo.rot;
        // 速度 = 距离 / 时间
        fitem.v = fitem.s / fitem.time;
        if (cveinfo.ftype === CURVE_TYPE.cicle) {
            fitem.v = fitem.ag / fitem.time;
        }
        // 画线类型
        fitem.ftype = cveinfo.ftype;
        fitem.fparam = instantiate(cveinfo.fparam);
        fitem.fparam.x = 0;
        fitem.x1 = cveinfo.x1;
        fitem.x2 = cveinfo.x2;
        // 线段的结束坐标
        fitem.ep = new Vec3(0, 0);
        if (this.isReserve) {
            fitem.s = cveinfo.x1 - cveinfo.x2;
            fitem.v = fitem.s / fitem.time;
            if (cveinfo.ftype === CURVE_TYPE.cicle) {
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
            fitem.ep.x = pos[0]
            fitem.ep.y = pos[1]
            this.funcLst.push(fitem)
        }
        else {
            fitem.t1 = this.funcLst[len].t2;
            fitem.t2 = fitem.t1 + fitem.time;
            let pos = getCurPoint(fitem.t2, this.funcLst[len].ep, fitem)
            fitem.ep.x = pos[0];
            fitem.ep.y = pos[1];
            this.funcLst.push(fitem)
        }
    };
    public getAllTime() {
        let time = 0;
        for (const key in this.funcLst) {
            const v = this.funcLst[key];
            time = time + v.time;
        }
        return time;
    };
    public setStartPo(pos) {
        this.startPos = pos;
    };
    public setRatio(ratio: number) {
        this.ratio = ratio !== undefined ? ratio : 1;
    };
    // 返回下一个画线坐标
    public getPosAndSlopeByTime(t: number) {
        this.curActionSeconds = t;
        let pos0, ftype, line, pos1;
        const res = getPostionByTime(t, this.funcLst, this.rotationAngle, this.startPos, this.curIndex);
        pos0 = res[0];
        ftype = res[1];
        line = res[2];
        if ((ftype !== CURVE_TYPE.line) || (ftype === CURVE_TYPE.line && line !== this.curIndex)) {
            pos1 = getPostionByTime(t + dt, this.funcLst, this.rotationAngle, this.startPos, line)[0]
        }
        this.curIndex = line;
        if (pos1 && line >= 0) {
            this.curDefineWay = 1;
            if (pos0.x > pos1.x) {
                this.curDefineWay = -1;
            }
            let dx = pos1.x - pos0.x;
            let dy = pos1.y - pos0.y;
            if (abs(dx) <= 0.000000001) {
                if (pos0.y >= pos1.y) {
                    this.curDefineWay = -1;
                }
                else {
                    this.curDefineWay = 1;
                }
                return [pos0, undefined, true];
            }
            return [pos0, dy / dx, true];
        }
        return [pos0, undefined, false];
    };
    public getPosAndAngleByTime(t) {
        this.curActionSeconds = t;
        let pos, k, bcal;
        const res = this.getPosAndSlopeByTime(t)
        // 保存该路线的开始方向
        this.curIndex === 0 && this.startDefineWay === 0 && (this.startDefineWay = this.curDefineWay);
        pos = res[0]
        k = res[1]
        bcal = res[2]
        if (bcal) {
            if (k === undefined) {
                if (this.curDefineWay === -1) {
                    this.curAngle = 270;
                }
                else {
                    this.curAngle = 90;
                }
            }
            else {
                if (this.curDefineWay === 1) {
                    this.curAngle = 360 + atan(k) * pia / pi;
                }
                else {
                    this.curAngle = 180 + atan(k) * pia / pi;
                }
            }
        }
        return [pos, this.curAngle];
    };
    public isCurveEnd() {
        let it = this.funcLst[this.funcLst.length - 1];
        if (it) {
            if (it.t2 > this.curActionSeconds) {
                return false;
            }
        }
        return true;
    };
    public resetInfo() {
        this.curActionSeconds = 0;
    };
    public getActionWay() {
        return this.curDefineWay;
    };
    public setActionReserve(bres: boolean) {
        this.isReserve = bres;
        if (this.isReserve) {
            let i = 0;
            for (const key in this.funcLst) {
                const n = this.funcLst[key];
                n.x1 = n.x2;
                n.x2 = n.x1;
                n.s = n.x2 - n.x1;
                n.v = n.s / n.time;
                if (n.ftype === CURVE_TYPE.cicle) {
                    n.ag = -n.ag;
                    n.v = n.ag / n.time;
                }
                let ep = i > 0 ? this.funcLst[i - 1].ep : undefined;
                let pos = getCurPoint(n.t2, ep, n)
                n.ep.x = pos[0]
                n.ep.y = pos[1]
                i++;
            }
        }
    };

    public setActionRotation(angle) {
        if (angle >= 0 && angle <= 360) {
            this.rotationAngle = angle;
        }
    };
    public clearAllCurve() {
        this.funcLst = [];
    };
    public setCurveRatio(ratio) {
        this.ratio = ratio !== undefined ? ratio : 0;
    };
}

