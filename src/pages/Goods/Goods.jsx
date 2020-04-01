import clsx from "clsx";
import React, { useState } from "react";
import shortid from "shortid";
import AsideCard from "../../components/AsideGoods/AsideCard";
import Container from "../../components/Container/Container";
import TopBaner from "./../../components/TopBaner";
import * as style from "./Goods.module.scss";

function Goods({ goods }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [flat, setFlat] = useState("");
  const [padik, setPadik] = useState("");
  const [remember, setRemember] = useState(false);

  const fields = [
    {
      id: "100",
      name: "name",
      label: "Имя",
      value: name,
      isRequere: true
    },
    {
      id: "200",
      name: "phone",
      label: "Телефон",
      value: phone,
      isRequere: true
    },
    {
      id: "300",
      name: "street",
      label: "Улица",
      value: street,
      isRequere: true
    },
    {
      id: "400",
      name: "house",
      label: "Дом",
      value: house,
      isRequere: true
    },
    {
      id: "500",
      name: "flat",
      label: "Квартира / Офис",
      value: flat,
      isRequere: false
    },
    {
      id: "600",
      name: "padik",
      label: "Подъезд",
      value: padik,
      isRequere: false
    }
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
        setPhone(value);
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

  return (
    <>
      <TopBaner title="Корзина" />

      <Container container={style.box}>
        <div className={style.left}>
          <h2 className={style.title}>Оформление заказа</h2>
          <form className={style.form}>
            {fields.map(el => (
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
              value={remember}
              className={style.rememerMe_input}
            />
            <label className={style.rememerMe}>Запонить меня</label>
            <button type="submit" className={clsx("super-btn", style.submit)}>
              Оформить заказ
            </button>
          </form>
        </div>
        <div className={style.right}>
          <h2 className={style.title}>Корзина</h2>
          {goods &&
            goods.map(el => <AsideCard goods={el} key={shortid.generate()} />)}
        </div>
      </Container>
    </>
  );
}

export default Goods;
