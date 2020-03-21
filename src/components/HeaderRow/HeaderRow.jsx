import clsx from "clsx";
import React, { useState } from "react";
import { connect } from "react-redux";
import goodsCalcTotal from "../../helpers/goodsCalcTotal";
import AsideGoods from "../AsideGoods";
import Container from "../Container/Container";
import constants from "./../../constants/variables";
import * as style from "./HeaderRow.module.scss";

function HeaderRow({ city = "Бердянск", citys = "Бердянске", goods }) {
  const [showCanvas, setShowCanvas] = useState(false);

  const hendlerButton = () => {
    // alert("Корзина еще не работает, но она умеет считать");
    setShowCanvas(!showCanvas);
  };

  // const showSliceBeer = () => {};

  return (
    <>
      <AsideGoods show={showCanvas} onHendler={hendlerButton} />
      <Container wrp={style.wrp} container={style.container}>
        <div className="logo_wrp">
          <img
            src="https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-53d2bd9951c01ec63b5f8112e3904315.png"
            alt=""
            className={style.logo}
          />
        </div>
        <div className={style.arrow}>
          <p className={style.city}>{city}</p>
          <p className={style.city_dostavka}>Доставка курьером</p>
        </div>
        <div className={clsx(style.column, style.arrow)}>
          <div className={style.icon_wrp}>
            <svg className={style.icon}>
              <use href="#mobilePhone"></use>
            </svg>
          </div>
          <div>
            <a
              href={"tel:" + constants.phone.replace(/\s/g, "")}
              className="tel"
            >
              {constants.phone}
            </a>
            <p>Линия связи для заказа</p>
          </div>
        </div>
        <div className={clsx(style.column, style.arrow)}>
          <div className={style.icon_wrp}>
            <svg className={style.icon}>
              <use href="#delivery"></use>
            </svg>
          </div>
          <div className={style.delivery}>
            <p>Доставка: </p>
            <p>9:00 - 21:00</p>
          </div>
        </div>
        <div className={style.column}>
          <button
            type="button"
            className={style.icon_wrp}
            onClick={hendlerButton}
          >
            <h4 className={style.cart_title}>Корзина</h4>
            <svg className={style.icon}>
              <use href="#cart"></use>
            </svg>
            <span className={style.circle}>{goodsCalcTotal(goods)} грн.</span>
          </button>
        </div>
      </Container>
    </>
  );
}

const mapStaToProps = state => {
  return {
    cart: state.goods
  };
};

export default connect(mapStaToProps)(HeaderRow);
