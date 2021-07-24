import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import styled from 'styled-components';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Container = styled.div`
padding-left: 7.5vw;
padding-right: 7.5vw;
width: 100%;
height: 100%;
background-color: #f1f1f1;
display: flex;
justify-content: space-between;
margin-top: 8vh;
margin-bottom: 10vh;

@media (max-width: 920px){
  flex-direction: column;
}
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  position: fixed;
  z-index: -10;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  right: 0px;
`;

const CheckIn = styled.div`
background-color: white;
width: 100%;
height: 100%;
margin-right: 435px;
padding: 7.5vh;
border-radius: 12px;
@media (max-width: 920px){
    padding: 5.5vh;
}

@media (max-width: 720px){
    padding: 2.3vh;
}

`;

const Summary = styled.div`
background-color: #f1f1f1;

height: 55vh;
display: flex;
justify-content: flex-end;
@media (max-width: 920px){
  margin-top: 7vh;
  height: 100%;

}
`;

const Header = styled.div`
font-weight: 700;
&.titlecheck{
font-size: 4.5vh;
margin-bottom: -1vh;
}

&.titleSum{

}

&.category{
color:#D87D4A;
margin-top: 5.8vh;
letter-spacing: 0.19vh;

}

&.title{
margin-top: 2.8vh;
}

&.item{

}

@media (max-width: 720px){
    &.titlecheck{
        font-size: clamp(2.8vh, 8vw, 4.5vh);
        margin-bottom: -1vh;
}
    &.category{
        font-size: 1.5vh;
        letter-spacing: 0.14vh;

    
}
    &.title{
        font-size:1.4vh;

}
}

`;

const Input = styled.input`
margin-top: 1.5vh;
width: clamp(20vh, 26vw, 55vh);
height: 7vh;
background-color: white;
border-radius: 10px;
border: 1px solid black;
padding-left: 13px;
font-size: 2.4vh;

&:focus{
    outline:none;
}

&.address{
width: 100%;

}

&.payment{
margin-bottom: 2vh;
margin-top: 3vh;
}

&.left{
margin-right: 15px;
}

@media (max-width: 920px){
    height: 6vh;
    width: clamp(5vh, 33vw, 48vh);
}

@media (max-width: 720px){
    width: 100%;
    height: 5vh;
    font-size: 2vh;
    margin-top: 0.55vh !important;
}

`;



const Cart =styled.div`
color:black;
background-color: white;
border-radius: 10px;
min-height: 490px;
width: 377px;
padding: 28px;
display: flex;
flex-direction: column;
justify-content: space-between;
position: absolute;

@media (max-width: 920px){
  width: 100%;
  position: relative;
}

@media (max-width: 720px){
  padding: 2.3vh;
  
}

`;

const Item = styled.div`
width: 100%;
height: 78px;
/* padding: 20px; */
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 10px;
`;

const Price = styled.div`
font-weight: 700;
color: #808080;
font-size: 15px;

&.total{
color: black;
font-size: larger;
}

&.grand{
color: #D87D4A;
font-size: larger;
}

@media (max-width: 720px){
    &.total, &.grand{
        font-size: large !important;
    }
}
`;


const CheckOut = styled.div`
background-color: #D87D4A;
color: white;
letter-spacing: 2.5px;
width: 100%;
height: 55px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
margin-top: 24px;
@media (max-width: 720px){
height: 43px;
}
`;

const Other = styled.div`
color: black;
&.cart{
font-weight: 700;
font-size: larger;
}

&.total{
  font-weight: 400;
  color:#0000007a;
  font-size: larger;
}


&.name{
  font-weight: 700;
}

@media (max-width: 720px){
    &.total{
    font-size: medium;
    }
}

`;

const Counter = styled.div`
background-color:#F1F1F1;
height: 32px;
width: 96px;
color: black;
display: flex;
justify-content: center;
align-items: center;
font-weight: 700;
font-size: 1.5vh;
position: relative;

`;



const MinorContainer=styled.div`
display: flex;
justify-content: space-between;
&.item{
  flex-direction: column;
  margin-left: 17px;
}

&.head{
  margin-bottom: 23px;
}

&.foot{
  margin-top: 15px;
}

&.grand{
  margin-top: 35px;
}

&.up{
  margin-top: 45px;
}

`;

const Pay = styled.div`
background-color: #D87D4A;
color: white;
letter-spacing: 2.5px;
width: 100%;
height: 55px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
margin-top: 24px;

`;

const Flex = styled.div`
display: flex;
justify-content: space-between;
@media (max-width: 720px){
  flex-direction: column;
}
`;

const FlexEnd = styled.div`
display: flex;
justify-content: space-between;
@media (max-width: 720px){
  flex-direction: column;
}
`;

const FlexCol = styled.div`
display: flex;
flex-direction: column;
`;

export default function Checkout(props:{products:any}) {

    const [total, setTotal] = useState(0)
    const [products,setProducts]= useState({} as Record<string, any>)

    useEffect(() => {
      setProducts(JSON.parse(window.localStorage.getItem('cart') || '{}'));
    }, [])

  let totNumb= 0;
  let amount = 0;
  let vat = total*20/100;
  let grand = vat+total+50;

  useEffect(() => {
    Object.keys(products).map((id)=>{
      // eslint-disable-next-line react-hooks/exhaustive-deps
      totNumb += Number(products[id].demand) * Number(products[id].price);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      amount += 1;
        })
        setTotal(totNumb);
       
  }, [products])

  const handleCart = () =>{
    setProducts(JSON.parse(window.localStorage.getItem('cart') || '{}'))
  };



  return (
    <>
        <div onClick={handleCart}>
      <Navbar></Navbar>
      </div>
      <Container>
        <CheckIn>
            <Header className="titlecheck">CHECKOUT</Header>
            <Header className="category">BILLING DETAILS</Header>
            <Flex>
                <div>
            <Header className="title">Name</Header>
            <Input className="left"></Input>
            </div>
            <div>
            <Header className="title">Email Address</Header>
            <Input></Input>
            </div>
            </Flex>
            
            <Header className="title">Phone Number</Header>
            <Input></Input>

            <Header className="category">SHIPPING INFO</Header>
            <Header className="title">Address</Header>
            <Input className="address"></Input>

            <Flex>
                <div>
            <Header className="title">ZIP Code</Header>
            <Input className="left"></Input>
            </div>
            <div>
            <Header className="title">City</Header>
            <Input></Input>
            </div>
            </Flex>

            <Header className="title">Country</Header>
            <Input></Input>


            <Header className="category">PAYMENT DETAILS</Header>
            <FlexEnd>
            <Header className="title">Payment Method</Header>
            <FlexCol>
            <Input className="payment"></Input>
            <Input></Input>
            </FlexCol>
            </FlexEnd>

            <Header className="title">e-Money Number</Header>
            <Input></Input>

            <Header className="title">e-Money PIN</Header>
            <Input></Input>



        </CheckIn>
        <Summary>
        <Cart>
          <div>
          <MinorContainer className="head">
            <Other className="cart">SUMMARY</Other>
            </MinorContainer>

            {Object.keys(products).map(id => (
          <Item key={id}>
          <div className={`${styles.flexMe} ${styles.imgBorder}`}>
          <Image src={products[id].image} alt="" width="64" height="64"></Image>
          <MinorContainer className="item">
          <Other className="name">{id}</Other>
          <Price>${products[id].price}</Price>
          </MinorContainer>
          </div>
              <Price>
              {products[id].demand}x
              </Price>
          
        </Item>
        ))}
                  </div>

                  <div>
                  <MinorContainer className="foot up">
          <Other className="total">TOTAL</Other>
          <Price className="total">${total}</Price>
          </MinorContainer>
          <MinorContainer className="foot">
          <Other className="total">SHIPPING</Other>
          <Price className="total">$50</Price>
          </MinorContainer>
          <MinorContainer className="foot">
          <Other className="total">VAT (INCLUDED)</Other>
          <Price className="total">${vat}</Price>
          </MinorContainer>
          
          <MinorContainer className="grand">
          <Other className="total">GRAND TOTAL</Other>
          <Price className="grand">${grand}</Price>
          </MinorContainer>
          <CheckOut>CONTINUE & PAY</CheckOut>
          </div>
                  </Cart>
                  

        </Summary>

      </Container>

      <Footer></Footer>
      <Background></Background>
    </>
  )
}
