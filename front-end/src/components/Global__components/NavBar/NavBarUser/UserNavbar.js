import React, {useContext} from 'react'
import {Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {  useHistory } from "react-router-dom";
import {UserContext} from '../../../Config__Global/UserContext'
import axios from 'axios' ;

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

           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark " scrolling dark expand="md" fixed="top"> 
  <Navbar.Brand href="#home">MyConf-Time</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
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
    <Nav.Link href="/home">
    <a class="nav-link"  target="_blank" rel="noopener" aria-label="GitHub">
      
            <i class="fa fa-lg fa-bell" style={{color:'white'}}></i>
            <span class="notification-badge badge badge-danger">1</span>
        </a>
        </Nav.Link>
    
        &nbsp;  &nbsp;           
                       
        <NavDropdown title={ 
          
          <img src="https://img.icons8.com/cotton/64/000000/gender-neutral-user.png" width="40" height="40" class="rounded-circle"/>
        } id="collasible-nav-dropdown">
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
