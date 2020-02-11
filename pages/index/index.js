import React, { useEffect } from "react";
import { SEO, Showcase, Background, Nav } from "../../components";
import classes from "./index.module.css";
import { SmoothScroll } from "./scroll.js";

function Index() {
  useEffect(() => {
    new SmoothScroll(document, 150, 6);
  }, []);

  return (
    <>
      <SEO title="Sam Potter" />

      <div id="home">
        <Nav />

        <div className={classes.Splash}>
          <h1>
            I’m not going to put some vague slogan here to make you hire me,{" "}
            <span>just go look at some of my work.</span>
          </h1>
          <Background />
        </div>

        <div name="about" className={classes.About}>
          <h1 className={classes.Title}>
            My name’s Sam Potter, I’m a full-stack web developer from Melbourne,
            Australia.
          </h1>
          <p>
            In my short 18 years on this earth, I’ve built countless websites
            for individuals, businesses and startups. I’m simple, and cut right
            through the bullsh*t. No task has been too big, nor too small (so
            far 😊), so don’t hesitate to get in touch!
          </p>
          <p>
            <b>P.S.</b>I’m also looking for a job in this industry. So if you’re
            an employer that’s reading this, here is my{" "}
            <a href="/static/sampotter-resume.pdf">resume</a>. You, especially,
            should not hesitate to get in touch.
          </p>
        </div>

        <div name="works" className={classes.Works}>
          <div className={classes.Work}>
            <div className={classes.Info}>
              <h4>chrome extension</h4>
              <h1>Podac</h1>
            </div>

            <Showcase
              backgrounds={[
                {
                  src: "/static/images/podac/main.jpg",
                  duration: 5000,
                  background: "#b8b8b8"
                },
                {
                  src: "/static/images/podac/add-bookmark.jpg",
                  duration: 5000,
                  background: "#b8b8b8"
                }
              ]}
            />
          </div>

          <div className={classes.Work}>
            <div className={classes.Info}>
              <h4>website</h4>
              <h1>Charlie Potter</h1>
            </div>

            <Showcase
              backgrounds={[
                {
                  src: "/static/images/charlie-potter/About.jpg",
                  duration: 5000,
                  background: "#4B84FC"
                },
                {
                  src: "/static/images/charlie-potter/Director.jpg",
                  duration: 5000,
                  background: "#4B84FC"
                }
              ]}
            />
          </div>

          <div className={classes.Work}>
            <div className={classes.Info}>
              <h4>web app</h4>
              <h1>Retail Track</h1>
            </div>

            <Showcase
              backgrounds={[
                {
                  src: "/static/images/retail-track/login.jpg",
                  duration: 5000,
                  background: "#1e1e1e"
                },
                {
                  src: "/static/images/retail-track/home.jpg",
                  duration: 5000,
                  background: "#1e1e1e"
                },
                {
                  src: "/static/images/retail-track/create-campaign.jpg",
                  duration: 5000,
                  background: "#1e1e1e"
                },
                {
                  src: "/static/images/retail-track/campaign.jpg",
                  duration: 5000,
                  background: "#1e1e1e"
                },
                {
                  src: "/static/images/retail-track/error.jpg",
                  duration: 5000,
                  background: "#1e1e1e"
                }
              ]}
            />
          </div>
        </div>

        <div name="contact" className={classes.Contact}>
          <div className={classes.TextBox}>
            <span>👋 </span>
            <h1 className={classes.Heading}>
              I’m available for freelance <br />
              work, send me an email{" "}
              <a href="mailto:sam.potter@hotmail.com">here</a> <br />
              to get in touch.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
export default Index;
