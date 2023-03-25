import React, { useContext, useRef } from 'react';

import { AuthContext } from '../../context/AuthContext';
import { loginCall } from '../../apiCalls';

import './Login.css';

export default function Login() {
  const email = useRef();
  const password = useRef();

  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
    e.preventDefault();
  };

  console.log(user);
  console.log(isFetching);
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
            <input
              type="email"
              className="login-input"
              placeholder="Email"
              ref={email}
              disabled={isFetching}
              required
            />
            <input
              type="password"
              className="login-input"
              placeholder="Password"
              minLength="6"
              ref={password}
              disabled={isFetching}
              required
            />
            <button className="login-button" disabled={isFetching}>
              {isFetching ? 'Loading...' : 'Log In'}
            </button>
            <span className="login-forgot">Forgot Password?</span>
            <button className="login-register-button">
              {isFetching ? 'Loading...' : 'Create new account'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
