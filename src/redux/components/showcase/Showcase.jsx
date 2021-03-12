import React from "react";
import "./showcase.css";
import DetalleShowcaseHover from "../DetalleShowcaseHover/DetalleShowcaseHover";
import Header from "../header/Header";

function Showcase() {
  return (
    <>
      <Header />
      <section className="main_container">
        <div className="showcase-container-top">
          <h1>Productos Destacados</h1>
          <p>Todos Los Productos / Cocina / Productos Destacados</p>
        </div>
        <div className="showcase-container-bottom">
          <div className="product-detail">{/* <DetalleShowcaseHover /> */}</div>
        </div>
      </section>
    </>
  );
}

export default Showcase;
