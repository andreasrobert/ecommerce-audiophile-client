import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Container = styled.div`
background-color: transparent;
background-image: url({introImg});
height: 79vh;
display: flex;
color: white;
justify-content: space-between;
align-items: center;
z-index: -10;
margin-bottom: 10px;

@media (min-width: 500px) {
  
}

`;


const Text= styled.div`
z-index: 4;
width:50%;
/* aspect-ratio:1; */
min-height: 100%;
padding-left: 7.5vw;
display: flex;
flex-direction: column;
justify-content: center;
@media (max-width: 920px) {
  width:100%;
  align-items: center;
  padding: 0px !important;
  }


`;



const Header = styled.div`
font-weight: 700;
max-width: 70%;
letter-spacing: 0.1vh;
line-height: clamp(3vh,4vw,7.7vh);
padding-bottom: 2vh;
/* font-size: 6vh; */
font-size: clamp(3vh,4vw,6vh);
@media (max-width: 920px) {
  width:55%;
  text-align: center;
  }
@media (max-width: 500px) {
  width:75%;
  }

`;

const Details = styled.p`
font-size: 2vh;
font-weight: 400;
color: white;
line-height: clamp(2vh,2.4vw,3.5vh);
font-size: 2vh;
font-size: clamp(1.4vh,1.5vw,2vh);

@media (max-width: 920px) {
  width:80%;
  text-align: center;

  }
`;

const Button = styled.div`
background-color:#D87D4A;
height: 5vh;
width: 15.5vh;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-weight: 700;
letter-spacing: 0.25vh;
margin-top: clamp(1.5vh,2.7vw,5.5vh);
font-size: 1.5vh;
cursor: pointer;
`;

const Container2nd= styled.div`

`;



function HomeMiddle() {  
  return (
    <>
      <Container>
      

      </Container>
    </>
  );
}

export default HomeMiddle;