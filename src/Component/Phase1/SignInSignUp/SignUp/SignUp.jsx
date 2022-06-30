import React, { Fragment, useState } from "react";
import "./SignUp.css";
import SpForm from "./SpForm/SpForm";
import BpForm from "./BpForm/BpForm";
function SignUp() {
  const [bpForm, setBpForm] = useState(false);
  return (
    <Fragment>
      <section className="signup" id={"signup-popup"}>
        <div className="signup-row">
          <div className="signup-form">
            <h1 className="signup-heading">Signup To Your Necto Account</h1>
            <h4 className="signup-subheading">Choose your account type</h4>
            <p className="signup-hint">
              {bpForm ? "Business" : "Solution"} Partner
            </p>
            <hr className="divider" />
            <div className="signup-buttons">
              <button
                className="sp-button"
                type="submit"
                name="button"
                onClick={() => {
                  setBpForm(false);
                }}
              >
                Solution Partner
            <p>I have a solution to sell</p>
              </button>
              <button
                className="bp-button"
                type="submit"
                name="button"
                onClick={() => {
                  setBpForm(true);
                }}
              >
                Business Partner
                <p>I can help you sell a solution</p>
              </button>
            </div>
            {bpForm ? <BpForm /> : <SpForm />}
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default SignUp;
