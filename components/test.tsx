import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image'
import styles from '../styles/Home.module.css'



const Container = styled.div`
background-color: darkcyan;
height: 45vh;
display: grid;
grid-template-columns: 7vw 1fr 1fr 1fr 7vw;
grid-template-rows: 6rem 1fr 6rem ;
color: white;
border-bottom: 1px solid hsl(240,17%,26%);
grid-column: 2/ 4;

@media (min-width: 500px) {
  
}

`;

const Container2nd= styled.div`

`;

const Box=styled.div`
background-color: blueviolet;
width: 100px;
height: 75px;
/* justify-self: stretch; */
place-self: center;
grid-row:2/2;
`;




function Test() {  
  return (
    <>
      <Container>
        <Box></Box>
        <Box></Box>

        <Box></Box>


      </Container>
    </>
  );
}

export default Test;
