import React from "react";
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import { Route, Switch } from "react-router-dom";
import Subheader from "./Subheader";
import Footer from "./Footer";
import Home from "./Home";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger))
);

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Header />
        <Subheader />
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </Provider>
    </div>
  );
};

export default App;
