import React from 'react';

import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Welcome from './pages/Welcome';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
function App() { 

 
  return (
    <div className="App" >
      <BrowserRouter>
            <Route exact path="/" component={Welcome} />
          
            <Route exact path="/signUp" component={SignUp} />
             <Route exact path="/profile" component={Profile} />
       

      </BrowserRouter>
    
  </div>
  );
}

export default App;
