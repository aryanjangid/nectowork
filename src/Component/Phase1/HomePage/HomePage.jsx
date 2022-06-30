import React, { Fragment } from "react";
import "./HomePage.css";
import money from "../../../assets/money-svgrepo-com.svg";
import Component1 from "./Sections/component1";
import Component2 from "./Sections/component2";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import Section4 from "./Sections/Section4";
import { Link } from "react-router-dom";
import Section5 from "./Sections/Section5";
import Section6 from "./Sections/Section6";
import Section7 from "./Sections/Section7";
import Section8 from "./Sections/Section8";
import Section9 from "./Sections/Section9";
import Section10 from "./Sections/Section10";
import Footer from "../../Footer/Footer";
import Component3 from "./Sections/component3";
import Component4 from "./Sections/component4";
import Component5 from "./Sections/component5";

function HomePage() {
  return (
    <Fragment>
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <div className="home-row">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
      <div className="full-div-1">
        <h3 className="">Join us to find a right solution company for you</h3>
        <Link className="ms-5" to="signin-signup" title="">
          JOIN FOR FREE
        </Link>
      </div>
      <div className="home-row">
        <Section5 />
      </div>
      <div className="full-div-2">
        <h3 className="">Join us to find a right business partner for you</h3>

        <Link className="ms-5" to="/signin-signup/" title="">
          JOIN FOR FREE
        </Link>
      </div>
      <div className="six-section">
        <Section6 />
      </div>
      <div className="home-row">
        <Section7 />
      </div>
      <div className="full-div-3">
        <Section8 />
      </div>
      <div className="home-row">
        <Section9 />
      </div>
      <div className="full-div-4">
        <Section10 />
      </div>
      <Footer />
    </Fragment>
  );
}

export default HomePage;
