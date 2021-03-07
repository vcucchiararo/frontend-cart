import { actionTypes } from "./actionTypes";

export function addArticle(payload) {
  return { type: actionTypes.ADD_ARTICLE, payload };
}

export function deleteProduct(payload) {
  return { type: actionTypes.DELETE_PRODUCT, payload };
}
