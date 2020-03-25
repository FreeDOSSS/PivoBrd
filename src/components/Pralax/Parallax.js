import React from "react";
import * as style from "./Parallax.module.scss";

function Parallax({ title = "" }) {
  return (
    <div className={style.parallax}>
      <h2 className={style.title}>{title}</h2>
    </div>
  );
}

export default Parallax;
