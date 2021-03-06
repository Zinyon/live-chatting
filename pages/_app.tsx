import {ApolloProvider} from '@apollo/client';
import {useApollo} from '../lib/apolloClient'
import { AppProps } from 'next/app';
import '../styles/globals.css'
import React from 'react';

function MyApp({ Component, pageProps } : AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>

  )
}

export default MyApp;
