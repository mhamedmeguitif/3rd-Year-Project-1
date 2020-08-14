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
                             {" "}
          <PrivateRoute exact path="/home" component={Home} />
               <PrivateRoute exact path="/Allconf" component={AllConf} />
            <PrivateRoute exact path="/profile" component={Profile} />
               {" "}
          <PrivateRoute exact path="/profile/myConf" component={AllMyConf} />
          <PrivateRoute
            exact
            path="/profile/articles"
            component={AllmyArticles}
          />
          <PrivateRoute exact path="/Allconf/:id" component={PublicConf} />
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
