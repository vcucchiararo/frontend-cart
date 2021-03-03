import React from "react";
import "./product.css";

function Product({ product }) {
  return (
    <>
      <div className="product-container">
        <img
          className="image-product"
          alt={product.productName}
          src={product.image}
        ></img>
        <p className="name-product">{product.productName}</p>
        <p className="price">{product.price}</p>
        <button className="delete-product"> X </button>
      </div>
    </>
  );
}

export default Product;
