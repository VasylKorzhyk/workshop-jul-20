import Driver from "../../test/driver";

export default class DateFilterDriver extends Driver {
  get = {
    body: () => this.getById("filter-body")
  };
}
