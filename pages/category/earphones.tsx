import Navbar from "../../components/navbar";
import Category from "../../components/category";
import Footer from "../../components/footer";
import Product from "../../components/product";
import WhatIsAudiophile from "../../components/whatIsAudiophile";
import ProductDetail from "../../components/productDetail";


const Earphones = () =>{
    return(
        <>
            <Navbar></Navbar>
            {/* <Product></Product> */}
            <ProductDetail></ProductDetail>
            <div>hello there EARPHONEss</div>
            <Category></Category>
            <WhatIsAudiophile></WhatIsAudiophile>
            <Footer></Footer>
        </>
    );
}

export default Earphones;