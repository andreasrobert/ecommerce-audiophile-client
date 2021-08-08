import React from "react";
import styled from "styled-components";
import { Spinner } from "@chakra-ui/react";

const Container = styled.div`
  background-color: black;
  height: 25vh;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 8vh;
  font-weight: 700;
  letter-spacing: 0.4vh;

  @media (max-width: 920px) {
    height: 14vh;
    font-size: 7vw;
  }

  @media (max-width: 500px) {
    height: 100px;
  }
`;

function OnLoad() {
  return (
    <>
      <Container>
        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="orange.500" size="xl"></Spinner>
      </Container>
    </>
  );
}

export default OnLoad;
