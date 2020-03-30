import React, { useEffect, useState } from "react";
import Card from "./Card";
import db from "./../../db/db";
import Container from "../Container";
import * as style from "./RenderListCard.module.scss";
import shortid from "shortid";

function RenderListCard({ name }) {
  const [list, setList] = useState(null);
  useEffect(() => {
    setList(db.filter(el => el.category === name));
  }, [name]);

  return (
    <Container container={style.box}>
      {list && list.map(el => <Card item={el} key={shortid.generate()} />)}
    </Container>
  );
}

export default RenderListCard;
