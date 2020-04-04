import { CheckCircleTwoTone } from "@ant-design/icons";
import { Modal } from "antd";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import shortid from "shortid";
import AsideCard from "../../components/AsideGoods/AsideCard";
import Container from "../../components/Container/Container";
import goodsCalcTotal from "../../helpers/goodsCalcTotal";
import sendToMes from "../../helpers/sendToMes";
import * as style from "./Goods.module.scss";
import withGa from "../../utils/HOC/withGa";

function Goods({ goods, clear }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [flat, setFlat] = useState("");
  const [padik, setPadik] = useState("");
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("field")) {
      const loc = JSON.parse(localStorage.getItem("field"));

      setName(loc.name);
      setPhone(loc.phone);
      setStreet(loc.street);
      setHouse(loc.house);
      setFlat(loc.flat);
      setPadik(loc.padik);
      setRemember(loc.remember);
    }
  }, []);

  const fields = [
    {
      id: "100",
      name: "name",
      label: "Имя",
      value: name,
      isRequere: true,
    },
    {
      id: "200",
      name: "phone",
      label: "Телефон",
      value: phone,
      isRequere: true,
    },
    {
      id: "300",
      name: "street",
      label: "Улица",
      value: street,
      isRequere: true,
    },
    {
      id: "400",
      name: "house",
      label: "Дом",
      value: house,
      isRequere: true,
    },
    {
      id: "500",
      name: "flat",
      label: "Квартира / Офис",
      value: flat,
      isRequere: false,
    },
    {
      id: "600",
      name: "padik",
      label: "Подъезд",
      value: padik,
      isRequere: false,
    },
  ];

  const hendlerRemeber = ({ target }) => setRemember(target.checked);

  const hendlerInput = ({ target }) => {
    const { name, value } = target;

    // setName(value);
    switch (name) {
      case "name":
        setName(value);
        break;
      case "phone":
        setPhone(value.replace(/\D/g, ""));
        break;
      case "street":
        setStreet(value);
        break;
      case "house":
        setHouse(value);
        break;
      case "flat":
        setFlat(value);
        break;
      case "padik":
        setPadik(value);
        break;
      default:
        return;
    }
    // return;
  };

  const hendlerForm = (event) => {
    if (remember) {
      const loc = {
        name,
        phone,
        street,
        house,
        flat,
        padik,
        remember,
      };

      localStorage.setItem("field", JSON.stringify(loc));
    } else {
      localStorage.clear();
    }
    event.preventDefault();
    sendToMes(fields, goods);
    clear();
    info();
  };

  function info() {
    Modal.info({
      icon: (
        <CheckCircleTwoTone
          twoToneColor="#52c41a"
          style={{ fontSize: "24px" }}
        />
      ),
      title: "Ваш заказ успешно передан.",

      onOk() {},
    });
  }

  return (
    <>
      <Helmet>
        <title>Корзина</title>
      </Helmet>
      {/* <TopBaner title="Корзина" /> */}
      <div className={style.spacer}></div>
      <Container container={style.box}>
        <div className={style.left}>
          <h2 className={style.title}>Оформление заказа</h2>
          <form className={style.form} onSubmit={hendlerForm}>
            {fields.map((el) => (
              <div key={el.id} data-field={el.name} className={style.label_wrp}>
                <input
                  id={el.name}
                  type="text"
                  name={el.name}
                  value={el.value}
                  className={style.input}
                  onChange={hendlerInput}
                  required={el.isRequere ? "required" : null}
                  placeholder={el.label}
                />
                <label className={style.label} htmlFor={el.name}></label>
              </div>
            ))}

            <input
              type="checkbox"
              name="rememre"
              onChange={hendlerRemeber}
              checked={remember}
              className={style.rememerMe_input}
              id="remember"
            />
            <label
              htmlFor="remember"
              onClick={hendlerInput}
              className={style.rememerMe}
            >
              Запомнить меня
              <span>
                {remember && (
                  <svg className={style.svg}>
                    <use href="#check"></use>
                  </svg>
                )}
              </span>
            </label>
            <button type="submit" className={clsx("super-btn", style.submit)}>
              Оформить заказ
            </button>
          </form>
        </div>
        <div className={style.right}>
          <h2 className={style.title}>Корзина</h2>
          <div className={style.list}>
            {goods.length > 0 &&
              goods.map((el) => (
                <AsideCard goods={el} key={shortid.generate()} />
              ))}
            {goods.length > 0 && (
              <>
                <p className={style.total}>
                  Итого: {goodsCalcTotal(goods)} грн.
                </p>
                <p className={style.delivery}>+ Доставка по тарифу такси</p>
              </>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}

export default withGa(Goods);
