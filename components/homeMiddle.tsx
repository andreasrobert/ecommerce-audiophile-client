import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import circleImg from '../public/assets/home/desktop/pattern-circles.svg'

const Container = styled.div`
background-color: white;
padding: 3.5rem 7.5vw 2.5rem 7.5vw;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


@media (min-width: 500px) {
  
}

`;

const Upper = styled.div`
display: flex;
z-index: 2;
background-color: #D87D4A;
border-radius: 10px;
width: 100%;
padding-top: 9vh;
position: relative;
margin-bottom: 10vh;
@media (max-width: 920px) {
  flex-direction: column;
  margin-bottom: 4vh;

  }
`;

const Mid = styled.div`
z-index: 2;
border-radius: 10px;
background-image: url(https://res.cloudinary.com/img23/image/upload/v1626953338/audiophile/assets/home/desktop/image-speaker-zx7_hizcid.jpg);
background-repeat: no-repeat;
background-size: cover;
width: 100%;
padding-top: 28%;
position: relative;
margin-bottom: 10vh;
@media (max-width: 920px) {
  background-image: url(https://res.cloudinary.com/img23/image/upload/v1626953340/audiophile/assets/home/tablet/image-speaker-zx7_vbhiz7.jpg);
  padding-top: 46%;
  }
  @media (max-width: 500px) {
  background-image: url(https://res.cloudinary.com/img23/image/upload/v1626953339/audiophile/assets/home/mobile/image-speaker-zx7_njnjep.jpg);
  padding-top: 98%;
  margin-bottom: 4vh;

  }

`;

const Contain = styled.div`
/* position: absolute; */
width: 50vh;
/* background-color: black; */
display: flex;
align-items: flex-end;
align-self: flex-end;
margin-left: 10vw;

@media (max-width: 920px) {
  margin: -4vh 0 5vh 0;
  align-self: center;
  width: 50%
  }

 

`;




const Text= styled.div`
width:50%;
/* aspect-ratio:1; */
/* min-height: 100%; */
padding-left: 10%;
display: flex;
flex-direction: column;
justify-content: center;



@media (max-width: 920px) {
  width:100%;
  align-items: center;
  padding: 0 0 5vh 0 !important;
  }


`;

const TagLine= styled.div`
font-weight: 500;
letter-spacing: 1vh;
color: #D87D4A;
padding-bottom: 1.5vh;
@media (max-width: 920px) {
  text-align:center;
  margin-right:-1vh;
  }

`;

const Header = styled.div`
color: white;
font-weight: 700;
max-width: 30%;
letter-spacing: 0.1vh;
line-height: clamp(3vh,4vw,7.7vh);
padding-bottom: 2vh;
/* font-size: 6vh; */
font-size: clamp(3vh,4vw,6vh);
@media (max-width: 920px) {
  text-align: center;
  max-width: 33%;

  }
@media (max-width: 500px) {
  max-width: 50%;

  }

&.mid{
  position: absolute;
  color:black;
  top: 30%;
  left: 5%;
  max-width: fit-content;
}

&.down{
  color:black;
  margin-left: 4vh;
  max-width: fit-content;
  font-size: clamp(2vh,4vw,7vh);

}

`;

const Details = styled.p`
font-size: 2vh;
font-weight: 400;
color: white;
line-height: clamp(2.4vh,2.4vw,3.5vh);
font-size: 2vh;
font-size: clamp(1.4vh,1.5vw,2vh);
@media (max-width: 920px) {
  width:80%;
  text-align: center;
  margin-top: -0.8vh;
  }


`;

const Button = styled.div`
background-color: black;
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

&:hover{
  background-color: #4c4c4c;
}

&.mid{
  position: absolute;
  background-color: transparent;
  border: 1px solid black;
  color:black;
  top: 42%;
  left: 5%;

  &:hover{
    color: white;
    background-color: black;
  }

}

&.down{
  background-color: transparent;
  border: 1px solid black;
  color:black;
  margin-left: 4vh;

  &:hover{
    color: white;
    background-color: black;
  }
}

`;


const Down = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
@media (max-width: 500px) {
  flex-direction: column;
  }

`;

const DownImg = styled.div`
background-color: yellow;
border-radius: 10px;
background-image: url(https://res.cloudinary.com/img23/image/upload/v1626953338/audiophile/assets/home/desktop/image-earphones-yx1_rdtj8v.jpg);
background-repeat: no-repeat;
background-size: cover;
width: 49%;
padding-top: 29%;
position: relative;
@media (max-width: 920px) {
  background-image: url(https://res.cloudinary.com/img23/image/upload/v1626953340/audiophile/assets/home/tablet/image-earphones-yx1_fyk7mh.jpg);
  padding-top: 47%;
  }
  @media (max-width: 500px) {
  background-image: url(https://res.cloudinary.com/img23/image/upload/v1626953339/audiophile/assets/home/mobile/image-earphones-yx1_lxdas7.jpg);
  padding-top: 62%;
  width: 100%;
  margin-bottom: 4vh;
  }

`;

const DownText= styled.div`
border-radius: 10px;
min-height: 100%;
width: 49%;
background-color: #F1F1F1;
display: flex;
flex-direction: column;
justify-content: center;
@media (max-width: 500px) {
  width: 100%;
  height: 25vh;
  }
`;




function HomeMiddle() {  
  return (
    <>
      <Container>
      <Upper>
      {/* <svg className={styles.index} width="944" height="944" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" fill="none" fillRule="evenodd" opacity=".202"><circle cx="472" cy="472" r="235.5"/><circle cx="472" cy="472" r="270.5"/><circle cx="472" cy="472" r="471.5"/></g></svg> */}
          {/* <Image src={circleImg} alt="" layout="fixed"></Image> */}

        <Contain>
      <div className={`${styles.desktop} ${styles.imgBorder}`}>
            <Image src='https://res.cloudinary.com/img23/image/upload/v1626953339/audiophile/assets/home/desktop/image-speaker-zx9_afnie2.png' alt=""  width="756" height="918"></Image>
            </div>
            <div className={`${styles.tablet} ${styles.imgBorder}`}>
            <Image src='https://res.cloudinary.com/img23/image/upload/v1626953339/audiophile/assets/home/desktop/image-speaker-zx9_afnie2.png' alt="" width="756" height="918"></Image>
            </div>
            <div className={`${styles.mobile} ${styles.imgBorder}`}>
            <Image src='https://res.cloudinary.com/img23/image/upload/v1626953339/audiophile/assets/home/desktop/image-speaker-zx9_afnie2.png' alt=""  width="756" height="918"></Image>
            </div>
      </Contain>
      {/* <Text className="placeholder"></Text> */}
      <Text>
          <Header>ZX9 SPEAKER</Header>
          <Details>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</Details>
          <Link href={`/product/`} passHref>
          <Button> SEE PRODUCT</Button>       
          </Link>
        </Text>
      </Upper>

      <Mid>
        <Header className="mid">ZX7 SPEAKER</Header>
        <Button className="mid">SEE PRODUCT</Button>
      </Mid>

      <Down>
        <DownImg></DownImg>
        <DownText>
        <Header className="down">YX1 EARPHONES</Header>
        <Button className="down">SEE PRODUCT</Button>
        </DownText>
      
      </Down>

      </Container>
    </>
  );
}

export default HomeMiddle;