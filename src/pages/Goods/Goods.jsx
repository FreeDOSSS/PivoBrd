import React from "react";
import Container from "../../components/Container/Container";
import * as style from "./Goods.module.scss";
import TopBaner from "./../../components/TopBaner";

function Goods({ goods }) {
  return (
    <>
      <TopBaner title="Корзина" />
      <Container>
        <div className={style.wp}>ыф</div>
      </Container>
    </>
  );
}

export default Goods;
