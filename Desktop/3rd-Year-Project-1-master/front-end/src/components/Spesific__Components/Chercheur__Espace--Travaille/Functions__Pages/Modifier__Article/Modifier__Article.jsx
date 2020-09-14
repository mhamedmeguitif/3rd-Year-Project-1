import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { UserContext } from "../../../../Config__Global/UserContext";
import { Slide } from "react-slideshow-image";
import Image from "../../../../Global__Image/3.jpg";
import UserNavbar from "../../../../Global__components/NavBar/NavBarUser/UserNavbar";
import Footer from "../../../../Global__components/Footer/Footer";
import swal from 'sweetalert';
//import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./Modifier__Article.css";
function Modifier__Article({ match }) {
  const [conf, setconf] = useState({});
  const [Article , setArticle ] = useState({});
  const [Article_Pdf, setArticle_Pdf] = useState();
  const { user, setUser } = useContext(UserContext); //user__Information
  const { register, handleSubmit ,errors} = useForm();
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
   
  function Get__Article(){
    axios
    .get(`http://localhost:3000/Article/user`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${user.token}`,
      }
    })
    .then((res) => {
      console.log('----------------get Article -*-------------')
      console.log(res.data);      
      setArticle(res.data);
    });
  }
  useEffect(() => {
    AfficherConf();
    Get__Article(); 
  }, []);


  const onSubmit = (data) => {
    console.log(
      "---------------------------------test form hooks ----------------------"
    );
    console.log(data); 
    const Tab__auteures = data.auteures.split(" ");
    const Tab__mots = data.mots.split(" ");
    const titre__Article = data.titre__Article;
    const Resumer = data.resemer;
    console.log(Resumer);
    setArticle_Pdf(data.ArticleFile[0]);
    let Article__info = JSON.stringify({
      les_Auteur: Tab__auteures,
      Titre: titre__Article,
      Theme: data.theme,
      les_mots_cles: Tab__mots,
      Resumer: Resumer,
      chercheurId: user._id,
      ConferenceId: match.params.article,
    });

    axios
      .put(`http://localhost:3000/Article/${Article._id}`, Article__info, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        console.log(res.data._id);
        const formData = new FormData();
        formData.append("ArticleFile", data.ArticleFile[0]);

        axios
          .put(
            `http://localhost:3000/uploadingArticle/${res.data._id}`,
            formData,
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${user.token}`,
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            swal("Super !", "Article Modifier!", "success");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(
      "--------------------------------- fin test form hooks ----------------------"
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
                      
                       <p className="Conference__lable"> {conf.NameOfConference}</p>
                      
                    </li>
                    <li className="email">
                      <p className="Company__lable">{conf.NameOfCompany}</p>
                    </li>
                  </ul>
                </div>
                <nav className="side-menu">
                  <ul className="nav">
                    <li >
                      <a href={`/profile/articles/Ajouter__Article/${conf._id}`}>
                        <span className="fa fa-file-pdf"></span> Ajouter Un
                        Article
                      </a>
                    </li>
                    <li>
                      <a href={`/profile/articles/Ajouter__Article/version__finale/${conf._id}`}>
                        <span className="fa fa-check-double"></span> Version
                        Final
                      </a>
                    </li>
                    <li className="active">
                    
                      <a href={`/profile/articles/Ajouter__Article/Modifier__Article/${conf._id}`}>
                        <span className="fa fa-edit"></span> Modifier L'article
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
                <div className="header__Title">
                  <p className="header__Title__font"> Modifier L' Article </p>
                  <div className="souliner"></div>
                </div>
                
                <div className="container contact-form">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row div__style ">
                      <div className="form-group col-md-6">
                        <p className="chercheur__style font__simple ">
                          Chercheur
                        </p>
                        <input
                          type="text"
                          className="form-control "
                          placeholder={user.username}
                          disabled
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <p className="chercheur__style font__simple ">
                          Conférence
                        </p>
                        <input
                          type="text"
                          className="form-control"
                          placeholder={conf.NameOfConference}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="form-group div__style">
                      <p className="lesauteur__style font__simple ">
                        Les Auteures
                      </p>
                      <input
                        type="text"
                        className="form-control"
                      placeholder={Article.les_Auteur}
                        name="auteures"
                        ref={register}
                      />
                      {/* errors will return when field validation fails  */}
                      
                      {/* {errors.auteures && <p className="span__errors">{errors.auteures?.message}</p>} */}
                    </div>
                    <div className="form-row div__style mt-5">
                      <div className="form-group col-md-6">
                        <p className="Théme__style font__simple ">Théme</p>

                        <select
                          class="form-control"
                          id="exampleFormControlSelect1"
                          name="theme"
                          placeholder={Article.Theme}
                        ref={register.Theme}
                        >
                          <option>Théme 1</option>
                          <option>Théme 2</option>
                          <option>Théme 3</option>
                          <option>Théme 4</option>
                          <option>Théme 5</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <p className="Titre__style font__simple ">
                          Titre De L'Article{" "}
                        </p>
                        <input
                          type="text"
                          className="form-control"
                          name="titre__Article"
                          placeholder={Article.Titre}
                          ref={register}
                        />
                        {/* errors will return when field validation fails  */}
                      {/* {errors.titre__Article && <p className="span__errors">{errors.titre__Article?.message}</p>} */}
                      </div>
                    </div>
                    <div className="form-group div__style">
                      <p className="MotsCle__Style font__simple ">
                        Les Mots clé
                      </p>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        name="mots"
                        placeholder={Article.les_mots_cles}
                        ref={register}
                      ></textarea>
                       {/* errors will return when field validation fails  */}
                       {/* {errors.mots && <p className="span__errors">{errors.mots?.message}</p>} */}
                    </div>
                    <div className="form-group mb-5">
                      <p className="Resumer__style font__simple ">Résumer </p>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        name="resemer"
                        placeholder={Article.Resumer}
                        ref={register}
                      ></textarea>
                       {/* errors will return when field validation fails  */}
                       {/* {errors.resemer && <p className="span__errors">{errors.resemer?.message}</p>} */}
                    </div>
                    <div className="input-group mb-5">
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="inputGroupFile01"
                          name="ArticleFile"
                          ref={register}
                        />
                         {/* errors will return when field validation fails  */}
                      {/* {errors.ArticleFile && <p className="span__errors">{errors.ArticleFile?.message}</p>} */}
                        <label
                          className="custom-file-label"
                          htmlFor="inputGroupFile01"
                        >
                          Choose file to uplaod
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn  btn__submit  font__simple "
                    >
                      submit
                    </button>
                  </form>
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
export default Modifier__Article;
