import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class NextSite extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            as="font"
            rel="preload"
            type="font/woff2"
            crossOrigin="anonymous"
            href="/fonts/inter-var-latin.woff2"
          />
          <meta name="language" content="en" />
          <meta name="author" content="Sam Potter" />
          <meta name="robots" content="follow, all" />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
