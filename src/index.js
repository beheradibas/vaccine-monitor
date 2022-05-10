import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Vaccinationtable from './components/user/vaccinationtable';
import Certificate from './components/user/certificate';
// import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <Router>

     <Routes>

      <Route exact path="/" element={<App/>}/>

      <Route exact path="/user" element={<User/>}/>

      <Route exact path="/user/vaccinationtable" element={<Vaccinationtable/>}/>

      <Route exact path="/user/certificate" element={<Certificate/>}/>

    </Routes>

  </Router>,

  // document.getElementById('root')

);