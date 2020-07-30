import React from 'react'

import { Link } from 'components/button'

import StyledComponent from './styles'

const UserPlan = ({ plan }) => {
  return (
    <StyledComponent>
      <div>
        {plan ? (
          <>
            <h3>{plan.name}</h3>
            <span>{plan.free_minutes} minutos gratuitos</span>
          </>
        ) : (
          <span>Você não possui nenhum de nossos planos.</span>
        )}
      </div>

      <Link to="/prices">{plan ? 'Trocar plano' : 'Ver planos'}</Link>
    </StyledComponent>
  )
}

export default UserPlan
