import React, { useEffect, useContext, useState } from "react";
import UserNavbar from "../../../Global__components/NavBar/NavBarUser/UserNavbar";
import Footer from "../../../Global__components/Footer/Footer";
import axios from "axios";
import { UserContext } from "../../../Config__Global/UserContext"
import Ajouter__Article from "../Functions__Pages/Ajouter__Article/Ajouter__Article" 
import Image from "../../../Global__Image/galery03.jpg"
import './Global__Page.css'
function Global__Page(props) {
  const [conf, setConf] = useState([]); //conféreces
  const { user, setUser } = useContext(UserContext); //user__Information
 const AffConf = (props)=> {
  
  axios
      .get("http://localhost:3000/conferences/${props._id}", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
})
      .then((res) => {
        console.log("Id Of Confs");
        console.log(props)
        const t = res.data;
        setConf(t);
        console.log(conf);
      });
  }
  useEffect(() => {
    AffConf();
  }, []);


  return (
    <>
      <UserNavbar />
      <div className="container">
        <div className="view-account">
          <section className="module">
            <div className="module-inner">
              <div className="side-bar">
                <div className="user-info">
                  <div className="ImageContainer">
                    <img
                      className=" img-circle img-responsive center-block image2"
                      src={Image}
                      alt="profile pic"
                    />
                  </div>
                  <ul className="meta list list-unstyled">
                    <li className="name">
                      <label className="label label-info">
                        MMMM
                      </label>
                    </li>
                    <li className="email">
                      <a href="#">MMM</a>
                    </li>
                  </ul>
                </div>
                <nav className="side-menu">
                  <ul className="nav">
                    <li>
                      <a href="/Article/Ajouter__Article">
                        <span className="fa fa-user"></span> Ajouter Un Article
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-credit-card"></span> My Conferences
                      </a>
                    </li>
                    <li className="active">
                      <a href="#">
                        <span className="fa fa-th"></span> My articles
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-th"></span> My evaluations
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="content-panel">

              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer/>
    </>
  );
}
export default Global__Page;
