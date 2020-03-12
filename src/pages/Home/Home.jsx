import React from "react";
import Container from "../../components/Container";
import RenderListCard from "../../components/RenderListCard";
// import * as style from "./Home.module.scss";

function Home() {
  return (
    <>
      <Container>
        <RenderListCard name="beer" />
      </Container>
    </>
  );
}

export default Home;
