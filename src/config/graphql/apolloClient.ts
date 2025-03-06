/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Định nghĩa type cho headers
interface AuthHeaders {
  [key: string]: any;
  authorization?: string;
}

// Tạo HTTP link đến API GraphQL
const httpLink = createHttpLink({
  uri: 'https://countries.trevorblades.com/',
});

// Middleware để thêm token vào header
const authLink = setContext(async (_, { headers = {} }: { headers?: AuthHeaders }) => {
  const token = 'your-auth-token'; 
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
});

export default client;
