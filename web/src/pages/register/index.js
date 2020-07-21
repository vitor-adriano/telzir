import React from 'react'
import { Link } from 'react-router-dom'
import immer from 'immer'

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

    history.push({ pathname: '/login', state: { email: state.email } })
  }

  return (
    <div>
      <div>
        <h2>Cadastrar</h2>

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
            <strong>Confirmar Senha</strong>
            <input
              type="password"
              name="confirm_password"
              value={state.confirm_password}
              onChange={handleChange}
            />
          </div>

          <div>
            <Link to="/login">Já possuo uma conta.</Link>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
