import React from 'react';
import UserInfoPage from './pages/UserInfoPage'
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache()
});

const App = () => {
  return (
      <ApolloProvider client={client}>
        <UserInfoPage />
      </ApolloProvider>
  );
}

export default App;
