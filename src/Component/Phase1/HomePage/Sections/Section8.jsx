import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Section8(props) {
  return (
    <Fragment>
      <section className="eighth-home-section">
          <div className="container">
        <div className="all-section-div">
          <small className="small-1">
            07.<strong style={{ color: "#FFF" }}>Top Solution Categories</strong>
          </small>
          <h2 style={{ color: "#FFF" }}>
            Trending Solution Requirement Categories Posted By Solution Company
          </h2>
          <p style={{ color: "#FFF" }}>
            Solution companies are looking for business partners across
            industries and functions
          </p>
        </div>
        </div>
        <div className="container">
        <div className="eighth-section-div-2">
          <div className="werex">
            <div className="werex-divs">
              <Link to="/">
                <small>
                  <img
                    src="./Images/section8Analytics.png"
                    alt="Advanced Analytics"
                    style={{
                     width: "5rem",
                      backgroundBlendMode: "hard-light",
                    }}
                  />
                </small>
                <p>Advanced Analytics</p>
              </Link>
            </div>
            <div className="werex-divs">
              <Link to="/">
                <small>
                  <img
                    src="./Images/section8Wp.png"
                    alt="Conversational AI Bot"
                    style={{
                        width: "4rem",
                      backgroundBlendMode: "hard-light",
                    }}
                  />
                </small>
              </Link>
              <p>Conversational AI Bot</p>
            </div>
            <div className="werex-divs">
              <Link to="/">
                <small>
                  <img
                    src="./Images/section8Pc.png"
                    alt="CRM Solutions"
                    style={{
                      
                      backgroundBlendMode: "hard-light",
                    }}
                  />
                </small>
              </Link>
              <p>CRM Solutions</p>
            </div>
            <div className="werex-divs">
              <Link to="/">
                <small>
                  <img
                    src="./Images/section8DigitalMarketing.png"
                    alt="Digital Marketing"
                    style={{
                      
                      backgroundBlendMode: "hard-light",
                    }}
                  />
                </small>
              </Link>
              <p>Digital Marketing</p>
            </div>
            <div className="werex-divs">
              <Link to="/">
                <small>
                  <img
                    src="./Images/section8Office.png"
                    alt="Flexible Office Space"
                    style={{
                      
                      backgroundBlendMode: "hard-light",
                    }}
                  />
                </small>
              </Link>
              <p>Flexible Office Space</p>
            </div>
            <div className="werex-divs">
              <Link to="/">
                <small>
                  <img
                    src="./Images/section8Hospital.png"
                    alt="Health Care Solutions"
                    style={{
                      
                      backgroundBlendMode: "hard-light",
                    }}
                  />
                </small>
              </Link>
              <p>Health Care Solutions</p>
            </div>
            <div className="werex-divs">
              <Link to="/">
                <small>
                  <img
                    src="./Images/section8Trust.png"
                    alt="Insurance"
                    style={{
                      
                      backgroundBlendMode: "hard-light",
                    }}
                  />
                </small>
              </Link>
              <p>Insurance</p>
            </div>
            <div className="werex-divs">
              <Link to="/">
                <small>
                  <img
                    src="./Images/section8Phone.png"
                    alt="Telecommunications"
                    style={{
                      
                      backgroundBlendMode: "hard-light",
                    }}
                  />
                </small>
              </Link>
              <p>Telecommunications</p>
            </div>
          </div>
        </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Section8;
