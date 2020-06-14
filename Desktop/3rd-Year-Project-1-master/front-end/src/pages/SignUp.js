import React from 'react';
import './SignIn.css';

import Header from '../partiels/Header';
import Footer from '../partiels/Footer';



function SignUp() {

    return (
        <div className="App">
               <Header/>
 <div className="container">
              <div className="d-flex justify-content-center h-75">
        <div className="card">
            <div className="card-header">
                <h3>Sign Up</h3>
            </div>
            <form >
            <div className="card-body">
            <div>
      
            </div>
               <div className="row">
                   <div className="col-xs-12 col-sm-6 col-md-6">
               <div className="input-group form-group">
                   <div className="input-group-prepend">
                       <span className="input-group-text"><i className="fas fa-user"></i></span>
                   </div>
                   <input type="text" className="form-control" placeholder="Nom" name="nom_de_famille" id="nom_de_famille"  />
                   
               </div>
                </div>
                
                   <div className="col-xs-12 col-sm-6 col-md-6">
               
               <div className="input-group form-group">
                   <div className="input-group-prepend">
                       <span className="input-group-text"><i className="fas fa-user"></i></span>
                   </div>
                   <input type="text" className="form-control" placeholder="Prénom" name="prenom" id="prenom" />
               </div>
               </div>
               </div>
               <div className="row">
                   <div className="col-xs-12 col-sm-6 col-md-6">
               <div className="input-group form-group">
                   <div className="input-group-prepend">
                       <span className="input-group-text"><i className="fas fa-user"></i></span>
                   </div>
                   <input type="text" className="form-control" placeholder="Domaine" name="domaine" id="domaine"  />
                   
               </div>
               </div>
               
                   <div className="col-xs-12 col-sm-6 col-md-6">
               <div className="input-group form-group">
                   <div className="input-group-prepend">
                       <span className="input-group-text"><i className="fas fa-user"></i></span>
                   </div>
                   <input type="text" className="form-control" placeholder="Spécialté" name="specialite" id="specialité"/>
               </div>
               </div>
               </div>
               

               <div className="input-group form-group">
                   <div className="input-group-prepend">
                       <span className="input-group-text"><i className="fas fa-user"></i></span>
                   </div>
                   
                   <input type="text" className="form-control" placeholder="Email" name="email" id="email" />
                   
                   
               </div>

               <div className="input-group form-group">
                   <div className="input-group-prepend">
                       <span className="input-group-text"><i className="fas fa-user"></i></span>
                   </div>
                   
                   <input type="text" className="form-control" placeholder="User name" name="userName" id="userName"/>
                   
                   
               </div>

               <div className="row">
                   <div className="col-xs-12 col-sm-6 col-md-6">
             
               <div className="input-group form-group">
                   <div className="input-group-prepend">
                       <span className="input-group-text"><i className="fas fa-key"></i></span>
                   </div>
                   <input type="password" className="form-control" placeholder="password" name="passwsord" id="password"  />
                   
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
                   <input type="text" className="form-control" placeholder="Etablissement " name="Etablissement" id="Etablissement" />
                   
               </div>
               <div className="input-group form-group">
                   <div className="input-group-prepend">
                       <span className="input-group-text"><i className="fas fa-user"></i></span>
                   </div>
                   <input type="text" className="form-control" placeholder="Companie " name="companie" id="companie" />
                   
               </div>
               <div className="input-group form-group">
                   <div className="input-group-prepend">
                       <span className="input-group-text"><i className="fas fa-user"></i></span>
                   </div>
                   <input type="text" className="form-control" placeholder="Pays" name="pays" id="pays" />
                   
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
           
       </div>
            </form>
           
        </div>
    </div>
</div>


<Footer/> 
</div>
    )
}

export default SignUp

