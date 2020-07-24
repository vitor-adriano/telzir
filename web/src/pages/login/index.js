import React from 'react'
import { Link } from 'react-router-dom'
import { get } from 'lodash'
import immer from 'immer'

import api from 'services/api'

const Login = ({ location, history }) => {
  const [state, setState] = React.useState(() => {
    const email = get(location, 'state.email') || ''
    return {
      email,
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

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const response = await api.post('/login', state)
      localStorage.setItem('_token', JSON.stringify(response.data))
      history.push({ pathname: '/dashboard', state: { welcome: true } })
    } catch (e) {
      //
    }
  }

  return (
    <div>
      <div>
        <h2>Conectar</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <strong>E-mail</strong>
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <strong>Senha</strong>
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <Link to="/register">Quero me cadastrar!</Link>
            <button type="submit">Conectar</button>
          </div>
        </form>

        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  )
}

export default Login
