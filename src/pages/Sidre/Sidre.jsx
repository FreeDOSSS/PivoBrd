import React from "react";
import { Helmet } from "react-helmet";
import RenderListCard from "../../components/RenderListCard";
import TopBaner from "../../components/TopBaner";
import Title from "./../../components/Title";
import withGa from "../../utils/HOC/withGa";

function Sidre() {
  return (
    <>
      <Helmet>
        <title>Доставка сидра | Бердянск</title>
      </Helmet>
      <TopBaner title="Доставка сидра в Бердянске" type="sidre" />
      <Title title="Разливной сидр в ассортименте" />
      <RenderListCard name="sidre" />
      <br />
    </>
  );
}

export default withGa(Sidre);
