import Container from "../container";

import Button from "../button";

export default function About() {
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
          <Button primary href="mailto:sam.potter@hotmail.com" isExternal>
            Email Me
          </Button>
          <div className="secondButton">
            <Button secondary>Resumé</Button>
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
