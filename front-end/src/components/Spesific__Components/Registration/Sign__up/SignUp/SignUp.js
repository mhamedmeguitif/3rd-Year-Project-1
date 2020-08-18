import React , {useState, useContext} from 'react';
import './SignUp.css';
import {UserContext} from '../../../../Config__Global/UserContext'
import {useHistory } from "react-router-dom";
import axios from 'axios' ;
import SigninModal from '../../Sign__in/Sign__in__Modal/SigninModal';
function SignUp() {
const [username , setUsername] = useState('');
const [password, setPassword] = useState('');
const [firstname, setFirstname] = useState('');
const [lastname, setLastname] = useState('');
const [Pays,setPays] = useState('');
const [Email, setEmail] = useState('');
const [Domaine, setDomaine] = useState('');
const [specialite, setSpecialite] = useState('');
const [Etablissement, setEtablissement] = useState('');
const [compagnie, setCompagnie] = useState('');
const [err, setErr] = useState(false);
const [success, setSuccess] = useState(false);
const [modalShow2, setModalShow2] = React.useState(false);
const [loading, setLoading] = useState(false);
const history= useHistory();
const { user, setUser } = useContext(UserContext);
function RegisterUser(){
    setLoading(true);
    setErr(false);
    let data = JSON.stringify({
        username: username,
        password: password,
        firstname:firstname,
        lastname: lastname,
        Pays: Pays,
        Email: Email,
        Domaine: Domaine,
        specialite: specialite,
        Etablissement: Etablissement,
        compagnie: compagnie 
     });
      
      
axios
.post('http://localhost:3000/users/signup',data,{headers:{"Content-Type" : "application/json"}})
.then( (res) =>{
    setLoading(false);
    setSuccess(true);
    const login=true;
    
       
    console.log(res.data);
})
.catch((err)=>{
    console.log(err)
    setErr(true);
})
}
function handleSubmit (e){
    e.preventDefault();
    if (username && password && firstname && lastname && Pays && Email && Etablissement && Domaine && specialite && compagnie){
        setErr(false);
        RegisterUser();
        
        
           setSuccess(true); 
          setModalShow2(true);
          
    }
    else{
        setErr(true);
    }
}



    return (
        <div classeName="App2" >
              
 <div className="container">
              <div className="d-flex justify-content-center h-75">
        <div className="card1">
            
            <div className="card-header">
               
            </div>
            <form  onSubmit={handleSubmit} >
            <div className="card-body">
            <div>
            {loading && <div style={{color:'white'}}>Loading...</div>}
             {err && <div style={{color:'white'}}>{err} ERROR try again !</div>}
            </div>
               <div className="row">
                   <div className="col-xs-12 col-sm-6 col-md-6">
               <div className="input-group form-group">
                   <div className="input-group-prepend">
                       <span className="input-group-text"><i className="fas fa-user"></i></span>
                   </div>
                   <input type="text" className="form-control" placeholder="First name" name="firstname" id="irstname" onChange={(e) => setFirstname(e.target.value)} />
                   
               </div>
                </div>
                
                   <div className="col-xs-12 col-sm-6 col-md-6">
               
               <div className="input-group form-group">
                   <div className="input-group-prepend">
                       <span className="input-group-text"><i className="fas fa-user"></i></span>
                   </div>
                   <input type="text" className="form-control" placeholder="Last Name" name="lastname" id="lastname" onChange={(e) => setLastname(e.target.value)} />
               </div>
               </div>
               </div>
               <div className="row">
                   <div className="col-xs-12 col-sm-6 col-md-6">
               <div className="input-group form-group">
                   <div className="input-group-prepend">
                       <span className="input-group-text"><i className="fas fa-user"></i></span>
                   </div>
                   <input type="text" className="form-control" placeholder="Domaine" name="domaine" id="domaine" onChange={(e) => setDomaine(e.target.value)}  />
                   
               </div>
               </div>
               
                   <div className="col-xs-12 col-sm-6 col-md-6">
               <div className="input-group form-group">
                   <div className="input-group-prepend">
                       <span className="input-group-text"><i className="fas fa-user"></i></span>
                   </div>
                   <input type="text" className="form-control" placeholder="Spécialté" name="specialite" id="specialite" onChange={(e) => setSpecialite(e.target.value)} />
               </div>
               </div>
               </div>
               

               <div className="input-group form-group">
                   <div className="input-group-prepend">
                       <span className="input-group-text"><i className="fas fa-user"></i></span>
                   </div>
                   
                   <input type="text" className="form-control" placeholder="Email" name="Email" id="email" onChange={(e) => setEmail(e.target.value)}  />
                   
                   
               </div>

               <div className="input-group form-group">
                   <div className="input-group-prepend">
                       <span className="input-group-text"><i className="fas fa-user"></i></span>
                   </div>
                   
                   <input type="text" className="form-control" placeholder="User name" name="username" id="username" onChange={(e) => setUsername(e.target.value)} />
                   
                   
               </div>

               <div className="row">
                   <div className="col-xs-12 col-sm-6 col-md-6">
             
               <div className="input-group form-group">
                   <div className="input-group-prepend">
                       <span className="input-group-text"><i className="fas fa-key"></i></span>
                   </div>
                   <input type="password" className="form-control" placeholder="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}  />
                   
               </div>
               </div>
               
                   <div className="col-xs-12 col-sm-6 col-md-6">
               <div className="input-group form-group">
                   <div className="input-group-prepend">
                       <span className="input-group-text"><i className="fas fa-key"></i></span>
                   </div>
                   <input type="password" className="form-control" placeholder="Re-type password" name="rePassword" id="rePassword" />
               </div>
               </div>
               </div>

               <div className="input-group form-group">
                   <div className="input-group-prepend">
                       <span className="input-group-text"><i className="fas fa-user"></i></span>
                   </div>
                   <input type="text" className="form-control" placeholder="Etablissement " name="Etablissement" id="Etablissement" onChange={(e) => setEtablissement(e.target.value)}  />
                   
               </div>
               <div className="input-group form-group">
                   <div className="input-group-prepend">
                       <span className="input-group-text"><i className="fas fa-user"></i></span>
                   </div>
                   <input type="text" className="form-control" placeholder="Companie " name="companie" id="companie" onChange={(e) => setCompagnie(e.target.value)}  />
                   
               </div>
               <div className="input-group form-group">
                   <div className="input-group-prepend">
                       <span className="input-group-text"><i className="fas fa-user"></i></span>
                   </div>
                   <input type="text" className="form-control" placeholder="Pays" name="pays" id="pays" onChange={(e) => setPays(e.target.value)} />
                   
               </div>
              
              

             
<br></br>     
               <div className="form-group">
                   <input type="submit" value="SIGN UP" className="btn float-right login_btn"/>
               </div>

    
          
           
       </div>
       <br></br> <br></br> <br></br> <br></br>      <br></br> <br></br> <br></br> <br></br>       
       <div className="card-footer">
           <div className="d-flex justify-content-center links">
              
           </div>
           {success &&<SigninModal
                           show={modalShow2}
                           onHide={() => setModalShow2(false)}
                          />}
       </div>
            </form>
           
        </div>
    </div>
</div>



</div>
    )
}

export default SignUp

