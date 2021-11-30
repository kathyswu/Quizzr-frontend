import React, { useState } from "react";

import Auth from "../../models/auth";
import User from "../../models/user";

import "./auth.scss";

// Recoil
import { userState } from "../../recoil/user";
import { useSetRecoilState } from "recoil";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const setUser = useSetRecoilState(userState);

  function handleSubmit(event) {
    // Handle submit
    event.preventDefault();

    Auth.login({email, password}).then(json => {
      if (json.status === 400) setError(json.message);
      if (json.status === 200) {
        localStorage.setItem("uid", json.token);
        User.show().then(json => {
          setUser(json.user);
          props.history.push("/");
        });
      }
    });
  }

  return (
    <div className='form-container gradient-border'>
      <h3>Login</h3>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <form onSubmit={handleSubmit}>
          <label className='label' htmlFor='email'>
            Email
          </label>
          <input
            className='input'
            type='text'
            name='email'
            placeholder='email@email.com'
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <label className='label' htmlFor='password'>
            Password
          </label>
          <input
            className='input'
            type='password'
            name='password'
            placeholder='********'
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        <input className='button' type='submit' value='Login' />
      </form>
    </div>
  );
}

export default Login;