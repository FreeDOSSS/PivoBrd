import React from "react";
import * as style from "./Container.module.scss";
import clsx from "clsx";

function Container({ children, wrp, container }) {
  return (
    <div className={clsx(style.wrp, wrp)}>
      <div className={clsx(style.container, container)}>{children}</div>
    </div>
  );
}

export default Container;
