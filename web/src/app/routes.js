import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from 'pages/login'
import Register from 'pages/register'
import Dashboard from 'pages/dashboard'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/login" />} />

      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  )
}

export default Routes
