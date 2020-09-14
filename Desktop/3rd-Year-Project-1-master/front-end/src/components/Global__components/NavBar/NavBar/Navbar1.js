import React from "react";
import '../NavBarUser/NavBar1.css'
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from '../../../Global__Image/logo.png'
import SigninModal from "../../../Spesific__Components/Registration/Sign__in/Sign__in__Modal/SigninModal";
import SignUpModal from "../../../Spesific__Components/Registration/Sign__up/Sign__up__Modal/SignUpModal";
function Navbar1() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
       
        variant="dark "
        scrolling
        dark
        expand="md"
        fixed="top"
      >
        <Navbar.Brand href="/home"><img  src={logo}  width="100px" height="50px"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/welcome">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Help</Nav.Link>
          </Nav>
          <Nav>
            <a
              type="button"
              className="btn btn-outline-danger "
              onClick={() => setModalShow(true)}
              style={{ color: "white", fontSize: 15 }}
            >
              {" "}
              Log-in{" "}
            </a>
            <SigninModal show={modalShow} onHide={() => setModalShow(false)} />
            &nbsp; &nbsp;
            <a
              type="button"
              className="btn btn-danger  "
              onClick={() => setModalShow2(true)}
              style={{ color: "white", fontSize: 15 }}
            >
              {" "}
              Sign-Up
            </a>
            <SignUpModal
              show={modalShow2}
              onHide={() => setModalShow2(false)}
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbar1;
