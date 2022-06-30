import React, {Fragment,useState} from "react";
// import "./SpRequirementPostedRequirement.css";
import "./SpRequirementPostedSaved.css";

export default function SpRequirementPostedRequirement() {

    const [activeReqTab, setActiveReqTab]=useState('1')
    const [isOpen, setIsOpen]=useState(false)
    const handleTabClick=(event)=>{
        event.preventDefault()
        setActiveReqTab(event.target.id.slice(-1))
        console.log(activeReqTab)
        var nav=document.querySelector('.my-requirement-main-content-tabs')
        for (var i = 0; i < nav.childNodes.length; i++) {
          if(nav.childNodes[i].id===event.target.id){
            nav.childNodes[i].className="my-requirement-tab my-requirement-tab activeTab"
          }
          else{
            nav.childNodes[i].className="my-requirement-tab my-requirement-tab"
          }
        }
    }

    const handleMenuClick=(event)=>{
        event.preventDefault()
        isOpen?document.getElementById('options').style.display="none":document.getElementById('options').style.display="initial"
        setIsOpen(!isOpen)
    }

    return (<Fragment>
        <div className="SpRequirementPostedRequirement">
        <h5 className={"my-requirement-text"}>My Requirements</h5>
            <div className="my-requirement-main-content-tabs">
                <h4 className="my-requirement-tab my-requirement-tab activeTab" id="req-tab1" onClick={event=>handleTabClick(event)}>Active</h4>
                <h4 className="my-requirement-tab my-requirement-tab" id="req-tab2" onClick={event=>handleTabClick(event)}>Recently Filled</h4>
            </div>
            <hr className="requirement-tab-line"/>
            {activeReqTab==='1'?
             <div className={"my-requirement-active-section"}>
             <div className={"my-requirement-active-section-first"}>
                 <h3>Chatbot Solution</h3>
                 <svg width="50" height="50" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={event=>handleMenuClick(event)}>
                     <path
                         d="M29.3354 43.5H29.3712M43.6685 43.5H43.7043M58.0016 43.5H58.0375M75.918 43.5C75.918 61.5183 61.4794 76.125 43.6685 76.125C25.8576 76.125 11.4189 61.5183 11.4189 43.5C11.4189 25.4817 25.8576 10.875 43.6685 10.875C61.4794 10.875 75.918 25.4817 75.918 43.5Z"
                         stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
             </div>
             <div id="options" style={{"display":"none"}}>
                     <ul className="d-flex flex-column" style={{padding:0}}>
                         <li>Shortlist</li>
                         <li>Hire</li>
                         <li>Meeting</li>
                         <li>Message</li>
                     </ul>
            </div>
             <div className={"my-requirement-active-section-second"}>
                 <div className={"my-requirement-active-section-second-left"}>
                     <p>Geography: <strong>India</strong></p>
                     <p>Industry: <strong>Automotive</strong></p>
                     <p>Engagement Type: <strong>Account Introduction</strong></p>
                     <p>Department: <strong>CXO</strong></p>
                     <p>Stakeholder Type: <strong>CXO</strong></p>
                     <p>Accounts: <strong>Tata Motors, Mahindra and Mahindra, Royal Enfield</strong></p>
                 </div>
                 <div className={"my-requirement-active-section-second-right"}>
                     <p>Created On: <strong>18<sup>th</sup>July 2021</strong></p>
                     <p>Budget: <strong>INR 2,00,000</strong></p>
                     <p>Solution Type: <strong>Digital Marketing</strong></p>
                     <p>Required year of experience: <strong>10+</strong></p>
                 </div>
             </div>
             <hr className="requirement-tab-line"/>
             <div className={"my-requirement-active-section-third"}>
                 <div className={"my-requirement-active-section-third-bottom-bar"}>
                     <p>Applied<br /><span className={"my-requirement-active-section-third-bottom-bar-span"}>17</span></p>
                     <p>View<br /><span className={"my-requirement-active-section-third-bottom-bar-span"}>27</span></p>
                     <p>Shortlisted<br /><span className={"my-requirement-active-section-third-bottom-bar-span"}>8</span></p>
                     <p>Messaged<br /><span className={"my-requirement-active-section-third-bottom-bar-span"}>13</span></p>
                     <p>Meeting<br /><span className={"my-requirement-active-section-third-bottom-bar-span"}>4</span></p>
                     <p>Hired<br /><span className={"my-requirement-active-section-third-bottom-bar-span"}>1</span></p>
                     <p>Contracted<br /><span className={"my-requirement-active-section-third-bottom-bar-span"}>1</span></p>
                     <p>Insta Match<br /><span className={"my-requirement-active-section-third-bottom-bar-span"}>6</span></p>
                 </div>
             </div>
             <hr className="requirement-tab-line"/>
         </div>
            :""}
           
        </div>
    </Fragment>)
}