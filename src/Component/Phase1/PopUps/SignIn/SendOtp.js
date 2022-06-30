import React, { useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import Button from "@mui/material/Button";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "50%",
//   bgcolor: "background.paper",
//   border: "2px solid #3047a5",
//   boxShadow: 24,
//   justifyContent: "center",
//   display: "flex",
//   flexDirection: "column",
//   padding: "2rem",
// };

export default function SendOtp(props) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [enterOtp, setEnterOtp] = useState("");
  const changePassword = () => {
    axios.put(`http://127.0.0.1:8000/ForgetPassword/${props.userId}`, {
      Email_ID: props.EmailValue,
      OTP: enterOtp,
      Password: password,
      Confirm_Password: confirmPassword,
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })

  };
  return (
    <div className="otp-input">
      <Box className="otp-container">
        <input value={props.EmailValue} disabled />
        <input onChange={(e) => setEnterOtp(e.target.value)} placeholder="Enter the OTP" />
        <Button onClick={props.SendOTPfunc}>Send OTP</Button>
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter new Password"
        />
        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />
        <Button onClick={changePassword}>Reset</Button>
      </Box>
    </div>
  );
}
