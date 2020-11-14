import React from "react";
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import { Route, Switch } from "react-router-dom";
import Subheader from "./Subheader";
import Footer from "./Footer";
import Banner from "./Home";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Subheader />
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/" component={Banner} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
