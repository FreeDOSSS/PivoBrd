import clsx from "clsx";
import React, { createRef } from "react";
import bokal from "./../../assets/images/bokal.png";
import hmel from "./../../assets/images/hmel.png";
import * as style from "./TopBaner.module.scss";

import bokal_sidre from "./../../assets/images/bokal_sidre.png";
import frukt from "./../../assets/images/frukt_1.png";

function TopBaner({ title = "", type = "" }) {
  const startX = -50;
  const startY = -50;

  const bokalRef = createRef();
  const hmelRef = createRef();

  const onMouseMove = (e) => {
    const { clientX, clientY, target } = e;

    const w = target.offsetWidth;
    const h = target.offsetHeight;

    // ver 1
    let x = Math.round((clientX / w) * startX);
    let y = Math.round((clientY / h) * startY);

    bokalRef.current.style.transform = `translate(${x}px, ${y}px)`;
    hmelRef.current.style.transform = `translate(${x * 2}px, ${y * 2}px)`;
  };

  let img_left = "";
  let img_right = "";

  switch (type) {
    case "pivo":
      img_left = bokal;
      img_right = hmel;
      break;
    case "sidre":
      img_left = bokal_sidre;
      img_right = frukt;
      break;
    case "zakuski":
      break;
    default:
      break;
  }

  return (
    <div className={style.wrp} onMouseMove={onMouseMove}>
      <img
        src={img_left}
        alt="bokal"
        className={clsx(style.img, style.bokal)}
        ref={bokalRef}
      />
      <img
        src={img_right}
        alt="hmel"
        className={clsx(style.img, style.hmel)}
        ref={hmelRef}
      />
      <div className={style.container}>
        <h2 className={style.title}>{title}</h2>
        <svg className={style.icon}>
          <use href="#devider"></use>
        </svg>
      </div>
    </div>
  );
}

export default TopBaner;
