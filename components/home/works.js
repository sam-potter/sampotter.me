import Container from "../container";
import Carousel from "../carousel";
import Button from "../button";

export default function Works() {
  return (
    <Container wide white overflow="auto">
      <Container>
        <div className="container">
          <div className="work">
            <Carousel
              slides={[
                { src: "/static/images/podac/background.jpg" },
                { src: "/static/images/podac/bookmark.jpg" },
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
