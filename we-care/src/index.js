import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import store from "./components/store";
import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from "./controller/authController";
import setAuthToken from "./utils/setAuthToken";
import BuyNow from "./components/Products/BuyNow";
import Cart from "./components/Products/Cart";
import Orders from "./components/Products/Orders";
import History from "./components/Products/History";
import Product from "./components/Products/Product";
import Products from "./components/Products/Products";
import BrowseDoctors from "./components/Doctors/BrowseDoctors";
import Doctors from "./components/Doctors/Doctors";
import Consult from "./components/Doctors/Consult";
import Consultations from "./components/Doctors/Consultations";
import CategoryDescription from "./components/Doctors/CategoryDescription";

import "../node_modules/jquery/dist/jquery";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

const routing = (
  <Provider store={store}>
    <Router>
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={App} />
          {/* <Route path="/product" component={Product}/>       */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/products" component={Products} />
          {/* <Route path="/products/product" component={Jobs}/>    */}
          <Route path="/product" component={Product} />
          <Route path="/browseDoctors" component={BrowseDoctors} />
          <Route path="/describe" component={CategoryDescription} />
          <PrivateRoute path="/doctors" component={Doctors} />
          <PrivateRoute path="/consultations" component={Consultations} />
          <PrivateRoute path="/consult" component={Consult} />
          <PrivateRoute path="/consult/doctors" component={Consult} />
          <PrivateRoute exact path="/buyNow" component={BuyNow} />
          <PrivateRoute exact path="/cart" component={Cart} />
          <PrivateRoute exact path="/orders" component={Orders} />
          <PrivateRoute exact path="/history" component={History} />
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
