System.register(["__unresolved_0", "cc", "fingerprintjs2", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, tween, Node, view, ToggleContainer, Vec3, assetManager, SpriteFrame, Texture2D, log, UITransform, Fingerprint2, circularDeepEqual, strictShallowEqual, createCopier, _crd, EffectType, bindClickEvent, getRootPosition, getUrlParams, getNodeByNameDeep, setByScreenScale, initToggle, setCookie, getCookie, maskBankCardNumber, getNodePositionInCanvas, loadRemoteImage, getGoldShorten, formatNumber, omitStr, arrowDisplay, generateUniqueId, getUUID, copy, deepCopy, equalValue, putChatShieldingUser, removeChatShieldingUser, isChatShieldingUser;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function hasDoubleByteChar(str) {
    var regex = /[\u0080-\uFFFF]/;
    return regex.test(str);
  }

  function _reportPossibleCrUseOfFingerprint(extras) {
    _reporterNs.report("Fingerprint2", "fingerprintjs2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcircularDeepEqual(extras) {
    _reporterNs.report("circularDeepEqual", "./fastEqual", _context.meta, extras);
  }

  function _reportPossibleCrUseOfstrictShallowEqual(extras) {
    _reporterNs.report("strictShallowEqual", "./fastEqual", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateCopier(extras) {
    _reporterNs.report("createCopier", "./fastCopy", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      tween = _cc.tween;
      Node = _cc.Node;
      view = _cc.view;
      ToggleContainer = _cc.ToggleContainer;
      Vec3 = _cc.Vec3;
      assetManager = _cc.assetManager;
      SpriteFrame = _cc.SpriteFrame;
      Texture2D = _cc.Texture2D;
      log = _cc.log;
      UITransform = _cc.UITransform;
    }, function (_fingerprintjs) {
      Fingerprint2 = _fingerprintjs.default;
    }, function (_unresolved_2) {
      circularDeepEqual = _unresolved_2.circularDeepEqual;
      strictShallowEqual = _unresolved_2.strictShallowEqual;
    }, function (_unresolved_3) {
      createCopier = _unresolved_3.createCopier;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "338b7/RUf1LUJmiaeBw10nf", "tool", undefined);

      __checkObsolete__(['tween', 'Node', 'math', 'NodeEventType', 'view', 'ToggleContainer', 'EventHandler', 'Vec3', 'assetManager', 'ImageAsset', 'SpriteFrame', 'Texture2D', 'sp', 'log', 'sys', 'native', 'ScrollView', 'UITransform', 'instantiate']);

      _export("EffectType", EffectType = /*#__PURE__*/function (EffectType) {
        EffectType["SCALE"] = "scale";
        return EffectType;
      }({}));

      _export("bindClickEvent", bindClickEvent = function bindClickEvent(node, effectType, handler) {
        if (effectType === void 0) {
          effectType = EffectType.SCALE;
        }

        node.on(Node.EventType.TOUCH_START, () => {
          tween(node).to(0.1, {
            position: new Vec3(node.getPosition().x, node.getPosition().y - 5)
          }).start();
        });
        node.on(Node.EventType.TOUCH_END, () => {
          tween(node).to(0.1, {
            position: new Vec3(node.getPosition().x, node.getPosition().y + 5)
          }).call(() => {
            handler && handler();
          }).start();
        });
      });

      _export("getRootPosition", getRootPosition = (node, totalX, totalY) => {
        if (node.parent.name === 'Canvas') {
          return new Vec3(totalX, totalY, 0);
        } else {
          var _x = node.position.x + node.parent.position.x;

          var _y = node.position.y + node.parent.position.y;

          return getRootPosition(node.parent, _x, _y);
        }
      });

      _export("getUrlParams", getUrlParams = name => {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substring(1).match(reg);

        if (r != null) {
          return unescape(r[2]);
        }

        return null;
      });
      /**深度搜寻第一个符合名称的节点 */


      _export("getNodeByNameDeep", getNodeByNameDeep = (nodeName, parentNode) => {
        if (parentNode.name === nodeName) {
          return parentNode;
        } else {
          var l = parentNode.children.length;

          for (var i = 0; i < l; i++) {
            if (parentNode.children[i].name === nodeName) {
              return parentNode.children[i];
            } else {
              // if (parentNode.children[i].children.length) {
              //   result = getNodeByNameDeep(nodeName, parentNode.children[i])
              // }
              var res = getNodeByNameDeep(nodeName, parentNode.children[i]);

              if (res) {
                return res;
              }
            }
          }
        }
      });

      _export("setByScreenScale", setByScreenScale = target => {
        //原配比
        var resSize = view.getDesignResolutionSize();
        var resRatio = resSize.width / resSize.height;
        var curSize = view.getFrameSize().width / view.getFrameSize().height;
        var result = resRatio / curSize; // target.setScale(result, result)

        target && target.setScale(0.5, 0.5);
        return result;
      });

      _export("initToggle", initToggle = (target, thisNode, eventHandler, CompStr, handerStr) => {
        var subContainer = target.getComponent(ToggleContainer); // const containerEventHandler = eventHandler;

        eventHandler.target = thisNode;
        eventHandler.component = CompStr;
        eventHandler.handler = handerStr;
        subContainer.checkEvents.push(eventHandler);
        return subContainer;
      });

      _export("setCookie", setCookie = (name, value, expirationDays) => {
        var expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + expirationDays);
        var cookieValue = encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString();
        document.cookie = name + '=' + cookieValue + '; path=/';
      });

      _export("getCookie", getCookie = name => {
        var cookieStr = document.cookie;
        var cookies = cookieStr.split('; ');

        for (var cookie of cookies) {
          var [cookieName, cookieValue] = cookie.split('=');

          if (decodeURIComponent(cookieName) === name) {
            return decodeURIComponent(cookieValue);
          }
        }

        return null; // 如果找不到指定名称的cookie，返回null
      });
      /**
       * 对一串数字进行脱敏
       * @param cardNumber 输入的数字
       * @param visibleDigits 可见的数字位数，可以根据需要调整
       * @param isExposeLength 是否要暴露字符串长度，true：脱敏多少位，显示多少位*，false：默认显示4个*
       * @returns 
       */


      _export("maskBankCardNumber", maskBankCardNumber = function maskBankCardNumber(cardNumber, visibleDigits, isExposeLength) {
        if (visibleDigits === void 0) {
          visibleDigits = 4;
        }

        if (isExposeLength === void 0) {
          isExposeLength = false;
        }

        if (cardNumber.length <= visibleDigits * 2) {
          return cardNumber;
        }

        var maskedChar = '*'; // 去除非数字字符

        var trimmedNumber = cardNumber.replace(/\D/g, ''); // 获取前几位和后几位

        var firstVisiblePart = trimmedNumber.slice(0, visibleDigits);
        var lastVisiblePart = trimmedNumber.slice(-visibleDigits); // 获取需要隐藏的中间部分的长度

        var maskedPartLength = trimmedNumber.length - visibleDigits * 2; // 生成脱敏后的银行卡号

        var maskedPart = maskedChar.repeat(maskedPartLength);
        var maskedCardNumber = "" + firstVisiblePart + (isExposeLength ? maskedPart : "****") + lastVisiblePart;
        return maskedCardNumber;
      });
      /**获取以canvas画布为基准的坐标 */


      _export("getNodePositionInCanvas", getNodePositionInCanvas = function getNodePositionInCanvas(node, x, y) {
        if (x === void 0) {
          x = 0;
        }

        if (y === void 0) {
          y = 0;
        }

        var t_x = node.position.x + x;
        var t_y = node.position.y + y;

        if (node.parent.name !== "Canvas") {
          return getNodePositionInCanvas(node.parent, t_x, t_y);
        } else {
          return new Vec3(t_x, t_y, 1);
        }
      });
      /**
       * 加载远程图片
       * @param url 图片远程地址
       * @returns 
       */


      _export("loadRemoteImage", loadRemoteImage = url => {
        return new Promise((resolve, reject) => {
          assetManager.loadRemote(url, (err, data) => {
            if (err) {
              log("加载远程图片资源失败", url);
              reject(err);
            } else {
              var spriteFrame = new SpriteFrame();
              var texture = new Texture2D();
              texture.image = data;
              spriteFrame.texture = texture;
              return resolve(spriteFrame);
            }
          });
        });
      });
      /**
       * 获得缩短的金币，展示用
       * @param gold 
       * @returns 
       */


      _export("getGoldShorten", getGoldShorten = gold => {
        return gold.formatAmountWithLetter();
      });
      /**格式化数字 */


      _export("formatNumber", formatNumber = gold => {
        if (!gold) return "0";
        return gold.formatAmountWithCommas();
      });
      /**
       * 省略字符（双字节算2位）
       * @param value 要省略的字符串
       * @param length 超过多少位就加省略符号
       * @returns 
       */


      _export("omitStr", omitStr = (value, length) => {
        var singleByteLength = 0;
        var count = 0;

        for (var i = 0; i < value.length; i++) {
          if (hasDoubleByteChar(value.charAt(i))) {
            singleByteLength += 2;
          } else {
            singleByteLength++;
          }
        }

        var newValue = "";

        for (var _i = 0; _i < value.length; _i++) {
          newValue += value.charAt(_i);

          if (hasDoubleByteChar(value.charAt(_i))) {
            count += 2;
          } else {
            count++;
          }

          if (count >= length) {
            break;
          }
        }

        return singleByteLength > length ? newValue + "···" : newValue;
      });

      _export("arrowDisplay", arrowDisplay = function arrowDisplay(scrollView, left, right, diff, setEvent) {
        if (setEvent === void 0) {
          setEvent = false;
        }

        var scrollViewWidth = scrollView.getComponent(UITransform).width;
        var contentWidth = scrollView.content.getComponent(UITransform).width;
        var scrollDistance = scrollView.content.position.x;
        right.active = false;
        left.active = false;

        if (scrollDistance === 0) {
          left.active = false;
          right.active = true;
        } else if (scrollDistance < 0) {
          left.active = true;
          right.active = true;

          if (Math.abs(contentWidth - (scrollViewWidth + Math.abs(scrollDistance))) < diff) {
            left.active = true;
            right.active = false;
          }
        }

        if (contentWidth < scrollViewWidth && right) {
          right.active = false;
        }
      });

      _export("generateUniqueId", generateUniqueId = () => {
        return new Promise((reslove, reject) => {
          var options = {
            excludes: {
              touchSupport: true
            }
          };
          (_crd && Fingerprint2 === void 0 ? (_reportPossibleCrUseOfFingerprint({
            error: Error()
          }), Fingerprint2) : Fingerprint2).getV18(options, result => {
            reslove("web-" + result);
          }); // Fingerprint2.get(function (result) {
          //   reslove(result)
          // })
        });
      });

      _export("getUUID", getUUID = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = Math.random() * 16 | 0;
          var v = c === 'x' ? r : r & 0x3 | 0x8;
          return v.toString(16);
        });
      });

      _export("copy", copy = target => {
        if (!target) return target;

        if (Object.prototype.toString.call(target) === '[object Object]') {
          var copyShallow = (_crd && createCopier === void 0 ? (_reportPossibleCrUseOfcreateCopier({
            error: Error()
          }), createCopier) : createCopier)({
            array: _array => [..._array],
            object: _object => _extends({}, _object)
          });
          return copyShallow(target); // return instantiate(target)
        } else if (Object.prototype.toString.call(target) === '[object Array]') {
          return deepCopy(target);
        } else {
          return target;
        }
      });

      deepCopy = obj => {
        if (Array.isArray(obj)) {
          return obj.map(deepCopy);
        } else if (typeof obj === 'object' && obj !== null) {
          var newObj = {};

          for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
              newObj[key] = deepCopy(obj[key]);
            }
          }

          return newObj;
        } else {
          return obj;
        }
      };

      _export("equalValue", equalValue = function equalValue(target1, target2, isDeep) {
        if (isDeep === void 0) {
          isDeep = false;
        }

        var type1 = Object.prototype.toString.call(target1);
        var type2 = Object.prototype.toString.call(target2);
        if (type1 !== type2) return false;

        if (type1 === '[object Object]') {
          // return fe.circularDeepEqual(target1, target2)
          return isDeep ? (_crd && circularDeepEqual === void 0 ? (_reportPossibleCrUseOfcircularDeepEqual({
            error: Error()
          }), circularDeepEqual) : circularDeepEqual)(target1, target2) : (_crd && strictShallowEqual === void 0 ? (_reportPossibleCrUseOfstrictShallowEqual({
            error: Error()
          }), strictShallowEqual) : strictShallowEqual)(target1, target2);
        } else if (type1 === '[object Array]') {
          if (target1.length !== target2.length) return false;
          return (_crd && circularDeepEqual === void 0 ? (_reportPossibleCrUseOfcircularDeepEqual({
            error: Error()
          }), circularDeepEqual) : circularDeepEqual)(target1, target2);
        } else {
          return target1 === target2;
        }
      });
      /**添加聊天限制用户 */


      _export("putChatShieldingUser", putChatShieldingUser = memberId => {
        var json = localStorage.getItem("chat_shielding_user");
        var values = JSON.parse(json);

        if (!values) {
          values = [];
        }

        var value = values.find(v => v === memberId);

        if (!value) {
          values.push(memberId);
          localStorage.setItem("chat_shielding_user", JSON.stringify(values));
        }
      });
      /**删除聊天限制用户 */


      _export("removeChatShieldingUser", removeChatShieldingUser = memberId => {
        var json = localStorage.getItem("chat_shielding_user");

        if (!json) {
          return;
        }

        var values = JSON.parse(json);
        values = values.filter(v => v !== memberId);
        localStorage.setItem("chat_shielding_user", JSON.stringify(values));
      });
      /**判断是否为聊天限制用户 */


      _export("isChatShieldingUser", isChatShieldingUser = memberId => {
        var json = localStorage.getItem("chat_shielding_user");

        if (!json) {
          return false;
        }

        var values = JSON.parse(json);
        var value = values.find(v => v === memberId);
        return value ? true : false;
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=39d4008bad081a07b5dcdd73ec11d55fe6f8f536.js.map