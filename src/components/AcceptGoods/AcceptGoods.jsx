import React from "react";
import * as style from "./AcceptGoods.module.scss";
import { Modal } from "antd";

function AcceptGoods({ show, onClose, id }) {
  return <Modal visible={show} onClose={onClose} footer={null}></Modal>;
}

export default AcceptGoods;
