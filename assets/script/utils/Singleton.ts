export default class Singleton {
  constructor() { }
  static Instance<T extends {}>(this: new () => T): T {
    if (!(<any>this).instance) {
      (<any>this).instance = new this()
    }
    return (<any>this).instance;
  }
} 