import React, {useContext} from 'react'
import {UserContext} from '../../Config__Global/UserContext'
import UserNavbar from '../../Global__components/NavBar/NavBarUser/UserNavbar'
import Navbar from '../../Global__components/NavBar/NavBar/Navbar1'
import Footer from '../../Global__components/Footer/Footer'
import './About.css'
function About() {
    const { user } = useContext(UserContext); 
    return (

        <div>
           {user ? <UserNavbar/>: <Navbar/> } 
            <div className="row">
      <div className="col-md-12 text-center">
         <br></br><br></br>
          <p className="title">About MyConf-Time</p>
          <br></br>
          <p style={{fontSize:'20'}}>Welcome To MyConf-Time, a conference management system   </p>
          <p style={{fontSize:'20'}}>was designed to help conference organisers to cope with the big conferences</p>
      </div>
  </div>
  <br></br><br></br><br></br>
  <div className="row">
      <div className="col-md-12 text-center">
         
          
          <p className="title">Vision</p>
          <br></br><br></br>
          <p style={{fontSize:'20'}}>Create equal opportunities for all scientists around the world
          </p>
          <p style={{fontSize:'20'}}>    through the possibility of organize national and international conferences </p>
      </div>
  </div>
  <br></br>
  <div className="row">
      <div className="col-md-12 text-center">
         <br></br> <br></br>
        
          <p className="title">Mission</p>
          <br></br><br></br>
          <p style={{fontSize:'20'}}>MyConf-Time's mission is simple: to connect scientists around the world </p>
          <p style={{fontSize:'20'}}>to make them more efficient and professional.</p>
      </div>
  </div>
   
        <br></br><br></br>
      
        <br></br><br></br><br></br>
        <div className="container">
          <div className="page-header">
              <p className="title" id="timeline">Our Story</p>
          </div>
          <ul className="timeline">
              <li>
                <div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <p style={{color:'black',fontSize: 20 }} className="timeline-title">Our start</p>
                   
                  </div>
                  <div className="timeline-body">
                    <p></p>
                  </div>
                </div>
              </li>

              <li className="timeline-inverted">
                <div className="timeline-badge warning"><i className="glyphicon glyphicon-credit-card"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <p className="timeline-title" style={{color:'black',fontSize: 20 }}>How we met</p>
                  </div>
                  <div className="timeline-body">
                      <br></br> <br></br>
                    <p  style={{color:'black',fontSize: 15 }}> We are all students in the same school who have choosen this project</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-badge danger"><i className="glyphicon glyphicon-credit-card"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <p className="timeline-title" style={{color:'black',fontSize: 20 }}>Our Achievements</p>
                  </div><br></br> <br></br>
                  <div className="timeline-body">
                    <p style={{color:'black',fontSize: 15 }}>
                    management and monitoring of the program committee<br></br> <br></br>
sophisticated and flexible management of the access of PC members and referees to papers and conflicts of interests<br></br> <br></br>
automatic paper submission<br></br> <br></br>
paper assignment based on the preferences of PC members<br></br> <br></br>
list of the latest events<br></br> <br></br>
submission of reviews
                    </p>
                </div>
              </div> </li>
              <li className="timeline-inverted">
                <div className="timeline-badge warning"><i className="glyphicon glyphicon-credit-card"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <p className="timeline-title" style={{color:'black',fontSize: 20 }}>Our vision for this project</p>
                  </div>
                  <div className="timeline-body">
                  <br></br> <br></br>
                    <p style={{color:'black',fontSize: 15 }}>

                    conference management system that is flexible, easy to use, and has many features <br></br> <br></br>
                     to make it suitable for various conference models. It is currently probably <br></br> <br></br>
                     the most commonly used conference management system.<br></br> 
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-badge info"><i className="glyphicon glyphicon-floppy-disk"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <p className="timeline-title" style={{color:'black',fontSize: 20 }}>Our goals</p>
                  </div>
                  <div className="timeline-body">
                    <p style={{color:'black',fontSize: 15 }}>
                    <br></br> <br></br>
                    evaluating project proposals <br></br> <br></br>
teaching students paper writing and peer reviewing <br></br> <br></br>
teaching HCI students<br></br> <br></br>
generating program Web pages for very large conferences<br></br>
                    </p>
                    
                   
                  </div>
                </div>
              </li>
              
   
          </ul>
          <br></br><Footer/>
      </div>
      
        </div> 
    )
}

export default About
