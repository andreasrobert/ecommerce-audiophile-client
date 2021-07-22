import Navbar from "../../components/navbar";
import Category from "../../components/category";
import Footer from "../../components/footer";
import Product from "../../components/product";
import Price from "../../components/price";
import ProductDetail from "../../components/productDetail";
import WhatIsAudiophile from "../../components/whatIsAudiophile";

const Headphones = () =>{
    return(
        <>
            <Navbar></Navbar>
            <Product></Product>
            <Price></Price>
            <ProductDetail></ProductDetail>
            <div>hello there HEADPHONEsss</div>
            <Category></Category>
            <WhatIsAudiophile></WhatIsAudiophile>
            <Footer></Footer>


        </>
    );
}

export default Headphones;