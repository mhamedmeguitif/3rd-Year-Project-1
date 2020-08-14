import React , {useEffect, useContext, useState } from 'react'
import '../../Profile/profile.css'

import axios from 'axios' ;
import {UserContext} from '../../../Config__Global/UserContext'
import UserNavbar from '../../../Global__components/NavBar/NavBarUser/Navbar1'
import Footer from '../../../Global__components/Footer/Footer'

function AllmyArticles() {
 
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
                        <img className="img-circle img-responsive center-block" src="https://img.icons8.com/cotton/64/000000/gender-neutral-user.png" alt=""/>
                        <ul className="meta list list-unstyled">
                            <li className="name">
                                <label className="label label-info">{user.username}</label>
                            </li>
                            <li className="email"><a href="#">{user.Email}</a></li>
                           
                        </ul>
                    </div>
            		<nav className="side-menu">
        				<ul className="nav">
        					<li ><a href="/profile"><span className="fa fa-user"></span> Profile</a></li>
        					<li><a href="#"><span className="fa fa-cog"></span> Settings</a></li>
                            <li ><a href="/profile/myConf"><span className="fa fa-credit-card"></span> My Conferences</a></li>
        					<li className="active"><a  href="/profile/articles"><span className="fa fa-th"></span> My articles</a></li>
        					<li><a href="#"><span className="fa fa-th"></span> My evaluations</a></li>
        					<li><a href="#"><span className="fa fa-clock-o"></span> Reminders</a></li>
        				</ul>
        			</nav>
                </div>
                <div className="content-panel">
                    
                    <form className="form-horizontal">
                        
                       
                   
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

export default AllmyArticles
