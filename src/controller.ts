import Observer from "./observer";

export default abstract class Controller {
  private observers: Array<Observer> = new Array<Observer>();

  protected readonly state: any;
  protected abstract data(): any;

  constructor() {
    this.state = new Proxy<any>(this.data(), {
      set: (obj, key, value) => {
        Reflect.set(obj, key, value);

        this.observers.forEach(async o => {
          o.update(key as string, value);
        });

        return true;
      }
    });
  }

  public registerObserver(observer: Observer) {
    this.observers.push(observer);
    Object.keys(this.state).forEach(k => observer.update(k, this.state[k]));
  }

  public getObservers() {
    return this.observers;
  }
}
