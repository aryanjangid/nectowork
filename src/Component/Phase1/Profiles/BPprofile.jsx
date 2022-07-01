import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./bpprofile.module.css";
import banner from "../../assets/banner.jfif";
import profile from "../../assets/profile.jfif";
// import Heading from "../../Headings/Heading";
const data = [
  {
    degree: "Bachelor of Commerce  - University of Kerala",
    date: "June 2020 - Present",
  },
  {
    degree: "Bachelor of Commerce  - University of Kerala",
    date: "June 2020 - Present",
  },
  {
    degree: "Bachelor of Commerce  - University of Kerala",
    date: "June 2020 - Present",
  },
];

function bpprofile() {
  return (
    <Fragment>
      <div className={classes.profileOuterDiv}>
        <div className={classes.bannerdiv}>
          <img className={classes.bannerimg} src={banner}></img>
        </div>
        <div className={classes.detaildiv}>
          <div className={classes.leftdiv}>
            <img src={profile}></img>
            <h1>Aryan Jangid</h1>
            <p>Experienced Sales Professional</p>
            <h4>India</h4>
            <h3>Total Experience : 25 year</h3>
            <h2>Profile Summary</h2>
            <h5>
              John is an experienced professional working in the middle ease
            </h5>
          </div>
          <div className={classes.rightdiv}>
            <div className={classes.rightdiv1}>
              <div className={classes.div1detialsname}>
                <h1>Target Geography</h1>
                <h1>Target Industry</h1>
                <h1>Target Department</h1>
                <h1>Decision Maker Type</h1>
                <h1>Engagement Type</h1>
              </div>
              <div className={classes.div1details}>
                <h1>INDIA</h1>
                <h1>Manufacturing</h1>
                <h1>IT Sales</h1>
                <h1>Senior</h1>
                <h1>Drive Deals</h1>
              </div>
            </div>
            <div className={classes.rightdiv2}>
              <h1>Message for getting more details</h1>
              <div className={classes.messagebuttondiv}>
                <button>MESSAGE</button>
                <button>SAVE</button>
              </div>
            </div>
            <div className={classes.rightdiv3}>
              <h1>Qualifications & Professional experience</h1>
              {data.map((data) => {
                return (
                  <div className={classes.qualificationdiv}>
                    <div>
                      <img src="https://img.icons8.com/material/24/000000/100-percents.png" />
                    </div>
                    <div className={classes.qualificationdetails}>
                      <h4>Bachelor of Commerce - University of Kerala</h4>
                      <h5>June 2020 - Present</h5>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={classes.rightdiv3}>
              <h1>Certifications</h1>
              {data.map((data) => {
                return (
                  <div className={classes.qualificationdiv}>
                    <div>
                      <img src="https://img.icons8.com/material/24/000000/100-percents.png" />
                    </div>
                    <div className={classes.qualificationdetails}>
                      <h4>Bachelor of Commerce - University of Kerala</h4>
                      <h5>June 2020 - Present</h5>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default bpprofile;
