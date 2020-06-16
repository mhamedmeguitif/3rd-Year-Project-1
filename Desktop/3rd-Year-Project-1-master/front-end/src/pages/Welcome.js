import React from 'react'
import Navbar1 from '../partiels/Navbar1';
import Footer from '../partiels/Footer';
import a from '../image/a.png';
import galery03 from '../image/galery03.jpg';
import background01 from '../pages/background01.jpg';
import pic from '../pic.jpg';
import './Welcome.css';
import { Slide } from 'react-slideshow-image';
function Welcome() {
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
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
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
         <h1 >Bienvenu chez <span style={{color: "indianred"}}>MyConf-Share</span>... </h1>
         <h6>Déposez votre article et participez a des conférences maintenant !</h6>
         <br></br><br></br>
         <button type="button" className="btn btn-danger" id="btn"> Inscription</button>
         <br></br><br></br><br></br><br></br><br></br><br></br><br></br> <br></br><br></br><br></br> <br></br><br></br><br></br> <br></br>
         <div className="text-center"> 
           <h2>Des conférences a vous proposez </h2>
         <br></br><br></br><br></br>
       
         <Slideshow/>
                         <br></br><br></br><br></br>
          <br></br><br></br><br></br>
          
          <a href="#" class="btn btn-dark btn-lg  " role="button" aria-pressed="true">Voir plus</a>
          </div>
        
           <br></br><br></br><br></br><br></br><br></br>
           
        <div className="classe1">
             <br></br><br></br><br></br> 
      
             <h5>Vous etes résponsable d'une conférence et vous cherchez  à la présentez au chercheurs ? </h5>
       
             <br></br><br></br>
             <a href="#" class="btn btn-danger  btn-lg " role="button" aria-pressed="true">Cliquez ici</a>
               <br></br><br></br><br></br>
          </div>
            <br></br><br></br>
         <div className="about" >
            <br></br> <br></br>
            <h2>About CONFERENCES</h2>
            <br></br>
            <p>C'est un site spéciales pour les chercheurs ! </p>
            <p>Ils facilite les taches pour les cher-men et les chercheurs dans un cadre professionnel ... </p>
            <a href="#" class="btn btn-dark  " role="button" aria-pressed="true">Voir plus d'informations</a>
           <br></br><br></br><br></br> 
         </div>
         <br></br><br></br><br></br>
    
         <div className="conf">
            <br></br>
            <h2>Des conférences déja qui sont déjà faites !</h2>
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
            <br></br>
          
            <a href="#" class="btn btn-dark  " role="button" aria-pressed="true">Voir plus de conférences qui sont déja faites</a>
         </div><br></br> <br></br>
         <br></br> <br></br><br></br> 

                 <div className="partenaires" >
                 <br></br> <br></br><br></br>
           <h2>Nos partenaires</h2> 
           <div class="container">
    <div class="row">
        <div class="col-12 col-lg-3">
            <div class="card" >
      <img class="card-img-top" src={a} alt="Card image cap"/>
      <div class="card-body">
        <p class="card-text">The higher school of computer science of Sidi Bel Abbes (ESI-SBA) has as main mission the training of state engineer in computer science.</p>
      
        <a href="#" class="">Esi-Sba</a>,
        <span class="_tm-user-role">
          
          higher school of computer science</span>
      </div>
    </div></div></div></div>
           <br></br><br></br> <br></br><br></br> <br></br><br></br> <br></br>
           <Footer/>
         </div>
        
       </div>

        
      
      
     </section>
      
    </div>


    );
}

export default Welcome


