import React, {Fragment, useState} from 'react';
import './BpProfile.css';
import LeftDiv from "./LeftDiv/LeftDiv";
import RightDiv from "./RightDiv/RightDiv";
import { useLocation } from "react-router-dom";


function BpProfile() {
    const location = useLocation();
    var per=location.state!=null?location.state.perc:50;
    const [percent, setpercent] = useState(per);
    return (
        <Fragment>
            <section className="bpprofile-main-section">
                <div className="bpprofile-row">
                    <h1 className="bpprofile-heading">
                        To get started - Please complete your profile
                    </h1>
                    <h6 className="completed-message">
                        Your Profile is {percent}% completed
                    </h6>
                    <div className="bpprofile-divs">
                        <LeftDiv percent={percent} />
                        <RightDiv
                            per={percent}
                            changePercentage={(percentreference) =>
                                setpercent(percentreference)
                            }
                        />
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default BpProfile;