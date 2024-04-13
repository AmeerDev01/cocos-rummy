import { Asset, Prefab, __private } from "cc";
import { PrefabDefine } from "../Const/PrefabDefine";

export interface ISourceFile {
  key: string,
	path: string,
	sourceType: __private._types_globals__Constructor<Asset>,
	source: any
}