import React, { Fragment, useState, useRef } from "react";
import "./NavbarType1.css";
import {Link} from "react-router-dom";
import logo from '../../assets/nectoLogo.png';
import SignInModal from "../../Phase1/PopUps/SignIn/SignInModal";
import SignUpModal from "../../Phase1/PopUps/SignUp/SignUpModal";

function NavbarType1() {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUPModal, setShowSignUPModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleMoreClick= (event) => {
    event.preventDefault();
    isOpen? document.getElementById("dropdownMenu").style.display= "none" : document.getElementById("dropdownMenu").style.display= "flex";
  setIsOpen(!isOpen);
  }
  return (
    <Fragment>
      <div className="navbar-div">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
          <img
                            src={logo}
                            alt="necto-logo"
                            style={{width: "5rem"}}
                        />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="nav-main collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-5">
                <div className="nav-contents">
                  <div className="nav-home">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item ms-3">
                      <Link className="nav-link" to={"/about"}>
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item ms-3">
                      <Link className="nav-link" to={"/contact"}>
                        Contact Us
                      </Link>
                    </li>
                    <li className="nav-item ms-3">
                      <Link className="nav-link" to={"/bptospprofile"}>
                        BP Profile
                      </Link>
                    </li>

                    <li onClick={event => handleMoreClick(event)} className="nav-item ms-3 dropdown ">
                      <Link
                        className="nav-link dropdown"
                        to="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        More
                      </Link>
                      <ul
                      id="dropdownMenu"
                        className="dropdown-menu clearfix"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <li>
                          <Link className="dropdown-item" to="/faqs">
                            FAQs
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/TermsAndCondition"
                          >
                            Terms and Conditions
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/UserAggreement">
                            User Aggreement
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/PrivacyPolicy">
                            Privacy Policy
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/signin-signup">
                            SignIn / SignUp
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </div>
                  <div className="nav-signinup">
                    <li className="nav-item ms-3">
                      <Link
                        className="nav-link nav1link"
                        to="#"
                        onClick={() => {
                          setShowSignUPModal(true);
                        }}
                      >
                        Register
                      </Link>
                    </li>
                    <li className="nav-item ms-3">
                      <Link
                        className="nav-link show-signin nav1link"
                        to="#"
                        onClick={() => setShowSignInModal(true)}
                      >
                        SignIn
                      </Link>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto"></ul>
    {/* const [showSignInModal, setShowSignInModal] = useState(false)
    const [showSignUPModal, setShowSignUPModal] = useState(false)
    return (
        <Fragment>
            
            <div className="navbar-div">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <img
                            src={logo}
                            alt="necto-logo"
                            style={{width: "5rem"}}
                        />
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-5">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link active"
                                        aria-current="page"
                                        to="/"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item ms-3">
                                    <Link className="nav-link" to={"/about"}>
                                        About Us
                                    </Link>
                                </li>
                                <li className="nav-item ms-3">
                                    <Link className="nav-link" to={"/contact"}>
                                        Contact Us
                                    </Link>
                                </li>
                                <li className="nav-item ms-3 dropdown ">
                                    <Link
                                        className="nav-link dropdown"
                                        to="#"
                                        id="navbarDropdownMenuLink"
                                        role="button"                                        
                                        data-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        More
                                    </Link>
                                    <ul
                                        className="dropdown-menu clearfix"
                                        aria-labelledby="navbarDropdownMenuLink"
                                    >
                                        <li>
                                            <Link className="dropdown-item" to="/faqs">
                                                FAQs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/TermsAndCondition">
                                                Terms and Conditions
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/UserAggreement">
                                                User Aggreement
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/PrivacyPolicy">
                                                Privacy Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/signin-signup">
                                                SignIn / SignUp
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item ms-3">
                                    <Link
                                        className="nav-link nav1link"
                                        to="#"
                                        onClick={() => {
                                            setShowSignUPModal(true);
                                        }}
                                    >
                                        Register
                                    </Link>
                                </li>
                                <li className="nav-item ms-3">
                                    <Link
                                        className="nav-link show-signin nav1link"
                                        to="#"
                                        onClick={() => setShowSignInModal(true)}
                                    >
                                        SignIn
                                    </Link>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>*/}
            </div>
          </div>
        </nav> 

        {/* <div class="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column" id="sidebar">
  <ul class="nav flex-column text-white w-100">
    <a href="#" class="nav-link h3 text-white my-2">
      Side Nav
    </a>
    <li href="#" class="nav-link">
      <span class="mx-2">Home</span>
    </li>
    <li href="#" class="nav-link">
      <span class="mx-2">About</span>
    </li>
    <li href="#" class="nav-link">
      <span class="mx-2">Contact</span>
    </li>
  </ul>
</div> */}

        {/* <nav
       id="main-navbar"
       class="navbar navbar-expand-lg navbar-light bg-white fixed-top"
       >
    <div class="container-fluid">
      <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
              >
        <i class="fas fa-bars"></i>
      </button>

      <a class="navbar-brand" href="#">
        <img
             src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
             height="25"
             alt=""
             loading="lazy"
             />
      </a>
      <form class="d-none d-md-flex input-group w-auto my-auto">
        <input
               autocomplete="off"
               type="search"
               class="form-control rounded"
               placeholder='Search (ctrl + "/" to focus)'
               style="min-width: 225px"
               />
        <span class="input-group-text border-0"
              ><i class="fas fa-search"></i
          ></span>
      </form>

      <ul class="navbar-nav ms-auto d-flex flex-row">
        <li class="nav-item dropdown">
          <a
             class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
             href="#"
             id="navbarDropdownMenuLink"
             role="button"
             data-mdb-toggle="dropdown"
             aria-expanded="false"
             >
            <i class="fas fa-bell"></i>
            <span class="badge rounded-pill badge-notification bg-danger"
                  >1</span
              >
          </a>
          <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
              >
            <li><a class="dropdown-item" href="#">Some news</a></li>
            <li><a class="dropdown-item" href="#">Another news</a></li>
            <li>
              <a class="dropdown-item" href="#">Something else here</a>
            </li>
          </ul>
        </li>

        <li class="nav-item">
          <a class="nav-link me-3 me-lg-0" href="#">
            <i class="fas fa-fill-drip"></i>
          </a>
        </li>
        <li class="nav-item me-3 me-lg-0">
          <a class="nav-link" href="#">
            <i class="fab fa-github"></i>
          </a>
        </li>

        <li class="nav-item dropdown">
          <a
             class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
             href="#"
             id="navbarDropdown"
             role="button"
             data-mdb-toggle="dropdown"
             aria-expanded="false"
             >
            <i class="united kingdom flag m-0"></i>
          </a>
          <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
              >
            <li>
              <a class="dropdown-item" href="#"
                 ><i class="united kingdom flag"></i>English
                <i class="fa fa-check text-success ms-2"></i
                  ></a>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item" href="#"
                 ><i class="poland flag"></i>Polski</a
                >
            </li>
            <li>
              <a class="dropdown-item" href="#"
                 ><i class="china flag"></i>中文</a
                >
            </li>
            <li>
              <a class="dropdown-item" href="#"
                 ><i class="japan flag"></i>日本語</a
                >
            </li>
            <li>
              <a class="dropdown-item" href="#"
                 ><i class="germany flag"></i>Deutsch</a
                >
            </li>
            <li>
              <a class="dropdown-item" href="#"
                 ><i class="france flag"></i>Français</a
                >
            </li>
            <li>
              <a class="dropdown-item" href="#"
                 ><i class="spain flag"></i>Español</a
                >
            </li>
            <li>
              <a class="dropdown-item" href="#"
                 ><i class="russia flag"></i>Русский</a
                >
            </li>
            <li>
              <a class="dropdown-item" href="#"
                 ><i class="portugal flag"></i>Português</a
                >
            </li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a
             class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
             href="#"
             id="navbarDropdownMenuLink"
             role="button"
             data-mdb-toggle="dropdown"
             aria-expanded="false"
             >
            <img
                 src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                 class="rounded-circle"
                 height="22"
                 alt=""
                 loading="lazy"
                 />
          </a>
          <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
              >
            <li><a class="dropdown-item" href="#">My profile</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav> */}

        {/* <main style="margin-top: 58px">
  <div class="container pt-4"></div>
</main> */}
      </div>
      <SignInModal
        showSignInModal={showSignInModal}
        closeSignInModal={() => setShowSignInModal(false)}
      />
      <SignUpModal
        showSignUPModal={showSignUPModal}
        closeSignUpModal={() => setShowSignUPModal(false)}
      />
    </Fragment>
  );
}

export default NavbarType1;
