import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
// import Register from "./components/Auth/Register";
// import Login from "./components/Auth/Login";
// import Cart from "./components/cart/cart.component";
// import { Switch, Route } from "react-router-dom";
// import logo from './logo.svg';
import '../node_modules/jquery/dist/jquery';
import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


class App extends React.Component{
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="App">
      <HomePage></HomePage>
      </div>
    );
  }
}
export default App;
