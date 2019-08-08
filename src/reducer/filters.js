import defaultArticles from "../fixtures";
import { SET_DATE_RANGE_FILTER, SET_TITLE_FILTER } from "../constants";

const defaultState = {
  titles: [
    { label: "All", value: null },
    ...defaultArticles.map(x => ({ label: x.title, value: x.title }))
  ],
  dateRange: { from: null, to: null }
};

export default (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TITLE_FILTER:
      return { ...state, titleFilter: payload };

    case SET_DATE_RANGE_FILTER:
      return { ...state, dateRange: payload };

    default:
      return state;
  }
};
