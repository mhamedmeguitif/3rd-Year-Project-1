import React, { useContext, useEffect, useState } from "react";
import "../Profile/profile.css";
import Axios from "axios";
import { UserContext } from "../../Config__Global/UserContext";
import UserNavbar from "../../Global__components/NavBar/NavBarUser/UserNavbar";
import Footer from "../../Global__components/Footer/Footer";
function Profile({ match }) {
  const [profileImg, setProfileImg] = useState("");
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    console.log("m---------------------------------m");
    console.log(profileImg);
  });
  const OnFileChange = (event) => {
    setProfileImg(event.target.files[0]);
    console.log(profileImg);
  };
  const OnSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("imageFile", profileImg);
    console.log();
    Axios.post("http://localhost:3000/aploadImage", formData, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((res) => {
        console.log(res);
        
        setUser({
          id: user.id,
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
    login: true,
    token: user.token,
          photo : res.data.photo
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="app3">
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
                    <li className="active">
                      <a href="#">
                        <span className="fa fa-user"></span> Profile
                      </a>
                    </li>
                    <li>
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
                      <a href="user-drive.html">
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
                <form className="form-horizontal">
                  <fieldset className="fieldset">
                    <div className="form-group avatar formOfUpload">
                      <figure className="figure col-md-2 col-sm-3 col-xs-12">
                    <div  className="ImageContainer">
                    <img
                          className="img-rounded img-responsive image1"
                          src={user.photo}
                          alt="profile pic"
                        />
                    </div>
                      </figure>
                      <div className="form-inline col-md-10 col-sm-9 col-xs-12">
                        &nbsp; &nbsp; &nbsp;
                        <div className="container">
                          <div className="row">
                            <form onSubmit={OnSubmit}>
                              <div className="form-group">
                                <input type="file" onChange={OnFileChange} />
                                <button
                                  className="btn btn-primary button-1"
                                  type="submit"
                                >
                                  Upload
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label
                        style={{ color: "black" }}
                        className="col-md-2 col-sm-3 col-xs-12 control-label"
                      >
                        User Name
                      </label>
                      <div className="col-md-10 col-sm-9 col-xs-12">
                        <input
                          type="text"
                          className="form-control"
                          value={user.username}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label
                        style={{ color: "black" }}
                        className="col-md-2 col-sm-3 col-xs-12 control-label"
                      >
                        First Name
                      </label>
                      <div className="col-md-10 col-sm-9 col-xs-12">
                        <input
                          type="text"
                          className="form-control"
                          value={user.firstname}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        style={{ color: "black" }}
                        className="col-md-2 col-sm-3 col-xs-12 control-label"
                      >
                        Last Name
                      </label>
                      <div className="col-md-10 col-sm-9 col-xs-12">
                        <input
                          type="text"
                          className="form-control"
                          value={user.lastname}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        style={{ color: "black" }}
                        className="col-md-2 col-sm-3 col-xs-12 control-label"
                      >
                        Compagnie
                      </label>
                      <div className="col-md-10 col-sm-9 col-xs-12">
                        <input
                          type="text"
                          className="form-control"
                          value={user.compagnie}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        style={{ color: "black" }}
                        className="col-md-2 col-sm-3 col-xs-12 control-label"
                      >
                        Etablissement
                      </label>
                      <div className="col-md-10 col-sm-9 col-xs-12">
                        <input
                          type="text"
                          className="form-control"
                          value={user.Etablissement}
                        />
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="fieldset">
                    <div className="form-group">
                      <label
                        style={{ color: "black" }}
                        className="col-md-2  col-sm-3 col-xs-12 control-label"
                      >
                        Email
                      </label>
                      <div className="col-md-10 col-sm-9 col-xs-12">
                        <input
                          type="email"
                          className="form-control"
                          value={user.Email}
                        />
                      </div>
                    </div>
                  </fieldset>
                  <br></br>
                  <div className="form-group">
                    <div className="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
                      <input
                        className="btn btn-outline-danger float-right"
                        type="submit"
                        value="Update Profile"
                      />
                    </div>
                  </div>
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

export default Profile;
