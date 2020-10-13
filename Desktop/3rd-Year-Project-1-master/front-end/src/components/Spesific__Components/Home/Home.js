import React, {useContext,useState,useEffect} from 'react'
import UserNavbar from '../../Global__components/NavBar/NavBarUser/UserNavbar';
import Footer from '../../Global__components/Footer/Footer';
import CardGroup from 'react-bootstrap/CardGroup'
import galery03 from '../../Global__Image/galery03.jpg';
import Card from 'react-bootstrap/Card'
import iStock from '../../Global__Image/4.jpg';
import pic from '../../Global__Image/pic.jpg';
import cc from '../../Global__Image/cc.png';
import ev from '../../Global__Image/ev.png';
import slm from '../../Global__Image/slm.png';
import ddd from '../../Global__Image/ddd.jpg';
import user2 from '../../Global__Image/user.png';
import {UserContext} from '../../Config__Global/UserContext'
import axios from 'axios' ;
import '../../Spesific__Components/Wellcome/Welcome.css';
import { Slide } from 'react-slideshow-image';
import a from '../../Global__Image/a.png';
import { Button } from 'react-bootstrap';
function Home() {
  const [confs, setConfs] = useState([])
 const { user, setUser } = useContext(UserContext);


 //les proprieté des sliders
 const properties = {
  duration: 3000,
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
                     <div className="item-box-blog-body" style={{height:'200'}}>
                      
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
                       
                     </div><div className="mt"> <a href={"/AllConf/"+conf._id} tabindex="0" className="btn bg-blue-ui white read">read more</a> </div>
                       
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
                     <div className="item-box-blog-body" style={{height:'200'}}>
                      
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
                      
                     </div><div className="mt"> <a href={"/AllConf/"+conf._id} tabindex="0" className="btn bg-blue-ui white read">read more</a> </div>
                       
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
        <div>
         <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
         
         <div className="wel">
         <h1 >Welcome to <span style={{color: "indianred"}}>MyConf-Time</span>... </h1>
         <h6>Now, You can participate in conferences, choose one, or make one !</h6> 
          <br></br>
         <br></br>
         <a type="button" className="btn btn-danger" id="btn" href="/allConf" > See conferences</a> 
         </div>
      <br></br><br></br><br></br> <br></br><br></br><br></br> <br></br>
         <div className="conf1"> 
        
<p className="Title__Header" style={{color:"#dd0a37", fontSize:'40'}}>Conferences for you :</p> 
         <br></br> 
           <br></br>
         <Slideshow/>
         <a href="/allConf" class="btn btn-dark btn-lg " role="button" aria-pressed="true">See more</a>
        
        </div>
        <p style={{fontSize:'40',color:'#dd0a37'}}>What can you do?</p>
             <br></br> <br></br><br></br>
        <div class="pics row text-center">
    <div class="col">
    <img alt="" src={user2}  width="200px" height="200px"  className="rounded"/> 
    <br></br> <br></br>
    <p className="Title__Header text-center" style={{color:"red", fontSize:'20'}}>You can sign up for free</p>
    </div>
    <div class="col">
    <img alt="" src={slm}  width="200px" height="200px"  className="rounded"/> 
    <br></br> <br></br>
    <p className="Title__Header text-center" style={{color:"black", fontSize:'20'}}>You can create your own conferences</p>
    </div>
    <div class="col">
    <img alt="" src={cc}  width="250px" height="215px"  className="rounded"/> 
    <br></br> <br></br>
    <p className="Title__Header text-center" style={{color:"red", fontSize:'20'}}>You can participate on conferences</p>
    </div>
    <div class="col">
    <img alt="" src={ev}  width="200px" height="200px"  className="rounded"/> 
    <br></br> <br></br>
    <p className="Title__Header text-center" style={{color:"black", fontSize:'20'}}>You can be an evalutor in conference</p>
    </div>
  </div>
          <br></br> 
           <br></br>
        <br></br> 
           <br></br>
       <div className="about row "  >
            
            <div className="col">
    <img alt="" src={ddd}  width="635px" height="500px"  className="rounded"/> 
    </div>
            <div className="col">
            <br></br> <br></br>
<p className="Title__Header" style={{color:"black", fontSize:'40'}}>About MyConf-Time</p> 
            
            <br></br>
            <p style={{color:"white", fontSize:'25'}}>This is a special website for researchers!</p>
            <p style={{color:"white", fontSize:'25'}}>It facilitates tasks for cher men and researchers in a professional setting ... </p>
            <br></br> <br></br>  <br></br> <br></br>
            <a href="#" class="btn btn-dark  " role="button" aria-pressed="true">See more informations</a>
           <br></br><br></br><br></br> 
            </div>
            
         </div>
         <br></br><br></br><br></br>
        <div className="classe1 ">
          
             <br></br><br></br><br></br> 
      
             <p style={{fontSize:'28'}}>Are you responsible for a conference and you are looking to present it to researchers? </p>
       
             <br></br><br></br>
             <a href="profile/myConf" className="btn btn-danger  btn-lg "  aria-pressed="true" >Clic here</a>
            
               <br></br><br></br><br></br>
          </div>
            <br></br><br></br><br></br> 
            <div className="why">
  <div className="row">
    <div className="col">
      <br></br>  
    <p className="Title__Header" style={{color:"#dd0a37", fontSize:'40'}}>Why choose us ?</p> 
      <p style={{color:"#DEDDD3", fontSize:'25'}}> To us, it's not just work - we take pride in the solutions we deliver. We encourage each other to achieve excellence in all endeavours and aren't satisfied until projects meet our own personal high standards. Please take a look at <a href="#" style={{color:'indianred'}}>Our Process</a>  page to see how we will bring your project into existance. </p>
    </div>
    <div className="col">
    <img alt="" src={iStock}  width="635px" height="500px"  className="rounded"/> 
    </div>
    
  </div>

</div>

 <br></br><br></br> 

         
    
         <div className="conf" style={{height:755}}>
            <br></br><br></br>
            <p style={{fontSize:'40',color:'#dd0a37'}}>Conferences already made!</p>
            <br></br> <br></br> <br></br>
       
        
                     <div className="row">
                       <div className="col-md-4" >
                         <div className="item-box-blog">
                           <div className="item-box-blog-image">
                          
                             <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">30 oct</span> </div>
                             
                             <figure> <img alt="" src={pic} /> </figure>
                           </div>
                           <div className="item-box-blog-body">
                            
                             <div className="item-box-blog-heading">
                               <a href="#" tabindex="0">
                                 <h5>News Title</h5>
                               </a>
                             </div>
                           
                             <div className="item-box-blog-data" >
                               <p><i className="fa fa-user-o"></i> Admin, <i className="fa fa-comments-o"></i> Comments(3)</p>
                             </div>
                          
                             <div className="item-box-blog-text">
                               <p>Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor.</p>
                             </div>
                             <div className="mt"> <a href="#" tabindex="0" className="btn bg-blue-ui white read">read more</a> </div>
                             
                           </div>
                         </div>
                       </div>
                       <div className="col-md-4" >
                         <div className="item-box-blog">
                           <div className="item-box-blog-image">
                            
                             <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">24 avr</span> </div>
                            
                             <figure> <img alt="" src={pic} /> </figure>
                           </div>
                           <div className="item-box-blog-body">
                             
                             <div className="item-box-blog-heading">
                               <a href="#" tabindex="0">
                                 <h5>News Title</h5>
                               </a>
                             </div>
                           
                             <div className="item-box-blog-data" >
                               <p><i className="fa fa-user-o"></i> Admin, <i className="fa fa-comments-o"></i> Comments(3)</p>
                             </div>
                           
                             <div className="item-box-blog-text">
                               <p>Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor.</p>
                             </div>
                             <div className="mt"> <a href="#" tabindex="0" className="btn bg-blue-ui white read">read more</a> </div>
                            
                           </div>
                         </div>
                       </div>
                       <div className="col-md-4" >
                         <div className="item-box-blog">
                           <div className="item-box-blog-image">
                            
                             <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">5 juil</span> </div>
                             
                             <figure> <img alt="" src={pic} /> </figure>
                           </div>
                           <div className="item-box-blog-body">
                           <p>Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor.</p>
                             </div>

                             <div className="mt"> <a href="#" tabindex="0" className="btn bg-blue-ui white read">read more</a> </div>
                            
                           </div>
                         </div></div>
       
            <br></br><br></br> <br></br>
        
            <a href="#" class="btn btn-dark  " role="button" aria-pressed="true">See more</a>
         </div>
          
         <div className="partenaires "> <br></br>
<p style={{fontSize:'40',color:'#dd0a37'}}>Our partenaires :</p>
        
         <br></br> <br></br> <br></br> 
         <CardGroup>

         <Card
      bg="Secondary"
      border="danger"
    
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
  <Card
      bg="Dark"
   
      border="danger"
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
   <Card
      bg="Secondary"
   
      border="danger"
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
  <Card
      bg="Dark"
   
      border="danger"
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
  
  </CardGroup>
          
           <br></br><br></br> 
         </div>
         
          
        
        
        
       
         
        <Footer/>
         </div>
        
            
        </div>
    )
}

export default Home
