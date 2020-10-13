import { PrivateRoute } from "./components/Config__Global/PrivateRoute";
import { PublicRoute } from "./components/Config__Global/PublicRoute";
import React, { useMemo, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Welcome from "./components/Spesific__Components/Wellcome/Welcome";
import { UserContext } from "./components/Config__Global/UserContext";
import Home from "./components/Spesific__Components/Home/Home";
import Profile from "./components/Spesific__Components/Profile/Profile";
import AllConf from "./components/Spesific__Components/Conference/Allconf/Allconf";
import AllMyConf from "./components/Spesific__Components/User_conf_pages/AllMyconf/AllMyConf";
import { useLocalStorage } from "./components/Config__Global/hooks";
import AllmyArticles from "./components/Spesific__Components/User_article_pages/AllmyArticles/AllmyArticles";
import PublicConf from "./components/Spesific__Components/Conference/Public__Conf/PublicConf";

import Ajouter__Article from "./components/Spesific__Components/Chercheur__Espace--Travaille/Functions__Pages/Ajouter__Article/Ajouter__Article.jsx"
import Ajouter__Finale from "./components/Spesific__Components/Chercheur__Espace--Travaille/Functions__Pages/Ajouter__final/Ajouter__Final.jsx"
import Modifier__Article  from "./components/Spesific__Components/Chercheur__Espace--Travaille/Functions__Pages/Modifier__Article/Modifier__Article.jsx"
// cherMen
import Ajouter__Evaluateur from "./components/Spesific__Components/CherMen__Espace--Travaille/Function__Pages/Ajouter__Evaluateur/Ajouter__Evaluateur.jsx"
import Affecter__Article from './components/Spesific__Components/CherMen__Espace--Travaille/Function__Pages/Affecter__Articles/Affecter__Articles.jsx'
import Fin__Conf from './components/Spesific__Components/CherMen__Espace--Travaille/Function__Pages/Fin__Conf/Fin__Conf.jsx'
import Note__Finale from './components/Spesific__Components/CherMen__Espace--Travaille/Function__Pages/Note__Finale/Note__Finale.jsx'

function App() {
  const [user, setUser] = useLocalStorage({
    id: "",
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    Pays: "",
    Email: "",
    Domaine: "",
    specialite: "",
    Etablissement: "",
    compagnie: "",
    login: false,
    token: "",
    photo : "",
    conffav:[]
  });
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={value}>
      <div className="App">
        <BrowserRouter>
          <Route exact path="/">
            <Redirect to="/Welcome" />
          </Route>
                      
          <PublicRoute path="/welcome" component={Welcome} />
                            
          <PrivateRoute exact path="/home" component={Home} />
               <PrivateRoute exact path="/Allconf" component={AllConf} />
            <PrivateRoute exact path="/profile" component={Profile} />
               
          <PrivateRoute exact path="/profile/myConf" component={AllMyConf} />
  
   
          <PrivateRoute
            exact
            path="/profile/articles"
            component={AllmyArticles}
          />

          <PrivateRoute exact path="/profile/articles/Ajouter__Article/:article" component={Ajouter__Article} />
          <PrivateRoute exact path="/profile/articles/Ajouter__Article/version__finale/:article" component={Ajouter__Finale} />
          <PrivateRoute exact path="/profile/articles/Ajouter__Article/Modifier__Article/:article" component={Modifier__Article} />
          <PrivateRoute exact path="/Allconf/:id" component={PublicConf} />
          {/* /profile/Conferences/Ajouter__Evaluaetru/${conf._id} */}
          <PrivateRoute exact path="/profile/Conferences/Ajouter__Evaluateur/:conf" component={Ajouter__Evaluateur}/>
          <PrivateRoute exact path="/profile/Conferences/Affecter__Article/:conf" component={Affecter__Article}/>
          <PrivateRoute exact path="/profile/Conferences/Fin__Conf/:conf" component={Fin__Conf}/>
          <PrivateRoute exact path="/profile/Conferences/Note__Finale/:conf" component={Note__Finale}/>
         
         
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
