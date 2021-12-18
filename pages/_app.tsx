import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react"
import Head from "next/head";
import { theme } from '../styles/theme'
import { client } from '../graphql/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider theme={theme}>
     <Head>
        <title>Audiophile</title>
      </Head>
  <ApolloProvider client={client}>
  <Component {...pageProps} />
  </ApolloProvider>
  </ChakraProvider>
  )
}
export default MyApp
