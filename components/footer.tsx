import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logoImg from '../public/assets/desktop/logo.svg'


const Container = styled.div`
height: 100%;
background-color: black;
padding: 3.5rem 7.5vw 2.5rem 7.5vw;
&::before{
  position: absolute;
  margin-top: -3.5rem;
  width: 110px;
  height: 4px;
  background-color: #D87D4A;
  content: "";
  display: inline-block;
  @media (max-width: 500px) {
    width: 25%;
    margin-left: 30%;
  }
}
`;


const ContainUp= styled.div`
display: flex;
justify-content: space-between;
justify-self: center;
@media (max-width: 920px){
  flex-direction: column;
}
@media (max-width: 500px) {
  align-items: center;
}
`;


const ContainRight= styled.div`
display: flex;
color:white;
@media (max-width: 500px) {
  flex-direction:column;
  margin-top: 2.5vh;
  margin-bottom: 2.5vh;
}
`;

const Contain2ndRight= styled.div`
display:flex;
justify-content: space-between;
align-items: center;
width: 15vh;
align-self: flex-end;
margin-top: -3.7vh;
@media (max-width: 920px){
  margin-top: 3.8vh;
  align-self:stretch;
}
@media (max-width: 500px) {
  align-self: center;
}
`;

const ContainLow= styled.div`
display:flex;
flex-direction: column;
@media (max-width: 920px){
  flex-direction: row-reverse;
}
@media (max-width: 500px) {
  flex-direction:column-reverse;
}
`;

const Header = styled.h4`
font-weight: 700;
font-size: 13px;
letter-spacing: 2px;
line-height: 30px;
padding: 0px 0px 2px 3.5vw;
cursor: pointer;
&:hover{
  color:#D87D4A;
}
&.start{
  padding-left: 0px;
}
@media (max-width: 500px) {
  text-align:center;
  padding: 0px;
  line-height: 2vh;
}
`;

const Details = styled.p`
font-size: 15px;
width: 38vw;
letter-spacing: 0.7px;
color: #ffffff81;
font-weight: 200;
line-height: 3.3vh;
&#copyright{
  font-weight: 700;
  color: #ffffff6c;
  padding: 5vh 0 1.2vh 0;
}
@media (max-width: 920px){
  width: 100%;
}
@media (max-width: 500px) {
  padding:0px !important;
  text-align:center;
}
`;






function Footer() {  
  return (
    <>
      <Container>
      <ContainUp>
        <div className={styles.centerMeVertical}>
        <Image src={logoImg} alt="" width="143" height="25" />
        </div>
        <ContainRight>
          <Header className="start">HOME</Header>
          <Header>HEADPHONES</Header>
          <Header>SPEAKER</Header>
          <Header className="end">EARPHONES</Header>
        </ContainRight>
      </ContainUp>  

      <div>
      <Details>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
      </Details>
      </div>
      <ContainLow>

        <Contain2ndRight>
      <svg className ={styles.svgies} width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" fill="#FFF" fillRule="nonzero"/></svg>
      <svg className ={styles.svgies} width="24" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z" fill="#FFF" fillRule="nonzero"/></svg>
      <svg className ={styles.svgies} width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="#FFF" fillRule="nonzero"/></svg>
      </Contain2ndRight>

      <Details id="copyright">Copyright 2021. All Rights Reserved</Details>
      </ContainLow>
      
      
      </Container>
    </>
  );
}

export default Footer;