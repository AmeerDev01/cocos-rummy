import { tween, Node, math, NodeEventType } from "cc";
import Facade from "../Framework/care/Facade";
import { ProxyDefine } from "./Const/ProxyDefine";
import { BgProxy } from "./Proxy/BgProxy";
import { LocalCacheDataProxy } from "./Proxy/LocalCacheDataProxy";
import { SocketProxy } from "./Proxy/SocketProxy";
import { SlotProxy } from "./Proxy/SlotProxy";
const { Vec3 } = math

export enum EffectType {
  SCALE = "scale"
}

export const bindClickEvent = (node: Node, effectType: EffectType = EffectType.SCALE, handler?: () => void) => {
  node.on(Node.EventType.TOUCH_START, () => {
    tween(node).to(0.1, { position: new Vec3(node.getPosition().x, node.getPosition().y - 5) }).start()
  })
  node.on(Node.EventType.TOUCH_END, () => {
    tween(node).to(0.1, { position: new Vec3(node.getPosition().x, node.getPosition().y + 5) }).call(() => {
      handler && handler()
    }).start()
  })
}

export const getRootPosition = (node: Node, totalX?: number, totalY?: number): math.Vec3 => {
  if (node.parent.name === 'Canvas') {
    return new Vec3(totalX, totalY, 0)
  } else {
    const x = node.position.x + node.parent.position.x
    const y = node.position.y + node.parent.position.y
    return getRootPosition(node.parent, x, y)
  }
}

export const getUrlParams = (name: string) => {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substring(1).match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}

export const getBgProxy = () => {
  return (Facade.Instance.retrieveProxy(ProxyDefine.BG) as BgProxy)
}
export const getLocalCacheDataProxy = () => {
  return <LocalCacheDataProxy>Facade.Instance.retrieveProxy(ProxyDefine.LOCAL_CACHE_DATA);
}
export const getSocketProxy = () => {
  return (Facade.Instance.retrieveProxy(ProxyDefine.WEBSOCKET) as SocketProxy)
}
export const getSlotProxy = () => {
  return Facade.Instance.retrieveProxy(ProxyDefine.SLOT) as SlotProxy
}
export function convertToMandK(number) {
    if (number >= 1000000) {
        let M = (number / 1000000).toFixed(2);
        return `${M}M`;
    } else if (number >= 1000) {
        let K = (number / 1000).toFixed(2);
        return `${K}k`;
    } else {
        return `${number}`;
    }
}

