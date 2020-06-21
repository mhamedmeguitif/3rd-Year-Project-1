import {  PrivateRoute} from "./PrivateRoute";
import {  PublicRoute} from "./PublicRoute";
import React,  {useMemo, useState} from 'react'
import './App.css';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Welcome from './pages/Welcome';
import {UserContext} from './pages/UserContext';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import { useLocalStorage } from './hooks';

function App() { 
  const [user, setUser] = useLocalStorage({
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
    login: false
  });
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  

  return (<UserContext.Provider value={value} >
    <div className="App" >

      <BrowserRouter>
      
            <PublicRoute path="/welcome" component={Welcome} />
          
        
             <PrivateRoute exact path="/profile" component={Profile} />
       
  
      </BrowserRouter>
    
  </div></UserContext.Provider>
  );
}

export default App;
