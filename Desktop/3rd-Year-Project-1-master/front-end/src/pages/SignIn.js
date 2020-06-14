

import './SignIn.css';
import background01 from '../pages/background01.jpg';
import Header from '../partiels/Header';
import Footer from '../partiels/Footer';
import {  Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
function SignIn() {
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
        
        return (
            <div className="App">
           <Header/>

      
  <header className="App-header">
  <div id="root"></div>
<div className="container">
<div className="d-flex justify-content-center h-100">
    <div className="card">
        <div className="card-header">
            <h3>Sign In</h3>
        </div>
        <div className="card-body">
            <form>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                    </div>
                    <input type="text" className="form-control" placeholder="email"  name="email" id="email"/>
                    
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                    </div>
                    <input type="password" className="form-control" placeholder="password"  name="password" id="passwors"/>
                </div>
                <div className="row align-items-center remember">
                    <input type="checkbox"/>Remember Me
                </div>
                <br></br> 
                <div className="form-group">
                    <input type="submit" value="Login" className="btn float-right login_btn"/>
                </div>
            </form>
        </div>
        <div className="card-footer">
            <div className="d-flex justify-content-center links">
                Don't have an account?<Link to="/signUp">Sign Up</Link>

            </div>
            <div className="d-flex justify-content-center">
                <a href="#">Forgot your password?</a>
            </div>
        </div>
    </div>
</div>
</div>
  </header>
 <Footer/>
</div>
        )
    }


export default SignIn
