import MockController from "./mocks/mockController";
import Toy from "./toy";

describe("Toy", () => {
  it("looks like TypeScript is correctly configured", () => {
    class MyLovelyClass {
      thing: string;

      constructor(thing: string) {
        this.thing = thing;
      }
    }
  });

  it("implements the Observer interface, and registers itself upon construction", () => {
    const controller = new MockController();
    const toy = new Toy(controller);

    expect(controller.getObservers()).toEqual([toy]);
  });
});
