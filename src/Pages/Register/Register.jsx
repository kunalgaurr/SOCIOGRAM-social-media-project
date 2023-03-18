import React from 'react';
import './Register.css';

export default function Register() {
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
          <div className="login-box">
            <input type="text" className="login-input" placeholder="Username" />
            <input type="email" className="login-input" placeholder="Email" />
            <input
              type="password"
              className="login-input"
              placeholder="Password"
            />
            <input
              type="password"
              className="login-input"
              placeholder="Password Again"
            />
            <button className="login-button">Sign Up</button>
            <button className="login-register-button">
              Log into your account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
