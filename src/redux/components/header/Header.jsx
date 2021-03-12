import React from "react";
import "./header.css";
import { logo, cartImage } from "../../../assets/index";

function Header() {
  return (
    <>
      <section className="main-container">
        <div className="logo_container">
          <img className="logo" alt="Imagen logo" src={logo}></img>
        </div>
        <div className="cart_container">
          <img className="cartImage" alt="Imagen carrito" src={cartImage}></img>
          <div className="cart_info">
            <p className="price_header">0,00€</p>
            <p className="cart_header">Mi Carrito</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
