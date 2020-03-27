import React from "react";
import Parallax from "../../components/Pralax";
import RenderListCard from "./../../components/RenderListCard";
import TopBaner from "./../../components/TopBaner";

function Home() {
  return (
    <>
      <TopBaner title="Доставка живого пива на дом" />
      <Parallax title="Запорожский пивоварный завод ВИСТ" />
      <RenderListCard name="vist" />
      <Parallax title="Лисичанский пивоварный завод СИЧ" />
      <RenderListCard name="sich" />
      <br />
    </>
  );
}

export default Home;
