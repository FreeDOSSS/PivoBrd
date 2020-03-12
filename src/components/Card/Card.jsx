import React from "react";
import * as style from "./Card.module.scss";

function Card({ item }) {
  return (
    <div className={style.card}>
      <div className={style.img_wrp}>
        <img className={style.img} alt={item.brend} src={item.img} />
        <div className={style.overlay}></div>
      </div>

      <p className={style.discription}>{item.discription}</p>
      <p className={style.price}>{item.price} грн. за 1 л</p>
      <div className={style.control}>
        <div className="tunk"></div>
      </div>
    </div>
  );
}

export default Card;
