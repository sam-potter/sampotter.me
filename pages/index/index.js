import React from "react";
import id from "uuid/v1";
import Head from "next/head";
import { Footer } from "../../components";
import classes from "./index.module.css";

function Index() {
  let works = [
    {
      title: "Retail Track",
      type: "Business analysis tool",
      link: "/works/retail-track"
    },
    {
      title: "Podac",
      type: "Chrome extension web app",
      link: "/works/podac"
    }
  ];

  return (
    <>
      <Head>
        <title>Sam Potter</title>
      </Head>

      <div id="home">
        <div className={classes.Splash}>
          <h6 className={classes.SubHeading}>Sam Potter</h6>
          <div className={classes.Text}>
            <h1 className={classes.Heading}>
              I’m an Australian freelance developer, currently living in
              Melbourne, earning my bachelors degree at Monash Uni.
            </h1>
          </div>
          <div className={classes.Avatar}>
            <img src="/static/images/avatar.png" alt="" />
          </div>
        </div>

        <div className={classes.Works}>
          <h6 className={classes.SubHeading}>Selected Works</h6>
          <ul>
            {works.map(({ title, type }) => (
              <li key={id()} className={classes.Card}>
                <h1 className={classes.Heading}>{title}</h1>
                <h6 className={classes.SubHeading}>{type}</h6>
              </li>
            ))}
          </ul>
        </div>

        <div className={classes.Contact}>
          <div className={classes.TextBox}>
            <span>👋 </span>
            <h1 className={classes.Heading}>
              I’m available for
              <br /> freelance work
            </h1>
          </div>
          <p>sam.potter@hotmail.com</p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Index;
