import { 
    Center,Box, Flex, Container,VStack, useDisclosure, RadioGroup, Radio,
    Stack, Drawer, DrawerOverlay, DrawerBody,Button, DrawerHeader, DrawerContent
} from "@chakra-ui/react"
import React from "react"



const Login = () =>{
    return(
        <>
            <Container bg="gray.50" position="absolute" height="100%" width="100%" maxWidth="100%" color="white">

                <Flex boxShadow="base" flexDirection="column" color="black" backgroundColor="white" w="200px" h="100%" position="absolute" left="0px">
                    <Flex mb="4">ADMIN PAGE</Flex>
                    <Flex mb="4">Product</Flex>
                    <Flex mb="4">Customer</Flex>

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