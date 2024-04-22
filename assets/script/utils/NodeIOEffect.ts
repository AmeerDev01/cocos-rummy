import { Node, UIOpacity, Vec3, tween } from "cc"

export enum EffectType {
  EFFECT1,
  EFFECT2,
  EFFECT_FADE
}

export type EnterOption = {
  tweenDuration?: number,
  scaleOrigin?: { x: number, y: number }
}

type EffectItem = (target: Node) => {
  /**
     * 入场效果
     * @param tweenDuration 执行时间,默认0.2s
     * @returns 新加入的节点Promise
     */
  enter: (option?: EnterOption) => Promise<Node>
  /**
     * 出场
     * @param isDestroy 是否要自动销毁,默认为true
     * @param tweenDuration 执行时间,默认0.2s
     * @returns 返回出场的节点Promise（注意：如果传入自动销毁，这里返回的是空）
     */
  out: (isDestroy?: boolean, tweenDuration?: number) => Promise<Node>
}

export const getEffectByType = (effectType: EffectType) => {
  switch (effectType) {
    case EffectType.EFFECT1:
      return effect1;
    case EffectType.EFFECT2:
      return effect2;
    case EffectType.EFFECT_FADE:
      return effectFade;
  }
}

/**缩放0.9，并渐变 */
export const effect1: EffectItem = (target: Node) => {
  return {
    enter: (option?: EnterOption): Promise<Node | undefined> => {
      return new Promise((resolve) => {
        const _option = Object.assign({
          tweenDuration: 0.5,
          scaleOrigin: { x: 1, y: 1 }
        }, option || {})
        try {
          let opacityUI = target.getComponent(UIOpacity)
          !target.getComponent(UIOpacity) && (opacityUI = target.addComponent(UIOpacity))
          opacityUI.opacity = 0
          target.setScale(_option.scaleOrigin.x * 0.7, _option.scaleOrigin.y * 0.7)
          tween(opacityUI).to(_option.tweenDuration, { opacity: 255 }).start();
          tween(target).to(_option.tweenDuration, { scale: new Vec3(_option.scaleOrigin.x * 1, _option.scaleOrigin.x * 1, 1) }, {
            easing: "backOut"//"elasticOut"
          }).call(() => {
            resolve(target)
          }).start();
        } catch (e) {
          resolve(target)
        }
      })
    },
    out: (isDestroy: boolean = true, tweenDuration: number = 0.2): Promise<Node | undefined> => {
      return new Promise((resolve) => {
        try {
          let opacityUI = target.getComponent(UIOpacity)
          !target.getComponent(UIOpacity) && (opacityUI = target.addComponent(UIOpacity))
          tween(opacityUI).to(tweenDuration, { opacity: 0 }).start();
          tween(target).to(tweenDuration, { scale: new Vec3(0.9, 0.9, 1) }).call(() => {
            isDestroy && target.destroy()
            resolve(target)
          }).start();
        } catch (e) {
          resolve(target)
        }
      })
    }
  }
}

/**放大1.1，并渐变 */
export const effect2: EffectItem = (target: Node) => {
  return {
    enter: (option?: EnterOption): Promise<Node | undefined> => {
      return new Promise((resolve) => {
        const _option = Object.assign({
          tweenDuration: 0.2,
          scaleOrigin: { x: 1, y: 1 }
        }, option || {})
        try {
          let opacityUI = target.getComponent(UIOpacity)
          !target.getComponent(UIOpacity) && (opacityUI = target.addComponent(UIOpacity))
          opacityUI.opacity = 0
          target.setScale(_option.scaleOrigin.x * 1.1, _option.scaleOrigin.y * 1.1)
          tween(opacityUI).to(_option.tweenDuration, { opacity: 255 }).start();
          tween(target).to(_option.tweenDuration, { scale: new Vec3(_option.scaleOrigin.x * 1, _option.scaleOrigin.y * 1, 1) }).call(() => {
            resolve(target)
          }).start();
        } catch (e) {
          resolve(target)
        }
      })
    },
    out: (isDestroy: boolean = true, tweenDuration: number = 0.2): Promise<Node | undefined> => {
      return new Promise((resolve) => {
        try {
          let opacityUI = target.getComponent(UIOpacity)
          !target.getComponent(UIOpacity) && (opacityUI = target.addComponent(UIOpacity))
          tween(opacityUI).to(tweenDuration, { opacity: 0 }).start();
          tween(target).to(tweenDuration, { scale: new Vec3(1.1, 1.1, 1) }).call(() => {
            isDestroy && target.destroy()
            resolve(target)
          }).start();
        } catch (e) {
          resolve(target)
        }
      })
    }
  }
}

export const effectFade: EffectItem = (target: Node) => {
  return {
    enter: (option?: EnterOption): Promise<Node | undefined> => {
      return new Promise((resolve) => {
        try {
          const _option = Object.assign({ tweenDuration: 0.3 }, option || {})
          let opacityUI = target.getComponent(UIOpacity)
          !target.getComponent(UIOpacity) && (opacityUI = target.addComponent(UIOpacity))
          opacityUI.opacity = 0
          tween(opacityUI).to(_option.tweenDuration, { opacity: 255 }).call(() => {
            resolve(target)
          }).start()
        } catch (e) {
          resolve(target)
        }
      })
    },
    out: (isDestroy: boolean = true, tweenDuration: number = 0.3): Promise<Node | undefined> => {
      return new Promise((resolve) => {
        try {
          let opacityUI = target.getComponent(UIOpacity)
          !target.getComponent(UIOpacity) && (opacityUI = target.addComponent(UIOpacity))
          tween(opacityUI).to(tweenDuration, { opacity: 0 }).call(() => {
            isDestroy && target.destroy()
            resolve(target)
          }).start()
        } catch (e) {
          resolve(target)
        }
      })
    }
  }
}