import React, { Fragment , useEffect, useState} from "react";
import "./BpProfilePic.css";
import unknown from './../../../assets/unknown.png';
import axios from "axios";

function BpProfilePic() {

      return (
    <Fragment>
      <div className={"profile-pic-div"}>
        <div className={"left-side-div me-auto"}>
          <img
          src={unknown}
          alt={"Profile"}
          className={"left-side-image"}
        /> 
          <div className={"left-div-user-info"}>
            <h3 className={"left-side-name"}>Riya Verma</h3>
            <p className={"left-side-designation"}>NectoWorks</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default BpProfilePic;
