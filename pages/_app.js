import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/core';
import theme from '@/styles/theme';

const App = ({ Component, pageProps }) => (
    <ChakraProvider theme={theme} resetCSS>
        <Head>
            <title>Sam Potter | Portfolio</title>
        </Head>
        <Component {...pageProps} />
    </ChakraProvider>
);

export default App;
