
/**
  金币配置
  id : 唯一标识符，
  desc: 描述信息
  src_id:资源id
  gold_num:一个金币代表的数字
  act_id:动作id
 */
export const fishGoldConfig = {
  [1]: {
    id: 1,
    desc: "金币特效",
    gold_num: 300,
    size: { width: 50, height: 50 },
    view_inf: {
      [1]: { src_id: 1005, act_id: -1, },
      [2]: { src_id: 1006, act_id: 3, },
      [3]: { src_id: 1007, act_id: -1, },
    },
  },
}