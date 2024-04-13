

export enum MsgCode {
    OK = 200,
}

export interface RspData {
    code: MsgCode,
    msg: string,
    data: any
}