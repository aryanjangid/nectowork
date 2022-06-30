import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./homepage.module.css";
import Heading from "../../../Headings/Heading";
import img1 from "../../../assets/c2img1.png";
const data = [
  {
    img: img1,
    heading: "Solution Comapany",
    subheading: "I have a solution to sell",
    details:
      "I am looking for business partners who can help in taking this solution to key target accounts",
    link: "",
    arrow:
      "https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-12.png",
  },
  {
    img: img1,
    heading: "Business Partner",
    subheading: "I can help you sell a soution",
    details:
      "I would like to introduce solution companies to their target prospective accounts",
    link: "",
    arrow:
      "https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-12.png",
  },
];

function Component3() {
  return (
    <Fragment>
      <div className={classes.c3maindiv}>
        <Heading
          subheading="User Type"
          heading1="Choose User"
          heading2="Type For You"
          subheading2="Are you a Solution Company or a Business Partner?"
        />
        <div className={classes.c3contentdiv}>
          {data.map((card) => {
            return (
              <div className={classes.c3card}>
                <div>
                  <img src={card.img}></img>
                </div>
                <h1>{card.heading}</h1>
                <h2>{card.subheading}</h2>
                <p>{card.details}</p>
                <Link to="/signin-signup" className={classes.c3LearnMoreButton}>
                  Learn More
                  <img className={classes.arrow} src={card.arrow}></img>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default Component3;
