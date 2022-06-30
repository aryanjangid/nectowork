import React, { Fragment, useState } from "react";
import "./FAQs.css";
import Footer from "../../Footer/Footer";
import TextField from "@mui/material/TextField";
import data from "./data.json";

function FaQs(props) {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredData = data.filter((el) => {

    if (inputText === "") {
      return el;
    }
    else {
      return el.ques.toLowerCase().includes(inputText);
    }
  });
  return (
    <Fragment>
      <header className={"about-header"}>
        <h1>FAQs</h1>
      </header>
      <div className={"about-header-bottom"} />
      <main className={"faq-main-section"}>
        <section className="faq-left">
          <p style={{ color: "#000" }}>Find your Question:</p>
          {/* <div class="search-container">
            <input
              type="text"
              placeholder="Keyword"
              name="search"
              onChange={(event) => setQuery(event.target.value)}
            />
            <button type="submit">
              <i class="bi bi-search"></i>
            </button>
          </div> */}
         <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
          <aside>
            <h5>
              <strong>Don’t find your Question?</strong>
            </h5>
            <p>
              You are not able to find the answer to your question? No Problem!
            </p>
            <button className="para-1-button">Contact Us</button>
            <div className="sid-widget-faq">
              <a
                href="#faq-1"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
              >
                <h5>
                  <strong>Recent Questions</strong>
                </h5>
                <p>Do you charge platform fee for signup and other services?</p>
              </a>
              <a
                href="#faq-2"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
              >
                <p>How can i join Nectowork?</p>
              </a>
              <a
                href="#faq-3"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
              >
                <p>
                  I am having trouble with the online process, is there an
                  alternative method to apply?
                </p>
              </a>
              <a
                href="#faq-4"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
              >
                <p>Who can register on Nectowork?</p>
              </a>
            </div>
          </aside>
        </section>
        <section className={"faq-right"}>
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
          {filteredData.map((item) => (
            <div className="sid-widget-faq">
              <a
                href={"#faq-" + item.id}
                data-bs-toggle="collapse"
                role="button"
                data-target="#collapseOne"
                aria-controls="collapseOne"
                aria-expanded="false"
              >
                <p>{item.ques}</p>
              </a>
              <div className="collapse" id={"faq-" + item.id}>
                <div className="card card-body">{item.ans}</div>
              </div>
            </div>
          ))}
          <h2>General Inquiries</h2>
          <div className="faq-genral-inquiries">
            <a
              href="#faq-10"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
            >
              <p>Who can register?</p>
            </a>
            <div className="collapse" id="faq-10">
              <div className="card card-body">
                You can register on platform if you have a solution to sell
                (Solution Company) or you can help companies sell solution to
                prospect account (Business Partner)
              </div>
            </div>
            <a
              href="#faq-11"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
            >
              <p>Who is Business Partner?</p>
            </a>
            <div className="collapse" id="faq-11">
              <div className="card card-body">
                Business partner is B2B Sales experts who can help companies
                sell their solution to their target prospect accounts
              </div>
            </div>
            <a
              href="#faq-12"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
            >
              <p>Who is Solution Company?</p>
            </a>
            <div className="collapse" id="faq-12">
              <div className="card card-body">
                Solution Company can be any B2B company which want to sell
                solution to prospect account
              </div>
            </div>
            <a
              href="#faq-13"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
            >
              <p>I keep getting an error message when I try logging?</p>
            </a>
            <div className="collapse" id="faq-13">
              <div className="card card-body">
                Solution Company can be any B2B company which want to sell
              </div>
            </div>
          </div>
        </section>
        )
      </main>
      <Footer />
    </Fragment>
  );
}

export default FaQs;
