import React, { Component, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./index.module.css";
import PageLayout from "../../components/page-layout";
import UserContext from "../../context";
import authenticate from "../../utils/authenticate";
import Input from "../../components/input";
import Button from "../../components/button";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(UserContext);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    await authenticate(
      "http://localhost:9999/api/user/register",
      {
        username,
        password,
      },
      (user) => {
        context.logIn(user);
        history.push(`/home/${user.id}`);
      },
      (e) => {
        alert("Username or Password are not valid! Please try correct ones.");
      }
    );
  };

  return (
    <PageLayout>
      
        <div className={styles.register}>
          <h1 className={styles["h1"]}>Register Page</h1>

          <div className={styles.form}>
            <form onSubmit={handleSubmit}>
                <Input id="username" placeholder="Username"
                onChange={(e) => setUsername(e.target.value)} 
                type="text" />
                <Input id="password"  placeholder="Password"
                onChange={(e) => setPassword(e.target.value)} 
                type="password"/>
                <Button text="Register"/>
            </form>
          </div>
        </div>
      
    </PageLayout>
  );
};

export default RegisterPage;