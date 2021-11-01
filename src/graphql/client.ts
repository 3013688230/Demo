import {
    ApolloClient,
    InMemoryCache,
    HttpLink
} from "@apollo/client";

const graphql_endpoint = `https://fond-woodcock-99.hasura.app/v1/graphql`
 
export const createApolloClient = () => {
  const link = new HttpLink({
    uri: graphql_endpoint,
    headers: {
      'x-hasura-admin-secret': '9Q0ZQp3CVlabeydC931J0et2n4xnztj5wPx636z3toIjc8sKsltRB2Xxk2CPGujr'
    }
  });
  return new ApolloClient({
    link,
    cache: new InMemoryCache()
  })
}

