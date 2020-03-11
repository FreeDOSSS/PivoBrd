import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "./helpers/common.scss";
import store from "./Redux/store";
import router from "./router";
import HeaderRow from "./components/HeaderRow/HeaderRow";
import SvgSprite from "./components/SvgSprite/SvgSprite";

UIkit.use(Icons);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <SvgSprite />
      <HeaderRow />
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
