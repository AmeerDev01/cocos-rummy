import { tween, Node, math, NodeEventType, view, ToggleContainer, EventHandler, Vec3, assetManager, ImageAsset, SpriteFrame, Texture2D, sp, log, sys, native, ScrollView, UITransform, instantiate, screen } from "cc";
import Fingerprint2 from "fingerprintjs2"
import { BridgeCode, EventType } from "../common/bridge";
import { createCopier } from "./fastCopy";
import { circularDeepEqual, strictShallowEqual } from "./fastEqual";

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

/**深度搜寻第一个符合名称的节点 */
export const getNodeByNameDeep = (nodeName: string, parentNode: Node): Node | undefined => {
  if (parentNode.name === nodeName) {
    return parentNode
  } else {
    const l = parentNode.children.length
    for (let i = 0; i < l; i++) {
      if (parentNode.children[i].name === nodeName) {
        return parentNode.children[i]
      } else {
        // if (parentNode.children[i].children.length) {
        //   result = getNodeByNameDeep(nodeName, parentNode.children[i])
        // }
        const res = getNodeByNameDeep(nodeName, parentNode.children[i])
        if (res) {
          return res;
        }
      }
    }

  }
}

export const setByScreenScale = (target?: Node) => {
  //原配比
  const resSize = view.getDesignResolutionSize()
  const resRatio = resSize.width / resSize.height
  const curSize = screen.windowSize.width / screen.windowSize.height
  const result = resRatio / curSize
  // target.setScale(result, result)
  target && target.setScale(0.5, 0.5)
  return result
}

export const initToggle = (target: Node, thisNode: Node, eventHandler: EventHandler, CompStr: string, handerStr: string) => {
  const subContainer = target.getComponent(ToggleContainer)
  // const containerEventHandler = eventHandler;
  eventHandler.target = thisNode;
  eventHandler.component = CompStr;
  eventHandler.handler = handerStr;
  subContainer.checkEvents.push(eventHandler);
  return subContainer
}

export const setCookie = (name: string, value: string, expirationDays: number) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + expirationDays);
  const cookieValue = encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString();
  document.cookie = name + '=' + cookieValue + '; path=/';
}

export const getCookie = (name: string): string | null => {
  const cookieStr = document.cookie;
  const cookies = cookieStr.split('; ');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (decodeURIComponent(cookieName) === name) {
      return decodeURIComponent(cookieValue);
    }
  }

  return null; // 如果找不到指定名称的cookie，返回null
}
/**
 * 对一串数字进行脱敏
 * @param cardNumber 输入的数字
 * @param visibleDigits 可见的数字位数，可以根据需要调整
 * @param isExposeLength 是否要暴露字符串长度，true：脱敏多少位，显示多少位*，false：默认显示4个*
 * @returns 
 */
export const maskBankCardNumber = (cardNumber: string, visibleDigits: number = 4, isExposeLength: boolean = false) => {
  if (cardNumber.length <= visibleDigits * 2) {
    return cardNumber
  }
  const maskedChar = '*';
  // 去除非数字字符
  const trimmedNumber = cardNumber.replace(/\D/g, '');

  // 获取前几位和后几位
  const firstVisiblePart = trimmedNumber.slice(0, visibleDigits);
  const lastVisiblePart = trimmedNumber.slice(-visibleDigits);

  // 获取需要隐藏的中间部分的长度
  const maskedPartLength = trimmedNumber.length - visibleDigits * 2;

  // 生成脱敏后的银行卡号
  const maskedPart = maskedChar.repeat(maskedPartLength);
  const maskedCardNumber = `${firstVisiblePart}${isExposeLength ? maskedPart : "****"}${lastVisiblePart}`;

  return maskedCardNumber;
}

/**获取以canvas画布为基准的坐标 */
export const getNodePositionInCanvas: (node: Node, x?: number, y?: number) => Vec3 = (node: Node, x: number = 0, y: number = 0) => {
  const t_x = node.position.x + x
  const t_y = node.position.y + y
  if (node.parent.name !== "Canvas") {
    return getNodePositionInCanvas(node.parent, t_x, t_y)
  } else {
    return new Vec3(t_x, t_y, 1)
  }
}

/**
 * 加载远程图片
 * @param url 图片远程地址
 * @returns 
 */
export const loadRemoteImage = (url: string) => {
  return new Promise((resolve, reject) => {
    assetManager.loadRemote<ImageAsset>(url, (err, data: ImageAsset) => {
      if (err) {
        log("加载远程图片资源失败", url);
        reject(err);
      } else {
        const spriteFrame = new SpriteFrame();
        const texture = new Texture2D();
        texture.image = data;
        spriteFrame.texture = texture;
        return resolve(spriteFrame);
      }
    })
  })

}

/**
 * 获得缩短的金币，展示用
 * @param gold 
 * @returns 
 */
export const getGoldShorten = (gold: number): string => {
  return gold.formatAmountWithLetter();
}

/**格式化数字 */
export const formatNumber = (gold: number): string => {
  if (!gold) return "0";
  return gold.formatAmountWithCommas();
}

/**
 * 省略字符（双字节算2位）
 * @param value 要省略的字符串
 * @param length 超过多少位就加省略符号
 * @returns 
 */
export const omitStr = (value: string, length: number): string => {
  let singleByteLength = 0;
  let count = 0;
  for (let i = 0; i < value.length; i++) {
    if (hasDoubleByteChar(value.charAt(i))) {
      singleByteLength += 2;
    } else {
      singleByteLength++;
    }
  }
  let newValue = "";
  for (let i = 0; i < value.length; i++) {
    newValue += value.charAt(i);
    if (hasDoubleByteChar(value.charAt(i))) {
      count += 2;
    } else {
      count++;
    }
    if (count >= length) {
      break;
    }
  }
  return singleByteLength > length ? newValue + "···" : newValue;
}

function hasDoubleByteChar(str: string): boolean {
  const regex = /[\u0080-\uFFFF]/;
  return regex.test(str);
}

export const arrowDisplay = (scrollView: ScrollView, left: Node, right: Node, diff: number, setEvent: boolean = false) => {
  const scrollViewWidth = scrollView.getComponent(UITransform).width
  const contentWidth = scrollView.content.getComponent(UITransform).width
  const scrollDistance = scrollView.content.position.x
  right.active = false
  left.active = false
  if (scrollDistance === 0) {
    left.active = false
    right.active = true
  } else if (scrollDistance < 0) {
    left.active = true
    right.active = true
    if (Math.abs(contentWidth - (scrollViewWidth + Math.abs(scrollDistance))) < diff) {
      left.active = true
      right.active = false
    }
  }
  if (contentWidth < scrollViewWidth && right) {
    right.active = false
  }
}

export const generateUniqueId = () => {
  return new Promise((reslove, reject) => {
    const options = { excludes: { touchSupport: true } }
    Fingerprint2.getV18(options, (result) => {
      reslove(`web-${result}`)
    })
    // Fingerprint2.get(function (result) {
    //   reslove(result)
    // })
  })
}

export const getUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

export const copy = (target: any) => {
  if (!target) return target
  if (Object.prototype.toString.call(target) === '[object Object]') {
    const copyShallow = createCopier({
      array: (array) => [...array],
      object: (object) => ({ ...object })
    })
    return copyShallow(target)
    // return instantiate(target)
  } else if (Object.prototype.toString.call(target) === '[object Array]') {
    return deepCopy(target)
  } else {
    return target
  }
}

const deepCopy = (obj: any) => {
  if (Array.isArray(obj)) {
    return obj.map(deepCopy);
  } else if (typeof obj === 'object' && obj !== null) {
    const newObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = deepCopy(obj[key]);
      }
    }
    return newObj;
  } else {
    return obj;
  }
}

export const equalValue = (target1: any, target2: any, isDeep: boolean = false) => {
  const type1 = Object.prototype.toString.call(target1)
  const type2 = Object.prototype.toString.call(target2)
  if (type1 !== type2) return false

  if (type1 === '[object Object]') {
    // return fe.circularDeepEqual(target1, target2)
    return isDeep ? circularDeepEqual(target1, target2) : strictShallowEqual(target1, target2)
  } else if (type1 === '[object Array]') {
    if (target1.length !== target2.length) return false
    return circularDeepEqual(target1, target2)
  } else {
    return target1 === target2
  }
}

/**复制一个Node并给一些函数 */
// export const nodeCopier = (nodeTemplate: Node) => {
//   const node = instantiate(nodeTemplate)
// }

/**添加聊天限制用户 */
export const putChatShieldingUser = (memberId: string) => {
  const json = localStorage.getItem("chat_shielding_user");
  let values = JSON.parse(json) as any[];
  if (!values) {
    values = [];
  }
  const value = values.find(v => v === memberId);
  if (!value) {
    values.push(memberId);
    localStorage.setItem("chat_shielding_user", JSON.stringify(values));
  }
}

/**删除聊天限制用户 */
export const removeChatShieldingUser = (memberId: string) => {
  const json = localStorage.getItem("chat_shielding_user");
  if (!json) {
    return;
  }
  let values = JSON.parse(json) as any[];
  values = values.filter(v => v !== memberId);
  localStorage.setItem("chat_shielding_user", JSON.stringify(values));
}

/**判断是否为聊天限制用户 */
export const isChatShieldingUser = (memberId) => {
  const json = localStorage.getItem("chat_shielding_user");
  if (!json) {
    return false;
  }
  let values = JSON.parse(json) as any[];
  const value = values.find(v => v === memberId);
  return value ? true : false;
}