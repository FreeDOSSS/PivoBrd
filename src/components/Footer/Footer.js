import React from "react";
import Container from "./../Container";
import * as style from "./Footer.module.scss";

function Footer() {
  const getYear = () => new Date().getFullYear();
  return (
    <>
      <Container wrp={style.wrp} container={style.box}>
        <h2 className={style.name}>pivasov.com</h2>
      </Container>
      <Container container={style.copyrate} wrp={style.copyrate__wrp}>
        <p className={style.left}>
          © {getYear()} pivasov.com все прова защищены.
        </p>
        <p className={style.right}>
          САЙТ РАЗРАБОТАН
          <a href="https://webcreate.pro" target="_blank">
            WEBCREATE.PRO
          </a>
        </p>
      </Container>
    </>
  );
}

export default Footer;
