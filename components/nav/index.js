import React from "react";
import { Link } from "react-scroll";
import classes from "./nav.module.css";

const Anchor = props => (
  <Link smooth={true} to={props.to}>
    {props.children}
  </Link>
);

function Nav() {
  return (
    <div className={classes.Nav}>
      <h3>sam potter</h3>
      <div className={classes.Links}>
        <Anchor to="about">about</Anchor>
        <Anchor to="works">work</Anchor>
        <Anchor to="contact">contact</Anchor>
      </div>
    </div>
  );
}

export default Nav;
