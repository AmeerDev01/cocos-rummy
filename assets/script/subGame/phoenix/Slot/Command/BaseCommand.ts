import {INotification} from "../../Framework/interfaces/INotification";
import Command from "../../Framework/patterns/command/Command";

export interface IListExecute<O> {
    type: string
    isListen?: boolean

    /**返回payload，会作为负载发送到mediator，唯独payload=undefined，即无return，在函数执行完之后不会自动发送至Mediator */
    handler(this: O, notification: INotification): any
}

export class BaseCommand extends Command {
    protected listExecute: Array<IListExecute<BaseCommand>>

    public execute(notification: INotification): void {
        //处理完之后再将type转换为name为mediator发送通知
        const listenr = this.listExecute.find(item => item.type === notification.getType())
        let payload = null
        if (listenr) {
            try {
				payload = listenr.handler.bind(this)(notification)
				if (payload !== undefined) {
					this.sendNotification(notification.getType(), payload)
				}
			}
			catch (e) {
				console.error(e)
			}
        }
    }

}
