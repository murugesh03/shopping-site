import React, { Fragment } from "react";
import "./Store.scss";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Nav/NavBar";
import ProductList from "./ProductList/ProductList";
import Cart from "./Cart/Cart";
import Default from "./Default/Default";
import Details from "./Details/Details";

const Store = () => {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
    </Fragment>
  );
};

export default Store;
