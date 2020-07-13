import React , {useEffect, useContext } from 'react'
import '../profile.css'
import AjouterConfModal from './AjouterConfModal'
import {   useHistory } from "react-router-dom";
import {UserContext} from '../UserContext'
import UserNavbar from '../../partiels/UserNavbar'
import Footer from '../../partiels/Footer'
function AllMyConf() {
    const [modalShow, setModalShow] = React.useState(false);
    const { user } = useContext(UserContext); 
    const history= useHistory();
    useEffect(() => {
        if (user.login=false){
            history.push("/welcome");  
        }
        return () => {
            //
        }
    })
      return (
      <div classeName="app3" >
        <UserNavbar/>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
<div className="container">
    <div className="view-account">
        <section className="module">
            <div className="module-inner">
                <div className="side-bar">
                    <div className="user-info">
                        <img className="img-profile img-circle img-responsive center-block" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
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
