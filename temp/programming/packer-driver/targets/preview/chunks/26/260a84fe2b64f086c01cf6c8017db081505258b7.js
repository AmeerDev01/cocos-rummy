System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, fishActionConfig;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "91621qjdhlO3o6Ivzj5jQhl", "ByActionConfig", undefined);

      /**
        动作效果配置,动作链
        id: 索引
        init_param : {起始参数，此项不填，则为默认
          angle,初始旋转多少度
          sax,初始x方向缩放因子 0~1
          say,初始y入射缩放因子 0~1
          skx,初始x方向倾斜角度 0~360
          sky,初始y方向倾斜角度 0~360
          srkx,初始x方向旋转倾斜角度 0~360
          srky,初始y方向旋转倾斜角度 0~360
          zorder,初始化zorder
        }
        eff_lst : {--动作链
          [x] : {
            key,动作id
            param : {--动作对应参数
            	
            }
            loop,播放次数,-1为无限循环
            breeserve,是否生成应该动作的反向动作，指定后会生成两个动作，一个正向一个反向，有些动作不支持反向，自动忽略此参数
            nxt_idx,下一动作索引，-1表示该动作链结束，非-1时nxt_idx表示下一动作索引，此时会视下一动作为同一动作链
          }
        }
      */
      _export("fishActionConfig", fishActionConfig = [// lua的数组坐标从1开始的，所以这里的第一个加上一个空
      {}, {
        "eff_lst": [{
          "breserver": true,
          "key": "tint_by",
          "loop": -1,
          "nxt_idx": -1,
          "param": {
            "b": 255,
            "g": 255,
            "r": 0,
            "t": 0.5
          }
        }],
        "id": 1,
        "init_param": []
      }, {
        "eff_lst": [{
          "breserver": true,
          "key": "tint_by",
          "loop": 6,
          "nxt_idx": -1,
          "param": {
            "b": 255,
            "g": 255,
            "r": 0,
            "t": 0.05
          }
        }],
        "id": 2,
        "init_param": {
          "zorder": 100000
        }
      }, {
        "eff_lst": [{
          "breserver": false,
          "key": "delay",
          "loop": 1,
          "nxt_idx": -1,
          "param": {
            "t": 0.9
          }
        }],
        "id": 3,
        "init_param": []
      }, {
        "eff_lst": [{
          "breserver": true,
          "key": "move_by",
          "loop": 1,
          "nxt_idx": -1,
          "param": {
            "pos": {
              "x": 0,
              "y": -100
            },
            "t": 0.12
          }
        }, {
          "breserver": false,
          "key": "delay",
          "loop": 1,
          "nxt_idx": -1,
          "param": {
            "t": 0.8
          }
        }],
        "id": 4,
        "init_param": []
      }, {
        "eff_lst": [{
          "breserver": true,
          "key": "move_by",
          "loop": -1,
          "nxt_idx": -1,
          "param": {
            "pos": {
              "x": 0,
              "y": -20
            },
            "t": 0.5
          }
        }],
        "id": 5,
        "init_param": []
      }, {
        "eff_lst": [{
          "breserver": false,
          "key": "ffshake",
          "loop": 1,
          "nxt_idx": -1,
          "param": {
            "dx": 20,
            "dy": 20,
            "t": 1
          }
        }],
        "id": 6,
        "init_param": []
      }, {
        "eff_lst": [{
          "breserver": false,
          "key": "circle",
          "loop": -1,
          "nxt_idx": -1,
          "param": {
            "angle": 360,
            "pos": {
              "x": 180,
              "y": 150
            },
            "sl": 0,
            "t": 3
          }
        }],
        "id": 7,
        "init_param": []
      }, {
        "eff_lst": [{
          "breserver": true,
          "key": "rotate_by",
          "loop": 5,
          "nxt_idx": -1,
          "param": {
            "angle": 60,
            "t": 0.5
          }
        }],
        "id": 8,
        "init_param": []
      }, {
        "eff_lst": [{
          "breserver": false,
          "key": "rotate_by",
          "loop": -1,
          "nxt_idx": -1,
          "param": {
            "angle": 360,
            "t": 0.3
          }
        }],
        "id": 9,
        "init_param": []
      }, {
        "eff_lst": [{
          "breserver": false,
          "key": "delay",
          "loop": 1,
          "nxt_idx": -1,
          "param": {
            "sx": 1.2,
            "sy": 1.2,
            "t": 2
          }
        }],
        "id": 10,
        "init_param": {
          "sax": 1.8,
          "say": 1.8
        }
      }, {
        "eff_lst": [{
          "breserver": false,
          "key": "delay",
          "loop": 1,
          "nxt_idx": -1,
          "param": {
            "sx": 1.2,
            "sy": 1.2,
            "t": 1
          }
        }],
        "id": 11,
        "init_param": {
          "sax": 2,
          "say": 2
        }
      }, {
        "eff_lst": [{
          "breserver": false,
          "key": "delay",
          "loop": 1,
          "nxt_idx": -1,
          "param": {
            "sx": 1.2,
            "sy": 1.2,
            "t": 1.5
          }
        }],
        "id": 12,
        "init_param": {
          "sax": 1.5,
          "say": 1.5
        }
      }, {
        "eff_lst": [{
          "breserver": false,
          "key": "scale_by",
          "loop": 1,
          "nxt_idx": -1,
          "param": {
            "sx": 1.5,
            "sy": 1.5,
            "t": 5
          }
        }],
        "id": 13,
        "init_param": []
      }, {
        "eff_lst": [{
          "breserver": false,
          "key": "rotate_by",
          "loop": -1,
          "nxt_idx": -1,
          "param": {
            "angle": 360,
            "t": 2
          }
        }],
        "id": 14,
        "init_param": []
      }, {
        "eff_lst": [{
          "breserver": false,
          "key": "delay",
          "loop": 1,
          "nxt_idx": -1,
          "param": {
            "sx": 1.2,
            "sy": 1.2,
            "t": 2.5
          }
        }, {
          "breserver": false,
          "key": "rotate_by",
          "loop": 3,
          "nxt_idx": -1,
          "param": {
            "angle": 360,
            "t": 1.5
          }
        }],
        "id": 15,
        "init_param": {
          "sax": 1.8,
          "say": 1.8
        }
      }, {
        "eff_lst": [],
        "id": 16,
        "init_param": {
          "sax": 0.5,
          "say": 0.5
        }
      }, {
        "eff_lst": [{
          "breserver": false,
          "key": "rotate_by",
          "loop": -1,
          "nxt_idx": -1,
          "param": {
            "angle": -360,
            "t": 1.5
          }
        }],
        "id": 17,
        "init_param": []
      }, {
        "eff_lst": [{
          "breserver": false,
          "key": "circle",
          "loop": -1,
          "nxt_idx": -1,
          "param": {
            "angle": -360,
            "pos": {
              "x": -180,
              "y": 150
            },
            "sl": 0,
            "t": 3
          }
        }],
        "id": 18,
        "init_param": []
      }, {
        "eff_lst": [],
        "id": 19,
        "init_param": {
          "sax": 0.3,
          "say": 0.3
        }
      }, {
        "eff_lst": [],
        "id": 20,
        "init_param": {
          "sax": 0.7,
          "say": 0.7
        }
      }, {
        "eff_lst": [{
          "breserver": false,
          "key": "delay",
          "loop": 1,
          "nxt_idx": -1,
          "param": {
            "t": 2
          }
        }],
        "id": 21,
        "init_param": []
      }, {
        "eff_lst": [{
          "breserver": false,
          "key": "rotate_by",
          "loop": -1,
          "nxt_idx": -1,
          "param": {
            "angle": 360,
            "t": 1.1
          }
        }],
        "id": 22,
        "init_param": {
          "sax": 0.3,
          "say": 0.3
        }
      }, {
        "eff_lst": [{
          "breserver": false,
          "key": "rotate_by",
          "loop": -1,
          "nxt_idx": -1,
          "param": {
            "angle": 360,
            "t": 1.4
          }
        }],
        "id": 23,
        "init_param": {
          "sax": 0.5,
          "say": 0.5
        }
      }, {
        "eff_lst": [{
          "breserver": false,
          "key": "rotate_by",
          "loop": -1,
          "nxt_idx": -1,
          "param": {
            "angle": 360,
            "t": 1.7
          }
        }],
        "id": 24,
        "init_param": {
          "sax": 0.7,
          "say": 0.7
        }
      }, {
        "eff_lst": [{
          "breserver": false,
          "key": "delay",
          "loop": 1,
          "nxt_idx": -1,
          "param": {
            "t": 1.5
          }
        }],
        "id": 25,
        "init_param": []
      }]);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=260a84fe2b64f086c01cf6c8017db081505258b7.js.map