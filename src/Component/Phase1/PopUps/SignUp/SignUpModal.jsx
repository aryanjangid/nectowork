import React, { Fragment, useState } from "react";
import Modal from "react-modal";
import BpSignUpModal from "./BpSignUpModal";
import SpSignUpModal from "./SpSignUpModal";
import "./SignUpModal.css";
Modal.setAppElement("#root");
export default function SignInModal({ showSignUPModal, closeSignUpModal }) {
  const [bpForm, setBpForm] = useState(false);
  return (
    <Fragment className="signupform-fragment">
      <Modal isOpen={showSignUPModal} onRequestClose={() => closeSignUpModal()}>
        <button
          onClick={closeSignUpModal}
          className={"btn btn-outline-primary close-button"}
        >
          <i class="bi bi-x-lg"></i>
        </button>
        <section>
          <div className="signup-modal-row">
            <div>
              <h1 className="signup-modal-heading">
                Signup To Your Necto Account
              </h1>
              <hr className="divider-signup" />
              <div className="signup-modal-choose-account-div">
                <h4 className="signup-modal-subheading">
                  Choose your account type
                </h4>
                <p className="signup-modal-hint">
                  {bpForm ? "Business" : "Solution"} Partner
                </p>
              </div>

              {/* <hr className="divider" /> */}
              <div className="signup-modal-buttons">
                <div
                  className={
                    bpForm == false
                      ? "bp-modal-button-container-active"
                      : "bp-modal-button-container"
                  }
                >
                  <button
                    className={
                      bpForm ? "bp-modal-button" : "bp-modal-button-active"
                    }
                    type="submit"
                    name="button"
                    onClick={() => {
                      setBpForm(false);
                    }}
                  >
                    Solution Partner
                    <br />I have a solution to sell
                  </button>
                </div>

                <div
                  className={
                    bpForm
                      ? "bp-modal-button-container-active"
                      : "bp-modal-button-container"
                  }
                >
                  <button
                    className={
                      bpForm == false
                        ? "bp-modal-button"
                        : "bp-modal-button-active"
                    }
                    type="submit"
                    name="button"
                    onClick={() => {
                      setBpForm(true);
                    }}
                  >
                    Business Partner
                    <br />I can help you sell a solution
                  </button>
                </div>
              </div>
              {bpForm ? (
                <BpSignUpModal closeSignUpModal={closeSignUpModal} />
              ) : (
                <SpSignUpModal closeSignUpModal={closeSignUpModal} />
              )}
            </div>
          </div>
        </section>
      </Modal>
    </Fragment>
  );
}
