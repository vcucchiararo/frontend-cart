import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import DetalleShowcaseHover from "./redux/components/DetalleShowcaseHover/DetalleShowcaseHover";
import Cart from "./redux/components/cart/Cart";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={DetalleShowcaseHover} />;
        <Route path="/cart" component={Cart} />
      </Switch>
    </>
  );
}

export default App;
