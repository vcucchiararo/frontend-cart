import { actionTypes } from "../actions/actionTypes";
import productList from "../../products.mock";

const initialState = {
  articles: productList,
};

function rootReducer(state = initialState, action) {
  if (action.type === actionTypes.ADD_ARTICLE) {
    return {
      ...state,
      articles: state.articles.concat(action.payload),
    };
  }

  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      return {
        ...state,
        articles: state.articles.concat(action.payload),
      };
    case actionTypes.DELETE_PRODUCT:
      // const currentProductIndex = state.articles.findIndex((article) => {
      //   return article.id === action.payload.id;
      // });
      return {
        ...state,
        articles: state.articles.filter((article) => {
          return article.id !== action.payload.id;
        }),
      };

    default:
      break;
  }
  return state;
}

export default rootReducer;
