import { Tooltip } from "antd";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addGoodsItem } from "./../../Redux/goods/actions";
import * as style from "./Card.module.scss";

function Card({ addGoods, item }) {
  const [tunk, setTunk] = useState(0.5);

  const STEP = 0.5;
  const ink = () => setTunk(tunk + STEP);
  const dec = () => setTunk(tunk - STEP > 0.5 ? tunk - STEP : 0.5);

  const btnAdd = () => addGoods({ id: item.id, currentSize: Number(tunk) });

  return (
    <div className={style.card}>
      <div className={style.img_wrp}>
        <img className={style.img} alt={item.brend} src={item.img} />
        <div className={style.overlay}></div>
      </div>

      <p className={style.discription}>{item.discription}</p>
      <p className={style.price}>{item.price} грн. за 1 л</p>
      <div className={style.control}>
        <Tooltip title="Розлить по таре" arrowPointAtCenter>
          <button type="button" className={style.bottleBtn}>
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

        <button onClick={btnAdd} className={style.buyBtn}>
          Купить
        </button>
      </div>
    </div>
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
