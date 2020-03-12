import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "reset-css";
import HeaderRow from "./components/HeaderRow/HeaderRow";
import Menu from "./components/Menu/Menu";
import SvgSprite from "./components/SvgSprite/SvgSprite";
import "./helpers/common.scss";
import store from "./Redux/store";
import router from "./router";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <SvgSprite />
      <HeaderRow />
      <Menu />
      <Switch>
        <Route
          path={router.home.path}
          component={router.home.component}
          exact
        />
        <Redirect to={router.home.path} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("pivo"));
