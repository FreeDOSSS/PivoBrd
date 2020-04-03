import React from "react";
import { Helmet } from "react-helmet";
import RenderListCard from "../../components/RenderListCard";
import TopBaner from "../../components/TopBaner";
import Title from "./../../components/Title";

function Sidre() {
  return (
    <>
      <Helmet>
        <title>Доставка сидра | Бердянск</title>
      </Helmet>
      <TopBaner title="Доставка сидра" />
      <Title title="Завод сидра" />
      <RenderListCard name="sidre" />
      <br />
    </>
  );
}

export default Sidre;
