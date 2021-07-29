import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Tooltip,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalHeader,
    ModalCloseButton,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useRouter } from 'next/router'

  
  export default function SimpleCard() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [password, setPassword] = useState('');

    const router = useRouter()


    const handleSubmit = (event: any) => {
      event.preventDefault();
      fetch('https://ecommerce-audiophile.herokuapp.com/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        // We convert the React state to JSON and send it as the POST body
        body: `password=${password}`
      }).then(function(response) {
        return response.json();
      }).then(result => {
        document.cookie = `token=${result.token};max-age=500000;domain=ecommerce-audiophile.netlify.app`;
        router.push('admin')
      });
  }


    return (
      <form onSubmit={handleSubmit}>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Password is required</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                <Flex></Flex>
                  <Tooltip label={`try "admin"`} aria-label="A tooltip">
                 {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <Link color={'blue.400'} onClick={onOpen}>Don't know password?</Link>
                  </Tooltip>
                  
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  type="submit"
                  >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
          
        </Stack>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <ModalBody textAlign="center"> This website is just a demo, if you're just browsing and want to see the admin page (without any of the functionality) you can type in the password "admin" and sign in
            </ModalBody>
  
            <ModalFooter alignSelf="center">
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
      </form>
    );
  }


  