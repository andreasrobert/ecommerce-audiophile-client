import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image'
import hamburgerImg from '../public/assets/tablet/icon-hamburger.svg'
import logoImg from '../public/assets/desktop/logo.svg'
import styles from '../styles/Home.module.css'
import Link from 'next/link'



const Container = styled.div`
background-color: black;
height: 85px;
display: flex;
color: white;
justify-content: center;
align-items: center;
@media (max-width: 500px) {
  border-bottom: 1px solid hsl(240,17%,26%);
}
`;

const Container2nd= styled.div`
height: 100%;
width: 85vw;
display: flex;
justify-content: space-between;
align-items: center;
@media (min-width: 500px) {
  border-bottom: 1px solid hsl(240,17%,26%);
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


function Navbar() {  
  return (
    <>
      <Container>
        <Container2nd>
          <div className={`${styles.pointMe} ${styles.mobile}`}>
          <Image src={hamburgerImg} alt="" width="23.33" height="20" />
          </div>
          <Image src={logoImg} alt="" width="143" height="25" />

          <div className={`${styles.flexMe} ${styles.desktop}`}>
          <Link href="/" passHref><Header>HOME</Header></Link>
          <Link href="/category/headphones" passHref><Header>HEADPHONES</Header></Link>
          <Link href="/category/speakers" passHref><Header>SPEAKER</Header></Link>
          <Link href="/category/earphones" passHref><Header className="end">EARPHONES</Header></Link>
          </div>

          <div className={`${styles.pointMe}`}>
          <svg className ={styles.svgies} width="23" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z" fill="#FFF" fillRule="nonzero"/></svg>
          </div>
        
        </Container2nd>
      </Container>
    </>
  );
}

export default Navbar;