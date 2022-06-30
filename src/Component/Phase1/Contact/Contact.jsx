import React, { Fragment } from "react";
import "./Contact.css";
import Footer from "../../Footer/Footer";

function Contact(props) {
  return (
    <Fragment>
      <section className={"contact-section"}>
        <div className={"contact-info-card"}>
          <h3>Contact Information</h3>
          <div className="contact_mail">
          <i class="bi bi-envelope"></i>
            <p>Email:support@nectowork.com</p>
          </div>
          <i class="bi bi-linkedin" style={{fontSize: 25}}></i>
        </div>
        <div className={"contact-info-form"}>
          <h3>We want to hear from you!</h3>
          <form method={"post"}>
            <label className="contact-us-label" htmlFor="name">
              <input type="text" placeholder="Enter Your Name" />
              {/* <i class="bi bi-person"></i> */}
            </label>
            <label className="contact-us-label" htmlFor="subject">
              <input type="text" placeholder="Subject" />
            </label>
            <label className="contact-us-label" htmlFor="name">
              <input type="text" placeholder="Enter Your Email Address" />
            </label>
            <label className="contact-us-label" htmlFor="name">
              <input type="text" placeholder="Enter Your Phone Number" />
            </label>
            <label className="contact-us-textarea-label" htmlFor="name">
              <textarea placeholder="Enter Your Message" />
            </label>
            <button type="submit" className="contact-us-button">
              Submit
            </button>
          </form>
        </div>
      </section>
      <section className="questions-section">
        <div className="questions-section-left-side">
          <h4>Want to join us?</h4>
          <div className="img">
            <i class="bi bi-people"></i>
          </div>
          <button className="question-section-button">CAREERS</button>
        </div>
        <div className="questions-section-right-side">
          <h4>Have Questions?</h4>
          <div className="img">
            <i class="bi bi-question-diamond"></i>
          </div>
          <button className="question-section-button">OUR FAQ</button>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}

export default Contact;
