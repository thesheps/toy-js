describe("Controller", () => {
  it("allows observers to be added to a collection", () => {
    interface IObserver {}

    class MockObserver implements IObserver {}

    class Controller {
      observers: Array<IObserver> = new Array<IObserver>();
      
      registerObserver(observer: IObserver) {}
    }

    const controller = new Controller();
    const observer = new MockObserver();
    controller.registerObserver(observer);

    expect(controller.observers).toEqual([observer]);
  });
});
