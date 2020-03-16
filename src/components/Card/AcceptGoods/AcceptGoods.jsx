import { Modal, Typography } from "antd";
import React, { useEffect, useState } from "react";
import db from "./../../../db/db";
import * as style from "./AcceptGoods.module.scss";

const { Title } = Typography;

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
        <Title level={3} uppercase>
          ВЫ ДОБАВИЛИ В КОРЗИНУ
        </Title>
        <div className={style.wrp}>
          <div className={style.img_wrp}>
            <img src={item.img} className={style.img} alt={item.name} />
          </div>
          <div className={style.discription}>
            <Title level={4}>{item.discription}</Title>
            <div className={style.btnGrooup}>
              <button
                onClick={onClose}
                className={style.btnContin}
                //  className="super-btn"
              >
                Продолжить покупки
              </button>
              <button className="super-btn">Перейти в корзину</button>
            </div>
          </div>
        </div>
      </Modal>
    )
  );
}

export default AcceptGoods;
