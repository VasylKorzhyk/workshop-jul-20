import React from "react";
import { Provider } from "react-redux";
import { shallow, render, mount } from "enzyme";
import ArticleListDriver from "./article-list.driver";
import ArticleList from "./article-list";
import { Article } from "../article";
import articles from "../../fixtures";

const storeFake = state => {
  return {
    default: jest.fn(),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: () => state
  };
};

describe("<ArticleList />", () => {
  let driver;

  beforeEach(() => {
    const store = storeFake({ articles });

    driver = new ArticleListDriver(
      mount(
        <Provider store={store}>
          <ArticleList />
        </Provider>
      )
    );
  });

  it("should render body", () => {
    expect(driver.get.body().exists()).toBe(true);
  });
});
