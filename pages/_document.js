import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class NextSite extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <meta name="language" content="en" />
          <meta name="author" content="Sam Potter" />
          <meta name="robots" content="follow, all" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" sizes="192x192" href="/apple-touch-icon.png" />
          <link rel="shortcut icon" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="shortcut icon" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="shortcut icon" sizes="192x192" href="/android-icon-192x192.png" />
        </Head>
        <body className="bg-white dark:bg-black">
          <Main />
          <NextScript />
          <script async data-api="/_hive" src="/bee.js"></script>
        </body>
      </Html>
    );
  }
}
