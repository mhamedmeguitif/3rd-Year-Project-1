import React from 'react'
import cc from '../../Global__Image/cc.png';
import ev from '../../Global__Image/ev.png';
import slm from '../../Global__Image/slm.png';
import user2 from '../../Global__Image/user.png';
import Navbar1 from '../../Global__components/NavBar/NavBar/Navbar1';
import Footer from '../../Global__components/Footer/Footer';
import a from '../../Global__Image/a.png';
import ddd from '../../Global__Image/ddd.jpg';
import Card from 'react-bootstrap/Card'
import iStock from '../../Global__Image/4.jpg';
import CardGroup from 'react-bootstrap/CardGroup'
import background01 from '../../Global__Image/background01.jpg';
import pic from '../../Global__Image/pic.jpg';
import '../Wellcome/Welcome.css';
import { Slide } from 'react-slideshow-image';
import SigninModal from '../../Spesific__Components/Registration/Sign__in/Sign__in__Modal/SigninModal';

function Welcome() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
   //fonction pour le back ground 
  var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: "url(" + { background01 } +")"
  
  };

 


    return (

        <div className="App2" >
        <section style={ sectionStyle }> 
         <Navbar1/>
        <div  >
         <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
         <div className="wel">
           <h1 >Welcome to <span style={{color: "indianred"}}>MyConf-Time</span>... </h1>
         <h6>Drop off your article and attend conferences now!</h6>
         <br></br><br></br>
         <button type="button" className="btn btn-danger" id="btn" onClick={() => setModalShow(true)}> Start Now</button>
         <SigninModal
                           show={modalShow}
                           onHide={() => setModalShow(false)}
                          />
         </div>
          
         
          
        <br></br><br></br><br></br> <br></br><br></br><br></br>
       <br></br> <br></br> 
        
             <p style={{fontSize:'40',color:'#dd0a37'}}>What can you do?</p>
             <br></br><br></br><br></br>
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
    <img alt="" src={cc}  width="200px" height="200px"  className="rounded"/> 
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
            <br></br> <br></br>
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
             <button  className="btn btn-danger  btn-lg "  aria-pressed="true" onClick={() => setModalShow(true)}>Clic here</button>
             <SigninModal
                           show={modalShow}
                           onHide={() => setModalShow(false)}
                          />
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
        
            <a href="#" class="btn btn-dark  " role="button" aria-pressed="true">Voir plus de conférences qui sont déja faites</a>
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
         
          
         </div>
        
       

        
       <Footer/>
      
     </section>
      
    </div>


    );
}

export default Welcome


