import React from 'react'
import { Link } from 'react-router-dom'
import { has } from 'lodash'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const { name, plan } = useSelector(state => state.user.user)

  return (
    <div>
      <div>
        <span>Bem-vindo, {name}</span>
      </div>

      <div>
        <h3>Meu Plano</h3>

        <div>
          <div>
            {plan ? (
              <>
                <h3>{plan.name}</h3>
                <span>{plan.free_minutes} minutos gratuitos.</span>
              </>
            ) : (
              <span>Você não contratou nenhum de nossos planos.</span>
            )}
          </div>

          <Link to="/prices">{plan ? 'Trocar plano' : 'Ver planos'}</Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
