import React from "react";
import * as style from "./Title.module.scss";

function Title({ title = "" }) {
  return (
    <div className={style.parallax}>
      <h2 className={style.title}>{title}</h2>
    </div>
  );
}

export default Title;
