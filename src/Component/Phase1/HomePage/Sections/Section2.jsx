import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Section2() {
  return (
    <Fragment>
      <section className="second-home-section">
        <div className="all-section-div">
          <small className="small-1">
            01. <strong style={{ color: "#3047a5" }}>Service Experience</strong>
          </small>
          <h2 style={{ color: "#333333" }}>
            Nectowork Offers You Seamless Customer Experience
          </h2>
          <p style={{ color: "#777777" }}>
            We are driven by passion of servicing you better
          </p>
        </div>
        <div className="second-home-section-div-2">
          <ul className="second-home-section-ul-1">
            <li className="section2_li1">
              <Link to="/">
                <div className="serviceex-img">
                <i class="bi bi-cash-coin"></i>
                </div>
                <p className="p-second">
                  NO SUBSCRIPTION FEE. NO HIDDEN CHARGES. 100% FREE
                </p>
              </Link>
            </li>
            <li className="section2_li2">
              <Link to="/">
                <div className="serviceex-img">
                <i class="bi bi-person"></i>
                </div>
                <p className="p-second">DEDICATED ACCOUNT MANAGER</p>
              </Link>
            </li>
            <li className="section2_li3">
              <Link to="/">
                <div className="serviceex-img">
                <i class="bi bi-graph-up-arrow"></i>
                </div>
                <p className="p-second">PURPOSEFULLY BUILD TO DRIVE SALES</p>
              </Link>
            </li>
            <li className="section2_li3">
              <Link to="/">
                <div className="serviceex-img">
                <i class="bi bi-alarm"></i>
                </div>
                <p className="p-second">GET STARTED IN 48 HOURS</p>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </Fragment>
  );
}

export default Section2;
