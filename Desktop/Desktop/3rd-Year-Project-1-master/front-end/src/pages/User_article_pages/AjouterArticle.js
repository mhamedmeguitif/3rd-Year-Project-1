
import Alert from 'react-bootstrap/Alert'
import React , {useState, useContext, useEffect} from 'react'

import {UserContext} from '../UserContext'



import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import {   useHistory } from "react-router-dom";
import axios from 'axios' ;
function AjouterArticle() {
    const { user, setUser } = useContext(UserContext);
    const [add, setadd] = useState(false);
const [erre, setErre] = useState(false);
    const [TheThemes, setTheThemes] = useState([]);
    const [TheDefaultThemes, setTheDefaultThemes] = useState([]);
    function removeTheme(index) {
        try {
         const newTodos = TheThemes.filter((Theme, i) => i !== index);
     
         //newTodos.splice(index,1);
     
         setTheThemes(newTodos);   
        } 
        catch{
         setErre(true)
        }
       }
       function thSubmit(Theme) {
        try{
        
         setadd(true)
           const t = [...TheThemes,Theme];
         setTheThemes(t);
         console.log(TheThemes); 
         setadd(false)
        
       
        }
         catch{
          setErre(true)
         }
         
       }
       
       function DefaultTheme (){

        axios
        .get ('http://localhost:3000/Themes',{headers:{"Content-Type" : "application/json" , 'Accept' : 'application/json',
        'Authorization' : `Bearer ${user.token}`}})
        .then( (res) =>{
            console.log('theme of bdd');
            const t =res.data;
            setTheDefaultThemes(t);
            console.log(TheDefaultThemes);
        
        })
        }
        useEffect(() => { 
            DefaultTheme ();
            
       },[])

    return (
      
                 <div>
             
             <div className="container contact-form">
      
      <form method="post">
      <Alert  variant='warning'>
      <i class='fas fa-exclamation-triangle'></i> &nbsp; 
     WARNING : Read carfully the termes before adding your article good luck !
  </Alert>
       <br></br>
       <br></br>   
         <div className="row">
              <div className="col-md-6">
                  <div className="form-group">
                     <div className="form-group">

                     <div className="input-group">
                    <h2><p style={{color:'white'}} > Choose your topics </p></h2> 
                     <DropdownButton id="dropdown-item-button" title="topics of this conference  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; " variant="light"  >
                        {TheDefaultThemes.map((Theme,index) => (
                        <Dropdown.Item key= {index} style={{color:'black'}}>
                        {Theme.NameOfTheme} 
                      
                           <button type="button" class="btn btn-light float-right " onClick={ () => thSubmit(Theme)} >
                           <svg style={{color:'indianred'}} width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"/>
</svg>
                           </button>
                       
                </Dropdown.Item>
                 ))}    
                    </DropdownButton>
              
               

                               </div>
                     <div className="default-file-upload">
                         <br></br>
                        <h2>
                           <p style={{color:'white'}} >Upload your file here</p>
                        </h2>
                        <button className="btn btn-dark "><input id="file-upload1"  type="file"/></button>
                      
                        </div>
                        <br></br>
                        <textarea name="txtMsg" className="form-control" placeholder="Your key words " style={{width: 300, height: 98}}></textarea>
                 
                        <br></br>
                  </div>
               
                  </div>
                  
              </div>
              <div className="col-md-6">
                  <div className="form-group">
                      <br></br>
               &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;
                                &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;
                <span class="notification-badge badge badge-danger">{TheThemes.length}</span>
                
                <DropdownButton id="dropdown-item-button" title="Show the themes choosen" variant="secondary"  >
                        {TheThemes.map((Theme,index) => (
                        <Dropdown.Item key= {index} style={{color:'black'}}>
                        {Theme.NameOfTheme} 
                        <button className="btn btn-outline-danger float-right" onClick={() => removeTheme(index)}>X</button>
            
                </Dropdown.Item>
                 ))}    
                    </DropdownButton> 
                    <br></br>
                    <div className="input-group form-group">
                   
                    <input type="text" className="form-control" placeholder="title"  name="Title" id="title" />   
                    
                </div>
                      </div>
                  <div className="form-group">
                       <textarea name="txtMsg" className="form-control" placeholder="Your resumee " style={{width: 300, height: 150}}></textarea>
                      
                  </div>
              </div>
              
          </div>
          <div className="form-group">
                      <input type="submit"  className="btn float-right login_btn " value="Send your article" />
                  </div>
      </form>
</div>
        </div>

    
    )
}

export default AjouterArticle
