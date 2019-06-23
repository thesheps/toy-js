import Controller from "../controller";

export default class MockController extends Controller {
  protected data(): any {
    return {
      test: ""
    };
  }

  updateValue(value: string) {
    this.state.test = value;
  }
}
