import React, {Fragment, useState} from 'react';
import './SignInModal.css';
import Modal from "react-modal";
import { ForgotPasswordPage } from './ForgotPasswordPage';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
Modal.setAppElement('#root');

function SignInModal({showSignInModal, closeSignInModal}) {

    const navigate = useNavigate();
    const [values, setValues] = useState({Buisness_Email_ID: "", Password: ""});

    const handleEmail = (event) => {
        setValues({...values, Buisness_Email_ID: event.target.value});
    };

    const handlePassword = (event) => {
        setValues({...values, Password: event.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.Buisness_Email_ID && values.Password) {
            axios.post(`http://127.0.0.1:8000/login`, {
                Email_ID: values.Buisness_Email_ID, Password: values.Password,
            }).then(r => {
                console.log(r.data[0].id)
                localStorage.setItem("PK", r.data[0].id)
                makeRoute()
            })
                .catch(err => {
                    console.log(`Login Error:- ${err} ${err.response}`)
                })
        } else {
            alert("Please Fill all field");
        }
    };

    const makeRoute = () => {
        let PK = localStorage.getItem("PK");
        
        axios.get(`http://localhost:8000/UserDetail?User_ID=${PK}`)
        .then(r => {
            console.log(typeof(r.data.Status))
            if(r.data.Status==="100"){
                console.log(r.data.Type)
               r.data.Type==="sp"?navigate('/Sp'):navigate('/BpAllRequirement')
            }
            else if (r.data.Type === "sp") {
                if(r.data["Status"]==="20"){
                     navigate('/spprofile',{
                         state:{perc:40}}
                    );
                }
                else if(r.data["Status"]==="40"){
                    navigate('/spprofile',{
                        state:{perc:70 }}
                   );
                }
                else if(r.data["Status"]==="70"){
                    navigate('/spprofile',{
                        state:{perc:90 }}
                   );
                }
                else{
                    navigate('/spprofile',{
                        state:{perc:20 }}
                   );
                }
            } 
            else if (r.data.Type === "bp") {
                if(r.data["Status"]==="50"){
                    navigate('/bpprofile',{
                        state:{perc:90}}
                   );
               }
               else {
                   navigate('/bpprofile',{
                       state:{perc:50 }}
                  );
               }
            }
        }).catch(err => console.log(`UserDetail API Error:- ${err}`))
    };

    return (<Fragment>
        <Modal isOpen={showSignInModal} onRequestClose={() => closeSignInModal()}
        >
            
            <button onClick={closeSignInModal} className={"btn btn-outline-primary close-button"}><i class="bi bi-x-lg"></i></button>
            <section>
                <div className="signin-modal-form">
                    <h1 className="signin-modal-form-h1">
                        Login To Your Necto Account
                    </h1>
                    <form method="post" className="form_1fsdj">
                        <label className="label-modal" htmlFor="Buisness_Email_ID">
                            <p className="p-signin-modal">Email ID*</p>
                            <input
                                autoComplete={"on"}
                                type="email"
                                className="input-signin-modal"
                                required={true}
                                value={values.Buisness_Email_ID}
                                onChange={handleEmail}
                            />
                        </label>
                        <label className="label-modal" htmlFor="Password">
                            <p className="p-signin-modal">Password*</p>
                            <input
                                autoComplete={"on"}
                                type="password"
                                className="input-signin-modal"
                                required={true}
                                value={values.Password}
                                onChange={handlePassword}
                            />
                        </label>
                        <div className="flex">
                            <label className="label label-signin-submit" htmlFor="submit">
                                <button
                                    type="submit"
                                    className="button-signin"
                                    onClick={handleSubmit}
                                >
                                    Log In
                                </button>
                            </label>
                            <div className="routes">
                                <div className="links forgot-password-link-div">
                                    <Link onClick={closeSignInModal} to="/forgot" className="link">
                                        Forgot password?
                                    </Link>
                                </div>
                                <div className="links symbol">
                                    <Link to={""} className="link">
                                        |
                                    </Link>
                                </div>
                                <div className="links signup-link-div">
                                    <Link to="/signup" className="link">
                                        Sign Up
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </Modal>
    </Fragment>);
}

export default SignInModal;