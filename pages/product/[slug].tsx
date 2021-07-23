import Navbar from "../../components/navbar";
import Category from "../../components/category";
import Footer from "../../components/footer";
import Product from "../../components/product";
import WhatIsAudiophile from "../../components/whatIsAudiophile";
import Price from "../../components/price";
import ProductDetail from "../../components/productDetail";
import { useRouter } from 'next/router'

import { useQuery } from "@apollo/client";
import { LOAD_PRODUCT_DETAIL } from '../../graphql/queries';
  
  
const Detail = () =>{
    const router = useRouter()
    const  pid  = router.query
    
    const { loading, error, data } = useQuery(LOAD_PRODUCT_DETAIL,{ variables: {Slug: pid.slug }});
    if (loading) return null;
    if (error) return `Error! ${error}`;
 
    return(
        <>
                <Navbar></Navbar>
                <Price data={data.productsbyId[0]}></Price>
                <ProductDetail data={data.productsbyId[0]}></ProductDetail>
             
                <Category></Category>
                <WhatIsAudiophile></WhatIsAudiophile>
                <Footer></Footer>
        </>
    );
}

export default Detail;