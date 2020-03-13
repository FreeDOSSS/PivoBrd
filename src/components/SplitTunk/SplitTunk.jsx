import { Divider, Modal, Alert } from "antd";
import React, { useEffect, useState } from "react";
import * as style from "./SplitTunk.module.scss";

import price from "./../../helpers/price";

// const { Title } = Typography;

function SplitTunk({ show, item, onClose, onOk, genSize, ink, dec }) {
  const [bottle_05, setBottle_05] = useState(0);
  const [bottle_1, setBottle_1] = useState(0);
  const [bottle_15, setBottle_15] = useState(0);
  const [bottle_2, setBottle_2] = useState(0);
  const [bottle_3, setBottle_3] = useState(0);
  const [totalBottle, setTotalBottle] = useState(null);

  const reduceBootle = () =>
    bottle_05 * 0.5 + bottle_1 + bottle_15 * 1.5 + bottle_2 * 2 + bottle_3 * 3;

  useEffect(() => {
    if (bottle_3 < 0) setBottle_3(0);
    if (bottle_2 < 0) setBottle_2(0);
    if (bottle_15 < 0) setBottle_15(0);
    if (bottle_1 < 0) setBottle_1(0);
    if (bottle_05 < 0) setBottle_05(0);

    setTotalBottle([
      {
        type: "0.5",
        count: bottle_05
      },
      {
        type: "1",
        count: bottle_1
      },
      {
        type: "1.5",
        count: bottle_15
      },
      {
        type: "2",
        count: bottle_2
      },
      {
        type: "3",
        count: bottle_3
      }
    ]);
  }, [bottle_05, bottle_1, bottle_15, bottle_2, bottle_3]);

  // Ситили модалки
  const documentStyle = {
    minWidth: "300px",
    maxWidth: "800px"
  };

  const bodyModal = {
    padding: "40px"
  };
  // TODO При изменение общего обёма вывести ошибку в случае перебора по бутылкам
  // Счетчик по тарам
  const add = ({ target }) => {
    console.log("reduceBootle", reduceBootle);
    const { size } = target.dataset;
    if (reduceBootle() + Number(size) > genSize) return;
    switch (size) {
      case "0.5":
        setBottle_05(bottle_05 + 1);
        break;
      case "1":
        setBottle_1(bottle_1 + 1);
        break;
      case "1.5":
        setBottle_15(bottle_15 + 1);
        break;
      case "2":
        setBottle_2(bottle_2 + 1);
        break;
      case "3":
        setBottle_3(bottle_3 + 1);
        break;
      default:
        return;
    }
  };

  const del = ({ target }) => {
    const { size } = target.dataset;
    switch (size) {
      case "0.5":
        setBottle_05(bottle_05 - 1);
        break;
      case "1":
        setBottle_1(bottle_1 - 1);
        break;
      case "1.5":
        setBottle_15(bottle_15 - 1);
        break;
      case "2":
        setBottle_2(bottle_2 - 1);
        break;
      case "3":
        setBottle_3(bottle_3 - 1);
        break;
      default:
        return;
    }
  };

  return (
    <Modal
      visible={show}
      // onOk={onOk}
      onCancel={onClose}
      style={documentStyle}
      bodyStyle={bodyModal}
      width={"100%"}
      footer={null}
    >
      <div className={style.pivo}>
        <div className="img_wrp">
          <img src={item.img} alt={item.brend} className={style.img} />
        </div>

        <div className={style.discription}>
          <p className={style.title}>{item.discription}</p>

          <div className={style.genSize}>
            <p className={style.sizeTitle}>Общий объем:</p>
            <div className={style.selectSize}>
              <button onClick={dec} className={style.btnSize}>
                -
              </button>
              <span className={style.count}>{genSize}</span>
              <button onClick={ink} className={style.btnSize}>
                +
              </button>
            </div>
          </div>

          {genSize - reduceBootle() > 0 && (
            <Alert
              message={`Не распределено ${genSize - reduceBootle()}л`}
              type="warning"
            />
          )}
          {genSize - reduceBootle() < 0 && (
            <Alert
              message={`Преувеличен выбор разлива тары на ${reduceBootle() -
                genSize}`}
              type="error"
            />
          )}
          <Divider orientation="left">Розлить по тарам</Divider>

          <div className={style.selectTunk}>
            <div className={style.selectTunk_item}>
              <p className={style.selectTunk_item_title}>Бутылка, 3л</p>

              <div className={style.select}>
                <svg className={style.icon}>
                  <use href="#bottle"></use>
                </svg>
                <div className={style.selectSize}>
                  <button onClick={del} className={style.btnSize} data-size="3">
                    -
                  </button>
                  <span className={style.count}>{bottle_3}</span>
                  <button onClick={add} className={style.btnSize} data-size="3">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className={style.selectTunk_item}>
              <p className={style.selectTunk_item_title}>Бутылка, 2л</p>

              <div className={style.select}>
                <svg className={style.icon}>
                  <use href="#bottle"></use>
                </svg>
                <div className={style.selectSize}>
                  <button onClick={del} className={style.btnSize} data-size="2">
                    -
                  </button>
                  <span className={style.count}>{bottle_2}</span>
                  <button onClick={add} className={style.btnSize} data-size="2">
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className={style.selectTunk_item}>
              <p className={style.selectTunk_item_title}>Бутылка, 1.5л</p>

              <div className={style.select}>
                <svg className={style.icon}>
                  <use href="#bottle"></use>
                </svg>
                <div className={style.selectSize}>
                  <button
                    onClick={del}
                    className={style.btnSize}
                    data-size="1.5"
                  >
                    -
                  </button>
                  <span className={style.count}>{bottle_15}</span>
                  <button
                    onClick={add}
                    className={style.btnSize}
                    data-size="1.5"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className={style.selectTunk_item}>
              <p className={style.selectTunk_item_title}>Бутылка, 1л</p>

              <div className={style.select}>
                <svg className={style.icon}>
                  <use href="#bottle"></use>
                </svg>
                <div className={style.selectSize}>
                  <button onClick={del} className={style.btnSize} data-size="1">
                    -
                  </button>
                  <span className={style.count}>{bottle_1}</span>
                  <button onClick={add} className={style.btnSize} data-size="1">
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className={style.selectTunk_item}>
              <p className={style.selectTunk_item_title}>Бутылка, 0.5л</p>

              <div className={style.select}>
                <svg className={style.icon}>
                  <use href="#bottle"></use>
                </svg>
                <div className={style.selectSize}>
                  <button
                    onClick={del}
                    className={style.btnSize}
                    data-size="0.5"
                  >
                    -
                  </button>
                  <span className={style.count}>{bottle_05}</span>
                  <button
                    onClick={add}
                    className={style.btnSize}
                    data-size="0.5"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {reduceBootle() > 0 && (
            <>
              <Divider orientation="left">Выбрано</Divider>
              {totalBottle.map(el =>
                el.count > 0 ? (
                  <div className={style.row} key={el.type}>
                    <p className={style.name}>Бутылка {el.type}л</p>
                    <p className={style.price}>
                      {price.bottle[el.type] * el.count}
                    </p>
                  </div>
                ) : null
              )}
            </>
          )}
        </div>
      </div>
      <footer className={style.footer}></footer>
    </Modal>
  );
}

export default SplitTunk;
