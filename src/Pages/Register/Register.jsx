import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity('Passwords does not match!');
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      try {
        await axios.post('/auth/register', user);

        navigate('/login');
      } catch (error) {
        console.log(error);
      }
    }
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
        <form className="login-right" onSubmit={handleClick}>
          <div className="login-box">
            <input
              type="text"
              className="login-input"
              placeholder="Username"
              ref={username}
              required
            />
            <input
              type="email"
              className="login-input"
              placeholder="Email"
              ref={email}
              required
            />
            <input
              type="password"
              className="login-input"
              placeholder="Password"
              ref={password}
              required
              minLength="6"
            />
            <input
              type="password"
              className="login-input"
              placeholder="Password Again"
              ref={passwordAgain}
              required
            />
            <button className="login-button" type="submit">
              Sign Up
            </button>
            <button className="login-register-button">
              Log into your account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
