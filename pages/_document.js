/* eslint-disable react/no-danger */
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class NextSite extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="author" content="Sam Potter" />
          <meta name="robots" content="follow, all" />
          <meta name="language" content="en" />
          <link rel="canonical" href="https://sampotter.me/" />
          <meta property="og:url" content="https://sampotter.me/" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/static/images/favicon/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/static/images/favicon/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/static/images/favicon/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/static/images/favicon/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/static/images/favicon/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/static/images/favicon/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/static/images/favicon/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/images/favicon/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/images/favicon/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/static/images/favicon/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/images/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/static/images/favicon/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/images/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/images/favicon/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="/static/images/favicon/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#ffffff" />

          <meta
            name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
          />
        </Head>
        <body>
          <Main />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/gsap.min.js" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/ScrollToPlugin.min.js" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
