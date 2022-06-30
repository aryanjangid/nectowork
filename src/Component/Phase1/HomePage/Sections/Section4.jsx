import React, {Fragment} from 'react';

function Section4(props) {
    return (
        <Fragment>
            <section className="fourth-home-section">
                <div className="all-section-div">
                    <small className="small-1">
                        03.{" "}
                        <strong style={{color: "#3047a5"}}>
                            Benefits for Solution Companies
                        </strong>
                    </small>
                    <h2 style={{color: "#333333"}}>
                        Why Nectowork for Solution Companies?
                    </h2>
                    <p style={{color: "#777777"}}>
                        Find a right business partners for your business and grow
                        exponentially
                    </p>
                </div>
                <div className="fourth-home-section-div-2">
                    <img
                        src="./Images/section4Banner.png"
                        alt="Nectowork Section 4 Banner"
                    />
                </div>
            </section>
        </Fragment>
    );
}

export default Section4;