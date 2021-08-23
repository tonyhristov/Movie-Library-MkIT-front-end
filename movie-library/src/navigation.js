import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './pages/HomePage'

const Navigation = () => {
   return (
      <BrowserRouter>
         <Switch>
            <Route path='/' exact component={HomePage} />
         </Switch>
      </BrowserRouter>
   )
}

export default Navigation