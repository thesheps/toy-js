import Observer from "./observer";

export default class Controller {
  private readonly observers: Array<Observer> = new Array<Observer>();

  private _bar: boolean = false;

  get bar(): boolean {
    return this._bar;
  }

  set bar(value: boolean) {
    this._bar = value;
    this.observers.forEach(o => o.update("bar", value))
  }

  registerObserver(observer: Observer) {
    this.observers.push(observer);
  }

  getObservers() {
    return this.observers.map(o => Object.assign({}, o));
  }
}
