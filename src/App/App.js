import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Menu from "./../components/Menu";
import SvgSprite from "./../components/SvgSprite";
import router from "./../router";

const App = () => (
  <>
    <SvgSprite />
    <Menu />
    <Switch>
      <Route path={router.home.path} component={router.home.component} exact />
      <Route path={router.goods.path} component={router.goods.component} />
      <Redirect to={router.home.path} />
    </Switch>
  </>
);

export default App;
