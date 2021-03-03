import { ADD_ARTICLES } from "../actions/actionTypes";

export function addArticle(payload) {
  return { type: "ADD_ARTICLES", payload };
}
