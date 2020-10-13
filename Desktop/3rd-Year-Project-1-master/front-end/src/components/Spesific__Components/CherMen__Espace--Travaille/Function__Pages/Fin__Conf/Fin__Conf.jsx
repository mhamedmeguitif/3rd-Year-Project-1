import "./Fin__Conf.css";
import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { UserContext } from "../../../../Config__Global/UserContext";
import Image from "../../../../Global__Image/galery03.jpg";
import UserNavbar from "../../../../Global__components/NavBar/NavBarUser/UserNavbar";
import Footer from "../../../../Global__components/Footer/Footer";
import swal from "sweetalert";
import { Button } from "react-bootstrap";

function Fin__Conf({ match }) {
  const [conf, setconf] = useState({});
  const [Article_Pdf, setArticle_Pdf] = useState();
  const { user, setUser } = useContext(UserContext); //user__Information
  const { register, handleSubmit, errors } = useForm();
  /*funcions */
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
        setconf(res.data);
      });
  }
  useEffect(() => {
    AfficherConf();
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
                        <span className="fa fa-share-alt-square"></span>Affecter
                        les Articles
                      </a>
                    </li>
                    <li>
                      <a
                        href={`/profile/Conferences/Ajouter__Evaluateur/${conf._id}`}
                      >
                        <span className="fa fa-plus-circle"></span> Evaluateures
                      </a>
                    </li>
                    <li className="active">
                      <a href="#">
                        <span className="fa fa-hourglass-end"></span>Fin de Conf
                      </a>
                    </li>

                    <li>
                      <a href={`/profile/Conferences/Note__Finale/${conf._id}`}>
                        <span className="fa fa-bullseye"></span>Note Final
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
                <p className="header__Title__font">End of conference </p>
                
                <div className="souliner mb-5"></div>
                <div class="alert alert-danger" role="alert">
                  <span className="fas fa-exclamation-circle"> Your conference will be delated  </span> 
                </div>
                <div className="Remarque">
                  <p className="Resumer__style font__simple ">Remarque </p>
                  <textarea
                    className="form-control  Remarque__style"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="Remarque"
                  ></textarea>
                </div>
                <Button className="btn__Fin__Conf">End</Button>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Fin__Conf;
