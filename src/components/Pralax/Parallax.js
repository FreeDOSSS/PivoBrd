import React from "react";
import * as style from "./Parallax.module.scss";
import ReactWOW from "react-wow";

function Parallax({ title = "" }) {
  return (
    <div className={style.parallax}>
      <h2 className={style.title}>{title}</h2>

      <ReactWOW
        animation="fadeInLeft"
        duration="2000"
        iteration="1"
        offset={-100}
      >
        <svg className={style.icon}>
          <use href="#devider"> </use>
        </svg>
      </ReactWOW>
    </div>
  );
}

export default Parallax;
