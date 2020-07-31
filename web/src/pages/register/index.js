import React from 'react'
import { Link } from 'react-router-dom'
import { get } from 'lodash'
import immer from 'immer'

import AuthenticationTemplate from 'components/templates/authentication'
import { Header, Warning } from 'components/typo'
import Card from 'components/card'
import Button from 'components/button'
import Input from 'components/input'

import api from 'services/api'

const Login = ({ history }) => {
  const [control, setControl] = React.useState({
    fetching: false,
    errors: {},
  })

  const [state, setState] = React.useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  })

  const handleChange = event => {
    const { name, value } = event.target
    setState(
      immer(draft => {
        draft[name] = value
      })
    )
  }

  const handleSubmit = async event => {
    event.preventDefault()

    setControl({
      fetching: true,
      errors: {},
    })

    try {
      await api.post('/register', state)

      history.push({
        pathname: '/login',
        state: { email: state.email },
      })
    } catch (e) {
      setControl({
        fetching: false,
        errors: get(e, 'response.data.errors'),
      })
    }
  }

  return (
    <AuthenticationTemplate>
      <Card>
        <Header>Cadastrar</Header>

        <form onSubmit={handleSubmit}>
          <Input.Text
            autoFocus
            placeholder="Nome completo"
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />

          {!!get(control, 'errors.name') && (
            <Warning>{control.errors.name}</Warning>
          )}

          <Input.Text
            placeholder="E-mail"
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />

          {!!get(control, 'errors.email') && (
            <Warning>{control.errors.email}</Warning>
          )}

          <Input.Text
            placeholder="Senha"
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />

          {!!get(control, 'errors.password') && (
            <Warning>{control.errors.password}</Warning>
          )}

          <Input.Text
            placeholder="Confirmar senha"
            type="password"
            name="confirm_password"
            value={state.confirm_password}
            onChange={handleChange}
          />

          <Button submit disabled={control.fetching}>
            Cadastrar
          </Button>

          <Link to="/login">Já possuo uma conta.</Link>
        </form>
      </Card>
    </AuthenticationTemplate>
  )
}

export default Login
