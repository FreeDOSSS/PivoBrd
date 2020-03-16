import { Modal, Typography } from "antd";
import React, { useEffect, useState } from "react";
import db from "./../../helpers/db";
import * as style from "./AcceptGoods.module.scss";
const { Title, Text } = Typography;

function AcceptGoods({ show, onClose, id }) {
  const documentStyle = {
    minWidth: "300px",
    maxWidth: "800px"
  };

  const bodyModal = {
    padding: "40px"
  };

  const [item, setItem] = useState(null);
  useEffect(() => {
    setItem(db.find(el => el.id === id));
  }, [id]);

  return (
    item && (
      <Modal
        visible={show}
        style={documentStyle}
        bodyStyle={bodyModal}
        width={"100%"}
        onCancel={onClose}
        footer={null}
      >
        <Title level={3}>Вы добавили в корзину</Title>
        <div className={style.wrp}>
          <div className={style.img_wrp}>
            <img src={item.img} className={style.img} alt={item.name} />
          </div>
          <div className={style.discription}>
            <Title level={4}>{item.discription}</Title>
          </div>
        </div>
      </Modal>
    )
  );
}

export default AcceptGoods;
