import Controller from "../controller";

export default class MockController extends Controller {
  protected data(): any {
    return {
      name: "Dave"
    };
  }

  updateValue(value: string) {
    this.state.name = value;
  }
}
