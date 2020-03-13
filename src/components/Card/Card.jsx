import { Tooltip, Button, notification } from "antd";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addGoodsItem } from "./../../Redux/goods/actions";
import * as style from "./Card.module.scss";
import { PlusOutlined } from "@ant-design/icons";
import SplitTunk from "../SplitTunk/SplitTunk";

function Card({ addGoods, item }) {
  const [tunk, setTunk] = useState(0.5);
  const [loading, setLoading] = useState(false);

  // Модалка
  const [visible, setViseble] = useState(false);
  const showModal = () => setViseble(true);
  const onClose = e => setViseble(false);
  const onOk = e => console.log("ok", e);

  // Счетчик
  const STEP = 0.5;
  const ink = () => setTunk(tunk + STEP);
  const dec = () => setTunk(tunk - STEP > 0.5 ? tunk - STEP : 0.5);

  // Кнопка купить под картой
  const btnAdd = () => {
    setLoading(true);
    addGoods({ id: item.id, currentSize: Number(tunk) });
    notification.success({ message: "Успешно добавленно!", duration: 1 });
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <>
      <SplitTunk
        show={visible}
        onOk={onOk}
        onClose={onClose}
        item={item}
        genSize={tunk}
        ink={ink}
        dec={dec}
      />
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
const mapDispatchToProps = dispatch => {
  return {
    addGoods: ({ id, currentSize, slice }) =>
      dispatch(addGoodsItem({ id, currentSize, slice }))
  };
};

export default connect(null, mapDispatchToProps)(Card);
// export default Card;
