import { ApolloClient, InMemoryCache } from "@apollo/client";
import ApolloLinkTimeout from "apollo-link-timeout";
import { createHttpLink } from "apollo-link-http";

const TIMEOUT = 6000;
const timeoutLink = new ApolloLinkTimeout(TIMEOUT);
const httpLink = createHttpLink({
//   uri: "/graphql",
  uri: 'https://ecommerce-audiophile.herokuapp.com/graphql',
});

const timeoutHttpLink = timeoutLink.concat(httpLink as any);
const cache = new InMemoryCache();

export const client = new ApolloClient({
  link: timeoutHttpLink,
  cache: new InMemoryCache(),
});
