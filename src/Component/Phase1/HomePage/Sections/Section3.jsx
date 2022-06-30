import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

function Section3(props) {
    return (
        <Fragment>
            <section className="third-home-section">
                <div className="all-section-div">
                    <small className="small-1">
                        02. <strong style={{color: "#3047a5"}}>User Type</strong>
                    </small>
                    <h2 style={{color: "#333333"}}>Choose User Type For You</h2>
                    <p style={{color: "#777777"}}>
                        Are you a Solution Company or a Business Partner?
                    </p>
                </div>
                <div className="third-home-section-div-2">
                    <img
                        src="./Images/section3SP.png"
                        alt="SP Banner"
                    />
                    <img
                        src="./Images/section3BP.png"
                        alt="BP Banner"
                    />
                </div>
                <div className="third-home-section-div-3">
                    <Link to="/signin-signup">Sign Up For Free</Link>
                </div>
            </section>
        </Fragment>
    );
}

export default Section3;