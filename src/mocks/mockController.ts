import { Controller } from "../controller";

class MockController extends Controller {
  protected data(): any {
    return {
      name: "Dave"
    };
  }

  updateName(value: string) {
    this.state.name = value;
  }
}

export { MockController };
