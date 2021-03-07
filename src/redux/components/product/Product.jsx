import React from "react";
import "./product.css";
import { connect } from "react-redux";
import { deleteProduct } from "../../actions";

function mapDispatchToProps(dispatch) {
  return {
    deleteProduct: (article) => dispatch(deleteProduct(article)),
  };
}

function ConnectedProduct({ product, deleteProduct }) {
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
        <button
          onClick={() => deleteProduct(product)}
          className="delete-product"
        >
          {" "}
          X{" "}
        </button>
      </div>
    </>
  );
}

const Product = connect(null, mapDispatchToProps)(ConnectedProduct);

export default Product;
