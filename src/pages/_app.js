import '@/css/tailwind.css';
import Head from 'next/head';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Sam Potter | Web Developer</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
