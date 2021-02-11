import actionTypes from "./actionTypes";

function loadProductsSuccess(productList) {
  return {
    type: actionTypes.LOAD_PRODUCTS,
    productList,
  };
}
