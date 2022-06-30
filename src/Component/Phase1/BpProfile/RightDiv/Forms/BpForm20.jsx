import React, {Fragment, useState, useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";
import CountryName from "../../../CountryName/CountryName";
import axios from "axios";

export default function BpForm20(props) {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        Country: "",
        bp_my_profile_description: "",
        bp_my_profile_experience: "",
        Linkedin_profile_link: "",
        Upload_image: "",
        id:""
    });
    const [image_url, setImage_Url] = useState("");
    const handleCountry = (event) => {
        setValues({...values, Country: event.target.value});
    };
    const handlebp_my_profile_description = (event) => {
        setValues({...values, bp_my_profile_description: event.target.value});
    };
    const handlebp_my_profile_experience = (event) => {
        setValues({...values, bp_my_profile_experience: event.target.value});
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
                    setValues({...values,id:r.data.id})
                }).catch(err => console.log(err))
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
            console.log(r.data);
            setImage_Url(r.data.url);
        })
            .catch(err => console.log(`Sp Form 20 cloudinary error:- ${err}`))
        return () => {
            console.log("Profile Photo changed");
        };
    }, [values.Upload_image]);
    // useEffect(() => {
    //     const data = new FormData();
    //     data.append("file", values.Upload_image);
    //     data.append("upload_preset", "nectowork");
    //     data.append("cloud_name", "dw1nc0h3g");
    //     fetch("https://api.cloudinary.com/v1_1/dw1nc0h3g/image/upload", {
    //         method: "post", body: data,
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setImage_Url(data.url);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    //     return () => {
    //         console.log("Profile Photo changed");
    //     };
    // }, [values.Upload_image]);
    const handleNext = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/UpdateStatus/${values.id}`,{
            Status:"50",
            User_ID:localStorage.getItem("PK") 
        }).then(r=>{
        axios.post(`http://localhost:8000/BpProfile`, {
            User_ID: localStorage.getItem("PK"),
            Country: values.Country,
            Linkedin_profile_link: values.Linkedin_profile_link,
            Upload_image: image_url,
            Profile_Description: values.bp_my_profile_description,
            TotalExperience: values.bp_my_profile_experience
        })
            .then(r => console.log(r.data))
            .catch(err => console.log(err))
        // fetch("http://localhost:8000/BpProfile/", {
        //     method: "post", headers: {
        //         "Content-Type": "application/json",
        //     }, body: JSON.stringify({
        //         PK: localStorage.getItem("PK"),
        //         Country: values.Country,
        //         Linkedin_profile_link: values.Linkedin_profile_link,
        //         Upload_image: image_url,
        //         Business_Email_ID: passedData["current"]["Email_ID"],
        //         Profile_Description: values.bp_my_profile_description,
        //         TotalExperience: values.bp_my_profile_experience,
        //     }),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
        props.changeStep(90);
    }).catch(err=>console.log(err))
    };
    return (<Fragment>
        <form action="" className="bpprofile-form-50">
            <label className="bpprofile-label" htmlFor="bp_my_profile_first_name">
                <p className="p-bpprofile-first-name">First Name</p>
                <input
                    className="input-bpprofile-first-name"
                    type="text"
                    name="bp_my_profile_first_name"
                    value={passedData["current"]["First_Name"]}
                />
            </label>
            <label className="bpprofile-label" htmlFor="bp_my_profile_last_name">
                <p className="p-bpprofile-last-name">Last Name</p>
                <input
                    className="input-bpprofile-last-name"
                    type="text"
                    name="bp_my_profile_last_name"
                    value={passedData["current"]["Last_Name"]}
                />
            </label>
            <label className="bpprofile-label" htmlFor="bp_my_profile_email">
                <p className="p-bpprofile-email">Email</p>
                <input
                    className="input-bpprofile-email"
                    type="email"
                    name="bp_my_profile_email"
                    value={passedData["current"]["Email_ID"]}
                />
            </label>
            <label className="bpprofile-label" htmlFor="bp_my_profile_telephone">
                <p className="p-bpprofile-phone-number">Phone Number</p>
                <input
                    className="input-bpprofile-phone-number"
                    type="number"
                    name="bp_my_profile_telephone"
                    value={passedData["current"]["Phone_Number"]}
                />
            </label>
            <label className="bpprofile-label" htmlFor="Country">
                <p className="p-bpprofile-country">Country</p>
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
            <label className="bpprofile-label" htmlFor="Linkedin_profile_link">
                <p className="p-bpprofile-linkedin-profile-link">
                    Your LinkedIn Profile Link
                </p>
                <input
                    className="input-bpprofile-linkedin-profile-link"
                    type="url"
                    name="Linkedin_profile_link"
                    onChange={handleLinkedin_profile_link}
                    value={values.Linkedin_profile_link}
                />
            </label>
            <label className="bpprofile-label" htmlFor="Upload_image">
                <p className="p-spprofile-profile-picture">
                    Upload Your Profile Picture
                </p>
                <input
                    className="input-spprofile-profile-picture"
                    type="file"
                    name="Upload_image"
                    onChange={handleUpload_image}
                    value={values.Upload_image}
                />
            </label>
            <label className="bpprofile-label" htmlFor="bp_my_profile_experience">
                <p className="p-bpprofile-experience">Total Experience (in years)</p>
                <input
                    className="input-bpprofile-experience"
                    type="number"
                    name="bp_my_profile_experience"
                    onChange={handlebp_my_profile_experience}
                    value={values.bp_my_profile_experience}
                />
            </label>
            <label className="bpprofile-label" htmlFor="bp_my_profile_description">
                <p className="p-bpprofile-description">Profile Description</p>
                <textarea
                    className="input-bpprofile-description"
                    type="text"
                    name="bp_my_profile_description"
                    onChange={handlebp_my_profile_description}
                    value={values.bp_my_profile_description}
                />
            </label>
            <br/>
            <div className="bottom-bpprofile-buttons">
                <label className="bpprofile-label" htmlFor="submit">
                    <button
                        type="submit"
                        className="bpprofile-button-next"
                        onClick={handleNext}
                    >
                        Next
                    </button>
                </label>
            </div>
        </form>
    </Fragment>);
}
