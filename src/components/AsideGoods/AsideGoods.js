// import * as style from "./AsideGoods.module.scss";
import { Drawer } from "antd";
import React from "react";

function AsideGoods({ show, onHendler }) {
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

  return (
    <Drawer
      title="Корзина"
      visible={show}
      width={"100%"}
      className="goods"
      onClose={onHendler}
    ></Drawer>
  );
}

export default AsideGoods;
