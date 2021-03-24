import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import { addApolloState, initializeApollo } from '../lib/apolloClient';
import {GET_USER_QUERY} from '../shared/queries';
import {User} from '../shared/interfaces';
import styles from '../styles/Home.module.css'

interface HomeContext extends GetServerSidePropsContext{
  users: User[];
}

export default function Home({users} : HomeContext) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {users.map((user) => {
        return <div>{user.id} {user.name} {user.email}</div>
        })}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext){
  const apolloClient = initializeApollo();

  const {data, error} = await apolloClient.query({
    query: GET_USER_QUERY
  })

  return addApolloState(apolloClient, {
    props:{
      users: data.users
    }
  })
}