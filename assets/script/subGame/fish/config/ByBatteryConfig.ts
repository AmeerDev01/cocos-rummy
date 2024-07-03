/**
  炮台配置
  id:索引id
  send_v:子弹发射速度
  bullet :{ 子弹，炮管对应关系
    [1]:自己子弹id BY_BULLET_CONFIG.lua,[2]：别人子弹id,
  }
  defnt:{鱼死亡时，在屏幕上显示的分数字体
    [1]:自己打死显示
    [2]:别人打死显示
  }
  offset_dis:子弹发射点偏移距离
  mus_eff_id:发射子弹声音
  lock_line_key:锁定线资源
  paohuo_offset:炮火偏移距离
 */
export const fishBatteryConfig = {
  [0]: { id: 0, desc: "默认炮台", send_v: 0.15, bullet: [0, 0], defnt: [1, 2], offset_dis: 90, paohuo_offset: 125, mus_eff_lst: [1001], lock_line_key: "lock_1", },
  [1]: { id: 1, desc: "超人归来", send_v: 0.15, bullet: [1, 1], defnt: [1, 2], offset_dis: 90, paohuo_offset: 145, mus_eff_lst: [1001], lock_line_key: "lock_1", },
  [2]: { id: 2, desc: "黑暗骑士", send_v: 0.15, bullet: [2, 2], defnt: [1, 2], offset_dis: 90, paohuo_offset: 125, mus_eff_lst: [1001], lock_line_key: "lock_1", },
  [3]: { id: 3, desc: "钢铁之躯", send_v: 0.15, bullet: [3, 3], defnt: [1, 2], offset_dis: 90, paohuo_offset: 145, mus_eff_lst: [1001], lock_line_key: "lock_1", },
  [4]: { id: 4, desc: "正义盟友", send_v: 0.15, bullet: [4, 4], defnt: [1, 2], offset_dis: 90, paohuo_offset: 145, mus_eff_lst: [1001], lock_line_key: "lock_1", },
  [5]: { id: 5, desc: "雷神之锤", send_v: 0.15, bullet: [5, 5], defnt: [1, 2], offset_dis: 90, paohuo_offset: 135, mus_eff_lst: [1001], lock_line_key: "lock_1", },
  [6]: { id: 6, desc: "狮吼礼炮", send_v: 0.15, bullet: [6, 6], defnt: [1, 2], offset_dis: 90, paohuo_offset: 145, mus_eff_lst: [1001], lock_line_key: "lock_1", },
  [7]: { id: 7, desc: "霸之龙炮", send_v: 0.15, bullet: [7, 7], defnt: [1, 2], offset_dis: 90, paohuo_offset: 145, mus_eff_lst: [1001], lock_line_key: "lock_1", },
}