import {__private, Asset} from "cc";

export interface ISourceFile {
    key: string,
    path: string,
    sourceType: __private._types_globals__Constructor<Asset>,
    source: any
}
