import Navbar from "../../components/navbar";
import Category from "../../components/category";
import Footer from "../../components/footer";
import Onload from "../../components/onload";
import WhatIsAudiophile from "../../components/whatIsAudiophile";
import Price from "../../components/price";
import ProductDetail from "../../components/productDetail";
import { useRouter } from 'next/router'

import { useLazyQuery, useQuery } from "@apollo/client";
import { LOAD_PRODUCT_DETAIL } from '../../graphql/queries';
import { useEffect } from "react";
  
  
const Detail = () =>{
    const router = useRouter()
    const  pid  = router.query
    
    // const { loading, error, data } = useQuery(LOAD_PRODUCT_DETAIL,{ variables: {Slug: pid.slug }});
    // if (loading) return null;
    // if (error) return `Error! ${error}`;
 

    const [loadCat, { loading, error, data }] = useLazyQuery(
        LOAD_PRODUCT_DETAIL,
        { variables: {Slug: pid.slug }},
      );
    
      useEffect(() => {
        if (error || !loading || !data) {
          loadCat({ variables: {Slug: pid.slug }});
        }
      }, [error, loading, data, loadCat, pid]);
    
      if (error) {
        if (error.message.toLocaleLowerCase().includes("timeout")) {
        } else {
          return `Error! ${error}`;
        }
      }





    return(
        <>
                <Navbar></Navbar>
                {loading || data === undefined ? (<Onload></Onload>) : (
                        <>
                        <Price data={data.productsbyId[0]}></Price>
                        <ProductDetail data={data?.productsbyId[0]}></ProductDetail>
                        </>
           
                )}
                 
             
                <Category></Category>
                <WhatIsAudiophile></WhatIsAudiophile>
                <Footer></Footer>
        </>
    );
}

export default Detail;