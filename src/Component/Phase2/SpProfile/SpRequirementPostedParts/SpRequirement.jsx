import React, {Fragment, useState} from "react";
import Sp from "../Sp";
import SpRequirementPostedContact from "./SpRequirementPostedContact";
import SpRequirementPostedHired from "./SpRequirementPostedHired";
import SpRequirementPostedRequirement from "./SpRequirementPostedRequirement";
import "./SpRequirementPostedRequirement.css";
import SpRequirementPostedSaved from "./SpRequirementPostedSaved";
import SpRequirementPostedShortlisted from "./SpRequirementPostedShortlisted";

export default function SpRequirement() {
    
    const [activeNavTab, setActiveNavTab]=useState('1')

    const handleTabClick=(event)=>{
        event.preventDefault()
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
    if(activeNavTab==='1'){
        mainContent=<SpRequirementPostedRequirement/>
    }
    else if(activeNavTab==='2'){
        mainContent=<SpRequirementPostedShortlisted/>
    }
    else if(activeNavTab==='3'){
        mainContent=<SpRequirementPostedSaved/>
    }
    else if(activeNavTab==='4'){
        mainContent=<SpRequirementPostedHired/>
    }
    else if(activeNavTab==='5'){
        mainContent=<SpRequirementPostedContact/>
    }


    return (<Fragment>
        <div className={"main-content"}>
                <div className="main-content-heading">
                     <h1>All Requirements</h1>
                </div>
                <div className="main-content-tabs">
                    <h4 className="tab activeTab" id="tab1" onClick={event=>handleTabClick(event)}>Requirements</h4>
                    <h4 className="tab" id="tab2" onClick={event=>handleTabClick(event)}>Short Listed</h4>
                    <h4 className="tab" id="tab3" onClick={event=>handleTabClick(event)}>Saved</h4>
                    <h4 className="tab" id="tab4" onClick={event=>handleTabClick(event)}>Hired</h4>
                    <h4 className="tab" id="tab5" onClick={event=>handleTabClick(event)}>Contracted</h4>
                </div>
            <hr className="requirement-tab-line"/>
            {mainContent} 
        </div>
    </Fragment>)
}