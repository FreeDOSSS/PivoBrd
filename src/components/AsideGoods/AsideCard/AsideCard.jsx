import React, { useEffect, useState } from "react";
import db from "./../../../db/db";
import price from "./../../../db/price";
import * as style from "./AsideCard.module.scss";

function AsideCard({ goods }) {
  const [item, setItem] = useState(null);
  console.log("goods", goods);

  useEffect(() => {
    setItem(db.find(el => el.id === goods.id));
  }, [goods]);

  const totalPrice = () =>
    item.price * goods.currentSize +
    (goods.slice.lenght > 0
      ? goods.slice.reduce(
          (acc, el) => (acc += price[el.type] * goods.count),
          0
        )
      : 0);
  return (
    item && (
      <div className={style.card}>
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
