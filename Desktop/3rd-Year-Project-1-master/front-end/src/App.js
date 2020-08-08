import {  PrivateRoute} from "./PrivateRoute";
import {  PublicRoute} from "./PublicRoute";
import React,  {useMemo, useState} from 'react'
import './App.css';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Welcome from './pages/Welcome';
import {UserContext} from './pages/UserContext';
import Home from './pages/Home';
import Profile from './pages/Profile';
import AllConf from './pages/Allconf';
import AllMyConf from './pages/User_conf_pages/AllMyConf';
import { useLocalStorage } from './hooks';
import AllmyArticles from "./pages/User_article_pages/AllmyArticles";
import PublicConf from "./pages/PublicConf";


function App() { 
  const [user, setUser] = useLocalStorage({
    id:'',
    username: '',
    password: '',
    firstname:'',
    lastname: '',
    Pays: '',
    Email: '',
    Domaine: '',
    specialite: '',
    Etablissement: '',
    compagnie: '',
    login: false,
    token:''
  });
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  

  return (<UserContext.Provider value={value} >
    <div className="App" >

      <BrowserRouter>
      <Route exact path="/">
    <Redirect to="/Welcome" />
</Route>
            <PublicRoute path="/welcome" component={Welcome} />
            
             <PrivateRoute exact path="/home" component={Home} />
               <PrivateRoute exact path="/Allconf" component={AllConf} />
             <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/profile/myConf" component={AllMyConf} />
<PrivateRoute exact path="/profile/articles" component={AllmyArticles} />
        <PrivateRoute exact path="/Allconf/:id" component={PublicConf} />
            
      </BrowserRouter>
    
  </div></UserContext.Provider>
  );
}

export default App;
