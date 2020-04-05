import React from "react";
import { Helmet } from "react-helmet";
import Title from "../../components/Title";
import RenderListCard from "./../../components/RenderListCard";
import TopBaner from "./../../components/TopBaner";
import withGa from "./../../utils/HOC/withGa";

function Home() {
  return (
    <>
      <Helmet>
        <title>Доставка живого пива | Бердянск</title>
      </Helmet>
      <TopBaner title="Доставка живого пива" type="pivo" />
      <Title title="Запорожский пивоваренный завод ВИСТ" />
      <RenderListCard name="vist" />
      <Title title="Лисичанский пивоваренный завод СИЧ" />
      <RenderListCard name="sich" />
      <Title title="Мелитопольский пивоваренный завод Димиорис" />
      <RenderListCard name="dimoris" />
      <br />
    </>
  );
}

export default withGa(Home);
