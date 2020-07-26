import React from 'react'
import { Switch, Route as BaseRoute, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ApplicationTemplate from 'components/templates/application'

import Login from 'pages/login'
import Register from 'pages/register'
import Dashboard from 'pages/dashboard'
import Prices from 'pages/prices'

const Route = ({ component: Component, isPrivate, ...baseProps }) => {
  const { isAuthenticated } = useSelector(state => state.user)

  return (
    <BaseRoute
      {...baseProps}
      render={props => {
        return isPrivate ? (
          isAuthenticated ? (
            <ApplicationTemplate>
              <Component {...props} />
            </ApplicationTemplate>
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
      <Route isPrivate path="/prices" component={Prices} />
    </Switch>
  )
}

export default Routes
