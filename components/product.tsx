import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Container = styled.div`
background-color: white;
padding: 7rem 7.5vw 2.5rem 7.5vw;
display: flex;

&.leftOrder{
  flex-direction: row-reverse;
}

@media (max-width: 920px) {
   flex-direction: column !important;
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
background-color: white;
width:50%;
height: 43.5vw;
padding: 10px;
border-radius: 10px;
@media (max-width: 920px) {
  width:100% ;
  }
@media (max-width: 500px) {
  height: 87vw;
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

&.leftOrder{
  padding-left: 0px;
  padding-right: 8%;

}

@media (max-width: 920px) {
  width:100%;
  align-items: center;
  padding: 0px !important;
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
font-weight: 700;
max-width: fit-content;
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
color: #00000089;
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


function Product(props:{data:any, order: number}) { 
  

  return (
    <>
      <Container className={props.order%2 === 0? "leftOrder": "rightOrder"}>
        <Picture >
          {/* <Pic></Pic> */}
          {/* <div style={{ background: '' }} /> */}
          {/* <Image src={`/assets/mobile/${testImg1}`} alt="" layout="responsive"></Image> */}
          <div className={`${styles.desktop} ${styles.imgBorder}`}>
          {/* <Image src="{testImgD}" alt="" layout="responsive" height="1110"></Image> */}
          <Image src={props.data.image.desktop} alt="" width="1080" height="1120"></Image>
          </div>
          <div className={`${styles.tablet} ${styles.imgBorder}`}>
          {/* <Image src={props.data.image.tabletCat} alt="" layout="responsive" height="676"></Image> */}
          <Image src={props.data.image.tabletCat} alt="" layout="responsive" width="1378" height="704"></Image>

          </div>

          <div className={`${styles.mobile} ${styles.imgBorder}`}>
          <Image src={props.data.image.mobile} alt="" layout="responsive" width="676" height="676"></Image>
          </div>
          {/* <Image src="/assets/desktop/image-best-gear.jpg" alt="" layout="responsive"></Image> */}
        </Picture>
        <Text className={props.order%2 === 0? "leftOrder": "rightOrder"}>
        <TagLine>{props.data.new? 'NEW PRODUCT' : ""}</TagLine>
          <Header>{props.data.name.toUpperCase()}</Header>
          <Details>{props.data.description}</Details>
          <Link href={`/product/${props.data.slug}`} passHref>
          <Button> SEE PRODUCT</Button>       
          </Link>
        </Text>
      </Container>
    </>
  );
}

export default Product;