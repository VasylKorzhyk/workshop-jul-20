import Driver from "../../test/driver";

export default class SelectFilterDriver extends Driver {
  get = {
    body: () => this.getById("filter-body")
  };
}
