import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { beer } from "./../../helpers/beer";
import Container from "./../Container";
import * as style from "./RenderListCard.module.scss";

function RenderListCard({ name }) {
  const [list, setList] = useState(null);

  useEffect(() => {
    switch (name) {
      case "beer":
        setList(beer);
        break;
      default:
        break;
    }
    console.log("list", list);
  }, []);

  return (
    <Container container={style.box}>
      {list && list.map(el => <Card item={el} key={el.id} />)}
    </Container>
  );
}

export default RenderListCard;
