import React, {Fragment, useState} from 'react';
import './SpProfile.css';
import LeftDiv from "./LeftDiv/LeftDiv";
import RightDiv from "./RightDiv/RightDiv";
import { useLocation } from "react-router-dom";


function SpProfile() {
    const location = useLocation();
    var per=location.state.perc?location.state.perc:20;
    const [percent, setPercent] = useState(per);
    console.log("percent : ",percent)
    return (<Fragment>
        <section className="spprofile-main-section">
            <div className="spprofile-row">
                <h1 className="spprofile-heading">
                    To get started - Please complete your profile
                </h1>
                <h5 className="completed-message">
                    Your Profile is {percent}% completed
                </h5>
                <div className="spprofile-divs">
                    <LeftDiv percent={percent}/>
                    <RightDiv
                       per={percent} changePercentage={(percentreference) => setPercent(percentreference)}
                    />
                </div>
            </div>
        </section>
    </Fragment>);
}

export default SpProfile;