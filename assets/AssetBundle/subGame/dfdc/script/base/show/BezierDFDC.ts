import { _decorator, Component, math, Node, tween, Tween } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BezierDFDC')
export class BezierDFDC extends Component {
    /**当前坐标 */
    _currPos: math.Vec3 = null;
    endPos: math.Vec3 = null;
    posList: math.Vec3[] = [];
    set currPos(pos: math.Vec3) {
        this._currPos = pos;

    }
    get currPos(): math.Vec3 {
        return this._currPos;
    }
    tweenNd(tiem: number, pos: math.Vec3[], cd: Function) {
        this._currPos = math.v3(pos[0].x, pos[0].y, pos[0].z);
        Tween.stopAllByTarget(this);
        tween(<any>this).to(tiem, { currPos: pos[pos.length - 1] }, {
            onUpdate: (p, t: number) => {
                this.getCurrPos(t, pos);
                this.node.setPosition(this.endPos);
            }
        }).call(() => {
            if (cd) {
                cd();
            }
        }).start();
    }
    /**获取当前位置*/
    getCurrPos(t: number, posList: math.Vec3[]) {
        let list: math.Vec3[] = [];
        for (let i = 1; i < posList.length; ++i) {
            let pos = this.getTimePos(t, posList[i - 1], posList[i]);
            list.push(pos);
        }
        if (list.length == 0) {
            this.endPos = posList[0];
            return;
        } else if (list.length == 1) {
            this.endPos = list[0];
            return;
        } else {
            this.getCurrPos(t, list);
        }
    }
    /**获取两个点的时间节点 */
    getTimePos(t: number, start: math.Vec3, end: math.Vec3) {
        let x = (end.x - start.x) * t;
        let y = (end.y - start.y) * t;
        return math.v3(start.x + x, start.y + y, 0);
    }
}


