import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from '../styles/theme'
import { client } from '../graphql/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider theme={theme}>
  <ApolloProvider client={client}>
  <Component {...pageProps} />
  </ApolloProvider>
  </ChakraProvider>
  )
}
export default MyApp
