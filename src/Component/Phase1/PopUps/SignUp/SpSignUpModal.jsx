import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SpForm({ closeSignUpModal }) {
  const [values, setValues] = useState({
    First_Name: "",
    Last_Name: "",
    Buisness_Email_ID: "",
    Phone_Number: "",
    Password: "",
    Confirm_Password: "",
    Organization_Name: "",
  });
  const handleFirst_Name = (event) => {
    setValues({ ...values, First_Name: event.target.value });
  };
  const handleLast_Name = (event) => {
    setValues({ ...values, Last_Name: event.target.value });
  };
  const handleBuisness_Email_ID = (event) => {
    setValues({ ...values, Buisness_Email_ID: event.target.value });
  };
  const handlePhone_Number = (event) => {
    setValues({ ...values, Phone_Number: event.target.value });
  };
  const handlePassword = (event) => {
    setValues({ ...values, Password: event.target.value });
  };
  const handleConfirm_Password = (event) => {
    setValues({ ...values, Confirm_Password: event.target.value });
  };
  const handleOrganization_Name = (event) => {
    setValues({ ...values, Organization_Name: event.target.value });
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      values.First_Name &&
      values.Last_Name &&
      values.Buisness_Email_ID &&
      values.Password &&
      values.Confirm_Password &&
      values.Organization_Name
    ) {
      //     await fetch("http://127.0.0.1:8000/CreateLogin", {
      //         method: "POST",
      //         headers: {
      //             "Content-Type": "application/json",
      //         },
      //         body: JSON.stringify({
      //             Email_ID: values.Buisness_Email_ID,
      //             Password: values.Password,
      //             Confirm_Password: values.Confirm_Password,
      //             Type: "sp",
      //         }),
      //     })
      //         .then((res) => res.json())
      //         .then((data) => {
      //             if (data.error) {
      //                 console.log(data.error);
      //             } else {
      //                 localStorage.setItem("PK", data["id"]);
      //                 console.log(data);
      //                 alert("User Created");
      //             }
      //         })
      //         .catch((error) => console.log(error));

      //     await fetch("http://127.0.0.1:8000/register", {
      //         method: "POST",
      //         headers: {
      //             "Content-Type": "application/json",
      //         },
      //         body: JSON.stringify({
      //             Email_ID: values.Buisness_Email_ID,
      //             First_Name: values.First_Name,
      //             Last_Name: values.Last_Name,
      //             Phone_Number: values.Phone_Number,
      //             Organization_Name: values.Organization_Name,
      //             Type: "sp",
      //             PK: localStorage.getItem("PK"),
      //         }),
      //     }).then((res) => res.json())
      //         .then((data) => {
      //             if (data.error) {
      //                 console.log(data.error);
      //             } else {
      //                 alert("Passed All the data");
      //                 console.log(data);
      //                 closeSignUpModal();
      //                 navigate("/spprofile");
      //             }
      //         })
      //         .catch((error) => console.log(error));
      // } else {
      //     alert("Please Fill all feild");
      // }

      await axios
        .post(`http://127.0.0.1:8000/CreateLogin`, {
          Email_ID: values.Buisness_Email_ID,
          Password: values.Password,
          Confirm_Password: values.Confirm_Password,
          Type: "sp",
        })
        .then((r) => {
          console.log(`Create Login ${r.data}`);
          localStorage.setItem("PK", r.data.id);
          alert(`User Created`);
        })
        .catch((err) => {
          console.log(`Create Login Error:- ${err}`);
        });

      await axios
        .post(`http://127.0.0.1:8000/register`, {
          Email_ID: values.Buisness_Email_ID,
          First_Name: values.First_Name,
          Last_Name: values.Last_Name,
          Phone_Number: values.Phone_Number,
          Organization_Name: values.Organization_Name,
          Type: "sp",
          User_ID: localStorage.getItem("PK"),
        })
        .then((r) => {
          alert("Passed All the data");
          console.log(r.data);
          closeSignUpModal();
          navigate("/spprofile", { state: { perc: 20 } });
        })
        .catch((err) => {
          console.log(`Register Error:- ${err}`);
        });
    }
  };
  return (
    <Fragment>
      <form method="post" className="sp-signup-form">
        <label htmlFor="First_Name" className="sp-signup-label">
          <p className="p-signup-first-name">First Name*</p>
          <input
            type="text"
            className="input-signup-first-name"
            name="First_Name"
            value={values.First_Name}
            onChange={handleFirst_Name}
            required={true}
          />
        </label>
        <label htmlFor="Last_Name" className="sp-signup-label">
          <p className="p-signup-last-name">Last Name*</p>
          <input
            type="text"
            className="input-signup-last-name"
            name="Last_Name"
            value={values.Last_Name}
            onChange={handleLast_Name}
            required={true}
          />
        </label>
        <label htmlFor="Buisness_Email_ID" className="sp-signup-label">
          <p className="p-signup-email-id">Email ID*</p>
          <input
            type="email"
            name="Buisness_Email_ID"
            className="input-signup-email-id"
            value={values.Buisness_Email_ID}
            onChange={handleBuisness_Email_ID}
            required={true}
          />
        </label>
        <label htmlFor="Phone_Number" className="sp-signup-label">
          <p className="p-signup-phone-number">Phone Number*</p>
          <input
            type="tel"
            className="input-signup-phone-number"
            name="Phone_Number"
            value={values.Phone_Number}
            onChange={handlePhone_Number}
            required={true}
            maxLength={"10"}
            minLength={"10"}
          />
        </label>
        <label htmlFor="Password" className="sp-signup-label">
          <p className="p-signup-password">Password*</p>
          <input
            type="password"
            className="input-signup-password"
            name="Password"
            value={values.Password}
            onChange={handlePassword}
            required={true}
          />
        </label>
        <label htmlFor="Confirm_Password" className="sp-signup-label">
          <p className="p-signup-confirm-password">Confirm Password*</p>
          <input
            type="password"
            className="input-signup-confirm-password"
            name="Confirm_Password"
            value={values.Confirm_Password}
            onChange={handleConfirm_Password}
            required={true}
          />
        </label>
        <label htmlFor="Organization_Name" className="sp-signup-label">
          <p className="p-signup-organization">Organization Name*</p>
          <input
            type="text"
            className="input-signup-organization"
            name="Organization_Name"
            value={values.Organization_Name}
            onChange={handleOrganization_Name}
            required={true}
          />
        </label>
        <div className="flex">
          <label className="sp-signup-label" htmlFor="submit">
            <button
              type="submit"
              className="button-signup"
              onClick={handleSubmit}
            >
              SIGN UP
            </button>
          </label>
          <div className="sigup-sigin">
            <span className="signup-alreadyacoounttext">
              Already have an account?
            </span>
            <Link to="/signin" className="signin-link">
              Sign in
            </Link>
          </div>
        </div>
      </form>
    </Fragment>
  );
}
export default SpForm;
