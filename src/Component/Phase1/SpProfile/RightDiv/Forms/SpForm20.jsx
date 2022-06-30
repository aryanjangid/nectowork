import React, {Fragment, useState, useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import CountryName from "../../../CountryName/CountryName";

export default function SpForm20(props) {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        Country: "",
        Designation: "",
        Linkedin_profile_link: "",
        Upload_image: "",
        id:""
    });
    const [image_url, setImage_Url] = useState("");
    const handleCountry = (event) => {
        setValues({...values, Country: event.target.value});
    };
    const handleDesignation = (event) => {
        setValues({...values, Designation: event.target.value});
    };
    const handleLinkedin_profile_link = (event) => {
        setValues({...values, Linkedin_profile_link: event.target.value});
    };
    const handleUpload_image = (event) => {
        setValues({...values, Upload_image: event.target.files[0]});
    };
    const passedData = useRef("");
    let PK = localStorage.getItem("PK");
    useEffect(() => {

        if (PK) {
            axios.get(`http://localhost:8000/UserDetail?User_ID=${PK}`)
                .then(r => {
                    passedData.current = r.data;
                    console.log(r.data["id"]);
                    setValues({...values,id:r.data["id"]})
                })
                .catch(err => console.log(`Sp Form 20 Error:- ${err}`))
        } else {
            alert("Something went wrong. You need to login again!");
            navigate("/signin-signup");
        }
    }, [PK, navigate]);

    useEffect(() => {
        const data = new FormData();
        data.append("file", values.Upload_image);
        data.append("upload_preset", "nectowork");
        data.append("cloud_name", "dw1nc0h3g");
        axios.post(`https://api.cloudinary.com/v1_1/dw1nc0h3g/image/upload`, {
            data
        }).then(r => {
            console.log(r.data.id);
            setImage_Url(r.data.url);
        })
            .catch(err => console.log(`Sp Form 20 cloudinary error:- ${err}`))
        return () => {
            console.log("Profile Photo changed");
        };
    }, [values.Upload_image]);



    const handleNext = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/UpdateStatus/${values.id}`,{
            Status:"20",
            User_ID:localStorage.getItem("PK") 
        }).then(r=>{
            axios.post(`http://localhost:8000/SpProfile`, {
            Business_Email_ID: passedData["current"]["Email_ID"],
            Country: values.Country,
            Designation: values.Designation,
            Linkedin_profile_link: values.Linkedin_profile_link,
            Upload_image: image_url,
            User_ID: localStorage.getItem("PK")
        }).then(r => {
            console.log(`Sp Form 20 Sp Profile:- ${r.data}`)
        }).catch(err => console.log(`Sp Form 20 Sp Profile Error:- ${err}`))
        props.changeStep(40);
            console.log("updated status "+r.data)
        }).catch(err=>console.log(err))

        
    };
    return (<Fragment>
        <form method="post" className="spprofile-form-20">
            <label className="spprofile-label" htmlFor="sp_my_profile_first_name">
                <p className="p-spprofile-first-name">First Name</p>
                <input
                    className="input-spprofile-first-name"
                    type="text"
                    name="sp_my_profile_first_name"
                    value={passedData["current"]["First_Name"]}
                />
            </label>
            <label className="spprofile-label" htmlFor="sp_my_profile_last_name">
                <p className="p-spprofile-last-name">Last Name</p>
                <input
                    className="input-spprofile-last-name"
                    type="text"
                    name="sp_my_profile_last_name"
                    value={passedData["current"]["Last_Name"]}
                />
            </label>
            <label className="spprofile-label" htmlFor="sp_my_profile_email">
                <p className="p-spprofile-email">Email</p>
                <input
                    className="input-spprofile-email"
                    type="email"
                    name="sp_my_profile_email"
                    value={passedData["current"]["Email_ID"]}
                />
            </label>
            <label className="spprofile-label" htmlFor="sp_my_profile_telephone">
                <p className="p-spprofile-phone-number">Phone Number</p>
                <input
                    className="input-spprofile-phone-number"
                    type="number"
                    name="sp_my_profile_telephone"
                    value={passedData["current"]["Phone_Number"]}
                />
            </label>
            <label className="spprofile-label" htmlFor="Country">
                <p className="p-spprofile-country">Country</p>
                <select
                    id="Country"
                    name="country"
                    className="input-spprofile-country"
                    onChange={handleCountry}
                    value={values.Country}
                >
                    <CountryName/>
                </select>
            </label>
            <label className="spprofile-label" htmlFor="Organization">
                <p className="p-spprofile-organization">Organization</p>
                <input
                    className="input-spprofile-organization"
                    type="text"
                    name="Organization"
                    // value={passedData["current"]["Organization"]}
                />
            </label>
            <label className="spprofile-label" htmlFor="Designation">
                <p className="p-spprofile-designation">Designation</p>
                <input
                    className="input-spprofile-designation"
                    type="text"
                    name="Designation"
                    onChange={handleDesignation}
                    value={values.Designation}
                />
            </label>
            <label className="spprofile-label" htmlFor="Linkedin_profile_link">
                <p className="p-spprofile-linkedin-profile-link">
                    Your LinkedIn Profile Link
                </p>
                <input
                    className="input-spprofile-linkedin-profile-link"
                    type="text"
                    name="Linkedin_profile_link"
                    onChange={handleLinkedin_profile_link}
                    value={values.Linkedin_profile_link}
                />
            </label>
            <label className="spprofile-label" htmlFor="Upload_image">
                <p className="p-spprofile-profile-picture">
                    Upload Your Profile Picture
                </p>
                <input
                    className="input-spprofile-profile-picture"
                    type="file"
                    name="Upload_image"
                    onChange={handleUpload_image}
                />
            </label>
            <div className="bottom-spprofile-buttons">
                <label className="spprofile-label" htmlFor="submit">
                    <button
                        type="submit"
                        className="spprofile-button-next"
                        onClick={handleNext}
                    >
                        Next
                    </button>
                </label>
            </div>
        </form>
    </Fragment>);
}
