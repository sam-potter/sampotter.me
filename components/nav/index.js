import React from "react";
import classes from "./nav.module.css";

function Nav() {
  return (
    <div className={classes.Nav}>
      <h3>sam potter</h3>
      <div className={classes.Links}>
        <a href="#about">about</a>
        <a href="#work">work</a>
        <a href="#contact">contact</a>
      </div>
    </div>
  );
}

export default Nav;
