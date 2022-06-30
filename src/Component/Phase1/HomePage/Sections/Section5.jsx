import React, {Fragment} from 'react';

function Section5() {
    return (
        <Fragment>
            <section className="fifth-home-section">
                <div className="all-section-div">
                    <small className="small-1">
                        04.{" "}
                        <strong style={{color: "#3047a5"}}>
                            Benefits for Business Partners
                        </strong>
                    </small>
                    <h2 style={{color: "#333333"}}>
                        Why Nectowork for Business Partners?
                    </h2>
                    <p style={{color: "#777777"}}>
                        Find a right solution companies for you and be the part of growth
                        story of startups and growing companies
                    </p>
                </div>
                <div className="fifth-home-section-div-2">
                    <img
                        src="./Images/section5Banner.png"
                        alt="NectoWork Section5 Banner"
                    />
                </div>
            </section>
        </Fragment>
    );
}

export default Section5;