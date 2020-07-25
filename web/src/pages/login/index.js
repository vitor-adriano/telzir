import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { get } from 'lodash'
import immer from 'immer'

import { loginUser } from 'actions/user'

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
    <div>
      <div>
        <h2>Conectar</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <strong>E-mail</strong>
            <input
              autoFocus={!emailFromRegister()}
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <strong>Senha</strong>
            <input
              autoFocus={emailFromRegister()}
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
            />
          </div>

          {!!errorMessage && (
            <div>
              <span>{errorMessage}</span>
            </div>
          )}

          <div>
            <Link to="/register">Quero me cadastrar!</Link>
            <button type="submit" disabled={isFetching}>
              Conectar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
