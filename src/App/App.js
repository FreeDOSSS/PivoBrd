import { Affix } from "antd";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HeaderRow from "./../components/HeaderRow";
import Menu from "./../components/Menu";
import SvgSprite from "./../components/SvgSprite";
import router from "./../router";

const App = () => (
  <>
    <SvgSprite />
    <Affix offsetTop={0}>
      <div>
        <HeaderRow />
        <Menu />
      </div>
    </Affix>
    <Switch>
      <Route path={router.home.path} component={router.home.component} exact />
      <Redirect to={router.home.path} />
    </Switch>
  </>
);

export default App;
