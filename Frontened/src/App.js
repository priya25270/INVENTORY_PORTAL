import React from 'react';
import './App.css';
import FrontPage from './Components/FrontPage';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';
import Crud from './Components/Crud'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Contacts from './Components/Contacts';

function App() {
  
 return (
  
    <div>

    <Router>
    <Routes>
    <Route path="/" Component={FrontPage}/>
    <Route path="/login" Component={LoginPage}/>
    <Route path="/home" Component={HomePage}/>
    <Route path="/crud" Component={Crud}/>
    <Route path="/contact" Component={Contacts}/>
    <Route path="/front" Component={FrontPage}/>
    </Routes>
    </Router>
 </div>
);
}
export default App;