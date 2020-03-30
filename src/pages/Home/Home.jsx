import React from "react";
import Title from "../../components/Title";
import RenderListCard from "./../../components/RenderListCard";
import TopBaner from "./../../components/TopBaner";

function Home() {
  return (
    <>
      <TopBaner title="Доставка живого пива на дом" />
      <Title title="Запорожский пивоварный завод ВИСТ" />
      <RenderListCard name="vist" />
      <Title title="Лисичанский пивоварный завод СИЧ" />
      <RenderListCard name="sich" />
      <Title title="Мелитопольский пивоварный завод Димиорис" />
      <RenderListCard name="dimoris" />
      <br />
    </>
  );
}

export default Home;
