import React from "react";
import { Provider } from "react-redux";
import { shallow, render, mount } from "enzyme";
import DateFilterDriver from "./date-filter.driver";
import DateFilter from "./date-filter";

const storeFake = state => {
  return {
    default: jest.fn(),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: () => state
  };
};

describe("<DateFilter />", () => {
  let driver;

  beforeEach(() => {
    const store = storeFake({
      filters: { dateRange: { from: null, to: null } }
    });

    driver = new DateFilterDriver(
      mount(
        <Provider store={store}>
          <DateFilter />
        </Provider>
      )
    );
  });

  it("should render body", () => {
    expect(driver.get.body().exists()).toBe(true);
  });
});
