import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Footer from "./components/Footer/Footer";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Header from "./components/Header/Header";
import Cart from "./components/cart/cart.component";
import Blog from "./components/Blog/blog.component";
import BlogPost from "./components/Blog/BlogSubComponents/BlogPost.component";
import UserAccount from "./components/Blog/Account/userAccount.component";
import { Switch, Route } from "react-router-dom";
import BuyNow from "./components/Products/BuyNow";
import Orders from "./components/Products/Orders";
import History from "./components/Products/History";
import Product from "./components/Products/Product";
import Products from "./components/Products/Products";
import logo from "./logo.svg";
import "../node_modules/jquery/dist/jquery";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { selectUser } from "./components/reducers/user.selector";
import { getLikesAync } from "./redux/like/like.action";
import { fetchPostStartAsync } from "./redux/post/post.action";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
class App extends React.Component {
  async componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    // const { fetchPostStartAsync, getLikesAync } = this.props;

    // await fetchPostStartAsync();
    // await getLikesAync();
    document.body.appendChild(script);
  }

  render() {
    const { user } = this.props;
    return (
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route path="/product" component={Product} /> */}
          <Route path="/products" component={Products} />
          {/* <Route path="/products/product" component={Jobs}/>    */}
          <Route path="/product" component={Product} />
          <PrivateRoute exact path="/buyNow" component={BuyNow} />
          <PrivateRoute exact path="/cart" component={Cart} />
          <PrivateRoute exact path="/orders" component={Orders} />
          <PrivateRoute exact path="/history" component={History} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {/* Will allow only logged in users to access blog and account*/}
          <Route exact path="/blog" component={user ? Blog : Login} />
          <Route exact path="/account" component={user ? UserAccount : Login} />
          <Route exact path="/blogPost" component={user ? BlogPost : Login} />
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}
const mapStateToProps = (state) =>
  createStructuredSelector({
    user: selectUser,
  });
const mapDispatchStateToProps = (dispacth) => ({
  getLikesAync: () => dispacth(getLikesAync()),
  fetchPostStartAsync: () => dispacth(fetchPostStartAsync()),
});
export default connect(mapStateToProps, mapDispatchStateToProps)(App);
