import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AddressContextProvider } from "../../context/addressContext";
import { CartContextProvider } from "../../context/cartContext";
import PrivateRoute from "../../privateRoutes";
import Cart from "./cart/cart";
import Checkout from "./checkout/checkout";
import Orders from "./orders/orders";
import ProductList from "./product-list/productList";
import Profile from "./profile/profile";
import Support from "./support/support";
import ProductDetails from "./product-list/product-details/productDetails";
import InitializeOrder from "./initialize-order/initializeOrder";
import Issues from "./issues/issuesTable";

export default function Application() {
  return (
    <CartContextProvider>
      <Switch>
        <AddressContextProvider>
          <Route
            path={"/application"}
            exact
            component={() => <Redirect to={"/application/products"} />}
          />
          <Route path={"/application/products/:id"}>
            <ProductDetails />
          </Route>
          <Route path={"/application/products"}>
            <ProductList />
          </Route>
          <Route path={"/application/cart"}>
            <Cart />
          </Route>
          <Route path={"/application/orders"}>
            <Orders />
          </Route>
          <Route path={"/application/profile"}>
            <Profile />
          </Route>
          <Route path={"/application/support"}>
            <Support />
          </Route>
          <Route path={"/application/issues"}>
            <Issues />
          </Route>
          <Route path={"/application/initialize"}>
            <InitializeOrder />
          </Route>
          <Route path={"/application/checkout"}>
            <Checkout />
          </Route>
        </AddressContextProvider>
      </Switch>
    </CartContextProvider>
  );
}
