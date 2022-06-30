import React, { Fragment, useState } from "react";
import "./Navbar.css";
import NavbarType1 from "./NavbarTypes/NavbarType1";
import NavbarType2 from "./NavbarTypes/NavbarType2";

function Navbar() {
  const [navbarType1, setNavbarType1] = useState(true);
  const changeNavbar = () => {
    setNavbarType1(!navbarType1);
  };
  return (
    <Fragment>
      {<NavbarType1 /> ? <NavbarType1 /> : <NavbarType2 />}
    </Fragment>
  );
}

export default Navbar;
