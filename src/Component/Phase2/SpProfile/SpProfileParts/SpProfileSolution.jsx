import React, {Fragment, useEffect, useRef, useState} from "react";
import "./SpProfileSolution.css";
import "./SpProfileCompany.css";
// import SpProfilePicSection from "../SpProfilePicSection/SpProfilePicSection";
// import SpNavigationSection from "../SpNavigationSection/SpNavigationSection";
import {Navigate, useNavigate} from "react-router-dom";
import axios from "axios";

function SpProfileSolution(props) {
    const [editRequest, setEditRequest] = useState(false)

    const onEditClick = () => {
        setEditRequest(!editRequest);
    }
    const navigate = useNavigate();
  
    const [userForm, setUserForm] = useState({
        SolutionName: "",
        SolutionType: "",
        SolutionDescription: "",
        SolutionImpact: "",
        SolutionDeck: "",
        SolutionVideoLink: "",
        CustomerTestimontLink: "",
        Screenshot: ""
    })
    const handleSolutionNameChange = (event) => {
        setUserForm({...userForm, SolutionName: event.target.value})
    }
    const handleSolutionTypeChange = (event) => {
        setUserForm({...userForm, SolutionType: event.target.value})
    }
    const handleSolutionDescriptionChange = (event) => {
        setUserForm({...userForm, SolutionDescription: event.target.value})
    }
    const handleSolutionImpactChange = (event) => {
        setUserForm({...userForm, SolutionImpact: event.target.value})
    }
    const handleSolutionDeckChange = (event) => {
        setUserForm({...userForm, SolutionDeck: event.target.value})
    }
    const handleSolutionVideoLinkChange = (event) => {
        setUserForm({...userForm, SolutionVideoLink: event.target.value})
    }
    const handleCustomerTestimontLinkChange = (event) => {
        setUserForm({...userForm, CustomerTestimontLink: event.target.value})
    }
    const handleScreenshotChange = (event) => {
        setUserForm({...userForm, Screenshot: event.target.files[0]})
    }

    function editSpForm70(e) {
        e.preventDefault();
        axios.put(`http://127.0.0.1:8000/SpProfile/UpdateSolutionDetails/${props.sol["id"]}`,{
            SolutionName:"",
            SolutionType:"",
            SolutionDescription:"",
            SolutionImpact:"",
            SolutionDeck:"",
            SolutionVideoLink:"",
            CustomerTestimontLink:"",
            Screenshot:""
        })
    }

    return (<Fragment>
        <div className="SpSolution">
        <div className="main-content-visual">
                <img
                    src={props.sol.Screenshot}
                    alt={"Profile"}
                    className={"solution-logo"}
                />
                <div className="solution-details-edit" onClick={onEditClick}>
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
            <form method="post" className="solution-detail-form">
                <label
                    className="solution-detail-form-label width-30vw"
                    htmlFor="solution_name"
                >
                    Solution Name
                    <input className="" type="text"
                           value={editRequest ? userForm.SolutionName : props.sol.Solution_Name}
                           onChange={handleSolutionNameChange}/>
                </label>
                <label
                    className="solution-detail-form-label width-30vw"
                    htmlFor="solution_type"
                >
                    Solution Type
                    <input className="" type="text"
                           value={editRequest ? userForm.SolutionType : props.sol.Solution_Type}
                           onChange={handleSolutionTypeChange}/>
                </label>
                <label
                    htmlFor="solution_description"
                    className="solution-detail-form-label width-100per"
                >
                    Solution Description
                    <textarea name="" id=""
                              value={editRequest ? userForm.SolutionDescription : props.sol.Solution_Description}
                              onChange={handleSolutionDescriptionChange}/>
                </label>
                <label
                    htmlFor="Solution_description"
                    className="solution-detail-form-label width-100per"
                >
                    Solution Impact
                    <textarea name="" id=""
                              value={editRequest ? userForm.SolutionImpact : props.sol.Solution_Impact}
                              onChange={handleSolutionImpactChange}/>
                </label>
                <label
                    className="solution-detail-form-label width-30vw"
                    htmlFor="solution_deck"
                >
                    Solution Deck
                    <input className="" type="text"
                           value={editRequest ? userForm.SolutionDeck : props.sol.Solution_deck}
                           onChange={handleSolutionDeckChange}/>
                </label>
                <label
                    className="solution-detail-form-label width-30vw"
                    htmlFor="solution_ideo_ink"
                >
                    Solution Video Link
                    <input className="" type="text"
                           value={editRequest ? userForm.SolutionVideoLink : props.sol.Solution_Video_Link}
                           onChange={handleSolutionVideoLinkChange}/>
                </label>
                <label
                    className="solution-detail-form-label width-30vw"
                    htmlFor="customer_testimont_link"
                >
                    Customor Testimont Link
                    <input className="" type="text"
                           value={editRequest ? userForm.CustomerTestimontLink : props.sol.Customer_Testimont_Link}
                           onChange={handleCustomerTestimontLinkChange}/>
                </label>
                <label
                    className="solution-detail-form-label width-30vw"
                    htmlFor="solution_screenshot"
                >
                    Screenshot
                    <input className="" type="file" onChange={handleScreenshotChange}/>
                </label>
            </form>
            <div className="add-another-solution">
                <svg
                    width="27"
                    height="20"
                    viewBox="0 0 27 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.25037 11H18.4173M13.3338 8L13.3338 14M21.8063 19H4.86139C2.98971 19 1.47241 18.1046 1.47241 17V3C1.47241 1.89543 2.98971 1 4.86139 1H14.3264C14.7758 1 15.2068 1.10536 15.5246 1.29289L24.6989 6.70711C25.0167 6.89464 25.1952 7.149 25.1952 7.41421V17C25.1952 18.1046 23.678 19 21.8063 19Z"
                        stroke="#111827"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <span>Add Another Solution</span>
            </div>
            {editRequest ? <button className={"btn btn-outline-primary w-25"} onClick={editSpForm70}>
                Save
            </button> : null}
        </div>
           
    </Fragment>);
}

export default SpProfileSolution;
