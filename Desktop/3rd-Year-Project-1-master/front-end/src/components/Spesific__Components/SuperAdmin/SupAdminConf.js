import React, { useContext, useEffect, useState } from "react";

import "../Profile/profile.css";
import pdp from '../../Global__Image/user.png'
import axios from "axios";
import { UserContext } from "../../Config__Global/UserContext";
import UserNavbar from "../../Global__components/NavBar/NavBarUser/UserNavbar";
import Footer from "../../Global__components/Footer/Footer";

function SupAdminConf() {
    
    const [profileImg, setProfileImg] = useState("");
    const { user, setUser } = useContext(UserContext);
  const [image, setimage] = useState(pdp)
const [confs, setconfs] = useState([]);
function DeleteAll() {
  axios
  .delete ('http://localhost:3000/conferences',{headers:{"Content-Type" : "application/json" , 'Accept' : 'application/json',
  'Authorization' : `Bearer ${user.token}`}})
  
}
function Delete(id) {
    axios
    .delete (`http://localhost:3000/conferences/${id}`,{headers:{"Content-Type" : "application/json" , 'Accept' : 'application/json',
    'Authorization' : `Bearer ${user.token}`}})
    
  }
function getconfs() {
    axios
.get ('http://localhost:3000/conferences',{headers:{"Content-Type" : "application/json" , 'Accept' : 'application/json',
'Authorization' : `Bearer ${user.token}`}})
.then( (res) =>{
    console.log('conf of bdd');
    
    setconfs(res.data);
    console.log(confs);

})
}
  useEffect(() => {
      getconfs();
    console.log("m---------------------------------m");
    console.log(profileImg);
  },[]);
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
                      <li >
                        <a href="/SuperAdmin">
                          <span className="fa fa-user"></span> View all users
                        </a>
                      </li>
                      <li className="active">
                        <a href="/SuperAdmin/conf">
                          <span className="fa fa-credit-card"></span> All
                          Conferences
                        </a>
                      </li>
                     
                      
                    </ul>
                  </nav>
                </div>
                <div className="content-panel">
                  <form className="form-horizontal">
                  <div class="alert alert-danger" role="alert">
  You wanna delate conferences ?  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <a
                    type="button"
                    className="btn btn-danger"
                    onClick={DeleteAll}
                    style={{ color: "white" }}
                  >
                  
                    delete all Conference
                  </a>
               
</div>
                  <table class="table">
              <thead>
                <tr>
              
                  <th scope="col">Name of conference</th>
              
                  <th scope="col"> Owner id</th>
                  <th scope="col">  NameOfCompany</th>
                  <th scope="col">TheDeadline</th>
               
                  <th scope="col">operations</th>
                </tr>
              </thead>
              <tbody>
                {confs.map((conf, index) => (
                  <tr key={index}>
                    <th scope="row">{conf. NameOfConference}</th>
                    <td>{user.username}</td>
                   
                    <td> {user.NameOfCompany} </td>
                    <td> {conf.TheDeadline} </td>
                 
       
                   
                    <td> <button className="btn btn-outline-danger " onClick={() => Delete(conf._id)}>delete</button>
                    <a className="btn btn-outline-danger " href={"/AllConf/"+conf._id} >view</a> </td>
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

export default SupAdminConf
