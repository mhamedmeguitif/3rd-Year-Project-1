import React, {useContext} from 'react'
import {Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {  useHistory } from "react-router-dom";
import {UserContext} from '../../../Config__Global/UserContext'
import axios from 'axios' ;
import logo from '../../../Global__Image/logo.png'
import pdp from '../../../Global__Image/red.png'
import './NavBar1.css'
function UserNavbar() {
    const history= useHistory();
    const { user } = useContext(UserContext); 
    
 function handalLogout(e){
    e.preventDefault();
    axios
    .get('http://localhost:3000/users/logout',user,{headers:{"Content-Type" : "application/json"}})
    .then( (res) =>{
     localStorage.clear(); 
     user.login=false;
    console.log(res.data)
    history.push("/welcome"); 
    
    
    })
 }


    return (


        <div>

           <Navbar collapseOnSelect expand="lg"  variant="dark " scrolling  expand="md" fixed="top"> 
  <Navbar.Brand href="/home"><img  src={logo}  width="100px" height="50px"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="#">About</Nav.Link>
      <Nav.Link href="#">Help</Nav.Link>
     
    </Nav>
    <Nav >
    <Nav.Link href="/home">
    <a class="nav-link"  target="_blank" rel="noopener" aria-label="GitHub">
      
            <i class="fa fa-lg fa-bell" style={{color:'Gainsboro'}}></i>
            <span class="notification-badge badge badge-danger">1</span>
        </a>
        </Nav.Link>
    
        &nbsp;  &nbsp;           
                       
        <NavDropdown title=
         {user.photo ? <img  src={user.photo}
          alt="profile pic" width="40" height="40" class="rounded-circle"/>:<img  src={pdp}
          alt="profile pic" width="40" height="40" class="rounded-circle"/>
          
        } 
         
        
        id="collasible-nav-dropdown">
        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
        <NavDropdown.Item  onClick={handalLogout}> Log out</NavDropdown.Item>
        
      </NavDropdown> 
    
    </Nav>&nbsp;  &nbsp; &nbsp;  &nbsp;  
  </Navbar.Collapse>
</Navbar>
         
            
        </div>
    )
}

export default UserNavbar
