import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import goodsCalcTotal from "../../helpers/goodsCalcTotal";
import AsideGoods from "../AsideGoods";
import Container from "../Container";
import vars from "./../../constants/variables";
import router from "./../../router/router";
import * as style from "./Menu.module.scss";
import { CaretDownOutlined } from "@ant-design/icons";

import logo from "./../../assets/images/logo.png";

const { phone_call_1, phone_call_2 } = vars;

function Menu({ goods }) {
  const [showCanvas, setShowCanvas] = useState(false);

  const hendlerButton = () => {
    setShowCanvas(!showCanvas);
  };

  return (
    <>
      <AsideGoods show={showCanvas} onHendler={hendlerButton} />
      <Container wrp={style.wrp} container={style.box}>
        <div className={style.left}>
          <div className={style.logo_wrp}>
            <img src={logo} alt="Logo" className={style.logo} />
          </div>
          <div className={style.divider}></div>

          <div className={style.city}>
            Бердянск <CaretDownOutlined />
          </div>

          <p>Доставка с 9 до 22</p>
          <a href={`tel:${phone_call_1.replace(/\s/g, "")}`}>
            <svg className={style.phoneIcon}>
              <use href="#mobilePhone"></use>
            </svg>
            {phone_call_1}
          </a>
          <a href={`tel:${phone_call_2.replace(/\s/g, "")}`}>
            <svg className={style.phoneIcon}>
              <use href="#mobilePhone"></use>
            </svg>
            {phone_call_2}
          </a>
        </div>

        <div className={style.right}>
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
                exact
                to="/sidre"
                className={style.link}
                activeClassName={style.activeLink}
              >
                Сидр
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
            <li></li>
          </ul>
          <div className="rightBlock">
            <button
              type="button"
              className={style.icon_wrp}
              onClick={hendlerButton}
            >
              {/* <h4 className={style.cart_title}>Корзина</h4> */}
              <svg className={style.icon}>
                <use href="#cart"></use>
              </svg>
              <span className={style.circle}>{goodsCalcTotal(goods)} грн.</span>
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Menu;
