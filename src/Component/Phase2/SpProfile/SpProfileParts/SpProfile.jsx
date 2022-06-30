import React, {Fragment, useEffect, useRef, useState} from "react";
import "./SpProfileMyProfile.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function SpProfile(props) {
    const [editRequest, setEditRequest] = useState(false)
    const [activeNavItem, setActiveNavItem]=useState('1')

    const onEditClick = () => {
        setEditRequest(!editRequest);
    }

    const [userForm, setUserForm] = useState({
        FirstName: props.user.First_Name,
        LastName: props.user.Last_Name,
        Email: props.user.Email_ID,
        PhoneNumber: props.user.Phone_Number,
        Country: props.spProfile.Country,
        Organization: props.org.Organization,
        Designation: props.spProfile.Designation,
        LinkedInProfile: props.spProfile.Linkedin_profile_link
    })
    const handleFirstNameChange = (event) => {
        setUserForm({...userForm, FirstName: event.target.value})
    }
    const handleLastNameChange = (event) => {
        setUserForm({...userForm, LastName: event.target.value})
    }
    const handleEmailChange = (event) => {
        setUserForm({...userForm, Email: event.target.value})
    }
    const handlePhoneNumberChange = (event) => {
        setUserForm({...userForm, PhoneNumber: event.target.value})
    }
    const handleCountryChange = (event) => {
        setUserForm({...userForm, Country: event.target.value})
    }
    const handleOrganizationChange = (event) => {
        setUserForm({...userForm, Organization: event.target.value})
    }
    const handleDesignationChange = (event) => {
        setUserForm({...userForm, Designation: event.target.value})
    }
    const handleLinkedInProfileChange = (event) => {
        setUserForm({...userForm, LinkedInProfile: event.target.value})
    }

    function editSpForm20(e) {
        e.preventDefault();
        var pk=props.spProfile["id"]
        axios.put(`http://localhost:8000/UpdateSpProfile/${pk}`, {
            User_ID:localStorage.getItem("PK"),
            First_Name: userForm.FirstName,
            Last_Name: userForm.LastName,
            Email_ID: userForm.Email,
            Phone_Number: userForm.PhoneNumber,
            Country: userForm.Country,
            Organization: userForm.Organization,
            Designation: userForm.Designation,
            Linkedin_profile_link: userForm.LinkedInProfile
        }).then(r => {
            console.log(r.data)
            // navigate('/SpProfileCompany')
        }).catch(err => console.log(err))
    }

    return (<Fragment >
            <div className="SpMyProfile">
            <div className="main-content-visual">
                     <img
                         src={props.spProfile.Upload_image}
                         alt={"Profile"}
                         className={"solution-logo"}
                     />
                     <div className="solution-details-edit d-flex flex-column" onClick={onEditClick}>
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
                 <form method="post" className="my-profile-form">
                     <label
                         className="my-profile-form-label width-30vw"
                         htmlFor="first_name"
                     >
                         First Name
                         <input className="" type="text"
                                value={editRequest ? userForm.FirstName : props.user.First_Name}
                                onChange={handleFirstNameChange}/>
                     </label>
                     <label
                         className="my-profile-form-label width-30vw"
                         htmlFor="last_name"
                     >
                         Last Name
                         <input className="" type="text"
                                value={editRequest ? userForm.LastName : props.user.Last_Name}
                                onChange={handleLastNameChange}/>
                     </label>
                     <label htmlFor="email" className="my-profile-form-label width-30vw">
                         Email
                         <input type="email" value={editRequest ? userForm.Email : props.user.Email_ID}
                                onChange={handleEmailChange}/>
                     </label>
                     <label
                         htmlFor="telephone_number"
                         className="my-profile-form-label width-30vw"
                     >
                         Phone Number
                         <input type="number"
                                value={editRequest ? userForm.PhoneNumber : props.user.Phone_Number}
                                onChange={handlePhoneNumberChange}/>
                     </label>
                     <label className="my-profile-form-label width-30vw" htmlFor="country">
                         Country
                         <input className="" type="text"
                                value={editRequest ? userForm.Country : props.spProfile.Country}
                                onChange={handleCountryChange}/>
                     </label>
                     <label
                         className="my-profile-form-label width-30vw"
                         htmlFor="organization"
                     >
                         Organization
                         <input className="" type="text"
                                value={editRequest ? userForm.Organization : props.user.Organization}
                                onChange={handleOrganizationChange}/>
                     </label>
                     <label
                         className="my-profile-form-label width-30vw"
                         htmlFor="designation"
                     >
                         Designation
                         <input className="" type="text"
                                value={editRequest ? userForm.Designation :props.spProfile.Designation}
                                onChange={handleDesignationChange}/>
                     </label>
                     <label
                         className="my-profile-form-label width-30vw"
                         htmlFor="linked_in_profile"
                     >
                         LinkedIn Profile Link
                         <input className="" type="text"
                                value={editRequest ? userForm.LinkedInProfile : props.spProfile.Linkedin_profile_link}
                                onChange={handleLinkedInProfileChange}/>
                     </label>
                 </form>
                 {editRequest ? <button className={"btn btn-outline-primary w-25"} onClick={editSpForm20}>
                     Save
                 </button> : null}
            </div>
    </Fragment>);
}

export default SpProfile;
