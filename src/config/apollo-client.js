import {ApolloClient} from 'apollo-client';
import AsyncStorage from '@react-native-community/async-storage';
import {HttpLink} from 'apollo-link-http';
import {getMainDefinition} from 'apollo-utilities';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {setContext} from 'apollo-link-context';
import {split} from 'apollo-link';
import {WebSocketLink} from 'apollo-link-ws';

import env from 'config/env';
import {STORAGE_USER_TOKEN_KEY} from 'utils/constants';

const httpLink = new HttpLink({uri: env.LEGACY_API_ENDPOINT});
// const wsLink = new WebSocketLink({
//   uri: env.LEGACY_WS_ENDPOINT,
//   options: {reconnect: true},
// });

const authLink = setContext(async (_, {headers}) => {
  const token = (await AsyncStorage.getItem(STORAGE_USER_TOKEN_KEY)) || null;

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    },
  };
});

const link = split(
  ({query}) => {
    const {kind, operation} = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  // wsLink,
  authLink.concat(httpLink),
);

export default new ApolloClient({
  link,
  cache: new InMemoryCache({
    addTypename: false,
  }),
});
