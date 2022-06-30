import React, { Fragment, useState } from "react";
import "./BpAllRequirement.css";
import BpNavigation from "./BpNavigationSection/BpNavigation";
import BpProfilePic from "./BpProfilePicSection/BpProfilePic";
function BpAllRequirement() {
  const ButtonClick = (e) => {
    e.preventDefault();
    var ele= e.target.id;
    if(e.target.innerHTML === "Applied")
    {
      document.getElementById(ele).style.backgroundColor= "#3047a5";
      e.target.innerHTML = "Apply"
    }
    else{
      document.getElementById(ele).style.backgroundColor= "#28A745";
      e.target.innerHTML = "Applied"
    }
  }
  return (
    <Fragment>
      <BpProfilePic/>
      <BpNavigation/>
      <div className={"bp-all-requirement-main-section"}>
        <h1 className={"all-requirement-text"}>All Requirements</h1>
        <div className="all-requirement-main-content-tabs">
          <div className="all-requirement-tab all-requirement-tab1">
            <p>Requirements</p>
          </div>
          <div className="all-requirement-tab all-requirement-tab2">
            <p>Applied</p>
          </div>
          <div className="all-requirement-tab all-requirement-tab3">
            <p>Saved</p>
          </div>
          <div className="all-requirement-tab all-requirement-tab3">
            <p>Hired</p>
          </div>
          <div className="all-requirement-tab all-requirement-tab3">
            <p>Contracted</p>
          </div>
        </div>
        <hr className="requirement-tab-line" />
        <h5 className={"my-requirement-text"}>All Requirements</h5>
        <div className="my-requirement-main-content-tabs">
          <div className="my-requirement-tab my-requirement-tab1">
            <p>Active</p>
          </div>
        </div>
        <hr className="requirement-tab-line" />
        <div className={"my-requirement-active-section"}>
          <div className={"my-requirement-active-section-first"}>
            <h3>Chatbot Solution</h3>
            <svg
              width="50"
              height="50"
              viewBox="0 0 87 87"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.3354 43.5H29.3712M43.6685 43.5H43.7043M58.0016 43.5H58.0375M75.918 43.5C75.918 61.5183 61.4794 76.125 43.6685 76.125C25.8576 76.125 11.4189 61.5183 11.4189 43.5C11.4189 25.4817 25.8576 10.875 43.6685 10.875C61.4794 10.875 75.918 25.4817 75.918 43.5Z"
                stroke="#111827"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={"my-requirement-active-section-second"}>
            <div className={"my-requirement-active-section-second-left"}>
              <p>
                Target Geography: <strong>India</strong>
              </p>
              <p>
                Target Industry: <strong>Automotive</strong>
              </p>
              <p>
                Target Engagement Type: <strong>Account Introduction</strong>
              </p>
              <p>
                Target Department: <strong>CXO</strong>
              </p>
              <p>
                Target Stakeholder Type: <strong>CXO</strong>
              </p>
              <p>
                Target Accounts:{" "}
                <strong>
                  Tata Motors, Mahindra and Mahindra, Royal Enfield
                </strong>
              </p>
            </div>
            <div className={"my-requirement-active-section-second-right"}>
              <p>
                Created On:{" "}
                <strong>
                  18<sup>th</sup>July 2021
                </strong>
              </p>
              <p>
                Budget: <strong>INR 2,00,000</strong>
              </p>
              <p>
                Solution Type: <strong>Digital Marketing</strong>
              </p>
              <p>
                Company: <strong>Oriserve</strong>
              </p>
            </div>
          </div>
          <hr className="requirement-tab-line" />
          <div className={"requirement-apply-button"}>
            <button id="requirement-apply-button" onClick={e => ButtonClick(e)}>Apply</button>
          </div>
          <hr className="requirement-tab-line" />
        </div>
        <div className="my-requirement-main-content-tabs">
          {/* <div className="my-requirement-tab my-requirement-tab1">
            <p>Active</p>
          </div> */}
        </div>
        <div className={"my-requirement-active-section"}>
          <div className={"my-requirement-active-section-first"}>
            <h3>Chatbot Solution</h3>
            <svg
              width="50"
              height="50"
              viewBox="0 0 87 87"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.3354 43.5H29.3712M43.6685 43.5H43.7043M58.0016 43.5H58.0375M75.918 43.5C75.918 61.5183 61.4794 76.125 43.6685 76.125C25.8576 76.125 11.4189 61.5183 11.4189 43.5C11.4189 25.4817 25.8576 10.875 43.6685 10.875C61.4794 10.875 75.918 25.4817 75.918 43.5Z"
                stroke="#111827"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={"my-requirement-active-section-second"}>
            <div className={"my-requirement-active-section-second-left"}>
              <p>
                Target Geography: <strong>India</strong>
              </p>
              <p>
                Target Industry: <strong>Automotive</strong>
              </p>
              <p>
                Target Engagement Type: <strong>Account Introduction</strong>
              </p>
              <p>
                Target Department: <strong>CXO</strong>
              </p>
              <p>
                Target Stakeholder Type: <strong>CXO</strong>
              </p>
              <p>
                Target Accounts:{" "}
                <strong>
                  Tata Motors, Mahindra and Mahindra, Royal Enfield
                </strong>
              </p>
            </div>
            <div className={"my-requirement-active-section-second-right"}>
              <p>
                Created On:{" "}
                <strong>
                  18<sup>th</sup>July 2021
                </strong>
              </p>
              <p>
                Budget: <strong>INR 2,00,000</strong>
              </p>
              <p>
                Solution Type: <strong>Digital Marketing</strong>
              </p>
              <p>
                Company: <strong>Oriserve</strong>
              </p>
            </div>
          </div>
          <hr className="requirement-tab-line" />
          <div className={"requirement-apply-button"}>
            <button id="requirement-apply-button2" onClick={e => ButtonClick(e)}>Apply</button>
          </div>
          <hr className="requirement-tab-line" />
        </div>
      </div>
    </Fragment>
  );
}

export default BpAllRequirement;
