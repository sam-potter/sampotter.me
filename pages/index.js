import React from "react";
import Head from "next/head";
import Link from "next/link";

import Button from "../components/Button";
import theme from "../theme";

const Home = () => (
  <div>
    <Head>
      <title>Sam Potter | Home</title>
    </Head>

    <div className="hero">
      <h1 className="title">Hi, my name is Sam Potter</h1>
      <p className="description">
        I'm a Melbourne-based developer, 18 years old and unemployed.
      </p>
      <div className="row">
        <Link href="/contact">
          <Button>Contact</Button>
        </Link>
        <a
          href="/static/icons/instagram.svg"
          target="_blank"
          className="bubble"
        >
          Download resume
        </a>
      </div>
      <div className="card">
        <p className="heading">⏰ Me right now</p>
        <p className="text">
          Currently I’m studying Computer Science at Monash University,
          Melbourne. However, I’m also running a small startup on the side
          called{" "}
          <a href="https:///www.google.com/" target="_blank">
            Stopover
          </a>
          , go check it out.
        </p>
      </div>
    </div>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
      }
      a {
        color: ${theme.colors.blue};
        text-decoration: none;
        transition: all 200ms ease;
      }
      .bubble {
        padding: 0.3rem 0.6rem;
        margin: -0.3rem -0.6rem;
        border-radius: 7px;
        background-color: transparent;
      }
      .bubble:hover {
        background: rgba(0, 118, 255, 0.1);
      }
      a:not(.bubble):hover {
        color: #68b5fb;
      }

      .hero {
        width: 100%;
        color: #333;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .title {
        margin: 200px 0 0 0;
        width: 100%;
        line-height: 1.15;
        font-size: 48px;
      }
      .title {
        font-size: 66px;
        text-align: center;
      }
      .description {
        font-size: 24px;
        text-align: center;
        opacity: 0.5;
      }
      .row {
        min-width: 500px;
        margin: 40px auto 40px;
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
      .card {
        margin-top: 40px;
        max-width: 700px;
        background-color: rgb(240, 240, 240);
        border-radius: 10px;
        padding: 20px 80px;
      }
      .card .heading {
        font-weight: bold;
      }
    `}</style>
  </div>
);

export default Home;
