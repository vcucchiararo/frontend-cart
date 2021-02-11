import actionTypes from "../actions/actionTypes";

export default function cartReducer(state = {}, action) {
  let newState = null;
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      newState = {
        ...state,
        productList: action.productList,
      };
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
