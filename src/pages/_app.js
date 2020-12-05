import 'tailwindcss/tailwind.css';
import Head from 'next/head';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Sam Potter | Software Developer</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
