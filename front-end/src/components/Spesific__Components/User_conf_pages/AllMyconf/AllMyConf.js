/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from "react";
import "../../Profile/profile.css";
import AjouterConfModal from "../AjouterConfModal/AjouterConfModal";
import axios from "axios";
import { UserContext } from "../../../Config__Global/UserContext";
import UserNavbar from "../../../Global__components/NavBar/NavBarUser/Navbar1";
import Footer from "../../../Global__components/Footer/Footer";

function AllMyConf() {
  const [modalShow, setModalShow] = React.useState(false);
  const { user } = useContext(UserContext);
  const [AllConfs, setAllConfs] = useState([]);

  function AfficherConf() {
    let data = JSON.stringify({
      _id: user.id,
      username: user.username,
      password: user.password,
      firstname: user.firstname,
      lastname: user.lastname,
      Pays: user.Pays,
      Email: user.Email,
      Domaine: user.Domaine,
      specialite: user.specialite,
      Etablissement: user.Etablissement,
      compagnie: user.compagnie,
    });

    axios
      .get("http://localhost:3000/conferences/user", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        setAllConfs(res.data);
      });
  }

  useEffect(() => {
    AfficherConf();
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
                  <img
                    className="img-circle img-responsive center-block"
                    src="https://img.icons8.com/cotton/64/000000/gender-neutral-user.png"
                    alt=""
                  />
                  <ul className="meta list list-unstyled">
                    <li className="name">
                      <label className="label label-info">
                        {user.username}
                      </label>
                    </li>
                    <li className="email">
                      <p style={{ color: "#616670" }}>{user.Email}</p>
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
                      <a href="#">
                        <span className="fa fa-cog"></span> Settings
                      </a>
                    </li>
                    <li className="active">
                      <a href="/profile/myConf">
                        <span className="fa fa-credit-card"></span> My
                        Conferences
                      </a>
                    </li>
                    <li>
                      <a href="/profile/articles">
                        <span className="fa fa-th"></span> My articles
                      </a>
                    </li>
                    <li>
                      <a href="/profile/articles/evaluate">
                        <span className="fa fa-th"></span> My evaluations
                      </a>
                    </li>
                    <li>
                      <a href="/profile/evaluate">
                        <span className="far fa-clock"></span> Reminders
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="content-panel">
                <form className="form-horizontal">
                  <p
                    className="btn btn-danger"
                    onClick={() => setModalShow(true)}
                    style={{ color: "white" }}
                  >
                    Add Conference
                  </p>
                  <AjouterConfModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </form>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AllMyConf;
