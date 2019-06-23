import Observer from "./observer";
import Controller from "./controller";

export default class Toy implements Observer {
  update(key: string, value: any): void {}

  constructor(controller: Controller) {
    controller.registerObserver(this);
  }
}
