import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import testImgD from '../public/assets/desktop/image-product.jpg'
import testImgT from '../public/assets/tablet/image-product.jpg'
import testImgM from '../public/assets/mobile/image-product.jpg'

const testImg1 ="image-product.jpg"

const Container = styled.div`
background-color: white;
padding: 7rem 7.5vw 2.5rem 7.5vw;
display: flex;
@media (max-width: 500px) {
   flex-direction: column;
   align-items: center;
   
  }
`;

const Pic = styled.div({
  backgroundImage: `url('../assets/desktop/image-best-gear.jpg')`,
  // width: "100%",
  height: "100%",
  // paddingTop:"100%",
  backgroundSize: "cover",
  backgroundPosition:"center",
  backgroundRepeat: "no-repeat",
  
})

const Picture = styled.div`
/* background-image: url('../assets/desktop/image-best-gear.jpg');
background-position: center;
background-repeat: no-repeat;
background-size: cover; */
width:50%;
height: 43.5vw;
@media (max-width: 920px) {
  height: 100%;
  }

@media (max-width: 500px) {
  width:100% ;
  }

`;

const Text= styled.div`
background-color: white;
width:50%;
/* aspect-ratio:1; */
min-height: 100%;
padding-left: 10%;
display: flex;
flex-direction: column;
justify-content: center;
@media (max-width: 500px) {
  width:100%;
  align-items: center;
  padding: 0px;
  }
`;

const TagLine= styled.div`
font-weight: 500;
letter-spacing: 1vh;
color: #D87D4A;
padding-bottom: 1.5vh;
@media (max-width: 500px) {
  text-align:center;
  margin-right:-1vh;
  }

`;

const Header = styled.div`
font-weight: 700;
max-width: fit-content;
letter-spacing: 0.1vh;
line-height: clamp(3vh,4vw,7.7vh);
padding-bottom: 2vh;
/* font-size: 6vh; */
font-size: clamp(3vh,4vw,6vh);
@media (max-width: 920px) {
  width:55%;
  }
@media (max-width: 500px) {
  width:75%;
  text-align: center;
  }

`;

const Details = styled.p`
font-size: 2vh;
font-weight: 400;
color: #00000089;
line-height: clamp(2vh,2.4vw,3.5vh);
font-size: 2vh;
font-size: clamp(1.4vh,1.5vw,2vh);
@media (max-width: 920px) {
  width:80%;
  }

@media (max-width: 500px) {
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
margin-left: 4vh;
font-size: 1.5vh;
cursor: pointer;
`;

const Counter = styled.div`
background-color:#F1F1F1;
height: 5vh;
width: 13vh;
color: black;
display: flex;
justify-content: center;
align-items: center;
font-weight: 700;
margin-top: clamp(1.5vh,2.7vw,5.5vh);
font-size: 1.5vh;
position: relative;

`;

const Plus= styled.div`
  position: absolute;
  right: 1vh;
  padding:1vh;
  cursor: pointer;
  font-size: 1.8vh;

  &:hover{
    color:#D87D4A;
  }

`;

const Minus= styled.div`
  position: absolute;
  left: 1vh;
  padding:1vh;
  cursor: pointer;
  font-size: 1.95vh;
  &:hover{
    color:#D87D4A;
  }
`;

function Product(props:{data:any}) {  


  return (
    <>
      <Container>
        <Picture >
          {/* <Pic></Pic> */}
          {/* <div style={{ background: '' }} /> */}
          {/* <Image src={require(`../public/assets/desktop/${testImg1}`)} height="1110" alt="" layout="responsive"></Image> */}
          <div className={`${styles.desktop} ${styles.imgBorder}`}>
          <Image src={props.data.image.desktop} alt="" layout="responsive" width="1080" height="1120"></Image>
          </div>
          <div className={`${styles.tablet} ${styles.imgBorder}`}>
          <Image src={props.data.image.tablet} alt="" layout="responsive" width="562" height="960"></Image>
          </div>
          <div className={`${styles.mobile} ${styles.imgBorder}`}>
          <Image src={props.data.image.mobile} alt="" layout="responsive" width="676" height="676"></Image>
          </div>
          {/* <Image src="/assets/desktop/image-best-gear.jpg" alt="" layout="responsive"></Image> */}
        </Picture>
        <Text>
          <TagLine>{props.data.new? 'NEW PRODUCT' : ""}</TagLine>
          <Header>{props.data.name.toUpperCase()}</Header>
          <Details>{props.data.description}</Details>
          <div className={styles.flexMe}>
          <Counter>
            <Minus>-</Minus>
            1
            <Plus>+</Plus>
            </Counter>
          <Button>ADD TO CART</Button>   
          </div>    
        </Text>
      </Container>
    </>
  );
}

export default Product;