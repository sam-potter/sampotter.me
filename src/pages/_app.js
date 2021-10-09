import Head from 'next/head';
import 'tailwindcss/tailwind.css';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
