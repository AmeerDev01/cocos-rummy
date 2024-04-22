import { EditBox, Node, Toggle, UITransform, Vec3, _decorator, screen, view } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { mainViewModel } from '../index';
import { fishBackgroundConfig } from '../config/ByBackgroundConfig';
import { fishConfig } from '../config/ByFishConfig';
import { Shake } from '../../../utils/Shake';
import { SKT_MAG_TYPE, sktMsgListener } from '../socketConnect';
import { EnterGameVo, EnterRoomVo } from '../type';
import config from '../config';
import { fishCommondConfig } from '../config/ByCommonConfig';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
}
export interface IEvent {
}

@ccclass('Fish_Test')
export class Fish_Test extends BaseComponent<IState, IProps, IEvent> {
	start() {
	}

	protected propertyNode = {
		props_btn_Info: new Node(),
		props_change_bg: new Node(),
		props_clear_fish: new Node(),
		props_scale: new Node(),
	}
	public props: IProps = {
	}

	public events: IEvent = {
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		let lastId;
		let count = 0;
		this.node.getChildByName('Button').on(Node.EventType.TOUCH_END, () => {
			lastId && mainViewModel.getFishManager().clearAllSceneAllFish();
			const fishNo = this.node.getChildByName('FishNo').getComponent(EditBox).string
			const cuvNo = this.node.getChildByName('CuvNo').getComponent(EditBox).string
			const Angle = this.node.getChildByName('Angle').getComponent(EditBox).string
			const startPos = this.node.getChildByName('startPos').getComponent(EditBox).string.split(',');
			mainViewModel.getFishManager().addFish({
				object_id: count++,
				fish_id: Number(fishNo),
				cve_id: Number(cuvNo),
				run_t: 0,
				spos: new Vec3(parseInt(startPos[0]), parseInt(startPos[1])),
				breserve: false,
				angle: Number(Angle),
				user_info: {},
			});
		})

		this.node.getChildByName('SuoDing').on(Toggle.EventType.TOGGLE, (e: Toggle) => {
			mainViewModel.getBatteryManager().getMyselfBatteryObj().setLockFisState(e.isChecked);
		})

		this.propertyNode.props_btn_Info.on(Node.EventType.TOUCH_END, () => {
			config.selfUserId = '10000';
			const enterRoomVo = {
				roomId: 1,
				seats: [
					{
						/**座位顺序(0-5) */
						order: 2,
						/**当前积分 */
						cedit: 100000,
						/**头像地址 */
						icon: '1',
						/**玩家昵称 */
						nickName: '测试',
						/**玩家IP */
						ip: 'string',
						/**玩家ID */
						playerId: config.selfUserId,
						/**性别 */
						sex: 1,
						/**准备状态 */
						ready: 0,
						/**子弹数量 */
						bullet: 1000000,
						/**离线(即被系统托管),0:没有离线,非0:离线 */
						offline: 0,
						/**vip等级 */
						vip: 1,
						/**等级 */
						level: 1,
					}
				]
			}
			sktMsgListener.dispath(SKT_MAG_TYPE.JOIN_ROOM, enterRoomVo);

			const scence = {
				/**场景id */
				scenceId: 1,
				/**鱼 */
				fishs: [],
				/**炮台 */
				batterys: [
					{
						/**玩家id */
						playerId: config.testConfig.playerId,
						/**座位顺序 */
						order: 1,
						/**炮管分数 */
						score: 1,
						/**炮管数量 */
						num: 0,
						/**是否能量炮(0:不是,非0:能量炮) */
						power: 0,
						/**皮肤 */
						skin: 1
					}
				],
				/**代发碰撞玩家列表 */
				insteadPlayers: [],
			}

			window.setTimeout(() => {
				sktMsgListener.dispath(SKT_MAG_TYPE.REQ_SCENCE, scence);
			}, 100)
		})
		this.propertyNode.props_change_bg.on(Node.EventType.TOUCH_END, () => {
			const id = this.randomInt(16) + 1;
			mainViewModel.getBackgroundSceneManager().cutBackgroundScene(id);
		})

		mainViewModel.setSendYrbyReqHit((msg) => {
			const fishInfo = fishConfig.find(v => v.id === msg.fishConfigId);
			// mainViewModel.fishDeath(1, msg.fishId, fishInfo.max_rate);

			const lst = [
				{
					fishId: msg.fishId,
					score: fishInfo.max_rate
				}, {
					fishId: msg.fishId + 1,
					score: fishInfo.max_rate
				}, {
					fishId: msg.fishId + 2,
					score: fishInfo.max_rate
				}
			]
			// mainViewModel.fishLstDeath(1, lst)
		})

		this.propertyNode.props_clear_fish.on(Node.EventType.TOUCH_END, () => {
			mainViewModel.roomViewModel.clearAllFish();
		})
		this.propertyNode.props_scale.on(Toggle.EventType.TOGGLE, (e: Toggle) => {
			const scale = e.isChecked ? view.getVisibleSize().width / fishCommondConfig.scene_size.width : 1
			mainViewModel.setScale(scale)
		})
	}

	private randomInt(max) {
		if (max < 2) {
			return 0;
		}
		return Math.floor(Math.random() * max)
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
	}

	protected bindUI(): void {
		console.log(view.getResolutionPolicy());
		console.log(view.getVisibleSize());
		console.log(view.getVisibleSize());
		console.log(screen.windowSize);
		console.log(screen.resolution);
		console.log(screen.devicePixelRatio);
	}

	update(deltaTime: number) {

	}
}

