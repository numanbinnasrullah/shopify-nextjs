
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'YOUR_SHOPIFY_STOREFRONT_API_ENDPOINT',
    cache: new InMemoryCache(),
  });

const ApolloProviderWrapper = ({children}) => {
  return (
    <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
  )
}

export default ApolloProviderWrapper;