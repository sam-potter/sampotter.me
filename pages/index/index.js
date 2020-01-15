import React from "react";
import id from "uuid/v1";
import Head from "next/head";
import { Nav, Footer } from "../../components";
import classes from "./index.module.css";

function Index() {
  let works = [
    { title: "Retail Track", type: "Business Analysis Tool" },
    { title: "Podac", type: "Chrome Extension" }
  ];

  return (
    <>
      <Head>
        <title>Sam Potter</title>
      </Head>

      <div id="home">
        <Nav />

        <div className={classes.Splash}>
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
                <p className={classes.Type}>{type}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={classes.Contact}>
          <div className={classes.TextBox}>
            <span>👋 </span>
            <h1 className={classes.Heading}>
              I’m available for
              <br /> freelance work, please
              <br /> contact me <a href="mailto:sam.potter@hotmail.com">here</a>
              .
            </h1>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Index;
