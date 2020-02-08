import React from "react";
import { SEO, Showcase, Footer, Background } from "../../components";
import classes from "./index.module.css";

const Index = () => (
  <>
    <SEO title="Sam Potter" />

    <div id="home">
      <div className={classes.Splash}>
        <h3>sam potter</h3>
        <h1>
          I’m not going to put some vague slogan here to make you hire me,{" "}
          <span>just go look at some of my works.</span>
        </h1>
        <Background />
      </div>

      <div className={classes.Works}>
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

      <div className={classes.About}>
        <div className={classes.Container}>
          <div className={classes.AvatarContainer}>
            <img
              className={classes.Avatar}
              src="/static/images/avatar.jpg"
              alt=""
            />
          </div>
          <div className={classes.Text}>
            <p>
              My name’s Sam Potter, I’m a full-stack web developer that offers
              my services as a freelancer. I’ve built countless apps and
              websites for plenty of good people, and I’m always happy to take
              on new work 😊
            </p>
            <p>
              I mostly work with React, and use server-side rendering to
              optimise performance and usability. So far, no task has been too
              big, nor too small, so whatever web solution you need, don’t
              hesitate to get in touch.
            </p>
            <p>
              I’m also unemployed. If you’re an employer that’s reading this,
              here is my <a href="/static/sampotter-resume.pdf">resume</a>. You,
              especially, should not hesitate to get in touch.
            </p>
            <div className={classes.NameLocation}>
              <p>Sam P</p>
              <p>Melbourne, Australia</p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.Contact}>
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

    <Footer />
  </>
);

export default Index;
