import { Alert, Divider, Modal } from "antd";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import price from "./../../../../db/price";
import * as style from "./SplitTunk.module.scss";
import splitBottle from "../../../../helpers/splitBottle";
import shortid from "shortid";

// const { Title } = Typography;

function SplitTunk({ show, item, onClose, genSize, ink, dec, addGoods }) {
  const [bottle_05, setBottle_05] = useState(0);
  const [bottle_1, setBottle_1] = useState(0);
  const [bottle_15, setBottle_15] = useState(0);
  const [bottle_2, setBottle_2] = useState(0);
  const [bottle_3, setBottle_3] = useState(0);
  const [totalBottle, setTotalBottle] = useState(null);

  // Общий обем всех бутылок
  const reduceBootle = () =>
    bottle_05 * 0.5 + bottle_1 + bottle_15 * 1.5 + bottle_2 * 2 + bottle_3 * 3;

  const checkError = () => (genSize === reduceBootle() ? "" : "disabled");

  // Стоимость напитка + тара
  const totlaPrice = () =>
    (Array.isArray(totalBottle)
      ? totalBottle.reduce(
          (acc, el) => acc + price.bottle[el.type] * el.count,
          0
        )
      : 0) +
    genSize * item.price;

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
  // Счетчик по тарам
  const add = ({ target }) => {
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

  // Кнопка Купить
  const hendlerBuyBtn = () => {
    addGoods({
      id: item.id,
      currentSize: genSize,
      slice: totalBottle
    });
    onClose();
  };

  // Кнопка Розлить
  const hendlerSplitBtn = () => {
    splitBottle(genSize).forEach(el => {
      console.log("el", el);
      switch (el.type) {
        case "3":
          setBottle_3(el.count);
          break;
        case "2":
          setBottle_2(el.count);
          break;
        case "1.5":
          setBottle_15(el.count);
          break;
        case "1":
          setBottle_1(el.count);
          break;
        case "0.5":
          setBottle_05(el.count);
          break;
        default:
          return;
      }
    });
  };

  return (
    <Modal
      visible={show}
      onCancel={onClose}
      style={documentStyle}
      bodyStyle={bodyModal}
      width={"100%"}
      footer={null}
    >
      <div className={style.pivo}>
        <div className={style.img_wrp}>
          <img src={item.img} alt={item.title} className={style.img} />
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
              className={style.animShowRow}
              message={`Не распределено ${genSize - reduceBootle()} л.`}
              type="warning"
            />
          )}

          {genSize - reduceBootle() < 0 && (
            <Alert
              className={style.animShowRow}
              message={`Преувеличен выбор разлива тары на ${reduceBootle() -
                genSize} л.`}
              type="error"
            />
          )}

          <Divider orientation="left">Розлить по тарам</Divider>

          <div className={style.selectTunk}>
            <div className={style.selectTunk_item}>
              <p className={style.selectTunk_item_title}>Бутылка, 0.5 л.</p>

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

            <div className={style.selectTunk_item}>
              <p className={style.selectTunk_item_title}>Бутылка, 1 л.</p>

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
              <p className={style.selectTunk_item_title}>Бутылка, 1.5 л.</p>

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
              <p className={style.selectTunk_item_title}>Бутылка, 2 л.</p>

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
              <p className={style.selectTunk_item_title}>Бутылка, 3 л.</p>

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
          </div>

          <button
            type="button"
            className={clsx("super-btn", style.autoSplit)}
            onClick={hendlerSplitBtn}
          >
            Розлить автоматически
          </button>

          {reduceBootle() > 0 && (
            <>
              <Divider orientation="left">Выбрано</Divider>
              {totalBottle.map(el =>
                el.count > 0 ? (
                  <div
                    className={clsx(style.row, style.animShowRow)}
                    key={shortid.generate()}
                  >
                    <p className={style.name}>Бутылка {el.type} л.</p>
                    <p className={style.price}>
                      {price.bottle[el.type] * el.count} грн.
                    </p>
                  </div>
                ) : null
              )}
            </>
          )}
          <Divider orientation="left">Итого</Divider>
          <div className={clsx(style.total, style.row)}>
            {totlaPrice()} грн.
            <button
              type="button"
              className={clsx("super-btn", style.buyBtn)}
              disabled={checkError()}
              onClick={hendlerBuyBtn}
            >
              Купить
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default SplitTunk;
