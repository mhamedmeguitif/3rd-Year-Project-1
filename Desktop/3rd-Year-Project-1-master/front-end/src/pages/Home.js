import React from 'react'
import UserNavbar from '../partiels/UserNavbar';
import Footer from '../partiels/Footer';
import a from '../image/a.png';
import galery03 from '../image/galery03.jpg';
import background01 from '../pages/background01.jpg';
import pic from '../pic.jpg';
import './Welcome.css';
import { Slide } from 'react-slideshow-image';

function Home() {
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
         <br></br><br></br><br></br>
         </div>
        <Footer/>
         </div>
        
            
        </div>
    )
}

export default Home
