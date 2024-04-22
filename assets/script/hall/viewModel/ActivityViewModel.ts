import { Node } from "cc"
import ViewModel from "../../base/ViewModel"
import { Hall_ActivityPanel, IProps, IEvent, ActivityItem, ActivityType } from "../components/Hall_ActivityPanel"
import { StateType } from "../store/reducer"
import Fetcher from "../../utils/Fetcher"
import { ApiUrl } from "../apiUrl"
import { fetcher } from "../index"
import { updateActivityStatus } from "../store/actions/memberInfo"
import { SKT_MAG_TYPE, hallWebSocketDriver } from "../socketConnect"

class ActivityViewModel extends ViewModel<Hall_ActivityPanel, IProps, IEvent> {
  constructor() {
    super("Hall_ActivityPanel")
  }

  protected begin() {
    fetcher.send(ApiUrl.ACTIVITY_LIST, {}, "get").then((rsp) => {
      this.setActivityItemId(rsp)
      this.setProps({
        activityList: rsp
      })
    }).catch((e) => {
      //this.dispatch(addToastAction({ content: e }))
    })
    this.setEvent({
      setReadStatus: (value: string) => {
        this.setReadStatus(this.comp.props.activityList, value);
      },
      getItemUnreadStatus: (value: string) => {
        return this.getItemUnreadStatus(value);
      },
      deleteReadStatus: (value: string) => {
        this.deleteReadStatus(value);
      }
    })
  }

  public initReadStatus() {
    const url = `${ApiUrl.ACTIVITY_LIST}?t=${Date.parse(new Date() as any)}`
    fetcher.send(url, {}, "get").then((rsp) => {
      const activityList: ActivityItem[] = rsp;
      this.setActivityItemId(activityList)

      const status = this.getUnreadStatus(activityList)
      this.dispatch(updateActivityStatus(status));

      if (activityList && activityList.find(v => v.gameId === ActivityType.TURNPLATE)) {
        this.initTurntabledateStatus(activityList);
      }

    }).catch((e) => {
      //this.dispatch(addToastAction({ content: e }))
    })
  }

  private setActivityItemId(activityList: ActivityItem[]) {
    activityList && activityList.forEach(v => v.id = v.name)
  }

  /**
   * 获得活动未读状态
   * @param activityList 
   * @returns 
   */
  private getUnreadStatus(activityList: ActivityItem[], actIds: string[] = undefined) {
    if (!actIds) {
      actIds = this.getCacheActIds();
      if (actIds.length === 0) {
        return true;
      }
    }
    for (let i = 0; i < activityList.length; i++) {
      const element = activityList[i];
      if (!actIds.find(v => v === element.id)) {
        return true;
      }
    }

    // 把已经关闭的活动已读标识删掉
    for (let i = 0; i < actIds.length; i++) {
      const actId = actIds[i];
      if (!activityList.find(v => v.id === actId)) {
        actIds.splice(i, 1);
        i--;
      }
    }
    localStorage.setItem("actIds", JSON.stringify(actIds));
    return false;
  }

  private getItemUnreadStatus(value: string) {
    return !this.getCacheActIds().find(v => v === value);
  }

  private setReadStatus(activityList: ActivityItem[], value: string) {
    let actIds: string[] = this.getCacheActIds();
    if (!actIds.find(v => v === value)) {
      actIds.push(value);
    }
    localStorage.setItem("actIds", JSON.stringify(actIds));

    const status = this.getUnreadStatus(activityList, actIds);
    this.dispatch(updateActivityStatus(status));
  }

  /**删除已读状态 */
  private deleteReadStatus(value: string) {
    let actIds: string[] = this.getCacheActIds();
    if (actIds.length > 0) {
      actIds = actIds.filter(v => v !== value)
      localStorage.setItem("actIds", JSON.stringify(actIds));
    }
  }

  /**初始化转盘数据 */
  private initTurntabledateStatus(activityList: ActivityItem[]) {
    const turntableData = activityList.find(v => v.gameId === ActivityType.TURNPLATE)
    hallWebSocketDriver.sktMsgListener.addOnce(SKT_MAG_TYPE.TURNTABLEDATA, "main", (data, error) => {
      if (error) return
      if (data[0]) {
        if (data[0].count > 0) {
          this.deleteReadStatus(turntableData.id);
        } else {
          this.setReadStatus(activityList, turntableData.id);
        }
      } else {
        this.setReadStatus(activityList, turntableData.id);
      }
    })
    hallWebSocketDriver.sendSktMessage(SKT_MAG_TYPE.TURNTABLEDATA)
  }

  private getCacheActIds() {
    const value = localStorage.getItem("actIds")
    let actIds: string[] = [];
    if (value) {
      actIds = JSON.parse(value);
    }
    return actIds;
  }
  public connect() {
    this.inject({}, (state: StateType) => {
      return {
      }
    })
    return this
  }
}

export default ActivityViewModel