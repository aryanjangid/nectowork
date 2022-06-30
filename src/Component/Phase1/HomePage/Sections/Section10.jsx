import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Section10(props) {
  return (
    <Fragment>
      <section className="tenth-home-section">
        <div className="all-section-div">
          <small className="small-1">
            09. <strong style={{ color: "#3047a5" }}>Team</strong>
          </small>
          <h2 style={{ color: "#333" }}>Our Leadership Team</h2>
          <p style={{ color: "#777" }}>Creative people fuelled with passion</p>
        </div>
        <div className="tenth-home-section-div-2">
          <ul>
            <li className="col-md-3">
              <Link to="#" id="sudhir-garg">
                <figure>
                  <img
                    src="https://nectowork.com/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-13-at-7.29.43-AM-e1639937488152.jpeg"
                    alt="Sudhir Garg"
                    width={"100px"}
                    style={{ borderRadius: "100%", height: "6.5rem" }}
                  />
                  <figcaption>
                    <h2>Sudhir Garg</h2>
                    <p>Advisor</p>
                    <span>
                      Experience: ex Joint Secretary MEME Govt of India
                      (Ministry of micro, small and medium enterprises) Years
                    </span>
                  </figcaption>
                </figure>
              </Link>
            </li>
            <li className="col-md-3">
              <Link to="#" id="harsh-babbar">
                <figure>
                  <img
                    src="https://nectowork.com/wp-content/uploads/2021/12/Team-Picture-393411-2.png"
                    alt="Harsh Babbar"
                    width={"100px"}
                    style={{ borderRadius: "100%" }}
                  />
                  <figcaption>
                    <h2>Harsh Babbar</h2>
                    <p>Founder</p>
                    <span>
                      Experience: MBA, FMS Delhi & B-Tech Delhi College of
                      Engineering | ex-AVP Business Development Oriserve, Tech
                      Mahindra | B2B Sales Expert Years
                    </span>
                  </figcaption>
                </figure>
              </Link>
            </li>
            <li className="col-md-3">
              <Link to="#" id="dhruv-garg">
                <figure>
                  <img
                    src="	https://nectowork.com/wp-content/uploads/2021/12/Team-Picture-393411-3.png"
                    alt="Dhruv Garg"
                    width={"100px"}
                    style={{ borderRadius: "100%" }}
                  />
                  <figcaption>
                    <h2>Dhruv Garg</h2>
                    <p>Co-Founder</p>
                    <span>
                      Experience: Lead Machine Learning Scientist Amazon | US MS
                      Carnegie Mellon University US | Deloitte US Analytics and
                      Strategy | B-Tech Delhi College of Engineering Years
                    </span>
                  </figcaption>
                </figure>
              </Link>
            </li>
            <li className="col-md-3">
              <Link to="#" id="rohan-nayyar">
                <figure>
                  <img
                    src="https://nectowork.com/wp-content/uploads/2021/12/Team-Picture-393411-1.png"
                    alt="Sudhir Garg"
                    width={"100px"}
                    style={{ borderRadius: "100%" }}
                  />
                  <figcaption>
                    <h2>Rohan Nayyar</h2>
                    <p>COO</p>
                    <span>
                      Experience: Ex- AVP- Marketing Analytics- SBI Cards | Ex-
                      Genpact, Infosys | Engineering- MAIT, Delhi Years
                    </span>
                  </figcaption>
                </figure>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </Fragment>
  );
}

export default Section10;
