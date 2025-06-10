import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = ({handleLogin}) => {

  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>EMPLOYEE MANAGEMENT SYSTEM</h1>

      <div className={styles.loginBox}>
        <form onSubmit={submitHandler} className={styles.form}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Email"
            className={styles.input}
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Password"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
