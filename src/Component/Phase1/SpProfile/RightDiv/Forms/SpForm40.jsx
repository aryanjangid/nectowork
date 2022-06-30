import React, {Fragment, useState, useEffect} from "react";
import CountryName from "../../../CountryName/CountryName";
import axios from "axios";

export default function SpForm40(props) {
    const [values, setValues] = useState({
        Organization: "",
        Industry: "",
        Country: "",
        Website: "",
        Company_Linkedin_profile_link: "",
        Number_of_employees: "",
        Company_discription: "",
        Speciality: "",
        Upload_Logo: "",
        id:""
    });
    const [image_url, setImage_Url] = useState("");
    const handleOrganization = (event) => {
        setValues({...values, Organization: event.target.value});
    };
    const handleIndustry = (event) => {
        setValues({...values, Industry: event.target.value});
    };
    const handleCountry = (event) => {
        setValues({...values, Country: event.target.value});
        console.log(values.Country);
    };
    const handleWebsite = (event) => {
        setValues({...values, Website: event.target.value});
    };
    const handleCompany_Linkedin_profile_link = (event) => {
        setValues({...values, Company_Linkedin_profile_link: event.target.value});
    };
    const handleNumber_of_employees = (event) => {
        setValues({...values, Number_of_employees: event.target.value});
    };
    const handleCompany_discription = (event) => {
        setValues({...values, Company_discription: event.target.value});
    };
    const handleSpeciality = (event) => {
        setValues({...values, Speciality: event.target.value});
    };
    const handleUpload_Logo = (event) => {
        setValues({...values, Upload_Logo: event.target.files[0]});
    };

    let PK = localStorage.getItem("PK");
    useEffect(() => {

        if (PK) {
            axios.get(`http://localhost:8000/UserDetail?User_ID=${PK}`)
                .then(r => {
                    console.log(r.data["id"]);
                    setValues({...values,id:r.data["id"]})
                })
                .catch(err => console.log(`Sp Form 20 Error:- ${err}`))
        } else {
            alert("Something went wrong. You need to login again!");
        }

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
    // }, [values.Upload_Logo, values.Upload_image]);
    const handleNext = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/UpdateStatus/${values.id}`,{
            Status:"40",
            User_ID:localStorage.getItem("PK") 
        }).then(r=>{
        axios.post(`http://localhost:8000/SpProfile/CompanyDetails`,{
            Organization: values.Organization,
            Industry: tags.toString(),
            Organization_Country: values.Country,
            Website: values.Website,
            Company_Linkedin_profile_link: values.Company_Linkedin_profile_link,
            Number_of_employees: values.Number_of_employees,
            Company_discription: values.Company_discription,
            Speciality: values.Speciality,
            Upload_Logo: image_url,
            User_ID: localStorage.getItem("PK")
        })
            .then(r => console.log(r.data))
            .catch(err => console.log(`Sp Form 40 compay details error:- ${err}`))
        props.changeStep(70);
    }).catch(err=>console.log(err))
    };
    const handlePrev = (e) => {
        e.preventDefault();
        props.changeStep(20);
    };
    const [tags, setTags] = useState([]);
    const addTags = (event) => {
        if (event.target.value !== "") {
            setTags([...tags, event.target.value.replace(";", "")]);
            values.Industry = "";
        }
    };
    const removeTag = (indexToRemove) => {
        setTags(tags.filter((_, index) => index !== indexToRemove));
    };
    return (<Fragment>
        <form method="post" className="spprofile-form-40">
            <label className="spprofile-label" htmlFor="Organization">
                <p className="p-spprofile-organization">Organization</p>
                <input
                    className="input-spprofile-organization"
                    type="text"
                    name="Organization"
                    onChange={handleOrganization}
                    value={values.Organization}
                />
            </label>
            <label className="spprofile-label" htmlFor="Industry">
                <p className="p-spprofile-industry">Industry</p>
                <div className="tags-input">
                    <ul id="tags">
                        {tags.map((tag, index) => (<li key={index} className="tag">
                            <span className="tag-title">{tag}</span>
                            <span
                                className="tag-close-icon"
                                onClick={() => removeTag(index)}
                            >
                    x
                  </span>
                        </li>))}
                    </ul>
                    <input
                        list="Industry"
                        name="Industry"
                        className="input-spprofile-industry"
                        onChange={handleIndustry}
                        onKeyUp={(event) => (event.key === ";" ? addTags(event) : null)}
                        onClick={addTags}
                        value={values.Industry}
                        placeholder="Type ; after typing or click in box"
                    />
                    <datalist id="Industry">
                        <option value="DZ" label="Algeria">
                            Algeria
                        </option>
                        <option value="AO" label="Angola">
                            Angola
                        </option>
                        <option value="BJ" label="Benin">
                            Benin
                        </option>
                    </datalist>
                </div>
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
            <label className="spprofile-label" htmlFor="Website">
                <p className="p-spprofile-website">Website Link</p>
                <input
                    className="input-spprofile-website"
                    type="text"
                    name="Website"
                    onChange={handleWebsite}
                    value={values.Website}
                />
            </label>
            <label
                className="spprofile-label"
                htmlFor="Company_Linkedin_profile_link"
            >
                <p className="p-spprofile-Company_Linkedin_profile_link">
                    Company Linkedin profile link
                </p>
                <input
                    className="input-spprofile-Company_Linkedin_profile_link"
                    type="text"
                    name="Company_Linkedin_profile_link"
                    onChange={handleCompany_Linkedin_profile_link}
                    value={values.Company_Linkedin_profile_link}
                />
            </label>
            <label className="spprofile-label" htmlFor="Number_of_employees">
                <p className="p-spprofile-Number_of_employees">Number of employees</p>
                <input
                    className="input-spprofile-Number_of_employees"
                    type="number"
                    name="Number_of_employees"
                    onChange={handleNumber_of_employees}
                    value={values.Number_of_employees}
                />
            </label>
            <label htmlFor="Company_discription" className="spprofile-label">
                <p className="p-spprofile-company_company-description">
                    Company Description
                </p>
                <textarea
                    name="Company_discription"
                    className="input-spprofile-company_company-description"
                    cols="20"
                    rows="5"
                    onChange={handleCompany_discription}
                    value={values.Company_discription}
                />
            </label>
            <label htmlFor="Speciality" className="spprofile-label">
                <p className="p-spprofile-company_company-description">Speciality</p>
                <textarea
                    name="Speciality"
                    className="input-spprofile-speciality"
                    cols="20"
                    rows="5"
                    onChange={handleSpeciality}
                    value={values.Speciality}
                />
            </label>
            <label className="spprofile-label" htmlFor="Upload_Logo">
                <p className="p-spprofile-profile-picture">
                    Upload Company Profile Picture
                </p>
                <input
                    className="input-spprofile-profile-picture"
                    type="file"
                    name="Upload_Logo"
                    onChange={handleUpload_Logo}
                />
            </label>
            <br/>
            <div className="spprofile-flex">
                <label className="spprofile-label" htmlFor="submit">
                    <button
                        type="submit"
                        className="spprofile-button-prev"
                        onClick={handlePrev}
                    >
                        Back
                    </button>
                </label>
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
