import {
  DELETE_ARTICLE,
  INCREMENT,
  FILTER_BY_TITLE,
  FILTER_BY_DATE_RANGE,
  SET_DATE_RANGE_FILTER,
  SET_TITLE_FILTER
} from "../constants";

export const increment = () => ({
  type: INCREMENT
});

export const deleteArticle = id => ({
  type: DELETE_ARTICLE,
  payload: { id }
});

export const setDateRangeFilter = range => ({
  type: SET_DATE_RANGE_FILTER,
  payload: range
});

export const setTitleFilter = title => ({
  type: SET_TITLE_FILTER,
  payload: title
});

export const filterByTitle = title => ({
  type: FILTER_BY_TITLE,
  payload: { title }
});

export const filterByDateRange = range => ({
  type: FILTER_BY_DATE_RANGE,
  payload: { from: range.from.toISOString(), to: range.to.toISOString() }
});
