import Navbar from "../../components/navbar";
import Title from "../../components/title";
import Category from "../../components/category";
import Footer from "../../components/footer";
import Product from "../../components/product";
import WhatIsAudiophile from "../../components/whatIsAudiophile";
import { useQuery } from "@apollo/client";
import { LOAD_FOR_CATEGORY } from '../../graphql/queries';
  
const Headphones = () =>{
    const { loading, error, data, refetch } = useQuery(LOAD_FOR_CATEGORY,{ variables: {Category: "headphones"}});
    if (loading) return null;
    if (error) {
        if (error.message.toLocaleLowerCase().includes('timeout')) {
            refetch();
        }
        return `Error! ${error}`;
    }
    var order = 0; 


    return(
        <>
                <Navbar></Navbar>
                <Title title="HEADPHONES"></Title>
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

export default Headphones;