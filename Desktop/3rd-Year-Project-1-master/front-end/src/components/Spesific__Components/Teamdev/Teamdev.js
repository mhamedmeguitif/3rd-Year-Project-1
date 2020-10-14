import React, {useContext} from 'react'
import {UserContext} from '../../Config__Global/UserContext'
import UserNavbar from '../../Global__components/NavBar/NavBarUser/UserNavbar'
import Navbar from '../../Global__components/NavBar/NavBar/Navbar1'
import Footer from '../../Global__components/Footer/Footer'
import image from '../../Global__Image/user.png'
import ikhlass from '../../Global__Image/ikhlass.jpg'
import moh from '../../Global__Image/moh.jpg'
import ramzi from '../../Global__Image/ramzi.jpg'
function Teamdev() {
    const { user } = useContext(UserContext);
    return (
        <div>
            {user ? <UserNavbar/>: <Navbar/> } 
            <br></br><br></br><br></br>
        <div className="container">
          <div className="page-header">
              <p className="title" id="timeline">Our Team</p>
          </div>
          <ul className="timeline">
              <li>
                <div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading text-center">
                  <br></br>
                  <img
                     width="150px" height="150px"
                          className="img-rounded img-responsive image1 "
                          src={ikhlass}
                          alt="profile pic"
                        />
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    <p style={{color:'black',fontSize: 20 }} className="timeline-title">Zeblah Ikhlass</p>
                   
                  </div>
                 
                  
                </div>
              </li>

              <li className="timeline-inverted">
                <div className="timeline-badge warning"><i className="glyphicon glyphicon-credit-card"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading text-center"> <br></br>
                  <img className="img-circle img-responsive center-block image2 "
                     width="150px" height="150px"
                         
                          src={moh}
                          alt="profile pic"
                        />
                        <br></br>  <br></br>
                        <br></br>
                        <br></br>
                    <p className="timeline-title" style={{color:'black',fontSize: 20 }}>Meguitif Mhammed</p>
                  </div>
                  
                </div>
              </li>
              <li>
                <div className="timeline-badge danger"><i className="glyphicon glyphicon-credit-card"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading text-center"> <br></br>
                  <img
                    
                          className="img-rounded img-responsive image1 "
                          src={image}
                          alt="profile pic" width="150px" height="150px"
                        />
                        <br></br>
                        <br></br>  <br></br>
                        <br></br>
                    <p className="timeline-title" style={{color:'black',fontSize: 20 }}>Taleb Douaa</p>
                  </div>
                 
              </div> </li>
              <li className="timeline-inverted">
                <div className="timeline-badge warning"><i className="glyphicon glyphicon-credit-card"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading text-center">  <br></br>
                  <img
                     width="150px" height="150px"
                          className="img-rounded img-responsive image1 "
                          src={ramzi}
                          alt="profile pic"
                        />
                        <br></br>
                        <br></br>  <br></br>
                        <br></br>
                    <p className="timeline-title" style={{color:'black',fontSize: 20 }}>Bouzeria Ramzi </p>
                  </div>
               
                </div>
              </li>
              <li>
                <div className="timeline-badge info"><i className="glyphicon glyphicon-floppy-disk"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading text-center">  <br></br>
                     <img
                     width="150px" height="150px"
                          className="img-rounded img-responsive image1 "
                          src={image}
                          alt="profile pic"
                        />
                        <br></br>
                        <br></br>   <br></br>
                        <br></br>
                    <p className="timeline-title" style={{color:'black',fontSize: 20 }}>Abdesselam lokman</p>
                   
                  </div>
                  
                </div>
              </li>
              
   
          </ul>
         
          <p className="title" id="timeline">Framed by</p>
          <p className="timeline-title" style={{color:'black',fontSize: 20 }}>Mr. Bensaber Omar Djamel</p>
                <br></br> <br></br> 
          <br></br><Footer/>
      </div>
        </div>
    )
}

export default Teamdev
