import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class NextSite extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta name="author" content="Sam Potter" />
                    <meta name="robots" content="follow, all" />
                    <meta name="language" content="en" />
                    <link rel="canonical" href="https://sampotter.me/" />
                    <meta property="og:url" content="https://sampotter.me/" />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta
                        name="msapplication-TileImage"
                        content="images/favicon/ms-icon-144x144.png"
                    />
                    <meta name="theme-color" content="#ffffff" />
                    <link
                        rel="apple-touch-icon"
                        sizes="57x57"
                        href="images/favicon/apple-icon-57x57.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="60x60"
                        href="images/favicon/apple-icon-60x60.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="72x72"
                        href="images/favicon/apple-icon-72x72.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="76x76"
                        href="images/favicon/apple-icon-76x76.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="114x114"
                        href="images/favicon/apple-icon-114x114.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="120x120"
                        href="images/favicon/apple-icon-120x120.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="144x144"
                        href="images/favicon/apple-icon-144x144.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="152x152"
                        href="images/favicon/apple-icon-152x152.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="images/favicon/apple-icon-180x180.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="192x192"
                        href="images/favicon/android-icon-192x192.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="images/favicon/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="96x96"
                        href="images/favicon/favicon-96x96.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="images/favicon/favicon-16x16.png"
                    />
                    <link rel="manifest" href="images/favicon/manifest.json" />
                    <meta
                        property="og:description"
                        content="My name’s Sam Potter, I’m a full-stack web developer from Melbourne, Australia. I build websites and tech solutions for individuals, businesses, and startups."
                    />
                    <meta
                        name="description"
                        content="My name’s Sam Potter, I’m a full-stack web developer from Melbourne, Australia. I build websites and tech solutions for individuals, businesses, and startups."
                    />
                    <meta
                        name="keywords"
                        content="Sam Potter Web Developer, Melbourne Developer, Website Builder Melbourne, Sam Potter, Sam Potter Melbourne, Sam Potter Developer, Sam Potter Melbourne"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script async src="https://cdn.splitbee.io/sb.js"></script>
                </body>
            </Html>
        );
    }
}
