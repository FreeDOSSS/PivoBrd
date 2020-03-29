import clsx from "clsx";
import React, { createRef } from "react";
import bokal from "./../../assets/images/bokal.png";
import hmel from "./../../assets/images/hmel.png";
import * as style from "./TopBaner.module.scss";

function TopBaner({ title = "Ytn" }) {
  const startX = -50;
  const startY = -50;

  const bokalRef = createRef();
  const hmelRef = createRef();

  const onMouseMove = e => {
    const { clientX, clientY, target } = e;

    const w = target.offsetWidth;
    const h = target.offsetHeight;

    // ver 1
    let x = Math.round((clientX / w) * startX);
    let y = Math.round((clientY / h) * startY);

    bokalRef.current.style.transform = `translate(${x}px, ${y}px)`;
    hmelRef.current.style.transform = `translate(${x * 2}px, ${y * 2}px)`;

    // console.log("bokalRef", bokalRef);
    // target.style.backgroundPosition = `${x}px ${y}px`;
  };

  return (
    <div className={style.wrp} onMouseMove={onMouseMove}>
      <img
        src={bokal}
        alt="bokal"
        className={clsx(style.img, style.bokal)}
        ref={bokalRef}
      />
      <img
        src={hmel}
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
