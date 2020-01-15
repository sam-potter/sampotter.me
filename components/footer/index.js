import React from "react";
import classes from "./footer.module.css";

const Footer = props => (
  <div className={classes.Footer}>
    <p>All rights reserved — © Sam Potter</p>
    <div className={classes.Links}>
      <a className="link-primary" href="https://www.instagram.com/sampotter4/">
        Instagram
      </a>
      <span className={classes.Divider}></span>
      <a className="link-primary" href="https://github.com/saampotter">
        Github
      </a>
    </div>
  </div>
);

export default Footer;
