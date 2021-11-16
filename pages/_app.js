import Head from 'next/head';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Blatt Architects</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Local to Edmond Architecture Firm" />
        <meta name="keywords" content="blatt, architecture, architects, buildings, construction, renderings" />
        <meta name="author" content="Brandon Davis" />

        <meta property="og:title" content="Blatt Architects" />

        <meta httpEquiv='cache-control' content='no-cache' />
        <meta httpEquiv='expires' content='0' />
        <meta httpEquiv='pragma' content='no-cache' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;