import "./Ajouter__Evaluateur.css";
import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { UserContext } from "../../../../Config__Global/UserContext";
import Image from "../../../../Global__Image/galery03.jpg";
import UserNavbar from "../../../../Global__components/NavBar/NavBarUser/UserNavbar";
import Footer from "../../../../Global__components/Footer/Footer";
import swal from "sweetalert";
import galery03 from "../../../../Global__Image/22.jpg";
function Ajouter__Evaluateur({ match }) {

  const [conf, setconf] = useState({});
  const [Article_Pdf, setArticle_Pdf] = useState();
  const [Users, setUsers] = useState([]);
const [ReadingCommitee, setReadingCommitee] = useState([])
  const { user, setUser } = useContext(UserContext); //user__Information
  const { register, handleSubmit, errors } = useForm();
  /*funcions */
  function Afficher__User() {
    axios
      .get(`http://localhost:3000/users`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        console.log("-------------------------------");
        console.log(res.data);
        setUsers(res.data);
     
      });
  }
  function AfficherConf() {
    axios
      .get(`http://localhost:3000/conferences/${match.params.conf}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        console.log(res.data)
        setconf(res.data);   
        setReadingCommitee(res.data.ReadingCommitee)
      });
  }
  useEffect(() => {
    AfficherConf();
    Afficher__User()
    console.log(match.params);
  }, []);
  const onSubmit = (data) => {
    console.log(
      "---------------------------------test form hooks ----------------------"
    );
  };
  return (
    <div className="app3">
      <UserNavbar />
      <div className="container ">
        <div className="view-account ">
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
                      <p className="Conference__lable">
                        {" "}
                        {conf.NameOfConference}
                      </p>
                    </li>
                    <li className="email">
                      <p className="Company__lable">{conf.NameOfCompany}</p>
                    </li>
                  </ul>
                </div>
                <nav className="side-menu">
                  <ul className="nav">
                    <li>
                      <a
                        href={`/profile/Conferences/Affecter__Article/${conf._id}`}
                      >
                        <span className="fa fa-share-alt-square"> </span>
                        Send Articles
                      </a>
                    </li>
                    <li className="active">
                      <a href="#">
                        <span className="fa fa-plus-circle"></span> Evaluators
                      </a>
                    </li>
                    <li>
                      <a href={`/profile/Conferences/Fin__Conf/${conf._id}`}>
                        <span className="fa fa-hourglass-end"></span>End of Conf
                      </a>
                    </li>

                    <li>
                      <a href={`/profile/Conferences/Note__Finale/${conf._id}`}>
                        <span className="fa fa-bullseye"></span>Final marks
                      </a>
                    </li>
                    <li>
                      <a href="/profile">
                        <span className="fa fa-user-alt"></span> Profile
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="content-panel marginbuttom">
                <p className="header__Title__font">Evaluators </p>
                <div className="souliner mb-5"></div>
                <div className="list__Article">
                {ReadingCommitee.map((user, index) => (
                                      <div className="card  card__Style__User">
                                        <div className="row no-gutters card__content__Modal ">
                                          <div className="col-md-4 ImageContainer__Modal">
                                            <img
                                              src={user.photo}
                                              class="card-img image1"
                                              alt="pic"
                                            />
                                          </div>
                                          <div className="col-md-8 card-dec">
                                            <div className="card-body">
                                              <h2 className="card-title__Modal font__simple">
                                                {user.username}
                                              </h2>
                                              <p className="card-User-Domaine font__simple">
                                                {user.Domaine}
                                              </p>
                                              <a className="btn btn_modifier">
                                                <span className="fas fa-paper-plane"></span>
                                                <span>Send</span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
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

export default Ajouter__Evaluateur;
