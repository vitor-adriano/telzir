import React from 'react'
import { Switch, Route as BaseRoute, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Login from 'pages/login'
import Register from 'pages/register'
import Dashboard from 'pages/dashboard'

const Route = ({ component: Component, isPrivate, ...baseProps }) => {
  const { isAuthenticated } = useSelector(state => state.user)

  return (
    <BaseRoute
      {...baseProps}
      render={props => {
        return isPrivate ? (
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        ) : !isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/dashboard" />
        )
      }}
    />
  )
}

const Routes = () => {
  return (
    <Switch>
      <BaseRoute exact path="/" render={() => <Redirect to="/login" />} />

      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route isPrivate path="/dashboard" component={Dashboard} />
    </Switch>
  )
}

export default Routes
