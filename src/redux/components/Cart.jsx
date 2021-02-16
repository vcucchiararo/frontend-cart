import React from "react";
import "./cart.css";
import { cartImage, sartenVintage } from "../../assets";

function Cart() {
  return (
    <>
      <section className="main_container">
        <div className="cartDetail-container">
          <div className="products-container">
            <div className="cartTittle">CARRITO</div>
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
          <div>
            <p> Seguir comprando</p>
          </div>
        </div>
        <div className="payment-container">
          <div className="summaryProducts">
            <p className="totalUnity"> 1 artículo</p>
            <p className="totalAmount"> 34,50 €</p>
            <button>FINALIZAR COMPRA</button>
          </div>
          <div className="discount-container">
            <p>Código de descuento</p>
            <input></input>
            <button>APLICAR</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
