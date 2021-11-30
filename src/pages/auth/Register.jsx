import React, { useState } from "react";

import Auth from "../../models/auth";

import {register_form_container, gradient_border, register_form, button} from "./auth.module.scss";

// Recoil
import { userState } from "../../recoil/user";
import { useSetRecoilState } from "recoil";


function Register(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = { username, email, password }
    Auth.register(data).then(json => {
      if (json.status === 201) props.history.push("/login");
      if (json.status === 400) setError(json.message);
    });
  }

  const formclasses = `${register_form_container} ${gradient_border}`;
  return (
    <div className={formclasses}>
      <h3>Register now</h3>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <form onSubmit={handleSubmit} className={register_form}>
          <label htmlFor='username'>
            Username
          </label>
          <input
            className='input'
            placeholder='Jasper Smith'
            type='text'
            name='username'
            onChange={e => setUsername(e.target.value)}
            value={username}
          />
          <label htmlFor='email'>
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
          <label htmlFor='password'>
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
        <input className={button} type='submit' value='Sign up' />
      </form>
    </div>
  );
}

export default Register;