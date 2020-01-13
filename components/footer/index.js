import React from "react";
import classes from "./footer.module.css";

const Footer = props => (
  <div className={classes.Footer}>
    <a href="https://www.instagram.com/sampotter4/">Instagram</a>
    <span className={classes.Divider} />
    <a href="https://github.com/saampotter">Github</a>
  </div>
);

export default Footer;
