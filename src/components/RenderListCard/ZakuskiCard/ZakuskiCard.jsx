import clsx from "clsx";
import React, { useState } from "react";
import AcceptGoods from "../../AcceptGoods";
import * as style from "./ZakuskiCard.module.scss";

function ZakuskiCard({ addGoods, item }) {
  const [tunk, setTunk] = useState(1);

  // Модалка Accept Goods
  const [acceptGoods, setAcceptGoods] = useState(false);
  const showAccept = () => setAcceptGoods(true);
  const closeAccept = () => setAcceptGoods(false);

  // Счетчик
  const STEP = 1;
  const ink = () => setTunk(tunk + STEP);
  const dec = () => setTunk(tunk - STEP > STEP ? tunk - STEP : STEP);

  // Кнопка купить под картой
  const btnAdd = () => {
    addGoods({
      id: item.id,
      currentSize: Number(tunk),
      slice: [],
    });
    showAccept();
  };

  return (
    <>
      <AcceptGoods show={acceptGoods} onClose={closeAccept} id={item.id} />
      <div className={style.card}>
        <div className={style.top}>
          <div className={style.img_wrp}>
            <img className={style.img} alt={item.title} src={item.img} />
            <div className={style.overlay}></div>
          </div>

          <p className={style.discription}>{item.discription}</p>
        </div>
        <div className={style.bottom}>
          <p className={style.price}>{item.price} грн/уп.</p>
          <div className={style.control}>
            <div className={style.select}>
              <button onClick={dec} className={style.btnControl}>
                -
              </button>
              <span>{tunk}</span>
              <button onClick={ink} className={style.btnControl}>
                +
              </button>
            </div>

            <button
              className={clsx("super-btn", style.buyBtn)}
              onClick={btnAdd}
            >
              Купить
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ZakuskiCard;
