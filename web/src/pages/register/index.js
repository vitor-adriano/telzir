import React from 'react'
import { Link } from 'react-router-dom'
import immer from 'immer'

import AuthenticationTemplate from 'components/templates/authentication'
import { Header } from 'components/typo'
import Card from 'components/card'
import Button from 'components/button'
import Input from 'components/input'

import api from 'services/api'

const Login = ({ history }) => {
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
    try {
      await api.post('/register', state)

      history.push({
        pathname: '/login',
        state: { email: state.email },
      })
    } catch (e) {
      //
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

          <Input.Text
            placeholder="E-mail"
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />

          <Input.Text
            placeholder="Senha"
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />

          <Input.Text
            placeholder="Confirmar senha"
            type="password"
            name="confirm_password"
            value={state.confirm_password}
            onChange={handleChange}
          />

          <Button submit>Cadastrar</Button>

          <Link to="/login">Já possuo uma conta.</Link>
        </form>
      </Card>
    </AuthenticationTemplate>
  )
}

export default Login
