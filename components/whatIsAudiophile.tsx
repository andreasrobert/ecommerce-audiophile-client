import React from 'react';
import styled from 'styled-components';
import styles from '../styles/Home.module.css';


const Container = styled.div`
background-color: white;
display: flex;
flex-direction: row-reverse;
justify-content: space-between;
height: 100%;
padding: 3.5rem 7.5vw 2.5rem 7.5vw;
@media (max-width: 920px) {
   flex-direction: column;
  }
`;

const ContainerText= styled.div`
display: flex;
flex-direction: column;
width: 50%;
justify-content: center;
@media (max-width: 920px){
  width: 100%;
  align-items: center;
}
`;

const ContainerImg= styled.div`
width: 50%;
height: 100%;
background-color: white;
display: flex;
justify-content: flex-end;
align-items: center;
@media (max-width: 920px) {
  width: 100%;
  height: 40vw;
  }

  @media (max-width: 500px) {
  height: 78vw;
  }

`;

const ImgWrapper = styled.div`
width: 39.7vw;
height: 45vh;
background-color: white;
@media (max-width: 920px) {
  display: block;
  }


`;

const Header = styled.div`
text-align: left;
height: 30x;
max-width: 40vh;
color: #D87D4A;
font-size:  4vh;
font-weight: 700;
line-height: 4.5vh;
letter-spacing: 0.19vh;
&::before{
content: "BRINGING YOU THE ";
color:black
}
&::after{
content: " AUDIO GEAR";
color:black
}
@media (max-width: 920px){
  text-align: center;
  padding: 5.7vw 0 1.2vh 0;
}
@media (max-width: 500px){
  text-align: center;
}
`;

const Detail = styled.p`
padding: 3vh 15vh 0 0;
font-weight: 400;
letter-spacing: 1px;
line-height: 2.5vh;
font-size: 1.59vh;
color: #00000099;
@media (max-width: 920px){
  text-align: center;
  padding: 0 5vh 4vh 5vh;
}
`;



function WhatIsAudiophile() {  
  return (
    <>
      <Container>

      <ContainerImg>
            <div className={styles['gear-img']} />
      </ContainerImg>

      
        <ContainerText>
            <Header>
                BEST
            </Header>
       
            <div>
            <Detail>
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </Detail>
            </div>
        </ContainerText>
        

      </Container>
    </>
  );
}

export default WhatIsAudiophile;