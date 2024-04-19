// 动作创建器

import { Sprite, Vec3, tween } from "cc"

const funcLst = {}

export const ActionCreater = {
  create: (key, param) => {
    let func = funcLst[key]
    if (func) {
      return func(param)
    }
  }
}

//param = [t,pos]
function __move_to(param) {
  return tween().to(param.t, { poistion: param.pos })
}

//param = [t,pos]
function __move_by(param) {
  return tween().by(param.t, { poistion: param.pos })
}

//param =[t,sx,sy]
function __scale_to(param) {
  return tween().to(param.t, { scale: new Vec3(param.sx, param.sy) })
}

//param =[t,sx,sy]
function __scale_by(param) {
  return tween().by(param.t, { scale: new Vec3(param.sx, param.sy) })
}

//param =[t,angle]
function __rotate_to(param) {
  return tween().to(param.t, { angle: param.angle })
}

//param =[t,angle]
function __rotate_by(param) {
  return tween().by(param.t, { angle: param.angle })
}

//param =[t,sx,sy]
function __skew_to(param) {
  // return cc.SkewTo.create(param.t, param.sx, param.sy)
}

//param =[t,sx,sy]
function __skew_by(param) {
  // return cc.SkewBy.create(param.t, param.sx, param.sy)
}

//param = [t,pos,h,ts]
function __jump_to(param) {
  // return cc.JumpTo.create(param.t, param.pos, param.h, param.ts)
}

//param =[t,pos,h,ts]
function __jump_by(param) {
  new Sprite().color.r
  // return cc.JumpBy.create(param.t, param.pos, param.h, param.ts)
}

//param =[t,ts] 
function __blink(param) {
  // return cc.Blink.create(param.t, param.ts)
}

//param =[t]
function __fade_in(param) {
  // return cc.fadeIn(param.t)
}

//param =[t]
function __fade_out(param) {
  // return cc.fadeOut(param.t)
}

//param=[t,r,g,b]
function __tint_to(param) {
  return tween().to(param.t, { r: param.r, g: param.g, b: param.b })
  // return cc.TintTo.create(param.t, param.r, param.g, param.b)
}

//param=[t,r,g,b]
function __tint_by(param) {
  return tween().by(param.t, { r: param.r, g: param.g, b: param.b })
  // return cc.TintBy.create(param.t, param.r, param.g, param.b)
}

//param=[t]
function __delay(param) {
  return tween().delay(param.t)
}

//param=[t,dx,dy]
function __shake(param) {
  // return cc.Shake.create(param.t, param.dx, param.dy)
}

//param=[t,dx,dy]
function __fallofshake(param) {
  // return cc.FallOffShake.createWithStrength(param.t, param.dx, param.dy)
}

//param = {t,pos = [x,y,},sl,angle,]
function __circle(param) {
  return tween().to(param.t, { angle: param.angle });
  // return cc.Circle.create(param.t, param.pos, param.sl, param.angle)
}

funcLst["move_to"] = __move_to
funcLst["move_by"] = __move_by
funcLst["scale_to"] = __scale_to
funcLst["scale_by"] = __scale_by
funcLst["rotate_to"] = __rotate_to
funcLst["rotate_by"] = __rotate_by
funcLst["skew_to"] = __skew_to
funcLst["skew_by"] = __skew_by
funcLst["jump_to"] = __jump_to
funcLst["jump_by"] = __jump_by
funcLst["blink"] = __blink
funcLst["fade_in"] = __fade_in
funcLst["fade_out"] = __fade_out
funcLst["tint_to"] = __tint_to
funcLst["tint_by"] = __tint_by
funcLst["delay"] = __delay
funcLst["shake"] = __shake
funcLst["ffshake"] = __fallofshake
funcLst["circle"] = __circle
