import React from 'react'
import { Link } from 'react-router-dom'
import immer from 'immer'

const Login = ({ location, history }) => {
  const [state, setState] = React.useState(() => {
    const { email } = location.state || ''
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

    history.push({ pathname: '/dashboard', state: { welcome: true } })
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
      </div>
    </div>
  )
}

export default Login
