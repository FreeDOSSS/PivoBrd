import React from "react";
import { NavLink } from "react-router-dom";
import router from "./../../router/router";
import Container from "./../Container/Container";
import * as style from "./Menu.module.scss";

function Menu() {
  return (
    <Container wrp={style.wrp}>
      <ul className={style.menu}>
        <li className={style.item}>
          <NavLink
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
        <li className={style.item}>
          <NavLink
            // to={router.home.path}
            to="/atribute"
            className={style.link}
            activeClassName={style.activeLink}
          >
            {/* {router.home.title} */}
            Все для отдыха
          </NavLink>
        </li>
      </ul>
    </Container>
  );
}

export default Menu;
