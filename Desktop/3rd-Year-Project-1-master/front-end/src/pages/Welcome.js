import React from 'react'
import Navbar1 from '../partiels/Navbar1';
import Footer from '../partiels/Footer';
import a from '../image/a.png';
import Card from 'react-bootstrap/Card'
import galery03 from '../image/galery03.jpg';
import background01 from '../pages/background01.jpg';
import pic from '../pic.jpg';
import './Welcome.css';
import { Slide } from 'react-slideshow-image';
import SigninModal from '../pages/SigninModal';

function Welcome() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
   //fonction pour le back ground 
  var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: "url(" + { background01 } +")"
  
  };

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
                      <div className="col-md-4" >
                        <div className="item-box-blog">
                          <div className="item-box-blog-image">
                         
                            <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">30 oct</span> </div>
                            
                            <figure> <img alt="" src={galery03} /> </figure>
                          </div>
                          <div className="item-box-blog-body">
                           
                            <div className="item-box-blog-heading">
                              <a tabindex="0">
                                <h5>News Title</h5>
                              </a>
                            </div>
                          
                            <div className="item-box-blog-data" >
                              <p><i className="fa fa-user-o"></i> Admin, <i className="fa fa-comments-o"></i> Comments(3)</p>
                            </div>
                         
                            <div className="item-box-blog-text">
                              <p>Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor.</p>
                            </div>
                            <div className="mt"> <a tabindex="0" className="btn bg-blue-ui white read" onClick={() => setModalShow(true)}>read more</a> 
                            <SigninModal
                           show={modalShow}
                           onHide={() => setModalShow(false)}
                          /> </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4" >
                        <div className="item-box-blog">
                          <div className="item-box-blog-image">
                           
                            <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">24 avr</span> </div>
                           
                            <figure> <img alt="" src={galery03} /> </figure>
                          </div>
                          <div className="item-box-blog-body">
                            
                            <div className="item-box-blog-heading">
                              <a tabindex="0">
                                <h5>News Title</h5>
                              </a>
                            </div>
                          
                            <div className="item-box-blog-data" >
                              <p><i className="fa fa-user-o"></i> Admin, <i className="fa fa-comments-o"></i> Comments(3)</p>
                            </div>
                          
                            <div className="item-box-blog-text">
                              <p>Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor.</p>
                            </div>
                            <div className="mt"> <a tabindex="0" className="btn bg-blue-ui white read" onClick={() => setModalShow(true)}>read more</a> 
                            <SigninModal
                           show={modalShow}
                           onHide={() => setModalShow(false)}
                          /> </div>
                           
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
                            <div className="mt"> <a tabindex="0" className="btn bg-blue-ui white read" onClick={() => setModalShow(true)}>read more</a> 
                            <SigninModal
                           show={modalShow}
                           onHide={() => setModalShow(false)}
                          /> </div>
                           
                          </div>
                        </div></div></div></div>
                  
          </div>
          <div className="each-slide" >
            
          <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-4" >
                        <div className="item-box-blog">
                          <div className="item-box-blog-image">
                         
                            <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">30 oct</span> </div>
                            
                            <figure> <img alt="" src={galery03} /> </figure>
                          </div>
                          <div className="item-box-blog-body">
                           
                            <div className="item-box-blog-heading">
                              <a tabindex="0">
                                <h5>News Title</h5>
                              </a>
                            </div>
                          
                            <div className="item-box-blog-data" >
                              <p><i className="fa fa-user-o"></i> Admin, <i className="fa fa-comments-o"></i> Comments(3)</p>
                            </div>
                         
                            <div className="item-box-blog-text">
                              <p>Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor.</p>
                            </div>
                             <div className="mt"> <a tabindex="0" className="btn bg-blue-ui white read" onClick={() => setModalShow(true)}>read more</a> 
                            <SigninModal
                           show={modalShow}
                           onHide={() => setModalShow(false)}
                          /> </div> 
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4" >
                        <div className="item-box-blog">
                          <div className="item-box-blog-image">
                           
                            <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">24 avr</span> </div>
                           
                            <figure> <img alt="" src={galery03} /> </figure>
                          </div>
                          <div className="item-box-blog-body">
                            
                            <div className="item-box-blog-heading">
                              <a tabindex="0">
                                <h5>News Title</h5>
                              </a>
                            </div>
                          
                            <div className="item-box-blog-data" >
                              <p><i className="fa fa-user-o"></i> Admin, <i className="fa fa-comments-o"></i> Comments(3)</p>
                            </div>
                          
                            <div className="item-box-blog-text">
                              <p>Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor.</p>
                            </div>
                            <div className="mt">  <div className="mt"> <a tabindex="0" className="btn bg-blue-ui white read" onClick={() => setModalShow(true)}>read more</a> 
                            <SigninModal
                           show={modalShow}
                           onHide={() => setModalShow(false)}
                          /> </div> </div>
                           
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
                            <div className="mt"> <a tabindex="0" className="btn bg-blue-ui white read" onClick={() => setModalShow(true)}>read more</a>
                            <SigninModal
                           show={modalShow}
                           onHide={() => setModalShow(false)}
                          />
                             </div>
                           
                          </div>
                        </div></div></div></div>
          </div>
          <div className="each-slide">
           
          <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-4" >
                        <div className="item-box-blog">
                          <div className="item-box-blog-image">
                         
                            <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">30 oct</span> </div>
                            
                            <figure> <img alt="" src={galery03} /> </figure>
                          </div>
                          <div className="item-box-blog-body">
                           
                            <div className="item-box-blog-heading">
                              <a tabindex="0">
                                <h5>News Title</h5>
                              </a>
                            </div>
                          
                            <div className="item-box-blog-data" >
                              <p><i className="fa fa-user-o"></i> Admin, <i className="fa fa-comments-o"></i> Comments(3)</p>
                            </div>
                         
                            <div className="item-box-blog-text">
                              <p>Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor.</p>
                            </div>
                            <div className="mt"> <a tabindex="0" className="btn bg-blue-ui white read" onClick={() => setModalShow(true)}>read more</a> </div>
                            <SigninModal
                           show={modalShow}
                           onHide={() => setModalShow(false)}
                          />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4" >
                        <div className="item-box-blog">
                          <div className="item-box-blog-image">
                           
                            <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">24 avr</span> </div>
                           
                            <figure> <img alt="" src={galery03} /> </figure>
                          </div>
                          <div className="item-box-blog-body">
                            
                            <div className="item-box-blog-heading">
                              <a tabindex="0">
                                <h5>News Title</h5>
                              </a>
                            </div>
                          
                            <div className="item-box-blog-data" >
                              <p><i className="fa fa-user-o"></i> Admin, <i className="fa fa-comments-o"></i> Comments(3)</p>
                            </div>
                          
                            <div className="item-box-blog-text">
                              <p>Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor.</p>
                            </div>
                            <div className="mt"> <a tabindex="0" className="btn bg-blue-ui white read" onClick={() => setModalShow(true)}>read more</a> 
                            <SigninModal
                           show={modalShow}
                           onHide={() => setModalShow(false)}
                          /> </div>
                           
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
                            <div className="mt"> <a tabindex="0" className="btn bg-blue-ui white read" onClick={() => setModalShow(true)}>read more</a> 
                            <SigninModal
                           show={modalShow}
                           onHide={() => setModalShow(false)}
                          /> </div>
                           
                          </div>
                        </div></div></div></div>
          </div>
          
        </Slide>
      </div>
    )
}

    return (

        <div className="App2" >
        <section style={ sectionStyle }> 
         <Navbar1/>
        <div className="container">
         <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
         <h1 >Wellcome to <span style={{color: "indianred"}}>MyConf-Time</span>... </h1>
         <h6>Drop off your article and attend conferences now!</h6>
         <br></br><br></br>
         <button type="button" className="btn btn-danger" id="btn" onClick={() => setModalShow(true)}> Start Now</button>
         <SigninModal
                           show={modalShow}
                           onHide={() => setModalShow(false)}
                          />
          
         <br></br><br></br><br></br><br></br><br></br><br></br><br></br> <br></br><br></br><br></br> <br></br><br></br><br></br> <br></br>
         <div className="text-center"> 
           <h2>Conferences for you : </h2>
         <br></br><br></br><br></br>
       
         <Slideshow/>
                         <br></br><br></br><br></br>
          
          
          <a href="#" className="btn btn-dark btn-lg  " role="button" aria-pressed="true" onClick={() => setModalShow(true)}>See more</a>
          <SigninModal
                           show={modalShow}
                           onHide={() => setModalShow(false)}
                          />
          </div>
        
           <br></br><br></br><br></br>
           
        <div className="classe1">
             <br></br><br></br><br></br> 
      
             <h5>Are you responsible for a conference and you are looking to present it to researchers? </h5>
       
             <br></br><br></br>
             <a href="#" class="btn btn-danger  btn-lg " role="button" aria-pressed="true">Clic here</a>
               <br></br><br></br><br></br>
          </div>
            <br></br><br></br>
         <div className="about" >
            <br></br> <br></br>
            <h2>About MyConf-Share</h2>
            <br></br>
            <p>This is a special site for researchers!</p>
            <p>It facilitates tasks for dear men and researchers in a professional setting ... </p>
            <a href="#" class="btn btn-dark  " role="button" aria-pressed="true">See more informations</a>
           <br></br><br></br><br></br> 
         </div>
         <br></br><br></br><br></br>
    
         <div className="conf">
            <br></br>
            <h2>Conferences already made!</h2>
            <br></br>
            <div className="each-slide">
           
           <div className="carousel-inner">
                   <div className="carousel-item active">
                     <div className="row">
                       <div className="col-md-4" >
                         <div className="item-box-blog">
                           <div className="item-box-blog-image">
                          
                             <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">30 oct</span> </div>
                             
                             <figure> <img alt="" src={galery03} /> </figure>
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
                            
                             <figure> <img alt="" src={galery03} /> </figure>
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
                         </div></div></div></div>
           </div>
            
          
            <a href="#" class="btn btn-dark  " role="button" aria-pressed="true">Voir plus de conférences qui sont déja faites</a>
         </div><br></br> <br></br>
         <br></br> <br></br><br></br> 
         <br></br><br></br> <br></br>

         <h2>Our partenaires :</h2> 
         <br></br> 
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
          
           <br></br><br></br> <br></br><br></br> <br></br>
           <Footer/>
         </div>
        
       

        
      
      
     </section>
      
    </div>


    );
}

export default Welcome


