// 动作链播放器

import { Node, Tween, tween } from "cc"
import { ActionCreater } from "./ActionCreater"

function analyze(data) {
  let actLst = []

  if (data && data.eff_lst.length > 0) {
    let effLst = data.eff_lst
    let newIndex = 0
    actLst.push([])
    let effLen = effLst.length - 1
    for (let i = 0; i <= effLen; i++) {
      actLst[newIndex].push(effLst[i])
      if (effLst[i].nxt_idx === -1 && i < effLen) {
        actLst.push([])
        newIndex = actLst.length - 1;
      }
    }
  }

  return actLst
}

function isCanReserver(key) {
  if (key === "move_by" || key === "scale_by" || key === "rotate_by" || key === "skew_by" || key === "jump_by" || key === "tint_by") {
    return true
  }
  return false
}

function setInitParam(param, obj: Node, parentObj: Node) {
  if (param && obj) {
    if (param.angle) { obj.angle = param.angle }
    if (param.sax) { obj.setScale(param.sax, param.say) }
    // if (param.say) { obj.setScale(param.sax, param.say) }
    // if (param.skx) { obj.setSkewX(param.skx) }
    // if (param.sky) { obj.setSkewY(param.sky) }
    // if (param.srkx) { obj.setRotationSkewX(param.srkx) }
    // if (param.srky) { obj.setRotationSkewY(param.srky) }
    if (param.zorder) {
      if (parentObj) {
        parentObj.setSiblingIndex(parentObj.parent.children.length)
      } else {
        obj.setSiblingIndex(obj.parent.children.length)
      }
    }
  }
}

//////////////////////////////////////////////////////////////////////////////////////////-

export const ActionEffectPlayer = {
  play: (obj: Node, endCall, eff, parentObj = undefined) => {
    if (obj && eff) {

      const nodeTw = tween(obj);

      let effLst = analyze(eff)
      setInitParam(eff.init_param, obj, parentObj)

      let effLen = effLst.length - 1
      for (let i = 0; i <= effLen; i++) {
        let len = effLst[i].length - 1
        let lst = effLst[i]

        let seqLst = [] //一个链

        for (let j = 0; j <= len; j++) {
          let actObj = ActionCreater.create(lst[j].key, lst[j].param) as Tween<any>
          let actObjR = null

          if (actObj && isCanReserver(lst[j].key) && lst[j].breserver) {
            actObjR = actObj.reverseTime();
          }

          const tw = tween();
          if (actObj) { tw.then(actObj) }
          if (actObjR) { tw.then(actObjR) }

          let reapt_obj = null
          if (lst[j].loop === -1) {
            reapt_obj = tween().repeat(10000000, tw)
          } else {
            reapt_obj = tween().repeat(lst[j].loop, tw)
          }
          seqLst.push(reapt_obj)
        }

        if (i === effLen) { //最后一个链来执行完成回调
          if (endCall) {
            seqLst.push(tween().call(() => obj.isValid && endCall()))
          }
        }

        seqLst.forEach(v => {
          nodeTw.then(v);
        })
        nodeTw.start();
        // obj.runAction(tween().sequence(...seqLst))
      }
    } else {//没有动作链直接执行完成回调
      endCall && endCall();
    }
  }
}

