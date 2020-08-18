import React, { useState, useEffect,useContext } from 'react'
import {useParams}from 'react-router'
import axios from 'axios' ;
import UserNavbar from '../../../Global__components/NavBar/NavBarUser/UserNavbar';
import Footer from '../../../Global__components/Footer/Footer';
import '../../Wellcome/Welcome.css';
import {UserContext} from '../../../Config__Global/UserContext'
import galery03 from '../../../Global__Image/galery03.jpg';


function ConfDashbord() {
    const {id}=useParams();
    const { user, setUser } = useContext(UserContext);
    const [conf, setconf] = useState({})

    function AfficherConf (){
    
        axios
        .get(`http://localhost:3000/conferences/${id}`,{headers:{"Content-Type" : "application/json" , 'Accept' : 'application/json',
        'Authorization' : `Bearer ${user.token}`}})
        .then( (res) =>{
            setconf(res.data)
        console.log(res)
        })
        
        }

    useEffect(() => {
     
      AfficherConf();
     }, [])   

    return (
        <div>
            
        </div>
    )
}

export default ConfDashbord
