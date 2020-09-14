import React from 'react'
import './Footer.css';
import  confn from '../../Global__Image/confn.png'
import instagram from '../icons-rs/Instagram.png';
import facebook from '../icons-rs/facebook.png';
import Github from '../icons-rs/Github.png';
import linkedin from '../icons-rs/linkedin.png';
function Footer() {
    return (
     <div>

<footer className="footer">


  <div className="container">
  <table>
    
    <tbody>
    <tr>
       <th>
            <div className="footer-social">
            <br></br><br></br>
              <h4>Contact us</h4> <br></br>
             <a href="#"><img  src={instagram}  width="40px" height="40px"/> </a>
             <a href="#"><img  src={facebook}  width="40px" height="40px"/> </a>
             <a href="#"><img  src={Github}  width="40px" height="40px"/> </a>
             <a href="#"><img  src={linkedin}  width="40px" height="40px"/> </a>
            
            <br></br><br></br><br></br>
            <button type="button" className="btn btn-dark">TEAM Developpement</button>
              
    </div> 
    <div></div>
    </th>  
    <th className="text-center">

      <img src={confn}  width="250px" height="150px"/></th>    
     
  <th>

    <div className ="float-right" ><br></br><br></br>
    <h4> More Informations:</h4> <br></br><br></br>
           <a href="#" className="h" >Help</a> <br></br><br></br>
           <a href="#" className="h">About</a> <br></br><br></br>
           <a href="#" className="h">Confidentiality</a> <br></br><br></br>
           <a href="#" className="h">Operation guide</a> <br></br><br></br>
           
          </div>
        
 </th>

    </tr>
    </tbody>
    
  </table>
  <br></br>
  <div className="footer-copyright text-center ">
      <a href="http://www.esi-sba.dz/fr/">© 2019 copyright Esi Sba</a>
    </div>
         
</div>


</footer>
     </div>   
    )
}


export default Footer
