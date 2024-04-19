System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, Button, Label, Node, Sprite, _decorator, log, BaseComponent, Throttler, ApiUrl, global, sourceManageSeletor, _dec, _class, _crd, ccclass, property, WeekType, Hall_SignIn;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThrottler(extras) {
    _reporterNs.report("Throttler", "../../utils/Throttler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApiUrl(extras) {
    _reporterNs.report("ApiUrl", "../apiUrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInitStateType(extras) {
    _reporterNs.report("InitStateType", "../store/actions/memberInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Animation = _cc.Animation;
      Button = _cc.Button;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      _decorator = _cc._decorator;
      log = _cc.log;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      Throttler = _unresolved_3.default;
    }, function (_unresolved_4) {
      ApiUrl = _unresolved_4.ApiUrl;
    }, function (_unresolved_5) {
      global = _unresolved_5.global;
      sourceManageSeletor = _unresolved_5.sourceManageSeletor;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e5189+U9+dPPYoNRzzfyggg", "Hall_SignIn", undefined);

      __checkObsolete__(['Animation', 'Button', 'Label', 'Node', 'Sprite', '_decorator', 'log']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WeekType", WeekType = {
        MONDAY: "monday",
        TUESDAY: "tuesday",
        WEDNESDAY: "wednesday",
        THURSDAY: "thursday",
        FRIDAY: "friday",
        SATURDAY: "saturday",
        SUNDAY: "sunday",
        ULTIMATE: "ultimate"
      });

      _export("Hall_SignIn", Hall_SignIn = (_dec = ccclass('Hall_SignIn'), _dec(_class = class Hall_SignIn extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_btn_close: new Button(),
            props_btn_menerima: new Button(),
            props_btn_unMenerima: new Node(),
            props_spr_signIn_vipbg: new Node(),
            props_vip_num: new Label(),
            props_vip_level: new Sprite()
          };
          this.props = {
            memberInfo: null,
            signInDatas: [],
            signSuccess: false
          };
          this.events = {
            requestGetSignInList: () => {},
            requestSign: weekType => {},
            close: () => {},
            onChangeGold: value => {}
          };
        }

        start() {}

        initState() {
          return {
            weekType: null
          };
        }

        bindEvent() {
          this.propertyNode.props_btn_close.node.on(Node.EventType.TOUCH_END, () => {
            this.events.close();
          });
          this.propertyNode.props_spr_signIn_vipbg.on(Node.EventType.TOUCH_END, () => {
            this.events.close();
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openVipMain();
          });
          this.propertyNode.props_btn_menerima.node.on(Node.EventType.TOUCH_END, () => {
            const weekType = this.getSignInWeekType(); // 签到防抖

            (_crd && Throttler === void 0 ? (_reportPossibleCrUseOfThrottler({
              error: Error()
            }), Throttler) : Throttler).isDebouncerAsync((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
              error: Error()
            }), ApiUrl) : ApiUrl).SIGN_IN + weekType, 500, true, () => {}).then(isPass => {
              this.setState({
                weekType
              });
              this.events.requestSign(this.state.weekType);
              this.updateSignStatus(false);
            });
          });
        }
        /**
         * 更新签到状态
         * @param active 
         */


        updateSignStatus(active) {
          this.propertyNode.props_btn_menerima.node.active = active;
          this.propertyNode.props_btn_unMenerima.active = !active;
        }
        /**
         * 
         * @param weekType 星期类型
         * @param type 0：待签到，1：已签到 2：已过期
         * @param gold 显示的金币
         */


        updatePositionStatus(signInDataType) {
          const weekType = this.getWeekType(signInDataType.day);
          const type = signInDataType.status;
          const gold = signInDataType.gold;
          const signNode = this.getSignInNode(weekType);
          signNode.active = true;
          const goldNode = signNode.getChildByName("label_gold");
          const unclaimedNode = signNode.getChildByName("spr_unclaimed");
          const alreadyNode = signNode.getChildByName("spr_already");
          goldNode.active = false;
          unclaimedNode.active = false;
          alreadyNode.active = false;

          if (type === 0) {
            goldNode.active = true;
            goldNode.getComponent(Label).string = gold.formatAmountWithLetter();
          } else if (type === 1) {
            signNode.getChildByName('qiandao_dailingqu').active = false;
            signNode.getChildByName('spr_gold').getComponent(Sprite).grayscale = true;
            alreadyNode.active = true;
          } else if (type === 2) {
            signNode.getChildByName('qiandao_dailingqu').active = false;
            signNode.getChildByName('spr_gold').getComponent(Sprite).grayscale = true;
            unclaimedNode.active = true;
          } else {
            goldNode.active = true;
            goldNode.getComponent(Label).string = gold.formatAmountWithLetter();
          }
        }

        getSignInNode(nodename) {
          return this.node.getChildByName("Layout_" + nodename);
        }
        /**播放签到动画 */


        playSignInAnimaton(weekType) {
          if (!weekType) return;
          const signNode = this.getSignInNode(weekType);
          signNode.getComponent(Animation).play();
          signNode.setSiblingIndex(99);
          const signInData = this.props.signInDatas.find(v => v.day === this.getDay(weekType));
          let gold = signInData ? signInData.gold : 0;

          if (this.props.memberInfo.vipLevel >= signInData.vip) {
            gold += signInData.vipGold;
          } // 动画播放完成之后关闭窗口，星期天播放之后不马上关闭


          if (WeekType.SUNDAY !== weekType) {
            signNode.getComponent(Animation).on(Animation.EventType.FINISHED, () => {
              this.events.onChangeGold(gold);
              this.events.close();
            });
          } else {
            this.events.onChangeGold(gold);
          }
        }

        getWeekType(day) {
          if (day === 1) {
            return WeekType.MONDAY;
          } else if (day === 2) {
            return WeekType.TUESDAY;
          } else if (day === 3) {
            return WeekType.WEDNESDAY;
          } else if (day === 4) {
            return WeekType.THURSDAY;
          } else if (day === 5) {
            return WeekType.FRIDAY;
          } else if (day === 6) {
            return WeekType.SATURDAY;
          } else if (day === 7) {
            return WeekType.SUNDAY;
          } else if (day === 8) {
            return WeekType.ULTIMATE;
          }
        }

        getDay(weekType) {
          if (WeekType.MONDAY === weekType) {
            return 1;
          } else if (WeekType.TUESDAY === weekType) {
            return 2;
          } else if (WeekType.WEDNESDAY === weekType) {
            return 3;
          } else if (WeekType.THURSDAY === weekType) {
            return 4;
          } else if (WeekType.FRIDAY === weekType) {
            return 5;
          } else if (WeekType.SATURDAY === weekType) {
            return 6;
          } else if (WeekType.SUNDAY === weekType) {
            return 7;
          } else if (WeekType.ULTIMATE === weekType) {
            return 8;
          }
        }
        /**是否星期天签到 */


        isSignSunday() {
          return this.props.signInDatas.find(v => v.day === this.getDay(WeekType.SUNDAY));
        }

        init(datas) {
          // 可以签到的某一天
          const signDay = datas.find(v => v.tap === 1);
          datas.forEach(v => {
            this.updatePositionStatus(v);
          });

          if (signDay) {
            // 如果是第8天，表示已经连续签到第7天，直接请求最后一次签到
            if (signDay.day === this.getDay(WeekType.ULTIMATE)) {
              this.events.requestSign(WeekType.ULTIMATE);
              return;
            }

            this.updateSignStatus(true);
            this.updateChangeVip(signDay.vip);
            this.propertyNode.props_vip_num.string = '+' + signDay.vipGold.formatAmountWithLetter();
          } else {
            this.updateSignStatus(false); // 初始化没有可签到的选项时，同时上一次又是签到的星期天，就直接关闭窗口
            // 出现这种情况就是签到了星期天，但是没有连续签到7天

            if (this.state.weekType === WeekType.SUNDAY) {
              this.scheduleOnce(() => {
                this.events.close();
              }, 0.5);
            }

            const lastSignDay = [...datas].reverse().find(v => v.status === 1);
            this.updateChangeVip(lastSignDay.vip);
            this.propertyNode.props_vip_num.string = '+' + lastSignDay.vipGold.formatAmountWithLetter();
          }
        }

        getSignInWeekType() {
          const signDay = this.props.signInDatas.find(v => v.tap === 1);
          return signDay && this.getWeekType(signDay.day);
        }

        useProps(key, value) {
          log("signin use props", key, value);

          if (key === 'signInDatas') {
            const newData = value.cur;

            if (newData.length > 0) {
              this.init(newData);
            }
          } else if (key === 'signSuccess' && value.cur) {
            const signType = this.getSignInWeekType();
            this.playSignInAnimaton(signType); // 星期天签到之后再请求一次，看能不能完成连续签到

            if (WeekType.SUNDAY === signType) {
              this.events.requestGetSignInList();
            }
          }
        }

        updateChangeVip(vipLevel) {
          vipLevel = vipLevel ? vipLevel : 0;
          this.propertyNode.props_vip_level.spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)('common').getFile(`resource/vip/b_VIP${vipLevel}/spriteFrame`).source;
        }

        bindUI() {
          this.updateSignStatus(false);
          this.node.children.filter(v => v.name.startsWith("Layout_")).forEach(v => v.active = false);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b6e543343d01e903437433168040057a7277c074.js.map