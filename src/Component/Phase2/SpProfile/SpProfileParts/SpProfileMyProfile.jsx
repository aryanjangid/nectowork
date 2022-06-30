import React, {Fragment, useEffect, useRef, useState} from "react";
import "./SpProfileMyProfile.css";
import "./SpProfileCompany.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import SpProfile from "./SpProfile";
import SpProfileCompany from "./SpProfileCompany";
import SpProfileSolution from "./SpProfileSolution";
import './SpProfileCompany.css';
import './SpProfileSolution.css';

function SpProfileMyProfile(props) {
    const [activeNavTab, setActiveNavTab]=useState('1')

    const handleProfileItemClick=(event)=>{
        event.preventDefault();
        setActiveNavTab(event.target.id.slice(-1))
        var nav=document.querySelector('.main-content-tabs')
        for (var i = 0; i < nav.childNodes.length; i++) {
          console.log(event.target.id)
          if(nav.childNodes[i].id===event.target.id){
            nav.childNodes[i].className="tab activeTab"
          }
          else{
            nav.childNodes[i].className="tab"
          }
        }
    }

    var mainContent
    if(activeNavTab==='3'){
        mainContent=<SpProfile user={props.user} spProfile={props.spProfile} org={props.org}/>
    }
    else if(activeNavTab==='1'){
        mainContent=<SpProfileCompany user={props.user} spProfile={props.spProfile} org={props.org}/>
    }
    else if(activeNavTab==='2'){
        mainContent=<SpProfileSolution sol={props.sol}/>
    }
    
    return (<Fragment >
         <div className="SpProfile">
         <div className="main-content">
                 <div className="main-content-heading">
                     <h1>My Profile</h1>
                 </div>
                 <div className="main-content-tabs">
                    <h4 className="tab activeTab" id="tab1" onClick={event=>handleProfileItemClick(event)}>Company</h4>
                    <h4 className="tab" id="tab2" onClick={event=>handleProfileItemClick(event)}>Solution</h4>
                    <h4 className="tab" id="tab3" onClick={event=>handleProfileItemClick(event)}>My Profile</h4>
                 </div>
                 <hr className="tab-line"/>
                 {mainContent}
             </div>
             </div>
    </Fragment>);
}

export default SpProfileMyProfile;
