import "reset-css";
import "antd/dist/antd.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import HeaderRow from "./components/HeaderRow/HeaderRow";
import Menu from "./components/Menu/Menu";
import SvgSprite from "./components/SvgSprite/SvgSprite";
import "./helpers/common.scss";
import store from "./Redux/store";
import router from "./router";
import { Affix } from "antd";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Affix offsetTop={0}>
        <SvgSprite />
        <HeaderRow />
        <Menu />
      </Affix>
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
