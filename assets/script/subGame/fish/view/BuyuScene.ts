import SourceManage from "../../../base/SourceManage";
import { BatteryManager } from "../../../common/fish/BatteryManager";
import { BulletManager } from "../../../common/fish/BulletManager";
import { FishGoldManager } from "../../../common/fish/FishGoldManager";
import { FishManager } from "../../../common/fish/FishManager";
import { FishNetManager } from "../../../common/fish/FishNetManager";
import { ObjectEffectWorld } from "../../../common/fish/ObjectEffectWorld";
import { ObjectPool } from "../../../common/fish/ObjectPool";

export class BuyuScene {
  private fishManager: FishManager;
  private objectPool: ObjectPool;
  private bulletManager: BulletManager;
  private batteryManager: BatteryManager;
  private objectEffectWorld: ObjectEffectWorld;
  private fishNetManager: FishNetManager;
  private fishGoldManager: FishGoldManager;

  private sourceManage: SourceManage;

  constructor() {
    this.fishManager = new FishManager();
    this.objectPool = new ObjectPool();
    this.bulletManager = new BulletManager();
    this.batteryManager = new BatteryManager();
    this.objectEffectWorld = new ObjectEffectWorld(this.bulletManager, this.batteryManager, this.fishManager);
    this.fishNetManager = new FishNetManager(this.objectPool);
    this.fishGoldManager = new FishGoldManager();
  }

  public initFish() {
  }
}