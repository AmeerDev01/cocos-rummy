System.register(["__unresolved_0", "cc", "__unresolved_1", "qrcode-generator", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EditBox, ImageAsset, instantiate, Label, native, Node, Prefab, Sprite, SpriteFrame, sys, Texture2D, tween, UIOpacity, UITransform, Vec3, BaseComponent, qrcode, BridgeCode, addToastAction, ToastType, fetcher, global, lang, sourceManageSeletor, ApiUrl, BaseViewModel, PrefabPathDefine, EffectType, copyToClipboard, _dec, _class, _crd, ccclass, property, Share_Info;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfqrcode(extras) {
    _reporterNs.report("qrcode", "qrcode-generator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBridgeCode(extras) {
    _reporterNs.report("BridgeCode", "../../../common/bridge", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToastType(extras) {
    _reporterNs.report("ToastType", "../../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOffetcher(extras) {
    _reporterNs.report("fetcher", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApiUrl(extras) {
    _reporterNs.report("ApiUrl", "../../apiUrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseViewModel(extras) {
    _reporterNs.report("BaseViewModel", "../../viewModel/BaseViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfshare_help(extras) {
    _reporterNs.report("share_help", "./Hall_PC_share_help", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHIState(extras) {
    _reporterNs.report("SHIState", "./Hall_PC_share_help", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHIprops(extras) {
    _reporterNs.report("SHIprops", "./Hall_PC_share_help", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHIEvent(extras) {
    _reporterNs.report("SHIEvent", "./Hall_PC_share_help", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcopyToClipboard(extras) {
    _reporterNs.report("copyToClipboard", "../../../utils/copyToClipboard", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      EditBox = _cc.EditBox;
      ImageAsset = _cc.ImageAsset;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      native = _cc.native;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      sys = _cc.sys;
      Texture2D = _cc.Texture2D;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_qrcodeGenerator) {
      qrcode = _qrcodeGenerator.default;
    }, function (_unresolved_3) {
      BridgeCode = _unresolved_3.BridgeCode;
    }, function (_unresolved_4) {
      addToastAction = _unresolved_4.addToastAction;
      ToastType = _unresolved_4.ToastType;
    }, function (_unresolved_5) {
      fetcher = _unresolved_5.fetcher;
      global = _unresolved_5.global;
      lang = _unresolved_5.lang;
      sourceManageSeletor = _unresolved_5.sourceManageSeletor;
    }, function (_unresolved_6) {
      ApiUrl = _unresolved_6.ApiUrl;
    }, function (_unresolved_7) {
      BaseViewModel = _unresolved_7.default;
    }, function (_unresolved_8) {
      PrefabPathDefine = _unresolved_8.PrefabPathDefine;
    }, function (_unresolved_9) {
      EffectType = _unresolved_9.EffectType;
    }, function (_unresolved_10) {
      copyToClipboard = _unresolved_10.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4dee4TRGatIOamYzBo8EmKU", "Hall_PC_Share_Info", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EditBox', 'ImageAsset', 'instantiate', 'Label', 'native', 'Node', 'Prefab', 'Sprite', 'SpriteFrame', 'sys', 'systemEvent', 'Texture2D', 'tween', 'UIOpacity', 'UITransform', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Share_Info", Share_Info = (_dec = ccclass('Share_Info'), _dec(_class = class Share_Info extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.isZoomed = void 0;
          this.zoomScale = 3;
          // 放大的倍数
          this.fadeDuration = 0.3;
          // 背景渐变时间，单位为秒
          this.shareLink = '';
          this.propertyNode = {
            props_spr_QR_code: new Node(),
            props_background: new Node(),
            props_btn_fenxiang: new Node(),
            props_Label_num1: new Label(),
            props_Label_totalTaruhan: new Label(),
            props_Label_kode: new Label(),
            props_btn_share_copy: new Node(),
            props_Label_num2: new Label(),
            props_Label_num3: new Label(),
            props_Label_num4: new Label(),
            props_Label_num5: new Label(),
            props_Label_num6: new Label(),
            props_label_link: new Label(),
            props_btn_draw: new Node(),
            props_btn_share_mengi: new Node(),
            props_EditBox_shareName: new Node(),
            props_spr_title: new Node()
          };
          this.props = {
            isShow: true,
            forceRefresh: false
          };
          this.events = {
            openShareSure: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_spr_title.on(Node.EventType.TOUCH_END, () => {
            (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine)._SHARE_SHARE_HELP, Prefab).then(file => {
              let help = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
                error: Error()
              }), BaseViewModel) : BaseViewModel)("share_help").mountView(file.source).appendTo(this.node.parent, {
                effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                  error: Error()
                }), EffectType) : EffectType).EFFECT1,
                isModal: true
              }).setProps({
                isShow: true
              }).setEvent({
                onClosePanel: () => {
                  help.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                    error: Error()
                  }), EffectType) : EffectType).EFFECT2);
                }
              });
            });
          });
          this.propertyNode.props_btn_share_mengi.on(Node.EventType.TOUCH_END, () => {
            //绑定会员
            const actingId = this.propertyNode.props_EditBox_shareName.getComponent(EditBox).string.trim();

            if (actingId.length > 0) {
              this.events.openShareSure(actingId);
            }
          });
          this.propertyNode.props_btn_draw.on(Node.EventType.TOUCH_END, () => {
            // 体现
            this.ekstrakHandle();
          });
          this.propertyNode.props_btn_share_copy.on(Node.EventType.TOUCH_END, () => {
            // 复制自己编码
            this.copiedToClipboard(this.propertyNode.props_Label_kode.string);
          });
          this.propertyNode.props_btn_fenxiang.on(Node.EventType.TOUCH_END, () => {
            // 复制
            this.copiedToClipboard(this.shareLink);
          });
          this.propertyNode.props_background.on(Node.EventType.TOUCH_END, () => {
            // 关闭二维码
            tween(this.propertyNode.props_background.getComponent(UITransform)).to(this.fadeDuration, {
              height: 0
            }).start();
            this.node.getChildByName('copy_QR_code').destroy();
          });
          this.propertyNode.props_spr_QR_code.on(Node.EventType.TOUCH_END, () => {
            // 打开二维码
            let node = instantiate(this.propertyNode.props_spr_QR_code);
            node.name = 'copy_QR_code'; // node.setScale(new Vec3(0, 0, 1))

            node.setPosition(new Vec3(134, 160, 1));
            node.getComponent(UIOpacity).opacity = 255;
            this.createQRCode(this.shareLink, 320, res => {
              node.getComponent(Sprite).spriteFrame = res;
            });
            node.getComponent(UITransform).height = 0;
            tween(node.getComponent(UITransform)).to(0.2, {
              height: 320
            }, {
              easing: 'sineOut'
            }).start();
            this.node.addChild(node);
            tween(this.propertyNode.props_background.getComponent(UITransform)).to(this.fadeDuration, {
              height: 556
            }).start();
          });
          this.renderData();
        }

        useProps(key, value) {
          if (key === 'isShow') {
            if (!value.cur) {
              var _this$node$getChildBy;

              this.propertyNode.props_background.getComponent(UITransform).height = 0;
              (_this$node$getChildBy = this.node.getChildByName('copy_QR_code')) == null ? void 0 : _this$node$getChildBy.destroy();
            }

            this.node.active = value.cur;
          }

          if (key === 'forceRefresh') {
            value.cur && this.renderData();
          }
        }

        copiedToClipboard(text) {
          //统一复制
          if (sys.isNative) {
            if (sys.os === sys.OS.ANDROID) {
              native.bridge.sendToNative((_crd && BridgeCode === void 0 ? (_reportPossibleCrUseOfBridgeCode({
                error: Error()
              }), BridgeCode) : BridgeCode).COPY_CLIPBOARD, text);
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.MainPaneModule.ShareCopy, {}, {
                  placeStr: "已复制内容到剪切板"
                })
              }));
            }
          } else {
            (_crd && copyToClipboard === void 0 ? (_reportPossibleCrUseOfcopyToClipboard({
              error: Error()
            }), copyToClipboard) : copyToClipboard)(text);
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
              error: Error()
            }), addToastAction) : addToastAction)({
              content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.MainPaneModule.ShareCopy, {}, {
                placeStr: "已复制内容到剪切板"
              })
            })); // navigator.clipboard.writeText(text).then(() => {
            //     global.hallDispatch(addToastAction({ content: lang.write(k => k.MainPaneModule.ShareCopy, {}, { placeStr: "已复制内容到剪切板" }) }))
            // }).catch((err) => {
            //     console.error('share copy fail', err)
            // });
          }
        }

        renderData() {
          (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
            error: Error()
          }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
            error: Error()
          }), ApiUrl) : ApiUrl).RECOMMEND_DATA, {}, "get").then(rsp => {
            if (rsp.promotionMemberCode && rsp.promotionMemberCode !== '') {
              this.propertyNode.props_EditBox_shareName.getComponent(EditBox).string = rsp.promotionMemberCode;
              this.propertyNode.props_EditBox_shareName.getComponent(EditBox).enabled = false;
              this.propertyNode.props_btn_share_mengi.active = false;
            } else {
              this.propertyNode.props_EditBox_shareName.getComponent(EditBox).enabled = true;
              this.propertyNode.props_btn_share_mengi.active = true;
            }

            this.propertyNode.props_Label_totalTaruhan.string = rsp.totalPromotionMemberBet.formatAmountWithCommas();
            this.propertyNode.props_Label_kode.string = rsp.promotionCode;
            this.propertyNode.props_Label_num1.string = rsp.totalPromotionMemberCount;
            this.propertyNode.props_Label_num2.string = rsp.totalPromotionRewardsSum.formatAmountWithCommas();
            this.propertyNode.props_Label_num3.string = rsp.promotionRewardsSum.formatAmountWithCommas();
            this.propertyNode.props_label_link.string = rsp.shareLink;
            this.propertyNode.props_btn_draw.getComponent(Sprite).grayscale = rsp.promotionRewardsSum <= 0;
            this.shareLink = rsp.shareLink;
            this.createQRCode(this.shareLink, 80, res => {
              this.propertyNode.props_spr_QR_code.getComponent(Sprite).spriteFrame = res;
            });
          });
          (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
            error: Error()
          }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
            error: Error()
          }), ApiUrl) : ApiUrl).RECOMMENDDATATOTODAY, {}, "get").then(rsp => {
            this.propertyNode.props_Label_num4.string = rsp.todayTotalPromotionMemberCount.formatAmountWithCommas();
            this.propertyNode.props_Label_num5.string = rsp.todayPromotionMemberBet.formatAmountWithCommas();
            this.propertyNode.props_Label_num6.string = rsp.todayPromotionRewardsSum.formatAmountWithCommas();
          });
        }

        createQRCode(text, sz, callback) {
          let qr = (_crd && qrcode === void 0 ? (_reportPossibleCrUseOfqrcode({
            error: Error()
          }), qrcode) : qrcode)(4, 'L');
          qr.addData(text);
          qr.make();
          let canvas = document.createElement('canvas');
          let ctx = canvas.getContext('2d');
          let size = sz;
          canvas.width = size;
          canvas.height = size;
          ctx.fillStyle = "white";
          ctx.fillRect(0, 0, size, size); // 根据二维码模块计算每个点的大小

          let tileW = size / qr.getModuleCount();
          let tileH = size / qr.getModuleCount(); // 绘制二维码

          for (let row = 0; row < qr.getModuleCount(); row++) {
            for (let col = 0; col < qr.getModuleCount(); col++) {
              ctx.fillStyle = qr.isDark(row, col) ? "black" : "white";
              ctx.fillRect(Math.round(col * tileW), Math.round(row * tileH), tileW, tileH);
            }
          } // 将 Canvas 转换为 ImageAsset


          let imageAsset = new ImageAsset(canvas); // 创建 Texture2D

          let texture = new Texture2D();
          texture.image = imageAsset; // 应用到 Sprite

          let spriteFrame = new SpriteFrame();
          spriteFrame.texture = texture;
          callback(spriteFrame);
        }
        /**提取分享奖励 */


        ekstrakHandle() {
          if (parseFloat(this.propertyNode.props_Label_num3.string.replace(/,/g, "")) > 0) {
            (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
              error: Error()
            }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
              error: Error()
            }), ApiUrl) : ApiUrl).DRAW_WATER, {
              type: 0
            }).then(() => {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.BaseBoardModule.operateDone, {}, {
                  placeStr: "操作完成"
                }),
                type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                  error: Error()
                }), ToastType) : ToastType).SUCCESS
              }));
              this.renderData();
            }).catch(e => {});
          }
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=09451c383a6943120521e38f80d3d28baa3237c9.js.map