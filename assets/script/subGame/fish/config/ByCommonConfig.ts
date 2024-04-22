//系统配置

export const WIDTH = 1134;
export const HEIGHT = 640;

export const fishCommondConfig = {
  scene_size: { width: WIDTH, height: HEIGHT, },//场景大小
  bonding_size: { width: 1134, height: 640, },//子弹运动范围
  rotate_score_pos: { x: 200, y: 200, },//分数转圈的位置
  max_gold_num: 20,//一次最多显示的金币数量
  gold_distance: -20,//两金币之间的距离
  max_rate_show: 60,//大于等于这个倍数的鱼死亡时显示秒表分数效果
  show_add_score_time: 0.6,//显示秒表时长
  gold_move_v: 1200,//金币飞入玩家的速度
  gold_mus_id: 1002,//爆金币时的音效id
  gold_recl_id: 1003,//回收金币的音效id
  cut_scene_fish_vx: 10,//切换场景时鱼游动速度倍率
  spot_light_pos: { x: 960, y: 640, z: 1000, },//光源位置
  fish_shadow_alpha: 100,//鱼阴影透明值
  fish_light_distance: 60,//鱼距池底距离

  lock_time: 10,//锁定技能冷却时间
  battery_paohuo_src_id: 1000,//炮火资源id
  battery_am_src_id: 1002,//加减炮效果
  battery_lock_src_id: 1003,//锁定状态时炮的效果
  lock_src_id: 1004,//锁定鱼资源id
  battery_am_mus_id: 1004,//加减炮音效
  battery_change_mus_id: 1005,//更换炮声音
  battyer_egr: 1014,//能量炮资源id
}
