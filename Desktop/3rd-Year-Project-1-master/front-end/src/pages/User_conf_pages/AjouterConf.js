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
        
        
       
            history.push("/profile/myConf");  
          
          
    }
    else{
        
    }
}
//Modal de description du theme
function ModalTheme (props){
    return (
        
        <div className="modal">
     <Modal
{...props}
size="sm"

aria-labelledby="contained-modal-title-vcenter"
centered
>
<Modal.Header closeButton>
 Description : 
</Modal.Header>
<Modal.Body >
 <AjouterthemeModal />
</Modal.Body>

</Modal>
 </div>
)
}
// description de theme
function AjouterthemeModal (){
    return(
        <div className="App4">
         
    <p>{Description}</p>
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
                        <span className="input-group-text"><i >D/L</i></span>
                    </div>
                    
                    <input type="date" className="form-control" placeholder="The Deadline"  name="TheDeadline" id="TheDeadline" onChange={(e) => setTheDeadline(e.target.value)} />
                    
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-quote-left"></i></span>
                    </div>
                   
                    <textarea className="form-control" placeholder="Little Definition Of Company + the real date "  name="LittleDefinitionOfCompany" id="LittleDefinitionOfCompany" onChange={(e) => setLittleDefinitionOfCompany(e.target.value)} ></textarea>
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-quote-left"></i></span>
                    </div>
                   
                    <textarea className="form-control" placeholder="About Company"  name="AboutCompany" id="AboutCompany" onChange={(e) => setAboutCompany(e.target.value)}></textarea>
                </div>
                <br></br>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-quote-left"></i></span>
                    </div>
                    
                    <DropdownButton id="dropdown-item-button" title="Choose the topics for your conference  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; " variant="light"  >
                        {TheDefaultThemes.map((Theme,index) => (
                        <Dropdown.Item key= {index} style={{color:'black'}}>
                        {Theme.NameOfTheme} 
                       <button type="button" class="btn btn-light float-right" onClick={() => {setModalShow(true); setDescription(Theme.Description)}} >
                       <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-file-earmark-text-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2 3a2 2 0 0 1 2-2h5.293a1 1 0 0 1 .707.293L13.707 5a1 1 0 0 1 .293.707V13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3zm7 2V2l4 4h-3a1 1 0 0 1-1-1zM4.5 8a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
</svg>
                       </button>
                        <ModalTheme
                        
                           show={modalShow}
                           onHide={() => setModalShow(false)}
                          />
                           <button type="button" class="btn btn-light float-right " onClick={ () => thSubmit(Theme)} >
                           <svg style={{color:'indianred'}} width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"/>
</svg>
                           </button>
                        
                </Dropdown.Item>
                 ))}    
                    </DropdownButton> 
                    &nbsp;  &nbsp; 
                <DropdownButton id="dropdown-item-button" title="Show your themes" variant="secondary"  >
                        {TheThemes.map((Theme,index) => (
                        <Dropdown.Item key= {index} style={{color:'black'}}>
                        {Theme.NameOfTheme} 
                        <button className="btn btn-outline-danger float-right" onClick={() => removeTheme(index)}>X</button>
            
                </Dropdown.Item>
                 ))}    
                    </DropdownButton> 
                    <div>
                    <span class="notification-badge badge badge-danger">{TheThemes.length}</span>
                    </div>
                </div>
               
             
                    <br></br>
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
                &nbsp;  &nbsp; <button type="button" class="btn btn-danger" onClick={Ajoutertheme} >Add</button>
    
                </div>
                
                   
      
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
                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Reading Commity"  name="ReadingCommitee" id="ReadingCommitee" onChange={e => setEvaluateur(e.target.value)}  />  &nbsp;  &nbsp; 
                    <button type="button" class="btn btn-danger" onClick={EvalSubmit} >Add</button>
                    &nbsp;&nbsp;
                      <DropdownButton id="dropdown-item-button" title="Show reading commity" variant="secondary"> 
                        {ReadingCommitee.map((evaluateur,index) => (
                        <Dropdown.Item key= {index} style={{color:'black'}}>{evaluateur} <button className="btn btn-outline-danger" onClick={() => removeEva(index)}>x</button> </Dropdown.Item>
                       
                       

                 ))}    
                    </DropdownButton>
                    <div>
                        <span class="notification-badge badge badge-danger">{ReadingCommitee.length}</span>
                        
                    </div>
                </div>     
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
