import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

function Section1() {
    return (
        <Fragment>
            <section className="first-home-section">
                <div className="first-section-left">
                    <h1 className="first-section-heading">Join World's First B2B Sales Marketplace</h1>
                    <p>&nbsp;</p>
                    <h2 className="first-section-subheading-1">Redefining B2B Sales</h2>
                    <p>&nbsp;</p>
                    <h2 className="first-section-subheading-2">
                        We help businesses expand rapidly by directly creating meaningful
                        connections in prospect accounts and eliminating cold outreach
                    </h2>
                    <div className="join-now-div">
                        <Link to="/signin-signup" className="learn-more-button" style={{fontWeight: "400"}}>
                            Join now
                        </Link>
                    </div>
                </div>
                <div className="first-section-right">
                    <img
                        className="first-section-image"
                        src="./Images/Website-1277-x-1003-px-1000x1003.png"
                        alt="Website (1277 x 1003 px)"
                        title="Website (1277 x 1003 px)"
                    />
                </div>
            </section>
        </Fragment>
    );
}

export default Section1;