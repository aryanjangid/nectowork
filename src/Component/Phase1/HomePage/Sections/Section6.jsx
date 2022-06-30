import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Section6(props) {
  return (
    <Fragment>
      <section className="sixth-home-section">
        <div class="container">
        <div className="all-section-div">
          <small className="small-1">
            05. <strong style={{ color: "#3047a5" }}>Work Process</strong>
          </small>
          <h2 style={{ color: "#333333" }}>How Nectowork Works</h2>
          <p style={{ color: "#777777" }}>
            Connect with business partners or solution companies in three simple
            steps
          </p>
        </div>
        </div>
        <div class="container">
        <ul className="sixth-home-section-ul-1">
          <li className="section6_li1">
            <Link to="/">
              <div className="workprocess-img">
                <i class="bi bi-person bi-2x"></i>
              </div>

              <h2 className="heading-sixth">Step1 - Choose User Type</h2>
              <p className="p-sixth">
                Are you a Business Partner or Solution Company?
              </p>
            </Link>
          </li>
          <li className="col-md-4 col-sm-12 section6_li2">
            <Link to="/">
            <div className="workprocess-img">
            <i class="bi bi-file-earmark-text"></i>
              </div>
              <h2 className="heading-sixth">Step2 - Sign Up</h2>
              <p className="p-sixth">
                Enter your details and signup on website
              </p>
            </Link>
          </li>
          <li className="col-md-4 col-sm-12 section6_li3">
            <Link to="/">
            <div className="workprocess-img">
            <i class="bi bi-person-video3"></i>
              </div>
              <h2 className="heading-sixth">Step3 - Connect</h2>
              <p className="p-sixth">
                Nectowork team will come back with partner recommendations based
                on our proprietary AI based matching system
              </p>
            </Link>
          </li>
        </ul>
        </div>
      </section>
    </Fragment>
  );
}

export default Section6;
