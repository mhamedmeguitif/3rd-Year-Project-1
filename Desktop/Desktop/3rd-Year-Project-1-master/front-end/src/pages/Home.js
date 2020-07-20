import React, {useContext,useState,useEffect} from 'react'
import UserNavbar from '../partiels/UserNavbar';
import Footer from '../partiels/Footer';
import CardGroup from 'react-bootstrap/CardGroup'
import galery03 from '../image/galery03.jpg';
import Card from 'react-bootstrap/Card'
import {UserContext} from './UserContext'
import axios from 'axios' ;
import './Welcome.css';
import { Slide } from 'react-slideshow-image';
import a from '../image/a.png';
function Home() {
  const [confs, setConfs] = useState([])
 const { user, setUser } = useContext(UserContext);


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

 function AffConf(){

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
   AffConf();
}, [])
    return (
        <div className="App2" >
       <UserNavbar/>
        <div className="container">
         <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
         <h1 >Wellcome to <span style={{color: "indianred"}}>MyConf-Time</span>... </h1>
         <h6>Now, You can participate in conferences, choose one, or make one !</h6>
         <br></br><br></br><br></br><br></br>
         <br></br><br></br>
         <br></br><br></br><br></br><br></br><br></br><br></br><br></br> <br></br><br></br><br></br> <br></br><br></br><br></br> <br></br>
         <div className="text-center"> 
           <h2>Conferences for you : </h2>
           <br></br>
         <Slideshow/>
         <br></br>
         <a href="/AllConf" className="btn btn-dark btn-lg  " role="button" aria-pressed="true">See more</a>
          
         <br></br><br></br>
         </div>
         <h2>Our partenaires</h2> 
           <Card
      bg="Dark"
   
    
    style={{ width: '18rem' }}
    className="mb-2"
  >
    <Card.Header>The higher school of computer science of Sidi Bel Abbes (ESI-SBA) has as main mission the training of state engineer in computer science.</Card.Header>
    <Card.Body>
      <Card.Title>  </Card.Title>
      <Card.Text>
      <img class="card-img-top" src={a} alt="Card image cap"/>
      
      </Card.Text>
    </Card.Body>
  </Card>
         
         
        <Footer/>
         </div>
        
            
        </div>
    )
}

export default Home
