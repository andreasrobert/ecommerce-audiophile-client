import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image'
import styles from '../styles/Home.module.css'



const Container = styled.div`
background-color: black;
padding: 0 23px;
height: 60px;
display: flex;
color: white;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid hsl(240,17%,26%);

@media (min-width: 500px) {
  
}

`;

const Container2nd= styled.div`

`;




function Intro() {  
  return (
    <>
      <Container>
        

      </Container>
    </>
  );
}

export default Intro;