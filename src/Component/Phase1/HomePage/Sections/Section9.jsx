import React, { Fragment } from "react";

function Section9(props) {
  return (
    <Fragment>
      <section className="ninth-home-section">
        <div className="all-section-div">
          <small className="small-1">
            08. <strong style={{ color: "#3047a5" }}>Our Clients</strong>
          </small>
          <h2 style={{ color: "#333" }}>Client Testimonies</h2>
          <p style={{ color: "#777" }}>
            What Business and Selling partner have to say about Nectowork
          </p>
        </div>
        <section className="coloured-section" id="testimonials">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="4500"
            data-bs-pause="hover"
          >
            <div className="carousel-inner">
              <div className="carousel-item active container-fluid">
                <div
                  className="carousel-1"
                  style={{ width: "50%", float: "left" }}
                >
                  <h4 className="testimonial-text">
                    "I was thrilled to see Necto’s near 100% accuracy in
                    identifying correct decision makers in prospect accounts
                    unlike platforms like Lusha, seamless.ai which have mostly
                    been a miss"
                  </h4>
                  <img
                    className="testimonial-image"
                    src="https://nectowork.com/wp-content/uploads/2021/11/97EADC7C-90ED-4917-822A-576B147299BE-1-e1638032544750.jpeg"
                    width={"70px"}
                    alt="nupur-satija"
                  />
                  <em>Nupur Satija</em>
                  <span>Enterprise Sales Manager, WeWork India</span>
                </div>
                <div
                  className="carousel-2"
                  style={{ width: "50%", float: "right" }}
                >
                  <h4 className="testimonial-text">
                    "Over the last month Necto has rapidly led our global
                    expansion by driving big ticket sales for us in 2 new
                    geographies"
                  </h4>
                  <img
                    className="testimonial-image"
                    src="https://nectowork.com/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-27-at-12.01.03-PM-e1638033556565.jpeg"
                    width={"70px"}
                    alt="nupur-satija"
                  />
                  <em>Dheeraj Jain</em>
                  <span>CEO, Re-graduate</span>
                </div>
              </div>
              <div className="carousel-item container-fluid">
                <div
                  className="carousel-3"
                  style={{ width: "50%", float: "left" }}
                >
                  <h4 className="testimonial-text">
                    "Using Necto within 30 days I was able to meet with key
                    decision makers in 4 companies including a ET500 company for
                    our analytics service offering"
                  </h4>
                  <img
                    className="testimonial-image"
                    src="https://nectowork.com/wp-content/uploads/2021/11/6676444F-358E-4E99-A626-14472D0943C1-e1638031565487.jpeg"
                    width={"70px"}
                    alt="ninad-pradhan"
                  />
                  <em>Ninad Pradhan</em>
                  <span>Sales Manager, Experian Information Solutions</span>
                </div>
                <div
                  className="carousel-4"
                  style={{ width: "50%", float: "right" }}
                >
                  <h4 className="testimonial-text">
                    "Over the last month Necto has rapidly led our global
                    expansion by driving big ticket sales for us in 2 new
                    geographies"
                  </h4>
                  <img
                    className="testimonial-image"
                    src="https://nectowork.com/wp-content/uploads/2021/11/23D0A1F1-518D-40FD-BC1E-DC7225C7C5AC-e1638031389947.jpeg"
                    width={"70px"}
                    alt="sumit-joon"
                  />
                  <em>Sumit Joon</em>
                  <span>Customer Success Manager, TransUnion Cibil Ltd</span>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </a>
          </div>
        </section>
      </section>
    </Fragment>
  );
}

export default Section9;
