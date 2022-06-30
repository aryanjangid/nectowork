import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./homepage.module.css";
function Component1() {
  return (
    <Fragment>
      <div className={classes.c1Maindiv}>
        <h1>
          Join World’s First Account <br></br><span>Based Selling Marketplace</span></h1>
        <p>Revolutionizing how B2B sales happens</p>
      </div>
      <div className={classes.c1ButtonDiv}>
        <div className={classes.c1Btn1}>
          <Link
            to="/signin-signup"
            className={classes.c1LearnMoreButton}
            style={{ fontWeight: "400" }}
          >
            Learn More
          </Link>
        </div>
        <div className={classes.c1Btn2}>
          <Link
            to="/signin-signup"
            className={classes.c1JoinNowButton}
            style={{ fontWeight: "400" }}
          >
            Join Now
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Component1;
