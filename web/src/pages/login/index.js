import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { get } from 'lodash'
import immer from 'immer'

import { loginUser } from 'actions/user'
import AuthenticationTemplate from 'components/templates/authentication'
import { Header, Warning } from 'components/typo'
import Card from 'components/card'
import Button from 'components/button'
import Input from 'components/input'

const Login = ({ location, history }) => {
  const dispatch = useDispatch()
  const { isFetching, errorMessage } = useSelector(state => state.user)

  const emailFromRegister = () => get(location, 'state.email') || ''

  const [state, setState] = React.useState(() => {
    return {
      email: emailFromRegister(),
      password: '',
    }
  })

  const handleChange = event => {
    const { name, value } = event.target
    setState(
      immer(draft => {
        draft[name] = value
      })
    )
  }

  const handleSubmit = event => {
    event.preventDefault()

    dispatch(loginUser(state))
  }

  return (
    <AuthenticationTemplate>
      <Card>
        <Header>Entrar</Header>

        <form onSubmit={handleSubmit}>
          <Input.Text
            autoFocus={!emailFromRegister()}
            placeholder="E-mail"
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />

          <Input.Text
            autoFocus={emailFromRegister()}
            placeholder="Senha"
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />

          {!!errorMessage && <Warning>{errorMessage}</Warning>}

          <Button submit disabled={isFetching}>
            Conectar
          </Button>

          <Link to="/register">Quero me cadastrar!</Link>
        </form>
      </Card>
    </AuthenticationTemplate>
  )
}

export default Login
