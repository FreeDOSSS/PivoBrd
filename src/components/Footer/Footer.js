/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Container from "./../Container";
import * as style from "./Footer.module.scss";

import vars from "./../../constants/variables";

const { phone_call_hot } = vars;

function Footer() {
  const getYear = () => new Date().getFullYear();
  return (
    <div className={style.down}>
      <Container wrp={style.wrp} container={style.box}>
        <h2 className={style.name}>pivasov.com</h2>
      </Container>
      <Container container={style.copyrate} wrp={style.copyrate__wrp}>
        <p className={style.left}>
          {/* © {getYear()} pivasov. Горячая линия */}
          Горячая линия
          <a href={`tel:${phone_call_hot.replace(/\s/g, "")}`}>
            {phone_call_hot}
          </a>
        </p>
        <p className={style.right}>
          САЙТ РАЗРАБОТАН
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
