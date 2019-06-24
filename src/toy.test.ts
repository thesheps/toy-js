import MockController from "./mocks/mockController";
import Toy from "./toy";

describe("Toy", () => {
  it("looks like TypeScript is correctly configured", () => {
    class MyLovelyClass {
      thing: string;

      constructor(thing: string) {}
    }
  });

  it("implements the Observer interface, and registers itself upon construction", () => {
    const controller = new MockController();
    const toy = new Toy(controller, null);

    expect(controller.getObservers()).toEqual([toy]);
  });

  it("renders the DOM upon construction, rendering any double-moustaches it finds", () => {
    const controller = new MockController();
    const root = document.createElement("div");
    root.append(document.createTextNode("Hello, {{name}}!"));

    new Toy(controller, root);
    expect(root.textContent).toEqual("Hello, Dave!");
  });

  it("re-renders the DOM when the state changes", () => {
    const controller = new MockController();
    const root = document.createElement("div");
    root.append(document.createTextNode("Hello, {{name}}!"));

    const toy = new Toy(controller, root);
    expect(root.textContent).toEqual("Hello, Dave!");

    controller.updateName("Steve");
    expect(root.textContent).toEqual("Hello, Steve!");
  });
});
