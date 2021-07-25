import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { theme } from '../styles/theme'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

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
