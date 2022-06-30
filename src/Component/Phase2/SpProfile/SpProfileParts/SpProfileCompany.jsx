import React, {Fragment, useEffect, useRef, useState} from "react";
import "./SpProfileCompany.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function SpProfileCompany(props) {
    const [editRequest, setEditRequest] = useState(false)

    const onEditClick = () => {
        setEditRequest(!editRequest);
    }
    const navigate = useNavigate();

    const [userForm, setUserForm] = useState({
        Organization: "",
        Industry:"",
        Country: "",
        Website: "",
        Company_Linked_in_Profile: "",
        Num_of_employees: "",
        Company_description: "",
        Company_speciality: ""
    })
    const handleOrganizationChange = (event) => {
        setUserForm({...userForm, Organization: event.target.value})
    }
    const handleIndustryChange = (event) => {
        setUserForm({...userForm, Industry: event.target.value})
    }
    const handleCountryChange = (event) => {
        setUserForm({...userForm, Country: event.target.value})
    }
    const handleWebsiteChange = (event) => {
        setUserForm({...userForm, Website: event.target.value})
    }
    const handleCompany_Linked_in_ProfileChange = (event) => {
        setUserForm({...userForm, Company_Linked_in_Profile: event.target.value})
    }
    const handleNum_of_employeesChange = (event) => {
        setUserForm({...userForm, Num_of_employees: event.target.value})
    }
    const handleCompany_descriptionChange = (event) => {
        setUserForm({...userForm, Company_description: event.target.value})
    }
    const handleCompany_specialityChange = (event) => {
        setUserForm({...userForm, Company_speciality: event.target.value})
    }

    function editSpForm40(e) {
        e.preventDefault();
        axios.put(`https://localhost:8000/SpProfile/CompanyDetails?User_ID=${props.org["id"]}`, {
            Organization: userForm.Organization,
            Industry: userForm.Industry,
            Country: userForm.Country,
            Website: userForm.Website,
            Company_Linked_in_Profile: userForm.Company_Linked_in_Profile,
            Num_of_employees: userForm.Num_of_employees,
            Company_description: userForm.Company_description,
            Company_speciality: userForm.Company_speciality
        }).then(r => {
            console.log(r.data)
            navigate('/SpProfileCompany')
        }).catch(err => console.log(err))
    }

    return (<Fragment>
        <div className="SpCompany">
        <div className="main-content-visual">
                <img
                    src={props.org.Upload_Logo}
                    alt={"Profile"}
                    className={"company-logo"}
                />
                <div className="company-details-edit" onClick={onEditClick}>
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
            </div>
            <form method="post" className="company-detail-form">
                <label
                    className="company-detail-form-label width-30vw"
                    htmlFor="organization"
                >
                    Organization
                    <input className="" type="text"
                           value={editRequest ? userForm.Organization : props.org["Organization"]}
                           onChange={handleOrganizationChange}/>
                </label>
                <label
                    className="company-detail-form-label width-30vw"
                    htmlFor="Industry"
                >
                    Industry
                    <input className="" type="text"
                           value={editRequest ? userForm.Industry : props.org["Industry"]}
                           onChange={handleIndustryChange}/>
                </label>
                <label
                    className="company-detail-form-label width-30vw"
                    htmlFor="Country"
                >
                    Country
                    <input className="" type="text"
                           value={editRequest ? userForm.Country : props.org["Organization_Country"]}
                           onChange={handleCountryChange}/>
                </label>
                <label
                    className="company-detail-form-label width-30vw"
                    htmlFor="Website"
                >
                    Website
                    <input className="" type="text"
                           value={editRequest ? userForm.Website : props.org["Website"]}
                           onChange={handleWebsiteChange}/>
                </label>
                <label
                    className="company-detail-form-label width-30vw"
                    htmlFor="company_linked_in_profile"
                >
                    Company LinkedIn Profile
                    <input className="" type="text"
                           value={editRequest ? userForm.Company_Linked_in_Profile : props.org["Company_Linkedin_profile_link"]}
                           onChange={handleCompany_Linked_in_ProfileChange}/>
                </label>
                <label
                    className="company-detail-form-label width-30vw"
                    htmlFor="number_of_employees"
                >
                    Number Of Employees
                    <input className="" type="number"
                           value={editRequest ? userForm.Num_of_employees : props.org["Number_of_employees"]}
                           onChange={handleNum_of_employeesChange}/>
                </label>
                <label
                    htmlFor="company_descritpion"
                    className="company-detail-form-label width-100per"
                >
                    Company Descritpion
                    <textarea name="" id=""
                              value={editRequest ? userForm.Company_description : props.org["Company_discription"]}
                              onChange={handleCompany_descriptionChange}/>
                </label>
                <label
                    htmlFor="company_speciality"
                    className="company-detail-form-label width-100per"
                >
                    Company Speciality
                    <textarea name="" id=""
                              value={editRequest ? userForm.Company_speciality : props.org["Speciality"]}
                              onChange={handleCompany_specialityChange}/>
                </label>
                {editRequest ? <button className={"btn btn-outline-primary"} onClick={editSpForm40}>
                    Save
                </button> : null}
            </form>
        </div>
        
    </Fragment>);
}
