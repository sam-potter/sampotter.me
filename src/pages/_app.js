import Head from 'next/head';
import { ThemeProvider } from 'next-themes';

import '@/css/tailwind.css';

const App = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <Head>
      <title>Sam Potter | Web Developer</title>
    </Head>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
