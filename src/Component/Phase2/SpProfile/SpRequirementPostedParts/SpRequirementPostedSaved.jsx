import React, {Fragment,useState} from 'react'
import "./SpRequirementPostedSaved.css";

function SpRequirementPostedSaved() {

    const [isOpen, setIsOpen]=useState(false)

    const handleMenuClick=(event)=>{
        event.preventDefault()
        isOpen?document.getElementById('options').style.display="none":document.getElementById('options').style.display="initial"
        setIsOpen(!isOpen)
    }

    return (<Fragment>
        <div className="SpRequirementPostedSaved">
        <h1 className="saved-business-partner-text">Saved Business Partners</h1>
            <hr className="saved-tab-line"/>
            <div className={"all-saved-business-partner-wrapper"}>
                <div className="all-saved-business-partner-tabs">
                    <h3>Requirement: Chatbot Solution</h3>&nbsp;
                    <p>Posted on 18<sup>th</sup>July 2021</p>
                </div>
                <hr className="saved-tab-line"/>
                <div className={"my-requirement-saved-section"}>
                    <div className={"my-requirement-saved-section-first"}>
                        <h3>Harsh Babbar</h3>
                        <svg width="50" height="50" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={event=>handleMenuClick(event)}>
                            <path
                                d="M29.3354 43.5H29.3712M43.6685 43.5H43.7043M58.0016 43.5H58.0375M75.918 43.5C75.918 61.5183 61.4794 76.125 43.6685 76.125C25.8576 76.125 11.4189 61.5183 11.4189 43.5C11.4189 25.4817 25.8576 10.875 43.6685 10.875C61.4794 10.875 75.918 25.4817 75.918 43.5Z"
                                stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div id="options" style={{"display":"none"}}>
                     <ul className="d-flex flex-column" style={{padding:0}}>
                         <li>Hire</li>
                         <li>Contract</li>
                         <li>Meeting</li>
                         <li>Message</li>
                     </ul>
                    </div>
                    <div className={"my-requirement-saved-section-second"}>
                        <div className={"my-requirement-saved-section-second-left"}>
                            <p>Target Geography: <strong>India</strong></p>
                            <p>Target Industry: <strong>Automotive</strong></p>
                            <p>Target Engagement Type: <strong>Account Introduction</strong></p>
                            <p>Target Department: <strong>CXO</strong></p>
                            <p>Target Stakeholder Type: <strong>CXO</strong></p>
                            <p>Target Accounts: <strong>Tata Motors, Mahindra and Mahindra, Royal Enfield</strong></p>
                        </div>
                        <div className={"my-requirement-saved-section-second-right"}>
                            <p>Applied On: <strong>18<sup>th</sup>July 2021</strong></p>
                            <p>Bid: <strong>INR 2,00,000</strong></p>
                            <p>Business Partner experience: <strong>10+</strong></p>
                        </div>
                    </div>
                    <hr className={"saved-tab-line"}/>
                    <div className={"my-requirement-saved-section-first"}>
                        <h3>Rahul Dev</h3>
                        <svg width="50" height="50" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M29.3354 43.5H29.3712M43.6685 43.5H43.7043M58.0016 43.5H58.0375M75.918 43.5C75.918 61.5183 61.4794 76.125 43.6685 76.125C25.8576 76.125 11.4189 61.5183 11.4189 43.5C11.4189 25.4817 25.8576 10.875 43.6685 10.875C61.4794 10.875 75.918 25.4817 75.918 43.5Z"
                                stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className={"my-requirement-saved-section-second"}>
                        <div className={"my-requirement-saved-section-second-left"}>
                            <p>Target Geography: <strong>India</strong></p>
                            <p>Target Industry: <strong>Automotive</strong></p>
                            <p>Target Engagement Type: <strong>Account Introduction</strong></p>
                            <p>Target Department: <strong>CXO</strong></p>
                            <p>Target Stakeholder Type: <strong>CXO</strong></p>
                            <p>Target Accounts: <strong>Tata Motors, Mahindra and Mahindra, Royal Enfield</strong></p>
                        </div>
                        <div className={"my-requirement-saved-section-second-right"}>
                            <p>Applied On: <strong>18<sup>th</sup>July 2021</strong></p>
                            <p>Bid: <strong>INR 2,00,000</strong></p>
                            <p>Business Partner experience: <strong>10+</strong></p>
                        </div>
                    </div>
                    <hr className={"saved-tab-line"}/>
                </div>
            </div>
            <div className={"all-saved-business-partner-wrapper"}>
                <div className="all-saved-business-partner-tabs">
                    <h3>Requirement: Digital Marketing</h3>&nbsp;
                    <p>Posted on 18<sup>th</sup>July 2021</p>
                </div>
                <hr className="saved-tab-line"/>
                <div className={"my-requirement-saved-section"}>
                    <div className={"my-requirement-saved-section-first"}>
                        <h3>Karan Bajaj</h3>
                        <svg width="50" height="50" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M29.3354 43.5H29.3712M43.6685 43.5H43.7043M58.0016 43.5H58.0375M75.918 43.5C75.918 61.5183 61.4794 76.125 43.6685 76.125C25.8576 76.125 11.4189 61.5183 11.4189 43.5C11.4189 25.4817 25.8576 10.875 43.6685 10.875C61.4794 10.875 75.918 25.4817 75.918 43.5Z"
                                stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className={"my-requirement-saved-section-second"}>
                        <div className={"my-requirement-saved-section-second-left"}>
                            <p>Target Geography: <strong>India</strong></p>
                            <p>Target Industry: <strong>Automotive</strong></p>
                            <p>Target Engagement Type: <strong>Account Introduction</strong></p>
                            <p>Target Department: <strong>CXO</strong></p>
                            <p>Target Stakeholder Type: <strong>CXO</strong></p>
                            <p>Target Accounts: <strong>Tata Motors, Mahindra and Mahindra, Royal Enfield</strong></p>
                        </div>
                        <div className={"my-requirement-saved-section-second-right"}>
                            <p>Applied On: <strong>18<sup>th</sup>July 2021</strong></p>
                            <p>Bid: <strong>INR 2,00,000</strong></p>
                            <p>Business Partner experience: <strong>10+</strong></p>
                        </div>
                    </div>
                    <hr className={"saved-tab-line"}/>
                </div>
            </div>
        </div>
    </Fragment>)
}

export default SpRequirementPostedSaved
