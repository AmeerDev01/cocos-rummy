System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Sprite, tween, Vec3, BaseComponent, getNodeByNameDeep, SpriteFramePathDefine, mainGameViewModel, playTurnCard, sourceManageSelector, PrefabPathDefine, TaskScheduler, Task, config, gameCacheData, GameStatus, sendViewModel, _dec, _class, _crd, ccclass, property, Bandar_card_banker;

  /**获取特殊奖资源 */
  function getSpecialCard(result) {
    // console.log("result",result);
    let fileName = '';

    if (result === 7) {
      fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
        error: Error()
      }), SpriteFramePathDefine) : SpriteFramePathDefine).SIX_DEVIL;
    } else if (result === 6) {
      fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
        error: Error()
      }), SpriteFramePathDefine) : SpriteFramePathDefine).TWIN_CARDS;
    } else if (result === 5) {
      fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
        error: Error()
      }), SpriteFramePathDefine) : SpriteFramePathDefine).SMALL_CARDS;
    } else if (result === 4) {
      fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
        error: Error()
      }), SpriteFramePathDefine) : SpriteFramePathDefine).BIG_CARDS;
    } else if (result === 3) {
      fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
        error: Error()
      }), SpriteFramePathDefine) : SpriteFramePathDefine).QIU_QIU;
    } // console.log("fileName",fileName);


    return (_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
      error: Error()
    }), sourceManageSelector) : sourceManageSelector)().getFile(fileName).source;
  }
  /**点数 */


  function sumCard(up, down) {
    let num;
    num = (up + down) % 10;
    return num;
  }
  /**重新排序 重组 */


  function restructureCard(array, newCard) {
    //  console.log("array",array);
    // console.log("newCard",newCard);
    if (!array || !newCard || array === undefined || newCard === undefined || array.length <= 0 || newCard.length <= 0) {
      return;
    } // let result:number=-1;//用于判定特殊奖
    // let sameIndex:number=0;
    // let sumSixIndex:number=0
    // let allSum=0
    // const combinations = [];


    const C = newCard.map(num => {
      const item = array.find(obj => obj.cardNum === num);

      if (item === undefined) {
        return;
      }

      ;
      return {
        cardNum: num,
        cardSum: item.cardSum,
        card: item.card,
        up: item.up,
        down: item.down
      };
    }); // console.log("CCCCC",C);
    // // 两两相加并取余数
    // for (let i = 0; i < array.length; i++) {
    // 	for (let j = i + 1; j < array.length; j++) {
    // 		const sum = (array[i].cardSum + array[j].cardSum) % 10;
    // 		let obj={
    // 			sum:sum,num1:array[i].cardSum,num2:array[j].cardSum
    // 		}
    // 		combinations.push(obj);
    // 	}
    // }
    // for(let i=0;i<array.length;i++){
    // 	if(array[i].up===array[i].down){
    //       sameIndex++;
    // 	}
    // 	if(array[i].up+array[i].down===6){
    // 		sumSixIndex++;
    // 	}
    // 	allSum=allSum+array[i].up+array[i].down
    // }
    // // 找出最大值A所对应的两个数，并从数组中移除
    // if(C.length===0){
    // 	return
    // }
    // console.log("C",C);

    if (!C || C === undefined) {
      return;
    }

    ;

    if (C[0] === undefined) {
      return;
    }

    ;
    const maxIndices = (C[0].cardSum + C[1].cardSum) % 10;
    let mimIndices = (C[2].cardSum + C[3].cardSum) % 10; // if(sumSixIndex>=4){
    // 	result=0
    // }
    // if(sameIndex>=4){
    // 	result=1
    // }
    // if(allSum>=39){
    // 	result=3
    // }else if(allSum<=9){
    // 	result=2
    // }
    // if(maxIndices===9 && mimIndices === 9){
    // 	result=4
    // }

    let obj = {
      newArray: C,
      max: maxIndices,
      min: mimIndices // result:result

    };
    return obj;
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteFramePathDefine(extras) {
    _reporterNs.report("SpriteFramePathDefine", "../sourceDefine/spriteDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmainGameViewModel(extras) {
    _reporterNs.report("mainGameViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayTurnCard(extras) {
    _reporterNs.report("playTurnCard", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSelector(extras) {
    _reporterNs.report("sourceManageSelector", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardNum(extras) {
    _reporterNs.report("CardNum", "../store/actions/pokerDetail", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskScheduler(extras) {
    _reporterNs.report("TaskScheduler", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameCacheData(extras) {
    _reporterNs.report("gameCacheData", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsendViewModel(extras) {
    _reporterNs.report("sendViewModel", "../viewModel/BandarGameBoardViewModel", _context.meta, extras);
  }

  _export({
    getSpecialCard: getSpecialCard,
    sumCard: sumCard,
    restructureCard: restructureCard
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      getNodeByNameDeep = _unresolved_3.getNodeByNameDeep;
    }, function (_unresolved_4) {
      SpriteFramePathDefine = _unresolved_4.SpriteFramePathDefine;
    }, function (_unresolved_5) {
      mainGameViewModel = _unresolved_5.mainGameViewModel;
      playTurnCard = _unresolved_5.playTurnCard;
      sourceManageSelector = _unresolved_5.sourceManageSelector;
    }, function (_unresolved_6) {
      PrefabPathDefine = _unresolved_6.PrefabPathDefine;
    }, function (_unresolved_7) {
      TaskScheduler = _unresolved_7.default;
      Task = _unresolved_7.Task;
    }, function (_unresolved_8) {
      config = _unresolved_8.default;
    }, function (_unresolved_9) {
      gameCacheData = _unresolved_9.gameCacheData;
      GameStatus = _unresolved_9.GameStatus;
    }, function (_unresolved_10) {
      sendViewModel = _unresolved_10.sendViewModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8555dAz/fBLjpwSpwWxzm+U", "Bandar_card_banker", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Label', 'Node', 'Skeleton', 'sp', 'Sprite', 'SpriteFrame', 'tween', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bandar_card_banker", Bandar_card_banker = (_dec = ccclass('Bandar_card_banker'), _dec(_class = class Bandar_card_banker extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
          this.newCardPo = [];
          this.propertyNode = {
            props_banker_all_card: new Node(),
            props_skeleton_rollcard: new Node(),
            props_spr_bankercard_num_bg: new Node(),
            props_bankercard_num_query: new Node(),
            props_bankercard_type: new Node(),
            props_label_cardbanker_winnum: new Node(),
            props_label_cardbanker_losenum: new Node()
          };
          this.props = {
            bankerPoker: null,
            countDown: 0,
            gameStatus: null,
            cardType: null,
            farmhouse: null,
            allCardType: null
          };
          this.events = {};
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === "farmhouse") {
            if (value.cur && Object.keys(value.cur).length != 0) {
              window.setTimeout(() => {
                if (!this.propertyNode) {
                  return;
                }

                let item = this.props.allCardType[0];
                this.propertyNode.props_bankercard_type.getComponent(Sprite).spriteFrame = item > 2 ? getSpecialCard(item) : getSpecialCard(3);
                this.propertyNode.props_bankercard_type.active = item > 2; //这里是特殊奖

                this.propertyNode.props_label_cardbanker_losenum.getComponent(Label).string = value.cur.num1 + ":" + value.cur.num2;
                this.propertyNode.props_label_cardbanker_losenum.active = item <= 2;
                this.propertyNode.props_spr_bankercard_num_bg.active = true;
              }, 500);
            }
          }

          if (key === "allCardType") {
            if (!value.cur) {
              return;
            }

            ;
            this.propertyNode.props_bankercard_type.getComponent(Sprite).spriteFrame = value.cur[0] > 2 ? getSpecialCard(value.cur[0]) : getSpecialCard(3);
            this.propertyNode.props_bankercard_type.active = value.cur[0] > 2; //这里是特殊奖
          }

          if (key === "bankerPoker") {
            if ((_crd && sendViewModel === void 0 ? (_reportPossibleCrUseOfsendViewModel({
              error: Error()
            }), sendViewModel) : sendViewModel).isUnMount) return;
            let allCard = (_crd && sendViewModel === void 0 ? (_reportPossibleCrUseOfsendViewModel({
              error: Error()
            }), sendViewModel) : sendViewModel).comp.getPropertyNode().props_all_card;
            allCard.children.forEach(v => {
              tween(v).to(0.1, {
                scale: new Vec3(0.1, 0.1)
              }).start();
            });
            this.changeCardInfo(value.cur);
          }

          if (key === "gameStatus") {
            if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
              error: Error()
            }), mainGameViewModel) : mainGameViewModel).isUnMount) {
              return;
            }

            this.propertyNode.props_label_cardbanker_losenum.active = false;

            if (value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).BET) {
              if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
                error: Error()
              }), mainGameViewModel) : mainGameViewModel).isUnMount) {
                return;
              }

              window.setTimeout(() => {
                if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
                  error: Error()
                }), mainGameViewModel) : mainGameViewModel).isUnMount) {
                  return;
                }

                this.propertyNode.props_bankercard_num_query.active = true;
                this.propertyNode.props_spr_bankercard_num_bg.active = true;
              }, 2000);
            } else if (value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).STOP_BET) {
              this.propertyNode.props_bankercard_num_query.active = false;
              this.propertyNode.props_spr_bankercard_num_bg.active = true;
              window.setTimeout(() => {
                if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
                  error: Error()
                }), mainGameViewModel) : mainGameViewModel).isUnMount) {
                  return;
                }

                this.playAnimation();
              }, 100);
            } else if (value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).WAIT) {
              this.initCard();
              this.propertyNode.props_label_cardbanker_losenum.active = false;
            }
          }
        }
        /**init */


        initCard() {
          this.propertyNode.props_bankercard_num_query.active = false;
          this.propertyNode.props_spr_bankercard_num_bg.active = false;
          this.propertyNode.props_label_cardbanker_losenum.active = false;
          this.propertyNode.props_bankercard_type.active = false;
          this.propertyNode.props_banker_all_card.removeAllChildren();
          this.newCardPo = [];
          this.taskScheduler.destoryQueue();
        }
        /**翻牌动画 */


        playAnimation() {
          /**翻牌 */
          let task1 = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
            error: Error()
          }), Task) : Task)(done => {
            (_crd && playTurnCard === void 0 ? (_reportPossibleCrUseOfplayTurnCard({
              error: Error()
            }), playTurnCard) : playTurnCard)();
            this.propertyNode.props_banker_all_card.children.forEach(item => {
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_skeleton_rollcard", item).active = true; // getNodeByNameDeep("props_skeleton_rollcard",item).getComponent(sp.Skeleton).animation="animation";

              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("spr_card_bg", item).active = true;
            });
            window.setTimeout(() => done(), 100);
          });
          /**展示牌 */

          let task2 = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
            error: Error()
          }), Task) : Task)(done => {
            this.propertyNode.props_banker_all_card.children.forEach(item => {
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("spr_card_bg", item).active = true;
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("props_skeleton_rollcard", item).active = false;
            });
            window.setTimeout(() => done(), 100);
          });
          /**牌换位置 */

          let task3 = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
            error: Error()
          }), Task) : Task)(done => {
            this.changeCardPosition();
            window.setTimeout(() => done(), 300);
          });
          this.taskScheduler.joinqQueue(task1, false).joinqQueue(task2, false).joinqQueue(task3, false);
        }
        /**改变牌资源 */


        changeCardInfo(bankerPoker) {
          // console.log(bankerPoker);
          if (!bankerPoker) {
            return;
          }

          ;
          this.newCardPo = [];
          this.propertyNode.props_banker_all_card.removeAllChildren();
          bankerPoker.forEach((item, index) => {
            let card = instantiate((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
              error: Error()
            }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine).MAIN_CARD_BIG).source);
            let itemCard = this.getCard(item);
            let num = 0;
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("props_skeleton_rollcard", card).active = true;
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("spr_card_bg", card).active = false;

            if (index === 1) {
              num = 48;
            } else if (index === 2) {
              num = 100;
            } else if (index === 3) {
              num = 148;
            }

            card.setPosition(-328 + num, 300);
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("spr_card_up", card).getComponent(Sprite).spriteFrame = this.getSpriteFrame(itemCard.up);
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("spr_card_down", card).getComponent(Sprite).spriteFrame = this.getSpriteFrame(itemCard.down);
            let itemCardNum = sumCard(itemCard.up, itemCard.down);
            let cardP = {
              cardNum: item,
              cardSum: itemCardNum,
              up: itemCard.up,
              down: itemCard.down,
              card: card
            };
            this.newCardPo.push(cardP);
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("props_banker_all_card", this.node).addChild(card);
          });
        }
        /**获取每张牌的组型 */


        getCard(cardT) {
          return (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).cardType[cardT];
        }
        /**改变牌的位置 */


        changeCardPosition() {
          let banker = restructureCard(this.newCardPo, (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
            error: Error()
          }), gameCacheData) : gameCacheData).newBankerPoker);

          if (!banker) {
            return;
          } //    console.log("this.newCardPo",this.newCardPo);
          //    console.log("banker",banker);


          banker.newArray.forEach((item, index) => {
            let result = this.props.cardType;
            let endP = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).cardItemPosition[0][index];
            tween(item.card).to(0.6, {
              position: new Vec3(endP.x, endP.y)
            }).call(() => {
              // if(){}//需要判定比例情况来展示比例还是特殊奖，特殊奖共有5种，需要判定用哪种资源
              // console.log("banker.result--------",banker.result);
              if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
                error: Error()
              }), mainGameViewModel) : mainGameViewModel).isUnMount) {
                return;
              }

              this.propertyNode.props_bankercard_num_query.active = false;
              this.propertyNode.props_label_cardbanker_losenum.getComponent(Label).string = banker.max + ":" + banker.min;
              this.propertyNode.props_label_cardbanker_losenum.active = result[0] <= 2; //这里是比例展示

              this.propertyNode.props_bankercard_type.getComponent(Sprite).spriteFrame = result[0] > 2 ? getSpecialCard(result[0]) : getSpecialCard(3);
              this.propertyNode.props_bankercard_type.active = result[0] > 2; //这里是特殊奖
            }).start();
          });
        }

        destroyCallBack() {
          this.taskScheduler.destoryQueue();
        }

        createBankerCard() {
          for (let i = 0; i < 4; i++) {
            let card = instantiate((_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
              error: Error()
            }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine).MAIN_CARD_BIG).source);
            let num = 0;
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("props_skeleton_rollcard", card).active = true;
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("spr_card_bg", card).active = false;

            if (i === 1) {
              num = 48;
            } else if (i === 2) {
              num = 100;
            } else if (i === 3) {
              num = 148;
            }

            card.setPosition(-328 + num, 300);
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("props_banker_all_card", this.node).addChild(card);
          }
        }
        /**获取牌的点数资源 */


        getSpriteFrame(result) {
          let fileName = '';

          if (result === 0) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDAR_POKER0;
          } else if (result === 1) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDAR_POKER1;
          } else if (result === 2) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDAR_POKER2;
          } else if (result === 3) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDAR_POKER3;
          } else if (result === 4) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDAR_POKER4;
          } else if (result === 5) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDAR_POKER5;
          } else if (result === 6) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDAR_POKER6;
          }

          return (_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile(fileName).source;
        }

        bindUI() {
          this.propertyNode.props_banker_all_card.removeAllChildren();
          this.propertyNode.props_label_cardbanker_losenum.active = false;
          this.propertyNode.props_bankercard_num_query.active = false;
          this.propertyNode.props_spr_bankercard_num_bg.active = false;
          this.propertyNode.props_bankercard_type.active = false;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8412ea148e96d766d2884d666eb0dc15f5d01161.js.map