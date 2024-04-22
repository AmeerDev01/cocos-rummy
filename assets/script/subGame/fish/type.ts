export type Player = {
  uid: string
  nickname: string
  head: number
  seatId: number
  vipLevel: number
  gold: number,
  /**是否能量炮 */
  isPowerBattery: boolean
  /**是否离线 0：在线 1：离线 */
  offline: number,
  /**剩余子弹 */
  bullet: number
  batteryId: number
  batteryScore: number
  /**是否自己 */
  isSelf: boolean
}

export type RoomTypeDetailInfo = {
  type: number,
  typeName: string,
  rooms: RoomInfo[]
}
export type RoomInfo = {
  /**房间id */
  roomId: number;
  /**房间名称 */
  name: string;
  /**房间类型 */
  type: number;
  /**房间最大人数 */
  maxNum: number;
  /**空闲状态人数 */
  free: number;
  /**普通状态人数 */
  general: number;
  /**拥挤状态人数 */
  crowded: number;
  /**进入下限 */
  lower: number;
  /**进入上限 */
  upper: number;
  /**金币比例 */
  proportionGold: number;
  /**筹码比例 */
  proportionChips: number;
  /**游戏底分 */
  minOne: number;
  /**每桌椅子数 */
  tabble: number;
  /**单局台费 */
  afee: number;
  /**进入类型（0点击入座，1自动分配） */
  inType: number;
  /**玩家人数 */
  playerNum: number;
  /**状态(空闲,普通,拥挤,爆满) */
  status: string;
  /**展示的属性名称 */
  displayNames: string;
  /**展示的属性名称占位符 */
  placeHolder: string;
}

export type EnterGameVo = {
  playerId: string,
  rooms: RoomInfo[]
}

export type EnterRoomVo = {
  seats: SeatInfo[],
  /**当前阶段 */
  stage: number;
  /**房间号 */
  roomId: string;
  /**房主 */
  owner: string;
  /**游戏类型 (0 :积分场,1金币场) */
  game: number;
  /**底分 */
  endPoint: number;
  /**上限 */
  maxlimit: number;
  /**游戏限时(分钟) */
  time: number;
  /**剩余时间(分钟) */
  reMaintime: number;
  /**付费方式 (0:房主,1:AA,2:赢家) */
  payWay: number;
  /**玩法(0:一条鱼, 1:多条鱼) */
  playWay: number;
  /**房主是否参与(0:参与, 1:不参与) */
  partake: number;
  /**携带子弹数量 */
  bulletNum: number;
  /**携带金币数量 */
  goldNum: number;
  /**公会ID */
  guildId: number;
}

export type TableInfo = {
  /**桌子id */
  id: number;
  /**所属房间id */
  roomId: number;
  /**0:没有密码,非0:有密码 */
  hasPwd: number;
  /**牌桌的座位信息 */
  seats: SeatInfo[];
}

export type SeatInfo = {
  /**座位顺序(0-5) */
  order: number;
  /**当前积分 */
  cedit: number;
  /**头像地址 */
  icon: string;
  /**玩家昵称 */
  nickName: string;
  /**玩家IP */
  ip: string;
  /**玩家ID */
  playerId: string;
  /**性别 */
  sex: number;
  /**准备状态 */
  ready: number;
  /**子弹数量 */
  bullet: number;
  /**离线(即被系统托管),0:没有离线,非0:离线 */
  offline: number;
  /**vip等级 */
  vip: number;
  /**等级 */
  level: number;
}

/**房间成员信息 */
export interface MemInfo {
  /**玩家id */
  playerId: string;
  /**玩家昵称 */
  playerName: string;
  /**玩家签名 */
  signature: string;
  /**玩家等级 */
  level: number;
  /**0:男,非0:女 */
  sex: number;
  /**玩家头像 */
  icon: number;
  /**金币 */
  gold: number;
  /**积分 */
  cedit: number;
  /**筹码 */
  chips: number;
  /**状态(0:站立,1:入座,2:准备,3:游戏中) */
  state: number;
  /**0:不是vip,非0:vip */
  vip: number;
  /**桌号 */
  tableId: number;
  /**座位号 */
  order: number;
  /**0:不是托管,非0:托管 */
  sysHost: number;
  batteryId: number;
  batteryScore: number;
  isPowerBattery: boolean;
  offline: number;
  bullet: number;
}

export type ProduceFishVo = {
  fishs: FishInfo[]
}

export type FishInfo = {
  /**鱼id */
  id: number;
  /**鱼的类型 */
  type: number;
  /**起点x */
  x: number;
  /**起点y */
  y: number;
  /**路径id */
  road: number;
  /**时间 */
  t: number;
  /**夹角(负数不处理) */
  angle: number;
}

export type BatteryInfo = {
  /**玩家id */
  playerId: string;
  /**座位顺序 */
  order: number;
  /**炮管分数 */
  score: number;
  /**炮管数量 */
  num: number;
  /**是否能量炮(0:不是,非0:能量炮) */
  power: number;
  /**皮肤 */
  skin: number
}

export type ResScenceVo = {
  /**场景id */
  scenceId: number;
  /**鱼 */
  fishs: FishInfo[];
  /**炮台 */
  batterys: BatteryInfo[];
  /**代发碰撞玩家列表 */
  insteadPlayers: string[]
}

export type FishDieInfo = {
  fishId: number;
  score: number;
}

export type HitFishVo = {
  playerId: string;
  order: number;
  dies: FishDieInfo[]
}

export type FireVo = {
  /**发炮玩家 */
  playerId: string;
  /**位置 */
  order: number;
  /**子弹id */
  bulletId: number;
  /**子弹剩余数量 */
  bulletRemain: number;
  /**夹角 */
  angle: number;
}

export type LockVo = {
  /**玩家id */
  playerId: string;
  /**位置 */
  order: number;
  /**锁定鱼 */
  fishId: number;
}

export type BatteryChangeVo = {
  battery: BatteryInfo;
}

export type ReadyVo = {
  /**玩家id */
  playerId: string;
  /**玩家座位号 */
  order: number;
  /**准备状态0:准备,1未准备 */
  ready: number
}

export type ChipsChangeVo = {
  playerId: string;
  order: number;
  chips: number;
}

export type ChangeBatterySkinVo = {
  playerId: string;
  skin: number
}
export type OtherJoinRoomVo = {
  battery:BatteryInfo,
  seats: SeatInfo,
}
/**错误信息通知 */
export type ErrorMsgVo = {
  msgId:number,
  args: string[],
}