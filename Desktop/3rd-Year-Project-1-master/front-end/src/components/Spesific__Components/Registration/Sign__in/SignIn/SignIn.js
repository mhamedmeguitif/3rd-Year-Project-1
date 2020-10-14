import axios from 'axios' ;

import './SignIn.css';
import {UserContext} from '../../../../Config__Global/UserContext'
import {  useHistory } from "react-router-dom";
import React, {  useState,useContext } from 'react';
function SignIn() {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');   
    const [err, setErr] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const history= useHistory();
  const { user, setUser } = useContext(UserContext);
  
    function loginUser(){
        setLoading(true);
        let data = JSON.stringify({
            username: username,
            password: password,
            
         });
          
          
    axios
    .post('http://localhost:3000/users/login',data,{headers:{"Content-Type" : "application/json"}})
    .then( (res) =>{
        setLoading(false);
        setSuccess(true);
        const login=true;
        const admin=res.data.body.admin;
        const  id = res.data.body._id;
        const  firstname = res.data.body.nom_de_famille;
        const  lastname= res.data.body.prenom;
        const  Pays = res.data.body.Pays;
        const Email= res.data.body.Email;
        const Domaine = res.data.body.Domaine;
        const specialite =  res.data.body.specialite;
        const photo = res.data.body.photo;   
        const Etablissement= res.data.body.Etablissement;
        const  compagnie= res.data.body.compagnie;
        const  token= res.data.token;
        setUser({  id, 
                   username,
                   password,
                   firstname,
                   lastname,
                   photo,
                   Pays,
                   Email,
                   Domaine,
                   specialite,
                   Etablissement,
                   compagnie, 
                   login,
                   admin,
                   token
                });
       
       
        console.log(res);
       
        })
    .catch((err)=>{
        setErr(true);
        console.log(err)
       
    })
   

    }
    
    function handleSubmit (e){
        e.preventDefault();
        if (username && password){
            setErr(false);
            loginUser();
            if (success){
              history.push("/profile");  
            }
            
        }
        else{
            setErr(true);
        }
    }
   
        return (
            <div className="App4">
         

      
  <header className="App-header">
  <div id="root"></div>
<div className="container">
<div className="d-flex justify-content-center h-100">
    <div className="card3">
       
        <div className="card-body">
            <form onSubmit={handleSubmit}>
            
             {err && <div style={{color:'white'}}> username or password incorrect !</div>}
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                    </div>
                    <input type="text" className="form-control" placeholder="username"  name="username" id="username" onChange={(e) => setUsername(e.target.value)}/>
                    
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                    </div>
                    <input type="password" className="form-control" placeholder="password"  name="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="row align-items-center remember">
                    <input type="checkbox"/>Remember Me
                </div>
                <br></br> 
                <div className="form-group">
                    <input type="submit" value="Login" className="btn float-right login_btn"/>
                </div>
                <br></br> 
            </form>
        </div>
        <div className="card-footer">
            <div className="d-flex justify-content-center links">
                Don't have an account?<a href="#" >Sign Up</a>

            </div>
            <br></br>
            <div className="d-flex justify-content-center">
                <a href="#">Forgot your password?</a>
            </div>
        </div>
    </div>
</div>
</div>
  </header>
 
</div>
        )
    }


export default SignIn
