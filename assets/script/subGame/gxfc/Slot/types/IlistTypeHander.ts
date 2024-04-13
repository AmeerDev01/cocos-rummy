import { INotification } from "../../Framework/interfaces/INotification"

export interface IlistTypeHander<O> {
	name: string
	isListen?: boolean
	handler(this: O, notification: INotification): void
}
