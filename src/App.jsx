import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import DetalleShowcaseHover from "./redux/components/DetalleShowcaseHover/DetalleShowcaseHover";
import Cart from "./redux/components/cart/Cart";
import Showcase from "./redux/components/showcase/Showcase";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Showcase} />;
        <Route path="/cart" component={Cart} />
        <Route path="/detail" component={DetalleShowcaseHover} />
      </Switch>
    </>
  );
}

export default App;
