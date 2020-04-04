import { Divider, Drawer } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import router from "../../../router";
import logo from "./../../../assets/images/logo.png";
import vars from "./../../../constants/variables";
import * as style from "./AsideMenu.module.scss";

const { phone_call_1, phone_call_2 } = vars;

function AsideMenu({ show, onClose }) {
  const bodyStyle = {
    backgroundColor: "#1D1D1D",
  };
  return (
    <Drawer
      bodyStyle={bodyStyle}
      visible={show}
      onClose={onClose}
      footer={false}
      className={style.asidemenu}
      placement="left"
    >
      <div className={style.logo_wrp}>
        <img src={logo} alt="Logo" className={style.logo} />
      </div>
      <div className={style.city}>
        Бердянск
        {/* Бердянск <CaretDownOutlined /> */}
      </div>
      <p className={style.delivery}>Доставка с 9 до 22</p>
      <a className={style.tel} href={`tel:${phone_call_1.replace(/\s/g, "")}`}>
        <svg className={style.phoneIcon}>
          <use href="#mobilePhone"></use>
        </svg>
        {phone_call_1}
      </a>
      <a className={style.tel} href={`tel:${phone_call_2.replace(/\s/g, "")}`}>
        <svg className={style.phoneIcon}>
          <use href="#mobilePhone"></use>
        </svg>
        {phone_call_2}
      </a>
      <Divider />
      <ul className={style.menu}>
        <li className={style.item}>
          <NavLink
            onClick={onClose}
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
            onClick={onClose}
            exact
            to={router.sidre.path}
            className={style.link}
            activeClassName={style.activeLink}
          >
            {router.sidre.title}
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink
            onClick={onClose}
            to={router.zakuski.path}
            className={style.link}
            activeClassName={style.activeLink}
          >
            {router.zakuski.title}
          </NavLink>
        </li>
      </ul>
    </Drawer>
  );
}

export default AsideMenu;
