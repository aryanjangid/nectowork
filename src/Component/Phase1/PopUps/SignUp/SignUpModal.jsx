import React, { Fragment, useState } from "react";
import Modal from "react-modal";
import BpSignUpModal from "./BpSignUpModal";
import SpSignUpModal from "./SpSignUpModal";
import "./SignUpModal.css";
import bigPhone from "../../../assets/bigPhone.jpg"
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
            <div >
              <h1 className="signup-modal-heading">
                Signup To Your <span style={{ color: '#3047a5' }}>Necto Account</span>
              </h1>
              <div className="signup-modal-choose-account-div">
                <div className="signup-modal-decoration-line" />
                <h4 className="signup-modal-subheading">
                  Choose your account type
                </h4>
              </div>
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
