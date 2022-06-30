import React, {Fragment, useEffect, useRef, useState} from "react";
import SpProfilePicSection from "./SpProfilePicSection/SpProfilePicSection";
import SpNavigationSection from "./SpNavigationSection/SpNavigationSection";
import SpRequirementPostedRequirement from "./SpRequirementPostedParts/SpRequirementPostedRequirement";
import SpProfileMyProfile from "./SpProfileParts/SpProfileMyProfile";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './Sp.css'
import axios from "axios";

import SpRequirement from "./SpRequirementPostedParts/SpRequirement";

function Sp() {
    const [activeNavItem, setActiveNavItem]=useState('1')
    const [user,setUser]=useState([])
    const [org,setOrg]=useState([])
    const [spProfile,setSpProfile]=useState([])
    const [sol,setSol]=useState([])

  useEffect(() => {

    var PK=localStorage.getItem("PK")
    if(PK){
        axios.get(`http://localhost:8000/UserDetail?User_ID=${PK}`)
        .then(r => {
            console.log(r.data)
            setUser(r.data)
        })
        .catch(err => console.log(`Sp Form 20 Error:- ${err}`))
        axios.get(`http://127.0.0.1:8000/SpProfile/CompanyDetails?User_ID=${PK}`)
        .then(r => {
            setOrg(r.data)
        }).catch(err => console.log(`SpProfileCompany Details Error:- ${err}`))

        axios.get(`http://127.0.0.1:8000/SpProfile?User_ID=${PK}`)
        .then(r => {
            setSpProfile(r.data)
        }).catch(err => console.log(`SpProfileCompany Details Error:- ${err}`))
        axios.get(`http://127.0.0.1:8000/SpProfile/SolutionDetails?User_ID=${PK}`)
        .then(r => {
            setSol(r.data)
        }).catch(err => console.log(`SpProfileCompany Details Error:- ${err}`))
    }
    

},[])


   

    var mainContent
    console.log(activeNavItem)
        if(activeNavItem==='1'){
            mainContent=<SpProfileMyProfile user={user} spProfile={spProfile} org={org} sol={sol}/>
         }
         if(activeNavItem==='2'){
             mainContent= <SpRequirement user={user} spProfile={spProfile} org={org}/>
         }
    
    return (<Fragment >
         <div className="Sp">
        <SpProfilePicSection/>
        <SpNavigationSection handleActiveNav={setActiveNavItem}/>
        {mainContent}
        </div>
    </Fragment>);
}

export default Sp;
