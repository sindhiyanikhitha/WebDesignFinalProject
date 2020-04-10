import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Cart from "./components/cart/cart.component";
import Blog from "./components/Blog/blog.component";
import UserAccount from "./components/Blog/Account/userAccount.component";
import { Switch, Route } from "react-router-dom";
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
    const { fetchPostStartAsync, getLikesAync } = this.props;

    await fetchPostStartAsync();
    await getLikesAync();
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
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/cart" component={Cart} />
          {/* Will allow only logged in users to access blog and account*/}
          <Route exact path="/blog" component={user ? Blog : Login} />
          <Route exact path="/account" component={user ? UserAccount : Login} />
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
