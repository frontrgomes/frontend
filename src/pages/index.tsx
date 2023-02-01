import type { NextPage } from 'next'
import Head from 'next/head'
import Home from '../components/templates/Home'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pr</title>
        <meta name="description" content="Pr" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Home/>
    </>
  );
};

export default HomePage
