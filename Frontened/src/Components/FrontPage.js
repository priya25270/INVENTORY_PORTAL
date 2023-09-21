// FrontPage.js
import React from 'react';
import './FrontPage.css';
import Card from './Card';
import {useNavigate} from 'react-router-dom';

function FrontPage() {
  const history=useNavigate();
  const handleLogin=()=>{
  history("/login");
  }
  return (
    <div className="front-page">
    <br></br>
    <br></br><div>
      <button onClick={handleLogin}>LOGIN / SIGNUP</button>
      </div>
      <Card/>
      </div>
    
  );
}

export default FrontPage;
