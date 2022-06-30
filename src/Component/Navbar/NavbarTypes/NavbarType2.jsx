import React, {Fragment} from 'react';
import './NavbarType2.css';
import {Link} from "react-router-dom";

function NavbarType2() {
    const toggleClick = () => {
        const toggleButton = document.getElementsByClassName("toggle-button")[0];
        const navbarLinks = document.getElementsByClassName("Navbar-links")[0];
        toggleButton.addEventListener("click", () => {
            navbarLinks.classList.toggle("active");
        });
    };
    return (
    <Fragment>
        <div className="Navbar-wrapper">
            <div className="Navbar-div">
                <nav className="Navbar">
                    <Link to="/" className="brand-title">
                        <img
                            src="https://nectowork.com/wp-content/uploads/2021/11/Copy-of-Necto-200-x-200-px-500-x-200-px-300x120.png"
                            alt="logo"
                        />
                    </Link>
                    <Link
                        to={"#"}
                        className="toggle-button"
                        onClick={() => {
                            toggleClick();
                        }}
                    >
                        <span className="bar"/>
                        <span className="bar"/>
                        <span className="bar"/>
                    </Link>
                    <div className="Navbar-links">
                        <ul>
                            <li>
                                <Link to="#">Home</Link>
                            </li>
                            <li>
                                <Link to="#">Requirements</Link>
                            </li>
                            <li>
                                <Link to="#">Messages/Meetings</Link>
                            </li>
                            <li>
                                <Link to="#">Invoicing and Billing</Link>
                            </li>
                            <li>
                                <Link to="#" id="showSignup">
                                    signup
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <img
                                        src="https://www.pinclipart.com/picdir/middle/396-3964726_bell-icon-free-download-png-bell-free-silhouette.png"
                                        style={{
                                            background: "blend", width: "20px", height: "auto",
                                        }}
                                        alt="bell"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <img
                                        style={{
                                            background: "blend", width: "20px", height: "auto",
                                        }}
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSc48_ZdIEXHlOtQyA9gvQ6nWoug2HsJGLOw&usqp=CAU"
                                        alt="contact"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <img
                                        src="https://www.svgrepo.com/show/44183/male-user.svg"
                                        style={{
                                            background: "blend", width: "20px", height: "auto",
                                        }}
                                        alt="male"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </Fragment>);
}

export default NavbarType2;