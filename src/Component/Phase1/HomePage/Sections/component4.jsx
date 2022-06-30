import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./homepage.module.css";
import Heading from "../../../Headings/Heading";
import img1 from "../../../assets/c4img1.png";
const data = [
  {
    img: img1,
    heading: "Efficacious",
    details:
      "Face to face introductions with key decision makers Exponentially increased meetings & conversions Eliminate cold reachouts",
  },
  {
    img: img1,
    heading: "Hyper Growth",
    details:
      "Face to face introductions with key decision makers Exponentially increased meetings & conversions Eliminate cold reachouts",
  },
  {
    img: img1,
    heading: "Focus and Faster",
    details:
      "Face to face introductions with key decision makers Exponentially increased meetings & conversions Eliminate cold reachouts",
  },
];

function Component4() {
  return (
    <Fragment>
      <div className={classes.c4maindiv}>
        <Heading
          subheading="Benefits for Solution Companies"
          heading1="Why Nectowork for"
          heading2="Solution Companies?"
          subheading2="Find a right business partners for your business and grow exponentially"
        />
        <div className={classes.c4contentdiv}>
          {data.map((card) => {
            return (
              <div className={classes.c4card}>
                <div className={classes.c4cardImgDiv}>
                  <img src={card.img}></img>
                </div>
                <h1>{card.heading}</h1>
                <p>{card.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default Component4;
