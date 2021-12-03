// React imports
import React, { useState } from "react";

// Models
import Auth from "../../models/auth";
import User from "../../models/user";

// Sass classes
import {
  login_form_container,
  gradient_border,
  login_form,
  button,
} from "./auth.module.scss";

// Recoil
import { userState } from "../../recoil/user";
import { useSetRecoilState } from "recoil";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const setUser = useSetRecoilState(userState);

  function handleSubmit(event) {
    event.preventDefault();

    Auth.login({ email, password }).then((json) => {
      if (json.status === 400) setError(json.message);
      if (json.status === 200) {
        localStorage.setItem("uid", json.token);
        User.show().then((json) => {
          setUser(json.user);
          props.history.push(`/user/${json.user._id}`);
        });
      }
    });
  }

  const formclasses = `${login_form_container} ${gradient_border}`;
  return (
    <div className={formclasses}>
      <h3>Login</h3>
      {error && <h5 style={{ color: "red", marginBottom: "30px" }}>{error}</h5>}
      <form onSubmit={handleSubmit} className={login_form}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="email@email.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="********"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input className={button} type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
