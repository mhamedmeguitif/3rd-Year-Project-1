import React , {useState, useContext, useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'
import {UserContext} from '../UserContext'

import './AjouterConf.css'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import {   useHistory } from "react-router-dom";
import axios from 'axios' ;
function AjouterConf() {
    const [modalShow, setModalShow] = React.useState(false);
    const { user, setUser } = useContext(UserContext);
    const [add, setadd] = useState(false);
const [NameOfConference, setNameOfConference] = useState('');
const [NameOfCompany, setNameOfCompany] = useState('');
const [TheDeadline, setTheDeadline] = useState('');
const [LittleDefinitionOfCompany, setLittleDefinitionOfCompany] = useState('');
const [AboutCompany, setAboutCompany] = useState('');
const [TheThemes, setTheThemes] = useState([]);
const [TheDefaultThemes, setTheDefaultThemes] = useState([]);
const [Eligibility, setEligibility] = useState('');
const [Funding, setFunding] = useState('');
const [ConditionOfApplicant, setConditionOfApplicant] = useState('');
const [OpportunityInformation, setOpportunityInformation] = useState('');
const [EducationalConditions, setEducationalConditions] = useState('');
const [ ConditionOfArtical, setConditionOfArtical] = useState('');
const [ReadingCommitee, setReadingCommitee] = useState([]);
const [success, setSuccess] = useState(false);
const [loading, setLoading] = useState(false);
const [err, setErr] = useState(false);
const [erre, setErre] = useState(false);
const [errR, setErrR] = useState(false);
const [count, setCount] = useState(0);
const history= useHistory();
const [Description, setDescription] = useState('');
const [NameOfTheme, setNameOfTheme] = useState('');
const [evaluateur, setEvaluateur] = useState('');
// supprimer un theme du tableau
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

  // handle the the theme

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

//pour ajouter un thème au bdd
function Ajoutertheme(){
    if(NameOfTheme && Description){
     let data = JSON.stringify({
        NameOfTheme: NameOfTheme,
       Description:Description
    });
    axios 
    .post ('http://localhost:3000/Themes',data,{headers:{"Content-Type" : "application/json" , 'Accept' : 'application/json',
    'Authorization' : `Bearer ${user.token}`}})
    .then( (res) =>{
        
        console.log(res.data);
        thSubmit(res.data.body)
        console.log(TheThemes)
        console.log('waw')
    })   
    }
    else{
        console.log('no theme')
    }
}


  //pour avoir les thèmes qui sont enregistrés dans la bdd 
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

  // handle the evaluateur
  
  function EvalSubmit() {
    try{
    if (evaluateur){
         const t = [...ReadingCommitee,evaluateur];
     setReadingCommitee(t);
     console.log(ReadingCommitee); 
    }
    else {
        console.log('no user')
    }
    }
    
     catch{
      setErrR(true)
      
     }
     
   }
   //supprimer évaluateur du tableau
   function removeEva(index) {
    try {
     const newTodos = ReadingCommitee.filter((evaluateur, i) => i !== index);
 
     //newTodos.splice(index,1);
 
    setReadingCommitee(newTodos);   
    } 
    catch{
     setErre(true)
    }
   }
  //ajouter conference
   function AjoutConf (){

    setLoading(true);
    let data = JSON.stringify({
         NameOfConference: NameOfConference ,
         NameOfCompany: NameOfCompany,
         TheDeadline:TheDeadline,
         LittleDefinitionOfCompany:LittleDefinitionOfCompany ,
         AboutCompany: AboutCompany ,
         TheThemes:TheThemes ,
         Eligibility:Eligibility ,
         Funding: Funding ,
         ConditionOfApplicant: ConditionOfApplicant,
         OpportunityInformation: OpportunityInformation,
         EducationalConditions: EducationalConditions,
         ConditionOfArtical:ConditionOfArtical,
         ConferenceOwner:user, 
         Valide : false ,
         ReadingCommitee: ReadingCommitee
      
     });
     axios
.post('http://localhost:3000/conferences',data,{headers:{"Content-Type" : "application/json" , 'Accept' : 'application/json',
'Authorization' : `Bearer ${user.token}`}})
.then( (res) =>{
    setLoading(false);
    setSuccess(true);
   
    console.log(res.data);
})
.catch((err)=>{
    console.log(err)
    
})
   }


   function handleSubmit (e){
    e.preventDefault();

    AjoutConf();
    if (NameOfConference && NameOfCompany && TheDeadline  && LittleDefinitionOfCompany   && AboutCompany && TheThemes  && Eligibility && Funding &&  ConditionOfApplicant &&  OpportunityInformation &&  EducationalConditions && ConditionOfArtical  && ReadingCommitee){
        setErr(false);
        
        
        if (success){
            history.push("/profile/myConf");  
          }  
          
    }
    else{
        
    }
}
//Modal theme
function ModalTheme (props){
    return (
        
        <div className="modal">
     <Modal
{...props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
<Modal.Header closeButton>
 
</Modal.Header>
<Modal.Body closeButton>
 <AjouterthemeModal/>
</Modal.Body>

</Modal>
 </div>
)
}

function AjouterthemeModal (){
    return(
        <div className="App4">
         

      
  <header className="App-header">
  <div id="root"></div>
<div className="container">
<div className="d-flex justify-content-center h-100">
 
            
            
             
              
<table class="table table-bordered">
<thead>
    <tr>
     
      <th scope="col">Name of the theme</th>
      <th scope="col">Description</th>
      <th scope="col">Add it to your list</th>
    </tr>
  </thead>
  <tbody>
        {TheDefaultThemes.map((Theme,index) => (
                            <tr key= {index} >
                          
                          <p  style={{color: "indianred"}}>{Theme.NameOfTheme}</p>
                       
                     
                          <th scope="row">{Theme.Description}</th>
                      <td>
                           <button class="btn btn-outline-danger "  onClick={()=>{
                               thSubmit(Theme);}}>
                             Add it 
            
                       </button>
                       
                      </td>
                      {add && <p>added</p>}
                       <br></br><br></br>
                            </tr>
                        
                 ))}    
  </tbody>
                      
                    </table>
                
                {erre && <div style={{color:'white'}}>{erre} ERROR try again !</div>}
               
           
        
</div>
</div>
  </header>
 
</div>
    )
}

useEffect(() => { 
     DefaultTheme ();
     
},[])

    return (
        <div className=" all">
             <header className="App-header">
  <div id="root"></div>
<div className="container">
<div className="d-flex justify-content-center h-100">
    <div className="card2">
       
        <div className="card-body">
            <form onSubmit={handleSubmit} >
            {loading && <div style={{color:'white'}}>Loading...</div>}
             {err && <div style={{color:'white'}}>{err} ERROR try again !</div>}
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Name Of Conference"  name="NameOfConference" id="NameOfConference" onChange={(e) => setNameOfConference(e.target.value)} />
                    
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Name Of Company"  name="NameOfCompany" id="NameOfCompany" onChange={(e) => setNameOfCompany(e.target.value)} />
                    
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i ></i></span>
                    </div>
                    <input type="date" className="form-control" placeholder="The Deadline"  name="TheDeadline" id="TheDeadline" onChange={(e) => setTheDeadline(e.target.value)} />
                    
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-quote-left"></i></span>
                    </div>
                   
                    <textarea className="form-control" placeholder="Little Definition Of Company"  name="LittleDefinitionOfCompany" id="LittleDefinitionOfCompany" onChange={(e) => setLittleDefinitionOfCompany(e.target.value)} ></textarea>
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-quote-left"></i></span>
                    </div>
                   
                    <textarea className="form-control" placeholder="About Company"  name="AboutCompany" id="AboutCompany" onChange={(e) => setAboutCompany(e.target.value)}></textarea>
                </div>
                <br></br>
               <a type="button" className="btn btn-danger" onClick={() => setModalShow(true)} style={{color:'white'}} > all themes</a>
                            <ModalTheme
                           show={modalShow}
                           onHide={() => setModalShow(false)}
                          />
                          <p style={{color:'white'}}>If you don't found your themes you can add it</p>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-quote-left"></i></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Name Of Theme"  name="NameOfTheme" id="NameOfTheme" onChange={(e) => setNameOfTheme(e.target.value)} />   
                    
                </div>
                 
                    <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-quote-left"></i></span>
                    </div> 
                    <textarea className="form-control" placeholder="  Description of the thème"  name="  Description" id="  Description" onChange={(e) => setDescription(e.target.value)}  ></textarea>
                &nbsp;  &nbsp; <button type="button" class="btn btn-outline-danger" onClick={Ajoutertheme} >Add</button>
    
                </div>
                  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;
                <span class="notification-badge badge badge-danger">{TheThemes.length}</span>
                <DropdownButton id="dropdown-item-button" title="Show the themes" variant="secondary">
                        {TheThemes.map((Theme,index) => (
                        <Dropdown.Item key= {index} style={{color:'black'}}>
                        {Theme.NameOfTheme} 
                        <button className="btn btn-outline-danger" onClick={() => removeTheme(index)}>x</button>
            
                </Dropdown.Item>
                 ))}    
                    </DropdownButton> 
                   

               <br></br>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-quote-left"></i></span>
                    </div>
                    
                    <textarea className="form-control" placeholder=" Eligibility"  name=" Eligibility" id=" Eligibility" onChange={(e) => setEligibility(e.target.value)} ></textarea>
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-quote-left"></i></span>
                    </div>
                    
                    <textarea className="form-control" placeholder="Funding"  name="Funding" id="Funding" onChange={(e) => setFunding(e.target.value)}></textarea>
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-quote-left"></i></span>
                    </div>
                    
                    <textarea className="form-control" placeholder="Condition Of Applicant"  name="ConditionOfApplicant" id="ConditionOfApplicant" onChange={(e) => setConditionOfApplicant(e.target.value)}></textarea>
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-quote-left"></i></span>
                    </div>
                   
                    <textarea className="form-control" placeholder="Opportunity Information"  name="OpportunityInformation" id="OpportunityInformation" onChange={(e) => setOpportunityInformation(e.target.value)} ></textarea>
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-quote-left"></i></span>
                    </div>
    
                    <textarea className="form-control" placeholder=" Educational Conditions"  name=" EducationalConditions" id=" EducationalConditions" onChange={(e) => setEducationalConditions(e.target.value)}></textarea>
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-quote-left"></i></span>
                    </div>
                
                    <textarea className="form-control" placeholder="Condition Of Artical"  name="ConditionOfArtical" id="ConditionOfArtical" onChange={(e) => setConditionOfArtical(e.target.value)}></textarea>
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-quote-left"></i></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Reading Commity"  name="ReadingCommitee" id="ReadingCommitee" onChange={e => setEvaluateur(e.target.value)}  />  &nbsp;  &nbsp; 
                    <button type="button" class="btn btn-outline-danger" onClick={EvalSubmit} >Add</button>
                </div> &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;
                <span class="notification-badge badge badge-danger">{ReadingCommitee.length}</span>
                        <DropdownButton id="dropdown-item-button" title="Show reading commity" variant="secondary"> 
                        {ReadingCommitee.map(({evaluateur},index) => (
                        <Dropdown.Item key= {index} style={{color:'black'}}>{evaluateur} <button className="btn btn-outline-danger" onClick={() => removeEva(index)}>x</button> </Dropdown.Item>
                       
                       

                 ))}    
                    </DropdownButton>  
                    {errR && <div style={{color:'white'}}>{errR} ERROR try again !</div>}
                <br></br> 
                <div className="form-group">
                    <input type="submit" value="Add Conference" className="btn float-right login_btn"/>
                </div>
            </form>
        </div>
        
    </div>
</div>
</div>
  </header>
        </div>
    )
}

export default AjouterConf
