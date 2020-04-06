/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Container from "../Container";
import * as style from "./Footer.module.scss";

import vars from "../../constants/variables";
import clsx from "clsx";

const { phone_call_hot, viber, tg } = vars;

function Footer() {
  const getYear = () => new Date().getFullYear();
  return (
    <div className={style.down}>
      <Container wrp={style.wrp} container={style.box}>
        <h2 className={style.name}>pivasov.com</h2>
        <div className={style.soc}>
          <a
            href={viber}
            className={clsx(style.soc_link, style.viber)}
            target="_blank"
          >
            <svg className={style.soc_icon}>
              <use href="#viber"></use>
            </svg>
          </a>

          <a
            href={tg}
            className={clsx(style.soc_link, style.tg)}
            target="_blank"
          >
            <svg className={style.soc_icon}>
              <use href="#tg"></use>
            </svg>
          </a>
        </div>
      </Container>
      <Container container={style.copyrate} wrp={style.copyrate__wrp}>
        <p className={style.left}>
          Горячая линия
          <a href={`tel:${phone_call_hot.replace(/\s/g, "")}`}>
            {phone_call_hot}
          </a>
        </p>
        <p className={style.right}>
          <span> САЙТ РАЗРАБОТАН </span>
          <a href="https://webcreate.pro" target="_blank">
            WEBCREATE.PRO
          </a>
          © {getYear()}
        </p>
      </Container>
    </div>
  );
}

export default Footer;
