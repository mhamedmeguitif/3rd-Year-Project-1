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
      
            <PublicRoute path="/welcome" component={Welcome} />
          
             <PrivateRoute exact path="/home" component={Home} />
               <PrivateRoute exact path="/Allconf" component={AllConf} />
             <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/profile/myConf" component={AllMyConf} />
  
      </BrowserRouter>
    
  </div></UserContext.Provider>
  );
}

export default App;
