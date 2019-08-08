import React from "react";
import { Provider } from "react-redux";
import { shallow, render, mount } from "enzyme";
import SelectFilterDriver from "./select-filter.driver";
import SelectFilter from "./select-filter";

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
      filters: { titles: [{ value: null, label: null }] }
    });

    driver = new SelectFilterDriver(
      mount(
        <Provider store={store}>
          <SelectFilter />
        </Provider>
      )
    );
  });

  it("should render body", () => {
    expect(driver.get.body().exists()).toBe(true);
  });
});
