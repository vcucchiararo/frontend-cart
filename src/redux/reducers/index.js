import { ADD_ARTICLES } from "../actions/actionTypes";
import productList from "../../products.mock";

const initialState = {
  articles: productList,
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLES) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload),
    });
  }
  return state;
}

export default rootReducer;
