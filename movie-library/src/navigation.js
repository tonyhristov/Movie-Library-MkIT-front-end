import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import UserContext from "./context";
import HomePage from './pages/HomePage'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import AuthHomePage from './pages/authHome'

const Navigation = () => {
   const context = useContext(UserContext);
  const loggedIn = context.user && context.user.loggedIn;

   return (
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        
        
        <Route path="/login">
          {loggedIn ? <Redirect to="/" /> : <LoginPage />}
        </Route>

        <Route path="/register">
          {loggedIn ? <Redirect to="/" /> : <RegisterPage />}
        </Route>

        <Route path="/:userId">
          {loggedIn ? <AuthHomePage /> : <Redirect to="/login" />}
        </Route>
        
      </Switch>
    </BrowserRouter>
   )
}

export default Navigation