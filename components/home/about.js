import { isMobile } from "../hooks/device";

import Container from "../container";

import Button from "../button";

const About = () => {
  const isFull = isMobile();
  const full = isFull ? { width: "100%" } : null;

  return (
    <Container>
      <div className="container">
        <h1>
          Hey,
          <br /> My name’s <span className="blue">Sam Potter</span>.
        </h1>
        <p>
          I’m a full-stack web developer from Melbourne currently working at{" "}
          <a href="https://www.retailsafari.com.au/">Retail Safari</a> as a
          frontend engineer. In my spare time, I also offer my services as a
          freelancer building tools for business, portfolio websites for people,
          as well as weird crap that I come up with. Scroll down to check out
          some of my previous works.
        </p>
        <div className="buttons">
          <Button
            href="mailto:sam.potter@hotmail.com"
            style={full}
            primary
            isExternal
          >
            Email Me
          </Button>
          <div className="secondButton">
            <Button style={full} secondary>
              Resumé
            </Button>
          </div>
        </div>

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
              display: block;
            }
            .button {
              width: 100%;
            }
            .secondButton {
              margin: 15px 0 0 0;
            }
            h1 {
              font-size: 30px;
            }
          }
        `}</style>
      </div>
    </Container>
  );
};
export default About;
