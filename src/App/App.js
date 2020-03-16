import React from "react";
import { Affix } from "antd";
import Menu from "./../components/Menu";
import SvgSprite from "./../components/SvgSprite/SvgSprite";
import HeaderRow from "./../components/HeaderRow/HeaderRow";
import { Switch, Route, Redirect } from "react-router-dom";
import router from "./../router";

const App = () => (
  <div>
    <Affix offsetTop={0}>
      <SvgSprite />
      <HeaderRow />
      <Menu />
    </Affix>
    <Switch>
      <Route path={router.home.path} component={router.home.component} exact />
      <Redirect to={router.home.path} />
    </Switch>
  </div>
);

export default App;
