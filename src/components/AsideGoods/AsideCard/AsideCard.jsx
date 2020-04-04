import { CloseOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import db from "./../../../db/db";
import goodsCalcTotal from "./../../../helpers/goodsCalcTotal";
import * as style from "./AsideCard.module.scss";

function AsideCard({ goods, onDelete }) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    setItem(db.find((el) => el.id === goods.id));
  }, [goods]);

  const totalPrice = () => goodsCalcTotal([goods]);

  const hendlerDelete = () => onDelete(goods._id);

  return (
    item && (
      <div className={style.card}>
        <button
          type="button"
          className={style.closeBtn}
          onClick={hendlerDelete}
        >
          <CloseOutlined style={{ color: "red", fontSize: "18px" }} />
        </button>
        <div className={style.img_wrp}>
          <img src={item.img} alt={item.title} className={style.img} />
        </div>

        <div className={style.discription}>
          <p className={style.title}>{item.discription}</p>

          {Number(item.id) >= 200 ? (
            <p>Кол-во: {goods.currentSize} шт.</p>
          ) : (
            <p>Объем: {goods.currentSize} л.</p>
          )}
          <p className={style.price}>{totalPrice()} грн.</p>
        </div>
      </div>
    )
  );
}

export default AsideCard;
