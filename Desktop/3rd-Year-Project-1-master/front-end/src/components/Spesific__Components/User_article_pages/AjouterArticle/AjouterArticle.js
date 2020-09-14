import Alert from "react-bootstrap/Alert";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../../Config__Global/UserContext";
import { useForm } from "react-hook-form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Slide } from "react-slideshow-image";
function AjouterArticle(props) {
  const [errR, setErrR] = useState(false);
  const [Auteur, setAuteur] = useState("");
  const [les_Auteur, setles_Auteur] = useState([]);
  const [Titre, setTitre] = useState("");

  const [les_mots_clés, setles_mots_clés] = useState([]);
  const [Resumer, setResumer] = useState("");
  const [ArticleFile, setArticleFile] = useState();

  const [err, setErr] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const [add, setadd] = useState(false);
  const [erre, setErre] = useState(false);
  const [TheThemes, setTheThemes] = useState([]);
  const [TheDefaultThemes, setTheDefaultThemes] = useState([]);
  const [keyword, setkeyword] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    let data = new FormData();

    data.append("ArticleFile", ArticleFile);
    //let data = JSON.stringify({
    // les_Auteur: les_Auteur,
    //Titre:Titre,
    //Theme:TheThemes,
    //les_mots_clés:les_mots_clés,
    // Resumer:Resumer,
    //  file:formData,
    //chercheurId:user.id,
    //   ConferenceId:props.id
    //   });
    console.log(data);
    axios
      .post("http://localhost:3000/uploadingArticle", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        setLoading(false);
        setSuccess(true);

        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function removeTheme(index) {
    try {
      const newTodos = TheThemes.filter((Theme, i) => i !== index);

      //newTodos.splice(index,1);

      setTheThemes(newTodos);
    } catch {
      setErre(true);
    }
  }
  function thSubmit(Theme) {
    try {
      setadd(true);
      const t = [...TheThemes, Theme];
      setTheThemes(t);
      console.log(TheThemes);
      setadd(false);
    } catch {
      setErre(true);
    }
  }

  //ajouter key words

  function WordSubmit() {
    try {
      if (keyword) {
        const t = [...les_mots_clés, keyword];
        setles_mots_clés(t);
        console.log(les_mots_clés);
      } else {
        console.log("no word");
      }
    } catch {
      setErrR(true);
    }
  }
  //supprimer
  function removeWord(index) {
    try {
      const newTodos = les_mots_clés.filter((keyword, i) => i !== index);

      //newTodos.splice(index,1);

      setles_mots_clés(newTodos);
    } catch {
      setErre(true);
    }
  }

  //ajout auteur
  function AuteurSubmit() {
    try {
      if (Auteur) {
        setErrR(false);
        const t = [...les_Auteur, Auteur];
        setles_Auteur(t);
        console.log(les_Auteur);
      } else {
        console.log("no author");
      }
    } catch {
      setErrR(true);
    }
  }
  //supprimer
  function removeAuteur(index) {
    try {
      setErrR(false);

      const newTodos = les_Auteur.filter((keyword, i) => i !== index);

      //newTodos.splice(index,1);

      setles_Auteur(newTodos);
    } catch {
      setErre(true);
    }
  }

  function DefaultTheme() {
    axios
      .get("http://localhost:3000/Themes", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        console.log("theme of bdd");
        const t = res.data;
        setTheDefaultThemes(t);
        console.log(TheDefaultThemes);
      });
  }
  useEffect(() => {
    DefaultTheme();
  }, []);

  return (
    <div>
      <div className="container contact-form">
        <form>
          <Alert variant="warning">
            <i class="fas fa-exclamation-triangle"></i> &nbsp; WARNING : Read
            carfully the termes before adding your article good luck !
          </Alert>
          <br></br>
          <br></br>
          <h2>
            <p style={{ color: "white" }}> Choose your topics </p>
          </h2>
          <br></br>
          <div className="input-group form-group  ">
            <DropdownButton
              id="dropdown-item-button"
              title="choose from the list bellow &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; "
              variant="light"
            >
              {TheDefaultThemes.map((Theme, index) => (
                <Dropdown.Item key={index} style={{ color: "black" }}>
                  {Theme.NameOfTheme}

                  <button
                    type="button"
                    class="btn btn-light float-right "
                    onClick={() => thSubmit(Theme)}
                  >
                    <svg
                      style={{ color: "indianred" }}
                      width="1.2em"
                      height="1.2em"
                      viewBox="0 0 16 16"
                      class="bi bi-plus-circle-fill"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"
                      />
                    </svg>
                  </button>
                </Dropdown.Item>
              ))}
            </DropdownButton>
            &nbsp; &nbsp;
            <DropdownButton
              id="dropdown-item-button"
              title="Show the topics you choose"
              variant="secondary"
            >
              {TheThemes.map((Theme, index) => (
                <Dropdown.Item key={index} style={{ color: "black" }}>
                  {Theme.NameOfTheme}
                  <button
                    className="btn btn-outline-danger float-right"
                    onClick={() => removeTheme(index)}
                     >
                    X
                  </button>
                </Dropdown.Item>
              ))}
            </DropdownButton>
            <div>
              <span class="notification-badge badge badge-danger">
                {TheThemes.length}
              </span>
            </div>
            <br></br> <br></br>
          </div>
          <h2>
            <p style={{ color: "white" }}> Enter your key words </p>
          </h2>{" "}
          <br></br>
          <div className="input-group form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Key words"
              name="keyword"
              id="keyword"
              onChange={(e) => setkeyword(e.target.value)}
            />
            <button type="button" class="btn btn-danger " onClick={WordSubmit}>
              Add
            </button>
            &nbsp; &nbsp;
            <DropdownButton
              id="dropdown-item-button"
              title="Show your keywords"
              variant="secondary"
            >
              {les_mots_clés.map((le_mot_clé, index) => (
                <Dropdown.Item key={index} style={{ color: "black" }}>
                  {le_mot_clé}{" "}
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => removeWord(index)}
                  >
                    x
                  </button>{" "}
                </Dropdown.Item>
              ))}
            </DropdownButton>
            <div>
              <span class="notification-badge badge badge-danger">
                {les_mots_clés.length}
              </span>
            </div>
          </div>
          {errR && (
            <div style={{ color: "white" }}>{errR} ERROR try again !</div>
          )}
          <br></br>
          <h2>
            <p style={{ color: "white" }}> Enter the autors </p>
          </h2>{" "}
          <br></br>
          <div className="input-group form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Email of autors"
              name="Auteur"
              id="Auteur"
              onChange={(e) => setAuteur(e.target.value)}
            />
            <button
              type="button"
              class="btn btn-danger "
              onClick={AuteurSubmit}
            >
              Add
            </button>
            &nbsp; &nbsp;
            <DropdownButton
              id="dropdown-item-button"
              title="Show emails"
              variant="secondary"
            >
              {les_Auteur.map((Auteur, index) => (
                <Dropdown.Item key={index} style={{ color: "black" }}>
                  {Auteur}{" "}
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => removeAuteur(index)}
                  >
                    x
                  </button>{" "}
                </Dropdown.Item>
              ))}
            </DropdownButton>
            <div>
              <span class="notification-badge badge badge-danger">
                {les_Auteur.length}
              </span>
            </div>
          </div>
          {errR && (
            <div style={{ color: "white" }}>{errR} ERROR try again !</div>
          )}
          <br></br>
          <div className="text-center">
            <h2>
              <p style={{ color: "white" }}> Enter this informations </p>
            </h2>
            <div className="input-group form-group">
              <input
                type="text"
                className="form-control"
                placeholder="title"
                name="Titre"
                id="title"
                onChange={(e) => setTitre(e.target.value)}
              />
            </div>
          </div>
          <br></br>
          <div className="form-group  ">
            <textarea
              name="txtMsg"
              className="form-control "
              placeholder="Your resumee "
              style={{ width: 735, height: 140 }}
              onChange={(e) => setResumer(e.target.value)}
            ></textarea>
          </div>
          <br></br>
          <div className="form-group  ">
            <button>
              {" "}
              <input
                type="file"
                name="ArticleFile"
                onChange={(e) => setArticleFile(e.target.files[0])}
              ></input>
            </button>
          </div>
          <div className="form-group text-center">
            {" "}
            <br></br> <br></br>
            <input
              type="submit"
              className="btn  btn-danger btn-lg "
              value="Send your article"
              onClick={onSubmit}
            />
          </div>{" "}
          <br></br> <br></br>
        </form>
      </div>
    </div>
  );
}

export default AjouterArticle;
