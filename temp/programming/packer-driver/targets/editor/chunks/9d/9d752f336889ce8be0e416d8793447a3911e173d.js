System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, fishLabelFntConfig;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "83707iLmexEd4hsPBjDWywg", "ByFishLabelFntConfig", undefined);

      /**
        金钱字体显示配置
        id,唯一标识
        desc,描述信息
        act_id,动作配置id
        src_id,字体资源
       */
      _export("fishLabelFntConfig", fishLabelFntConfig = {
        [1]: {
          id: 1,
          desc: "自己金币显示字体",
          act_id: 4,
          src_id: 4
        },
        [2]: {
          id: 2,
          desc: "别人金币显示字体",
          act_id: 4,
          src_id: 5
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9d752f336889ce8be0e416d8793447a3911e173d.js.map