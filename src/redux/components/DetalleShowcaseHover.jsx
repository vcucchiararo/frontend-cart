import React from "react";
import "./detalleShowcaseHover.css";
import { cartImage, eyeImage, starImage } from "../../assets";

function DetalleShowcaseHover() {
  return (
    <>
      <section className="main_container">
        <div className="detalle-container">
          <img
            className="image_product"
            alt="escurridor De Cubiertos"
            src="https://5.allegroimg.com/s1024/0c1916/cf4b276f4ebbacd5e09a30037965"
          ></img>
          <div className="icons-container">
            <img alt="icono carrito" className="cart-img" src={cartImage}></img>
            <img
              alt="icono vista producto"
              className="eye-img"
              src={eyeImage}
            ></img>
          </div>
        </div>
        <div className="ranking">
          <img className="star-ranking" alt="estrella" src={starImage}></img>
          <img className="star-ranking" alt="estrella" src={starImage}></img>
          <img className="star-ranking" alt="estrella" src={starImage}></img>
        </div>
        <div className="info-container">
          <h1 className="title-product">Escurridor De Cubiertos</h1>
          <p className="price-product">12 € </p>
          <button>FINALIZAR COMPRA</button>
        </div>
      </section>
    </>
  );
}

export default DetalleShowcaseHover;
