import React from "react";
import { BrowserView } from "react-device-detect";

import Page from "../components/page-container";
import Container from "../components/container";

import Background from "../components/background";
import Showcase from "../components/showcase";
import Button from "../components/button";

function About() {
  return (
    <Container>
      <div className="container">
        <h1>
          Hola,
          <br /> My name’s <span className="blue">Sam Potter</span>.
        </h1>
        <p>
          I’m a full-stack web developer from Melbourne whom offers my services
          as a freelancer. I’ve built portfolio sites for individuals, business
          tools for companies, as well as weird crap that I come up with. Scroll
          down to check out some of my previous works.
        </p>
        <div className="buttons">
          <Button primary>Email Me</Button>
          <div className="secondButton">
            <Button secondary>Resumé</Button>
          </div>
        </div>

        {/* <BrowserView> */}
        {/* <Background /> */}
        {/* </BrowserView> */}

        <style jsx>{`
          .container {
            margin: 100px 0;
            width: 51%;
          }
          .buttons {
            margin-top: 25px;
            display: flex;
          }
          .secondButton {
            margin-left: 20px;
          }
          .blue {
            color: #0070f3;
          }
          @media screen and (max-width: 816px) {
            .container {
              width: 100%;
            }
            .buttons {
              justify-content: space-between;
            }
            .secondButton {
              margin-left: 0;
            }
            h1 {
              font-size: 30px;
            }
          }
        `}</style>
      </div>
    </Container>
  );
}

function Works() {
  return (
    <Container wide white overflow="auto">
      <Container>
        <div className="container">
          <div className="work">
            <Showcase
              slides={[
                { src: "/static/images/podac/background.jpg" },
                { src: "/static/images/podac/bookmark.jpg" }
              ]}
            />
            <div className="info">
              <div className="title">
                <div className="text">
                  <h1 className="fw6">Podac</h1>
                  <p className="subheading">Chrome Extension</p>
                </div>
                <div className="hide-tablet hide-mobile">
                  <Button>View Demo</Button>
                </div>
              </div>
              <div className="description">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est.
                </p>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .container {
            margin-top: 100px;
          }
          .work {
            position: relative;
            top: -100px;
          }
          .info {
            margin-top: 60px;
            display: flex;
            justify-content: space-between;
          }
          .title {
            min-width: 265px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .subheading {
            color: rgba(0, 0, 0, 0.6);
          }
          p {
            margin: 0;
          }
          @media screen and (max-width: 816px) {
            .info {
              display: block;
            }
            .title {
              margin-bottom: 30px;
            }
          }
        `}</style>
      </Container>
    </Container>
  );
}

export default function Home() {
  return (
    <Page title="Sam Potter | Portfolio">
      <About />
      <Works />
    </Page>
  );
}
