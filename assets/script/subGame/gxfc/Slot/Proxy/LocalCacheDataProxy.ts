import Proxy from '../../Framework/patterns/proxy/Proxy';
import { sys } from 'cc';

export class LocalCacheDataProxy extends Proxy {
	static LOGIN_DATA: string = "LOGIN_DATA";
	static TOKEN: string = "TOKEN";
	static INVITE_CODE: string = "INVITE_CODE";

	private localStorage: any = null;
	private cache: Map<string, any> = null;

	public constructor(proxyName: string = null, data: any = null) {
		super(proxyName, data)
		this.localStorage = sys.localStorage
		this.cache = new Map()
	}

	/**
			* 获得登录缓存数据
			*/
	// getLoginData(): LoginData {
	//     return <LoginData>JSON.parse(this.localStorage.getItem(LocalCacheDataProxy.LOGIN_DATA));
	// }

	/**
	 * 保存登录缓存数据
	 * @param {*} loginData 
	 */
	setLoginData(loginData: any) {
		this.localStorage.setItem(LocalCacheDataProxy.LOGIN_DATA, JSON.stringify(loginData));
	}
	/**
	 * 获得用户TOKEN
	 */
	getUserToken(): string {
		return this.getCache(LocalCacheDataProxy.TOKEN);
	}

	/**
	 * 保存用户token
	 * @param {*} userToken 
	 */
	setUserToken(userToken) {
		this.setCache(LocalCacheDataProxy.TOKEN, userToken);
	}


	getCache(key: string): any {
		return this.cache.get(key);
	}

	setCache(key: string, value: any) {
		this.cache.set(key, value);
	}
}