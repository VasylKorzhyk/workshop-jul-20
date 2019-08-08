import React from "react";
import Header from "./header";
import ArticleList from "./article-list";
import Counter from "./counter";
import Filter from "./filter/filter";

function App() {
  return (
    <div>
      <Header />
      <Filter />
      {/* <Counter /> */}
      <ArticleList />
    </div>
  );
}

App.propTypes = {};

export default App;
