import React, { useState, useEffect,useContext } from 'react'
import {useParams}from 'react-router'
import axios from 'axios' ;
import UserNavbar from '../../../Global__components/NavBar/NavBarUser/UserNavbar';
import Footer from '../../../Global__components/Footer/Footer';
import '../../Wellcome/Welcome.css';
import { Slide } from 'react-slideshow-image';
import {UserContext} from '../../../Config__Global/UserContext'
import galery03 from '../../../Global__Image/galery03.jpg';
import Card from 'react-bootstrap/Card'
import AjouterArticleModal from '../../../Spesific__Components/User_article_pages/AjouterArticleModal/AjouterArticleModal'
function PublicConf() {
    const {id}=useParams();
    const { user, setUser } = useContext(UserContext);
    const [conf, setconf] = useState({})
    const [confs, setConfs] = useState([])
    const [themes, setthemes] = useState([])
    const [modalShow, setModalShow] = React.useState(false);
function AfficherConf (){
    

      
axios
.get(`http://localhost:3000/conferences/${id}`,{headers:{"Content-Type" : "application/json" , 'Accept' : 'application/json',
'Authorization' : `Bearer ${user.token}`}})
.then( (res) =>{
    setconf(res.data)
    setthemes(res.data.TheThemes)
console.log(res)
})

}
 //les proprieté des sliders
 const properties = {
    duration: 2000,
    transitionDuration: 450,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
      
    }
  }
  
  const Slideshow = () => {
      return (
        <div className="slide-container">
          <Slide {...properties}>
            <div className="each-slide">
           
              
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                      {confs.map((conf,index) => (  index < 3 ? (
                       
                   <div className="col-md-4" key= {index}>
                     <div className="item-box-blog">
                       <div className="item-box-blog-image">
                      
                         <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">{conf.TheDeadline[0]+conf.TheDeadline[1]+conf.TheDeadline[2]+conf.TheDeadline[3]+conf.TheDeadline[4]+conf.TheDeadline[5]+conf.TheDeadline[6]+conf.TheDeadline[7]+conf.TheDeadline[8]+conf.TheDeadline[9]}</span> </div>
                         
                         <figure> <img alt="" src={galery03} /> </figure>
                       </div>
                       <div className="item-box-blog-body">
                        
                         <div className="item-box-blog-heading">
                           <a href={"/AllConf/"+conf._id} tabindex="0">
                           <h5>{conf.NameOfConference}</h5>
                           </a>
                         </div>
                       
                         <div className="item-box-blog-data" >
                           <p><i className="fa fa-user-o"></i> Admin, <i className="fa fa-comments-o"></i> Comments(3)</p>
                         </div>
                      
                         <div className="item-box-blog-text">
                         <p>{conf.LittleDefinitionOfCompany}</p>
                         </div>
                         <div className="mt"> <a href={"/AllConf/"+conf._id} tabindex="0" className="btn bg-blue-ui white read">read more</a> </div>
                         
                       </div>
                     </div>
                   </div> 
                      ) 
                
              : <div></div>
               
                 
       
              
       ))}
       </div></div></div> </div>
       <div className="each-slide">
           
              
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                      {confs.map((conf,index) => (  index >2  && index<6 ? (
                       
                   <div className="col-md-4" key= {index}>
                     <div className="item-box-blog">
                       <div className="item-box-blog-image">
                      
                         <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">{conf.TheDeadline[0]+conf.TheDeadline[1]+conf.TheDeadline[2]+conf.TheDeadline[3]+conf.TheDeadline[4]+conf.TheDeadline[5]+conf.TheDeadline[6]+conf.TheDeadline[7]+conf.TheDeadline[8]+conf.TheDeadline[9]}</span> </div>
                         
                         <figure> <img alt="" src={galery03} /> </figure>
                       </div>
                       <div className="item-box-blog-body">
                        
                         <div className="item-box-blog-heading">
                           <a href={"/AllConf/"+conf._id} tabindex="0">
                           <h5>{conf.NameOfConference}</h5>
                           </a>
                         </div>
                       
                         <div className="item-box-blog-data" >
                           <p><i className="fa fa-user-o"></i> Admin, <i className="fa fa-comments-o"></i> Comments(3)</p>
                         </div>
                      
                         <div className="item-box-blog-text">
                         <p>{conf.LittleDefinitionOfCompany}</p>
                         </div>
                         <div className="mt"> <a href={"/AllConf/"+conf._id} tabindex="0" className="btn bg-blue-ui white read">read more</a> </div>
                         
                       </div>
                     </div>
                   </div> 
                      ) 
                
              : <div></div>
               
                 
       
              
       ))}
       </div></div></div> </div>
                    
          
          </Slide>
        </div>
      )
  }
  
   function AffConfs(){
  
      axios
      .get ('http://localhost:3000/conferences',{headers:{"Content-Type" : "application/json" , 'Accept' : 'application/json',
      'Authorization' : `Bearer ${user.token}`}})
      .then( (res) =>{
          console.log('confs of bdd');
          const t =res.data;
          setConfs(t);
          console.log(confs);
      })
   }
useEffect(() => {
    AffConfs();
  AfficherConf();
}, [])
    return (
        <div >
        <UserNavbar/>
        <img className="rounded" style={{height:400, width:1500}} src={galery03} />
         <div className="container">
             <br></br><br></br><br></br>
          <p style ={{fontSize:40}} >{conf.NameOfConference} </p>
                <div className="row">
                    <div className="col">
                    <br></br><br></br>
         <h2>AboutCompany</h2>
         <br></br><br></br>
        <p style ={{fontSize:20}}>{conf.AboutCompany} </p>
                    </div>
                  <div className="col">
                       <br></br><br></br>
          <Card style={{ width: '28rem' , float:'right'}}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted" style ={{fontSize:20}} >Dead line :</Card.Subtitle>
    <Card.Text>
    {conf.TheDeadline}
    </Card.Text>
    <br></br>
    <Card.Subtitle className="mb-2 text-muted" style ={{fontSize:20}}>Name of Company :</Card.Subtitle>
    <Card.Text style ={{fontSize:30}}>
   {conf.NameOfCompany}
    </Card.Text>
    <br></br>
    <Card.Subtitle className="mb-2 text-muted" style ={{fontSize:20}}> Little Definition Of Company :</Card.Subtitle>
    <Card.Text style ={{fontSize:20}}>
   {conf. LittleDefinitionOfCompany}
    </Card.Text>
    <br></br><br></br>
    <a type="button" className="btn btn-danger btn-lg" onClick={() => setModalShow(true)} style={{color:'white'}} > Participate NOW </a>
                           <AjouterArticleModal 
                           id={id}
                           show={modalShow}
                           onHide={() => setModalShow(false)}
                          />
  </Card.Body>
</Card>
                  </div>
                </div>
               
         <div className="text-center lm"> 
         <br></br> <br></br>
            <h2> Eligibility :</h2>
            <br></br>
         <p style ={{fontSize:20}}> {conf.Eligibility}</p> 
         <br></br> <br></br> 
         </div>
        
         <div className="text-center "> 
         <br></br> <br></br>
            <h2> Funding:</h2>
            <br></br>
         <p style ={{fontSize:20}}> {conf.Funding}</p>  
         <br></br> <br></br>
         </div>
         
         <div className="text-center lm"><br></br> <br></br>
            <h2> Condition Of Applicant:</h2>
            <br></br>
         <p style ={{fontSize:20}}> {conf.ConditionOfApplicant}</p>  
         <br></br> <br></br>
         </div>
         
         <div className="text-center"><br></br> <br></br>
            <h2> Opportunity Information:</h2>
            <br></br>
         <p style ={{fontSize:20}}> {conf.OpportunityInformation}</p> <br></br> <br></br> 
         </div>
         
         <div className="text-center lm">
             <br></br> <br></br>
<h2> Topics :</h2>
         <br></br>
         <table class="table">
  <thead>
    <tr>
    <th scope="col">nb</th>
      <th scope="col">Topic</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
  {themes.map((Theme,index) => (
      <tr key= {index}>
      <th scope="row">{index +1}</th>
  <td>{Theme.NameOfTheme}</td>
      <td> {Theme.Description} </td>
    </tr>
  ))}
  </tbody></table>
  <br></br> <br></br>
         </div>
         
         
         <div className="text-center ">
             <br></br> <br></br>
            <h2>  Educational Conditions:</h2>
            <br></br>
         <p style ={{fontSize:20}}> {conf. EducationalConditions}</p>  
         <br></br> <br></br>
         </div>
        
         <div className="text-center lm"> <br></br> <br></br>
            <h2>   Condition Of Artical:</h2>
            <br></br>
         <p style ={{fontSize:20}}> {conf. ConditionOfArtical}</p>
         <br></br> <br></br><br></br>
    <a type="button" className="btn btn-danger btn-lg" onClick={() => setModalShow(true)} style={{color:'white'}} > Participate NOW </a>
                           <AjouterArticleModal
                           id={id}
                           show={modalShow}
                           onHide={() => setModalShow(false)}
                          />
         <br></br><br></br>  
         
         </div>
          <div className="text-center">
               <br></br> <br></br><br></br><br></br> <br></br>
            <h2>Maybe it's intrensting you : </h2>
            <br></br>
          <Slideshow/>
          <br></br>
          
          <br></br>
          </div>
          
          
          
         <Footer/>
          </div>
         
             
         </div>
    )
}

export default PublicConf
