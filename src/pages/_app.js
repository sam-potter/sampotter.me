import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import 'tailwindcss/tailwind.css';
import seoConfig from '../../seo.config';

// const tokenClassNames = {
//   tag: 'text-code-red',
//   'attr-name': 'text-code-yellow',
//   'attr-value': 'text-code-green',
//   deleted: 'text-code-red',
//   inserted: 'text-code-green',
//   punctuation: 'text-code-white',
//   keyword: 'text-code-purple',
//   string: 'text-code-green',
//   function: 'text-code-blue',
//   boolean: 'text-code-red',
//   comment: 'text-gray-400 italic',
// };

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <DefaultSeo {...seoConfig} />
    <Component {...pageProps} />
  </>
);

export default App;
