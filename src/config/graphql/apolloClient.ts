/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { split } from '@apollo/client/link/core';
import { onError } from '@apollo/client/link/error';
import { getMainDefinition } from '@apollo/client/utilities';

// Define a list of endpoints
const endpoints = {
  countries: 'https://countries.trevorblades.com/',
  users: 'https://users-api.com/graphql',
};

// Create HTTP links for each API
const httpLinks = Object.entries(endpoints).reduce(
  (acc, [key, uri]) => {
    acc[key as keyof typeof endpoints] = createHttpLink({ uri });
    return acc;
  },
  {} as Record<keyof typeof endpoints, ApolloLink>,
);

// Middleware to add token to header
const authLink = setContext(async (_, { headers }) => {
  const token = 'your-auth-token';
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Error handling
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ locations, message, path }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
    });
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

// Use `split()` to automatically select links
const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'query'
    );
  },
  authLink.concat(httpLinks.countries), // Mặc định chọn countries nếu là query
  authLink.concat(httpLinks.users), // Chọn users nếu không phải query
);

// Initialize Apollo Client
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([errorLink, link]),
});

// Helper to call API in `client.countries.query(...)` style
const createClientProxy = (client: ApolloClient<any>) => {
  return {
    countries: {
      mutate: (mutation: any, variables = {}) =>
        client.mutate({ mutation, variables }),
      query: (query: any, variables = {}) => client.query({ query, variables }),
    },
    users: {
      mutate: (mutation: any, variables = {}) =>
        client.mutate({ mutation, variables }),
      query: (query: any, variables = {}) => client.query({ query, variables }),
    },
  };
};

export const gqlClient = createClientProxy(client);
