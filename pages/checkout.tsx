import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";

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

  @media (max-width: 920px) {
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
  @media (max-width: 920px) {
    padding: 5.5vh;
  }

  @media (max-width: 720px) {
    padding: 2.3vh;
  }
`;

const Summary = styled.div`
  background-color: #f1f1f1;

  height: 55vh;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 920px) {
    margin-top: 7vh;
    height: 100%;
  }
`;

const Header = styled.div`
  font-weight: 700;
  &.titlecheck {
    font-size: 4.5vh;
    margin-bottom: -1vh;
  }

  &.titleSum {
  }

  &.category {
    color: #d87d4a;
    margin-top: 5.8vh;
    letter-spacing: 0.19vh;
  }

  &.title {
    margin-top: 2.8vh;
  }

  &.item {
  }

  &.thanks {
    font-size: 4.5vh;
    line-height: 38px;
    letter-spacing: 1.4px;
    margin-bottom: 8px;
  }
  @media (max-width: 720px) {
    &.titlecheck {
      font-size: clamp(2.8vh, 8vw, 4.5vh);
      margin-bottom: -1vh;
    }
    &.category {
      font-size: 1.5vh;
      letter-spacing: 0.14vh;
    }
    &.title {
      font-size: 1.4vh;
    }
  }
`;

const Input = styled.input`
  margin-top: 1.5vh;
  width: clamp(20vh, 26vw, 55vh);
  height: 7vh;
  background-color: white;
  border-radius: 10px;
  border: 1.5px solid #ccc;
  padding-left: 13px;
  font-size: 2.4vh;

  &:focus {
    outline: none;
  }

  &.address {
    width: 100%;
  }

  &.payment {
    margin-bottom: 2vh;
    margin-top: 3vh;
  }

  &.left {
    margin-right: 15px;
  }

  @media (max-width: 920px) {
    height: 6vh;
    width: clamp(5vh, 33vw, 48vh);
  }

  @media (max-width: 720px) {
    width: 100%;
    height: 5vh;
    font-size: 2vh;
    margin-top: 0.55vh !important;
  }
`;

const Cart = styled.div`
  color: black;
  background-color: white;
  border-radius: 10px;
  min-height: 490px;
  width: 377px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;

  @media (max-width: 920px) {
    width: 100%;
    position: relative;
  }

  @media (max-width: 720px) {
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

  &.false {
    display: none !important;
  }
`;

const Price = styled.div`
  font-weight: 700;
  color: #808080;
  font-size: 15px;

  &.total {
    color: black;
    font-size: larger;
  }

  &.grand {
    color: #d87d4a;
    font-size: larger;
  }

  &.grandReceipt {
    color: white;
    font-size: larger;
  }

  @media (max-width: 720px) {
    &.total,
    &.grand {
      font-size: large !important;
    }
  }
`;

const CheckOut = styled.input`
  background-color: #d87d4a;
  color: white;
  letter-spacing: 2.5px;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 24px;
  @media (max-width: 720px) {
    height: 43px;
  }
`;

const Other = styled.div`
  color: black;
  &.receipt {
    margin-bottom: 10px;
  }

  &.cart {
    font-weight: 700;
    font-size: larger;
  }

  &.total {
    font-weight: 400;
    color: #0000007a;
    font-size: larger;
  }

  &.name {
    font-weight: 700;
  }

  &.totalReceipt {
    font-weight: 400;
    font-size: larger;
    color: #808080;
  }

  @media (max-width: 720px) {
    &.total {
      font-size: medium;
    }
  }
`;

const Counter = styled.div`
  background-color: #f1f1f1;
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

const MinorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  &.item {
    flex-direction: column;
    margin-left: 17px;
  }

  &.head {
    margin-bottom: 23px;
  }

  &.foot {
    margin-top: 15px;
  }

  &.grand {
    margin-top: 35px;
  }

  &.up {
    margin-top: 45px;
  }
`;

const Pay = styled.div`
  background-color: #d87d4a;
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
  &.notMe {
    display: none !important;
  }

  &.text {
    margin-top: 35px;
  }
  @media (max-width: 720px) {
    flex-direction: column;
    &.text {
      margin-top: 15px;
      font-size: smaller;
    }
  }
`;

const FlexEnd = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemRadio = styled.label`
  /* font-family: 'Manrope', sans-serif;; */
  font-weight: 700;
  display: flex;
  align-items: center;
  width: clamp(20vh, 26vw, 55vh);
  height: 7vh;
  position: relative;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 10px;
  margin-top: 1.5vh;
  padding-left: 20px;
  cursor: pointer;
  &.payment {
    margin-bottom: 2vh;
    margin-top: 3vh;
  }

  &.me {
    border: 1px solid #d87d4a;
  }
  @media (max-width: 920px) {
    height: 6vh;
    width: clamp(5vh, 33vw, 48vh);
  }

  @media (max-width: 720px) {
    width: 100%;
    height: 5vh;
    font-size: 1.5vh;
    margin-top: 0.55vh !important;
  }
`;

const RadioButtonLabel = styled.label`
  /* position: absolute;
  top: 32%;
  left: 20px; */
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ccc;
  margin-right: 15px;
`;
const RadioButton = styled.input`
  position: absolute;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 35px;
  height: 35px;
  margin: 0 0 -4px -4px !important;

  &:hover ~ ${RadioButtonLabel} {
    /* background: #ccc; */
    &::after {
      content: "";
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      /* margin: 4px; */
    }
  }
  &:checked + ${Item} {
    background: #d87d4a;
    border: 2px solid #d87d4a;
  }
  &:checked + ${RadioButtonLabel} {
    background: #d87d4a;
    box-shadow: 0 0 0 1px #e78267;
    border: 5px solid white;
    &::after {
      content: "";
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      /* margin: 4px; */
    }
  }
`;

const Receipt = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  z-index: 300;
  background-color: white;
  border-radius: 10px;
  min-height: 500px;
  width: 590px;
  top: 110px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &.false {
    display: none;
  }
  @media (max-width: 610px) {
    right: 0px;
    top: 85px;
    width: 100%;
  }
`;

const Checkmark = styled.div`
  display: inline-block;
  transform: rotate(40deg);
  height: 22px;
  width: 12px;
  border-bottom: 4px solid white;
  border-right: 4px solid white;
  margin-top: -5px;
`;

const Circle = styled.div`
  margin-bottom: 17px;
  background-color: #d87d4a;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Back = styled.div`
  background-color: #d87d4a;
  color: white;
  letter-spacing: 2.5px;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 24px;
  @media (max-width: 720px) {
    height: 43px;
  }
`;

const ReceiptContainer = styled.div`
  border-radius: 10px;
  min-height: 150px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  position: relative;
  @media (max-width: 530px) {
    flex-direction: column;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: black;
  right: 0px;
  width: 40%;
  height: 100%;
  top: 0px;
  position: absolute;
  border-radius: 0 10px 10px 0;
  padding-left: 32px;
  padding-bottom: 30px;
  @media (max-width: 530px) {
    position: relative;
    width: 100%;
    padding-top: 25px;
    border-radius: 0 0 10px 10px;
  }
`;

const Left = styled.div`
  background-color: #f1f1f1;
  width: 60%;
  min-height: 150px;
  border-radius: 10px 0 0 10px;
  padding-right: 18px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 530px) {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
`;

const ReceiptBackDrop = styled.div`
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

  &.false {
    display: none;
  }
`;

const View = styled.div`
  color: #8a8080;
  font-weight: 400;
  padding-top: 7px;
  width: 90%;
  height: 20px;
  border-top: 1px solid #8a8080;
  margin-right: -8px;
  text-align: center;
  margin-bottom: 25px;
  cursor: pointer;
`;

type FormValues = {
  name: string;
  email: string;
  phone: number;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  test: string;
  radio: string;
  radio1: string;
  radio2: string;
  eNumber: string;
  ePin: string;
};

export default function Checkout(props: { products: any }) {
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState({} as Record<string, any>);
  const [popUpReceipt, setPopUpReceipt] = useState(false);
  const [showAll, setShowAll] = useState(true);
  const [select, setSelect] = useState("eMoney");

  const router = useRouter();
  const pid = router.query;

  useEffect(() => {
    setProducts(JSON.parse(window.localStorage.getItem("cart") || "{}"));
    if (pid.foo === "success") {
      setPopUpReceipt(true);
      return;
    }
  }, [pid.foo]);

  let totNumb = 0;
  let amount = 0;
  let vat = (total * 20) / 100;
  let grand = vat + total + 50;

  useEffect(() => {
    Object.keys(products).map((id) => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      totNumb += Number(products[id].demand) * Number(products[id].price);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      amount += 1;
    });
    setTotal(totNumb);
  }, [products]);

  const handleCart = () => {
    setProducts(JSON.parse(window.localStorage.getItem("cart") || "{}"));
  };

  let counter = 0;

  const handleView = () => {
    setShowAll((prev) => !prev);
  };

  const removeAllOrder = () => {
    window.localStorage.removeItem("cart");
  };

  const handleSelectChange = (event: any) => {
    const value = event.target.value;
    setSelect(value);
  };

  const handleSelectChange1 = (event: any) => {
    setSelect("eMoney");
  };

  const handleSelectChange2 = (event: any) => {
    setSelect("Cash on Delivery");
  };

  // const handleOrder = () => {
  //   fetch("http://localhost:4000/checkout/product", {
  //     method: "POST",
  //     headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(products)
  //   })
  // };

  const { register, watch, handleSubmit } = useForm<FormValues>();

  // console.log(watch());

  const handleOrder = (data: any) => {

    // console.log("helo");
    // console.log(data);

    fetch("http://localhost:4000/checkout", {
          method: "POST",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ data, products})
        }).then(res => res.json().then(result => {
          if (result.redirectUrl) {
            window.location.href = result.redirectUrl
          }
        })) 
  };

  return (
    <>
      <div onClick={handleCart}>
        <Navbar></Navbar>
        <ReceiptBackDrop className={`${popUpReceipt}`}></ReceiptBackDrop>
        <Receipt className={`${popUpReceipt}`}>
          <Circle>
            <Checkmark></Checkmark>
          </Circle>
          <Header className="thanks">
            THANK YOU <br /> FOR YOUR ORDER
          </Header>
          <Other className="receipt">You will receive an email confirmation shortly.</Other>
          <ReceiptContainer>
            <Left>
              {Object.keys(products).map((id) => {
                counter = counter + 1;
                return (
                  <Item key={id} className={counter >= 3 ? `${!showAll}` : ``}>
                    <div className={`${styles.flexMe} ${styles.imgBorder}`}>
                      <Image src={products[id].image} alt="" width="64" height="64"></Image>
                      <MinorContainer className="item">
                        <Other className="name">{id}</Other>
                        <Price>${products[id].price}</Price>
                      </MinorContainer>
                    </div>
                    <Price>{products[id].demand}x</Price>
                  </Item>
                );
              })}

              {counter > 2 ? (
                <View className={`${showAll}`} onClick={handleView}>
                  {showAll ? `and ${counter - 2} other item(s)` : "view less"}
                </View>
              ) : (
                ""
              )}
            </Left>
            <Right>
              <Other className="totalReceipt">GRAND TOTAL</Other>
              <Price className="grandReceipt">${grand}</Price>
            </Right>
          </ReceiptContainer>
          <Link href="/" passHref>
            <Back onClick={removeAllOrder}>BACK TO HOME</Back>
          </Link>
        </Receipt>
      </div>

      {/* <form action="http://localhost:4000/checkout" method="post"> */}
      <form onSubmit={handleSubmit(handleOrder)}>
        <Container>
          <CheckIn>
            <Header className="titlecheck">CHECKOUT</Header>
            <Header className="category">BILLING DETAILS</Header>
            <Flex>
              <div>
                <Header className="title">Name</Header>
                <Input className="left" {...register("name")} required></Input>
              </div>
              <div>
                <Header className="title">Email Address</Header>
                <Input type="email" {...register("email")} required></Input>
              </div>
            </Flex>

            <Header className="title">Phone Number</Header>
            <Input type="number" {...register("phone")} required></Input>

            <Header className="category">SHIPPING INFO</Header>
            <Header className="title">Address</Header>
            <Input className="address" {...register("address")} required></Input>

            <Flex>
              <div>
                <Header className="title">ZIP Code</Header>
                <Input className="left" {...register("zipCode")} required></Input>
              </div>
              <div>
                <Header className="title">City</Header>
                <Input {...register("city")} required></Input>
              </div>
            </Flex>

            <Header className="title">Country</Header>
            <Input {...register("country")} required></Input>

            <Header className="category">PAYMENT DETAILS</Header>





            {/* <Controller
  control={control}
  name="test"
  defaultValue="eMoney"
  render={({
    field: { onChange, value, name }
  }) => (
    // <Checkbox
    //   onChange={onChange}
    //   checked={value}
    // />
    <FlexEnd>
              <Header className="title">Payment Method</Header>
              <FlexCol>
                <ItemRadio className={`payment ${select === "eMoney" ? "me" : "notMe"}`}>
                  <RadioButton
                    type="radio"
                    {...register("radio1")}
                    value="eMoney"
                    checked={select === "eMoney"}
                    onChange={(event) => handleSelectChange(event)}
                  />
                  <RadioButtonLabel />
                  <div>e-Money</div>
                </ItemRadio>
                <ItemRadio className={`${select === "Cash on Delivery" ? "me" : "notMe"}`}>
                  <RadioButton
                    type="radio"
                    {...register("radio2")}
                    value="Cash on Delivery"
                    checked={select === "Cash on Delivery"}
                    onChange={(event) => handleSelectChange(event)}
                  />
                  <RadioButtonLabel />
                  <div>Cash on Delivery</div>
                </ItemRadio>
              </FlexCol>
            </FlexEnd>



  )}
/> */}





            {/* <FlexEnd>
              <Header className="title">Payment Method</Header>
              <FlexCol>
                <ItemRadio className={`payment ${select === "eMoney" ? "me" : "notMe"}`}>
                  <RadioButton
                    type="radio"
                    {...register("radio1")}
                    value="eMoney"
                    checked={select === "eMoney"}
                    onChange={(event) => handleSelectChange(event)}
                  />
                  <RadioButtonLabel />
                  <div>e-Money</div>
                </ItemRadio>
                <ItemRadio className={`${select === "Cash on Delivery" ? "me" : "notMe"}`}>
                  <RadioButton
                    type="radio"
                    {...register("radio2")}
                    value="Cash on Delivery"
                    checked={select === "Cash on Delivery"}
                    onChange={(event) => handleSelectChange(event)}
                  />
                  <RadioButtonLabel />
                  <div>Cash on Delivery</div>
                </ItemRadio>
              </FlexCol>
            </FlexEnd>
 */}







 <FlexEnd>
              <Header className="title">Payment Method</Header>
              <FlexCol>
                <ItemRadio htmlFor="radio1" className={`payment ${select === "eMoney" ? "me" : "notMe"}` } >
                  <RadioButton
                    type="radio"
                    id="radio1"
                    {...register("radio")}
                    value={select}
                    checked={select === "eMoney"}
                    onChange={(event) => handleSelectChange1(event)}
                  />
                  <RadioButtonLabel />
                  <div>e-Money</div>
                </ItemRadio>
                <ItemRadio htmlFor="radio2" className={`${select === "Cash on Delivery" ? "me" : "notMe"}`}>
                  <RadioButton
                    type="radio"
                    id="radio2"
                    {...register("radio")}
                    value={select}
                    checked={select === "Cash on Delivery"}
                    onChange={(event) => handleSelectChange2(event)}
                  />
                  <RadioButtonLabel />
                  <div>Cash on Delivery</div>
                </ItemRadio>
              </FlexCol>
            </FlexEnd>
















            <Flex className={`${select === "eMoney" ? "me" : "notMe"}`}>
              <div>
                <Header className="title">e-Money Number</Header>
                <Input className="left" {...register("eNumber")}></Input>
              </div>
              <div>
                <Header className="title">e-Money PIN</Header>
                <Input type="password" {...register("ePin")} autoComplete="off"></Input>
              </div>
            </Flex>
            <Flex className={`text ${select === "Cash on Delivery" ? "me" : "notMe"}`}>
              The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier
              arrives at your residence. Just make sure your address is correct so that your order
              will not be cancelled.
            </Flex>
          </CheckIn>
          <Summary>
            <Cart>
              <div>
                <MinorContainer className="head">
                  <Other className="cart">SUMMARY</Other>
                </MinorContainer>

                {Object.keys(products).map((id) => (
                  <Item key={id}>
                    <div className={`${styles.flexMe} ${styles.imgBorder}`}>
                      <Image src={products[id].image} alt="" width="64" height="64"></Image>
                      <MinorContainer className="item">
                        <Other className="name">{id}</Other>
                        <Price>${products[id].price}</Price>
                      </MinorContainer>
                    </div>
                    <Price>{products[id].demand}x</Price>
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
                {/* <CheckOut onClick={handleOrder} type="submit" value="CONTINUE & PAY"></CheckOut> */}
                <CheckOut type="submit" value="CONTINUE & PAY"></CheckOut>
              </div>
            </Cart>
          </Summary>
        </Container>
      </form>
      <Footer></Footer>
      <Background></Background>
    </>
  );
}
