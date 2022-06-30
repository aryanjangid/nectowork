import React, {Fragment} from 'react';
import './SignInSignUp.css';
import Footer from "../../Footer/Footer";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

function SignInSignUp() {
    return (
        <Fragment>
            <div className={"signin-signup"}>
                <SignIn/>
                <SignUp/>
            </div>
            <Footer/>
        </Fragment>
    );
}

export default SignInSignUp;