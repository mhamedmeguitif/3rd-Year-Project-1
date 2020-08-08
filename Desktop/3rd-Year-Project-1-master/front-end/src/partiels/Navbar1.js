import React from 'react'
import {Navbar, Nav, NavDropdown } from 'react-bootstrap'

import SigninModal from '../pages/SigninModal';
import SignUpModal from '../pages/SignUpModal';
function Navbar1() {


    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);


    return (


        <div>

           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark " scrolling dark expand="md" fixed="top"> 
  <Navbar.Brand href="#home">MyConf-Time</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/welcome">Home</Nav.Link>
      <Nav.Link href="#">About</Nav.Link>
      <NavDropdown title="Help" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
   
    
                            <a type="button" className="btn btn-outline-danger " onClick={() => setModalShow(true)} style={{color:'white',fontSize:15}} > Log-in  </a>
                            <SigninModal
                           show={modalShow}
                           onHide={() => setModalShow(false)}
                          />
                         &nbsp;  &nbsp;  
                        
                            <a type="button" className="btn btn-danger  " onClick={() => setModalShow2(true)} style={{color:'white',fontSize:15}} > Sign-Up</a>
                            <SignUpModal
                           show={modalShow2}
                           onHide={() => setModalShow2(false)}
                          />
                      
    
    </Nav>
  </Navbar.Collapse>
</Navbar>
         
            
        </div>
    )
}

export default Navbar1
