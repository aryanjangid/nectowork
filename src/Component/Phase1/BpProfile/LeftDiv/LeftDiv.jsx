import React, { Fragment } from "react";

export default function LeftDiv(props) {
    return (
        <Fragment>
            <div className="bpprofile-left-div">
                <div className="bpprofile-left-div-subheading">
                    <p className="bpprofile-left-div-subheading-p">My Profile</p>
                    <p className="bpprofile-left-div-subheading-p">Buisness</p>
                </div>
                {props.percent === 50 ? (
                    <div className="progress progress-50" data-label="" />
                ) : (
                    <div className="progress progress-90" data-label="" />
                )}
                <h1 className="bpprofile-left-div-heading">Text</h1>
            </div>
        </Fragment>
    );
}
