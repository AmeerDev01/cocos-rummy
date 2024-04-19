System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, fishMusicEffectConfig;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f1ae80y8gBFrpj4Xa6cnCzC", "ByMusicEffectConfig", undefined);

      /**
        声音特效配置表,音效链
        [1] : {
          id,音效链id
          mus_lst : {--音效集合
            loop,是否循环播放
            next_idx,下一音效,为-1时表示此音效链结束
            src_id,音效资源[BY_MUSIC_RES_CONFIG.lua]
            t,延迟时间
          },
        }
        [...] : {...}
       */
      _export("fishMusicEffectConfig", fishMusicEffectConfig = {
        [1]: {
          id: 1,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 6,
              t: 0
            }
          }
        },
        [2]: {
          id: 2,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 8,
              t: 0
            }
          }
        },
        [3]: {
          id: 3,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 13,
              t: 0
            }
          }
        },
        [4]: {
          id: 4,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 3,
              t: 0
            }
          }
        },
        [5]: {
          id: 5,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 11,
              t: 0
            },
            [2]: {
              loop: false,
              nxt_idx: -1,
              src_id: 18,
              t: 0
            }
          }
        },
        [6]: {
          id: 6,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 4,
              t: 0
            },
            [2]: {
              loop: false,
              nxt_idx: -1,
              src_id: 18,
              t: 0
            }
          }
        },
        [7]: {
          id: 7,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 10,
              t: 0
            },
            [2]: {
              loop: false,
              nxt_idx: -1,
              src_id: 18,
              t: 0
            }
          }
        },
        [8]: {
          id: 8,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 14,
              t: 0
            },
            [2]: {
              loop: false,
              nxt_idx: -1,
              src_id: 18,
              t: 0
            }
          }
        },
        [9]: {
          id: 9,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 15,
              t: 0
            },
            [2]: {
              loop: false,
              nxt_idx: -1,
              src_id: 18,
              t: 0
            }
          }
        },
        [10]: {
          id: 10,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 16,
              t: 0
            },
            [2]: {
              loop: false,
              nxt_idx: -1,
              src_id: 18,
              t: 0
            }
          }
        },
        [11]: {
          id: 11,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 7,
              t: 0
            },
            [2]: {
              loop: false,
              nxt_idx: -1,
              src_id: 18,
              t: 0
            }
          }
        },
        [12]: {
          id: 12,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 9,
              t: 0
            },
            [2]: {
              loop: false,
              nxt_idx: -1,
              src_id: 18,
              t: 0
            }
          }
        },
        [13]: {
          id: 13,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 12,
              t: 0
            },
            [2]: {
              loop: false,
              nxt_idx: -1,
              src_id: 18,
              t: 0
            }
          }
        },
        [14]: {
          id: 14,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 12,
              t: 0
            },
            [2]: {
              loop: false,
              nxt_idx: -1,
              src_id: 19,
              t: 0
            }
          }
        },
        [15]: {
          id: 15,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 5,
              t: 0
            },
            [2]: {
              loop: false,
              nxt_idx: -1,
              src_id: 18,
              t: 0
            }
          }
        },
        [16]: {
          id: 16,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 21,
              t: 0
            },
            [2]: {
              loop: false,
              nxt_idx: -1,
              src_id: 24,
              t: 0
            }
          }
        },
        [17]: {
          id: 17,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 2,
              t: 0
            }
          }
        },
        [18]: {
          id: 18,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 25,
              t: 0
            }
          }
        },
        [19]: {
          id: 19,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 26,
              t: 0
            },
            [2]: {
              loop: false,
              nxt_idx: -1,
              src_id: 25,
              t: 0
            }
          }
        },
        [20]: {
          id: 20,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 27,
              t: 0
            },
            [2]: {
              loop: false,
              nxt_idx: -1,
              src_id: 20,
              t: 0
            }
          }
        },
        [21]: {
          id: 21,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 22,
              t: 0
            },
            [2]: {
              loop: false,
              nxt_idx: -1,
              src_id: 23,
              t: 0
            },
            [3]: {
              loop: false,
              nxt_idx: -1,
              src_id: 15,
              t: 0
            }
          }
        },
        [22]: {
          id: 22,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 22,
              t: 0
            },
            [2]: {
              loop: false,
              nxt_idx: -1,
              src_id: 23,
              t: 0
            },
            [3]: {
              loop: false,
              nxt_idx: -1,
              src_id: 4,
              t: 0
            }
          }
        },
        [23]: {
          id: 23,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 17,
              t: 0
            },
            [2]: {
              loop: false,
              nxt_idx: -1,
              src_id: 7,
              t: 0
            }
          }
        },
        [24]: {
          id: 24,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 17,
              t: 0
            },
            [2]: {
              loop: false,
              nxt_idx: -1,
              src_id: 8,
              t: 0
            }
          }
        },
        [25]: {
          id: 25,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 17,
              t: 0
            },
            [2]: {
              loop: false,
              nxt_idx: -1,
              src_id: 15,
              t: 0
            }
          }
        },
        [26]: {
          id: 26,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 17,
              t: 0
            },
            [2]: {
              loop: false,
              nxt_idx: -1,
              src_id: 4,
              t: 0
            }
          }
        },
        [27]: {
          id: 27,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 17,
              t: 0
            },
            [2]: {
              loop: false,
              nxt_idx: -1,
              src_id: 6,
              t: 0
            }
          }
        },
        [28]: {
          id: 28,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 17,
              t: 0
            },
            [2]: {
              loop: false,
              nxt_idx: -1,
              src_id: 16,
              t: 0
            }
          }
        },
        [29]: {
          id: 29,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 1,
              t: 0
            }
          }
        },
        // --my self music
        [1000]: {
          id: 1000,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 1000,
              t: 0
            }
          }
        },
        [1001]: {
          id: 1001,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 1001,
              t: 0
            }
          }
        },
        [1002]: {
          id: 1002,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 1002,
              t: 0
            }
          }
        },
        [1003]: {
          id: 1003,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 1003,
              t: 0
            }
          }
        },
        [1004]: {
          id: 1004,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 1004,
              t: 0
            }
          }
        },
        [1005]: {
          id: 1005,
          mus_lst: {
            [1]: {
              loop: false,
              nxt_idx: -1,
              src_id: 1005,
              t: 0
            }
          }
        } // --end

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7de22f1e9260aae69cae4e1a75f98ef78e2371f4.js.map