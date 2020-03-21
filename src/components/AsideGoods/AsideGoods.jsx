// import * as style from "./AsideGoods.module.scss";
import { Divider, Drawer } from "antd";
import React, { useEffect } from "react";
import goodsCalcTotal from "./../../helpers/goodsCalcTotal";
import AsideCard from "./AsideCard";
import * as style from "./AsideGoods.module.scss";

function AsideGoods({ show, onHendler, goods }) {
  //   const [show, setShow] = useState(false);

  //   const drawerStyle = {
  //     maxWidth: "500px",
  //     width: "100%"
  //   };

  //   const bodyStyle = {
  //     // width: "500px"
  //   };

  //   const maskStyle = {
  //     width: "501px"
  //   };

  useEffect(() => {
    // console.log("goodsCalcTotal(goods)", goodsCalcTotal(goods));
  }, [goods]);

  return (
    <Drawer
      title="Корзина"
      visible={show}
      width={"100%"}
      className="goods"
      onClose={onHendler}
      footer={
        <footer className={style.footer}>
          <button className="super-btn">Оформить заказ</button>
        </footer>
      }
    >
      {goods && goods.map(el => <AsideCard goods={el} key={el.id} />)}
      <Divider />
      {/* <p className={style.total}>Итого: {goodsCalcTotal(goods)} грн.</p> */}
      <p className={style.total}>
        Итого: {goods && goodsCalcTotal(goods)} грн.
      </p>
    </Drawer>
  );
}

export default AsideGoods;
