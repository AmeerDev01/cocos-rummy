import Proxy from "../../Framework/patterns/proxy/Proxy"

export default class BaseProxy<Repository> extends Proxy {
    protected keyMapToData = {}
    protected keyMapToSys = {}
    protected repository: Repository;

    constructor(proxyName: string = null, data: any = null) {
        super(proxyName, data)
    }

    public getRepository() {
        return this.repository
    }
}
