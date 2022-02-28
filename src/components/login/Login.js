import React, { useState } from "react";
import styles from "./Login.module.css";

import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInHandler = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const registerHandler = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className={styles.login}>
      <Link to='/'>
        <img
          className={styles.login_logo}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt=''
        />
      </Link>
      <div className={styles.login_container}>
        <h2>Sign in</h2>
        <form>
          <label>
            Email
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className={styles.login_signInButton} onClick={signInHandler}>
            Sign in
          </button>
        </form>
        <p>
          By signing in you agree to the AMAZON CLONE Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button
          className={styles.login_registerButton}
          onClick={registerHandler}
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
