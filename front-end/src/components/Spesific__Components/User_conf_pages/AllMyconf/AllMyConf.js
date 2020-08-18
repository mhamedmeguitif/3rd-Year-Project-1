import React , {useEffect, useContext, useState } from 'react'
import '../../Profile/profile.css' 
import galery03 from '../../../Global__Image/j.jpg';
import AjouterConfModal from '../AjouterConfModal/AjouterConfModal'
import axios from 'axios' ;
import {UserContext} from '../../../Config__Global/UserContext'
import UserNavbar from '../../../Global__components/NavBar/NavBarUser/UserNavbar'
import Footer from '../../../Global__components/Footer/Footer'
function AllMyConf() {
    const [modalShow, setModalShow] = React.useState(false);
    const { user } = useContext(UserContext); 
    const [AllConfs, setAllConfs] = useState([])
   function AfficherConf (){
    let data = JSON.stringify({
        _id:user.id,
        username: user.username,
        password: user.password,
        firstname:user.firstname,
        lastname: user.lastname,
        Pays: user.Pays,
        Email: user.Email,
        Domaine: user.Domaine,
        specialite: user.specialite,
        Etablissement: user.Etablissement,
        compagnie: user.compagnie 
     });
      
    axios
    .get ('http://localhost:3000/conferences/user',{headers:{"Content-Type" : "application/json" , 'Accept' : 'application/json',
    'Authorization' : `Bearer ${user.token}`}})
    .then( (res) =>{
        console.log('confs');
        const t =res.data;
        setAllConfs(t);
        console.log(AllConfs);
    
    })
   }

    useEffect(() => {
      AfficherConf ();
      
    },[])
      return (
      <div classeName="app3" >
        <UserNavbar/>
        
<div className="container">
    <div className="view-account">
        <section className="module">
            <div className="module-inner">
                <div className="side-bar">
                    <div className="user-info">
                        <img className="img-circle img-responsive center-block" src="https://img.icons8.com/cotton/64/000000/gender-neutral-user.png" alt=""/>
                        <ul className="meta list list-unstyled">
                            <li className="name">
                                <label className="label label-info">{user.username}</label>
                            </li>
                            <li className="email"><a href="#">{user.Email}</a></li>
                           
                        </ul>
                    </div>
            		<nav className="side-menu">
        				<ul className="nav">
        					<li ><a href="/profile"><span className="fa fa-user"></span> Profile</a></li>
        					<li><a href="#"><span className="fa fa-cog"></span> Settings</a></li>
                            <li className="active"><a href="/profile/myConf"><span className="fa fa-credit-card"></span> My Conferences</a></li>
        					<li><a href="user-drive.html"><span className="fa fa-th"></span> My articles</a></li>
        					<li><a href="user-drive.html"><span className="fa fa-th"></span> My evaluations</a></li>
        					<li><a href="#"><span className="fa fa-clock-o"></span> Reminders</a></li>
        				</ul>
        			</nav>
                </div>
                <div className="content-panel">
                    
                    <form className="form-horizontal">
 <a type="button" className="btn btn-danger" onClick={() => setModalShow(true)} style={{color:'white'}} > Add Conference</a>
                            <AjouterConfModal
                           show={modalShow}
                           onHide={() => setModalShow(false)}
                          />
                          <br></br><br></br><br></br>
                          <h2>Your conferences</h2>
                          <br></br>
                    <div className="carousel-inner" style={{height:2000}} >
                         <div className="carousel-item active">
                           <div className="row" >
{AllConfs.map((conf,index) => (
                 
              
            
                             <div className="col-md-4" key= {index}>
                               <div className="item-box-blog">
                                 <div className="item-box-blog-image">
                                
                                   <div className="item-box-blog-date bg-blue-ui white"> <span className="mon"><a href={"/AllConf/"+conf._id} style={{color:'white'}} > view </a> </span> </div>
                                   
                                   <figure> <img alt="" src={galery03} /> </figure>
                                 </div>
                                 <div className="item-box-blog-body">
                                  
                                   <div className="item-box-blog-heading">
                                     <a href="#" tabindex="0">
                                     <h5>{conf.NameOfConference}</h5>
                                     </a>
                                   </div>
                                 
                                  
                                
                                   <div className="item-box-blog-text">
                                   <p>{conf.LittleDefinitionOfCompany}</p>
                                   
                                   </div>
                                   
                                   <div className="mt"> <a href='#' tabindex="0" className="btn btn-primary read">More function</a> </div>
                                   
                                 </div>
                               </div>
                             </div>
                         
                           
                 
                        
                 ))}

               </div>
              
               </div> 
               </div>
                       
                  <Footer/>
                    </form>
                    
                </div>
            </div>
        </section>
    </div>
    
</div>

</div> 
    )
}

export default AllMyConf
