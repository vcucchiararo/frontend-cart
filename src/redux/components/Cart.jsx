import React from "react";
import "./cart.css";
import { cartImage, sartenVintage } from "../../assets";

function Cart() {
  return (
    <>
      <section className="main_container">
        <div className="cartDetail-container">
          <div className="products-container">
            <h1 className="cartTittle">CARRITO</h1>
          </div>
          <div className="cart-container">
            <img
              className="image-product"
              alt="sartén vintage"
              src={sartenVintage}
            ></img>
            <p className="name-product">Sartén Vintage</p>
            <p className="price">34,50 €</p>
            <p className="delete-product"> X </p>
          </div>
          <div className="keepBuying">
            <p> Seguir comprando</p>
          </div>
        </div>
        <div className="payment-container">
          <div className="summaryProducts">
            <p className="totalUnity"> 1 artículo</p>
            <p className="totalAmount"> 34,50 €</p>
          </div>
          <div className="buyButtonContainer">
            <button className="buyButton">FINALIZAR COMPRA</button>
          </div>
          <div className="discount-container">
            <p className="discountCode">Código de descuento</p>
            <input className="inputClass"></input>
            <button className="applyButton">APLICAR</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
