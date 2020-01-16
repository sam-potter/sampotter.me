import React from "react";
import Head from "next/head";
import { Showcase, Footer } from "../../components";
import classes from "./index.module.css";

const Index = () => (
  <>
    <Head>
      <title>Sam Potter</title>
      <script>
        document.addEventListener("scroll",_ =>
        document.getElementsByTagName('body')[0].style.background=(document.documentElement.scrollTop>50)?"#fff":"#112267",false);
      </script>
    </Head>

    <div id="home">
      <div className={classes.Splash}>
        <h1 className={classes.Heading}>
          I’m not going to write a bullshit slogan here,
          <br /> because that’s not me.
        </h1>
        <p>Instead, check out some of my previous projects.</p>
      </div>

      <div className={classes.Works}>
        <div className={classes.Websites}>
          <h1 className={classes.Heading}>websites</h1>

          <Showcase />
        </div>

        <div className={classes.WebApps}>
          <h1 className={classes.Heading}>web apps</h1>

          <Showcase />
        </div>
      </div>

      <div className={classes.About}>
        <img
          className={classes.Avatar}
          src="/static/avatar.jpg"
          width="300px"
          alt=""
        ></img>
        <div className={classes.Text}>
          <p>
            My name’s Sam Potter, I’m a full-stack web developer that offers my
            services as a freelancer. I’ve built countless apps and websites for
            plenty of good people, and I’m always happy to take on new work 😊
          </p>
          <p>
            I mostly work with React, and use server-side rendering to optimise
            performance and usability. So far, no task has been too big, nor too
            small, so whatever web solution you need, don’t hesitate to get in
            touch.
          </p>
          <p>
            I’m also unemployed. If you’re an employer that’s reading this, here
            is my <a href="/static/sampotter-resume.pdf">resume</a>. You,
            especially, should not hesitate to get in touch.
          </p>
          <div className={classes.NameLocation}>
            <p>Sam P</p>
            <p>Melbourne, Australia</p>
          </div>
        </div>
      </div>

      <div className={classes.Contact}>
        <div className={classes.TextBox}>
          <span>👋 </span>
          <h1 className={classes.Heading}>
            I’m available for freelance
            <br />
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
