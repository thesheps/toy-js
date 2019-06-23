import Observer from "../observer";

export default class MockObserver implements Observer {
  value: Object;

  update(key: string, value: Object): void {
    this.value = value;
  }
}
