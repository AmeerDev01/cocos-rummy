System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, native, NATIVE, UseSetOption, getUUID, _crd, BridgeCode, EventChannel, EventType, WebEventType, sendNativeVibrate, loginEvents, loginAppsflyerEvents, loginAdjustEvents, registerAppsflyerEvents, registerAdjustEvents, purchaseAppsflyerEvents, purchaseAdjustEvents, pullPurchaseEvents, pullPurchaseAppsflyerEvents, pullPurchaseAdjustEvents, sendAppsflyerEvents, sendFacebookEvents, getDeviceUniqueId, getAppVersionName, getPackageName, getFirebaseToken, nativeDownloadApk, installApk, getRedirectUrl, hideNativeSplash, callAndroid, facebookWebEveht;

  function _reportPossibleCrUseOfUseSetOption(extras) {
    _reporterNs.report("UseSetOption", "../utils/UseSetOption", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetUUID(extras) {
    _reporterNs.report("getUUID", "../utils/tool", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      native = _cc.native;
    }, function (_ccEnv) {
      NATIVE = _ccEnv.NATIVE;
    }, function (_unresolved_2) {
      UseSetOption = _unresolved_2.default;
    }, function (_unresolved_3) {
      getUUID = _unresolved_3.getUUID;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "612bcF5JK5MF6EAQagASWl0", "bridge", undefined);

      __checkObsolete__(['native']);

      _export("BridgeCode", BridgeCode = /*#__PURE__*/function (BridgeCode) {
        BridgeCode["COPY_CLIPBOARD"] = "copyclipboard";
        BridgeCode["IN_APP_EVENTS"] = "inAppEvents";
        BridgeCode["VIBRATE"] = "VIBRATE";
        BridgeCode["UNIQUE_ID"] = "UNIQUE_ID";
        BridgeCode["APP_VERSION"] = "APP_VERSION";
        BridgeCode["DOWNLOAD_APK"] = "downloadApk";
        return BridgeCode;
      }({}));

      _export("EventChannel", EventChannel = /*#__PURE__*/function (EventChannel) {
        EventChannel["APPS_FLYER"] = "appsflyer";
        EventChannel["FACEBOOK"] = "facebook";
        EventChannel["ADJUST"] = "adjust";
        return EventChannel;
      }({}));

      _export("EventType", EventType = /*#__PURE__*/function (EventType) {
        EventType["PRICE"] = "af_price";
        return EventType;
      }({}));

      _export("WebEventType", WebEventType = /*#__PURE__*/function (WebEventType) {
        WebEventType[WebEventType["REGISTER"] = 1] = "REGISTER";
        WebEventType[WebEventType["LOGIN"] = 2] = "LOGIN";
        WebEventType[WebEventType["FIRST_PURCHASE"] = 3] = "FIRST_PURCHASE";
        WebEventType[WebEventType["PURCHASE"] = 4] = "PURCHASE";
        WebEventType[WebEventType["FIRST_PULL_PURCHASE"] = 5] = "FIRST_PULL_PURCHASE";
        WebEventType[WebEventType["PULL_PURCHASE"] = 6] = "PULL_PURCHASE";
        return WebEventType;
      }({}));

      /**
       * 发送震动
       * @param milliseconds 震动时长 单位/毫秒
       */
      _export("sendNativeVibrate", sendNativeVibrate = milliseconds => {
        if (!(_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
          error: Error()
        }), UseSetOption) : UseSetOption).Instance().option.vibration) return;

        if (milliseconds > 0 && NATIVE) {
          native.bridge.sendToNative(BridgeCode.VIBRATE, milliseconds + "");
        }
      });
      /**发送登录埋点事件 */


      _export("loginEvents", loginEvents = uid => {
        if (NATIVE) {
          loginAppsflyerEvents(uid);
          loginAdjustEvents(uid);
        } else {
          callAndroid(WebEventType.LOGIN, '');
          facebookWebEveht(WebEventType.LOGIN, uid);
        }
      });

      loginAppsflyerEvents = uid => {
        var data = {
          type: EventChannel.APPS_FLYER,
          name: 'af_login',
          value: '',
          eventParams: []
        };
        data.eventParams.push({
          type: EventChannel.APPS_FLYER,
          name: 'af_customer_user_id',
          value: uid
        });
        native.bridge.sendToNative(BridgeCode.IN_APP_EVENTS, JSON.stringify(data));
      };

      loginAdjustEvents = uid => {
        var data = {
          type: EventChannel.ADJUST,
          name: 'login',
          value: 'qzo3bf',
          //adjust的event token，这个在adjust后台是不能修改的，event name是可以随便修改的
          eventParams: []
        }; // data.eventParams.push({
        //     name: 'productId',
        //     value: uid,
        //     type: '',
        // })

        native.bridge.sendToNative(BridgeCode.IN_APP_EVENTS, JSON.stringify(data));
      };
      /**
       * 注册
       * @param uid 账号id
       * @param pwd 密码
       */


      _export("registerAppsflyerEvents", registerAppsflyerEvents = (uid, pwd) => {
        if (NATIVE) {
          var data = {
            type: EventChannel.APPS_FLYER,
            // name: 'register',
            name: 'af_complete_registration',
            value: '',
            eventParams: []
          };
          data.eventParams.push({
            type: EventChannel.APPS_FLYER,
            name: 'af_param_1',
            value: 'af_complete_registration'
          });
          data.eventParams.push({
            type: EventChannel.APPS_FLYER,
            name: 'af_param_2',
            value: uid
          });
          data.eventParams.push({
            type: EventChannel.APPS_FLYER,
            name: 'af_param_3',
            value: pwd
          });
          native.bridge.sendToNative(BridgeCode.IN_APP_EVENTS, JSON.stringify(data)); // adjust注册事件

          registerAdjustEvents(uid, pwd);
        } else {
          callAndroid(WebEventType.REGISTER, '');
          facebookWebEveht(WebEventType.REGISTER, uid);
        }
      });

      _export("registerAdjustEvents", registerAdjustEvents = (uid, pwd) => {
        if (NATIVE) {
          var data = {
            type: EventChannel.ADJUST,
            name: 'register',
            value: 'sc7bef',
            //adjust的event token，这个在adjust后台是不能修改的，event name是可以随便修改的
            eventParams: []
          }; // data.eventParams.push({
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
      });
      /**
       * 充值成功发送事件
       * @param revenue 充值金额
       * @param currency 货币类型
       * @param first 是否首次
       */


      _export("purchaseAppsflyerEvents", purchaseAppsflyerEvents = (revenue, currency, first) => {
        currency && (currency = currency.toUpperCase());

        if (NATIVE && Number(revenue) > 0) {
          var data = {
            type: EventChannel.APPS_FLYER,
            // name: 'purchase',
            name: first ? 'af_purchase' : 'af_purchase_success',
            value: '',
            eventParams: []
          };
          data.eventParams.push({
            type: EventChannel.APPS_FLYER,
            name: 'af_param_1',
            value: first ? 'af_purchase' : 'af_purchase_success'
          });
          data.eventParams.push({
            type: EventChannel.APPS_FLYER,
            name: 'af_revenue',
            value: revenue
          });
          data.eventParams.push({
            type: EventChannel.APPS_FLYER,
            name: 'af_currency',
            value: currency
          });
          native.bridge.sendToNative(BridgeCode.IN_APP_EVENTS, JSON.stringify(data)); //adjust充值事件

          purchaseAdjustEvents(revenue, currency, first);
        } else {
          callAndroid(first ? WebEventType.FIRST_PURCHASE : WebEventType.PURCHASE, '');
          facebookWebEveht(first ? WebEventType.FIRST_PURCHASE : WebEventType.PURCHASE, revenue, currency);
        }
      });
      /**充值成功发送事件 */


      _export("purchaseAdjustEvents", purchaseAdjustEvents = (revenue, currency, first) => {
        if (NATIVE && Number(revenue) > 0) {
          var data = {
            type: EventChannel.ADJUST,
            name: first ? 'first-purchase' : 'purchase',
            value: first ? 'jv5em7' : 'am05m5',
            //adjust的event token，这个在adjust后台是不能修改的，event name是可以随便修改的
            eventParams: []
          };
          data.eventParams.push({
            name: 'revenue',
            value: revenue,
            type: currency
          });
          data.eventParams.push({
            name: 'orderId',
            value: (_crd && getUUID === void 0 ? (_reportPossibleCrUseOfgetUUID({
              error: Error()
            }), getUUID) : getUUID)(),
            type: ''
          });
          native.bridge.sendToNative(BridgeCode.IN_APP_EVENTS, JSON.stringify(data));
        }
      });
      /**拉取充值事件 */


      _export("pullPurchaseEvents", pullPurchaseEvents = (revenue, currency, first) => {
        if (NATIVE && Number(revenue) > 0) {
          pullPurchaseAppsflyerEvents(revenue, currency, first);
          pullPurchaseAdjustEvents(revenue, currency, first);
        } else {
          callAndroid(first ? WebEventType.FIRST_PULL_PURCHASE : WebEventType.PULL_PURCHASE, '');
          facebookWebEveht(first ? WebEventType.FIRST_PULL_PURCHASE : WebEventType.PULL_PURCHASE, revenue, currency);
        }
      });
      /**appsflyer拉取充值事件 */


      pullPurchaseAppsflyerEvents = (revenue, currency, first) => {
        var data = {
          type: EventChannel.APPS_FLYER,
          // name: 'purchase',
          name: first ? 'af_initiated_checkout' : 'af_initiated_checkout_success',
          value: '',
          eventParams: []
        };
        data.eventParams.push({
          type: EventChannel.APPS_FLYER,
          name: 'af_param_1',
          value: first ? 'af_initiated_checkout' : 'af_initiated_checkout_success'
        });
        data.eventParams.push({
          type: EventChannel.APPS_FLYER,
          name: 'af_revenue',
          value: revenue
        });
        data.eventParams.push({
          type: EventChannel.APPS_FLYER,
          name: 'af_currency',
          value: currency
        });
        native.bridge.sendToNative(BridgeCode.IN_APP_EVENTS, JSON.stringify(data));
      };
      /**
       * adjust 拉取充值事件
       * @param revenue 
       * @param currency 
       * @param first 
       */


      pullPurchaseAdjustEvents = (revenue, currency, first) => {
        if (NATIVE && Number(revenue) > 0) {
          var data = {
            type: EventChannel.ADJUST,
            name: first ? 'first-pull-purchase' : 'pull-purchase',
            value: first ? 't9am42' : '45qr0q',
            //adjust的event token，这个在adjust后台是不能修改的，event name是可以随便修改的
            eventParams: []
          };
          data.eventParams.push({
            name: 'revenue',
            value: revenue,
            type: currency
          });
          data.eventParams.push({
            name: 'orderId',
            value: (_crd && getUUID === void 0 ? (_reportPossibleCrUseOfgetUUID({
              error: Error()
            }), getUUID) : getUUID)(),
            type: ''
          });
          native.bridge.sendToNative(BridgeCode.IN_APP_EVENTS, JSON.stringify(data));
        }
      };
      /**
       * 发送应用内事件
       * @param eventType 
       * @param value 
       */


      _export("sendAppsflyerEvents", sendAppsflyerEvents = (name, value) => {
        if (NATIVE) {
          var data = {
            type: EventChannel.APPS_FLYER,
            name: name,
            value: value
          };
          native.bridge.sendToNative(BridgeCode.IN_APP_EVENTS, JSON.stringify(data));
        }
      });

      _export("sendFacebookEvents", sendFacebookEvents = (name, value) => {
        if (NATIVE) {
          var data = {
            type: EventChannel.FACEBOOK,
            name: name,
            value: value
          };
          native.bridge.sendToNative(BridgeCode.IN_APP_EVENTS, JSON.stringify(data));
        }
      });
      /**
       * 获得设备唯一id
       */


      _export("getDeviceUniqueId", getDeviceUniqueId = () => {
        if (NATIVE) {
          native.bridge.sendToNative(BridgeCode.UNIQUE_ID, '');
        }
      });
      /**
       * 获得设备唯一id
       */


      _export("getAppVersionName", getAppVersionName = () => {
        if (NATIVE) {
          native.bridge.sendToNative(BridgeCode.APP_VERSION, '');
        }
      });

      _export("getPackageName", getPackageName = () => {
        if (NATIVE) {
          return native.reflection.callStaticMethod("com.cocos.game.AppActivity", 'getPackageCode', '()Ljava/lang/String;');
        }

        return 'web';
      });
      /**获得firebase通知令牌 */


      _export("getFirebaseToken", getFirebaseToken = () => {
        if (NATIVE) {
          return native.reflection.callStaticMethod("com.cocos.game.AppActivity", 'getFirebaseToken', '()Ljava/lang/String;');
        }

        return '';
      });

      _export("nativeDownloadApk", nativeDownloadApk = (url, titleStr, contentStr) => {
        if (NATIVE) {
          native.reflection.callStaticMethod("com.cocos.game.AppActivity", 'downloadApk', '(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;', url, titleStr, contentStr);
        }
      });

      _export("installApk", installApk = apkPath => {
        if (NATIVE) {
          native.reflection.callStaticMethod("com.cocos.game.AppActivity", 'installApk', '(Ljava/lang/String;)V', apkPath);
        }
      });

      _export("getRedirectUrl", getRedirectUrl = apkUrl => {
        if (NATIVE) {
          return native.reflection.callStaticMethod("com.cocos.game.AppActivity", 'getRedirectUrl', '(Ljava/lang/String;)Ljava/lang/String;', apkUrl);
        }
      });

      _export("hideNativeSplash", hideNativeSplash = () => {
        if (NATIVE) {
          native.reflection.callStaticMethod("com.cocos.game.AppActivity", 'hideSplash', '()V');
        }
      });

      _export("callAndroid", callAndroid = (type, eventToken) => {
        if (NATIVE) {
          return;
        }

        if (typeof Android !== 'undefined' && Android !== null) {
          Android.adjustEvent(type, eventToken); // document.getElementById("ddd").innerHTML = '执行成功，类型：' + type;

          console.log('执行成功，类型：' + type);
        } else {
          // document.getElementById("ddd").innerHTML = "Android界面不可用";
          console.log('Android界面不可用');
        }
      });
      /**
       * facebook Web事件发送
       * @param type 
       * @param values 
       * @returns 
       */


      _export("facebookWebEveht", facebookWebEveht = function facebookWebEveht(type) {
        if (NATIVE) {
          return;
        }

        if (typeof fbq !== 'undefined' && fbq !== null) {
          if (type === WebEventType.REGISTER) {
            fbq('track', 'CompleteRegistration');
          } else if (type === WebEventType.LOGIN) {
            fbq('track', 'Login');
          } else if (type === WebEventType.FIRST_PURCHASE) {
            fbq('track', 'Purchase', {
              currency: arguments.length <= 2 ? undefined : arguments[2],
              value: arguments.length <= 1 ? undefined : arguments[1]
            });
          } else if (type === WebEventType.PURCHASE) {
            fbq('track', 'Purchase_success', {
              currency: arguments.length <= 2 ? undefined : arguments[2],
              value: arguments.length <= 1 ? undefined : arguments[1]
            });
          } else if (type === WebEventType.FIRST_PULL_PURCHASE) {
            fbq('track', 'InitiateCheckout', {
              currency: arguments.length <= 2 ? undefined : arguments[2],
              value: arguments.length <= 1 ? undefined : arguments[1]
            });
          } else if (type === WebEventType.PULL_PURCHASE) {
            fbq('track', 'InitiateCheckout_success', {
              currency: arguments.length <= 2 ? undefined : arguments[2],
              value: arguments.length <= 1 ? undefined : arguments[1]
            });
          } // document.getElementById("ddd").innerHTML = '执行成功，类型：' + type;


          console.log('fbq 执行成功，类型：' + type);
        } else {
          // document.getElementById("ddd").innerHTML = "Android界面不可用";
          console.log('fbq facebook不可用');
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=989e8161968c31939c97c80db83b060bec39962e.js.map