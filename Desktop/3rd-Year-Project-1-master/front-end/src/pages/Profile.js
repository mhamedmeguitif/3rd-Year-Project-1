import React, { Component } from 'react'
import './profile.css'
import Navbar1 from '../partiels/Navbar1'
import Footer from '../partiels/Footer'
export class Profile extends Component {

  
    render() {
      
      return (
      <div classeName="app3" >
        <Navbar1/>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
<div className="container">
    <div className="view-account">
        <section className="module">
            <div className="module-inner">
                <div className="side-bar">
                    <div className="user-info">
                        <img className="img-profile img-circle img-responsive center-block" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                        <ul className="meta list list-unstyled">
                            <li className="name">Zeblah ikhlass
                                <label className="label label-info">UX Designer</label>
                            </li>
                            <li className="email"><a href="#">i.zeblah@esi-sba.dz</a></li>
                           
                        </ul>
                    </div>
            		<nav className="side-menu">
        				<ul className="nav">
        					<li className="active"><a href="#"><span className="fa fa-user"></span> Profile</a></li>
        					<li><a href="#"><span className="fa fa-cog"></span> Settings</a></li>
        					
        					<li><a href="#"><span className="fa fa-envelope"></span> Messages</a></li>
                            <li><a href="#"><span className="fa fa-credit-card"></span> My Conferences</a></li>
        					<li><a href="user-drive.html"><span className="fa fa-th"></span> My articles</a></li>
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
                                    <img className="img-rounded img-responsive" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                                </figure>
                                <div className="form-inline col-md-10 col-sm-9 col-xs-12">
                                    <input type="file" className="file-uploader pull-left"/>
                                    <button type="submit" className="btn btn-danger btn-default-alt pull-left">Update Image</button>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 col-sm-3 col-xs-12 control-label">User Name</label>
                                <div className="col-md-10 col-sm-9 col-xs-12">
                                    <input type="text" className="form-control" value=""/>
                                </div>
                            </div>
        
                            <div className="form-group">
                                <label className="col-md-2 col-sm-3 col-xs-12 control-label">First Name</label>
                                <div className="col-md-10 col-sm-9 col-xs-12">
                                    <input type="text" className="form-control" value=""/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 col-sm-3 col-xs-12 control-label">Last Name</label>
                                <div className="col-md-10 col-sm-9 col-xs-12">
                                    <input type="text" className="form-control" value=""/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 col-sm-3 col-xs-12 control-label">Compagnie</label>
                                <div className="col-md-10 col-sm-9 col-xs-12">
                                    <input type="text" className="form-control" value=""/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 col-sm-3 col-xs-12 control-label">Etablissement</label>
                                <div className="col-md-10 col-sm-9 col-xs-12">
                                    <input type="text" className="form-control" value=""/>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="fieldset">
                            
                            <div className="form-group">
                                <label className="col-md-2  col-sm-3 col-xs-12 control-label">Email</label>
                                <div className="col-md-10 col-sm-9 col-xs-12">
                                    <input type="email" className="form-control" value=""/>
                                    
                                </div>
                            </div>
                            
                            
                        </fieldset>
                       
                        <div className="form-group">
                            <div className="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
                                <input className="btn btn-danger" type="submit" value="Update Profile"/>
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
  }
  

export default Profile
