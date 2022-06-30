import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
// import mail from ".Images/envelope-fill.svg";
function Footer() {
    let currentYear = new Date().getFullYear()
    return (
        <Fragment>
            <footer className="page-footer font-small blue pt-4">
                <div className="foot-content container text-md-left">
                    <div className="foot-row">
                        <div className="col-md-6 mt-3 footer-logo">
                            <img
                                src="https://nectowork.com/wp-content/uploads/2021/11/Copy-of-Necto-200-x-200-px-500-x-200-px-300x120.png"
                                alt="necto"
                            />
                            <h5>Join us to connect with right partner for your business</h5>
                            <button className='btn foot-btn'>Join Now</button>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-3"/>
                        
                        <div className="foot-text">
                            <h5>Useful Links</h5>

                            <ul className="foot-points">
                                <li>
                                    <Link to="/PrivacyPolicy">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="/TermsAndCondition">Terms and Condition</Link>
                                </li>
                                <li>
                                    <Link to="/UserAggreement">User Agreement</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="foot-text2">
                            <h5>Contact Info</h5>

                            <ul className="foot-points2">
                                <img src='./Images/envelope-fill.svg' />
                                <li>
                                    
                                    <Link to="#!" style={{ paddingLeft: "1rem"}}>
                                    support@nectowork.com</Link>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div
                    className="footer-copyright">
                    © {currentYear} copyright all right reserved by Nectoit Solutions Pvt Ltd
                </div>
            </footer>
        </Fragment>
    );
}

export default Footer;