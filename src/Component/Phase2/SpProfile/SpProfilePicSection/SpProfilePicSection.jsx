import React, { Fragment , useEffect, useState} from "react";
import "./SpProfilePicSection.css";
import unknown from './../../../assets/unknown.png';
import axios from "axios";

function SpProfilePicSection() {
const [org,setOrg]=useState('')
const [name,setName]=useState('')
const [img,setImg]=useState('')

useEffect(()=>{
  axios.get(`http://127.0.0.1:8000/SpProfile/CompanyDetails?User_ID=${localStorage.getItem("PK")}`)
  .then(r => {
      var org=r.data.Organization+" , "+r.data.Organization_Country
      setOrg(org)
  }).catch(err => console.log(`Error:- ${err}`))

  axios.get(`http://localhost:8000/UserDetail?User_ID=${localStorage.getItem("PK")}`)
                .then(r => {
                    var name=r.data.First_Name+" "+r.data.Last_Name
                    setName(name)
                })
                .catch(err => console.log(`Error:- ${err}`))

  axios.get(`http://localhost:8000/SpProfile?User_ID=${localStorage.getItem("PK")}`)
  .then(r => {
      setImg(r.data.Upload_image)
  })
  .catch(err => console.log(`Error:- ${err}`))


},[])  



      return (
    <Fragment>
      <div className={"profile-pic-div"}>
        <div className={"left-side-div me-auto"}>
          {img.length>1?
          <img
          src={img}
          alt={"Profile"}
          className={"left-side-image"}
        /> :
          <img
          src={unknown}
          alt={"Profile"}
          className={"left-side-image"}
        />
          }
          
          <div className={"left-div-user-info"}>
            <h3 className={"left-side-name"}>{name}</h3>
            <p className={"left-side-designation"}>{org}</p>
          </div>
        </div>
        <div className={"right-side-div"}>
          <button type={"submit"}>Post A Requirement</button>
        </div>
      </div>
    </Fragment>
  );
}

export default SpProfilePicSection;
