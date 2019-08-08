import Driver from "../../test/driver";

export default class ArticleListDriver extends Driver {
  get = {
    articles: () => this.getById("article-body"),
    body: () => this.getById("article-list-body")
  };
}
