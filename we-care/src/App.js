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
import { Switch, Route } from "react-router-dom";
class App extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route path="/product" component={Product} /> */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/blog" component={Blog} />
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}
export default App;
