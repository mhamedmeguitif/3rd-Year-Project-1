import React, {useEffect,  useState, useContext} from 'react'
import {useHistory } from "react-router-dom";
import {UserContext} from '../../../Config__Global/UserContext'
import axios from 'axios' ;
import UserNavbar from '../../../Global__components/NavBar/NavBarUser/UserNavbar'
import Footer from '../../../Global__components/Footer/Footer'
import './AllConf.css'
import galery03 from '../../../Global__Image/galery03.jpg';
function Allconf() {

     const [confs, setConfs] = useState([])//conféreces
     const { user, setUser } = useContext(UserContext);//user__Information
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

        <div >
            <UserNavbar/>
            <br></br> <br></br><br></br>
           
                       <div className="carousel-inner" className="conference">
                         <div className="carousel-item active">
                           <div className="row" >
    {confs.map((conf,index) => (
                 
                             <div className="col-md-4"  key= {index}>
                               <div className="item-box-blog">
                                 <div className="item-box-blog-image">
                                
                                   <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">{conf.TheDeadline[0]+conf.TheDeadline[1]+conf.TheDeadline[2]+conf.TheDeadline[3]+conf.TheDeadline[4]+conf.TheDeadline[5]+conf.TheDeadline[6]+conf.TheDeadline[7]+conf.TheDeadline[8]+conf.TheDeadline[9]}</span> </div>
                                   
                                   <figure> <img alt="" src={galery03} /> </figure>
                                 </div>
                                 <div className="item-box-blog-body"style={{height:'200'}}>
                                  
                                   <div className="item-box-blog-heading">
                                     <a href="#" tabindex="0">
                                     <h5>{conf.NameOfConference}</h5>
                                     </a>
                                   </div>
                                 
                                   <div className="item-box-blog-data" >
                                     <p><i className="fa fa-user-o"></i> Admin, <i className="fa fa-comments-o"></i> Comments(3)</p>
                                   </div>
                                
                                   <div className="item-box-blog-text">
                                   <p>{conf.LittleDefinitionOfCompany}</p>
                                   
                                   </div>
                                 
                                 </div>  <div className="mt"> <a href={"/AllConf/"+conf._id} tabindex="0" className="btn bg-blue-ui white read">read more</a> </div>
                                   
                               </div>
                             </div>
                         
                           
                 
                        
                 ))}

               </div>
               <Footer/>
               </div> 
               </div>
             
               
                 
        </div>
    )
}

export default Allconf
