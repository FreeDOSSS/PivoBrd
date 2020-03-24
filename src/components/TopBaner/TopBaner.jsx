import React from "react";
import * as style from "./TopBaner.module.scss";

import bokal from "./../../assets/images/bokal.png";
import hmel from "./../../assets/images/hmel.png";
import psheno from "./../../assets/images/phenica.png";
import clsx from "clsx";
import { createRef } from "react";

function TopBaner({ title = "" }) {
  const startX = -50;
  const startY = -50;

  const bokalRef = createRef();
  const hmelRef = createRef();
  const pshenoRef = createRef();

  const onMouseMove = e => {
    const { clientX, clientY, target } = e;

    const w = target.offsetWidth;
    const h = target.offsetHeight;

    // ver 1
    const x = Math.round((clientX / w) * startX);
    const y = Math.round((clientY / h) * startY);

    bokalRef.current.style.transform = `translate(${x}px, ${y}px)`;

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
      <img
        src={psheno}
        alt="psheno"
        className={clsx(style.img, style.pheno)}
        ref={pshenoRef}
      />
    </div>
  );
}

export default TopBaner;
