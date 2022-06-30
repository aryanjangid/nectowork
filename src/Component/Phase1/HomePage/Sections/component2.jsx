import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./homepage.module.css";
import Heading from "../../../Headings/Heading";
import img1 from "../../../assets/c2img1.png"
const data=[
  {
    img:img1,
    heading:"NO FEES",
    details:"No Subscription Fee.No Hidden Charges.100% Free",
  },
  {
    img:img1,
    heading:"NO FEES",
    details:"No Subscription Fee.No Hidden Charges.100% Free",
  },
  {
    img:img1,
    heading:"NO FEES",
    details:"No Subscription Fee.No Hidden Charges.100% Free",
  },
  {
    img:img1,
    heading:"NO FEES",
    details:"No Subscription Fee.No Hidden Charges.100% Free",
  },
]

function Component2() {
  return (
    <Fragment>
      <div className={classes.c2maindiv}>
        <Heading
          subheading="Service Experience"
          heading1="Nectowork Offers You"
          heading2="Seamless Customer Experience"
          subheading2="We are driven by passion of servicing you better"
        />
        <div className={classes.c2contentdiv}>
          {data.map((card)=>{
            return( 
              <div className={classes.c2card}>
                <div>
                <img src={card.img}></img>
                </div>
                <h1>{card.heading}</h1>
                <p>{card.details}</p>
              </div>
            )
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default Component2;
