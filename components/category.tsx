import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import headphoneImg from "../public/assets/desktop/image-headphones.png";
import speakerImg from "../public/assets/desktop/image-speakers.png";
import earphoneImg from "../public/assets/desktop/image-earphones.png";

const Container = styled.div`
  height: 100%;
  display: flex;
  padding: 7rem 7.5vw 2.5rem 7.5vw;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Box = styled.div`
  background-color: #f1f1f1;
  width: 53vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border-radius: 7px;
  padding-bottom: 4vh;
  justify-content: flex-end;
  &:hover {
    .shop {
      color: #d87d4a;
    }
  }
  transition: transform 250ms;
  &#left:hover {
    #leftImg {
      transform: translateY(2vh);
    }
  }
  &#mid:hover {
    #midImg {
      transform: translateY(2vh);
    }
  }
  &#right:hover {
    #rightImg {
      transform: translateY(2vh);
    }
  }

  @media (max-width: 194vh) and (min-width: 501px) {
    width: 31%;
    height: 18vw;
    padding-bottom: 2.5vw;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    width: 95%;
    margin-top: 7rem;
    padding-bottom: 2vh;
  }
`;

const Header = styled.div`
  color: black;
  font-size: 3.5vh;
  font-weight: 700;
  letter-spacing: 1.3px;
  margin: -2.5vh 0 2vh 0;

  &.shop {
    margin-right: 1.5vh !important;
    font-size: 2vh;
    letter-spacing: 1px;
    color: #0000007b;
    margin: -2px 0 0 0;
  }

  @media (max-width: 194vh) and (min-width: 501px) {
    font-size: 2vw !important;
    margin: 1.5vw 0 1.5vw 0;
    &.shop {
      margin-right: 1vh !important;
      font-size: 1.3vw !important;
      letter-spacing: 1px;
    }
  }

  @media (max-width: 500px) {
    font-size: 2vh !important;
    margin: 0 0 1vh 0;
    &.shop {
      margin-right: 1vh !important;
      font-size: 1.5vh !important;
      letter-spacing: 1px;
    }
  }
`;

const ImageWrapper = styled.div`
  margin-top: -10vh;
  width: 18vw;
  transition: transform 400ms;
  @media (max-width: 194vh) and (min-width: 500px) {
    margin-bottom: -4vw !important;
    width: 18vw;
  }

  @media (max-width: 500px) {
    margin-bottom: -2vw !important;
    width: 20vh;
  }
`;

const Contain = styled.div`
  display: flex;
  align-items: center;
`;

function Category() {
  return (
    <>
      <Container>
        <Link href="/category/headphones" passHref>
          <Box id="left">
            <ImageWrapper id="leftImg">
              <Image src={headphoneImg} alt=""></Image>
            </ImageWrapper>
            <Header>HEADPHONES</Header>
            <Contain>
              <Header className="shop">SHOP</Header>
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.322 1l5 5-5 5"
                  stroke="#D87D4A"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </Contain>
          </Box>
        </Link>

        <Link href="/category/speakers" passHref>
          <Box id="mid">
            <ImageWrapper id="midImg">
              <Image src={speakerImg} alt=""></Image>
            </ImageWrapper>
            <Header>SPEAKERS</Header>
            <Contain>
              <Header className="shop">SHOP</Header>
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.322 1l5 5-5 5"
                  stroke="#D87D4A"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </Contain>
          </Box>
        </Link>

        <Link href="/category/earphones" passHref>
          <Box id="right">
            <ImageWrapper id="rightImg">
              <Image src={earphoneImg} alt=""></Image>
            </ImageWrapper>
            <Header>EARPHONES</Header>
            <Contain>
              <Header className="shop">SHOP</Header>
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.322 1l5 5-5 5"
                  stroke="#D87D4A"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </Contain>
          </Box>
        </Link>
      </Container>
    </>
  );
}

export default Category;
