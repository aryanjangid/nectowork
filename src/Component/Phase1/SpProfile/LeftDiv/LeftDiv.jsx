import React, {Fragment} from "react";

export default function LeftDiv(props) {
    return (
        <Fragment>
            <div className="spprofile-left-div">
                <div className="left-div-subheading">
                    <p className="left-div-subheading-p">My Profile</p>
                    <p className="left-div-subheading-p">Company</p>
                    <p className="left-div-subheading-p">Solution</p>
                    <p className="left-div-subheading-p">Target</p>
                </div>
                {props.percent === 20 ? (
                    <div className="spprofile-progress spprofile-progress-20" data-label=""/>
                ) : props.percent === 40 ? (
                    <div className="spprofile-progress spprofile-progress-40" data-label=""/>
                ) : props.percent === 70 ? (
                    <div className="spprofile-progress spprofile-progress-70" data-label=""/>
                ) : (
                    <div className="spprofile-progress spprofile-progress-90" data-label=""/>
                )}
                <h1 className="spprofile-left-div-heading">
                    Let your business partner know you well before connecting
                </h1>
            </div>
        </Fragment>
    );
}
