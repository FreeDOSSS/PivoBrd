import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import db from "./../../helpers/db";
import Container from "./../Container";
import * as style from "./RenderListCard.module.scss";

function RenderListCard({ name }) {
  const [list, setList] = useState(null);
  useEffect(() => {
    setList(db.filter(el => el.category === name));
  }, [name]);

  return (
    <Container container={style.box}>
      {list && list.map(el => <Card item={el} key={el.id} />)}
    </Container>
  );
}

export default RenderListCard;
