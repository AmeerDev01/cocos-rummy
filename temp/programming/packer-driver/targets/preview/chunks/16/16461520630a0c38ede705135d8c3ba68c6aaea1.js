System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EditBox, Label, Node, ProgressBar, native, Sprite, SpriteFrame, Toggle, tween, UITransform, sys, Button, Prefab, NATIVE, BaseComponent, initToggle, bundleCommon, fetcher, hallAudio, sourceManageSeletor, ToastPosition, ToastType, addToastAction, copyToClipboard, PrefabPathDefine, EffectType, UseSetOption, SoundPathDefine, BaseViewModel, config, deviceInfo, levelMap, vipMap, BridgeCode, ApiUrl, lang, GameConfig, InputValidator, _dec, _class, _crd, ccclass, property, Hall_PcMainPanel;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitToggle(extras) {
    _reporterNs.report("initToggle", "../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInitStateType(extras) {
    _reporterNs.report("InitStateType", "../store/actions/memberInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbundleCommon(extras) {
    _reporterNs.report("bundleCommon", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOffetcher(extras) {
    _reporterNs.report("fetcher", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhallAudio(extras) {
    _reporterNs.report("hallAudio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToastPosition(extras) {
    _reporterNs.report("ToastPosition", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToastType(extras) {
    _reporterNs.report("ToastType", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcopyToClipboard(extras) {
    _reporterNs.report("copyToClipboard", "../../utils/copyToClipboard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_ChangeNickName(extras) {
    _reporterNs.report("Hall_ChangeNickName", "./Hall_ChangeNickName", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCNIState(extras) {
    _reporterNs.report("CNIState", "./Hall_ChangeNickName", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCNIprops(extras) {
    _reporterNs.report("CNIprops", "./Hall_ChangeNickName", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCNIEvent(extras) {
    _reporterNs.report("CNIEvent", "./Hall_ChangeNickName", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShare_Info(extras) {
    _reporterNs.report("Share_Info", "./Hall_PC_SubComp/Hall_PC_Share_Info", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHIState(extras) {
    _reporterNs.report("SHIState", "./Hall_PC_SubComp/Hall_PC_Share_Info", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHIprops(extras) {
    _reporterNs.report("SHIprops", "./Hall_PC_SubComp/Hall_PC_Share_Info", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHIEvent(extras) {
    _reporterNs.report("SHIEvent", "./Hall_PC_SubComp/Hall_PC_Share_Info", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_PC_Share_member(extras) {
    _reporterNs.report("Hall_PC_Share_member", "./Hall_PC_SubComp/Hall_PC_Share_member", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMBIState(extras) {
    _reporterNs.report("MBIState", "./Hall_PC_SubComp/Hall_PC_Share_member", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMBIprops(extras) {
    _reporterNs.report("MBIprops", "./Hall_PC_SubComp/Hall_PC_Share_member", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMBIEvent(extras) {
    _reporterNs.report("MBIEvent", "./Hall_PC_SubComp/Hall_PC_Share_member", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUseSetOption(extras) {
    _reporterNs.report("UseSetOption", "../../utils/UseSetOption", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseViewModel(extras) {
    _reporterNs.report("BaseViewModel", "../../common/viewModel/BaseViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdeviceInfo(extras) {
    _reporterNs.report("deviceInfo", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOflevelMap(extras) {
    _reporterNs.report("levelMap", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfvipMap(extras) {
    _reporterNs.report("vipMap", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBridgeCode(extras) {
    _reporterNs.report("BridgeCode", "../../common/bridge", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApiUrl(extras) {
    _reporterNs.report("ApiUrl", "../apiUrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameConfig(extras) {
    _reporterNs.report("GameConfig", "../../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInputValidator(extras) {
    _reporterNs.report("InputValidator", "../../utils/InputValidator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_PC_BackWater(extras) {
    _reporterNs.report("Hall_PC_BackWater", "./Hall_PC_SubComp/Hall_PC_BackWater", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPBIState(extras) {
    _reporterNs.report("PBIState", "./Hall_PC_SubComp/Hall_PC_BackWater", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPBIprops(extras) {
    _reporterNs.report("PBIprops", "./Hall_PC_SubComp/Hall_PC_BackWater", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPBIEvent(extras) {
    _reporterNs.report("PBIEvent", "./Hall_PC_SubComp/Hall_PC_BackWater", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
      native = _cc.native;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Toggle = _cc.Toggle;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      sys = _cc.sys;
      Button = _cc.Button;
      Prefab = _cc.Prefab;
    }, function (_ccEnv) {
      NATIVE = _ccEnv.NATIVE;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      initToggle = _unresolved_3.initToggle;
    }, function (_unresolved_4) {
      bundleCommon = _unresolved_4.bundleCommon;
      fetcher = _unresolved_4.fetcher;
      hallAudio = _unresolved_4.hallAudio;
      sourceManageSeletor = _unresolved_4.sourceManageSeletor;
    }, function (_unresolved_5) {
      ToastPosition = _unresolved_5.ToastPosition;
      ToastType = _unresolved_5.ToastType;
      addToastAction = _unresolved_5.addToastAction;
    }, function (_unresolved_6) {
      copyToClipboard = _unresolved_6.default;
    }, function (_unresolved_7) {
      PrefabPathDefine = _unresolved_7.PrefabPathDefine;
    }, function (_unresolved_8) {
      EffectType = _unresolved_8.EffectType;
    }, function (_unresolved_9) {
      UseSetOption = _unresolved_9.default;
    }, function (_unresolved_10) {
      SoundPathDefine = _unresolved_10.SoundPathDefine;
    }, function (_unresolved_11) {
      BaseViewModel = _unresolved_11.default;
    }, function (_unresolved_12) {
      config = _unresolved_12.config;
      deviceInfo = _unresolved_12.deviceInfo;
      levelMap = _unresolved_12.levelMap;
      vipMap = _unresolved_12.vipMap;
    }, function (_unresolved_13) {
      BridgeCode = _unresolved_13.BridgeCode;
    }, function (_unresolved_14) {
      ApiUrl = _unresolved_14.ApiUrl;
    }, function (_unresolved_15) {
      lang = _unresolved_15.lang;
    }, function (_unresolved_16) {
      GameConfig = _unresolved_16.GameConfig;
    }, function (_unresolved_17) {
      InputValidator = _unresolved_17.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b508b9r6BRGxrlCV94Jlow+", "Hall_PcMainPanel", undefined);

      __checkObsolete__(['_decorator', 'loader', 'EditBox', 'Label', 'Node', 'ProgressBar', 'native', 'Sprite', 'SpriteFrame', 'Toggle', 'ToggleContainer', 'tween', 'UITransform', 'sys', 'WebView', 'Button', 'log', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_PcMainPanel", Hall_PcMainPanel = (_dec = ccclass('Hall_PcMainPanel'), _dec(_class = class Hall_PcMainPanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.share_InfoModel = void 0;
          this.share_MemberModel = void 0;
          this.shareShow = false;
          this.propertyNode = {
            props_btn_perfabs_close: new Node(),

            /**sidebar */
            props_ToggleGroup_perfabs: new Node(),

            /**二级折叠菜单 */
            props_Mask_perfabs_left: new Node(),

            /**二级菜单切换包裹 */
            props_ToggleGroup_profil: new Node(),

            /**二级分享菜单切换包裹 */
            props_ToggleGroup_Share: new Node(),

            /**informasi */
            props_layout_informasi: new Node(),

            /**setting */
            props_layout_setting: new Node(),

            /**头像框 */
            props_Layout_change_head: new Node(),

            /**头像切换按钮 */
            props_btn_head_choose: new Node(),

            /**头像图片 */
            props_spr_head: new Node(),

            /**用户登录名 */
            props_login_name: new Label(),

            /**头像选择滑动框 */
            props_ScrollView_changeHead: new Node(),

            /**头像底框 */
            props_ToggleGroup_head: new Node(),

            /**会员ID */
            props_member_id: new Node(),

            /**性别 */
            props_spr_sex: new Node(),

            /**s输入nickname */
            props_EditBox_name: new Node(),

            /**展示nickname */
            props_nick_name: new Node(),

            /**切换编辑模式 */
            props_btn_change: new Node(),

            /**金币 */
            props_Label_glod: new Node(),

            /**打开shop */
            props_btn_add_shop: new Node(),

            /**头像取消 */
            props_btn_change_batal: new Node(),

            /**头像确认 */
            props_btn_change_tentu: new Node(),

            /**level */
            props_ProgressBar_level_pro: new Node(),

            /**level数字 */
            props_label_informasi_level: new Label(),

            /**level百分比 */
            props_label_level_pro: new Node(),

            /**vip等级 */
            props_ProgressBar_vip_pro: new Node(),

            /**vip文字说明 */
            props_label_vip_pro: new Node(),

            /**vip图片 */
            props_word_informasi_vip: new Node(),

            /**绑定手机按钮 */
            props_btn_set_bindPhone: new Node(),

            /**修改密码按钮 */
            props_btn_set_ubasKataSandi: new Node(),

            /**退出登录触发按钮 */
            props_btn_set_switchAccount: new Node(),

            /**退出确认框 */
            props_spr_outgame_comfirm: new Node(),

            /**取消退出按钮 */
            props_btn_set_batal: new Node(),

            /**确认登出按钮 */
            props_btn_tentu: new Node(),

            /**复制 */
            props_btn_copy: new Node(),

            /**音乐开关 */
            props_Toggle_set_music: new Node(),

            /**音效开关 */
            props_Toggle_set_sound: new Node(),

            /**振动开关 */
            props_Toggle_set_vibration: new Node(),

            /**右边头像 */
            props_Layout_right: new Node(),
            //===============分享相关节点==========================================

            /**分享面板 */
            // props_layout_share: new Node(),

            /**打开确认上级代理id窗口按钮 */
            // props_btn_share_mengi: new Node(),
            // /**提取分享奖励窗口 */
            // props_btn_share_ekstrak: new Node(),

            /**分享按钮 */
            // props_btn_share_jumlah: new Node(),

            /**上级代理昵称 */
            // props_parent_shareName: new Label(),

            /**上级代理输入框 */
            // props_EditBox_shareName: new Node(),

            /**打开帮助按钮 */
            // props_btn_share_help: new Node(),

            /**复制分享码按钮 */
            // props_btn_share_copy: new Node(),

            /**自己的推荐码 */
            // props_Label_kode: new Label(),

            /**自己待提取的推荐奖励 */
            // props_Label_hadiah: new Label(),

            /**自己的推荐总奖励 */
            // props_label_number: new Label(),
            props_Mask_share: new Node(),
            //==================背包===========================================
            props_layout_bag: new Node(),

            /**版本号 */
            props_pc_version: new Label(),

            /**返水界面 */
            // props_layout_water: new Node(),
            // /**可提返水 */
            // props_label_water_pro: new Label(),//
            // /**有效下注 */
            // props_label_sisa: new Label(),
            // /**返水比例 */
            // props_label_skalaSaat: new Label(),
            // /**洗码数 */
            // props_label_jumlah: new Label(),
            // /**返水的vip级别 */
            // props_water_spr_vip: new Sprite(),
            // /**确认抽取返水 */
            // props_water_cuci: new Button(),

            /**兑换确认按钮 */
            props_btn_sure: new Button(),

            /**兑换码 */
            props_EditBox_conver: new EditBox(),
            // /**返水置灰覆盖节点 */
            // props_spr_word_cuci: new Node(),
            // /**返水最小值说明 */
            // props_Label_lorem: new Label(),

            /**等级说明问号按钮 */
            props_btn_level_help: new Button(),

            /**等级说明node */
            props_img_level_hlep: new Node(),

            /**VIP说明问号按钮 */
            props_btn_vip_help: new Button(),

            /**VIP说明node */
            props_img_vip_hlep: new Node(),
            // /**返水说明 */
            // props_btn_ratio_help: new Button(),

            /**设备唯一号 */
            props_pc_uniqueId: new Label()
          };
          //已经选择的头像序号
          this.hasChooseAvatarIndex = 0;
          this.lastShowPanel = 0;
          // 待提取的返佣金额
          this.promotionRewardsSum = 0;
          this.props = {
            memberInfo: null,
            isShowWebView: true,
            isLoadRecommendData: '',
            tourist: 1,
            profileShowIndex: 1
          };
          this.events = {
            onClosePanel: () => {},
            goToShop: () => {},
            memberInfoDone: (gender, nickName, avatarIndex) => {},
            bindPhone: () => {},
            openChangePwdPanel: () => {},
            logOutHandler: () => {},

            /**打开分享帮助 */
            openShareHelp: () => {},

            /**打开分享确认窗口 */
            openShareSure: (actingId, promotionCode) => {}
          };
        }

        start() {}

        initState() {
          return {
            profileShowIndex: 1,
            gender: 0,
            promotionCode: ''
          };
        }

        bindEvent() {
          //关闭
          this.propertyNode.props_btn_perfabs_close.on(Node.EventType.TOUCH_END, () => {
            this.events.onClosePanel();
          }); //展示头像选择框

          this.propertyNode.props_btn_head_choose.on(Node.EventType.TOUCH_END, () => {
            this.setState({
              profileShowIndex: 3
            });
          }); //打开商城

          this.propertyNode.props_btn_add_shop.on(Node.EventType.TOUCH_END, () => {
            this.events.goToShop();
          }); //确认头像

          this.propertyNode.props_btn_change_tentu.on(Node.EventType.TOUCH_END, () => {
            this.events.memberInfoDone(this.props.memberInfo.gender, this.props.memberInfo.nickName, this.hasChooseAvatarIndex);
          }); //取消选择头像

          this.propertyNode.props_btn_change_batal.on(Node.EventType.TOUCH_END, () => {
            // const index = this.propertyNode.props_ToggleGroup_profil.children[0].getComponent(Toggle).isChecked ? 0 : 1
            // this.propertyNode.props_ToggleGroup_profil.children[index].getComponent(Toggle).isChecked = true
            this.propertyNode.props_Layout_change_head.active = false;
            this.setState({
              profileShowIndex: this.lastShowPanel
            });
          }); //复制到剪切板

          this.propertyNode.props_btn_copy.on(Node.EventType.TOUCH_END, () => {
            this.copyTextToClipboard(this.props.memberInfo.memberId); // this.dispatch(addToastAction({ content: lang.write(k => k.HallModule.HallCopy, {}, { placeStr: "已复制内容到剪切板" }) }))
          }); //切换性别

          this.propertyNode.props_spr_sex.on(Node.EventType.TOUCH_END, () => {
            var sprittImg = this.propertyNode.props_spr_sex.getComponent(Sprite).spriteFrame.name === "icon_common_woman" ? "icon_common_man" : "icon_common_woman";
            (_crd && bundleCommon === void 0 ? (_reportPossibleCrUseOfbundleCommon({
              error: Error()
            }), bundleCommon) : bundleCommon).load("resource/" + sprittImg + "/spriteFrame", SpriteFrame, (err, sp) => {
              if (!err) {
                this.events.memberInfoDone(this.props.memberInfo.gender === 0 ? 1 : 0, this.props.memberInfo.nickName, this.props.memberInfo.avatarIndex, () => {
                  this.propertyNode.props_spr_sex.getComponent(Sprite).spriteFrame = sp;
                });
              }
            });
          }); //切换昵称编辑模式

          this.propertyNode.props_btn_change.on(Node.EventType.TOUCH_END, () => {
            // this.propertyNode.props_EditBox_name.active = !this.propertyNode.props_EditBox_name.active
            // this.propertyNode.props_nick_name.active = !this.propertyNode.props_nick_name.active
            this.openEditNickName();
          });
          this.propertyNode.props_nick_name.on(Node.EventType.TOUCH_END, () => {
            this.openEditNickName();
          }); //失去焦点编辑昵称
          // this.propertyNode.props_EditBox_name.getComponent(EditBox).node.on('editing-did-ended', (editbox: EditBox) => {
          // 	if (!editbox.string) {
          // 		this.propertyNode.props_btn_change.emit(Node.EventType.TOUCH_END)
          // 	} else {
          // 		this.events.memberInfoDone(this.props.memberInfo.gender, editbox.string, this.props.memberInfo.avatarIndex)
          // 	}
          // }, this);

          this.propertyNode.props_btn_set_bindPhone.on(Node.EventType.TOUCH_END, () => {
            if (this.props.tourist !== 0) {
              this.events.bindPhone();
            }
          });
          /**打开升级框 */

          this.propertyNode.props_btn_set_ubasKataSandi.on(Node.EventType.TOUCH_END, () => {
            this.events.openChangePwdPanel();
          });
          this.propertyNode.props_btn_set_switchAccount.on(Node.EventType.TOUCH_END, () => {
            this.propertyNode.props_spr_outgame_comfirm.active = true;
          });
          this.propertyNode.props_btn_set_batal.on(Node.EventType.TOUCH_END, () => {
            this.propertyNode.props_spr_outgame_comfirm.active = false;
          });
          this.propertyNode.props_btn_tentu.on(Node.EventType.TOUCH_END, () => {
            this.events.logOutHandler();
          });
          /**兑换按钮 */

          this.propertyNode.props_btn_sure.node.on(Node.EventType.TOUCH_END, () => {
            new (_crd && InputValidator === void 0 ? (_reportPossibleCrUseOfInputValidator({
              error: Error()
            }), InputValidator) : InputValidator)().begin(this.propertyNode.props_EditBox_conver.string).isNotEmpty().done(() => {
              // sktInstance.sendSktMessage(SKT_MAG_TYPE.CONVERSION, this.propertyNode.props_EditBox_conver.string, { isLoading: true })
              (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
                error: Error()
              }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
                error: Error()
              }), ApiUrl) : ApiUrl).CODE_CONVER, {
                data: this.propertyNode.props_EditBox_conver.string
              }).then(() => {
                this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                  error: Error()
                }), addToastAction) : addToastAction)({
                  content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                    error: Error()
                  }), lang) : lang).write(k => k.BaseBoardModule.operateDone, {}, {
                    placeStr: "操作成功"
                  }),
                  position: (_crd && ToastPosition === void 0 ? (_reportPossibleCrUseOfToastPosition({
                    error: Error()
                  }), ToastPosition) : ToastPosition).TOP,
                  type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                    error: Error()
                  }), ToastType) : ToastType).SUCCESS
                }));
              });
            });
          });
          this.propertyNode.props_Toggle_set_music.on('toggle', toggle => {
            (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
              error: Error()
            }), UseSetOption) : UseSetOption).Instance().setOption("music", toggle.target.getComponent(Toggle).isChecked);
          }, this);
          this.propertyNode.props_Toggle_set_sound.on('toggle', toggle => {
            (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
              error: Error()
            }), UseSetOption) : UseSetOption).Instance().setOption("sound", toggle.target.getComponent(Toggle).isChecked);
          }, this);
          this.propertyNode.props_Toggle_set_vibration.on('toggle', toggle => {
            (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
              error: Error()
            }), UseSetOption) : UseSetOption).Instance().setOption("vibration", toggle.target.getComponent(Toggle).isChecked);
          }, this);
          (_crd && initToggle === void 0 ? (_reportPossibleCrUseOfinitToggle({
            error: Error()
          }), initToggle) : initToggle)(this.propertyNode.props_ToggleGroup_perfabs, this.node, new Hall_PcMainPanel.EventHandler(), "Hall_PcMainPanel", "containerEventHandler");
          (_crd && initToggle === void 0 ? (_reportPossibleCrUseOfinitToggle({
            error: Error()
          }), initToggle) : initToggle)(this.propertyNode.props_ToggleGroup_profil, this.node, new Hall_PcMainPanel.EventHandler(), "Hall_PcMainPanel", "containerEventHandler1");
          (_crd && initToggle === void 0 ? (_reportPossibleCrUseOfinitToggle({
            error: Error()
          }), initToggle) : initToggle)(this.propertyNode.props_ToggleGroup_head, this.node, new Hall_PcMainPanel.EventHandler(), "Hall_PcMainPanel", "containerEventHandler2");
          (_crd && initToggle === void 0 ? (_reportPossibleCrUseOfinitToggle({
            error: Error()
          }), initToggle) : initToggle)(this.propertyNode.props_ToggleGroup_Share, this.node, new Hall_PcMainPanel.EventHandler(), "Hall_PcMainPanel", "containerEventHandler3");
          this.propertyNode.props_member_id.on(Node.EventType.TOUCH_END, () => {
            this.copyTextToClipboard(this.props.memberInfo.memberId); // this.dispatch(addToastAction({ content: lang.write(k => k.HallModule.HallCopy, {}, { placeStr: "已复制内容到剪切板" }) }))
          });

          var bindCancleHelp = () => {
            this.node.parent.once(Node.EventType.TOUCH_END, () => {
              this.propertyNode.props_img_level_hlep.active = false;
              this.propertyNode.props_img_vip_hlep.active = false;
            });
          };

          this.propertyNode.props_btn_level_help.node.on(Node.EventType.TOUCH_END, () => {
            this.propertyNode.props_img_level_hlep.active = true;
            bindCancleHelp();
          });
          this.propertyNode.props_btn_vip_help.node.on(Node.EventType.TOUCH_END, () => {
            this.propertyNode.props_img_vip_hlep.active = true;
            bindCancleHelp();
          });
        }

        copyTextToClipboard(text, share) {
          if (share === void 0) {
            share = 0;
          }

          if (NATIVE) {
            if (sys.os === sys.OS.ANDROID) {
              native.bridge.sendToNative((_crd && BridgeCode === void 0 ? (_reportPossibleCrUseOfBridgeCode({
                error: Error()
              }), BridgeCode) : BridgeCode).COPY_CLIPBOARD, text);
            }
          } else {
            (_crd && copyToClipboard === void 0 ? (_reportPossibleCrUseOfcopyToClipboard({
              error: Error()
            }), copyToClipboard) : copyToClipboard)(text);
          }

          if (share === 0) {
            this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
              error: Error()
            }), addToastAction) : addToastAction)({
              content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.HallModule.HallCopy, {}, {
                placeStr: "已复制内容到剪切板"
              }),
              type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                error: Error()
              }), ToastType) : ToastType).SUCCESS
            }));
          } else if (share === 1) {
            // 由于推广链接提示语会被webview挡住，这里提示语放到上面
            this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
              error: Error()
            }), addToastAction) : addToastAction)({
              content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.MainPaneModule.ShareCopy, {}, {
                placeStr: "复制推广链接成功，快去邀请好友一起玩吧"
              }),
              type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                error: Error()
              }), ToastType) : ToastType).SUCCESS
            }));
          }
        }

        useProps(key, value) {
          if (key === "memberInfo") {
            if (!this.props.memberInfo.memberId) return;
            var memberInfoNew = value.cur;
            this.hasChooseAvatarIndex = memberInfoNew.avatarIndex;
            this.propertyNode.props_member_id.getComponent(Label).string = memberInfoNew.memberId; // this.propertyNode.props_EditBox_name.getComponent(EditBox).string = value.cur.nickName

            this.propertyNode.props_nick_name.getComponent(Label).string = memberInfoNew.nickName;
            this.propertyNode.props_Label_glod.getComponent(Label).string = memberInfoNew.memberAssetGoldPieces.formatAmountWithCommas();
            this.propertyNode.props_label_informasi_level.string = value.cur.level;
            this.propertyNode.props_login_name.string = memberInfoNew.memberName;
            (_crd && bundleCommon === void 0 ? (_reportPossibleCrUseOfbundleCommon({
              error: Error()
            }), bundleCommon) : bundleCommon).load("resource/head/head_circle_" + memberInfoNew.avatarIndex + "/spriteFrame", SpriteFrame, (err, sp) => {
              !err && (this.propertyNode.props_spr_head.getComponent(Sprite).spriteFrame = sp);
            });
            (_crd && bundleCommon === void 0 ? (_reportPossibleCrUseOfbundleCommon({
              error: Error()
            }), bundleCommon) : bundleCommon).load("resource/" + (memberInfoNew.gender === 0 ? "icon_common_woman" : "icon_common_man") + "/spriteFrame", SpriteFrame, (err, sp) => {
              !err && (this.propertyNode.props_spr_sex.getComponent(Sprite).spriteFrame = sp);
            });
            var levelItem = (_crd && levelMap === void 0 ? (_reportPossibleCrUseOflevelMap({
              error: Error()
            }), levelMap) : levelMap).find(i => i[0] === memberInfoNew.level + 1);
            if (!levelItem) levelItem = (_crd && levelMap === void 0 ? (_reportPossibleCrUseOflevelMap({
              error: Error()
            }), levelMap) : levelMap)[(_crd && levelMap === void 0 ? (_reportPossibleCrUseOflevelMap({
              error: Error()
            }), levelMap) : levelMap).length - 1];
            this.propertyNode.props_ProgressBar_level_pro.getComponent(ProgressBar).progress = memberInfoNew.levelExperience / levelItem[1];
            this.propertyNode.props_label_level_pro.getComponent(Label).string = (memberInfoNew.levelExperience * 100 / levelItem[1]).toFixed(0) + "%";
            var vipItem = (_crd && vipMap === void 0 ? (_reportPossibleCrUseOfvipMap({
              error: Error()
            }), vipMap) : vipMap).find(i => i[0] === memberInfoNew.vipLevel + 1);
            if (!vipItem) vipItem = (_crd && vipMap === void 0 ? (_reportPossibleCrUseOfvipMap({
              error: Error()
            }), vipMap) : vipMap)[(_crd && vipMap === void 0 ? (_reportPossibleCrUseOfvipMap({
              error: Error()
            }), vipMap) : vipMap).length - 1];
            this.propertyNode.props_ProgressBar_vip_pro.getComponent(ProgressBar).progress = memberInfoNew.vipLevelExperience / vipItem[1];
            this.propertyNode.props_label_vip_pro.getComponent(Label).string = memberInfoNew.vipLevelExperience + "/" + vipItem[1];
            (_crd && bundleCommon === void 0 ? (_reportPossibleCrUseOfbundleCommon({
              error: Error()
            }), bundleCommon) : bundleCommon).load("resource/vip/b_VIP" + memberInfoNew.vipLevel + "/spriteFrame", SpriteFrame, (err, sp) => {
              !err && this.propertyNode && (this.propertyNode.props_word_informasi_vip.getComponent(Sprite).spriteFrame = sp);
            });
          } else if (key === 'isShowWebView') {
            this.updateWebView(value.cur);
          } else if (key === 'isLoadRecommendData') {
            this.loadRecommendData(true);
          } else if (key === 'profileShowIndex') {
            this.setState({
              profileShowIndex: value.cur
            });
            var toggleNodeName = 'Toggle_left_ransel';

            if (value.cur === 1 || value.cur === 2 || value.cur === 3) {
              toggleNodeName = 'Toggle_left_profil';
              this.selectToggleProfil(value.cur);
            } else if (value.cur === 4) {
              toggleNodeName = 'Toggle_left_share';
            } else if (value.cur === 5) {
              toggleNodeName = 'Toggle_left_ransel';
            } else if (value.cur === 6) {
              toggleNodeName = 'Toggle_left_water';
              this.loadRebateData();
            }

            this.selectToggleLeftRansel(toggleNodeName);
          }

          if (key === "tourist") {
            // this.propertyNode.props_btn_set_bindPhone.active = this.props.tourist !== 0
            // this.propertyNode.props_btn_set_bindPhone.getComponent(Button).interactable = this.props.tourist !== 0
            this.propertyNode.props_btn_set_bindPhone.getComponent(Sprite).grayscale = this.props.tourist === 0;
          }
        }

        bindUI() {
          var _this = this;

          //返水界面
          var BackWaterVM = null;
          this.useState( /*#__PURE__*/_asyncToGenerator(function* (key, value) {
            _this.lastShowPanel = value.pre;
            _this.propertyNode.props_layout_informasi.active = value.cur === 1;
            _this.propertyNode.props_layout_setting.active = value.cur === 2;
            _this.propertyNode.props_Layout_change_head.active = value.cur === 3;

            if (value.cur === 4) {
              _this.loadRecommendData();
            } else {
              _this.share_InfoModel && _this.share_InfoModel.setProps({
                isShow: false
              });
            }

            if (value.cur === 7) {
              _this.loadBawahanData();
            } else {
              _this.share_MemberModel && _this.share_MemberModel.setProps({
                isShow: false
              });
            }

            _this.propertyNode.props_layout_bag.active = value.cur === 5; //返水界面

            if (value.cur === 6) {
              !BackWaterVM && (BackWaterVM = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
                error: Error()
              }), BaseViewModel) : BaseViewModel)("Hall_PC_BackWater").mountView((yield (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                error: Error()
              }), PrefabPathDefine) : PrefabPathDefine).PC_BACK_WATER, Prefab)).source).appendTo(_this.node));
              BackWaterVM.viewNode.active = true; // 延迟处理，因为this.props.memberInfo未获取到

              _this.scheduleOnce(() => {
                _this.isValid && BackWaterVM.setProps({
                  memberInfo: _this.props.memberInfo
                });
              }, 0.1);
            } else {
              BackWaterVM && (BackWaterVM.viewNode.active = false);
            } // this.propertyNode.props_layout_water.active = value.cur === 6

          }), ["profileShowIndex"]);
          (_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
            error: Error()
          }), GameConfig) : GameConfig).isDev && (this.propertyNode.props_pc_uniqueId.node.active = true);
          var hotUpdateVersion = (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
            error: Error()
          }), UseSetOption) : UseSetOption).Instance().option.gameSet.hall ? (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
            error: Error()
          }), UseSetOption) : UseSetOption).Instance().option.gameSet.hall.hotUpdateVersion : '';
          this.propertyNode.props_pc_version.string = (_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
            error: Error()
          }), GameConfig) : GameConfig).appLocalVersion + (hotUpdateVersion && '.') + hotUpdateVersion.replace('v', '').replace(/\./g, '');
          this.propertyNode.props_pc_uniqueId.string = (_crd && deviceInfo === void 0 ? (_reportPossibleCrUseOfdeviceInfo({
            error: Error()
          }), deviceInfo) : deviceInfo).getUniqueId();
          this.propertyNode.props_Toggle_set_music.getComponent(Toggle).isChecked = (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
            error: Error()
          }), UseSetOption) : UseSetOption).Instance().option.music;
          this.propertyNode.props_Toggle_set_sound.getComponent(Toggle).isChecked = (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
            error: Error()
          }), UseSetOption) : UseSetOption).Instance().option.sound;
          this.propertyNode.props_Toggle_set_vibration.getComponent(Toggle).isChecked = (_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
            error: Error()
          }), UseSetOption) : UseSetOption).Instance().option.vibration;
        }

        updateWebView(show) {// this.propertyNode.props_layout_share.getChildByName("WebView").active = show;
        }

        containerEventHandler(event, customEventData) {
          (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
            error: Error()
          }), hallAudio) : hallAudio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).BTU_CLICK); //隐藏分佣面板

          switch (event.target["name"]) {
            case "Toggle_left_profil":
              tween(this.propertyNode.props_Mask_perfabs_left.getComponent(UITransform)).to(0.1, {
                height: 138
              }).start();
              tween(this.propertyNode.props_Mask_share.getComponent(UITransform)).to(0.1, {
                height: 0
              }).start(); // this.propertyNode.props_Mask_perfabs_left.active = true

              this.updateHandler1SelectStatus();
              break;

            case "Toggle_left_ransel":
              tween(this.propertyNode.props_Mask_perfabs_left.getComponent(UITransform)).to(0.1, {
                height: 0
              }).start();
              tween(this.propertyNode.props_Mask_share.getComponent(UITransform)).to(0.1, {
                height: 0
              }).start();
              this.setState({
                profileShowIndex: 5
              }); // this.propertyNode.props_Mask_perfabs_left.active = false

              break;

            case "Toggle_left_share":
              this.propertyNode.props_Mask_share.active = true;
              tween(this.propertyNode.props_Mask_perfabs_left.getComponent(UITransform)).to(0.1, {
                height: 0
              }).start();
              tween(this.propertyNode.props_Mask_share.getComponent(UITransform)).to(0.1, {
                height: 138
              }).start();
              break;

            case "Toggle_left_water":
              tween(this.propertyNode.props_Mask_perfabs_left.getComponent(UITransform)).to(0.1, {
                height: 0
              }).start();
              tween(this.propertyNode.props_Mask_share.getComponent(UITransform)).to(0.1, {
                height: 0
              }).start();
              this.setState({
                profileShowIndex: 6
              });
              this.loadRebateData();
              break;
          }
        }

        openEditNickName() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var changeNickNameViewModel = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
              error: Error()
            }), BaseViewModel) : BaseViewModel)("Hall_ChangeNickName").mountView((yield (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine)._PC_CHANGE_NICKNAME, Prefab)).source).appendTo(_this2.node, {
              effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT1,
              isModal: true
            }).setProps({
              nickName: _this2.props.memberInfo.nickName
            }).setEvent({
              onCloseHandler: () => {
                changeNickNameViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                  error: Error()
                }), EffectType) : EffectType).EFFECT2);
              },
              onModifyHandler: newNickName => {
                return new Promise((resolve, reject) => {
                  _this2.events.memberInfoDone(_this2.props.memberInfo.gender, newNickName, _this2.props.memberInfo.avatarIndex);

                  resolve(true);
                });
              }
            });
          })();
        }

        selectToggleProfil(index) {
          var nodeName = index === 0 ? 'Toggle_left_informasi' : 'Toggle_left_setting';
          this.propertyNode.props_ToggleGroup_profil.children.filter(v => v.name.startsWith('Toggle_')).forEach(v => {
            v.getComponent(Toggle).isChecked = v.name === nodeName;
          });
        }

        selectToggleLeftRansel(nodeName) {
          this.propertyNode.props_ToggleGroup_perfabs.children.filter(v => v.name.startsWith('Toggle_')).forEach(v => {
            v.getComponent(Toggle).isChecked = v.name === nodeName;
          });
          this.propertyNode.props_Mask_perfabs_left.getComponent(UITransform).height = nodeName === 'Toggle_left_profil' ? 138 : 0;
        }

        containerEventHandler1(event, customEventData) {
          (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
            error: Error()
          }), hallAudio) : hallAudio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).BTU_CLICK);

          switch (event.target["name"]) {
            case "Toggle_left_informasi":
              this.setState({
                profileShowIndex: 1
              });
              break;

            case "Toggle_left_setting":
              this.setState({
                profileShowIndex: 2
              });
              break;
          }
        }

        containerEventHandler2(event, customEventData) {
          (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
            error: Error()
          }), hallAudio) : hallAudio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).BTU_CLICK);
          (_crd && bundleCommon === void 0 ? (_reportPossibleCrUseOfbundleCommon({
            error: Error()
          }), bundleCommon) : bundleCommon).load("resource/head/head_circle_" + event.target["name"].split('_')[1] + "/spriteFrame", SpriteFrame, (err, sp) => {
            !err && (this.propertyNode.props_spr_head.getComponent(Sprite).spriteFrame = sp);
          });
          this.hasChooseAvatarIndex = +event.target["name"].split('_')[1];
        }

        updateHandler1SelectStatus() {
          var selectNode = this.propertyNode.props_ToggleGroup_profil.children.find(v => v.getComponent(Toggle).isChecked);

          if (selectNode.name === 'Toggle_left_informasi') {
            this.setState({
              profileShowIndex: 1
            });
          } else if (selectNode.name === 'Toggle_left_setting') {
            this.setState({
              profileShowIndex: 2
            });
          }
        }

        containerEventHandler3() {
          (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
            error: Error()
          }), hallAudio) : hallAudio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).BTU_CLICK);
          var selectNode = this.propertyNode.props_ToggleGroup_Share.children.find(v => v.getComponent(Toggle).isChecked);

          if (selectNode.name === 'Toggle_left_informasi') {
            this.setState({
              profileShowIndex: 4
            });
            this.share_MemberModel && this.share_MemberModel.setProps({
              isShow: false
            });
          } else if (selectNode.name === 'Toggle_left_bawahan') {
            this.setState({
              profileShowIndex: 7
            });
            this.share_InfoModel && this.share_InfoModel.setProps({
              isShow: false
            });
          }
        } // private updateShareSelectStatus() {
        // 	const selectNode = this.propertyNode.props_ToggleGroup_Share.children.find(v => v.getComponent(Toggle).isChecked);
        // 	if (selectNode.name === 'Toggle_left_informasi') {
        // 		// this.setState({ profileShowIndex: 4 })
        // 	} else if (selectNode.name === 'Toggle_left_bawahan') {
        // 		this.setState({ profileShowIndex: 7 })
        // 	}
        // }

        /**加载推荐用户的 */


        loadRecommendData(isforceRefresh) {
          if (isforceRefresh === void 0) {
            isforceRefresh = false;
          }

          if (!this.share_InfoModel) {
            (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine).SHARE_Info, Prefab).then(file => {
              this.share_InfoModel = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
                error: Error()
              }), BaseViewModel) : BaseViewModel)("Share_Info").mountView(file.source).appendTo(this.node, {
                effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                  error: Error()
                }), EffectType) : EffectType).EFFECT1,
                isModal: false
              }).setProps({
                isShow: true
              }).setEvent({
                openShareSure: actingId => {
                  this.openShareSure(actingId);
                }
              });
            });
          } else {
            this.share_InfoModel.setProps({
              isShow: true,
              forceRefresh: isforceRefresh
            });
          }
        }
        /**加载推荐会员列表的 */


        loadBawahanData() {
          if (!this.share_MemberModel) {
            this.share_MemberModel = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
              error: Error()
            }), BaseViewModel) : BaseViewModel)("Hall_PC_Share_member").mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine).SHARE_MEMBER_LIST).source).appendTo(this.node, {
              effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT1,
              isModal: false
            }).setProps({
              isShow: true
            }).setEvent({});
          } else {
            this.share_MemberModel.setProps({
              isShow: true
            });
          }
        }
        /**返水面板加载 */


        loadRebateData() {}

        initWebView() {
          // const url = config.shareUrl + "/memberRecommendList.html?id=" + this.props.memberInfo.memberId
          var url = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).agentPageUrl + "?token=" + sys.localStorage.getItem("token"); // this.propertyNode.props_layout_share.getChildByName("WebView").getComponent(WebView).url = url;
        }
        /**打开确认上级代理窗口 */


        openShareSure(actingId) {
          if (actingId.length === 0) {
            return;
          }

          this.events.openShareSure(actingId, this.state.promotionCode);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=16461520630a0c38ede705135d8c3ba68c6aaea1.js.map