System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, fishSkillConfig;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "48cb7MMRaFLppHZUb3qurAa", "BySkillConfig", undefined);

      /**
        技能配置，每项buf可能用的参数都不相同
       */
      _export("fishSkillConfig", fishSkillConfig = {
        [1]: {
          id: 1,
          key: "full_shake",
          desc: "全屏震动",
          loop: 3,
          t: 0.6,
          dx: 2,
          dy: 2
        },
        [3]: {
          id: 3,
          key: "line",
          desc: "鱼连线,蓝色",
          src_id: 1008
        },
        [4]: {
          id: 4,
          key: "line",
          desc: "鱼连线,黄色",
          src_id: 1009
        },
        [5]: {
          id: 5,
          key: "boom",
          desc: "大鱼爆炸特技1元宝",
          src_id_lst: [96]
        },
        [6]: {
          id: 6,
          key: "boom",
          desc: "大鱼爆炸特技2钻石",
          src_id_lst: [98, 99, 100, 101]
        },
        [7]: {
          id: 7,
          key: "boom",
          desc: "大鱼爆炸特技3元宝钻石花",
          src_id_lst: [112, 114, 98, 100, 101, 103]
        },
        [8]: {
          id: 8,
          key: "boom",
          desc: "大鱼爆炸特技4星星爆炸",
          src_id_lst: [104, 105, 106, 107]
        },
        [9]: {
          id: 9,
          key: "boom",
          desc: "大鱼爆炸特技5花",
          src_id_lst: [112, 113, 114, 115]
        },
        [10]: {
          id: 10,
          key: "boom",
          desc: "大鱼爆炸特技6冲击波",
          src_id_lst: [108]
        },
        [11]: {
          id: 11,
          key: "boom",
          desc: "大鱼爆炸特技6金币粒子",
          src_id_lst: [36]
        },
        [20]: {
          id: 20,
          key: "show_score",
          desc: "分数转盘1",
          src_id: 1012,
          spr_name: "dy_fish13.png"
        },
        [21]: {
          id: 21,
          key: "show_score",
          desc: "分数转盘2",
          src_id: 1012,
          spr_name: "dy_fish14.png"
        },
        [22]: {
          id: 22,
          key: "show_score",
          desc: "分数转盘3",
          src_id: 1012,
          spr_name: "dy_fish15.png"
        },
        [23]: {
          id: 23,
          key: "show_score",
          desc: "分数转盘4",
          src_id: 1012,
          spr_name: "dy_fish16.png"
        },
        [24]: {
          id: 24,
          key: "show_score",
          desc: "分数转盘5",
          src_id: 1012,
          spr_name: "dy_fish17.png"
        },
        [25]: {
          id: 25,
          key: "show_score",
          desc: "分数转盘6",
          src_id: 1012,
          spr_name: "dy_fish18.png"
        },
        [26]: {
          id: 26,
          key: "show_score",
          desc: "分数转盘7",
          src_id: 1012,
          spr_name: "dy_fish19.png"
        },
        [27]: {
          id: 27,
          key: "show_score",
          desc: "分数转盘8",
          src_id: 1012,
          spr_name: "dy_fish20.png"
        },
        [28]: {
          id: 28,
          key: "show_score",
          desc: "分数转盘9",
          src_id: 1012,
          spr_name: "dy_fish21.png"
        },
        [29]: {
          id: 29,
          key: "show_score",
          desc: "分数转盘10",
          src_id: 1012,
          spr_name: "dy_fish24.png"
        },
        [50]: {
          id: 50,
          key: "boss",
          desc: "章鱼海盗王来了",
          src_id_lst: [1011, 1010],
          icon_id_lst: [25]
        },
        [51]: {
          id: 51,
          key: "boss",
          desc: "骷髅海盗王来了",
          src_id_lst: [1011, 1010],
          icon_id_lst: [26]
        },
        [52]: {
          id: 52,
          key: "boss",
          desc: "黄金海盗船来了",
          src_id_lst: [1011, 1010],
          icon_id_lst: [27]
        },
        [55]: {
          id: 55,
          key: "changebgm",
          desc: "改变背景音",
          bgm_id: 8
        },
        [56]: {
          id: 56,
          key: "remumebgm",
          desc: "恢复背景音"
        },
        [100]: {
          id: 100,
          key: "add_word_buf",
          desc: "追加一个字体buf",
          pos: {
            x: 100,
            y: 100
          },
          fnt_src: "sss"
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bc8dcf19aed0f0df2d3c36d2f7f814bc54a2cce6.js.map