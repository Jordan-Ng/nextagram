import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap";
import ModalExample from "../Containers/modal";
import { toast } from "react-toastify";

const Navebar = ({
  VerifySignup,
  ToastContainer,
  isLoggedin,
  setisLoggedin
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const logout = () => {
    setisLoggedin(false);
    console.log(localStorage);
    localStorage.removeItem("jwt");
    toast("logged out fam");
  };

  const hideProf = () => {
    if (isLoggedin) {
      return (
        <Link to="/profile" style={{ marginRight: "10px" }}>
          My Profile
        </Link>
      );
    }
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">NEXTagram</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              {/* replace original navlink with link */}
              <Link to="/" style={{ marginRight: "10px" }}>
                Home
              </Link>
            </NavItem>
            <NavItem>
              {/* remove original navlink with link */}
              {/* <Link to="/profile" style={{ marginRight: "10px" }}>
                My Profile
              </Link> */}
              {hideProf()}
            </NavItem>
            <NavItem>
              <ModalExample
                VerifySignup={VerifySignup}
                ToastContainer={ToastContainer}
                isLoggedin={isLoggedin}
                setisLoggedin={setisLoggedin}
              />
            </NavItem>
          </Nav>
          <NavbarText className="btn btn-link" onClick={logout}>
            {isLoggedin ? "logout" : " "}
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navebar;
