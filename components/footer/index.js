import React from "react";
import classes from "./footer.module.css";

const Footer = props => (
  <div className={classes.Footer}>
    <div className={classes.Links}>
      <a href="https://www.instagram.com/sampotter4/">Instagram</a>
      <span className={classes.Divider}></span>
      <a href="https://github.com/saampotter">Github</a>
    </div>
    <p>
      This website loaded in 120ms, don’t worry, I’ll make yours just as fast.
    </p>
  </div>
);

export default Footer;
