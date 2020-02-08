import React from "react";
import Head from "next/head";

const SEO = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="/static/scroll.js" />
    <script src="/static/gsap.min.js/" />
  </Head>
);

export default SEO;
