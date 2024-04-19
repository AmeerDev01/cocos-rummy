System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CommandDefine, ProxyDefine, BgMediatorConst, RollerMediatorConst, SocketRepository, config, getBgProxy, BaseProxy, global, lang, addToastAction, SocketProxy, _crd, SubGameType, goldState, SKT_MAG_TYPE, dataMap, sktMsgListener;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfCommandDefine(extras) {
    _reporterNs.report("CommandDefine", "../Const/CommandDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProxyDefine(extras) {
    _reporterNs.report("ProxyDefine", "../Const/ProxyDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBgMediatorConst(extras) {
    _reporterNs.report("BgMediatorConst", "../Mediator/BgMediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerMediatorConst(extras) {
    _reporterNs.report("RollerMediatorConst", "../Mediator/RollerMediator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSocketRepository(extras) {
    _reporterNs.report("SocketRepository", "../Repositories/SocketRepository", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetBgProxy(extras) {
    _reporterNs.report("getBgProxy", "../utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseProxy(extras) {
    _reporterNs.report("BaseProxy", "./BaseProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalCacheDataProxy(extras) {
    _reporterNs.report("LocalCacheDataProxy", "./LocalCacheDataProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  _export("SocketProxy", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      CommandDefine = _unresolved_2.CommandDefine;
    }, function (_unresolved_3) {
      ProxyDefine = _unresolved_3.ProxyDefine;
    }, function (_unresolved_4) {
      BgMediatorConst = _unresolved_4.BgMediatorConst;
    }, function (_unresolved_5) {
      RollerMediatorConst = _unresolved_5.RollerMediatorConst;
    }, function (_unresolved_6) {
      SocketRepository = _unresolved_6.SocketRepository;
    }, function (_unresolved_7) {
      config = _unresolved_7.default;
    }, function (_unresolved_8) {
      getBgProxy = _unresolved_8.getBgProxy;
    }, function (_unresolved_9) {
      BaseProxy = _unresolved_9.default;
    }, function (_unresolved_10) {
      global = _unresolved_10.global;
      lang = _unresolved_10.lang;
    }, function (_unresolved_11) {
      addToastAction = _unresolved_11.addToastAction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d7ce5t41bRPKr/1zT6zeMkL", "SocketProxy", undefined);

      _export("SubGameType", SubGameType = /*#__PURE__*/function (SubGameType) {
        SubGameType[SubGameType["MAIN"] = 0] = "MAIN";
        SubGameType[SubGameType["SUB_GAME1"] = 1] = "SUB_GAME1";
        SubGameType[SubGameType["SUB_GAME2"] = 2] = "SUB_GAME2";
        return SubGameType;
      }({}));

      _export("goldState", goldState = /*#__PURE__*/function (goldState) {
        goldState[goldState["OLD_GOLD"] = 0] = "OLD_GOLD";
        goldState[goldState["PROCESS_GOLD"] = 1] = "PROCESS_GOLD";
        goldState[goldState["topUpCoins"] = 2] = "topUpCoins";
        return goldState;
      }({}));

      _export("SKT_MAG_TYPE", SKT_MAG_TYPE = /*#__PURE__*/function (SKT_MAG_TYPE) {
        SKT_MAG_TYPE["HEART_BEAT"] = "1";
        SKT_MAG_TYPE["AUTH"] = "2";
        SKT_MAG_TYPE["EXIT"] = "3";
        SKT_MAG_TYPE["LAUNCH"] = "501";
        SKT_MAG_TYPE["JACKPOT"] = "8";
        SKT_MAG_TYPE["JACKPOT_TOTAL"] = "7";
        SKT_MAG_TYPE["REFRESHCOINS"] = "10";
        SKT_MAG_TYPE["VACATETHEROOM"] = "3";
        return SKT_MAG_TYPE;
      }({}));

      dataMap = [];
      /**自定义的监听器 */

      _export("sktMsgListener", sktMsgListener = {
        add: function add(key, id, handler, sortId) {
          if (sortId === void 0) {
            sortId = 0;
          }

          var item = dataMap.find(i => i.key === key);

          if (!item) {
            item = {
              key,
              handlerList: [{
                id,
                sortId,
                handler
              }]
            };
            dataMap.push(item);
          } else {
            item.handlerList.push({
              id,
              sortId,
              handler
            });
          }
        },
        dispath: (key, data) => {
          var item = dataMap.find(i => i.key === key);
          item && item.handlerList.sort((a, b) => a.sortId - b.sortId).forEach(item => item.handler(data));
        },
        remove: (key, id) => {
          if (id) {
            var item = dataMap.find(item => item.key === key);
            item.handlerList = item.handlerList.filter(item => item.id !== id);
          } else {
            dataMap = dataMap.filter(item => item.key !== key);
          }
        },
        removeAllListener: () => {
          dataMap = [];
        }
      });

      _export("SocketProxy", SocketProxy = class SocketProxy extends (_crd && BaseProxy === void 0 ? (_reportPossibleCrUseOfBaseProxy({
        error: Error()
      }), BaseProxy) : BaseProxy) {
        constructor(proxyName, data) {
          if (proxyName === void 0) {
            proxyName = null;
          }

          if (data === void 0) {
            data = null;
          }

          super(proxyName, data);
          this.ws = void 0;
          this.heartBeatTimer = void 0;
          this.socketConfig = void 0;
          this.switcher = [];
          this.repository = new (_crd && SocketRepository === void 0 ? (_reportPossibleCrUseOfSocketRepository({
            error: Error()
          }), SocketRepository) : SocketRepository)();
          this.socketConfig = null;
        }

        initSocket(cbFn, err) {
          var _this = this;

          return _asyncToGenerator(function* () {
            try {
              _this.socketConfig = yield _this.repository.socketConfig();

              if (_this.ws && WebSocket.OPEN == _this.ws.readyState) {
                _this.ws.close();

                _this.ws = null;
              }

              _this.ws = new WebSocket(_this.socketConfig.socketIp);
              /**当连接建立成功后，这个函数就会被调用 */

              _this.ws.onopen = event => {
                console.log("WebSocket connected");

                _this.connectCallback();

                cbFn && cbFn(); // this.sendSktMessage(SKT_MAG_TYPE.JACKPOT_TOTAL, undefined)

                _this.heartBeatTimer = window.setInterval(() => {
                  _this.sendSktMessage(SKT_MAG_TYPE.HEART_BEAT, undefined); // this.sendSktMessage(SKT_MAG_TYPE.JACKPOT_TOTAL, undefined)

                }, 5000); // this.sendNotification(CommandDefine.START_UP);
              };

              _this.ws.onerror = event => {
                err && err(event);
              };

              _this.ws.onmessage = ev => {
                _this.onmessage(ev);
              };

              _this.ws.onclose = () => {
                //重连
                window.clearInterval(_this.heartBeatTimer);
                _this.ws = new WebSocket(_this.socketConfig.socketIp);
                console.log("exit and reconnect");
              };
            } catch (e) {
              _this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                error: Error()
              }), BgMediatorConst) : BgMediatorConst).SHOW_TOAST, {
                content: "\u7F51\u7EDC\u9519\u8BEF\uFF1A" + e
              });
            }
          })();
        }

        onmessage(ev) {
          var evData = JSON.parse(ev.data); // evData.code !== `${config.gameCode}:-${SKT_MAG_TYPE.HEART_BEAT}` && console.log(evData)

          var msgArr = evData.code.split(":-");

          if (evData.success) {
            if (msgArr[0] !== (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameCode) {
              this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                error: Error()
              }), BgMediatorConst) : BgMediatorConst).SHOW_TOAST, {
                content: "错误的游戏代码"
              });
              console.error('服务错误', '错误的游戏代码');
              return;
            }

            var typeCode = msgArr[1]; //(parseInt(msgArr[1]) * -1) + ''

            sktMsgListener.dispath(typeCode, evData.data);
          } else {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
              error: Error()
            }), addToastAction) : addToastAction)({
              content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.WebSocketModule.socketConnectDateFail, {}, {
                placeStr: "连接失败"
              })
            }));

            if (evData['code'].includes('-2')) {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).closeSubGame({
                confirmContent: evData['reason']
              });
            }

            console.error("\u670D\u52A1\u9519\u8BEF", evData);
          }
        }

        sendSktMessage(msgType, data) {
          this.ws && this.ws.send(JSON.stringify({
            code: (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameCode + ":" + msgType,
            data
          }));
        }

        sendAnth() {
          this.sendSktMessage(SKT_MAG_TYPE.AUTH, {
            "token": this.socketConfig.token,
            "gameId": this.socketConfig.gameId,
            "roomId": this.socketConfig.roomId
          });
        }

        calculateTheBalanceStatus() {
          var gold = this.repository.rollerLaunchResult.dl.si[0].bl;
          var betAmount = this.getShiftAmount("curr").value * (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).linesQueue.length;
          this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
            error: Error()
          }), BgMediatorConst) : BgMediatorConst).InsufficientBalanceDisplay, {
            bl: gold < betAmount
          });
          return gold < betAmount;
        }
        /**发送下注请求 */


        sendLaunch() {
          // socket断开的时候临时这样搞
          // window.setTimeout(() => {
          //   sktMsgListener.dispath(SKT_MAG_TYPE.LAUNCH, this.repository.rollerLaunchResult)
          // }, 100)
          // return
          var bl = this.calculateTheBalanceStatus();

          if (bl) {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openShop();
          } else {
            this.sendSktMessage(SKT_MAG_TYPE.LAUNCH, {
              "positionId": this.getShiftAmount("curr").positionId,
              "tableId": this.repository.userServerData.tableId
            });
            this.sendNotification((_crd && RollerMediatorConst === void 0 ? (_reportPossibleCrUseOfRollerMediatorConst({
              error: Error()
            }), RollerMediatorConst) : RollerMediatorConst).RINGOFFIREPANELSTATUS, {
              gears: this.getShiftAmount("curr").positionId
            });
          }
        }

        closeSocket() {
          if (this.ws) {
            this.ws.close();
            this.ws = null;
          }
        }
        /**获取下一档位数据(根据用户级别取得可以下注的额度列表),传max就是获取最大档位 */


        getShiftAmount(direction) {
          //先获取用户
          if (direction === "add" && this.repository.userSwitch < this.switcher.length) {
            this.repository.userSwitch++;
          } else if (direction === "add" && this.repository.userSwitch === this.switcher.length) {//this.repository.userSwitch = 1
          }

          if (direction === "subtract" && this.repository.userSwitch > 1) {
            this.repository.userSwitch--;
          } else if (direction === "subtract" && this.repository.userSwitch === 1) {//this.repository.userSwitch = switcher.length
          }

          if (this.repository.userSwitch != 1 && this.repository.userSwitch !== this.switcher.length) {
            this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
              error: Error()
            }), BgMediatorConst) : BgMediatorConst).SETGREYOUT, {
              state: 0
            });
          } else if (this.repository.userSwitch - 1 <= 1) {
            this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
              error: Error()
            }), BgMediatorConst) : BgMediatorConst).SETGREYOUT, {
              state: 1
            });
          } else {
            this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
              error: Error()
            }), BgMediatorConst) : BgMediatorConst).SETGREYOUT, {
              state: 2
            });
          }

          if (direction === "max") {
            this.repository.userSwitch = this.switcher.length;
          }

          if (this.repository.userSwitch < 6) {
            var val = this.switcher[this.repository.userSwitch - 1].value;
            this.sendNotification((_crd && RollerMediatorConst === void 0 ? (_reportPossibleCrUseOfRollerMediatorConst({
              error: Error()
            }), RollerMediatorConst) : RollerMediatorConst).UPDATE_JACKPOT_TOTAL, {
              total: val * (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).winning[3].maxRate
            });
          }

          return this.switcher[this.repository.userSwitch - 1];
        }

        initUserSwitch(val) {
          this.repository.userSwitch = val - 1 < 1 ? 1 : val;
          this.switcher = [];
          (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).betSwitcher.map(item => {
            if (this.repository.userServerData.lv >= item.level[0]) {
              this.switcher.push(...item.amount);
            }
          });

          if (this.repository.userSwitch <= 1) {
            window.setTimeout(() => {
              this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                error: Error()
              }), BgMediatorConst) : BgMediatorConst).SETGREYOUT, {
                state: 1
              });
            }, 200);
          } else if (this.repository.userSwitch == this.switcher.length) {
            window.setTimeout(() => {
              this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                error: Error()
              }), BgMediatorConst) : BgMediatorConst).SETGREYOUT, {
                state: 2
              });
            }, 200);
          }

          window.setTimeout(() => {
            var val = this.switcher[this.repository.userSwitch - 1].value;
            this.sendNotification((_crd && RollerMediatorConst === void 0 ? (_reportPossibleCrUseOfRollerMediatorConst({
              error: Error()
            }), RollerMediatorConst) : RollerMediatorConst).UPDATE_JACKPOT_TOTAL, {
              total: val * (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).winning[3].maxRate
            }); // this.sendNotification(RollerMediatorConst.INIT_JACKPOT, notification.getBody());
          }, 2000);
        }
        /**获取转义的游戏数据 */


        getTransferGameInfo() {
          return {
            // 获取停止的序号
            stopIndexArr: () => {
              // return this.repository.rollerLaunchResult.dl.si[0].rl.map(item => item[0])
              return this.repository.rollerLaunchResult.dl.si[0].rollerId;
            },

            /**获取需要闪动的图标列表，转成平铺数组，不闪动的加-1 */
            targetList: () => {
              var _linesDir = this.repository.rollerLaunchResult.dl.si[0].wp;
              var freegameDir = this.repository.rollerLaunchResult.dl.si[0].freegame || {};

              var linesDir = _extends({}, _linesDir, freegameDir);

              var lineList = [];

              var _loop = function _loop() {
                var lines = linesDir[lineIndex];
                /**
                 [[0,1],[0,2],[1,1],[2,2]]
                 */

                var coord = [[0, []], [1, []], [2, []], [3, []], [4, []]];
                coord.forEach((item2, index2) => {
                  var t = lines.filter(item3 => item3[0] === index2).map(i => i[1]); // const t = lines.find((item3) => item3[0] === index2)

                  t.length && (item2[1] = t);
                });
                lineList.push({
                  lineIndex,
                  coord
                });
              };

              for (var lineIndex in linesDir) {
                _loop();
              }

              return lineList;
            },

            /**获取需要停靠的图标 */
            getDockIcon: () => {
              var lineList;
              var lines = this.repository.rollerLaunchResult.dl.si[0].fixedChessboardIcon || [];
              /**
               [[0,1],[0,2],[1,1],[2,2]]
               */

              var coord = [[0, []], [1, []], [2, []], [3, []], [4, []]];
              coord.forEach((item2, index2) => {
                var t = lines.filter(line => line[0] === index2).map(i => [i[1], i[2]]); // const t = lines.find((item3) => item3[0] === index2)

                t.length && (item2[1] = t);
              });
              return coord;
            },
            getDackiconLenth: () => {
              var lines = this.repository.rollerLaunchResult.dl.si[0].fixedChessboardIcon;
              return lines.length;
            },

            /**获取gameType */
            gameType: () => {
              if (!this.repository.rollerLaunchResult) {
                return SubGameType.MAIN;
              }

              return this.repository.rollerLaunchResult.dl.si[0].gameType;
            },
            getChange: () => {
              return this.repository.rollerLaunchResult.dl.si[0].change;
            },
            getIconStay: () => {
              return this.repository.rollerLaunchResult.dl.si[0].iconStay;
            },

            setIconStay(key) {
              this.repository.rollerLaunchResult.dl.si[0].iconStay = key;
            },

            /**获取要执行的宝箱效果 */
            getOpenBoxEffect: () => {
              return this.repository.rollerLaunchResult.dl.si[0].lw;
            },

            /**获取剩余抽奖次数 */
            getRemainTimes: () => {
              return this.repository.rollerLaunchResult.dl.si[0].freeCount;
            },

            /**获取当前的总奖励 */
            getCurrentScore: order => {
              if (this.repository.rollerLaunchResult.dl.si[0].tbb != 0) {
                return this.repository.rollerLaunchResult.dl.si[0].tw;
              } else {
                if (order === 'curr') {
                  return this.repository.rollerLaunchResult.dl.si[0].tw || this.repository.rollerLaunchResult.dl.si[0].freeGameAmount;
                } else {
                  return this.repository.rollerLaunchResult.dl.si[0].freeGameAmount;
                }
              }
            },

            /**获取奖励倍数 */
            getMagnification: () => {
              return this.repository.rollerLaunchResult.dl.si[0].magnification;
            },

            /**获取用户级别 */
            getUserLevel: () => {
              return this.repository.userServerData.lv;
            },

            /* 获取第几局*/
            getNumberOfRounds: () => {
              return this.repository.rollerLaunchResult.dl.si[0].freeCount;
            },
            getUserGold: state => {
              if (state === goldState.OLD_GOLD) {
                console.log(this.repository.rollerLaunchResult.dl.si[0].bl);
                return this.repository.rollerLaunchResult.dl.si[0].bl;
              } else if (state === goldState.PROCESS_GOLD) {
                return this.repository.rollerLaunchResult.dl.si[0].blab;
              } else if (state === goldState.topUpCoins) {
                return this.repository.rollerLaunchResult.dl.si[0].bl;
              }
            }
          };
        }

        setGametType(gameType) {
          this.repository.rollerLaunchResult.dl.si[0].gameType = gameType;
        }

        close() {
          this.ws.close();
        }

        getLocalCacheDataProxy() {
          return this.facade.retrieveProxy((_crd && ProxyDefine === void 0 ? (_reportPossibleCrUseOfProxyDefine({
            error: Error()
          }), ProxyDefine) : ProxyDefine).LOCAL_CACHE_DATA);
        }

        connectCallback() {
          sktMsgListener.add(SKT_MAG_TYPE.AUTH, 'proxy', data => {
            this.repository.userServerData = Object.assign({}, data);

            if (data.gameType === SubGameType.MAIN) {
              //主游戏
              this.sendNotification((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
                error: Error()
              }), CommandDefine) : CommandDefine).ROLLER, {
                gameType: 0
              }, (_crd && RollerMediatorConst === void 0 ? (_reportPossibleCrUseOfRollerMediatorConst({
                error: Error()
              }), RollerMediatorConst) : RollerMediatorConst).INIT_ROLLER_PANEL);
            } else if (data.gameType === SubGameType.SUB_GAME1) {
              // 次数游戏
              this.sendNotification((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
                error: Error()
              }), CommandDefine) : CommandDefine).ROLLER, {
                gameType: 1
              }, (_crd && RollerMediatorConst === void 0 ? (_reportPossibleCrUseOfRollerMediatorConst({
                error: Error()
              }), RollerMediatorConst) : RollerMediatorConst).INIT_ROLLER_PANEL);
            } else if (data.gameType === SubGameType.SUB_GAME2) {
              //大滑槽
              this.sendNotification((_crd && CommandDefine === void 0 ? (_reportPossibleCrUseOfCommandDefine({
                error: Error()
              }), CommandDefine) : CommandDefine).ROLLER, {
                gameType: 2
              }, (_crd && RollerMediatorConst === void 0 ? (_reportPossibleCrUseOfRollerMediatorConst({
                error: Error()
              }), RollerMediatorConst) : RollerMediatorConst).INIT_ROLLER_PANEL);
            }

            this.initGameData(data);
          });
          sktMsgListener.add(SKT_MAG_TYPE.JACKPOT, 'proxy', data => {
            this.setJackPot(data);
          }, 1);
          sktMsgListener.add(SKT_MAG_TYPE.JACKPOT_TOTAL, 'proxy', data => {
            if (this.repository.userSwitch > 5) {
              this.sendNotification((_crd && RollerMediatorConst === void 0 ? (_reportPossibleCrUseOfRollerMediatorConst({
                error: Error()
              }), RollerMediatorConst) : RollerMediatorConst).UPDATE_JACKPOT_TOTAL, {
                total: data
              });
            }
          }, 1);
          sktMsgListener.add(SKT_MAG_TYPE.LAUNCH, 'proxy', data => {
            this.repository.rollerLaunchResult = Object.assign({}, data);
            this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
              error: Error()
            }), BgMediatorConst) : BgMediatorConst).UPDATE_USER_GOLD, {
              state: goldState.PROCESS_GOLD
            });

            if (this.getTransferGameInfo().gameType() === 0) {
              // 按钮状态
              this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                error: Error()
              }), BgMediatorConst) : BgMediatorConst).TOGGLETHESTARTBUTTON, {
                state: false
              });
              this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
                error: Error()
              }), BgMediatorConst) : BgMediatorConst).INITSCORE);
            }

            this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
              error: Error()
            }), BgMediatorConst) : BgMediatorConst).UPDATE_BTN_LABEL, {
              frequency: false
            });
            this.setGameInfo();
          }, 1); // 后台刷新金币

          sktMsgListener.add(SKT_MAG_TYPE.REFRESHCOINS, 'proxy', data => {
            this.repository.rollerLaunchResult.dl.si[0].bl = data;
            this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
              error: Error()
            }), BgMediatorConst) : BgMediatorConst).UPDATE_USER_GOLD, {
              state: goldState.topUpCoins
            });
          }, 1); // 清退用户

          sktMsgListener.add(SKT_MAG_TYPE.VACATETHEROOM, 'proxy', data => {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).closeSubGame({
              confirmContent: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.UpdateModule.GameNotice, {}, {
                placeStr: "对不起，系统维护中，请稍后再尝试登录"
              })
            });
          }, 1);
        }

        setGameInfo() {
          var gameTypePre = this.getTransferGameInfo().gameType();
          var obj = this.getTransferGameInfo().getChange();

          if (obj && Object.keys(obj).length != 0) {
            this.sendNotification((_crd && RollerMediatorConst === void 0 ? (_reportPossibleCrUseOfRollerMediatorConst({
              error: Error()
            }), RollerMediatorConst) : RollerMediatorConst).CHANGEPANELS, {
              iconStay: this.getTransferGameInfo().getChange()
            });
          }

          this.sendNotification((_crd && RollerMediatorConst === void 0 ? (_reportPossibleCrUseOfRollerMediatorConst({
            error: Error()
          }), RollerMediatorConst) : RollerMediatorConst).THERINGOFFIREROLLS);
          var gameTypeNew = this.getTransferGameInfo().gameType();
          (_crd && getBgProxy === void 0 ? (_reportPossibleCrUseOfgetBgProxy({
            error: Error()
          }), getBgProxy) : getBgProxy)().setIsChangeNextGameType(gameTypePre, gameTypeNew);
          this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
            error: Error()
          }), BgMediatorConst) : BgMediatorConst).UPDATE_GAME_STATUS);
        }

        setJackPot(data) {
          this.sendNotification((_crd && RollerMediatorConst === void 0 ? (_reportPossibleCrUseOfRollerMediatorConst({
            error: Error()
          }), RollerMediatorConst) : RollerMediatorConst).UPDATE_JACKPOT, {
            jackPotData: data
          });
        }

        initGameData(data) {
          Object.assign(this.repository.rollerLaunchResult.dl.si[0], data);
          this.repository.rollerLaunchResult.dl.si[0].freeCount = data.freeGameCount;
          this.setGameInfo();
          this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
            error: Error()
          }), BgMediatorConst) : BgMediatorConst).UPDATE_USER_GOLD, {
            state: goldState.OLD_GOLD
          });

          if (data.gameType === 0) {
            this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
              error: Error()
            }), BgMediatorConst) : BgMediatorConst).TOGGLETHESTARTBUTTON, {
              state: true,
              type: 0
            });
          } else if (data.gameType === 1) {
            this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
              error: Error()
            }), BgMediatorConst) : BgMediatorConst).TOGGLETHESTARTBUTTON, {
              state: true
            });
            this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
              error: Error()
            }), BgMediatorConst) : BgMediatorConst).UPDATE_BTN_LABEL, {
              frequency: this.getTransferGameInfo().getNumberOfRounds()
            });
          } else if (data.gameType === 2) {
            this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
              error: Error()
            }), BgMediatorConst) : BgMediatorConst).TOGGLETHESTARTBUTTON, {
              state: true
            });
            this.sendNotification((_crd && RollerMediatorConst === void 0 ? (_reportPossibleCrUseOfRollerMediatorConst({
              error: Error()
            }), RollerMediatorConst) : RollerMediatorConst).INITDOCKIOCN, {
              dockIocn: this.getTransferGameInfo().getDockIcon()
            });
            this.sendNotification((_crd && BgMediatorConst === void 0 ? (_reportPossibleCrUseOfBgMediatorConst({
              error: Error()
            }), BgMediatorConst) : BgMediatorConst).UPDATE_BTN_LABEL, {
              frequency: this.getTransferGameInfo().getNumberOfRounds()
            });
            this.sendNotification((_crd && RollerMediatorConst === void 0 ? (_reportPossibleCrUseOfRollerMediatorConst({
              error: Error()
            }), RollerMediatorConst) : RollerMediatorConst).REMOVE_THECHEST_LAYER, {
              iconStay: 1
            });
          }

          this.sendNotification((_crd && RollerMediatorConst === void 0 ? (_reportPossibleCrUseOfRollerMediatorConst({
            error: Error()
          }), RollerMediatorConst) : RollerMediatorConst).UPDATETHEBACKGROUND);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=714594bc3b1dc89b7df1dce63c5b1c5351388bd4.js.map