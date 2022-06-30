import React, { Fragment } from "react";
import classes from "./heading.module.css";
function Heading(props) {
  return (
    <Fragment>
      <div className={classes.headingDiv}>
        <p>{props.subheading}</p>
        <h1>{props.heading1} <span>{props.heading2}</span></h1>
        <h5>{props.subheading2}</h5>
      </div>
    </Fragment>
  );
}

export default Heading;
