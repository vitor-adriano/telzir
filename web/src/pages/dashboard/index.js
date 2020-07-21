import React from 'react'
import { has } from 'lodash'

const Dashboard = ({ location }) => {
  React.useEffect(() => {
    const boot = async () => {
      // TODO: get user plan info
    }

    boot()
  }, [])

  return (
    <div>
      <h3>Início</h3>

      {has(location, 'state.welcome') && (
        <div>
          <span>Bem-vindo, seu nome.</span>
        </div>
      )}

      <div>
        <h3>Meu Plano</h3>

        <div>
          <span>Você não contratou nenhum de nossos planos.</span>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
