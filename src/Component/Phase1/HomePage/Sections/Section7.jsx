import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Section7(props) {
  return (
    <Fragment>
      <section className="seventh-home-section">
        <div className="all-section-div">
          <small className="small-1">
            06.{" "}
            <strong style={{ color: "#3047a5" }}>Requirements Posted</strong>
          </small>
          <h2 style={{ color: "#333333" }}>
            Hundreds of Requirements Posted globally
          </h2>
          <p style={{ color: "#777777" }}>
            Nectowork is trusted by Solution Companies and Business Partners
            globally
          </p>
        </div>
        <ul className="seventh-home-section-ul-2">
          <li className="col-md-4 seventh-home-section-li-1">
            <Link to="/">
              {/* <small>
                <img
                  src="./Images/section7Organization.png"
                  alt="Section 7 Organization Icon"
                  style={{
                    borderRadius: "50%",
                    backgroundBlendMode: "hard-light",
                    width: "100px",
                  }}
                />
              </small> */}
              <i class="require-img bi bi-building"></i>
            </Link>
            <span style={{ color: "#000000" }} className="word-counter">
              457
            </span>
            <small style={{ color: "#000000" }}>
              Registered Solution Companies
            </small>
          </li>
          <li className="col-md-4 seventh-home-section-li-2">
            <Link to="/">
              {/* <small>
                <img
                  src="./Images/section7Boy.png"
                  alt="Section 7 Boy Icon"
                  style={{
                    borderRadius: "50%",
                    backgroundBlendMode: "hard-light",
                    width: "100px",
                  }}
                />
              </small> */}
              <i class="require-img bi bi-person"></i>
            </Link>
            <span style={{ color: "#000000" }} className="word-counter">
              912
            </span>
            <small style={{ color: "#000000" }}>
              Registered Business Partners
            </small>
          </li>
          <li className="col-md-4 seventh-home-section-li-3">
            <Link to="/">
              {/* <small>
                <img
                  src="./Images/section7SuitCase.png"
                  alt="Section 7 Suit Case Icon"
                  style={{
                    borderRadius: "50%",
                    backgroundBlendMode: "hard-light",
                    width: "100px",
                  }}
                />
              </small> */}
              <i class="require-img bi bi-bag-dash"></i>
            </Link>
            <span style={{ color: "#000000" }} className="word-counter">
              533
            </span>
            <small style={{ color: "#000000" }}>Requirements Posted</small>
          </li>
        </ul>
      </section>
    </Fragment>
  );
}

export default Section7;
