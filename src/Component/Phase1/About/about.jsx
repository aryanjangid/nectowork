import React, { Fragment } from "react";
import "./About.css";
import Footer from "../../Footer/Footer";

function About(props) {
  return (
    <Fragment>
      <header className={"about-header"}>
        <h1>About us</h1>
      </header>
      <div className={"about-header-bottom"} />
      <main className={"main-section"}>
        <section className={"section-1"}>
          <div className={"para-1-message"}>
            <h2>Message from Founders</h2>
            <br/>
            <p>
              Welcome to Nectowork, world’s first B2B sales marketplace. We’re
              dedicated to drive sales while making the B2B sales process more
              effortless and effective. Our disruptive approach to sales leads
              to meaningful & result oriented engagements and a faster sales
              cycle.
              <br />
              <br />
              Founded in 2021 by Harsh Babbar and Dhruv Garg FMS and Carnegie
              Mellon alumni, has come a long way from its beginnings. When we
              first started out, our passion for B2B and solving industry
              problems drove us to create an AI enabled platform to make complex
              sales more quicker and efficient. An overwhelming initial response
              gave us the impetus to turn our prototype into a successful online
              marketplace.
              <br />
              <br />
              We now serve customers all over the globe, and are thrilled to be
              leaders in the $650 Billion account based selling market.
              <br />
              <br />
              We are dedicated to giving you the best in class B2B Sales
              experience and are excited to see the business value that our
              products can offer you. If you are ready to grow your sales or are
              curious to know more, we would love to hear from you !.
              <br />
              <br />
              Sincerely,
              <br />
              <br />
              Harsh Babbar and Dhruv Garg
              <br />
              <br />
              Founders, Nectowork
              <br />
              <br />
            </p>
            <button className={"para-1-button"}>Join Now</button>
          </div>
          <div className={"para-1-image"}>
            <img
              src={
                "https://nectowork.com/wp-content/uploads/2017/12/about-us-thumb.png"
              }
              alt={"necto work"}
            />
          </div>
        </section>
        <section className={"section-2"}>
          <div className={"para-2-message"}>
            <h2>
              Thousands of Business Partners and Solution Companies are waiting.
              Find the ones that are right for you.
            </h2>
            <p>
              Get connected with right business partners to grow your business
              globally. Thousand of business partners with connects, rapport
              with key decision makers and sales expertise are willing to
              connect with you.
            </p>
            <br />
            <button className={"para-2-button"}>Join Nectowork For Free</button>
          </div>
          <div className={"para-2-image"}>
            <img
              src={
                "https://nectowork.com/wp-content/uploads/2017/12/our-office4-.jpg"
              }
              alt={"necto work"}
            />
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

export default About;
