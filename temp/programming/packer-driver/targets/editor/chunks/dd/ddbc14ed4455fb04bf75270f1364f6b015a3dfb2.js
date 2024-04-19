System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, _crd, DataKeyType, useMock, mockData, dataCacheNackUp, dataCache, resetData, setData, refreshData;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2b39ahIDdxHtbWh52Is3nTn", "dataTransfer", undefined);

      __checkObsolete__(['instantiate']);

      _export("DataKeyType", DataKeyType = /*#__PURE__*/function (DataKeyType) {
        DataKeyType["ROLLER_STOP_INDEX_ID"] = "ROLLER_STOP_INDEX_ID";
        DataKeyType["BALANCE"] = "BALANCE";
        DataKeyType["ICON_EFFECT_DATA"] = "ICON_EFFECT_DATA";
        DataKeyType["PROFIT_MULTIPLE"] = "PROFIT_MULTIPLE";
        DataKeyType["GAME_TYPE"] = "GAME_TYPE";
        DataKeyType["AWARD_INFO"] = "AWARD_INFO";
        DataKeyType["SUBGAME_TIMES"] = "SUBGAME_TIMES";
        DataKeyType["PROFIT_AMOUNT"] = "PROFIT_AMOUNT";
        DataKeyType["FREE_GAME_AMOUNT"] = "FREE_GAME_AMOUNT";
        return DataKeyType;
      }({}));

      _export("useMock", useMock = false);

      mockData = {
        "dl": {
          "si": [{
            "bl": 5695641,
            "blab": 5694591,
            "blb": 5694591,
            "bubble": 0,
            "change": {},
            "cs": 0,
            "ctw": 0,
            "esb": {},
            "fireRingSwitch": 0,
            "fixedChessboardIcon": [],
            "freeCount": 3,
            "freeGameAmount": 1050,
            "freegame": {},
            "gameType": 2,
            "iconStay": 0,
            "indexGameType": 0,
            "lw": {
              "1": 1050
            },
            "magnification": 525,
            "np": 1040,
            "rl": [[6, 2, 3], [18], [6, 3, 2]],
            "rollerId": [3, 24, 45],
            "sc": 0,
            "sgb": 0,
            "tb": 2,
            "tbb": 0,
            "totalFreeGameCount": 0,
            "tw": 1050,
            "wp": {
              "1": [[0, 0], [1, 0], [2, 0]]
            }
          }]
        }
      }; // "dl": {
      //   "si": [
      //     {
      //       "bl": 2310,
      //       "blab": 2310,
      //       "blb": 2310,
      //       "bubble": 0,
      //       "cs": 0,
      //       "ctw": 0,
      //       "fireRingSwitch": 0,
      //       "fixedChessboardIcon": [],
      //       "freeCount": 6,
      //       "freeGameAmount": 1830,
      //       "gameType": 2,
      //       "iconStay": 0,
      //       "indexGameType": 0,
      //       "lw": {
      //         "6": 0,
      //         "BONUS": 1500
      //       },
      //       "magnification": 0,
      //       "np": 0,
      //       "sc": 1,
      //       "sgb": 0,
      //       "tb": 0,
      //       "tbb": 0,
      //       "tw": 1500
      //     }
      //   ]
      // }

      /**此数据用于缓存，正常情况下，游戏初始化、或skt返回数据之后就应该更新这个值，在下一次更新之前，此值不应该变化
       * 
       * 为什么不用store呢，因为store的值一般和界面关联，数据一变更就有视图变化，但缓存数据没有，主要考虑到有特效缓动，要延迟更新
       */

      dataCacheNackUp = {
        dl: {
          si: [{
            bl: 0,
            blab: 99975,
            blb: 100000,
            bubble: 0,
            cs: 0,
            ctw: 0,
            fireRingSwitch: 0,
            freeCount: 0,
            freeGameAmount: 0,
            gameType: 0,
            iconStay: 0,
            indexGameType: 0,
            lw: {},
            magnification: 0,
            np: 0,
            rl: [[7, 3, 1], [7, 3, 1], [7, 3, 1], [7, 3, 1], [7, 3, 1]],
            rollerId: [64, 3, 7, 45, 26],
            sc: 0,
            sgb: 0,
            tb: 1,
            tbb: 25,
            tw: 0,
            wp: {}
          }]
        }
      };
      dataCache = instantiate(dataCacheNackUp);
      /**重置数据 */

      _export("resetData", resetData = () => {
        dataCache = instantiate(dataCacheNackUp);
      });
      /**用于手动更新某个值，一般用于初始化游戏时候局部变量更新 */


      _export("setData", setData = (key, value) => {
        // console.log(key, value)
        if (useMock) {
          return;
        }

        const si = (useMock ? mockData : dataCache).dl.si[0];
        si[key] = value;
      });
      /**刷新缓存数据 */


      _export("refreshData", refreshData = data => {
        if (!useMock) {
          dataCache = data;
        } // console.log('dataCache', dataCache.dl.si[0])

      });

      _export("default", dataKey => {
        // window.setTimeout(() => {
        //   useMock = true
        //   console.log('useMock', useMock)
        // }, 5000)
        if (!dataCache) {
          console.error("dataCache is null");
          throw 'dataCache is null';
        }

        const si = (useMock ? mockData : dataCache).dl.si[0]; // console.log(dataKey, si)
        // console.log('gameType', si.gameType)

        switch (dataKey) {
          case DataKeyType.ROLLER_STOP_INDEX_ID:
            return si.rollerId;

          case DataKeyType.ICON_EFFECT_DATA:
            const wp = si.wp;
            const result = [];

            for (let key in wp) {
              result.push(wp[key]);
            }

            return result;

          case DataKeyType.BALANCE:
            return si.bl;

          case DataKeyType.PROFIT_MULTIPLE:
            return si.magnification;

          case DataKeyType.GAME_TYPE:
            return si.gameType;

          case DataKeyType.AWARD_INFO:
            return si.lw;

          case DataKeyType.SUBGAME_TIMES:
            return si.freeCount;

          case DataKeyType.PROFIT_AMOUNT:
            return si.tw;

          case DataKeyType.FREE_GAME_AMOUNT:
            return si.freeGameAmount;
        } // if (dataKey === DataKeyType.ROLLER_STOP_INDEX_ID) {
        //   return si.rollerId
        // }
        // if (dataKey === DataKeyType.ICON_EFFECT_DATA) {
        //   const wp = si.wp
        //   const result: number[][] = []
        //   for (let key in wp) {
        //     result.push(wp[key])
        //   }
        //   return result
        // }
        // if (dataKey === DataKeyType.PROFIT_MULTIPLE) {
        // }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ddbc14ed4455fb04bf75270f1364f6b015a3dfb2.js.map