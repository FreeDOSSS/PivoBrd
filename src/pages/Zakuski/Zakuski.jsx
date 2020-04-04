import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import Container from "../../components/Container";
import Title from "../../components/Title";
import TopBaner from "../../components/TopBaner";
import db from "../../db/db";
import withGa from "../../utils/HOC/withGa";
import ZakuskiCard from "../../components/RenderListCard/ZakuskiCard";
import shortid from "shortid";

import * as style from "./Zakuski.module.scss";

function Zakuski() {
  const [list, setList] = useState(null);

  useEffect(() => {
    setList(db.filter((el) => el.category === "zakuski"));
  }, []);
  return (
    <>
      <Helmet>
        <title>Доставка закусок | Бердянск</title>
      </Helmet>
      <TopBaner title="Доставка закусок" />
      <Title title="Закуски в ассортименте" />
      <Container container={style.box}>
        {list &&
          list.map((el) => <ZakuskiCard item={el} key={shortid.generate()} />)}
      </Container>
      <br />
    </>
  );
}

export default withGa(Zakuski);
