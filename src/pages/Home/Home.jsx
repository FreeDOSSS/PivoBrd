import { Typography } from "antd";
import React from "react";
import Parallax from "../../components/Pralax";
import RenderListCard from "./../../components/RenderListCard";
// import Container from "./../../components/Container";
import TopBaner from "./../../components/TopBaner";
// import Parallax from "./../../components/Prallax";

// const { Title } = Typography;
// import * as style from "./Home.module.scss";

function Home() {
  return (
    <>
      <TopBaner title="Пиво" />
      {/* <Container>
        <Title>Запорожский пивоварный завод ВИСТ</Title>
      </Container> */}

      <Parallax title="Запорожский пивоварный завод ВИСТ" />
      <RenderListCard name="vist" />
      {/* <RenderListCard name="sich" /> */}
      {/* <RenderListCard name="dimoris" /> */}
    </>
  );
}

export default Home;
