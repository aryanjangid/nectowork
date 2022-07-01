import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./homepage.module.css";
import Heading from "../../../Headings/Heading";
import img1 from "../../../assets/c5img1.png";
import img2 from "../../../assets/c4img1.png";

const data = [
  {
    img: img1,
    heading: "Efficacious",
    details:
      "Face to face introductions with key decision makers Exponentially increased meetings & conversions Eliminate cold reachouts",
  },
  {
    img: img2,
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

function Component5() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (index)=>{
    setCurrentIndex(index)
    if(index===0)
    {
      setExpanded(!expanded)
      setExpanded2(false)
      setExpanded3(false)
    }
    else if(index===1)
    {
      setExpanded2(!expanded2)
      setExpanded(false)
      setExpanded3(false)
    }
    else
    {
      setExpanded3(!expanded3)
      setExpanded2(false)
      setExpanded(false)
    }
  }
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  return (
    <Fragment>
      <div className={classes.c5maindiv}>
        <Heading
          subheading="Benefits for Solution Companies"
          heading1="How does "
          heading2="Necto work?"
          subheading2="Find a right business partners for your business and grow exponentially"/>

        <div className={classes.c5accdiv}>
          <div className={classes.c5leftdiv}>
            <div className={classes.c5btn1}>
              <button onClick={()=>handleClick(0)}>
                <span>1. </span>Choose Your Type
              <div className={!expanded?classes.c5btntext:classes.c5btntextactive}><p>Are you a business partner or solution company? </p></div>
              </button>
            </div>
            <div className={classes.c5btn2}>
              <button onClick={()=>handleClick(1)}>
              <span>2. </span>Sign Up
              <div className={!expanded2?classes.c5btntext:classes.c5btntextactive}><p>Are you a business partner or solution company? </p></div>
              </button>
            </div>
            <div className={classes.c5btn3}>
              <button onClick={()=>handleClick(2)}>
              <span>3. </span>Connect
              <div className={!expanded3?classes.c5btntext:classes.c5btntextactive}><p>Are you a business partner or solution company? </p></div>
              </button>
            </div>
          </div>
          <div className={classes.c5rightdiv}>
            <div className={classes.c5outerdiv}>
              <img src={data[currentIndex].img} alt=".." />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Component5;
