import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [activeTab, setActiveTab] = useState('login');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupNumber, setSignupNumber] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const history=useNavigate();
const handleLogin = () => {
    history("/home");
    
};
const handleSignup = (event) => {
    event.preventDefault();
  };
  return (
    <div className="auth-container">
     <div className="tabs">
        <div
          className={`tab ${activeTab === 'login' ? 'active' : ''}`}
          onClick={() => handleTabChange('login')}
        ><b>
          LOGIN
          </b>
        </div>
        <div
          className={`tab ${activeTab === 'signup' ? 'active' : ''}`}
          onClick={() => handleTabChange('signup')}
        >
        <b>
          SIGN UP
          </b>
        </div>
      </div>
      <div className="form-container">
        {activeTab === 'login' && (
          <form onSubmit={handleLogin}>
            <h2>LOGIN</h2>
            <div className="input-group">
              <label>Username</label>

              <input
                type="text"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
              <div className="input">
            <h4>forgot password?</h4>
            </div>
            
            </div>
            
            <div className="input-group">
              <button onClick={handleLogin}>LOGIN</button>
            </div>
             <br></br><br></br>
            <div className="text">
              <h4>New User? Sign up to Login.</h4>
              </div>
          </form>
        )}

        {activeTab === 'signup' && (
          <form onSubmit={handleSignup}>
            <h2>SIGN UP</h2>
            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                value={signupUsername}
                onChange={(e) => setSignupUsername(e.target.value)}
                required
              />
              
              
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Contact Number</label>
              <input
                type="number"
                value={signupNumber}
                onChange={(e) => setSignupNumber(e.target.value)}
                required
              />
              <div className="texts">
              <h4>Already a user? Go back to login.</h4>
              </div>
            </div>
            <div className="input-group">
              <button type="submit">SIGN UP</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
