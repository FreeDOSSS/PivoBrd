// import * as style from "./AsideGoods.module.scss";
import { Divider, Drawer } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import router from "../../router";
import goodsCalcTotal from "./../../helpers/goodsCalcTotal";
import AsideCard from "./AsideCard";
import * as style from "./AsideGoods.module.scss";
import shortid from "shortid";

function AsideGoods({ goods, show, onHendler }) {
  return (
    <Drawer
      title="Корзина"
      visible={show}
      width={"100%"}
      className="goods"
      onClose={onHendler}
      footer={
        <footer className={style.footer}>
          <Link to={router.goods.path} className="super-btn">
            Оформить заказ
          </Link>
        </footer>
      }
    >
      {goods &&
        goods.map(el => <AsideCard goods={el} key={shortid.generate()} />)}
      <Divider />
      <p className={style.total}>
        Итого: {goods && goodsCalcTotal(goods)} грн.
      </p>
    </Drawer>
  );
}

export default AsideGoods;
