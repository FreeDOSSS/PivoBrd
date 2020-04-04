import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import goodsCalcTotal from "../../helpers/goodsCalcTotal";
import AsideGoods from "../AsideGoods";
import Container from "../Container";
import logo from "./../../assets/images/logo.png";
import vars from "./../../constants/variables";
import router from "./../../router/router";
import AsideMenu from "./AsideMenu";
import * as style from "./Menu.module.scss";

const { phone_call_1, phone_call_2 } = vars;

function Menu({ goods }) {
  const [showCanvas, setShowCanvas] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const hendlerAsideMenu = () => setShowMenu(!showMenu);

  const hendlerButton = () => {
    setShowCanvas(!showCanvas);
  };

  return (
    <>
      <AsideMenu show={showMenu} onClose={hendlerAsideMenu} />
      <AsideGoods show={showCanvas} onHendler={hendlerButton} />
      <Container wrp={style.wrp} container={style.box}>
        <div className={style.left}>
          <div className={style.logo_wrp}>
            <img src={logo} alt="Logo" className={style.logo} />
          </div>
          <div className={style.divider}></div>

          <div className={style.city}>
            Бердянск
            {/* Бердянск <CaretDownOutlined /> */}
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
                to={router.sidre.path}
                className={style.link}
                activeClassName={style.activeLink}
              >
                Сидр
              </NavLink>
            </li>
            <li className={style.item}>
              <NavLink
                to={router.zakuski.path}
                className={style.link}
                activeClassName={style.activeLink}
              >
                Закуски
              </NavLink>
            </li>
          </ul>
          <button
            type="button"
            className={style.btnOpenMenu}
            onClick={hendlerAsideMenu}
          >
            <svg>
              <use href="#menu"></use>
            </svg>
          </button>
          <button
            type="button"
            className={style.icon_wrp}
            onClick={hendlerButton}
          >
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
