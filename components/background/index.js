import React, { Component } from "react";
import Head from "next/head";
import classes from "./background.module.css";

class Background extends Component {
  render() {
    return (
    <Head>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" />
    </Head>
    <canvas className={classes.Canvas} ref="canvas" />
  }
}

export default Background;
