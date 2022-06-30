import React, { Fragment, useState } from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignIn() {
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
                console.log(r.data)
                localStorage.setItem("PK", r.data.id)
                makeRoute()
            }).catch(err => {
                    console.log(`Login Error:- ${err} ${err.response}`)
                })
        } else {
          navigate("/spprofile");
        }
    };
    const makeRoute = () => {
        let PK = localStorage.getItem("PK");

        axios.get(`http://localhost:8000/UserDetail?User_ID=${PK}`)
        .then(r => {
            console.log(r.data.Status)
            if(r.data.Status==="100"){
                navigate('/Sp')
            }
            if (r.data.Type === "sp") {
                if(r.data["Status"]=="20"){
                    navigate("/spForm40")
                }
                if(r.data["Status"]=="40"){
                    navigate("/spForm70")
                }
                if(r.data["Status"]=="70"){
                    navigate("/spForm90")
                }
                else{
                    navigate("/spForm20")
                }
            } else if (r.data.Type === "bp") {
                navigate("/bpprofile")
            }
        }).catch(err => console.log(`UserDetail API Error:- ${err}`))
    };
    return (<Fragment>
        <section className="signin">
            <div className="signin-row">
                <div className="signin-form">
                    <h1 className="signin-form-h1">Login To Your Necto Account</h1>
                    <form method="post" className="form_sign-in">
                        <label
                            className="label label-signin-email"
                            htmlFor="Buisness_Email_ID"
                        >
                            <p className="p-signin-email">Email ID*</p>
                            <input
                                type="email"
                                className="input-signin-email"
                                required={true}
                                value={values.Buisness_Email_ID}
                                onChange={handleEmail}
                            />
                        </label>
                        <label className="label label-signin-password" htmlFor="Password">
                            <p className="p-signin-password">Password*</p>
                            <input
                                type="password"
                                className="input-signin-password"
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
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </Fragment>);
}

export default SignIn;
