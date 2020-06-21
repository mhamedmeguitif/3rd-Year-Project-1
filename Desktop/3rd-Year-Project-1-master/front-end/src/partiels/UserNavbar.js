import React, {useContext} from 'react'
import {Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {  useHistory } from "react-router-dom";
import {UserContext} from '../pages/UserContext'
import axios from 'axios' ;

function UserNavbar() {
    const history= useHistory();
    const { user } = useContext(UserContext); 
    
 function handalLogout(e){
    e.preventDefault();
    axios
    .get('http://localhost:3000/users/logout',user,{headers:{"Content-Type" : "application/json"}})
    .then( (res) =>{
    history.push("/welcome"); 
    localStorage.clear();
    user.login=false;
    console.log(res.data)
    })
 }


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
    <Nav >
    <a class="nav-link" href="#" target="_blank" rel="noopener" aria-label="GitHub">
            <i class="fa fa-lg fa-bell" style={{color:'white'}}></i>
            <span class="notification-badge badge badge-danger">1</span>
        </a>
        &nbsp;  &nbsp;
    <Navbar.Brand href="/profile">{user.username1}</Navbar.Brand>

    &nbsp;  &nbsp;  
                        <div >
                            <a type="button" className="btn btn-danger" style={{color:'white'}} onClick={handalLogout} > Log-out</a>
                                       
                        </div>
                        
    
    </Nav>
  </Navbar.Collapse>
</Navbar>
         
            
        </div>
    )
}

export default UserNavbar
