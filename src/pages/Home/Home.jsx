import { Typography } from "antd";
import React from "react";
import RenderListCard from "../../components/RenderListCard";
import Container from "../../components/Container";

const { Title } = Typography;
// import * as style from "./Home.module.scss";

function Home() {
  return (
    <>
      <Container>
        <Title>Запорожский пивоварный завод ВИСТ</Title>
      </Container>
      <RenderListCard name="vist" />
      {/* <RenderListCard name="sich" /> */}
      {/* <RenderListCard name="dimoris" /> */}
    </>
  );
}

export default Home;
