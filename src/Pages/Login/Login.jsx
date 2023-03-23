import React from 'react';
import './Login.css';

export default function Login() {
  const handleClick = (e) => {
    console.log('clicked');
    e.preventDefault();
  };
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">Sociogram</h3>
          <span className="login-desc">
            Connect with the friends and the world around you on Sociogram
          </span>
        </div>
        <div className="login-right">
          <form className="login-box" onSubmit={handleClick}>
            <input type="email" className="login-input" placeholder="Email" />
            <input
              type="password"
              className="login-input"
              placeholder="Password"
            />
            <button className="login-button">Log In</button>
            <span className="login-forgot">Forgot Password?</span>
            <button className="login-register-button">
              Create a new account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
