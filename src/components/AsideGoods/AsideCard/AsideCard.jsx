import { CloseOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import db from "./../../../db/db";
import price from "./../../../db/price";
import * as style from "./AsideCard.module.scss";

import goodsCalcTotal from "./../../../helpers/goodsCalcTotal";

function AsideCard({ goods, onDelete }) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    setItem(db.find(el => el.id === goods.id));
  }, [goods]);

  const totalPrice = () => goodsCalcTotal([goods]);
  // item.price * goods.currentSize +
  // goods.slice.reduce(
  // (acc, el) => (acc += price.bottle[el.type] * el.count),
  // 0
  // );

  return (
    item && (
      <div className={style.card}>
        <button type="button" className={style.closeBtn}>
          <CloseOutlined style={{ color: "red", fontSize: "18px" }} />
        </button>
        <div className={style.img_wrp}>
          <img src={item.img} alt={item.brend} className={style.img} />
        </div>

        <div className={style.discription}>
          <p className={style.title}>{item.discription}</p>
          <p className={style.price}>{totalPrice()} грн.</p>
        </div>
      </div>
    )
  );
}

export default AsideCard;
