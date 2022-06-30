import React, {Fragment, useEffect, useRef, useState} from "react";
import "./BpMainProfile.css";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function BpMainProfile() {
    const [editRequest, setEditRequest] = useState(false)
    const onEditClick = () => {
        setEditRequest(!editRequest);
    }
    let navigate = useNavigate();
    const passedUserData = useRef();
    const passedBpProfileData = useRef();
    const passedBpProfileBuisnessData = useRef();
    let PK = localStorage.getItem("PK");
    useEffect(() => {
        if (PK) {
            axios.get(`http://127.0.0.1:8000/UserDetail?PK=${PK}`)
                .then(r => {
                    passedUserData.current = r.data;
                    console.log(passedUserData.current)
                }).catch(err => console.log(err))
        } else {
            alert("Oops! Error Please LognIn Again");
            navigate("/signin-signup");
        }
    }, [PK, navigate])
    useEffect(() => {
        if (PK) {
            axios.get(`http://127.0.0.1:8000/BpProfile?PK=${PK}`)
                .then(r => {
                    passedBpProfileData.current = r.data;
                    console.log(passedBpProfileData.current)
                }).catch(err => console.log(err))
        } else {
            alert("Oops! Error Please LognIn Again");
            navigate("/signin-signup");
        }
    }, [PK, navigate])
    useEffect(() => {
        if (PK) {
            axios.get(`http://127.0.0.1:8000/BpProfile/Business?PK=${PK}`)
                .then(r => {
                    passedBpProfileData.current = r.data;
                    console.log(passedBpProfileBuisnessData.current)
                }).catch(err => console.log(err))
        } else {
            alert("Oops! Error Please LognIn Again");
            navigate("/signin-signup");
        }
    }, [PK, navigate])
    return (
        <Fragment>
            <div className={"profile-pic-div"}>
                <div className={"left-side-div me-auto"}>
                    <img
                        // src={passedBpProfileData.current["Upload_Image"]}
                        // alt={`Profile Pic of ${passedBpProfileData.current["Profile_Description"]}`}
                        className={"left-side-image"}
                    />
                    <div className={"left-div-user-info"}>
                        <h3 className={"left-side-name"}>{passedUserData.current["First_Name"]}</h3>
                        <p className={"left-side-designation"}>{passedBpProfileData.current["Profile_Description"]}</p>
                    </div>
                </div>
            </div>
            {/* <div className={"navigation-bar"}>
            <img src={"des1.png"} alt={"des1.png"} className={"image-1"}/>
            <h5 className={"navbar-item-text-1"}>Profile</h5>
            <img src={"des2.png"} alt={"des2.png"} className={"image-2"}/>
            <h5 className={"navbar-item-text-2"}>Requirements</h5>
            <img src={"des2.png"} alt={"des2.png"} className={"image-3"}/>
            <h5 className={"navbar-item-text-3"}>Messages / Meetings</h5>
            <img src={"des3.png"} alt={"des3.png"} className={"image-4"}/>
            <h5 className={"navbar-item-text-4"}>Contract</h5>
        </div> */}
            <div className={"BpMainProfile-main-content"}>
                <div className="bp-profile-pic-edit" onClick={onEditClick}>
                    <svg
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M13.3333 4.33334H4.99996C3.15901 4.33334 1.66663 5.82572 1.66663 7.66667V26C1.66663 27.841 3.15901 29.3333 4.99996 29.3333H23.3333C25.1742 29.3333 26.6666 27.841 26.6666 26V17.6667M24.3096 1.97631C25.6114 0.674563 27.7219 0.674563 29.0236 1.97631C30.3254 3.27806 30.3254 5.38861 29.0236 6.69036L14.714 21H9.99996L9.99996 16.286L24.3096 1.97631Z"
                            stroke="#111827"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span>Edit</span>
                </div>
                <form method="post" className="company-detail-form">
                    <label
                        className="company-detail-form-label width-30vw"
                        htmlFor="organization"
                    >
                        First Name
                        <input className="" type="text" value={passedUserData.current["First_Name"]}/>
                    </label>
                    <label
                        className="company-detail-form-label width-30vw"
                        htmlFor="Industry"
                    >
                        Last Name
                        <input className="" type="text" value={passedUserData.current["Last_Name"]}/>
                    </label>
                    <label
                        className="company-detail-form-label width-30vw"
                        htmlFor="Email"
                    >
                        Email
                        <input className="" type="email" value={passedUserData.current["Email_ID"]}/>
                    </label>
                    <label
                        className="company-detail-form-label width-30vw"
                        htmlFor="Phone Number"
                    >
                        Phone Number
                        <input className="" type="number" value={passedUserData.current["Phone_Number"]}/>
                    </label>
                    <label
                        className="company-detail-form-label width-70vw"
                        htmlFor="Profile Description"
                    >
                        Profile Descritpion
                        <textarea name="" id="" value={passedBpProfileData.current["Profile_Description"]}/>
                    </label>
                    <label
                        className="company-detail-form-label width-30vw"
                        htmlFor="Experience"
                    >
                        Total Experience (in years)
                        <input className="" type="number" value={passedBpProfileData.current["TotalExperience"]}/>
                    </label>
                    <label
                        htmlFor="company_descritpion"
                        className="company-detail-form-label width-30vw"
                    >
                        LinkedIn Profile Link
                        <input className="" type="text" value={passedBpProfileData.current["Linkedin_profile_link"]}/>
                    </label>
                    <h2 style={{width: "100%", textAlign: "center", margin: "2% 0"}}>
                        Target Account Information
                    </h2>
                    <label
                        className="company-detail-form-label width-30vw"
                        htmlFor="Traget Geography"
                    >
                        Target Geography
                        <input className="" type="text"
                               value={passedBpProfileBuisnessData.current["Target_Goegraphy"]}/>
                    </label>
                    <label
                        className="company-detail-form-label width-30vw"
                        htmlFor="Target Industry"
                    >
                        Target Industry
                        <input className="" type="text" value={passedBpProfileBuisnessData.current["Target_Industry"]}/>
                    </label>
                    <label
                        className="company-detail-form-label width-30vw"
                        htmlFor="Target Account"
                    >
                        Target Account
                        <input className="" type="email" value={passedBpProfileBuisnessData.current["Target_Account"]}/>
                    </label>
                    <label
                        className="company-detail-form-label width-30vw"
                        htmlFor="Target Department"
                    >
                        Target Department
                        <input className="" type="text"
                               value={passedBpProfileBuisnessData.current["Target_Department"]}/>
                    </label>
                    <label
                        className="company-detail-form-label width-30vw"
                        htmlFor="Target Stakeholder"
                    >
                        Target Stakeholder
                        <input className="" type="text"
                               value={passedBpProfileBuisnessData.current["Target_Stakeholders"]}/>
                    </label>
                    <label
                        className="company-detail-form-label width-30vw"
                        htmlFor="Engagement Type"
                    >
                        Engagement type
                        <input className="" type="text" value={passedBpProfileBuisnessData.current["Engagement_Type"]}/>
                    </label>
                </form>
            </div>
        </Fragment>
    );
}
