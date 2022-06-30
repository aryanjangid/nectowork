import React, { Fragment, useState } from "react";
import LeftDiv from "./LeftDiv";
import RightDiv from "./RightDiv";

export default function Body(){
    const [percent, setpercent] = useState("10");
    return(
        <Fragment>
            <section className="main-section">
                <h1 className="heading">Please complete your requirement</h1>
                <h6 className="completed-message">Posting is {percent}% completed</h6>
                <div className="div-container">
                    <LeftDiv percent={percent} />
                    <RightDiv changePercentage={(percentreference) => setpercent(percentreference)} />
                </div>
            </section>
        </Fragment>
    )
}