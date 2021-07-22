import Navbar from "../../components/navbar";
import Category from "../../components/category";
import Footer from "../../components/footer";
import Product from "../../components/product";
import Price from "../../components/price";
import ProductDetail from "../../components/productDetail";
import WhatIsAudiophile from "../../components/whatIsAudiophile";

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
import { LOAD_FOR_CATEGORY, LOAD_PRODUCT } from '../../graphql/queries';
import React, { useEffect } from "react";
  
  

  const GetProduct = () =>{
    const { loading, error, data } = useQuery(LOAD_FOR_CATEGORY,{ variables: {Category: "headphones"}});

    if (loading) return null;
    if (error) return `Error! ${error}`;

    console.log(data.productsbyCategory)

    return (
        <div>hi
        {data.productsbyCategory.map((product:any)=>{
            return <Product data={product}></Product>
        })}
        there
    </div>
    )
  }

const Headphones = () =>{
    
    const { loading, error, data } = useQuery(LOAD_FOR_CATEGORY,{ variables: {Category: "headphones"}});

    // useEffect(() => {
    //   console.log(data);
    // }, [data])

    return(
        <>
                <Navbar></Navbar>
                <GetProduct />
                {/* <Product></Product> */}
                <Category></Category>
                <WhatIsAudiophile></WhatIsAudiophile>
                <Footer></Footer>
        </>
    );
}

export default Headphones;