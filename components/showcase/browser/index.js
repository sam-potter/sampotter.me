import React from "react";
import classes from "./browser.module.css";

const Browser = ({ children }) => (
  <div className={classes.Browser}>
    <div className={classes.Bar}>
      <div className={classes.Dot} style={{ background: "#EA4F49" }} />
      <div className={classes.Dot} style={{ background: "#F7BC33" }} />
      <div className={classes.Dot} style={{ background: "#69CA43" }} />
    </div>
    {children}
  </div>
);

export default Browser;
