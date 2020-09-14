import "./Affecter__Articles.css";
import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { UserContext } from "../../../../Config__Global/UserContext";
import Image from "../../../../Global__Image/galery03.jpg";
import UserNavbar from "../../../../Global__components/NavBar/NavBarUser/UserNavbar";
import Footer from "../../../../Global__components/Footer/Footer";
import swal from "sweetalert";
import { Button, Modal } from "react-bootstrap";
import galery03 from "../../../../Global__Image/galery03.jpg";
function Affecter__Articles({ match }) {
  const [articles, setArticle] = useState([]);
  const [Users, setUsers] = useState([]);
  const [conf, setconf] = useState({});
  const [show, setShow] = useState(false);
  const [Article_Pdf, setArticle_Pdf] = useState();
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
      .get(`http://localhost:3000/conferences/${match.params.article}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        setconf(res.data);
      });
  }
  function Get__Articals() {
    axios
      .get(`http://localhost:3000/Article/conference/${match.params.conf}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        setArticle(res.data);
      });
  }
  useEffect(() => {
    Afficher__User();
    AfficherConf();
    Get__Articals();
    console.log("Article");
    console.log(match.params);
  }, []);
  const onSubmit = (data) => {
    console.log(
      "---------------------------------test form hooks ----------------------"
    );
  };
  const handalModal = () => {
    setShow(!show);
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
                    <li className="active">
                      <a href="#">
                        <span className="fa fa-share-alt-square"></span>Send Articles
                      </a>
                    </li>
                    <li>
                      <a
                        href={`/profile/Conferences/Ajouter__Evaluateur/${conf._id}`}
                      >
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
                <p className="header__Title__font"> Affecter les Articles </p>
                <div className="souliner mb-5"></div>
                <div className="list__Article">
                  {/* /*List des article  */}
                  {articles.map((article, index) => (
                    <>
                      <div className="card mb-3  ">
                        <div className="row no-gutters card__content ">
                          <div className="col-md-4 Image__Container">
                            <img src={galery03} class="card-img" alt="..." />
                          </div>
                          <div className="col-md-8 card-dec">
                            <div className="card-body">
                              <h2 className="card-title font__simple">
                                {article.Titre}
                              </h2>
                              <p className="card-theme font__simple">
                                {article.Theme}
                              </p>
                              <p className="card-auteur font__simple">
                                {article.chercheurId.username}
                              </p>
                              <a href="#"></a>
                              <Button
                                className="btn__margleft"
                                onClick={handalModal}
                              >
                                {" "}
                                Affecter{" "}
                              </Button>
                              <Modal show={show} size="lg" className="Modal">
                                <Modal.Header className="Modal-Header">
                                  Sélectionné les évaluateurs
                                </Modal.Header>
                                <Modal.Body className="Modal-Body">
                                  <div className="User__Container">
                                    {Users.map((user, index) => (
                                      <div className="card  card__Style__User">
                                        <div className="row no-gutters card__content__Modal ">
                                          <div className="col-md-4 ImageContainer__Modal">
                                            <img
                                              src={user.photo}
                                              class="card-img image1"
                                              alt="..."
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
                                              <a className="btn__left__2 btn">
                                                <span className="fas fa-paper-plane"></span>
                                                <span>Send</span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </Modal.Body>
                                <Modal.Footer>
                                  <Button onClick={handalModal}>Close</Button>
                                </Modal.Footer>
                              </Modal>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                  {/*  Fin */}
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

export default Affecter__Articles;
