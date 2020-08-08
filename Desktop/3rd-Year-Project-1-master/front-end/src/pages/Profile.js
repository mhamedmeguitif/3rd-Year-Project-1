import React, {useContext, useEffect} from 'react'
import './profile.css'

import {UserContext} from './UserContext'
import UserNavbar from '../partiels/UserNavbar'
import Footer from '../partiels/Footer'
function Profile ({match}) {
    const { user } = useContext(UserContext); 
   
    
      return (
      <div classeName="app3" >
        <UserNavbar/>
    
<div className="container">
    <div className="view-account">
        <section className="module">
            <div className="module-inner">
                <div className="side-bar">
                    <div className="user-info">
                        <img className=" img-circle img-responsive center-block" src="https://img.icons8.com/cotton/64/000000/gender-neutral-user.png" alt=""/>
                        <ul className="meta list list-unstyled">
                            <li className="name">
                                <label className="label label-info">{user.username}</label>
                            </li>
                            <li className="email"><a href="#">{user.Email}</a></li>
                           
                        </ul>
                    </div>
            		<nav className="side-menu">
        				<ul className="nav">
        					<li className="active"><a href="#"><span className="fa fa-user"></span> Profile</a></li>
        					<li><a href="#"><span className="fa fa-cog"></span> Settings</a></li>
                            <li><a href="/profile/myConf"><span className="fa fa-credit-card"></span> My Conferences</a></li>
        					<li><a href="/profile/articles"><span className="fa fa-th"></span> My articles</a></li>
        					<li><a href="user-drive.html"><span className="fa fa-th"></span> My evaluations</a></li>
        					<li><a href="#"><span className="fa fa-clock-o"></span> Reminders</a></li>
        				</ul>
        			</nav>
                </div>
                <div className="content-panel">
                    
                    <form className="form-horizontal">
                        <fieldset className="fieldset">
                            
                            <div className="form-group avatar">
                                <figure className="figure col-md-2 col-sm-3 col-xs-12">
                                    <img className="img-rounded img-responsive" src="https://img.icons8.com/cotton/64/000000/gender-neutral-user.png" alt=""/>
                                </figure>
                                <div className="form-inline col-md-10 col-sm-9 col-xs-12">
                                &nbsp;  &nbsp;   &nbsp;   
                                
                                  <input type="file" className="file-uploader pull-left"/>
                                    
                                </div>
                            </div>
                            <div className="form-group">
                                <label style={{color:'black'}} className="col-md-2 col-sm-3 col-xs-12 control-label">User Name</label>
                                <div className="col-md-10 col-sm-9 col-xs-12">
                                    <input type="text" className="form-control" value={user.username}/>
                                </div>
                            </div>
        
                            <div className="form-group">
                                <label style={{color:'black'}} className="col-md-2 col-sm-3 col-xs-12 control-label">First Name</label>
                                <div className="col-md-10 col-sm-9 col-xs-12">
                                    <input type="text" className="form-control" value={user.firstname}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label style={{color:'black'}} className="col-md-2 col-sm-3 col-xs-12 control-label">Last Name</label>
                                <div className="col-md-10 col-sm-9 col-xs-12">
                                    <input type="text" className="form-control" value={user.lastname}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label style={{color:'black'}} className="col-md-2 col-sm-3 col-xs-12 control-label">Compagnie</label>
                                <div className="col-md-10 col-sm-9 col-xs-12">
                                    <input type="text" className="form-control" value={user.compagnie}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label style={{color:'black'}} className="col-md-2 col-sm-3 col-xs-12 control-label">Etablissement</label>
                                <div className="col-md-10 col-sm-9 col-xs-12">
                                    <input type="text" className="form-control" value={user.Etablissement}/>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="fieldset">
                            
                            <div className="form-group">
                                <label style={{color:'black'}} className="col-md-2  col-sm-3 col-xs-12 control-label">Email</label>
                                <div className="col-md-10 col-sm-9 col-xs-12">
                                    <input type="email" className="form-control" value={user.Email}/>
                                    
                                </div>
                            </div>
                            
                            
                        </fieldset>
                       <br></br>
                        <div className="form-group">
                            <div className="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
                                <input className="btn btn-outline-danger float-right" type="submit" value="Update Profile"/>
                            </div>
                        </div> 
                        
                    </form>
                </div>
            </div>
        </section>
    </div>
    <Footer/>
</div>

</div> 
      )
    }
  
  

export default Profile
