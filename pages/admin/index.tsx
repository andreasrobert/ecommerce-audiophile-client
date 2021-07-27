import { 
    Center,Box, Flex, Container,VStack, useDisclosure, RadioGroup, Radio,
    Stack, Drawer, DrawerOverlay, DrawerBody,Button, DrawerHeader, DrawerContent, Text
} from "@chakra-ui/react"
import React, { useState } from "react"

type Product = {
        id: string,
        slug: string,
        name: string,
        cart: string,
        // image: {
        //     mobile: string,
        //     tablet: string,
        //     desktop: string,
        //     tabletCat: string
        // },
        category: string,
        new: boolean,
        price: number,
        description: String,
        features: String
        includes: [{
            quantity: Number,
            item: String
        }],
        // gallery:{
        //     first: {
        //         mobile: string,
        //         tablet: string,
        //         desktop: string
        //     },
        //     second: {
        //         mobile: string,
        //         tablet: string,
        //         desktop: string
        //     },
        //     third: {
        //         mobile: string,
        //         tablet: string,
        //         desktop: string
        //     }
        // },
    //     others: [
    //         {
    //         slug: String,
    //         name: String,
    //         image: {
    //             mobile: String,
    //             tablet: String,
    //             desktop: String
    //             }
    //         },
    //         {
    //         slug: String,
    //         name: String,
    //         image: {
    //             mobile: String,
    //             tablet: String,
    //             desktop: String
    //             }
    //         },
    //         {
    //         slug: String,
    //         name: String,
    //         image: {
    //             mobile: String,
    //             tablet: String,
    //             desktop: String
    //             }
    //         }
        
    // ]
}

const Login = () =>{
    const [products, setProducts] = useState<Record<string, Product>>({})

    const seeProducts = () => {
        fetch("http://localhost:4000/admin/products",{
            method: "GET",  
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            // }
        }).then(result => result.json()).then(parsedResult => {
            console.log('what is result', parsedResult.Products);
            setProducts(parsedResult.Products);
        })
    }
    // console.log(JSON.stringify(parsedResult))


    return(
        <>
            <Container bg="gray.50" position="relative" height="100%" width="100%" maxWidth="100%" color="white">

                <Flex boxShadow="base" flexDirection="column" color="black" backgroundColor="white" w="200px" h="100%" position="absolute" left="0px">
                    <Flex mb="4">ADMIN PAGE</Flex>
                    <Flex cursor="pointer" alignItems="center" justifyContent="center" h="40px" mb="4" bg="gray" ml="1px" mr="2px" pl="15px" pr="15px" borderRadius="4px"
                    _hover={{
                        backgroundColor:"blue"
                    }}
                    onClick={seeProducts}
                    >Product</Flex>
                    <Flex cursor="pointer" alignItems="center" justifyContent="center" h="40px" mb="4" bg="gray" ml="1px" mr="2px" pl="15px" pr="15px" borderRadius="4px"
                    _hover={{
                        backgroundColor:"blue"
                    }}
                    >Customer</Flex>

                </Flex>

                <Flex h="100%" bg="gray.50" alignItems="center" justifyContent="center">
                    <Flex display="flex" flexDirection="column" color="black" boxShadow="base" ml="200px" bg="white" w="1000px" minH="500px">
                        
                        {Object.keys(products).map(productKey =>{
                            const product = products[productKey];

                            return (
                                <Flex display="flex" flexDirection="column" mt="50px" key={productKey}>
                                    <Text>name : {(product.name)}</Text>
                                    <Text>id: {(product.id)},</Text>
                                    <Text>slug: {(product.slug)},</Text>
                                    <Text>name: {(product.name)},</Text>
                                    <Text>cart: {(product.cart)}  </Text>
                                    <Text>category: {(product.category)},</Text>
                                    <Text>new: {`${(product.new)}`},</Text>
                                    <Text>price: {(product.price)},</Text>
                                    <Text>description: {(product.description)},</Text>
                                    <Text>features: {(product.features)}</Text>
                                    <Text>includes: {product.includes.map(item => <Text key={item.item as any}>{item.item}  {item.quantity}x</Text>)}</Text>
                                    <Text></Text>
                                    
                                    
                                    
                                    
                                                                  
                                    
                                    
                                    
                                    
                                    
                                </Flex>
                            )
                        })}
                        
                    </Flex>
                </Flex>

            </Container>






















            {/* <VStack spacing="24px">
                {['hello', 'this', 'is', 'mickey'].map(item => (
                    <Button key={'a'} colorScheme={Math.random() < 0.5 ? 'blue' : 'red'}>{item}</Button>
                ))}
                <Flex borderRadius="24px" bg="green">Hello</Flex>
            </VStack> */}
        </>
    );
}

export default Login;