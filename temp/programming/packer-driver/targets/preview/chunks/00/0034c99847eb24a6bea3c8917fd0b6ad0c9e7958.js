System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, fishBackgroundConfig;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cfcb3/qKQVJ9qyN1bkxLDnX", "ByBackgroundConfig", undefined);

      /**
        背景配置
        common : {
          mus_id,切换时音效id
          wave_src_id,切换水波资源id
          cut_t,场景切换时间
        }
      
        data : {--背景场景集合
      	
          [1] : {--一个背景场景
            id,场景id
            bk_mus_id,背景音
            bk_pic_id,背景图
            view_inf : {
              [1] : {
                src_id,资源id [spr_ani_config.lua]
                pos : {x,y},坐标
              },
      
              [...] : {...},
            },
          },
      
          [...] : {...},
        }
       */
      _export("fishBackgroundConfig", fishBackgroundConfig = {
        common: {
          mus_id: 3,
          wave_src_id: 70,
          cut_t: 5
        },
        data: {
          [1]: {
            id: 1,
            bk_mus_id: 1,
            bk_pic_id: 41,
            view_inf: {
              [1]: {
                src_id: 48,
                pos: {
                  x: 64,
                  y: 233
                }
              },
              [2]: {
                src_id: 49,
                pos: {
                  x: 1056,
                  y: 115
                }
              },
              [3]: {
                src_id: 50,
                pos: {
                  x: 369,
                  y: 325
                }
              },
              [4]: {
                src_id: 51,
                pos: {
                  x: 970,
                  y: 249
                }
              },
              [5]: {
                src_id: 71,
                pos: {
                  x: 246,
                  y: 260
                }
              },
              [6]: {
                src_id: 71,
                pos: {
                  x: 795,
                  y: 516
                }
              }
            }
          },
          [2]: {
            id: 2,
            bk_mus_id: 3,
            bk_pic_id: 43,
            view_inf: {
              [1]: {
                src_id: 54,
                pos: {
                  x: 157,
                  y: 269
                }
              },
              [2]: {
                src_id: 55,
                pos: {
                  x: 891,
                  y: 299
                }
              },
              [3]: {
                src_id: 56,
                pos: {
                  x: 990,
                  y: 105
                }
              },
              [4]: {
                src_id: 57,
                pos: {
                  x: 601,
                  y: 480
                }
              },
              [5]: {
                src_id: 71,
                pos: {
                  x: 118,
                  y: 300
                }
              },
              [6]: {
                src_id: 71,
                pos: {
                  x: 965,
                  y: 200
                }
              }
            }
          },
          [3]: {
            id: 3,
            bk_mus_id: 5,
            bk_pic_id: 45,
            view_inf: {
              [1]: {
                src_id: 61,
                pos: {
                  x: 1037,
                  y: 509
                }
              },
              [2]: {
                src_id: 62,
                pos: {
                  x: 713,
                  y: 291
                }
              },
              [3]: {
                src_id: 63,
                pos: {
                  x: 351,
                  y: 229
                }
              },
              [4]: {
                src_id: 71,
                pos: {
                  x: 295,
                  y: 300
                }
              },
              [5]: {
                src_id: 71,
                pos: {
                  x: 980,
                  y: 100
                }
              }
            }
          },
          [4]: {
            id: 4,
            bk_mus_id: 2,
            bk_pic_id: 42,
            view_inf: {
              [1]: {
                src_id: 52,
                pos: {
                  x: 749,
                  y: 341
                }
              },
              [2]: {
                src_id: 53,
                pos: {
                  x: 513,
                  y: 450
                }
              },
              [3]: {
                src_id: 71,
                pos: {
                  x: 180,
                  y: 150
                }
              },
              [4]: {
                src_id: 71,
                pos: {
                  x: 788,
                  y: 100
                }
              }
            }
          },
          [5]: {
            id: 5,
            bk_mus_id: 4,
            bk_pic_id: 44,
            view_inf: {
              [1]: {
                src_id: 58,
                pos: {
                  x: 1093,
                  y: 241
                }
              },
              [2]: {
                src_id: 59,
                pos: {
                  x: 579,
                  y: 390
                }
              },
              [3]: {
                src_id: 60,
                pos: {
                  x: 134,
                  y: 207
                }
              },
              [4]: {
                src_id: 71,
                pos: {
                  x: 285,
                  y: 240
                }
              },
              [5]: {
                src_id: 71,
                pos: {
                  x: 1080,
                  y: 440
                }
              }
            }
          },
          [6]: {
            id: 6,
            bk_mus_id: 6,
            bk_pic_id: 46,
            view_inf: {
              [1]: {
                src_id: 64,
                pos: {
                  x: 770,
                  y: 172
                }
              },
              [2]: {
                src_id: 65,
                pos: {
                  x: 345,
                  y: 90
                }
              },
              [3]: {
                src_id: 66,
                pos: {
                  x: 703,
                  y: 365
                }
              },
              [4]: {
                src_id: 71,
                pos: {
                  x: 200,
                  y: 50
                }
              },
              [5]: {
                src_id: 71,
                pos: {
                  x: 980,
                  y: 100
                }
              }
            }
          },
          [7]: {
            id: 7,
            bk_mus_id: 4,
            bk_pic_id: 44,
            view_inf: {
              [1]: {
                src_id: 58,
                pos: {
                  x: 1093,
                  y: 241
                }
              },
              [2]: {
                src_id: 59,
                pos: {
                  x: 579,
                  y: 390
                }
              },
              [3]: {
                src_id: 60,
                pos: {
                  x: 134,
                  y: 207
                }
              },
              [4]: {
                src_id: 71,
                pos: {
                  x: 285,
                  y: 240
                }
              },
              [5]: {
                src_id: 71,
                pos: {
                  x: 1080,
                  y: 440
                }
              }
            }
          },
          [8]: {
            id: 8,
            bk_mus_id: 5,
            bk_pic_id: 45,
            view_inf: {
              [1]: {
                src_id: 61,
                pos: {
                  x: 1037,
                  y: 509
                }
              },
              [2]: {
                src_id: 62,
                pos: {
                  x: 713,
                  y: 291
                }
              },
              [3]: {
                src_id: 63,
                pos: {
                  x: 351,
                  y: 229
                }
              },
              [4]: {
                src_id: 71,
                pos: {
                  x: 295,
                  y: 300
                }
              },
              [5]: {
                src_id: 71,
                pos: {
                  x: 980,
                  y: 100
                }
              }
            }
          },
          [9]: {
            id: 9,
            bk_mus_id: 7,
            bk_pic_id: 47,
            view_inf: {
              [1]: {
                src_id: 67,
                pos: {
                  x: 981,
                  y: 257
                }
              },
              [2]: {
                src_id: 68,
                pos: {
                  x: 657,
                  y: 450
                }
              },
              [3]: {
                src_id: 69,
                pos: {
                  x: 526,
                  y: 205
                }
              },
              [4]: {
                src_id: 71,
                pos: {
                  x: 180,
                  y: 100
                }
              },
              [5]: {
                src_id: 71,
                pos: {
                  x: 860,
                  y: 200
                }
              }
            }
          },
          [10]: {
            id: 10,
            bk_mus_id: 7,
            bk_pic_id: 47,
            view_inf: {
              [1]: {
                src_id: 67,
                pos: {
                  x: 981,
                  y: 257
                }
              },
              [2]: {
                src_id: 68,
                pos: {
                  x: 657,
                  y: 450
                }
              },
              [3]: {
                src_id: 69,
                pos: {
                  x: 526,
                  y: 205
                }
              },
              [4]: {
                src_id: 71,
                pos: {
                  x: 180,
                  y: 100
                }
              },
              [5]: {
                src_id: 71,
                pos: {
                  x: 860,
                  y: 200
                }
              }
            }
          },
          [11]: {
            id: 11,
            bk_mus_id: 3,
            bk_pic_id: 43,
            view_inf: {
              [1]: {
                src_id: 54,
                pos: {
                  x: 157,
                  y: 269
                }
              },
              [2]: {
                src_id: 55,
                pos: {
                  x: 891,
                  y: 299
                }
              },
              [3]: {
                src_id: 56,
                pos: {
                  x: 990,
                  y: 105
                }
              },
              [4]: {
                src_id: 57,
                pos: {
                  x: 601,
                  y: 480
                }
              },
              [5]: {
                src_id: 71,
                pos: {
                  x: 118,
                  y: 300
                }
              },
              [6]: {
                src_id: 71,
                pos: {
                  x: 965,
                  y: 200
                }
              }
            }
          },
          [12]: {
            id: 12,
            bk_mus_id: 6,
            bk_pic_id: 46,
            view_inf: {
              [1]: {
                src_id: 64,
                pos: {
                  x: 770,
                  y: 172
                }
              },
              [2]: {
                src_id: 65,
                pos: {
                  x: 345,
                  y: 90
                }
              },
              [3]: {
                src_id: 66,
                pos: {
                  x: 703,
                  y: 365
                }
              },
              [4]: {
                src_id: 71,
                pos: {
                  x: 200,
                  y: 50
                }
              },
              [5]: {
                src_id: 71,
                pos: {
                  x: 980,
                  y: 100
                }
              }
            }
          },
          [13]: {
            id: 13,
            bk_mus_id: 6,
            bk_pic_id: 46,
            view_inf: {
              [1]: {
                src_id: 64,
                pos: {
                  x: 770,
                  y: 172
                }
              },
              [2]: {
                src_id: 65,
                pos: {
                  x: 345,
                  y: 90
                }
              },
              [3]: {
                src_id: 66,
                pos: {
                  x: 703,
                  y: 365
                }
              },
              [4]: {
                src_id: 71,
                pos: {
                  x: 200,
                  y: 50
                }
              },
              [5]: {
                src_id: 71,
                pos: {
                  x: 980,
                  y: 100
                }
              }
            }
          },
          [14]: {
            id: 14,
            bk_mus_id: 4,
            bk_pic_id: 44,
            view_inf: {
              [1]: {
                src_id: 58,
                pos: {
                  x: 1093,
                  y: 241
                }
              },
              [2]: {
                src_id: 59,
                pos: {
                  x: 579,
                  y: 390
                }
              },
              [3]: {
                src_id: 60,
                pos: {
                  x: 134,
                  y: 207
                }
              },
              [4]: {
                src_id: 71,
                pos: {
                  x: 285,
                  y: 240
                }
              },
              [5]: {
                src_id: 71,
                pos: {
                  x: 1080,
                  y: 440
                }
              }
            }
          },
          [15]: {
            id: 15,
            bk_mus_id: 7,
            bk_pic_id: 47,
            view_inf: {
              [1]: {
                src_id: 67,
                pos: {
                  x: 981,
                  y: 257
                }
              },
              [2]: {
                src_id: 68,
                pos: {
                  x: 657,
                  y: 450
                }
              },
              [3]: {
                src_id: 69,
                pos: {
                  x: 526,
                  y: 205
                }
              },
              [4]: {
                src_id: 71,
                pos: {
                  x: 180,
                  y: 100
                }
              },
              [5]: {
                src_id: 71,
                pos: {
                  x: 860,
                  y: 200
                }
              }
            }
          },
          [16]: {
            id: 16,
            bk_mus_id: 7,
            bk_pic_id: 47,
            view_inf: {
              [1]: {
                src_id: 67,
                pos: {
                  x: 981,
                  y: 257
                }
              },
              [2]: {
                src_id: 68,
                pos: {
                  x: 657,
                  y: 450
                }
              },
              [3]: {
                src_id: 69,
                pos: {
                  x: 526,
                  y: 205
                }
              },
              [4]: {
                src_id: 71,
                pos: {
                  x: 180,
                  y: 100
                }
              },
              [5]: {
                src_id: 71,
                pos: {
                  x: 860,
                  y: 200
                }
              }
            }
          }
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0034c99847eb24a6bea3c8917fd0b6ad0c9e7958.js.map