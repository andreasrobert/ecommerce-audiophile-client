import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Container = styled.div`
background-color: white;
padding: 7rem 7.5vw 2.5rem 7.5vw;


@media (max-width: 500px) {
  
}

`;

const ContainerUp= styled.div`
padding-bottom: 5vh;
display: flex;
@media (max-width: 920px) {
 flex-direction:column ;
}
`;

const Features = styled.div`
width: 56%;
@media (max-width: 920px) {
  width: 100%;
}
`;

const TheBox = styled.div`
padding-left: 14%;
/* width:46%; */
@media (max-width: 920px) {
  padding: 4vh 0;
}
`;

const Header = styled.div`
font-weight: 700;
letter-spacing: 0.2vh;
font-size: 4.2vh;
margin-bottom: 4vh;
`;

const Details = styled.div`
font-weight: 400;
color: #00000088;
line-height: 3vh;


`;

const Accessory =styled.div`
display: flex;
font-weight: 400;
font-size: 1.7vh;
letter-spacing: 0.07vh;
margin-left: 4.3vh;
align-items: center;
color: #000000d1;
margin-bottom: 1.4vh;
`;

const Numbers = styled.div`
color: #D87D4A;
font-weight: 700;
font-size: 1.5vh;
position: absolute;
margin-left: -3.8vh;
`;



const ContainerLow= styled.div`
display: flex;
@media (max-width: 500px) {
 flex-direction:column ;
}
`;

const LeftImg = styled.div`
width: 34VW;
margin-top: 28px;
@media (max-width: 500px) {
  width: 100%;
}
`;

const RightImg = styled.div`
width: 51VW;
margin-top: 28px;
@media (max-width: 500px) {
  width: 100%;
}
`;


const FirstImg = styled.div`
padding: 0 clamp(5px,3vw,40px) clamp(1px,1.5vw,20px) 0px;
@media (max-width: 500px) {
 padding: 0;
}

`;

const SecondImg = styled.div`
padding: clamp(1px,1.5vw,20px) clamp(1px,3vw,40px) 20px 0px;
@media (max-width: 500px) {
 margin-top: 28px;
 padding: 0;
}
`;

const ThirdImg = styled.div`

`;


function ProductDetail(props:{data:any}) {  

  return (
    <>
      <Container>
        <ContainerUp>
          <Features>
            <Header>FEATURES</Header>
            <Details>
              {props.data.features}
            </Details>
            </Features>
          <TheBox>
            <Header>IN THE BOX</Header>
            
            {props.data.includes.map((stats:any)=>{
                    return (
                      <>
                     <Accessory key={stats.item}>
                     <Numbers key={`${stats.item}-number`}>{stats.quantity}x</Numbers>
                      {stats.item}
                      </Accessory>          
                      </>
                    
                  );
                })}

          </TheBox>
        </ContainerUp>

        <ContainerLow>
          <LeftImg>
            <FirstImg>
            <div className={`${styles.desktop} ${styles.imgBorder}`}>
            <Image src={props.data.gallery.first.desktop} alt="" layout="responsive" width="445 " height="280"></Image>
            </div>
            <div className={`${styles.tablet} ${styles.imgBorder}`}>
            <Image src={props.data.gallery.first.tablet} alt="" layout="responsive" width="554" height="348"></Image>
            </div>
            <div className={`${styles.mobile} ${styles.imgBorder}`}>
            <Image src={props.data.gallery.first.mobile} alt="" width="654 " height="348"></Image>
            </div>
            </FirstImg>
            <SecondImg>
            <div className={`${styles.desktop} ${styles.imgBorder}`}>
            <Image src={props.data.gallery.second.desktop} alt="" layout="responsive" width="445" height="280"></Image>
            </div>
            <div className={`${styles.tablet} ${styles.imgBorder}`}>
            <Image src={props.data.gallery.second.tablet} alt="" width="554" height="348"></Image>
            </div>
            <div className={`${styles.mobile} ${styles.imgBorder}`}>
            <Image src={props.data.gallery.second.mobile} alt="" width="654 " height="348"></Image>
            </div>
            </SecondImg>
          </LeftImg>
          <RightImg>
            <ThirdImg>
            <div className={`${styles.desktop} ${styles.imgBorder}`}>
            <Image src={props.data.gallery.third.desktop} alt="" layout="responsive" width="635" height="526"></Image>
            </div>
            <div className={`${styles.tablet} ${styles.imgBorder}`}>
            <Image src={props.data.gallery.third.tablet} alt="" layout="responsive" width="790" height="651"></Image>
            </div>
            <div className={`${styles.mobile} ${styles.imgBorder}`}>
            <Image src={props.data.gallery.third.mobile} alt="" layout="responsive" width="654" height="736"></Image>
            </div>
            </ThirdImg>
          </RightImg>
        </ContainerLow>

      </Container>
    </>
  );
}

export default ProductDetail;