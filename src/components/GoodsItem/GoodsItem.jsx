import React, { useEffect } from "react";
import * as style from "./GoodsItem.module.scss";
import Container from "../Container/Container";
import { useState } from "react";
import db from "./../../db/db.js";

function GoodsItem({ goods }) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    setItem(db.find(el => el.id === goods.id));
  }, [goods.id]);

  return (
    item && (
      <Container container={style.box}>
        <div className={style.img_wrp}>
          <img src={item.img} alt={item.brend} />
        </div>
        <p className={style.title}>{item.discription}</p>

        <p className={style.bottle}>Общий объём: {goods.currentSize} л.</p>
        <div className={style.slice}>
          <p> Розлив по таре: </p>
        </div>

        <button type="button" className={style.edit}>
          edit
        </button>

        <button type="button" className={style.del}>
          del
        </button>
      </Container>
    )
  );
}

export default GoodsItem;
