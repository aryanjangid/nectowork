import React, { Fragment } from "react";
import "./SpViewOfBP.css";
import BpProfilePic from "../BpProfile/BpProfilePicSection/BpProfilePic";
function SpViewOfBP() {
  return (
    <Fragment>
      <div className={"profile-pic-div"}>
        <div className={"left-side-div me-auto"}>
          <img
            src={"./Images/section8Phone.png"}
            alt={"Profile"}
            className={"left-side-image"}
          />
          <div className={"left-div-user-info"}>
            <h3 className={"left-side-name"}>John Mathew</h3>
            <p className={"left-side-designation"}>Amazon, India</p>
          </div>
        </div>
        <div className={"right-side-div-view"}>
          <button type={"submit"}>Message</button>
          <button type={"submit"}>Save</button>
          <button type={"submit"}>Shortlist</button>
          <button type={"submit"}>Hire</button>
        </div>
      </div>
      <div className="main-content">
        <form method="post" className="company-detail-form">
          <label
            className="company-detail-form-label width-30vw"
            htmlFor="email"
          >
            Email
            <input className="" type="email" />
          </label>
          <label
            className="company-detail-form-label width-30vw"
            htmlFor="telephone"
          >
            Phone Number
            <input className="" type="number" />
          </label>
          <label
            className="company-detail-form-label width-70vw"
            htmlFor="profile_description"
          >
            Profile Descritpion
            <textarea name="" id="" />
          </label>
          <label
            className="company-detail-form-label width-30vw"
            htmlFor="number_of_experience"
          >
            Total Experience (in years)
            <input className="" type="number" />
          </label>
          <label
            htmlFor="linkedIn-profile-link"
            className="company-detail-form-label width-30vw"
          >
            LinkedIn Profile Link
            <input className="" type="text" />
          </label>
          <h2>
            Target Account Information
          </h2>
          <label
            className="company-detail-form-label width-30vw"
            htmlFor="target-geography"
          >
            Target Geography
            <input className="" type="text" />
          </label>
          <label
            className="company-detail-form-label width-30vw"
            htmlFor="target-industry"
          >
            Target Industry
            <input className="" type="text" />
          </label>
          <label
            className="company-detail-form-label width-30vw"
            htmlFor="target-account"
          >
            Target Account
            <input className="" type="email" />
          </label>
          <label
            className="company-detail-form-label width-30vw"
            htmlFor="target-department"
          >
            Target Department
            <input className="" type="text" />
          </label>
          <label
            className="company-detail-form-label width-30vw"
            htmlFor="target-stakeholder"
          >
            Target Stakeholder
            <input className="" type="text" />
          </label>
          <label
            className="company-detail-form-label width-30vw"
            htmlFor="engagement-type"
          >
            Engagement type
            <input className="" type="text" />
          </label>
        </form>
      </div>
    </Fragment>
  );
}

export default SpViewOfBP;
