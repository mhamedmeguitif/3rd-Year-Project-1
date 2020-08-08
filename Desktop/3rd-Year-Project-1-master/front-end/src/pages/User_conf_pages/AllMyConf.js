import React , {useEffect, useContext, useState } from 'react'
import '../profile.css'
import AjouterConfModal from './AjouterConfModal'
import axios from 'axios' ;
import {UserContext} from '../UserContext'
import UserNavbar from '../../partiels/UserNavbar'
import Footer from '../../partiels/Footer'
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
    .get ('http://localhost:3000/conferences/user',{data},{headers:{"Content-Type" : "application/json" , 'Accept' : 'application/json',
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
    
    })
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
                    </form>
                </div>
            </div>
        </section>
    </div>
    <Footer/>
</div>

</div> 
    )
}

export default AllMyConf
