import MockController from "./mocks/mockController";
import MockObserver from "./mocks/mockObserver";

describe("Controller", () => {
  it("contains an abstract function named 'data'", () => {
    let controller = new MockController();
    expect(Reflect.has(controller, "data")).toBeTruthy();
  });

  it("contains a readonly property named 'state'", () => {
    let controller = new MockController();
    expect(Reflect.has(controller, "state")).toBeTruthy();
  });

  it("adds observers to the internal collection when registerObserver is used", () => {
    let controller = new MockController();
    let observer = new MockObserver();

    controller.registerObserver(observer);
    expect(controller.getObservers()).toEqual([observer]);
  });

  it("notifies observers when the state is updated", () => {
    let controller = new MockController();
    let observer = new MockObserver();

    controller.registerObserver(observer);
    controller.updateName("Hello World");
    expect(observer.value).toBe("Hello World");
  });
});
