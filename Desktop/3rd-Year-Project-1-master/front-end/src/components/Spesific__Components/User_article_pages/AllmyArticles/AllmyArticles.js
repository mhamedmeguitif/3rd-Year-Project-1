import React, { useEffect, useContext, useState } from "react";
import "../../Profile/profile.css";
import "./AllmyArticles.css";
import axios from "axios";
import { UserContext } from "../../../Config__Global/UserContext";
import UserNavbar from "../../../Global__components/NavBar/NavBarUser/UserNavbar";
import Footer from "../../../Global__components/Footer/Footer";

import galery03 from "../../../Global__Image/galery03.jpg";
function AllmyArticles(props) {
  const [confs , setConfs] = useState([]); //conféreces
  const { user, setUser } = useContext(UserContext); //user__Information
  function AffConf() {
    axios
      .get("http://localhost:3000/conferences", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
})
      .then((res) => {
        console.log("Test in AllMyArticle ");
        const item = res.data;
        setConfs(item);
        console.log(confs);
        console.log("-------------------Test in AllMyArticle------------");
      });
  }

    useEffect(() => {
    AffConf();
  }, []);

  return (
    <div classeName="app3">
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
                      src={user.photo}
                      alt="profile pic"
                    />
                  </div>
                  <ul className="meta list list-unstyled">
                    <li className="name">
                      <label className="label label-info">
                        {user.username}
                      </label>
                    </li>
                    <li className="email">
                      <a href="#">{user.Email}</a>
                    </li>
                  </ul>
                </div>
                <nav className="side-menu">
                  <ul className="nav">
                    <li>
                      <a href="/profile">
                        <span className="fa fa-user"></span> Profile
                      </a>
                    </li>
                    <li>
                      <a href="/profile/myConf">
                        <span className="fa fa-credit-card"></span> My
                        Conferences
                      </a>
                    </li>
                    <li className="active">
                      <a href="/profile/articles">
                        <span className="fa fa-th"></span> My articles
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-th"></span> My evaluations
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-clock-o"></span> Reminders
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="content-panel">
               <p className="Title__Header">My Articles </p>
               <div className="container">
               <div className="container__scrolle">
               {confs.map((conf, index) => (
                  <>
                    <div class="card mb-3 card__width container__card">
                      <div class="row no-gutters card__content ">
                        <div class="col-md-4 Image__Container">
                          <img src={galery03} class="card-img" alt="..." />
                        </div>
                        <div class="col-md-8">
                          <div class="card-body card__text ">
                            <h2 class="card-title">{conf.NameOfConference}</h2>
                            <h5 class="card-text p__marginleft">
                              {conf.NameOfCompany}
                            </h5>
                            <a href={`/profile/articles/Ajouter__Article/${conf._id}`} className="btn btn__margleft">
                              Go To Work {}
                              
                            </a>
                            </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="Separator"></div> */}
                  </>
                ))}
               </div>
               
               </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default AllmyArticles;