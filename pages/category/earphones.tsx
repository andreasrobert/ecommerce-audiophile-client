import Navbar from "../../components/navbar";
import Title from "../../components/title";
import Category from "../../components/category";
import Footer from "../../components/footer";
import Product from "../../components/product";
import WhatIsAudiophile from "../../components/whatIsAudiophile";

import { useQuery } from "@apollo/client";
import { LOAD_FOR_CATEGORY } from '../../graphql/queries';


const Earphones = () =>{
    const { loading, error, data } = useQuery(LOAD_FOR_CATEGORY,{ variables: {Category: "earphones"}});
    if (loading) return null;
    if (error) return `Error! ${error}`;
    var order = 0; 

    return(
        <>
            <Navbar></Navbar>
            <Title title="EARPHONES"></Title>
            {data.productsbyCategory.map((product:any)=>{
                    order = order+1;
                    return <Product key={product._id} data={product} order={order}></Product>
                })}
 
            <Category></Category>
            <WhatIsAudiophile></WhatIsAudiophile>
            <Footer></Footer>
        </>
    );
}

export default Earphones;