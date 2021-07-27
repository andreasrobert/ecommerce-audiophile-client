import React, { useEffect, useState } from 'react';
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

const CartBackDrop = styled.div`
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
`;

const Cart =styled.div`
color:black;
z-index: 300;
background-color: white;
border-radius: 10px;
min-height: 490px;
width: 377px;
top: 110px;
right: 7.5vw;
position: absolute;
padding: 28px;
display: flex;
flex-direction: column;
justify-content: space-between;
&.false{
    display:none;
}
@media (max-width:450px){
  right:0px;
  top:85px;
  width: 100%;
  
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

&.remove{
  font-weight: 700;
  text-decoration: underline;
  color: #00000078;
  cursor: pointer;
}

&.name{
  font-weight: 700;
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
  margin-top: 30px;
}


`;



function Navbar() {  
  const [popUp, setPopUp] =useState(false)
  const [cart, setCart] = useState(false)
  const [total, setTotal] = useState(0)

  const handlePopUp = () =>{
    setPopUp(prev => !prev);
  };

  
  const [products,setProducts]= useState({} as Record<string, any>)

  useEffect(() => {
    setProducts(JSON.parse(window.localStorage.getItem('cart') || '{}'));
  }, [])

  const handleCart = () =>{
    setCart(prev => !prev);
    setProducts(JSON.parse(window.localStorage.getItem('cart') || '{}'))
  };
  
  const removeAll = () =>{
    localStorage.removeItem("cart");
    setProducts(JSON.parse(window.localStorage.getItem('cart') || '{}'))
  }

  const handleDemand = (id:string, mats:string) =>{
    const existingCart = JSON.parse(window.localStorage.getItem('cart') || '{}');
    let updateDemand = Number(existingCart[id].demand) - 1;
    if(mats === "plus") {
      updateDemand = Number(existingCart[id].demand) + 1;
    }

    if(updateDemand <= 0){
      delete existingCart[id]
      window.localStorage.setItem("cart", JSON.stringify(existingCart));
      setProducts(JSON.parse(window.localStorage.getItem('cart') || '{}'));
      return ;
    }

    const cartItem = {
      image: existingCart[id].image,
      price: existingCart[id].price,
      demand: String(updateDemand)
    }
    const cart = { ...existingCart, [id]: cartItem }
    window.localStorage.setItem("cart", JSON.stringify(cart))
    setProducts(JSON.parse(window.localStorage.getItem('cart') || '{}'))

  }


  let totNumb= 0;
  let amount = 0
  useEffect(() => {
    Object.keys(products).map((id)=>{
      // eslint-disable-next-line react-hooks/exhaustive-deps
      totNumb += Number(products[id].demand) * Number(products[id].price);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      amount += 1;
        })
        setTotal(totNumb)
  }, [products])

  return (
    <>
      <Container>
        <Container2nd>
          <div className={`${styles.pointMe} ${styles.mobileHam} `} onClick={handlePopUp}>
          <Image src={hamburgerImg} alt="" width="23.33" height="20" />
          </div>
          <Link href="/" passHref>
            <div>
          <Image src={logoImg} alt="" width="143" height="25" className={`${styles.pointMe}`}/>
          </div>
          </Link>
          <div className={`${styles.flexMe} ${styles.desktop}`}>
          <Link href="/" passHref><Header>HOME</Header></Link>
          <Link href="/category/headphones" passHref><Header>HEADPHONES</Header></Link>
          <Link href="/category/speakers" passHref><Header>SPEAKER</Header></Link>
          <Link href="/category/earphones" passHref><Header className="end" >EARPHONES</Header></Link>
          </div>

          <div className={`${styles.pointMe}`} onClick={handleCart}>
          <svg className ={styles.svgies} width="23" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z" fill="#FFF" fillRule="nonzero"/></svg>
          </div>
        </Container2nd>

    
        <Cart className={`${cart}`}>
          <div>
          <MinorContainer className="head">
            <Other className="cart">CART ({Object.keys(products).length})</Other>
            <Other className="remove" onClick={removeAll}> Remove all</Other>
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
          <Counter>
          <Minus onClick={()=>handleDemand(id,"-")}>-</Minus>
          {products[id].demand}
          <Plus onClick={()=>handleDemand(id,"plus")}>+</Plus>
          </Counter>
        </Item>
        
        ))}


          
        
          </div>
          <div>
          <MinorContainer className="foot">
          <Other className="total">TOTAL</Other>
          <Price className="total">${total}</Price>
          </MinorContainer>
          <Link href={`/checkout`} passHref>
          <CheckOut>CHECKOUT</CheckOut>
          </Link>
          </div>
        </Cart>











      </Container>
      <Drop className={`${popUp}`}>
        <DropContainer>
          <Category></Category>
          </DropContainer>
        </Drop>
        <BackDrop className={`${popUp}`} onClick={handlePopUp}></BackDrop>

        <CartBackDrop className={`${cart}`} onClick={handleCart}></CartBackDrop>

        
        
    </>
  );
}

export default Navbar;