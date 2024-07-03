import { native } from "cc";
import { NATIVE } from "cc/env";
import UseSetOption from "../utils/UseSetOption";
import { getUUID } from "../utils/tool";

export enum BridgeCode {
    /**复制剪切板 */
    COPY_CLIPBOARD = 'copyclipboard',
    /**应用内事件（埋点） */
    IN_APP_EVENTS = 'inAppEvents',
    /**震动 */
    VIBRATE = "VIBRATE",
    /**获得设备唯一id */
    UNIQUE_ID = "UNIQUE_ID",
    /**APP的版本号码 */
    APP_VERSION = "APP_VERSION",
    /**下载apk返回 */
    DOWNLOAD_APK = "downloadApk",
}

export enum EventChannel {
    APPS_FLYER = 'appsflyer',
    FACEBOOK = 'facebook',
    ADJUST = 'adjust',
}

export enum EventType {
    PRICE = "af_price",
}

export enum WebEventType {
    REGISTER = 1,
    LOGIN = 2,
    FIRST_PURCHASE = 3,
    PURCHASE = 4,
    FIRST_PULL_PURCHASE = 5,
    PULL_PURCHASE = 6,
}

export type EventData = {
    /** appsflyer | facebook */
    type: string,
    name: string,
    value: any,
    eventParams?: EventData[]
}
/**adjust的web事件配置 */
export const adjustWebEventConfig = {
    register: '',
    login: '',
    /**首次充值 */
    firstPurchase: '',
    /**重复充值 */
    purchase: '',
    /**首次拉取充值 */
    firstPullPurchase: '',
    /**拉取充值 */
    pullPurchase: '',
}

/**
 * 发送震动
 * @param milliseconds 震动时长 单位/毫秒
 */
export const sendNativeVibrate = (milliseconds: number) => {
    if (!UseSetOption.Instance().option.vibration) return
    if (milliseconds > 0 && NATIVE) {
        native.bridge.sendToNative(BridgeCode.VIBRATE, milliseconds + "");
    }
}

/**发送登录埋点事件 */
export const loginEvents = (uid: string) => {
    if (NATIVE) {
        loginAppsflyerEvents(uid);
        loginAdjustEvents(uid);
    } else {
        callAndroid(WebEventType.LOGIN, adjustWebEventConfig.login, uid);
        facebookWebEveht(WebEventType.LOGIN, uid);
    }
}

const loginAppsflyerEvents = (uid: string) => {
    const data: EventData = {
        type: EventChannel.APPS_FLYER,
        name: 'af_login',
        value: '',
        eventParams: [],
    }

    data.eventParams.push({
        type: EventChannel.APPS_FLYER,
        name: 'af_customer_user_id',
        value: uid
    })

    native.bridge.sendToNative(BridgeCode.IN_APP_EVENTS, JSON.stringify(data));
}
const loginAdjustEvents = (uid: string) => {
    const data: EventData = {
        type: EventChannel.ADJUST,
        name: 'login',
        value: 'qzo3bf', //adjust的event token，这个在adjust后台是不能修改的，event name是可以随便修改的
        eventParams: [],
    }
    // data.eventParams.push({
    //     name: 'productId',
    //     value: uid,
    //     type: '',
    // })

    native.bridge.sendToNative(BridgeCode.IN_APP_EVENTS, JSON.stringify(data));
}

/**
 * 注册
 * @param uid 账号id
 * @param pwd 密码
 */
export const registerAppsflyerEvents = (uid: string, pwd: string) => {
    if (NATIVE) {
        const data: EventData = {
            type: EventChannel.APPS_FLYER,
            // name: 'register',
            name: 'af_complete_registration',
            value: '',
            eventParams: [],
        }

        data.eventParams.push({
            type: EventChannel.APPS_FLYER,
            name: 'af_param_1',
            value: 'af_complete_registration'
        })
        data.eventParams.push({
            type: EventChannel.APPS_FLYER,
            name: 'af_param_2',
            value: uid
        })
        data.eventParams.push({
            type: EventChannel.APPS_FLYER,
            name: 'af_param_3',
            value: pwd
        })

        native.bridge.sendToNative(BridgeCode.IN_APP_EVENTS, JSON.stringify(data));
        // adjust注册事件
        registerAdjustEvents(uid, pwd);
    } else {
        callAndroid(WebEventType.REGISTER, adjustWebEventConfig.register, uid);
        facebookWebEveht(WebEventType.REGISTER, uid);
    }
}

export const registerAdjustEvents = (uid: string, pwd: string) => {
    if (NATIVE) {
        const data: EventData = {
            type: EventChannel.ADJUST,
            name: 'register',
            value: 'sc7bef', //adjust的event token，这个在adjust后台是不能修改的，event name是可以随便修改的
            eventParams: [],
        }
        // data.eventParams.push({
        //     name: 'productId',
        //     value: uid,
        //     type: '',
        // })
        // data.eventParams.push({
        //     name: 'pwd',
        //     value: pwd,
        //     type: '',
        // })

        native.bridge.sendToNative(BridgeCode.IN_APP_EVENTS, JSON.stringify(data));
    }
}

/**
 * 充值成功发送事件
 * @param revenue 充值金额
 * @param currency 货币类型
 * @param first 是否首次
 */
export const purchaseAppsflyerEvents = (revenue: string, currency: string, first: boolean, id: string) => {
    currency && (currency = currency.toUpperCase());
    if (NATIVE && Number(revenue) > 0) {
        const data: EventData = {
            type: EventChannel.APPS_FLYER,
            // name: 'purchase',
            name: first ? 'af_purchase' : 'af_purchase_success',
            value: '',
            eventParams: [],
        }

        data.eventParams.push({
            type: EventChannel.APPS_FLYER,
            name: 'af_param_1',
            value: first ? 'af_purchase' : 'af_purchase_success'
        })
        data.eventParams.push({
            type: EventChannel.APPS_FLYER,
            name: 'af_revenue',
            value: revenue
        })
        data.eventParams.push({
            type: EventChannel.APPS_FLYER,
            name: 'af_currency',
            value: currency
        })

        native.bridge.sendToNative(BridgeCode.IN_APP_EVENTS, JSON.stringify(data));
        //adjust充值事件
        purchaseAdjustEvents(revenue, currency, first, id);
    } else {
        const eventToken = first ? adjustWebEventConfig.firstPurchase : adjustWebEventConfig.purchase;
        callAndroid(first ? WebEventType.FIRST_PURCHASE : WebEventType.PURCHASE, eventToken, revenue, currency, id);
        facebookWebEveht(first ? WebEventType.FIRST_PURCHASE : WebEventType.PURCHASE, revenue, currency);
    }
}

/**充值成功发送事件 */
export const purchaseAdjustEvents = (revenue: string, currency: string, first: boolean, id: string) => {
    if (NATIVE && Number(revenue) > 0) {
        const data: EventData = {
            type: EventChannel.ADJUST,
            name: first ? 'first-purchase' : 'purchase',
            value: first ? 'jv5em7' : 'am05m5',//adjust的event token，这个在adjust后台是不能修改的，event name是可以随便修改的
            eventParams: [],
        }

        data.eventParams.push({
            name: 'revenue',
            value: revenue,
            type: currency,
        })
        data.eventParams.push({
            name: 'orderId',
            value: id,
            type: '',
        })

        native.bridge.sendToNative(BridgeCode.IN_APP_EVENTS, JSON.stringify(data));
    }
}

/**拉取充值事件 */
export const pullPurchaseEvents = (revenue: string, currency: string, first: boolean, id: string) => {
    if (NATIVE && Number(revenue) > 0) {
        pullPurchaseAppsflyerEvents(revenue, currency, first, id);
        pullPurchaseAdjustEvents(revenue, currency, first, id);
    } else {
        const eventToken = first ? adjustWebEventConfig.firstPullPurchase : adjustWebEventConfig.pullPurchase;
        callAndroid(first ? WebEventType.FIRST_PULL_PURCHASE : WebEventType.PULL_PURCHASE, eventToken, revenue, currency, id);
        facebookWebEveht(first ? WebEventType.FIRST_PULL_PURCHASE : WebEventType.PULL_PURCHASE, revenue, currency);
    }
}

/**appsflyer拉取充值事件 */
const pullPurchaseAppsflyerEvents = (revenue: string, currency: string, first: boolean, id: string) => {
    const data: EventData = {
        type: EventChannel.APPS_FLYER,
        // name: 'purchase',
        name: first ? 'af_initiated_checkout' : 'af_initiated_checkout_success',
        value: '',
        eventParams: [],
    }

    data.eventParams.push({
        type: EventChannel.APPS_FLYER,
        name: 'af_param_1',
        value: first ? 'af_initiated_checkout' : 'af_initiated_checkout_success'
    })
    data.eventParams.push({
        type: EventChannel.APPS_FLYER,
        name: 'af_revenue',
        value: revenue
    })
    data.eventParams.push({
        type: EventChannel.APPS_FLYER,
        name: 'af_currency',
        value: currency
    })

    native.bridge.sendToNative(BridgeCode.IN_APP_EVENTS, JSON.stringify(data));
}

/**
 * adjust 拉取充值事件
 * @param revenue 
 * @param currency 
 * @param first 
 */
const pullPurchaseAdjustEvents = (revenue: string, currency: string, first: boolean, id: string) => {
    if (NATIVE && Number(revenue) > 0) {
        const data: EventData = {
            type: EventChannel.ADJUST,
            name: first ? 'first-pull-purchase' : 'pull-purchase',
            value: first ? 't9am42' : '45qr0q',//adjust的event token，这个在adjust后台是不能修改的，event name是可以随便修改的
            eventParams: [],
        }

        data.eventParams.push({
            name: 'revenue',
            value: revenue,
            type: currency,
        })
        data.eventParams.push({
            name: 'orderId',
            value: id,
            type: '',
        })

        native.bridge.sendToNative(BridgeCode.IN_APP_EVENTS, JSON.stringify(data));
    }
}

/**
 * 发送应用内事件
 * @param eventType 
 * @param value 
 */
export const sendAppsflyerEvents = (name: string, value: any) => {
    if (NATIVE) {
        const data: EventData = {
            type: EventChannel.APPS_FLYER,
            name: name,
            value: value,
        }
        native.bridge.sendToNative(BridgeCode.IN_APP_EVENTS, JSON.stringify(data));
    }
}

export const sendFacebookEvents = (name: string, value: any) => {
    if (NATIVE) {
        const data: EventData = {
            type: EventChannel.FACEBOOK,
            name: name,
            value: value,
        }
        native.bridge.sendToNative(BridgeCode.IN_APP_EVENTS, JSON.stringify(data));
    }
}

/**
 * 获得设备唯一id
 */
export const getDeviceUniqueId = () => {
    if (NATIVE) {
        native.bridge.sendToNative(BridgeCode.UNIQUE_ID, '');
    }
}

/**
 * 获得设备唯一id
 */
export const getAppVersionName = () => {
    if (NATIVE) {
        native.bridge.sendToNative(BridgeCode.APP_VERSION, '');
    }
}

export const getPackageName = () => {
    if (NATIVE && native.reflection) {
        return native.reflection.callStaticMethod("com.cocos.game.AppActivity", 'getPackageCode', '()Ljava/lang/String;')
    }
    return 'web';
}

/**获得firebase通知令牌 */
export const getFirebaseToken = () => {
    if (NATIVE && native.reflection) {
        return native.reflection.callStaticMethod("com.cocos.game.AppActivity", 'getFirebaseToken', '()Ljava/lang/String;')
    }
    return '';
}

export const nativeDownloadApk = (url, titleStr, contentStr) => {
    if (NATIVE && native.reflection) {
        native.reflection.callStaticMethod("com.cocos.game.AppActivity", 'downloadApk',
            '(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;', url, titleStr, contentStr)
    }
}

export const installApk = (apkPath: string) => {
    if (NATIVE && native.reflection) {
        native.reflection.callStaticMethod("com.cocos.game.AppActivity", 'installApk',
            '(Ljava/lang/String;)V', apkPath);
    }
}

export const getRedirectUrl = (apkUrl: string) => {
    if (NATIVE && native.reflection) {
        return native.reflection.callStaticMethod("com.cocos.game.AppActivity", 'getRedirectUrl',
            '(Ljava/lang/String;)Ljava/lang/String;', apkUrl);
    }
}

export const hideNativeSplash = () => {
    if (NATIVE && native.reflection) {
        native.reflection.callStaticMethod("com.cocos.game.AppActivity", 'hideSplash',
            '()V')
    }
}

export const showNativeSplash = () => {
    if (NATIVE && native.reflection) {
        native.reflection.callStaticMethod("com.cocos.game.AppActivity", 'showSpl',
            '()V')
    }
}

export const callAndroid = (type, eventToken, revenue?: string, currency?: string, id?: string) => {
    if (NATIVE) {
        return;
    }
    if (typeof window.Android !== 'undefined' && window.Android !== null) {
        window.Android.adjustEvent(type, eventToken);
        console.log(`Executed successfully, event type: ${type}, eventToken: ${eventToken}`);
    } else {
        console.log('The Android interface is unavailable');
    }
}

/**
 * facebook Web事件发送
 * @param type 
 * @param values 
 * @returns 
 */
export const facebookWebEveht = (type, ...values) => {
    if (NATIVE) {
        return;
    }

    if (typeof window.fbq !== 'undefined' && window.fbq !== null) {
        if (type === WebEventType.REGISTER) {
            window.fbq('track', 'CompleteRegistration');
        } else if (type === WebEventType.LOGIN) {
            window.fbq('track', 'Login');
        } else if (type === WebEventType.FIRST_PURCHASE) {
            window.fbq('track', 'Purchase', { currency: values[1], value: values[0] });
        } else if (type === WebEventType.PURCHASE) {
            window.fbq('track', 'Purchase_success', { currency: values[1], value: values[0] });
        } else if (type === WebEventType.FIRST_PULL_PURCHASE) {
            window.fbq('track', 'InitiateCheckout', { currency: values[1], value: values[0] });
        } else if (type === WebEventType.PULL_PURCHASE) {
            window.fbq('track', 'InitiateCheckout_success', { currency: values[1], value: values[0] });
        }
        // document.getElementById("ddd").innerHTML = '执行成功，类型：' + type;
        console.log('fbq 执行成功，类型：' + type);
    } else {
        // document.getElementById("ddd").innerHTML = "Android界面不可用";
        console.log('fbq facebook不可用');
    }
}