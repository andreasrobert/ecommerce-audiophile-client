import Navbar from "../../components/navbar";
import Title from "../../components/title";
import Onload from "../../components/onload";
import Category from "../../components/category";
import Footer from "../../components/footer";
import Product from "../../components/product";
import WhatIsAudiophile from "../../components/whatIsAudiophile";

import { useLazyQuery } from "@apollo/client";
import { LOAD_FOR_CATEGORY } from '../../graphql/queries';
import { useEffect } from "react";


const Earphones = () =>{
    const [loadCat, { loading, error, data }] = useLazyQuery(
        LOAD_FOR_CATEGORY,
        { variables: { Category: "earphones" } },
      );
    
      useEffect(() => {
        if (error || !loading || !data) {
          loadCat({ variables: { Category: "earphones" } });
        }
      }, [error, loading, data, loadCat]);
    
      if (error) {
        if (error.message.toLocaleLowerCase().includes("timeout")) {
        } else {
          return `Error! ${error}`;
        }
      }
      var order = 0;

    return(
        <>
            <Navbar></Navbar>
            <Title title="EARPHONES"></Title>
            {loading? (<Onload></Onload>) : (data?.productsbyCategory.map((product:any)=>{
                    order = order+1;
                    return <Product key={product._id} data={product} order={order}></Product>
                })
                )}
 
            <Category></Category>
            <WhatIsAudiophile></WhatIsAudiophile>
            <Footer></Footer>
        </>
    );
}

export default Earphones;