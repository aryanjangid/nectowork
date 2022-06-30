import { useState } from "react";
import axios from "axios";
import SendOtp from "./SendOtp";

export const ForgotPasswordPage = () =>{
    const [successusr, setSuccessusr] = useState(false); 
    const [emailValue, setEmailValue] = useState('');
    const [otpres, setOtpres] = useState(false);
    const[userId, setUserId] = useState('');
    const forgetPassword = () =>{
        axios.get(`http://127.0.0.1:8000/ForgetPassword?Email_ID=${emailValue}`).then(res => {
            console.log(res);
            if(res.status === 200){
                setSuccessusr(true);
                setUserId(res.data);
            }
        }).catch(err => {
            console.log("User not Present");
        })
    }

    const SendOTPfunc = () => {
        axios.post(`http://127.0.0.1:8000/SendOTP`,{
            Email_ID:emailValue,
            OTP:"False"
        }).then(res => {
            console.log(res);
            if(res.status === 200){
                setOtpres(true)
            }
        }).catch(err => {
            console.log("OTP not sent due to some error");
        })
    }
    
    return successusr ? (
        <SendOtp
            EmailValue={emailValue}
            SendOTPfunc={SendOTPfunc}
            userId = {userId}
        />
    ) : (
        <>
        <div className="content-container">
            <h1 className="forgot-heading">Forgot Password</h1>
            <p className="forgot-p">Enter your email and we'll send you a reset link</p>
            <input value={emailValue}
            onChange={e => setEmailValue(e.target.value)}
            placeholder = "someone@gmail.com"/>
            <button onClick={forgetPassword}>Submit</button>
        </div>
        </>
    )
}