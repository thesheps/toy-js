import Controller from "./controller";
import Observer from "./observer";

class MockObserver implements Observer {
  bar: false;

  update(key: string, value: any): void {}
}

describe("Controller", () => {
  it("allows observers to be added to a collection", () => {
    const controller = new Controller();
    const observer = new MockObserver();
    controller.registerObserver(observer);

    expect(controller.getObservers()).toEqual([observer]);
  });

  it("notifies observers upon the change of state", () => {
    const controller = new Controller();
    const observer = new MockObserver();
    controller.registerObserver(observer);
    expect(observer.bar).toBeFalsy();

    controller.bar = true;
    expect(observer.bar).toBeTruthy();
  });
});
