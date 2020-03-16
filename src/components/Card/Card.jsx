import { PlusOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import React, { useState } from "react";
import SplitTunk from "./../SplitTunk";
import * as style from "./Card.module.scss";
import AcceptGoods from "../AcceptGoods/AcceptGoods";

function Card({ addGoods, item }) {
  const [tunk, setTunk] = useState(0.5);
  const [loading, setLoading] = useState(false);

  // Модалка SplitTunk
  const [visible, setViseble] = useState(false);
  const showModal = () => setViseble(true);
  const onClose = e => setViseble(false);

  // Модалка Accept Goods
  const [acceptGoods, setAcceptGoods] = useState(false);
  const showAccept = () => setAcceptGoods(true);
  const closeAccept = () => setAcceptGoods(false);

  // Счетчик
  const STEP = 0.5;
  const ink = () => setTunk(tunk + STEP);
  const dec = () => setTunk(tunk - STEP > 0.5 ? tunk - STEP : 0.5);

  // Кнопка купить под картой
  const btnAdd = () => {
    setLoading(true);
    addGoods({ id: item.id, currentSize: Number(tunk) });

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <>
      <SplitTunk
        show={visible}
        onClose={onClose}
        addGoods={btnAdd}
        item={item}
        genSize={tunk}
        ink={ink}
        dec={dec}
      />
      <AcceptGoods show={acceptGoods} onClose={closeAccept} id={item.id} />
      <div className={style.card}>
        <div className={style.img_wrp}>
          <img className={style.img} alt={item.brend} src={item.img} />
          <div className={style.overlay}></div>
        </div>

        <p className={style.discription}>{item.discription}</p>
        <p className={style.price}>{item.price} грн. за 1 л</p>
        <div className={style.control}>
          <Tooltip title="Розлить по таре" arrowPointAtCenter>
            <button
              type="button"
              className={style.bottleBtn}
              onClick={showModal}
            >
              <svg className={style.icon}>
                <use href="#bottle"></use>
              </svg>
            </button>
          </Tooltip>

          <div className={style.select}>
            <button onClick={dec} className={style.btnControl}>
              -
            </button>
            <span>{tunk}</span>
            <button onClick={ink} className={style.btnControl}>
              +
            </button>
          </div>

          <Button
            className={style.buyBtn}
            icon={<PlusOutlined />}
            loading={loading}
            onClick={btnAdd}
          >
            Купить
          </Button>
        </div>
      </div>
    </>
  );
}

export default Card;
