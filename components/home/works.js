import { useState, useEffect } from "react";
import useDevice from "../hooks/device";

import Container from "../container";
import Carousel from "../carousel";

export default function Works() {
  const { isMobile: isWide } = useDevice();

  return (
    <Container wide white overflow="auto">
      <div className="container">
        <div className="work">
          <Container wide={isWide}>
            <Carousel
              photos={[
                {
                  src: "/static/images/podac/background/full.jpg",
                  thumbnail: "/static/images/podac/background/thumbnail.jpg",
                  alt: "Podac - Chrome Extension - Homepage",
                  width: 1020,
                  height: 475,
                  color: "#ae6f5b",
                },
                {
                  src: "/static/images/podac/bookmark/full.jpg",
                  thumbnail: "/static/images/podac/bookmark/thumbnail.jpg",
                  alt: "Podac - Chrome Extension - Bookmarks interface",
                  width: 1020,
                  height: 475,
                  color: "#ae6f5b",
                },
              ]}
            />
          </Container>
          <Container>
            <div className="info">
              <div className="title">
                <div className="text">
                  <h1 className="fw6">Podac</h1>
                  <p className="subheading">Chrome Extension</p>
                </div>
                <div className="hide-tablet hide-mobile">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    View Demo
                  </a>
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
          </Container>
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
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
          }
          .title {
            min-width: 265px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .subheading {
            color: var(--text-muted);
          }
          p {
            margin: 0;
          }
          @media screen and (max-width: 816px) {
            .info {
              display: block;
              margin-top: var(--padding-mobile);
            }
            .title {
              margin-bottom: 30px;
            }
          }
        `}</style>
      </div>
    </Container>
  );
}
