import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import goodsCalcTotal from "../../helpers/goodsCalcTotal";
import AsideGoods from "../AsideGoods";
import Container from "../Container";
import router from "./../../router/router";
import * as style from "./Menu.module.scss";

import vars from "./../../constants/variables";

const { phone } = vars;

// import logo from "./../../assets/images/";

function Menu({ goods }) {
  const [showCanvas, setShowCanvas] = useState(false);

  const hendlerButton = () => {
    setShowCanvas(!showCanvas);
  };

  console.log("typeof vars.phone", typeof vars.phone);

  return (
    <>
      <AsideGoods show={showCanvas} onHendler={hendlerButton} />
      <Container wrp={style.wrp} container={style.box}>
        <h1 className={style.rightBlock}>Доставка Пива бердянск</h1>
        <ul className={style.menu}>
          <li className={style.item}>
            <NavLink
              exact
              to={router.home.path}
              className={style.link}
              activeClassName={style.activeLink}
            >
              {router.home.title}
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink
              // to={router.home.path}
              to="/zakyski"
              className={style.link}
              activeClassName={style.activeLink}
            >
              {/* {router.home.title} */}
              Закуски
            </NavLink>
          </li>
          <li>
            <img
              src="https://pintsandcrafts.qodeinteractive.com/wp-content/uploads/2018/03/logo-beer-img-light.png"
              alt="Logo"
              className={style.logo}
            />
          </li>
          <li className={style.item}>
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className={style.outsideeLink}
            >
              {phone}
            </a>
          </li>
          <li className={style.item}>
            <NavLink
              to={router.goods.path}
              className={style.link}
              activeClassName={style.activeLink}
            >
              Телефон
            </NavLink>
          </li>
        </ul>
        <div className="rightBlock">
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

export default Menu;
