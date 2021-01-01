import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';

import '@/css/tailwind.css';
import seoConfig from '../../seo.config';

const App = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <DefaultSeo {...seoConfig} />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
