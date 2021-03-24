import {useMemo} from 'react';
import {ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject} from '@apollo/client';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

const SERVER_URL = 'http://localhost:3000/api/graphql';

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const isSSR = () : boolean => typeof window === 'undefined';

function createApolloClient(): ApolloClient<NormalizedCacheObject>{
  return new ApolloClient({
    ssrMode: isSSR(),
    link: new HttpLink({uri: SERVER_URL, credentials: 'include'}),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  })
}

export function initializeApollo(initialState: any = null): ApolloClient<NormalizedCacheObject>{
  const _apolloClient = apolloClient ?? createApolloClient();

  if(initialState){
    const existingCache = _apolloClient.extract();

    _apolloClient.cache.restore({...existingCache, ...initialState});
  }

  if(isSSR()) return _apolloClient;

  if(!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function addApolloState(client: ApolloClient<NormalizedCacheObject>, pageProps: any){
  if(pageProps?.props){
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(pageProps: any){
  const state= pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);

  return store;
}