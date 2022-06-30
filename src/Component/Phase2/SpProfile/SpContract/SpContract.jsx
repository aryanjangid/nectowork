import React, {Fragment} from "react";
import SpProfilePicSection from "../SpProfilePicSection/SpProfilePicSection";
import SpNavigationSection from "../SpNavigationSection/SpNavigationSection";
import './SpContract.css';
const SpContract=()=>{
    return(
        <Fragment>
            <div className="Contract">
                <SpProfilePicSection/>
                <SpNavigationSection/>
                <div className="main-container">
                    <h1>Contract</h1>
                    <div className="options">
                        <button className="activeBtn">New Contract</button>
                        <button>Signed Contracts</button>
                    </div>
                    <hr/>
                </div>
            </div>
        </Fragment>
    );
}
export default SpContract;