System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, config, DeskStatus, _crd, calCardPoint, getPlayer, clearInitStateType, splitChip, getOptimalCardGroup, permutations, calNum, getRoomUpper;

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "./config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInitStateType(extras) {
    _reporterNs.report("InitStateType", "./store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardGroup(extras) {
    _reporterNs.report("CardGroup", "./type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardItem(extras) {
    _reporterNs.report("CardItem", "./type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeskStatus(extras) {
    _reporterNs.report("DeskStatus", "./type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "./type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomInfo(extras) {
    _reporterNs.report("RoomInfo", "./type", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      config = _unresolved_2.default;
    }, function (_unresolved_3) {
      DeskStatus = _unresolved_3.DeskStatus;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "370ccO6Fi5OPIWozjAw7Qf+", "qiuqiu_tool", undefined);

      _export("calCardPoint", calCardPoint = (value1, value2) => {
        const sum = value1.upFace + value1.downFace + value2.upFace + value2.downFace;
        return sum % 10;
      });

      _export("getPlayer", getPlayer = (players, uid) => {
        return players.find(v => v && v.uid === uid);
      });

      _export("clearInitStateType", clearInitStateType = data => {
        data.playerMap = new Array((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
          error: Error()
        }), config) : config).seatNumber).fill(null);
        data.deskStatus = (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
          error: Error()
        }), DeskStatus) : DeskStatus).WAITING;
        data.lastActiveSeatIndex = -1;
        data.currActiveSeatIndex = -1;
        data.gold = 0;
        data.betAmount = 0;
        data.totalBetAmount = 0;
      });
      /**
       * 根据传入金额，拆分多个筹码
       * @param paramValue 
       * @returns 
       */


      _export("splitChip", splitChip = paramValue => {
        const arr = [];

        const split = value => {
          for (let i = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).chips.length - 1; i >= 0; i--) {
            const chip = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).chips[i];

            if (value >= chip.value) {
              value -= chip.value;
              arr.push(chip.value);

              if (value > 0) {
                split(value);
              }

              break;
            }
          }
        };

        split(paramValue);
        return arr;
      });

      _export("getOptimalCardGroup", getOptimalCardGroup = cardItems => {
        // 找出所有组合
        const newArr = permutations(cardItems).map(v => {
          const arr = v;
          const cardItems = [arr.shift(), arr.shift()];
          let sum = calNum(cardItems);
          const cardGroup = {
            cardItems,
            sum: sum
          };
          sum = calNum(arr);
          const cardGroup1 = {
            cardItems: arr,
            sum: sum
          };
          return [cardGroup, cardGroup1];
        }); // 排序

        newArr.sort((v1, v2) => {
          let res = v2[0].sum - v1[0].sum;

          if (res === 0) {
            res = v2[1].sum - v1[1].sum;
          }

          return res;
        });
        return newArr[0];
      });

      _export("permutations", permutations = arr => {
        let len = arr.length;
        let res = []; // 所有排列结果

        /**
         * 【全排列算法】
         * 说明：arrange用来对arr中的元素进行排列组合，将排列好的各个结果存在新数组中
         * @param tempArr：排列好的元素
         * @param leftArr：待排列元素
         */

        let arrange = (tempArr, leftArr) => {
          if (tempArr.length === len) {
            // 这里就是递归结束的地方
            res.push(tempArr); // 得到全排列的每个元素都是数组
          } else {
            leftArr.forEach((item, index) => {
              let temp = [].concat(leftArr);
              temp.splice(index, 1); // 此时，第一个参数是当前分离出的元素所在数组；第二个参数temp是传入的leftArr去掉第一个后的结果

              arrange(tempArr.concat(item), temp); // 这里使用了递归
            });
          }
        };

        arrange([], arr);
        return res;
      });

      _export("calNum", calNum = cardItems => {
        let sum = 0;
        cardItems.forEach(v => sum += v.downFace + v.upFace);
        return sum % 10;
      });

      _export("getRoomUpper", getRoomUpper = roomInfo => {
        return roomInfo.upper > 0 ? roomInfo.upper : 10000000000000000;
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2e8e5d20e50e50580bc7350dd6bfa9812452939c.js.map