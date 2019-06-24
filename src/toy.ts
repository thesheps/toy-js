import Observer from "./observer";
import Controller from "./controller";

export default class Toy implements Observer {
  private readonly root: HTMLElement;
  private readonly template: Node;

  update(key: string, value: any): void {
    if (!this.root) return;

    this.root.textContent = this.template.textContent.replace(
      `{{${key}}}`,
      value
    );
  }

  constructor(controller: Controller, root: HTMLElement) {
    this.root = root;
    this.template = root ? root.cloneNode(true) : null;

    controller.registerObserver(this);
  }
}
