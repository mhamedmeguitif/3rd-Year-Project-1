import React, { useContext, useEffect, useState } from "react";

import "../Profile/profile.css";
import pdp from '../../Global__Image/user.png'
import axios from "axios";
import { UserContext } from "../../Config__Global/UserContext";
import UserNavbar from "../../Global__components/NavBar/NavBarUser/UserNavbar";
import Footer from "../../Global__components/Footer/Footer";
function SuperAdmin() {

    const [profileImg, setProfileImg] = useState("");
    const { user, setUser } = useContext(UserContext);
  const [image, setimage] = useState(pdp)
const [users, setUsers] = useState([]);
function Delete() {
  
}
function getUsers() {
    axios
.get ('http://localhost:3000/users',{headers:{"Content-Type" : "application/json" , 'Accept' : 'application/json',
'Authorization' : `Bearer ${user.token}`}})
.then( (res) =>{
    console.log('users of bdd');
    
    setUsers(res.data);
    console.log(users);

})
}
  useEffect(() => {
      getUsers();
    console.log("m---------------------------------m");
    console.log(profileImg);
  });
  
  return (
    <div className="app3">
      <UserNavbar />

      <div className="container">
        <div className="view-account">
          <section className="module">
            <div className="module-inner">
              <div className="side-bar">
                <div className="user-info">
                  <div className="ImageContainer">
                    {user.photo?
                    <img 
                    className=" img-circle img-responsive center-block image2"
                    src={user.photo}
                    alt="profile pic"
                  />
                    : <img 
                    className=" img-circle img-responsive center-block image2"
                    src={image}
                    alt="profile pic"
                  />
                    }
                 
                  </div>
                  
                  <ul className="meta list list-unstyled">
                    <li className="name">
                      <label className="label label-info">
                        {user.username} <span style={{color:'#e26040'}} >Super Admin</span>
                      </label>
                    </li>
                    <li className="email">
                      <a href="#">{user.Email}</a>
                    </li>
                  </ul>
                </div>
                <nav className="side-menu">
                  <ul className="nav">
                    <li className="active">
                      <a href="#">
                        <span className="fa fa-user"></span> View all users
                      </a>
                    </li>
                    <li>
                      <a href="/profile/myConf">
                        <span className="fa fa-credit-card"></span> All
                        Conferences
                      </a>
                    </li>
                   
                    
                  </ul>
                </nav>
              </div>
              <div className="content-panel">
                <form className="form-horizontal">
                <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">User Name</th>
            
                <th scope="col"> First name</th>
                <th scope="col"> last name</th>
                <th scope="col">Pays</th>
                <th scope="col">Email</th>
                <th scope="col">operation</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{user._id}</th>
                  <td>{user.username}</td>
                 
                  <td> {user.nom_de_famille} </td>
                  <td> {user.prenom} </td>
                  <td> {user.Pays} </td>
                  <td> {user.Email} </td>
     
                 
                  <td> <button className="btn btn-outline-danger ">delete</button> </td>
                </tr>
              ))}
            </tbody>
          </table>
                  
                </form>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default SuperAdmin;
