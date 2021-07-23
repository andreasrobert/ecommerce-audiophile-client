import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image'
import hamburgerImg from '../public/assets/tablet/icon-hamburger.svg'
import logoImg from '../public/assets/desktop/logo.svg'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Category from './category';



const Container = styled.div`
/* z-index: ; */
background-color: black;
height: 85px;
display: flex;
color: white;
justify-content: center;
align-items: center;
position: relative;
@media (max-width: 500px) {
  &::after{
    position: absolute;
    bottom: 0px;
    z-index: 10;
    content: "";
    
    width: 100%;
    height: 1px;
    background-color: #35343a;
  }
}
`;

const Container2nd= styled.div`
z-index: 10;
height: 100%;
width: 85vw;
display: flex;
justify-content: space-between;
align-items: center;
@media (min-width: 500px) {
  border-bottom: 1px solid #35343a;
}
`;

const Header = styled.h4`
font-weight: 700;
font-size: 13px;
letter-spacing: 2px;
padding: 0px 1.5rem 0px 1.5rem;
cursor: pointer;
&:hover{
  color:#D87D4A;
}
`;

const Drop = styled.div`
z-index: 9;
background-color: white;
top: 85px;
position: absolute;
width: 100%;
height: calc(28vw + 14px);
border-bottom-left-radius: 8px;
border-bottom-right-radius: 8px;

@media (max-width: 500px) {
  height: 120vh;
  top: -80px;

}

@media (min-width: 920px) {
  display: none !important;
}
&.false{
    display:none;
  }


`;

const DropContainer = styled.div`
margin-top: -50px;
@media (max-width: 500px) {
  height: 120vh;
  margin-top: 0px;
}


`;

const BackDrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  right: 0px;

  &.false{
    display:none;
  }
  @media (min-width: 920px) {
  display: none;
}
`;


function Navbar() {  
  const [popUp, setPopUp] =useState(false)

  const handlePopUp = () =>{
    setPopUp(prev => !prev);
};

  return (
    <>
      <Container>
        <Container2nd>
          <div className={`${styles.pointMe} ${styles.mobileHam} `} onClick={handlePopUp}>
          <Image src={hamburgerImg} alt="" width="23.33" height="20" />
          </div>
          <Link href="/" passHref>
          <Image src={logoImg} alt="" width="143" height="25" className={`${styles.pointMe}`}/>
          </Link>
          <div className={`${styles.flexMe} ${styles.desktop}`}>
          <Link href="/" passHref><Header>HOME</Header></Link>
          <Link href="/category/headphones" passHref><Header>HEADPHONES</Header></Link>
          <Link href="/category/speakers" passHref><Header>SPEAKER</Header></Link>
          <Link href="/category/earphones" passHref><Header className="end" >EARPHONES</Header></Link>
          </div>

          <div className={`${styles.pointMe}`}>
          <svg className ={styles.svgies} width="23" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z" fill="#FFF" fillRule="nonzero"/></svg>
          </div>
        
        </Container2nd>
        

      </Container>
      <Drop className={`${popUp}`}>
        <DropContainer>
          <Category></Category>
          </DropContainer>
        </Drop>
        <BackDrop className={`${popUp}`} onClick={handlePopUp}></BackDrop>

        
    </>
  );
}

export default Navbar;