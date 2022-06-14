import Layout from '@components/Layout';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Woodmax Decor</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="best furniture for dream space" />
      </Head>
      <Layout>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}

export default MyApp;
