import React, { Fragment } from "react";
export default function LeftDiv(props) {
    return (
        <Fragment>
            <div className="left-div">
                <div className="left-div-subheading">
                    <p className="left-div-subheading-p">Solution</p>
                    <p className="left-div-subheading-p">Engagement Type</p>
                    <p className="left-div-subheading-p">Target Parameters</p>
                    <p className="left-div-subheading-p">Budget</p>
                </div>
                {props.percent === "10" ? (
                    <div className="progress progress-10" data-label="10%" />
                ) : props.percent === "30" ? (
                    <div className="progress progress-30" data-label="30%" />
                ) : props.percent === "50" ? (
                    <div className="progress progress-50" data-label="50%" />
                ) : (
                    <div className="progress progress-90" data-label="90%" />
                )}
                <h1 className="left-div-heading">
                    Text
                </h1>
            </div>
        </Fragment>
    );
}