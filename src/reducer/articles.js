import {
  DELETE_ARTICLE,
  FILTER_BY_TITLE,
  FILTER_BY_DATE_RANGE
} from "../constants";
import defaultArticles from "../fixtures";

export default (articles = defaultArticles, action) => {
  const { type, payload } = action;

  switch (type) {
    case DELETE_ARTICLE:
      return articles.filter(article => article.id !== payload.id);

    case FILTER_BY_TITLE:
      return payload.title
        ? defaultArticles.filter(article => article.title === payload.title)
        : defaultArticles;

    case FILTER_BY_DATE_RANGE:
      return defaultArticles.filter(
        article => article.date >= payload.from && article.date <= payload.to
      );

    default:
      return articles;
  }
};
