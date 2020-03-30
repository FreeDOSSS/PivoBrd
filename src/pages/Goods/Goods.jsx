import React from "react";
import shortid from "shortid";
import AsideCard from "../../components/AsideGoods/AsideCard";
import Container from "../../components/Container/Container";
import TopBaner from "./../../components/TopBaner";
import * as style from "./Goods.module.scss";

function Goods({ goods }) {
  return (
    <>
      <TopBaner title="Корзина" />

      <Container container={style.box}>
        <div className={style.left}>Тут форма заказа</div>
        <div className={style.right}>
          {goods &&
            goods.map(el => <AsideCard goods={el} key={shortid.generate()} />)}
        </div>
      </Container>
    </>
  );
}

export default Goods;
