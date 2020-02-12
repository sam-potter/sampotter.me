import React from "react";
import Head from "next/head";

const SEO = ({ title }) => (
  <Head>
    <title>{title}</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/gsap.min.js" />

    <meta charSet="utf-8" />
    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Sam Potter" />
    <meta name="robots" content="follow, all" />
    <meta name="language" content="en" />
    <link rel="canonical" href="https://sampotter.net/" />
    <meta property="og:url" content="https://sampotter.net/" />
    <meta property="og:site_name" content="Sam Potter | Portfolio" />
    <meta property="og:title" content="Sam Potter | Portfolio" />
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
      content="Melbourne Developer, Website Builder Melbourne, Sam Potter, Sam Potter Melbourne, Sam Potter Developer, Sam Potter Melbourne"
    />
  </Head>
);

export default SEO;
